import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '../../../components/ui/card';
import { ShieldIcon, PlusIcon, FlagIcon, ListIcon } from '../../../components/icons';

export const DashboardOverview: React.FC = () => {
  const navigate = useNavigate();
  const [stellarData, setStellarData] = useState<any>(null);

  // Fetch the live Horizon data from our new backend endpoint
  useEffect(() => {
    fetch('http://localhost:3000/compliance/stellar/network-status')
      .then((res) => res.json())
      .then((json) => setStellarData(json.data))
      .catch((err) => console.error('Failed to fetch Stellar telemetry:', err));
  }, []);

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 text-left">
      
      {/* Executive Welcome Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Executive Command Center</h1>
          <p className="text-sm text-[#94A3B8] mt-1">Real-time regulatory compliance mapping and ecosystem validation telemetry.</p>
        </div>
        <button
          onClick={() => navigate('/compliance/new')}
          className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-900/20 self-start sm:self-center"
        >
          <PlusIcon className="w-3.5 h-3.5" />
          Provision Framework
        </button>
      </div>

      {/* KPI Dashboard Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <Card>
          <CardContent className="p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#243041] border border-white/5 flex-shrink-0">
              <ListIcon className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest">Active Frameworks</p>
              <p className="text-xl font-bold text-white mt-0.5 tracking-tight">5 Mapped</p>
              <p className="text-[11px] text-[#94A3B8] mt-0.5">Across 4 global grids</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#243041] border border-white/5 flex-shrink-0">
              <ShieldIcon className="w-4 h-4 text-sky-400" />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest">Jurisdictions Tracked</p>
              <p className="text-xl font-bold text-white mt-0.5 tracking-tight">4 Scopes</p>
              <p className="text-[11px] text-[#94A3B8] mt-0.5">EU-MiCA, FATF, FinCEN</p>
            </div>
          </CardContent>
        </Card>

        <Card glow={true}>
          <CardContent className="p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#243041] border border-white/5 flex-shrink-0">
              <FlagIcon className="w-4 h-4 text-rose-400" />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest">Critical Exceptions</p>
              <p className="text-xl font-bold text-white mt-0.5 tracking-tight">1 Active</p>
              <p className="text-[11px] text-[#94A3B8] mt-0.5">Requires immediate action</p>
            </div>
          </CardContent>
        </Card>

        {/* LIVE STELLAR METRIC CARD */}
        <Card glow={stellarData?.status === 'online'}>
          <CardContent className="p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#243041] border border-white/5 flex-shrink-0">
              <ShieldIcon className={`w-4 h-4 ${stellarData?.status === 'online' ? 'text-emerald-400' : 'text-[#64748B]'}`} />
            </div>
            <div className="text-left overflow-hidden">
              <p className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest">Live Horizon Sync</p>
              <p className="text-xl font-bold text-white mt-0.5 tracking-tight truncate">
                {stellarData ? `L: ${stellarData.latestLedger}` : 'Syncing...'}
              </p>
              <p className="text-[11px] text-[#94A3B8] mt-0.5 truncate">
                {stellarData ? `Proto v${stellarData.protocolVersion} | ${stellarData.network}` : 'Awaiting connection'}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Modern Asymmetrical Analytics Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* Trend Analysis Box */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <h3 className="text-xs font-bold text-[#94A3B8] uppercase tracking-widest">Ecosystem Compliance Trajectory</h3>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-64 flex items-center justify-center bg-[#0B1220] rounded-xl border border-white/5 shadow-inner relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at center, #818cf8 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B] z-10">Waiting for sufficient on-chain historical data...</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Risk Intelligence Stream */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <h3 className="text-xs font-bold text-[#94A3B8] uppercase tracking-widest">Risk Intelligence Feed</h3>
            </CardHeader>
            <CardContent className="p-0 divide-y divide-white/5">
              {[
                { time: '09:30 UTC', alert: 'US-SEC Stablecoin Attestation Flagged', region: 'US-SEC', style: 'text-rose-400' },
                { time: '10:12 UTC', alert: 'FATF Travel Rule Data Audit Pending', region: 'FATF', style: 'text-amber-400' },
                { time: '11:05 UTC', alert: 'EU-MiCA Wallet Verification Cleared', region: 'EU-MiCA', style: 'text-emerald-400' },
              ].map((log, i) => (
                <div key={i} className="p-4 hover:bg-white/[0.01] transition-colors flex flex-col gap-1 text-left">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-mono text-[#64748B]">{log.time}</span>
                    <span className="font-bold text-indigo-400">{log.region}</span>
                  </div>
                  <Link to="/compliance" className={`text-xs font-bold leading-tight mt-1 hover:underline ${log.style}`}>
                    {log.alert}
                  </Link>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;