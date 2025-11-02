import Link from "next/link";

export default function ModernProfessional() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-5xl mx-auto mb-6">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Templates
        </Link>
      </div>

      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="bg-gradient-to-b from-blue-600 to-blue-700 text-white p-8 md:w-1/3">
            <div className="mb-8">
              <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-blue-600 text-4xl font-bold">JD</span>
              </div>
              <h1 className="text-3xl font-bold text-center">John Doe</h1>
              <p className="text-blue-100 text-center mt-2">Senior Product Manager</p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-3 border-b border-blue-400 pb-2">Contact</h3>
                <div className="space-y-2 text-sm">
                  <p>john.doe@email.com</p>
                  <p>+1 (555) 123-4567</p>
                  <p>New York, NY</p>
                  <p>linkedin.com/in/johndoe</p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-3 border-b border-blue-400 pb-2">Skills</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Product Strategy</span>
                      <span>95%</span>
                    </div>
                    <div className="w-full bg-blue-800 rounded-full h-2">
                      <div className="bg-white h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Team Leadership</span>
                      <span>90%</span>
                    </div>
                    <div className="w-full bg-blue-800 rounded-full h-2">
                      <div className="bg-white h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Data Analysis</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-blue-800 rounded-full h-2">
                      <div className="bg-white h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Agile/Scrum</span>
                      <span>88%</span>
                    </div>
                    <div className="w-full bg-blue-800 rounded-full h-2">
                      <div className="bg-white h-2 rounded-full" style={{width: '88%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-3 border-b border-blue-400 pb-2">Languages</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>English</span>
                    <span>Native</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Spanish</span>
                    <span>Fluent</span>
                  </div>
                  <div className="flex justify-between">
                    <span>French</span>
                    <span>Intermediate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-8 md:w-2/3">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">Professional Summary</h2>
              <p className="text-gray-700 leading-relaxed">
                Results-driven Senior Product Manager with 8+ years of experience leading cross-functional teams 
                to deliver innovative products. Proven track record of increasing user engagement by 150% and 
                revenue by $5M through strategic product initiatives. Expert in agile methodologies, data-driven 
                decision making, and stakeholder management.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">Work Experience</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">Senior Product Manager</h3>
                      <p className="text-blue-600 font-medium">TechCorp Inc.</p>
                    </div>
                    <span className="text-gray-600 text-sm">2020 - Present</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                    <li>Led product strategy for flagship SaaS platform serving 100K+ users</li>
                    <li>Increased user retention by 45% through data-driven feature optimization</li>
                    <li>Managed team of 5 product managers and coordinated with 20+ engineers</li>
                    <li>Launched 3 major product releases, generating $5M in additional revenue</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">Product Manager</h3>
                      <p className="text-blue-600 font-medium">StartupXYZ</p>
                    </div>
                    <span className="text-gray-600 text-sm">2017 - 2020</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                    <li>Defined product roadmap for mobile application with 50K+ downloads</li>
                    <li>Conducted user research and A/B testing to optimize conversion rates</li>
                    <li>Collaborated with design and engineering teams in agile environment</li>
                    <li>Improved app rating from 3.5 to 4.7 stars through UX enhancements</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">Associate Product Manager</h3>
                      <p className="text-blue-600 font-medium">Digital Solutions Ltd.</p>
                    </div>
                    <span className="text-gray-600 text-sm">2015 - 2017</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                    <li>Assisted in product development lifecycle for e-commerce platform</li>
                    <li>Analyzed user metrics and created reports for stakeholders</li>
                    <li>Supported launch of 5+ product features</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">Education</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">MBA, Business Administration</h3>
                      <p className="text-blue-600 font-medium">Harvard Business School</p>
                    </div>
                    <span className="text-gray-600 text-sm">2013 - 2015</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">BS, Computer Science</h3>
                      <p className="text-blue-600 font-medium">Stanford University</p>
                    </div>
                    <span className="text-gray-600 text-sm">2009 - 2013</span>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">Certifications</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Certified Scrum Product Owner (CSPO)</li>
                <li>Product Management Certificate - General Assembly</li>
                <li>Google Analytics Certification</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
