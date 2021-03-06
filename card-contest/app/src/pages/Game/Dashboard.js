import { useState, useEffect } from 'react';

import { playGame, getGameRankings } from '../../api/games';

import styles from '../../css/Dashboard.module.css';

const faceRankings = [ "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

const Dashboard = (props) => {
    const wallet = props.wallet;
    const gameId = props.gameId;
    const rank = props.rank;
    const setRank = props.setRank;
    const rankings = props.rankings;
    const setRankings = props.setRankings;
    const reloadRankings = props.reloadRankings;
    const setReloadRankings = props.setReloadRankings;
    const [ acesCards, setAcesCards ] = useState([]);
    const [ wildCards, setWildCards ] = useState([]);
    const [ bestHand, setBestHand ] = useState();

    let maxEntries;
    if (gameId.substring(0,2) === "30") maxEntries = 15; // Roll over day from deuces to 4's
    else maxEntries = 20;
    const [ entries, setEntries ] = useState(maxEntries);

    // Get available cards
    useEffect(() => {
        if (bestHand && reloadRankings === 0) {
            setAcesCards(bestHand.aces ? bestHand.aces : []);
            setWildCards(bestHand.wildCards);
        }

    }, [wallet, gameId, bestHand, reloadRankings, setAcesCards, setWildCards]);

    // Get best hand from rankings
    useEffect(() => {
        if (rankings) {
            let i = rankings.map(entry => entry.user).indexOf(wallet);
            if (i !== -1) setBestHand(rankings[i]);

            // Get num of entries at login
            let count = 0;
            for (let i = 0; i < rankings.length; i++) {
                if (rankings[i].user === wallet) { 
                    count += 1;
                }
            }
            setEntries(count);
        }

    }, [wallet, rankings, setEntries]);

    const [ playAgainButton, setPlayAgainButton ] = useState("PLAY AGAIN");

    // Create a game entry request
    const createEntry = () => {
        setPlayAgainButton("Thinking...");
        playGame(wallet, gameId).then(entry => {
            if (entry && entry !== {}) {
                setAcesCards(entry.aces);
                setWildCards(entry.wildCards);
                if (wallet) {
                    getGameRankings(gameId).then(entries => {
                        setRankings(entries);
                        if (entries) {
                            let r = entries.map(e => e.user).indexOf(wallet);
                            setRank(r === -1 ? "?" : r + 1);
                            if (r !== -1) setBestHand(entries[r]); 
                        }
                    })
                }
                setReloadRankings(reloadRankings + 1);
                setPlayAgainButton("PLAY AGAIN");
            }
        })
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
                                    <button onClick={() => createEntry()} disabled={rankings === false}>PLAY</button>
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
                                            <p><b>Entries: </b>{`${entries}/${maxEntries}`}</p>
                                        </div>
                                        <button onClick={() => createEntry()} 
                                            disabled={(entries && entries >= maxEntries) || playAgainButton !== "PLAY AGAIN" || acesCards.length === 0 ? true : false}>
                                                {playAgainButton}
                                        </button>
                                    </div>
                                </>
                            )
                        ) : (
                            <>
                                <p>Best Hand</p>
                                <button onClick={() => createEntry()}>PLAY</button>
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