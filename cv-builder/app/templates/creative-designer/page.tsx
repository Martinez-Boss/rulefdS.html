import Link from "next/link";

export default function CreativeDesigner() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 py-8 px-4">
      <div className="max-w-5xl mx-auto mb-6">
        <Link href="/" className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Templates
        </Link>
      </div>

      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full -ml-24 -mb-24"></div>
          <div className="relative z-10">
            <h1 className="text-5xl font-black mb-2">Sarah Martinez</h1>
            <p className="text-2xl font-light text-pink-100">Creative Designer & Art Director</p>
            <div className="flex flex-wrap gap-4 mt-6 text-sm">
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">sarah.martinez@email.com</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">+1 (555) 987-6543</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">Los Angeles, CA</span>
            </div>
          </div>
        </div>

        <div className="p-12">
          {/* About Me */}
          <section className="mb-10">
            <div className="flex items-center mb-4">
              <div className="w-12 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mr-4"></div>
              <h2 className="text-3xl font-black text-gray-800">About Me</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Award-winning creative designer with 10+ years of experience crafting compelling visual stories. 
              Passionate about pushing boundaries and creating designs that not only look beautiful but drive 
              results. Specialized in brand identity, digital design, and creative direction.
            </p>
          </section>

          {/* Skills - Creative Layout */}
          <section className="mb-10">
            <div className="flex items-center mb-6">
              <div className="w-12 h-1 bg-gradient-to-r from-pink-600 to-orange-500 mr-4"></div>
              <h2 className="text-3xl font-black text-gray-800">Skills & Expertise</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-4 rounded-xl text-center transform hover:scale-105 transition-transform">
                <div className="text-3xl mb-2">🎨</div>
                <div className="font-bold">Brand Design</div>
              </div>
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white p-4 rounded-xl text-center transform hover:scale-105 transition-transform">
                <div className="text-3xl mb-2">✏️</div>
                <div className="font-bold">Illustration</div>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-4 rounded-xl text-center transform hover:scale-105 transition-transform">
                <div className="text-3xl mb-2">📱</div>
                <div className="font-bold">UI/UX Design</div>
              </div>
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white p-4 rounded-xl text-center transform hover:scale-105 transition-transform">
                <div className="text-3xl mb-2">🎬</div>
                <div className="font-bold">Motion Graphics</div>
              </div>
              <div className="bg-gradient-to-br from-pink-600 to-orange-500 text-white p-4 rounded-xl text-center transform hover:scale-105 transition-transform">
                <div className="text-3xl mb-2">📸</div>
                <div className="font-bold">Photography</div>
              </div>
              <div className="bg-gradient-to-br from-orange-600 to-red-500 text-white p-4 rounded-xl text-center transform hover:scale-105 transition-transform">
                <div className="text-3xl mb-2">🖥️</div>
                <div className="font-bold">Web Design</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-4 rounded-xl text-center transform hover:scale-105 transition-transform">
                <div className="text-3xl mb-2">🎯</div>
                <div className="font-bold">Art Direction</div>
              </div>
              <div className="bg-gradient-to-br from-pink-500 to-orange-500 text-white p-4 rounded-xl text-center transform hover:scale-105 transition-transform">
                <div className="text-3xl mb-2">✨</div>
                <div className="font-bold">Creative Strategy</div>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-10">
            <div className="flex items-center mb-6">
              <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-red-500 mr-4"></div>
              <h2 className="text-3xl font-black text-gray-800">Experience</h2>
            </div>
            <div className="space-y-8">
              <div className="border-l-4 border-purple-600 pl-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Senior Art Director</h3>
                    <p className="text-purple-600 font-semibold text-lg">Creative Agency Pro</p>
                  </div>
                  <span className="bg-purple-100 text-purple-800 px-4 py-1 rounded-full text-sm font-semibold mt-2 md:mt-0">2021 - Present</span>
                </div>
                <ul className="text-gray-700 space-y-2 mt-3">
                  <li>• Led creative direction for 50+ brand campaigns</li>
                  <li>• Managed team of 8 designers and illustrators</li>
                  <li>• Won 3 industry awards for innovative design work</li>
                  <li>• Increased client satisfaction scores by 40%</li>
                </ul>
              </div>

              <div className="border-l-4 border-pink-600 pl-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Lead Designer</h3>
                    <p className="text-pink-600 font-semibold text-lg">Design Studio X</p>
                  </div>
                  <span className="bg-pink-100 text-pink-800 px-4 py-1 rounded-full text-sm font-semibold mt-2 md:mt-0">2018 - 2021</span>
                </div>
                <ul className="text-gray-700 space-y-2 mt-3">
                  <li>• Created brand identities for 30+ startups and enterprises</li>
                  <li>• Developed design systems and style guides</li>
                  <li>• Mentored junior designers and interns</li>
                  <li>• Collaborated with clients across tech, fashion, and lifestyle sectors</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-600 pl-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Graphic Designer</h3>
                    <p className="text-orange-600 font-semibold text-lg">Freelance</p>
                  </div>
                  <span className="bg-orange-100 text-orange-800 px-4 py-1 rounded-full text-sm font-semibold mt-2 md:mt-0">2014 - 2018</span>
                </div>
                <ul className="text-gray-700 space-y-2 mt-3">
                  <li>• Worked with diverse clients on branding and marketing materials</li>
                  <li>• Built portfolio of 100+ successful projects</li>
                  <li>• Specialized in logo design and brand identity</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education & Awards */}
          <div className="grid md:grid-cols-2 gap-8">
            <section>
              <div className="flex items-center mb-4">
                <div className="w-8 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mr-3"></div>
                <h2 className="text-2xl font-black text-gray-800">Education</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800">BFA, Graphic Design</h3>
                  <p className="text-purple-600">Rhode Island School of Design</p>
                  <p className="text-gray-600 text-sm">2010 - 2014</p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center mb-4">
                <div className="w-8 h-1 bg-gradient-to-r from-pink-600 to-orange-500 mr-3"></div>
                <h2 className="text-2xl font-black text-gray-800">Awards</h2>
              </div>
              <div className="space-y-2 text-gray-700">
                <p>🏆 Cannes Lions - Gold Award 2023</p>
                <p>🏆 D&AD Pencil Award 2022</p>
                <p>🏆 Communication Arts Design Annual 2021</p>
                <p>🏆 Webby Award - Best Visual Design 2020</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
