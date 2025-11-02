import Link from "next/link";

export default function Home() {
  const templates = [
    {
      id: 1,
      name: "Modern Professional",
      description: "Clean, minimalist design with sidebar layout",
      color: "from-blue-500 to-blue-600",
      href: "/templates/modern-professional"
    },
    {
      id: 2,
      name: "Creative Designer",
      description: "Bold, colorful layout for creative professionals",
      color: "from-purple-500 to-pink-600",
      href: "/templates/creative-designer"
    },
    {
      id: 3,
      name: "Executive",
      description: "Sophisticated, traditional format for senior roles",
      color: "from-gray-700 to-gray-900",
      href: "/templates/executive"
    },
    {
      id: 4,
      name: "Tech Developer",
      description: "Code-inspired design with technical focus",
      color: "from-green-500 to-teal-600",
      href: "/templates/tech-developer"
    },
    {
      id: 5,
      name: "Academic",
      description: "Research-focused layout with publications section",
      color: "from-indigo-500 to-blue-700",
      href: "/templates/academic"
    },
    {
      id: 6,
      name: "Minimalist",
      description: "Ultra-clean, typography-focused design",
      color: "from-slate-400 to-slate-600",
      href: "/templates/minimalist"
    },
    {
      id: 7,
      name: "Two-Column Classic",
      description: "Traditional two-column layout",
      color: "from-amber-500 to-orange-600",
      href: "/templates/two-column-classic"
    },
    {
      id: 8,
      name: "Infographic Style",
      description: "Visual, data-driven design",
      color: "from-cyan-500 to-blue-600",
      href: "/templates/infographic-style"
    },
    {
      id: 9,
      name: "Modern Gradient",
      description: "Contemporary design with gradient accents",
      color: "from-rose-500 to-orange-500",
      href: "/templates/modern-gradient"
    },
    {
      id: 10,
      name: "Timeline Based",
      description: "Career progression timeline layout",
      color: "from-violet-500 to-purple-600",
      href: "/templates/timeline-based"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-4xl font-bold text-gray-900">CV Builder</h1>
          <p className="mt-2 text-lg text-gray-600">Choose from 10 professional CV templates</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => (
            <Link
              key={template.id}
              href={template.href}
              className="group block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
            >
              <div className={`h-48 bg-gradient-to-br ${template.color} flex items-center justify-center`}>
                <div className="text-white text-center p-6">
                  <div className="text-6xl font-bold opacity-20">{template.id}</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {template.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {template.description}
                </p>
                <div className="mt-4 flex items-center text-blue-600 font-medium text-sm">
                  <span>View Template</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-16 bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our CV Builder?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">10 Unique Designs</h3>
              <p className="text-gray-600 text-sm">Professional templates for every industry</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Fully Responsive</h3>
              <p className="text-gray-600 text-sm">Perfect on desktop, tablet, and mobile</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Easy Customization</h3>
              <p className="text-gray-600 text-sm">Tailored designs for your unique profile</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-600">© 2025 CV Builder. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
