import { useState, useEffect } from 'react';
import { clusterApiUrl, Connection, PublicKey, Transaction } from '@solana/web3.js';
import { getOrCreateAssociatedTokenAccount, createTransferInstruction, TOKEN_PROGRAM_ID } from '@solana/spl-token';

import { playGame, getGameRankings } from '../../api/games';

import styles from '../../css/Dashboard.module.css';

const faceRankings = [ "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const entryFee = 50;
const pacesAddress = new PublicKey("CdQseFmnPh2JBiz5747dJ6oYXK9NKnbdFRfiXTcZuaXT"); // TODO: change from ACES MINT to PACES address (top)
const toWalletAddress = new PublicKey("3y5BXpxZsKqEab8HNYVx2MN77bkiZmCtpZ74RnXkrqjM"); // TODO: change to 3y5BXpxZsKqEab8HNYVx2MN77bkiZmCtpZ74RnXkrqjM

const Dashboard = (props) => {
    const { wallet, gameId, rank, setRank, rankings, setRankings, reloadRankings, setReloadRankings, pacesBalance, reloadPaces, setReloadPaces } = props;
    const [ acesCards, setAcesCards ] = useState([]);
    const [ wildCards, setWildCards ] = useState([]);
    const [ bestHand, setBestHand ] = useState();

    let maxEntries;
    if (gameId.substring(0,7) === "tourney") maxEntries = -1;
    else maxEntries = 20;
    const [ entries, setEntries ] = useState(maxEntries);

    // Get available cards
    useEffect(() => {
        if (bestHand && reloadRankings === 0) {
            setAcesCards(bestHand.aces ? bestHand.aces : []);
            setWildCards(bestHand.wildCards);
        }

    }, [wallet.publicKey, gameId, bestHand, reloadRankings, setAcesCards, setWildCards]);

    // Get best hand from rankings
    useEffect(() => {
        if (rankings) {
            let i = rankings.map(entry => entry.user).indexOf(wallet.publicKey.toString());
            if (i !== -1) setBestHand(rankings[i]);

            // Get num of entries at login
            let count = 0;
            for (let i = 0; i < rankings.length; i++) {
                if (rankings[i].user === wallet.publicKey.toString()) { 
                    count += 1;
                }
            }
            setEntries(count);
        }

    }, [wallet.publicKey, rankings, setEntries]);

    const [ playAgainButton, setPlayAgainButton ] = useState("PLAY AGAIN");

    // Create a game entry request
    const createEntry = () => {
        setPlayAgainButton("Thinking...");
        let connection = new Connection(clusterApiUrl("mainnet-beta"));

        // Pay entry fee then play
        let pacesMint = new PublicKey(pacesAddress);
        let toWalletPubkey = new PublicKey(toWalletAddress);
        let pacesPubkey = new PublicKey(pacesMint);

        getOrCreateAssociatedTokenAccount(connection, wallet.publicKey, pacesPubkey, wallet.publicKey, wallet.signTransaction) // Get user's token account
            .then(fromTokenAccount => {
                console.log(fromTokenAccount.address.toString())

                getOrCreateAssociatedTokenAccount(connection, wallet.publicKey, pacesPubkey, toWalletPubkey, wallet.signTransaction) // Get vault token account
                    .then(toTokenAccount => {
                        console.log(toTokenAccount.address.toString())

                        // Create transfer tx
                        let tx = new Transaction().add(
                            createTransferInstruction(
                                fromTokenAccount.address,
                                toTokenAccount.address, 
                                wallet.publicKey,
                                entryFee,
                                [],
                                TOKEN_PROGRAM_ID
                            )
                        );

                        connection.getRecentBlockhash() // TODO: Sync pacakage versioning between @solana/web3.js and spl-token so in sync (for eslint)
                            .then(blockhash =>  {
                                console.log(blockhash);
                                tx.recentBlockhash = blockhash.blockhash;
                                tx.feePayer = wallet.publicKey;

                                wallet.signTransaction(tx)
                                    .then(signedTx => {
                                        connection.sendRawTransaction(signedTx.serialize())
                                            .then(signature => {
                                                console.log(`${entryFee} PACES transferred to ${toWalletPubkey.toString()}. Tx signature: ${signature}`);
                                                
                                                playGame(wallet.publicKey, gameId)
                                                    .then(entry => {
                                                        if (entry && entry !== {}) {
                                                            setAcesCards(entry.aces);
                                                            setWildCards(entry.wildCards);
                                                            if (wallet.publicKey) {
                                                                getGameRankings(gameId).then(entries => {
                                                                    setRankings(entries);
                                                                    if (entries) {
                                                                        let r = entries.map(e => e.user).indexOf(wallet.publicKey.toString());
                                                                        setRank(r === -1 ? "?" : r + 1);
                                                                        if (r !== -1) setBestHand(entries[r]); 
                                                                    }
                                                                })
                                                            }
                                                            console.log("setting state");
                                                            setReloadRankings(reloadRankings + 1);
                                                            setReloadPaces(reloadPaces + 1);
                                                            setPlayAgainButton("PLAY AGAIN");
                                                            console.log("state set")
                                                        }
                                                });
                                            })
                                            .catch(e => console.log("Failed sending transaction."));
                                    })
                                    .catch(e => {
                                        setPlayAgainButton("PLAY AGAIN"); 
                                        console.log("Transaction signature cancelled.");
                                    });
                            });
                    });
            });
    };

    return (
        <div className={styles.DashContainer}>
            <div className={styles.Dashboard}>
                <div className={styles.Play}>
                    {
                        bestHand ? (
                            !bestHand.handType ? (
                                <>
                                    <p>Need at least 1 Aces NFT to play the card contest.</p>
                                    <button disabled={!pacesBalance || pacesBalance < entryFee ? true : false}
                                        onClick={() => createEntry()}
                                    >
                                            PLAY
                                    </button>
                                    <p>{rankings ? `Rank: ${rank}/${rankings.length}` : `Rank`}</p>
                                </>
                            ) : (
                                <>
                                    <p>{`${(bestHand.handType[0].toUpperCase() + bestHand.handType.slice(1)).replace("-", " ")}`}</p>
                                    <div className={styles.Hand}>
                                        {
                                            bestHand.hand
                                                .sort((a, b) => 
                                                    (faceRankings.indexOf(b.face.length === 1 ? b.face : b.face[0].toUpperCase()) - faceRankings.indexOf(a.face.length === 1 ? a.face : a.face[0].toUpperCase())))
                                                .map( (card, i) => 
                                                <div key={i} >
                                                    {
                                                        card.image ? (
                                                            <img src={card.image} alt={card.face + " of " + card.suit}/>
                                                        ) : (
                                                            <img src={`/images/wildCards/${card.face}${card.suit}.png`} alt={card.face + " of " + card.suit}/>
                                                        )
                                                    }
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className={styles.Replay}>
                                        <div className={styles.Stats}>
                                            <p><b>Rank: </b>{rankings ? `${rank}/${rankings.length}` : ``}</p>
                                            <p><b>Entries: </b>{maxEntries !== -1 ? `${entries}/${maxEntries}` : `${entries}`}</p>
                                        </div>
                                        <button onClick={() => createEntry()} 
                                            disabled={(entries && entries >= maxEntries && maxEntries !== -1) || playAgainButton !== "PLAY AGAIN" || acesCards.length === 0 ? true : false}
                                        >
                                            {playAgainButton}
                                        </button>
                                    </div>
                                </>
                            )
                        ) : (
                            <>
                                <p>Best Hand</p>
                                <button 
                                    onClick={() => createEntry()}
                                    disabled={!pacesBalance || pacesBalance < entryFee ? true : false}
                                >
                                    PLAY
                                </button>
                                <p>{rankings ? `Rank: ${rank}/${rankings.length}` : `Rank`}</p>
                            </>
                        )
                    }
                </div>
                <hr/>
                <div className={styles.Cards}>
                    <div className={styles.CardGrid}>
                        <div className={styles.Headline}>
                            <p>Table Cards</p>
                        </div>
                    {
                        wildCards.map( (card, i) => 
                            <div key={i} className={styles.Card}>
                                <img src={`/images/wildCards/${card.face}${card.suit}.png`} alt={card.face + " of " + card.suit}/>
                            </div>
                        )
                    }
                        <div className={styles.Headline}>
                            <p>ACES</p>
                        </div>
                    {
                        (acesCards && acesCards.length > 0) ? (acesCards
                            .map( (card, i) => 
                                <div key={i} className={styles.Card}>
                                    <img src={card.image} alt={card.face + " of " + card.suit}/>
                                </div>
                        )) : (
                            <></>
                            )
                    }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;