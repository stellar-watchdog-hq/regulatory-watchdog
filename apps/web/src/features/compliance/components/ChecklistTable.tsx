import React, { useState, useEffect } from 'react';
import { ChevronDownIcon } from '../../../components/icons';

export type ComplianceStatus = 'PENDING_REVIEW' | 'PASSED' | 'FLAGGED';

export interface ComplianceChecklist {
  id: string;
  title: string;
  description: string;
  status: ComplianceStatus;
  jurisdiction: string;
  updatedAt: string;
  createdAt: string;
}

const STATUS_CONFIG: Record<ComplianceStatus, { label: string; dot: string; badge: string }> = {
  PASSED: { label: 'Passed', dot: 'bg-emerald-500', badge: 'bg-emerald-50 text-emerald-700 border border-emerald-200' },
  PENDING_REVIEW: { label: 'Pending Review', dot: 'bg-amber-400', badge: 'bg-amber-50 text-amber-700 border border-amber-200' },
  FLAGGED: { label: 'Flagged', dot: 'bg-rose-500', badge: 'bg-rose-50 text-rose-700 border border-rose-200' },
};

const STATUS_OPTIONS: ComplianceStatus[] = ['PASSED', 'PENDING_REVIEW', 'FLAGGED'];

const StatusBadge: React.FC<{ status: ComplianceStatus }> = ({ status }) => {
  const c = STATUS_CONFIG[status];
  return (
    <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold leading-none ${c.badge}`}>
      <span className={`w-1 h-1 rounded-full ${c.dot}`} />
      {c.label}
    </span>
  );
};

const JurisdictionPill: React.FC<{ label: string }> = ({ label }) => (
  <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[9.5px] font-bold bg-slate-100 text-slate-500 border border-slate-200 tracking-wider uppercase leading-none">
    {label}
  </span>
);

const ActionDropdown: React.FC<{ id: string; currentStatus: ComplianceStatus; onStatusChange: (id: string, status: ComplianceStatus) => void }> = ({ id, currentStatus, onStatusChange }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-1 px-2 py-1 text-[11px] font-medium text-slate-600 bg-white border border-slate-200 rounded hover:bg-slate-50 transition-colors"
      >
        Set Status
        <ChevronDownIcon className="w-2.5 h-2.5 text-slate-400" />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute right-0 mt-1 w-36 bg-white border border-slate-200 rounded shadow-md z-20 py-0.5">
            {STATUS_OPTIONS.map((s) => (
              <button
                key={s}
                onClick={() => { onStatusChange(id, s); setOpen(false); }}
                className={`w-full flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium text-left ${s === currentStatus ? 'bg-indigo-50 text-indigo-700' : 'text-slate-700 hover:bg-slate-50'}`}
              >
                <span className={`w-1 h-1 rounded-full ${STATUS_CONFIG[s].dot}`} />
                {STATUS_CONFIG[s].label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const ChecklistTable: React.FC<ChecklistTableProps> = ({ checklists, onStatusChange }) => {
  const [items, setItems] = useState<ComplianceChecklist[]>(checklists);
  useEffect(() => setItems(checklists), [checklists]);

  return (
    <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
      <div className="px-3.5 py-2.5 border-b border-slate-100 flex items-center justify-between">
        <div>
          <h3 className="text-[12px] font-bold text-slate-800">Tracking Matrix</h3>
          <p className="text-[10px] text-slate-400">{items.length} requirements loaded</p>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-100">
          <thead>
            <tr className="bg-slate-50">
              {['Requirement', 'Jurisdiction', 'Status', 'Actions'].map((h) => (
                <th key={h} className="px-3.5 py-1.5 text-left text-[9px] font-bold text-slate-400 uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-[12px]">
            {items.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50/40">
                <td className="px-3.5 py-2 max-w-xs">
                  <p className="font-semibold text-slate-800 truncate">{item.title}</p>
                  <p className="text-[10.5px] text-slate-400 truncate">{item.description}</p>
                </td>
                <td className="px-3.5 py-2"><JurisdictionPill label={item.jurisdiction} /></td>
                <td className="px-3.5 py-2"><StatusBadge status={item.status} /></td>
                <td className="px-3.5 py-2"><ActionDropdown id={item.id} currentStatus={item.status} onStatusChange={onStatusChange} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

interface ChecklistTableProps { checklists: ComplianceChecklist[]; onStatusChange: (id: string, status: ComplianceStatus) => void }
export default ChecklistTable;