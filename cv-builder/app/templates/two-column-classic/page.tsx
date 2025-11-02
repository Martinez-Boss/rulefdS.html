import Link from "next/link";

export default function TwoColumnClassic() {
  return (
    <div className="min-h-screen bg-amber-50 py-8 px-4">
      <div className="max-w-5xl mx-auto mb-6">
        <Link href="/" className="inline-flex items-center text-amber-700 hover:text-amber-900 font-medium">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Templates
        </Link>
      </div>

      <div className="max-w-5xl mx-auto bg-white shadow-xl">
        {/* Header */}
        <div className="bg-amber-600 text-white px-10 py-8">
          <h1 className="text-4xl font-bold mb-2">Jennifer Williams</h1>
          <p className="text-xl text-amber-100">Marketing Manager</p>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Left Column */}
          <div className="md:w-1/3 bg-gray-50 p-8 border-r border-gray-200">
            {/* Contact */}
            <section className="mb-8">
              <h2 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-amber-600">
                Contact Information
              </h2>
              <div className="space-y-3 text-sm text-gray-700">
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p>jennifer.w@email.com</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p>+1 (555) 456-7890</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Location</p>
                  <p>Chicago, IL</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">LinkedIn</p>
                  <p>linkedin.com/in/jenniferwilliams</p>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section className="mb-8">
              <h2 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-amber-600">
                Skills
              </h2>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">Digital Marketing</p>
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div className="bg-amber-600 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">Content Strategy</p>
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div className="bg-amber-600 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">SEO/SEM</p>
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div className="bg-amber-600 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">Social Media</p>
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div className="bg-amber-600 h-2 rounded-full" style={{width: '92%'}}></div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">Analytics</p>
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div className="bg-amber-600 h-2 rounded-full" style={{width: '88%'}}></div>
                  </div>
                </div>
              </div>
            </section>

            {/* Tools */}
            <section className="mb-8">
              <h2 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-amber-600">
                Tools & Platforms
              </h2>
              <div className="space-y-2 text-sm text-gray-700">
                <p>• Google Analytics</p>
                <p>• HubSpot</p>
                <p>• Salesforce</p>
                <p>• Adobe Creative Suite</p>
                <p>• Hootsuite</p>
                <p>• Mailchimp</p>
                <p>• WordPress</p>
                <p>• Canva</p>
              </div>
            </section>

            {/* Languages */}
            <section className="mb-8">
              <h2 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-amber-600">
                Languages
              </h2>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>English</span>
                  <span className="text-amber-700 font-semibold">Native</span>
                </div>
                <div className="flex justify-between">
                  <span>Spanish</span>
                  <span className="text-amber-700 font-semibold">Fluent</span>
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-amber-600">
                Certifications
              </h2>
              <div className="space-y-2 text-sm text-gray-700">
                <p>Google Ads Certified</p>
                <p>HubSpot Inbound Marketing</p>
                <p>Facebook Blueprint</p>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="md:w-2/3 p-8">
            {/* Professional Summary */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-amber-600">
                Professional Summary
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Results-oriented Marketing Manager with 8+ years of experience developing and executing 
                successful marketing campaigns. Proven track record of increasing brand awareness, driving 
                lead generation, and improving customer engagement. Expert in digital marketing, content 
                strategy, and data-driven decision making.
              </p>
            </section>

            {/* Work Experience */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-amber-600">
                Work Experience
              </h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Marketing Manager</h3>
                      <p className="text-amber-700 font-semibold">TechBrand Solutions</p>
                    </div>
                    <span className="text-gray-600 text-sm whitespace-nowrap ml-4">2020 - Present</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Led marketing team of 6 professionals across digital and content marketing</li>
                    <li>Increased website traffic by 150% through SEO optimization and content strategy</li>
                    <li>Managed $500K annual marketing budget with 35% ROI improvement</li>
                    <li>Launched successful product campaigns generating $2M in revenue</li>
                    <li>Implemented marketing automation resulting in 40% increase in lead quality</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Senior Marketing Specialist</h3>
                      <p className="text-amber-700 font-semibold">Digital Marketing Agency</p>
                    </div>
                    <span className="text-gray-600 text-sm whitespace-nowrap ml-4">2017 - 2020</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Managed digital marketing campaigns for 15+ B2B and B2C clients</li>
                    <li>Developed content strategies that increased engagement by 60%</li>
                    <li>Executed social media campaigns reaching 5M+ impressions monthly</li>
                    <li>Conducted market research and competitive analysis</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Marketing Coordinator</h3>
                      <p className="text-amber-700 font-semibold">Retail Company Inc.</p>
                    </div>
                    <span className="text-gray-600 text-sm whitespace-nowrap ml-4">2015 - 2017</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Coordinated email marketing campaigns with 25% open rate</li>
                    <li>Managed social media accounts and grew following by 200%</li>
                    <li>Assisted in planning and executing promotional events</li>
                    <li>Created marketing materials and maintained brand consistency</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-amber-600">
                Education
              </h2>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Bachelor of Business Administration</h3>
                    <p className="text-amber-700 font-semibold">University of Illinois</p>
                    <p className="text-gray-600 text-sm">Major: Marketing | Minor: Communications</p>
                  </div>
                  <span className="text-gray-600 text-sm whitespace-nowrap ml-4">2011 - 2015</span>
                </div>
              </div>
            </section>

            {/* Achievements */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-amber-600">
                Key Achievements
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Awarded "Marketing Professional of the Year" by Chicago Marketing Association (2023)</li>
                <li>Successfully launched 3 major product campaigns exceeding revenue targets by 40%</li>
                <li>Grew company's social media following from 10K to 100K+ in 2 years</li>
                <li>Reduced customer acquisition cost by 30% through optimized campaigns</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
