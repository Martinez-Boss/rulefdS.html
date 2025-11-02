import Link from "next/link";

export default function TechDeveloper() {
  return (
    <div className="min-h-screen bg-gray-900 py-8 px-4">
      <div className="max-w-5xl mx-auto mb-6">
        <Link href="/" className="inline-flex items-center text-green-400 hover:text-green-300 font-medium font-mono">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          cd ../
        </Link>
      </div>

      <div className="max-w-5xl mx-auto bg-gray-800 shadow-2xl rounded-lg overflow-hidden border border-green-500">
        {/* Terminal-style Header */}
        <div className="bg-gray-900 border-b border-green-500 px-8 py-4">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-4 text-gray-400 font-mono text-sm">~/developer/profile</span>
          </div>
        </div>

        <div className="p-8 font-mono">
          {/* Header */}
          <div className="mb-8">
            <div className="text-green-400 mb-2">
              <span className="text-gray-500">$</span> cat developer_info.json
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <pre className="text-green-400">
{`{
  "name": "Alex Chen",
  "role": "Senior Full Stack Developer",
  "location": "San Francisco, CA",
  "email": "alex.chen@devmail.com",
  "github": "github.com/alexchen",
  "linkedin": "linkedin.com/in/alexchen",
  "years_experience": 7
}`}
              </pre>
            </div>
          </div>

          {/* About */}
          <section className="mb-8">
            <div className="text-green-400 mb-3">
              <span className="text-gray-500">$</span> cat about.txt
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <p className="text-gray-300 leading-relaxed">
                Passionate full-stack developer with expertise in building scalable web applications and 
                distributed systems. Strong advocate for clean code, test-driven development, and continuous 
                learning. Open-source contributor with 50+ repositories and 5K+ GitHub stars.
              </p>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="mb-8">
            <div className="text-green-400 mb-3">
              <span className="text-gray-500">$</span> ls -la tech_stack/
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-cyan-400 font-bold mb-3">// Languages</h3>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">▸</span>
                      <span>JavaScript / TypeScript</span>
                      <span className="ml-auto text-yellow-400">★★★★★</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">▸</span>
                      <span>Python</span>
                      <span className="ml-auto text-yellow-400">★★★★★</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">▸</span>
                      <span>Go</span>
                      <span className="ml-auto text-yellow-400">★★★★☆</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">▸</span>
                      <span>Rust</span>
                      <span className="ml-auto text-yellow-400">★★★☆☆</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-cyan-400 font-bold mb-3">// Frontend</h3>
                  <div className="space-y-2 text-gray-300">
                    <div><span className="text-green-500 mr-2">▸</span>React / Next.js</div>
                    <div><span className="text-green-500 mr-2">▸</span>Vue.js / Nuxt.js</div>
                    <div><span className="text-green-500 mr-2">▸</span>Tailwind CSS</div>
                    <div><span className="text-green-500 mr-2">▸</span>Redux / Zustand</div>
                  </div>
                </div>
                <div>
                  <h3 className="text-cyan-400 font-bold mb-3">// Backend</h3>
                  <div className="space-y-2 text-gray-300">
                    <div><span className="text-green-500 mr-2">▸</span>Node.js / Express</div>
                    <div><span className="text-green-500 mr-2">▸</span>Django / FastAPI</div>
                    <div><span className="text-green-500 mr-2">▸</span>GraphQL / REST APIs</div>
                    <div><span className="text-green-500 mr-2">▸</span>Microservices</div>
                  </div>
                </div>
                <div>
                  <h3 className="text-cyan-400 font-bold mb-3">// DevOps & Tools</h3>
                  <div className="space-y-2 text-gray-300">
                    <div><span className="text-green-500 mr-2">▸</span>Docker / Kubernetes</div>
                    <div><span className="text-green-500 mr-2">▸</span>AWS / GCP / Azure</div>
                    <div><span className="text-green-500 mr-2">▸</span>CI/CD (GitHub Actions)</div>
                    <div><span className="text-green-500 mr-2">▸</span>PostgreSQL / MongoDB</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-8">
            <div className="text-green-400 mb-3">
              <span className="text-gray-500">$</span> git log --experience
            </div>
            <div className="space-y-6">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                <div className="flex flex-col md:flex-row md:justify-between mb-3">
                  <div>
                    <h3 className="text-cyan-400 font-bold text-lg">Senior Full Stack Developer</h3>
                    <p className="text-purple-400">TechStartup Inc.</p>
                  </div>
                  <span className="text-yellow-400 text-sm">2021 - Present</span>
                </div>
                <div className="text-gray-300 space-y-2 text-sm">
                  <p><span className="text-green-500">✓</span> Architected and built microservices platform serving 1M+ users</p>
                  <p><span className="text-green-500">✓</span> Reduced API response time by 60% through optimization</p>
                  <p><span className="text-green-500">✓</span> Led migration from monolith to microservices architecture</p>
                  <p><span className="text-green-500">✓</span> Mentored team of 5 junior developers</p>
                  <p className="text-gray-500 italic mt-2">Tech: React, Node.js, PostgreSQL, Docker, AWS, Kubernetes</p>
                </div>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                <div className="flex flex-col md:flex-row md:justify-between mb-3">
                  <div>
                    <h3 className="text-cyan-400 font-bold text-lg">Full Stack Developer</h3>
                    <p className="text-purple-400">Digital Solutions Co.</p>
                  </div>
                  <span className="text-yellow-400 text-sm">2019 - 2021</span>
                </div>
                <div className="text-gray-300 space-y-2 text-sm">
                  <p><span className="text-green-500">✓</span> Developed e-commerce platform processing $10M+ annually</p>
                  <p><span className="text-green-500">✓</span> Implemented CI/CD pipeline reducing deployment time by 80%</p>
                  <p><span className="text-green-500">✓</span> Built real-time analytics dashboard using WebSockets</p>
                  <p className="text-gray-500 italic mt-2">Tech: Vue.js, Python/Django, MongoDB, Redis, GCP</p>
                </div>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                <div className="flex flex-col md:flex-row md:justify-between mb-3">
                  <div>
                    <h3 className="text-cyan-400 font-bold text-lg">Software Engineer</h3>
                    <p className="text-purple-400">CodeCraft Labs</p>
                  </div>
                  <span className="text-yellow-400 text-sm">2017 - 2019</span>
                </div>
                <div className="text-gray-300 space-y-2 text-sm">
                  <p><span className="text-green-500">✓</span> Built RESTful APIs and SPAs for various clients</p>
                  <p><span className="text-green-500">✓</span> Contributed to open-source projects</p>
                  <p><span className="text-green-500">✓</span> Implemented automated testing (Jest, Pytest)</p>
                  <p className="text-gray-500 italic mt-2">Tech: React, Node.js, Express, MySQL</p>
                </div>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-8">
            <div className="text-green-400 mb-3">
              <span className="text-gray-500">$</span> ls -la projects/
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <div className="space-y-4 text-gray-300 text-sm">
                <div>
                  <h4 className="text-cyan-400 font-bold">DevTools Pro</h4>
                  <p>Open-source developer productivity toolkit with 3K+ GitHub stars</p>
                  <p className="text-gray-500 mt-1">TypeScript, Electron, React</p>
                </div>
                <div>
                  <h4 className="text-cyan-400 font-bold">API Gateway Framework</h4>
                  <p>Lightweight API gateway for microservices with built-in rate limiting</p>
                  <p className="text-gray-500 mt-1">Go, Redis, Docker</p>
                </div>
                <div>
                  <h4 className="text-cyan-400 font-bold">Real-time Collaboration Tool</h4>
                  <p>WebRTC-based collaboration platform for remote teams</p>
                  <p className="text-gray-500 mt-1">Next.js, WebRTC, Socket.io, PostgreSQL</p>
                </div>
              </div>
            </div>
          </section>

          {/* Education & Certifications */}
          <div className="grid md:grid-cols-2 gap-6">
            <section>
              <div className="text-green-400 mb-3">
                <span className="text-gray-500">$</span> cat education.md
              </div>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                <div className="text-gray-300 text-sm">
                  <h3 className="text-cyan-400 font-bold mb-2">BS, Computer Science</h3>
                  <p className="text-purple-400">UC Berkeley</p>
                  <p className="text-gray-500">2013 - 2017</p>
                </div>
              </div>
            </section>

            <section>
              <div className="text-green-400 mb-3">
                <span className="text-gray-500">$</span> cat certifications.md
              </div>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                <div className="text-gray-300 text-sm space-y-2">
                  <p><span className="text-green-500">✓</span> AWS Certified Solutions Architect</p>
                  <p><span className="text-green-500">✓</span> Kubernetes Administrator (CKA)</p>
                  <p><span className="text-green-500">✓</span> Google Cloud Professional</p>
                </div>
              </div>
            </section>
          </div>

          {/* Footer */}
          <div className="mt-8 text-green-400">
            <span className="text-gray-500">$</span> <span className="animate-pulse">_</span>
          </div>
        </div>
      </div>
    </div>
  );
}
