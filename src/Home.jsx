import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFBF9]">
      {/* Hero */}
      <div className="max-w-4xl mx-auto px-6 pt-20 pb-12 text-center">
        <h1 className="text-5xl font-bold text-[#2C2C2C] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
          Thierry Dugay
        </h1>
        <p className="text-lg text-[#6B5344] font-semibold mb-2">Professional Resume Portfolio</p>
        <p className="text-md text-gray-500 mb-6">Entry-Level Finance & Technical Professional</p>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Welcome to my professional resume portfolio. I've prepared two tailored versions of my resume
          to match different career opportunities. Select the version that best aligns with your target role.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-4xl mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/finance">
          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition cursor-pointer border border-gray-100 h-full">
            <h2 className="text-xl font-bold text-[#2C2C2C] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Finance-Targeted
            </h2>
            <p className="text-gray-500 text-sm mb-5">
              Optimized for finance roles, investment banking, and accounting positions.
              Emphasizes accounting minor, advanced Excel skills, and financial automation expertise.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-sm text-gray-700"><span className="text-green-500 font-bold">✓</span> Accounting & Finance Focus</li>
              <li className="flex items-center gap-2 text-sm text-gray-700"><span className="text-green-500 font-bold">✓</span> Financial Modeling Emphasis</li>
              <li className="flex items-center gap-2 text-sm text-gray-700"><span className="text-green-500 font-bold">✓</span> Automation for Finance</li>
            </ul>
            <span className="text-[#6B5344] font-semibold text-sm">View Resume →</span>
          </div>
        </Link>

        <Link href="/general">
          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition cursor-pointer border border-gray-100 h-full">
            <h2 className="text-xl font-bold text-[#2C2C2C] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Technical & General
            </h2>
            <p className="text-gray-500 text-sm mb-5">
              Versatile version for tech startups, operations, data analysis, and general entry-level roles.
              Highlights AI, automation, and programming expertise.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-sm text-gray-700"><span className="text-green-500 font-bold">✓</span> Automation & AI Focus</li>
              <li className="flex items-center gap-2 text-sm text-gray-700"><span className="text-green-500 font-bold">✓</span> Programming Skills</li>
              <li className="flex items-center gap-2 text-sm text-gray-700"><span className="text-green-500 font-bold">✓</span> Technical Problem-Solving</li>
            </ul>
            <span className="text-[#6B5344] font-semibold text-sm">View Resume →</span>
          </div>
        </Link>
      </div>

      {/* Stats */}
      <div className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-center text-lg font-semibold text-gray-500 mb-8">Resume Highlights</h3>
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-[#6B5344]">70%</div>
              <div className="text-sm text-gray-500 mt-1">Workflow Time Reduction through automation</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#6B5344]">3.72</div>
              <div className="text-sm text-gray-500 mt-1">University GPA with Dean's List honors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#6B5344]">5+</div>
              <div className="text-sm text-gray-500 mt-1">Custom automation tools built</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-8 text-sm text-gray-400">
        <p>Nassau, Bahamas | 242-810-5619 | thierrydugay06@gmail.com</p>
        <p className="mt-1">ATS-Optimized | Professionally Designed | Data-Driven</p>
      </div>
    </div>
  );
}
