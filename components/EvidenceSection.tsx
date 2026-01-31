import React from 'react';

export const EvidenceSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#050505] text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded bg-white/10 text-white/70 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 border border-white/5">
            The Methodology
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            THE SCIENTIFIC FOUNDATION
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto">
            We didn't invent this method. We reverse-engineered it from 125,000 resumes and internal hiring playbooks.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-[#121212] border border-[#333] p-8 md:p-10 rounded-xl hover:border-white/20 transition-all duration-300 group">
                <div className="flex items-center gap-2 mb-6">
                    <div className="h-1 w-1 bg-white rounded-full"></div>
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Google "XYZ" Standard</div>
                </div>
                
                <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-white/90">
                    Internal Protocol, Google People Operations
                </h3>
                
                <div className="space-y-6 text-gray-400 text-sm leading-7">
                    <div>
                        <strong className="text-white block mb-1">The Context</strong>
                        Google receives over 3 million applications annually and hires just 0.2%. To process this volume, they ignore subjective descriptions entirely.
                    </div>
                    <div>
                        <strong className="text-white block mb-1">The Mechanism</strong>
                        Recruiters look for the "XYZ Formula": <em className="text-white/80">Accomplished [X] as measured by [Y], by doing [Z]</em>. This is the only way to prove value in a glance.
                    </div>
                    <div className="pt-4 border-t border-[#222]">
                        <strong className="text-white block mb-1">The Solution</strong>
                        Our software does not allow you to list "duties." It forces every bullet point into this rigid impact structure, ensuring you speak the native language of elite recruiters.
                    </div>
                </div>
            </div>

            {/* Card 2 */}
             <div className="bg-[#121212] border border-[#333] p-8 md:p-10 rounded-xl hover:border-white/20 transition-all duration-300 group">
                <div className="flex items-center gap-2 mb-6">
                    <div className="h-1 w-1 bg-white rounded-full"></div>
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">125,340 Resume Study</div>
                </div>

                <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-white/90">
                    Empirical Data Analysis
                </h3>

                <div className="space-y-6 text-gray-400 text-sm leading-7">
                    <div>
                        <strong className="text-white block mb-1">The Context</strong>
                        An algorithmic analysis of over 125,000 resumes matched against successful hiring outcomes revealed two mathematical constants that the 99% ignore.
                    </div>
                    <div>
                        <strong className="text-white block mb-1">The Data</strong>
                        <ul className="list-disc pl-4 space-y-1 marker:text-gray-600">
                            <li>Resumes between 475 and 600 words see <span className="text-white">2x interview rates</span>. (77% fail this).</li>
                            <li>Resumes with <span className="text-white">5+ hard metrics</span> are in the top 1% of performance.</li>
                        </ul>
                    </div>
                    <div className="pt-4 border-t border-[#222]">
                        <strong className="text-white block mb-1">The Solution</strong>
                        We lock your word count to the "Sweet Spot" and require a minimum of 5 data points before export, mathematically positioning you in the top quartile.
                    </div>
                </div>
            </div>

            {/* Card 3 */}
             <div className="bg-[#121212] border border-[#333] p-8 md:p-10 rounded-xl hover:border-white/20 transition-all duration-300 group">
                <div className="flex items-center gap-2 mb-6">
                    <div className="h-1 w-1 bg-white rounded-full"></div>
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">The "6-Second Scan" Behavior</div>
                </div>

                <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-white/90">
                    The Ladders Eye-Tracking Study
                </h3>

                <div className="space-y-6 text-gray-400 text-sm leading-7">
                    <div>
                        <strong className="text-white block mb-1">The Context</strong>
                        Recruiters do not read. They scan. Eye-tracking technology proves the average recruiter spends just 6 seconds on a CV before making a decision.
                    </div>
                    <div>
                        <strong className="text-white block mb-1">The Mechanism</strong>
                        Humans follow an "F-Pattern" reading behavior. Creative layouts, columns, photos, and graphics disrupt this flow, causing immediate cognitive friction and rejection.
                    </div>
                    <div className="pt-4 border-t border-[#222]">
                        <strong className="text-white block mb-1">The Solution</strong>
                        We utilize a "Single-Column Architecture" specifically engineered to align with the biological scanning patterns of a human recruiter.
                    </div>
                </div>
            </div>

            {/* Card 4 */}
             <div className="bg-[#121212] border border-[#333] p-8 md:p-10 rounded-xl hover:border-white/20 transition-all duration-300 group">
                <div className="flex items-center gap-2 mb-6">
                    <div className="h-1 w-1 bg-white rounded-full"></div>
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">The ATS Technical Reality</div>
                </div>

                <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-white/90">
                    Technical Specs: Workday, Taleo, Greenhouse
                </h3>

                <div className="space-y-6 text-gray-400 text-sm leading-7">
                    <div>
                        <strong className="text-white block mb-1">The Context</strong>
                        99% of Fortune 500 companies filter candidates through legacy Applicant Tracking Systems (ATS) before a human ever sees them.
                    </div>
                    <div>
                        <strong className="text-white block mb-1">The Failure</strong>
                        These systems are essentially text parsers. They cannot read tables, floating text boxes, or "creative" design elements found in Canva templates.
                    </div>
                    <div className="pt-4 border-t border-[#222]">
                        <strong className="text-white block mb-1">The Solution</strong>
                        We ignore design trends. We utilize "Plain Text Code Structure" and "Word Cloud Optimization" to ensure 100% parse rates and keyword indexing.
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};