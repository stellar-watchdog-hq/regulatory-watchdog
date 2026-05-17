import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../../components/ui/card';

export const RequirementList: React.FC = () => {
  const navigate = useNavigate();

  const mockFrameworks = [
    { id: 'clst-001', title: 'AML/KYC Identity Verification', jurisdiction: 'EU-MiCA', status: 'PASSED', color: 'border-emerald-500 text-emerald-400 bg-emerald-500/10' },
    { id: 'clst-002', title: 'Travel Rule Data Transmission', jurisdiction: 'FATF', status: 'PENDING', color: 'border-amber-500 text-amber-400 bg-amber-500/10' },
    { id: 'clst-003', title: 'Reserve Asset Attestation Protocol', jurisdiction: 'US-SEC', status: 'FLAGGED', color: 'border-rose-500 text-rose-400 bg-rose-500/10' },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6 text-left">
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">Compliance Tracking Frameworks</h1>
        <p className="text-sm text-[#94A3B8] mt-1">Operational audit requirements mapped across active global jurisdictions.</p>
      </div>

      {/* Main Framework Cards List Box */}
      <div className="space-y-4">
        {mockFrameworks.map((item) => (
          <Card key={item.id} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-1.5 text-left max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono text-[#64748B]">{item.id}</span>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">{item.jurisdiction}</span>
              </div>
              <h3 className="text-base font-bold text-white tracking-tight">{item.title}</h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">System tracking validation rules mapped to real-time execution matrices inside ecosystem networks.</p>
            </div>

            <div className="flex items-center gap-4 self-start sm:self-center">
              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide border ${item.color}`}>
                {item.status}
              </span>
              <button 
                onClick={() => navigate(`/compliance/${item.id}`)}
                className="px-3 py-1.5 text-xs font-semibold bg-[#243041] border border-white/5 rounded-lg text-white hover:bg-slate-700 transition-colors"
              >
                Review Audit Log
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RequirementList;