import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { setAllowed, requestAccess, getNetwork } from '@stellar/freighter-api';
import { ShieldIcon } from '../icons';

export const Navbar: React.FC = () => {
  const [pubKey, setPubKey] = useState<string | null>(null);
  const [network, setStellarNetwork] = useState<string>('Not Connected');
  const [isConnecting, setIsConnecting] = useState(false);

  const connectWallet = async () => {
    setIsConnecting(true);
    try {
      // 1. Request permission to connect
      await setAllowed();
      
      // 2. Fetch the wallet address
      const accessResponse = await requestAccess();
      const key = typeof accessResponse === 'string' 
        ? accessResponse 
        : accessResponse?.address;
        
      if (key) {
        setPubKey(key);
        
        // 3. Fetch the active network
        const netResponse = await getNetwork();
        const netString = typeof netResponse === 'string' 
          ? netResponse 
          : netResponse?.network || 'Unknown Network';
          
        setStellarNetwork(netString);
      }
    } catch (e) {
      console.error("User declined connection or Freighter is not installed", e);
    } finally {
      setIsConnecting(false);
    }
  };

  const truncateKey = (key: string) => `${key.slice(0, 5)}...${key.slice(-4)}`;

  return (
    <nav className="w-full bg-[#0B1220] border-b border-white/5 h-16 flex items-center justify-between px-6 sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <ShieldIcon className="w-6 h-6 text-indigo-500" />
        <Link to="/" className="text-white font-bold tracking-tight text-lg">
          Stellar Watchdog
        </Link>
      </div>
      
      <div className="flex items-center gap-4">
        {pubKey ? (
          <div className="flex items-center gap-3 bg-[#1E293B] px-4 py-2 rounded-lg border border-white/10">
            <div className="flex flex-col text-right">
              <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">{network}</span>
              <span className="text-xs font-mono text-white">{truncateKey(pubKey)}</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/50">
              <ShieldIcon className="w-4 h-4 text-indigo-400" />
            </div>
          </div>
        ) : (
          <button
            onClick={connectWallet}
            disabled={isConnecting}
            className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#1E293B] hover:bg-[#334155] rounded-lg transition-colors border border-white/10 cursor-pointer"
          >
            {isConnecting ? 'Connecting...' : 'Connect Freighter'}
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;