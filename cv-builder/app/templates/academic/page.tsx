import Link from "next/link";

export default function Academic() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto mb-6">
        <Link href="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Templates
        </Link>
      </div>

      <div className="max-w-4xl mx-auto bg-white shadow-lg">
        {/* Header */}
        <div className="bg-indigo-700 text-white px-10 py-8">
          <h1 className="text-4xl font-bold mb-2">Dr. Emily Richardson</h1>
          <p className="text-xl text-indigo-100 mb-4">Associate Professor of Computer Science</p>
          <div className="text-sm text-indigo-100 space-y-1">
            <p>Department of Computer Science, Stanford University</p>
            <p>emily.richardson@stanford.edu | +1 (555) 345-6789</p>
            <p>ORCID: 0000-0002-1234-5678 | Google Scholar: scholar.google.com/citations?user=abc123</p>
          </div>
        </div>

        <div className="px-10 py-8">
          {/* Research Interests */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-indigo-900 mb-3 pb-2 border-b-2 border-indigo-200">
              Research Interests
            </h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Machine Learning</span>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Natural Language Processing</span>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Deep Learning</span>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">AI Ethics</span>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Computer Vision</span>
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-indigo-900 mb-4 pb-2 border-b-2 border-indigo-200">
              Education
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-gray-900">Ph.D. in Computer Science</h3>
                    <p className="text-indigo-700">Massachusetts Institute of Technology (MIT)</p>
                    <p className="text-gray-600 text-sm italic">Dissertation: "Advanced Neural Architectures for Natural Language Understanding"</p>
                    <p className="text-gray-600 text-sm">Advisor: Prof. John Smith</p>
                  </div>
                  <span className="text-gray-600 whitespace-nowrap ml-4">2015 - 2019</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-gray-900">M.S. in Computer Science</h3>
                    <p className="text-indigo-700">Carnegie Mellon University</p>
                  </div>
                  <span className="text-gray-600 whitespace-nowrap ml-4">2013 - 2015</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-gray-900">B.S. in Computer Science, Mathematics (Double Major)</h3>
                    <p className="text-indigo-700">University of California, Berkeley</p>
                    <p className="text-gray-600 text-sm italic">Summa Cum Laude, Phi Beta Kappa</p>
                  </div>
                  <span className="text-gray-600 whitespace-nowrap ml-4">2009 - 2013</span>
                </div>
              </div>
            </div>
          </section>

          {/* Academic Positions */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-indigo-900 mb-4 pb-2 border-b-2 border-indigo-200">
              Academic Positions
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-gray-900">Associate Professor</h3>
                    <p className="text-indigo-700">Stanford University, Department of Computer Science</p>
                  </div>
                  <span className="text-gray-600 whitespace-nowrap ml-4">2024 - Present</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-gray-900">Assistant Professor</h3>
                    <p className="text-indigo-700">Stanford University, Department of Computer Science</p>
                  </div>
                  <span className="text-gray-600 whitespace-nowrap ml-4">2019 - 2024</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-gray-900">Postdoctoral Researcher</h3>
                    <p className="text-indigo-700">Google AI Research</p>
                  </div>
                  <span className="text-gray-600 whitespace-nowrap ml-4">2019</span>
                </div>
              </div>
            </div>
          </section>

          {/* Selected Publications */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-indigo-900 mb-4 pb-2 border-b-2 border-indigo-200">
              Selected Publications
            </h2>
            <p className="text-sm text-gray-600 mb-4 italic">h-index: 28 | Total Citations: 3,500+ | Publications: 45+</p>
            <div className="space-y-4 text-sm">
              <div className="pl-4 border-l-2 border-indigo-300">
                <p className="text-gray-900">
                  <span className="font-semibold">Richardson, E.</span>, Zhang, L., & Kumar, A. (2024). 
                  "Transformer-based Models for Low-Resource Language Understanding." 
                  <span className="italic">Nature Machine Intelligence</span>, 6(2), 145-158.
                </p>
                <p className="text-gray-600 mt-1">Citations: 234 | Impact Factor: 25.8</p>
              </div>
              <div className="pl-4 border-l-2 border-indigo-300">
                <p className="text-gray-900">
                  <span className="font-semibold">Richardson, E.</span> & Chen, M. (2023). 
                  "Ethical Considerations in Large Language Models." 
                  <span className="italic">Proceedings of NeurIPS 2023</span>, pp. 1234-1245.
                </p>
                <p className="text-gray-600 mt-1">Citations: 456 | Best Paper Award</p>
              </div>
              <div className="pl-4 border-l-2 border-indigo-300">
                <p className="text-gray-900">
                  <span className="font-semibold">Richardson, E.</span>, Park, J., & Williams, R. (2022). 
                  "Multimodal Learning for Vision and Language Tasks." 
                  <span className="italic">CVPR 2022</span>, pp. 5678-5689.
                </p>
                <p className="text-gray-600 mt-1">Citations: 678 | Oral Presentation</p>
              </div>
              <div className="pl-4 border-l-2 border-indigo-300">
                <p className="text-gray-900">
                  <span className="font-semibold">Richardson, E.</span> (2021). 
                  "Attention Mechanisms in Neural Networks: A Comprehensive Survey." 
                  <span className="italic">ACM Computing Surveys</span>, 54(3), 1-35.
                </p>
                <p className="text-gray-600 mt-1">Citations: 892</p>
              </div>
            </div>
          </section>

          {/* Grants & Funding */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-indigo-900 mb-4 pb-2 border-b-2 border-indigo-200">
              Grants & Funding
            </h2>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-gray-900">National Science Foundation (NSF) CAREER Award</p>
                <p className="text-gray-700">"Advancing Natural Language Understanding in Low-Resource Settings"</p>
                <p className="text-gray-600">$500,000 | 2023-2028 | Principal Investigator</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Google Research Award</p>
                <p className="text-gray-700">"Ethical AI and Bias Mitigation in Language Models"</p>
                <p className="text-gray-600">$150,000 | 2022-2024 | Principal Investigator</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">DARPA Young Faculty Award</p>
                <p className="text-gray-700">"Robust Machine Learning Systems"</p>
                <p className="text-gray-600">$300,000 | 2021-2023 | Principal Investigator</p>
              </div>
            </div>
          </section>

          {/* Teaching */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-indigo-900 mb-4 pb-2 border-b-2 border-indigo-200">
              Teaching Experience
            </h2>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">CS 229:</span> Machine Learning (Graduate) - Fall 2023, 2022, 2021</p>
              <p><span className="font-semibold">CS 224N:</span> Natural Language Processing with Deep Learning - Spring 2024, 2023, 2022</p>
              <p><span className="font-semibold">CS 330:</span> Deep Multi-Task and Meta Learning - Winter 2024, 2023</p>
              <p className="text-gray-600 italic mt-2">Average Teaching Rating: 4.8/5.0</p>
            </div>
          </section>

          {/* Service & Leadership */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-indigo-900 mb-4 pb-2 border-b-2 border-indigo-200">
              Service & Leadership
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Conference Roles</h3>
                <ul className="space-y-1 text-gray-700">
                  <li>• Area Chair, NeurIPS (2023, 2024)</li>
                  <li>• Program Committee, ICML (2021-2024)</li>
                  <li>• Senior PC Member, AAAI (2022-2024)</li>
                  <li>• Reviewer, ACL, EMNLP, CVPR</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Editorial Boards</h3>
                <ul className="space-y-1 text-gray-700">
                  <li>• Associate Editor, JMLR (2023-Present)</li>
                  <li>• Editorial Board, AI Magazine</li>
                  <li>• Guest Editor, Special Issue on NLP</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">University Service</h3>
                <ul className="space-y-1 text-gray-700">
                  <li>• Faculty Search Committee Member</li>
                  <li>• Graduate Admissions Committee</li>
                  <li>• Diversity & Inclusion Committee</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Mentorship</h3>
                <ul className="space-y-1 text-gray-700">
                  <li>• Ph.D. Students: 6 current, 2 graduated</li>
                  <li>• Master's Students: 12</li>
                  <li>• Undergraduate Researchers: 15+</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Awards & Honors */}
          <section>
            <h2 className="text-2xl font-bold text-indigo-900 mb-4 pb-2 border-b-2 border-indigo-200">
              Awards & Honors
            </h2>
            <div className="space-y-2 text-sm text-gray-700">
              <p>• NSF CAREER Award (2023)</p>
              <p>• MIT Technology Review 35 Innovators Under 35 (2022)</p>
              <p>• Best Paper Award, NeurIPS (2023)</p>
              <p>• DARPA Young Faculty Award (2021)</p>
              <p>• Google Faculty Research Award (2022)</p>
              <p>• Outstanding Dissertation Award, MIT (2019)</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
