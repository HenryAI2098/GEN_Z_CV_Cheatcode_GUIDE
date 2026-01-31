import React from 'react';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { EvidenceSection } from './EvidenceSection';
import { NavigationTab } from '../types';

interface LandingPageProps {
  onNavigate: (tab: NavigationTab) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fadeIn w-full">
      {/* 1. HERO SECTION */}
      <section className="text-center py-24 px-6 bg-gradient-to-b from-lavender-50 to-white border-b border-lavender-100">
        <div className="max-w-4xl mx-auto">
             <span className="inline-block py-1 px-3 rounded-full bg-lavender-100 text-mauve-600 text-xs font-bold tracking-widest uppercase mb-6">
                Optimization Strategy
              </span>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-slate-900 tracking-tight">
                We Reverse-Engineered the Internal Playbooks of <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender-500 to-rose-500">Google, TikTok, Uber, and Lyft.</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
                Built on the insights of a lead recruiter with 10+ years on the other side of the hiring table and an algorithmic analysis of 125,340 resumes.
            </p>
             <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                 <Button onClick={() => onNavigate(NavigationTab.TOOLS)} className="shadow-xl shadow-lavender-200">Try AI Generator</Button>
                 <Button variant="outline" onClick={() => onNavigate(NavigationTab.PREP)}>Start Guide</Button>
            </div>
            
            <div className="text-xs font-bold text-slate-300 uppercase tracking-[0.3em] mb-6">As seen in the playbooks of</div>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-40 grayscale select-none">
                <span className="font-bold text-slate-800 text-xl font-serif">Google</span>
                <span className="font-bold text-slate-800 text-xl font-sans tracking-tighter">TikTok</span>
                <span className="font-bold text-slate-800 text-xl">Uber</span>
                <span className="font-bold text-slate-800 text-xl font-serif">The New York Times</span>
            </div>
        </div>
      </section>

      {/* 2. PROBLEM SECTION */}
      <section className="py-24 px-6 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16 text-slate-800">The Math is Against You.</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-8 rounded-2xl bg-rose-50/50 border border-rose-100">
                    <div className="text-5xl font-bold text-rose-400 mb-3 tracking-tighter">0.2%</div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Hire Rate</div>
                    <p className="text-slate-600 text-sm leading-relaxed">Google receives 3 million resumes a year. They hire 0.2% of them. The odds are statistically zero without a strategy.</p>
                </div>
                <div className="text-center p-8 rounded-2xl bg-white border border-slate-100 shadow-sm">
                    <div className="text-5xl font-bold text-slate-300 mb-3 tracking-tighter">77%</div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Failure Rate</div>
                    <p className="text-slate-600 text-sm leading-relaxed">77% of candidates miss the ideal word count sweet spot (475–600 words) proven to double interview rates.</p>
                </div>
                 <div className="text-center p-8 rounded-2xl bg-white border border-slate-100 shadow-sm">
                    <div className="text-5xl font-bold text-slate-300 mb-3 tracking-tighter">36%</div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Metric Void</div>
                    <p className="text-slate-600 text-sm leading-relaxed">36% of resumes do not include a single number, yet metrics are the #1 differentiator for high-paying roles.</p>
                </div>
            </div>
        </div>
      </section>

      {/* 3. SCIENTIFIC FOUNDATION (Dark Mode) */}
      <EvidenceSection />

      {/* 4. INSIDER SECRETS */}
      <section className="py-24 px-6 bg-lavender-50/30">
         <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16 text-slate-800">Insider Secrets</h2>
            <div className="grid md:grid-cols-3 gap-6">
                <Card highlight title="The 'Coffee Test'">
                    <p className="text-slate-600 text-sm mb-4">
                        "Would I want to get coffee with this person?"
                    </p>
                    <p className="text-slate-500 text-xs leading-relaxed">
                        We optimize hobbies. 'Watching TV' is forgettable. 'Restoring vintage motorcycles' signals curiosity. We ensure you pass the test.
                    </p>
                </Card>
                 <Card title="Risk Mitigation">
                    <p className="text-slate-600 text-sm mb-4">
                        The interview is an audition that starts at "Hello".
                    </p>
                    <p className="text-slate-500 text-xs leading-relaxed">
                        In a stack of qualified candidates, risks get cut. We strip 'red flags'—like trashing a current employer or over-explaining gaps.
                    </p>
                </Card>
                 <Card title="The 'Plug & Play' Pivot">
                    <p className="text-slate-600 text-sm mb-4">
                        Don't ask what they can do for you.
                    </p>
                    <p className="text-slate-500 text-xs leading-relaxed">
                        Our templates force you to state what problem you will solve for them immediately. Position yourself as the solution, not the requester.
                    </p>
                </Card>
            </div>
         </div>
      </section>

      {/* 5. FOOTER CTA */}
      <section className="py-24 px-6 bg-white text-center">
         <div className="max-w-2xl mx-auto">
             <h2 className="text-4xl font-bold mb-6 text-slate-900">Stop Waiting for Permission.</h2>
             <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                 The title on your badge is what HR decided. The work you've done is what actually matters. If you've been doing the work above your pay grade, you need to claim it.
             </p>
             <Button onClick={() => onNavigate(NavigationTab.STRUCTURE)} className="w-full sm:w-auto text-lg px-8 py-4 shadow-xl shadow-rose-200">Build the 0.2% Resume</Button>
         </div>
      </section>
    </div>
  );
};