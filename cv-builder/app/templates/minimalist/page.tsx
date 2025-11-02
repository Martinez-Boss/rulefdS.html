import Link from "next/link";

export default function Minimalist() {
  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-3xl mx-auto mb-8">
        <Link href="/" className="text-gray-400 hover:text-gray-600 text-sm">
          ← Back
        </Link>
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-6xl font-light text-gray-900 mb-4 tracking-tight">Michael Park</h1>
          <p className="text-xl text-gray-500 mb-8">Product Designer</p>
          <div className="flex gap-8 text-sm text-gray-600">
            <span>michael@email.com</span>
            <span>+1 555 123 4567</span>
            <span>New York, NY</span>
          </div>
        </header>

        {/* About */}
        <section className="mb-16">
          <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-6">About</h2>
          <p className="text-lg text-gray-700 leading-relaxed font-light">
            Minimalist product designer focused on creating intuitive, elegant solutions. 
            10 years of experience crafting digital experiences for startups and Fortune 500 companies. 
            Believer in the power of simplicity and thoughtful design.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-16">
          <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-8">Experience</h2>
          <div className="space-y-12">
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <h3 className="text-2xl font-light text-gray-900">Lead Product Designer</h3>
                <span className="text-sm text-gray-500">2021 — Now</span>
              </div>
              <p className="text-gray-600 mb-4">Minimal Inc.</p>
              <p className="text-gray-700 font-light leading-relaxed">
                Leading design for a suite of productivity tools used by 500K+ users. 
                Established design system and processes. Collaborated with engineering and product teams 
                to ship features that increased user engagement by 45%.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-3">
                <h3 className="text-2xl font-light text-gray-900">Senior Product Designer</h3>
                <span className="text-sm text-gray-500">2018 — 2021</span>
              </div>
              <p className="text-gray-600 mb-4">Design Studio</p>
              <p className="text-gray-700 font-light leading-relaxed">
                Designed mobile and web applications for various clients. 
                Focused on user research, prototyping, and iterative design. 
                Worked on projects spanning fintech, healthcare, and e-commerce.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-3">
                <h3 className="text-2xl font-light text-gray-900">Product Designer</h3>
                <span className="text-sm text-gray-500">2015 — 2018</span>
              </div>
              <p className="text-gray-600 mb-4">Tech Startup</p>
              <p className="text-gray-700 font-light leading-relaxed">
                First design hire. Built design practice from ground up. 
                Designed core product features and established brand identity.
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-8">Skills</h2>
          <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-gray-700 font-light">
            <div>Product Design</div>
            <div>User Research</div>
            <div>Prototyping</div>
            <div>Design Systems</div>
            <div>Interaction Design</div>
            <div>Visual Design</div>
            <div>Figma</div>
            <div>Sketch</div>
            <div>Adobe Creative Suite</div>
            <div>HTML / CSS</div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-8">Education</h2>
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-light text-gray-900">Bachelor of Fine Arts</h3>
              <span className="text-sm text-gray-500">2011 — 2015</span>
            </div>
            <p className="text-gray-600">Rhode Island School of Design</p>
          </div>
        </section>

        {/* Awards */}
        <section className="mb-16">
          <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-8">Recognition</h2>
          <div className="space-y-3 text-gray-700 font-light">
            <div className="flex justify-between">
              <span>Awwwards Site of the Day</span>
              <span className="text-gray-500">2023</span>
            </div>
            <div className="flex justify-between">
              <span>FWA of the Day</span>
              <span className="text-gray-500">2022</span>
            </div>
            <div className="flex justify-between">
              <span>CSS Design Awards</span>
              <span className="text-gray-500">2021</span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-400">Available for freelance projects</p>
        </footer>
      </div>
    </div>
  );
}
