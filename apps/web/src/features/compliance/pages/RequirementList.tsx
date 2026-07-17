import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../../components/ui/card';
import { useCompliance } from '../hooks/useCompliance';

export const RequirementList: React.FC = () => {
  const navigate = useNavigate();
  // Fetching real data from the backend!
  const { data: frameworks, loading } = useCompliance();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'PASSED': return 'border-emerald-500 text-emerald-400 bg-emerald-500/10';
      case 'FLAGGED': return 'border-rose-500 text-rose-400 bg-rose-500/10';
      default: return 'border-amber-500 text-amber-400 bg-amber-500/10';
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6 text-left">
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">Compliance Tracking Frameworks</h1>
        <p className="text-sm text-[#94A3B8] mt-1">Operational audit requirements mapped across active global jurisdictions.</p>
      </div>

      <div className="space-y-4">
        {loading ? (
          <p className="text-slate-400 text-sm">Loading frameworks from API...</p>
        ) : (
          frameworks.map((item) => (
            <Card key={item.id} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="space-y-1.5 text-left max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-[#64748B]">{item.id}</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">{item.jurisdiction}</span>
                </div>
                <h3 className="text-base font-bold text-white tracking-tight">{item.title}</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">{item.description}</p>
              </div>

              <div className="flex items-center gap-4 self-start sm:self-center">
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide border ${getStatusColor(item.status)}`}>
                  {item.status.replace('_', ' ')}
                </span>
                <button 
                  onClick={() => navigate(`/compliance/${item.id}`)}
                  className="px-3 py-1.5 text-xs font-semibold bg-[#243041] border border-white/5 rounded-lg text-white hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  Review Audit Log
                </button>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default RequirementList;