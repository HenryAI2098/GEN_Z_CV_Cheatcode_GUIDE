import React from 'react';
import { NavigationTab } from '../types';

interface NavigationProps {
  activeTab: NavigationTab;
  onTabChange: (tab: NavigationTab) => void;
}

const NAV_ITEMS = [
  { id: NavigationTab.OVERVIEW, label: 'Overview' },
  { id: NavigationTab.PREP, label: 'Strategic Prep' },
  { id: NavigationTab.STRUCTURE, label: 'Structure' },
  { id: NavigationTab.TOOLS, label: 'AI Tools' },
  { id: NavigationTab.CHECKLIST, label: 'Final Checklist' },
];

export const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-slate-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center py-4 md:h-20 gap-4 md:gap-8">
            
            {/* Brand - Top on mobile, Left on Desktop */}
            <div className="flex-shrink-0 flex items-center justify-between">
                <div 
                    className="font-bold text-xl cursor-pointer text-slate-800 tracking-tight flex items-center gap-2"
                    onClick={() => {
                        onTabChange(NavigationTab.OVERVIEW);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                >
                    Resume Cheat Code <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 uppercase border border-slate-200">2026</span>
                </div>
            </div>

            {/* Scrollable Tabs - Below on mobile, Right on Desktop */}
            <div className="flex-1 -mx-4 px-4 md:mx-0 md:px-0 overflow-x-auto no-scrollbar">
                <div className="flex items-center gap-2 md:gap-3 min-w-max pb-1 md:pb-0">
                    {NAV_ITEMS.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => {
                            onTabChange(item.id);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className={`
                            group relative px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 border flex items-center gap-2 select-none
                            ${activeTab === item.id 
                            ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-slate-100 scale-100' 
                            : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900'}
                        `}
                    >
                        {/* "Tick" indicator for active state */}
                        {activeTab === item.id && (
                             <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        )}
                        {item.label}
                    </button>
                    ))}
                </div>
            </div>
        </div>
      </div>
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </nav>
  );
};