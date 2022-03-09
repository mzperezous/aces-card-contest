// Card contest PACES wallet address: 3y5BXpxZsKqEab8HNYVx2MN77bkiZmCtpZ74RnXkrqjM
// PACES token mint address: CdQseFmnPh2JBiz5747dJ6oYXK9NKnbdFRfiXTcZuaXT

// React, react-router, and react-bootstrap imports
import React, { useState, useEffect, useMemo } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

// Solana-specific imports
import { clusterApiUrl, Connection, PublicKey } from '@solana/web3.js';
import {
  getLedgerWallet,
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletExtensionWallet,
  getSolletWallet,
  getTorusWallet,
} from '@solana/wallet-adapter-wallets';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider, useWallet } from '@solana/wallet-adapter-react';

import { getGameRankings } from './api/games';

// Pages
import Home from './pages/Home/Home';
import Game from './pages/Game/Game';

const pacesAddress = new PublicKey("CdQseFmnPh2JBiz5747dJ6oYXK9NKnbdFRfiXTcZuaXT");

const App = () => {
  const wallet = useWallet();

  const now = new Date();
  const utc = new Date(now.getTime() + now.getTimezoneOffset() * 60000);

  const gameType = (["10", "11", "12", "13", "14", "16", "17"].indexOf(String(utc.getDate()).padStart(2, '0')) === -1) ? "8swild" : "4swild";
  // if ([ "24", "25", "26", "27", "28", "29", "30" ].indexOf(String(utc.getDate()).padStart(2, '0')) !== -1) gameType = "deuceswild";
  // else if ([ "31", "01", "02", "03", "04", "05", "06" ].indexOf(String(utc.getDate()).padStart(2, '0')) !== -1) gameType = "4swild";
  // else if (["08", "09", "10", "11", "12", "13"].indexOf(String(utc.getDate()).padStart(2, '0')) !== -1) gameType = "secretwild";
  // else if (["14", "15", "16", "17"].indexOf(String(utc.getDate()).padStart(2, '0')) !== -1) gameType = "8swild";
  // else gameType = "5card";

  const gameId = String(utc.getDate()).padStart(2,'0') + String(utc.getMonth()).padStart(2,'0') + String(utc.getFullYear()) + gameType;

  const [ rankings, setRankings ] = useState(false);
  const [ reloadRankings, setReloadRankings ] = useState(0);
  const [ pacesBalance, setPacesBalance ] = useState();
  const [ reloadPaces, setReloadPaces ] = useState(0);

  // Get current game rankings
  useEffect(() => {
    getGameRankings(gameId).then(entries => {
        if (entries)
          setRankings(entries);
        else setRankings([]);
    })
  }, [wallet, gameId, reloadRankings, setRankings]);

  // Get PACES balance
  useEffect(() => {

    if (wallet.publicKey) {
      let connection = new Connection('https://solana-api.projectserum.com');

      connection.getParsedTokenAccountsByOwner(wallet.publicKey, {mint: pacesAddress})
        .then(accounts => {setPacesBalance(accounts.value[0].account.data.parsed.info.tokenAmount.amount || 0); console.log(accounts)})
        .catch(e => console.log(e));
    }

  }, [wallet, reloadPaces, setPacesBalance]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home wallet={wallet}/>}/>
        <Route path="/play" 
          element={
            <Game 
              wallet={wallet} 
              gameId={gameId} 
              rankings={rankings} 
              setRankings={setRankings} 
              reloadRankings={reloadRankings} 
              setReloadRankings={setReloadRankings}
              pacesBalance={pacesBalance}
              setReloadPaces={setReloadPaces}
            />
          }
        />
      </Routes>
    </>
  );
}

const AppWithProvider = () => {
  const endpoint = 'https://solana-api.projectserum.com';

  const walletOptions = useMemo(() => [
    getPhantomWallet(),
    getSlopeWallet(),
    getSolflareWallet(),
    getLedgerWallet()
  ], []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={walletOptions}>
          <BrowserRouter>
            <App/>
          </BrowserRouter>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default AppWithProvider;