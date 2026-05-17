import React from 'react';
import { ListIcon, FlagIcon, ShieldIcon } from '../../../components/icons';

export interface ComplianceStatsData {
  totalReviewed: number;
  activeFlags: number;
  passingFrameworks: number;
}

type Theme = 'slate' | 'rose' | 'emerald';

interface StatCardProps {
  label: string;
  value: number | string;
  sub: string;
  icon: React.ReactNode;
  theme: Theme;
}

const iconWrap: Record<Theme, string> = {
  slate:   'bg-slate-50   text-slate-500',
  rose:    'bg-rose-50    text-rose-500',
  emerald: 'bg-emerald-50  text-emerald-600',
};

const valueColor: Record<Theme, string> = {
  slate:   'text-slate-800',
  rose:    'text-rose-600',
  emerald: 'text-emerald-700',
};

const accentBar: Record<Theme, string> = {
  slate:   'bg-slate-200',
  rose:    'bg-rose-400',
  emerald: 'bg-emerald-400',
};

const StatCard: React.FC<StatCardProps> = ({ label, value, sub, icon, theme }) => (
  <div className="bg-white rounded-xl border border-slate-200 px-3 py-2.5 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
    <div className={`self-stretch w-0.5 rounded-full ${accentBar[theme]}`} />
    
    <div className={`w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 ${iconWrap[theme]}`}>
      {icon}
    </div>

    <div className="flex-1 min-w-0">
      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-0.5 leading-none">
        {label}
      </p>
      <p className={`text-xl font-bold tabular-nums leading-none ${valueColor[theme]}`}>
        {value}
      </p>
    </div>
    <div className="text-right hidden md:block">
      <span className="text-[10px] text-slate-400">{sub}</span>
    </div>
  </div>
);

const ComplianceStats: React.FC<{ stats: ComplianceStatsData }> = ({ stats }) => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
    <StatCard
      label="Total Reviewed Items"
      value={stats.totalReviewed}
      sub="Frameworks mapped"
      icon={<ListIcon className="w-3.5 h-3.5" />}
      theme="slate"
    />
    <StatCard
      label="Active Warning Flags"
      value={stats.activeFlags}
      sub="Requires review"
      icon={<FlagIcon className="w-3.5 h-3.5" />}
      theme="rose"
    />
    <StatCard
      label="Passing Frameworks"
      value={stats.passingFrameworks}
      sub="Fully verified"
      icon={<ShieldIcon className="w-3.5 h-3.5" />}
      theme="emerald"
    />
  </div>
);

export default ComplianceStats;