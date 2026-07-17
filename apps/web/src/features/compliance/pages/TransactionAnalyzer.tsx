import React, { useState } from 'react';
import { ComplianceService } from '../services/compliance.service';
import type { TransactionAnalysis } from '../types/compliance';
import { ShieldIcon, FlagIcon, SpinnerIcon } from '../../../components/icons';
import { Card, CardHeader, CardContent } from '../../../components/ui/card';

export const TransactionAnalyzer: React.FC = () => {
  const [hash, setHash] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<TransactionAnalysis | null>(null);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!hash.trim()) return;
    
    setLoading(true);
    setError(null);
    setAnalysis(null);

    try {
      const result = await ComplianceService.analyzeTransaction(hash.trim());
      setAnalysis(result);
    } catch (err: any) {
      setError(err.message || 'Failed to analyze transaction. Ensure it is a valid Testnet hash.');
    } finally {
      setLoading(false);
    }
  };

  const getTierColor = (tier: string) => {
    if (tier === 'HIGH') return 'text-rose-400 bg-rose-500/10 border-rose-500';
    if (tier === 'MEDIUM') return 'text-amber-400 bg-amber-500/10 border-amber-500';
    return 'text-emerald-400 bg-emerald-500/10 border-emerald-500';
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 text-left">
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">Transaction Risk Analyzer</h1>
        <p className="text-sm text-[#94A3B8] mt-1">Cross-reference on-chain Stellar transactions against RegTech heuristic matrices.</p>
      </div>

      <Card>
        <CardContent className="p-6">
          <form onSubmit={handleAnalyze} className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter Stellar Testnet Transaction Hash..."
              value={hash}
              onChange={(e) => setHash(e.target.value)}
              className="flex-1 bg-[#1E293B] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-indigo-500 transition-colors"
            />
            <button
              type="submit"
              disabled={loading || !hash}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition-colors cursor-pointer"
            >
              {loading ? <SpinnerIcon className="w-4 h-4 animate-spin" /> : <ShieldIcon className="w-4 h-4" />}
              {loading ? 'Scanning Ledger...' : 'Audit Transaction'}
            </button>
          </form>
          {error && <p className="text-rose-400 text-sm mt-4">{error}</p>}
        </CardContent>
      </Card>

      {analysis && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fadeIn">
          {/* Risk Score Panel */}
          <Card className="lg:col-span-1 border-white/10 bg-[#111827]">
            <CardHeader>
              <h3 className="text-xs font-bold text-[#94A3B8] uppercase tracking-widest">Calculated Risk Score</h3>
            </CardHeader>
            <CardContent className="p-6 flex flex-col items-center justify-center py-10">
              <div className="relative flex items-center justify-center w-32 h-32 rounded-full border-4 border-[#1E293B]">
                <span className="text-4xl font-black text-white">{analysis.riskScore}</span>
              </div>
              <span className={`mt-6 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border ${getTierColor(analysis.riskTier)}`}>
                {analysis.riskTier} RISK
              </span>
            </CardContent>
          </Card>

          {/* Details & Flags Panel */}
          <Card className="lg:col-span-2 border-white/10 bg-[#111827]">
            <CardHeader>
              <h3 className="text-xs font-bold text-[#94A3B8] uppercase tracking-widest">Heuristic Audit Trail</h3>
            </CardHeader>
            <CardContent className="p-0 divide-y divide-white/5">
              <div className="p-5 flex flex-col gap-1 bg-white/[0.02]">
                <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest">Source Account</span>
                <span className="text-sm font-mono text-indigo-300 break-all">{analysis.sourceAccount}</span>
              </div>
              
              <div className="p-5 space-y-4">
                <h4 className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest">Evaluation Flags</h4>
                <div className="space-y-3">
                  {analysis.flags.map((flag, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-0.5">
                        {flag.type === 'Passed' ? (
                          <ShieldIcon className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <FlagIcon className={`w-4 h-4 ${flag.type === 'Warning' ? 'text-amber-400' : 'text-rose-400'}`} />
                        )}
                      </div>
                      <div>
                        <p className={`text-xs font-bold uppercase tracking-wider ${flag.type === 'Passed' ? 'text-emerald-400' : flag.type === 'Warning' ? 'text-amber-400' : 'text-rose-400'}`}>
                          {flag.type}
                        </p>
                        <p className="text-sm text-slate-300 mt-0.5">{flag.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default TransactionAnalyzer;