import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { GridIcon, ShieldIcon, ListIcon } from '../components/icons';
import { Navbar } from '../components/shared/navbar';

export const DashboardLayout: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="flex h-screen w-screen bg-[#0B1220] text-[#F8FAFC] antialiased overflow-hidden">
      
      {/* ── Fixed Premium Interactive Sidebar ── */}
      <aside 
        className="bg-[#111827] border-r border-white/5 flex flex-col transition-all duration-300 select-none flex-shrink-0 z-20"
        style={{ width: isExpanded ? '260px' : '80px' }}
      >
        {/* Brand Shell */}
        <div 
          className="h-16 px-5 border-b border-white/5 flex items-center gap-3 cursor-pointer hover:bg-white/[0.02]"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-900/40">
            <ShieldIcon className="w-4 h-4 text-white" />
          </div>
          {isExpanded && (
            <div className="text-left animate-fadeIn">
              <span className="text-white font-bold text-sm tracking-tight block">Stellar Watchdog</span>
              <span className="text-indigo-400 text-[9px] font-bold uppercase tracking-widest block">Risk Intelligence</span>
            </div>
          )}
        </div>

        {/* Dynamic Navigation Map */}
        <nav className="flex-1 px-3 py-6 space-y-1.5 text-left">
          {isExpanded && <p className="px-3 mb-2 text-[9px] font-bold text-slate-500 uppercase tracking-widest">Core Infrastructure</p>}
          {[
            { path: '/dashboard', label: 'Overview', icon: <GridIcon className="w-4 h-4" /> },
            { path: '/compliance', label: 'Compliance Frameworks', icon: <ShieldIcon className="w-4 h-4" /> },
            { path: '/analytics', label: 'Analytics Engine', icon: <ListIcon className="w-4 h-4" /> },
          ].map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3.5 px-3 py-3 rounded-xl text-sm font-medium transition-all group ${
                  isActive ? 'bg-indigo-600 text-white' : 'text-[#94A3B8] hover:text-white hover:bg-[#1E293B]'
                }`
              }
            >
              <div className="flex-shrink-0">{item.icon}</div>
              {isExpanded && <span className="truncate">{item.label}</span>}
            </NavLink>
          ))}
        </nav>

        {/* Status Area Footer */}
        <div className="p-4 border-t border-white/5">
          <div className="flex items-center gap-3 px-2 py-2 rounded-xl bg-[#1E293B]/40 border border-white/5">
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            {isExpanded && <span className="text-xs text-[#94A3B8] font-medium truncate">Connected to Horizon API</span>}
          </div>
        </div>
      </aside>

      {/* ── Main Canvas Area ── */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Web3 Integrated Navbar */}
        <Navbar />

        {/* Content Box */}
        <main className="flex-1 overflow-y-auto bg-[#0B1220] text-left">
          <Outlet />
        </main>
      </div>

    </div>
  );
};

export default DashboardLayout;