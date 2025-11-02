import Link from "next/link";

export default function Executive() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto mb-6">
        <Link href="/" className="inline-flex items-center text-gray-700 hover:text-gray-900 font-medium">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Templates
        </Link>
      </div>

      <div className="max-w-4xl mx-auto bg-white shadow-lg">
        {/* Header */}
        <div className="border-b-4 border-gray-800 px-12 pt-12 pb-8">
          <h1 className="text-5xl font-serif font-bold text-gray-900 mb-2">Robert J. Anderson</h1>
          <p className="text-xl text-gray-600 font-serif italic mb-6">Chief Executive Officer</p>
          <div className="flex flex-wrap gap-6 text-sm text-gray-700">
            <span>robert.anderson@executive.com</span>
            <span>•</span>
            <span>+1 (555) 234-5678</span>
            <span>•</span>
            <span>Boston, MA</span>
            <span>•</span>
            <span>linkedin.com/in/robertanderson</span>
          </div>
        </div>

        <div className="px-12 py-10">
          {/* Executive Summary */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 uppercase tracking-wide border-b-2 border-gray-300 pb-2">
              Executive Summary
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              Distinguished C-level executive with 20+ years of progressive leadership experience driving 
              organizational growth, operational excellence, and strategic transformation. Proven track record 
              of scaling businesses from $50M to $500M+ in revenue while maintaining profitability and market 
              leadership. Expert in M&A, digital transformation, and building high-performance teams across 
              global markets.
            </p>
          </section>

          {/* Core Competencies */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 uppercase tracking-wide border-b-2 border-gray-300 pb-2">
              Core Competencies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3 text-gray-700">
              <div>• Strategic Planning</div>
              <div>• P&L Management</div>
              <div>• M&A Integration</div>
              <div>• Digital Transformation</div>
              <div>• Board Relations</div>
              <div>• Stakeholder Management</div>
              <div>• Operational Excellence</div>
              <div>• Change Management</div>
              <div>• Global Expansion</div>
              <div>• Team Building</div>
              <div>• Risk Management</div>
              <div>• Corporate Governance</div>
            </div>
          </section>

          {/* Professional Experience */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 uppercase tracking-wide border-b-2 border-gray-300 pb-2">
              Professional Experience
            </h2>
            
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Chief Executive Officer</h3>
                    <p className="text-gray-700 font-semibold">Global Tech Solutions Inc.</p>
                    <p className="text-gray-600 italic">Fortune 500 Technology Company</p>
                  </div>
                  <span className="text-gray-600 font-semibold whitespace-nowrap ml-4">2018 - Present</span>
                </div>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li>• Led company through successful IPO, raising $300M and achieving $2B valuation</li>
                  <li>• Grew annual revenue from $150M to $500M with 35% EBITDA margins</li>
                  <li>• Executed 5 strategic acquisitions, expanding market presence across 3 continents</li>
                  <li>• Transformed organizational culture, reducing employee turnover by 40%</li>
                  <li>• Established partnerships with Fortune 100 companies, securing $200M in contracts</li>
                  <li>• Directed digital transformation initiative, modernizing legacy systems and processes</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Chief Operating Officer</h3>
                    <p className="text-gray-700 font-semibold">Enterprise Systems Corp.</p>
                    <p className="text-gray-600 italic">B2B Software Company</p>
                  </div>
                  <span className="text-gray-600 font-semibold whitespace-nowrap ml-4">2013 - 2018</span>
                </div>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li>• Oversaw operations for $250M business unit with 800+ employees</li>
                  <li>• Improved operational efficiency by 45% through process optimization</li>
                  <li>• Led successful integration of 3 acquired companies</li>
                  <li>• Implemented Six Sigma methodologies, reducing costs by $15M annually</li>
                  <li>• Expanded international operations into APAC and EMEA regions</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Vice President, Business Development</h3>
                    <p className="text-gray-700 font-semibold">Strategic Consulting Group</p>
                    <p className="text-gray-600 italic">Management Consulting Firm</p>
                  </div>
                  <span className="text-gray-600 font-semibold whitespace-nowrap ml-4">2008 - 2013</span>
                </div>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li>• Built and led business development team of 25 professionals</li>
                  <li>• Generated $80M in new business revenue over 5-year period</li>
                  <li>• Developed strategic partnerships with key industry players</li>
                  <li>• Advised C-suite executives on growth strategies and market expansion</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 uppercase tracking-wide border-b-2 border-gray-300 pb-2">
              Education
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-bold text-gray-900">Master of Business Administration (MBA)</h3>
                  <p className="text-gray-700">Harvard Business School</p>
                  <p className="text-gray-600 text-sm italic">Baker Scholar (Top 5% of class)</p>
                </div>
                <span className="text-gray-600">2006 - 2008</span>
              </div>
              <div className="flex justify-between">
                <div>
                  <h3 className="font-bold text-gray-900">Bachelor of Science, Engineering</h3>
                  <p className="text-gray-700">Massachusetts Institute of Technology</p>
                  <p className="text-gray-600 text-sm italic">Summa Cum Laude</p>
                </div>
                <span className="text-gray-600">2000 - 2004</span>
              </div>
            </div>
          </section>

          {/* Board Positions & Professional Affiliations */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 uppercase tracking-wide border-b-2 border-gray-300 pb-2">
              Board Positions & Professional Affiliations
            </h2>
            <div className="space-y-2 text-gray-700">
              <p>• Board Member, TechVentures Capital (Venture Capital Firm)</p>
              <p>• Advisory Board, MIT Sloan School of Management</p>
              <p>• Member, Young Presidents Organization (YPO)</p>
              <p>• Member, Chief Executive Group</p>
              <p>• Trustee, Boston Children's Hospital Foundation</p>
            </div>
          </section>

          {/* Awards & Recognition */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 uppercase tracking-wide border-b-2 border-gray-300 pb-2">
              Awards & Recognition
            </h2>
            <div className="space-y-2 text-gray-700">
              <p>• CEO of the Year - Tech Industry Awards (2023)</p>
              <p>• Top 50 Most Influential Business Leaders - Business Journal (2022)</p>
              <p>• Innovation Leadership Award - Technology Council (2021)</p>
              <p>• 40 Under 40 - Business Magazine (2015)</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
