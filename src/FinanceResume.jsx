import { Link } from "wouter";
import { Download, ArrowLeft } from "lucide-react";

export default function FinanceResume() {
  return (
    <div className="min-h-screen bg-[#FDFBF9] py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <Link href="/"><span className="flex items-center gap-2 text-[#6B5344] hover:underline cursor-pointer text-sm"><ArrowLeft size={16} /> Back</span></Link>
          <a href="/Thierry_Dugay_Finance_Resume.pdf" download className="flex items-center gap-2 bg-[#6B5344] hover:bg-[#8B7355] text-white px-5 py-2 rounded-lg text-sm"><Download size={16} /> Download PDF</a>
        </div>

        <div className="bg-white p-10 rounded-xl shadow-md">
          <div className="border-b border-gray-200 pb-5 mb-6">
            <h1 className="text-3xl font-bold tracking-widest text-[#1a1a1a]">THIERRY DUGAY</h1>
            <p className="text-gray-500 text-sm mt-1">Nassau, Bahamas &nbsp;|&nbsp; 242-810-5619 &nbsp;|&nbsp; thierrydugay06@gmail.com &nbsp;|&nbsp; linkedin.com/in/thierry-dugay-a201313ba &nbsp;|&nbsp; github.com/thierrydugay06</p>
          </div>

          <Section title="PROFILE">
            <p className="text-gray-700 text-sm leading-relaxed">Built 5+ automation systems reducing manual workflow time by 70% through Python, n8n, and API integrations. Analytical candidate with advanced Excel proficiency and a track record of improving workflow efficiency and supporting data-driven decision making.</p>
            <p className="text-gray-700 text-sm mt-2"><span className="font-semibold">Core Competencies:</span> Financial Analysis · Data Interpretation · Process Optimization · Excel Modeling · Workflow Automation</p>
          </Section>

          <Section title="EDUCATION">
            <div className="mb-3">
              <div className="flex justify-between"><span className="font-semibold text-gray-800 text-sm">University of the Bahamas</span><span className="text-gray-500 text-sm">Nassau, Bahamas</span></div>
              <p className="text-gray-600 text-sm">Bachelor's in Psychology &nbsp;|&nbsp; <span className="font-semibold">Minor in Accounting</span> &nbsp;|&nbsp; Expected May 2026</p>
              <p className="text-gray-600 text-sm"><span className="font-semibold">GPA: 3.72</span> &nbsp;|&nbsp; <span className="font-semibold">Dean's List</span> (Multiple Semesters)</p>
              <p className="text-gray-500 text-sm mt-1">Relevant Coursework: Financial Accounting, Managerial Accounting, Business Mathematics, Statistical Analysis</p>
            </div>
            <div>
              <div className="flex justify-between"><span className="font-semibold text-gray-800 text-sm">Boost Academy High School</span><span className="text-gray-500 text-sm">Nassau, Bahamas</span></div>
              <p className="text-gray-600 text-sm">High School Diploma &nbsp;|&nbsp; <span className="font-semibold">GPA: 3.87</span></p>
            </div>
          </Section>

          <Section title="TECHNICAL SKILLS">
            <ul className="space-y-1 text-sm text-gray-700">
              <li><span className="font-semibold">Microsoft Excel (Advanced):</span> Built data models, automated workflows using Pivot Tables and VLOOKUP, produced structured financial datasets for analysis</li>
              <li><span className="font-semibold">Financial Analysis & Data Interpretation:</span> Accounting fundamentals, financial data reconciliation, basic financial reporting</li>
              <li><span className="font-semibold">Automation & Systems:</span> n8n, API Integration, automated reporting pipelines, workflow optimization</li>
              <li><span className="font-semibold">Programming:</span> Python (scripting, data processing), C++, CLI development</li>
            </ul>
          </Section>

          <Section title="PROJECTS">
            <div className="space-y-3 text-sm text-gray-700">
              <div>
                <div className="flex justify-between"><span className="font-semibold">Workflow Automation Systems</span><span className="text-gray-500">2024 – Present</span></div>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li>Designed and deployed 5+ automation systems reducing manual processing by ~70% and improving reporting efficiency</li>
                  <li>Built financial tracking, reporting, and data organization tools using Python and n8n</li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between"><span className="font-semibold">Data Processing & Storage Infrastructure</span><span className="text-gray-500">2024</span></div>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li>Architected centralized data processing system eliminating reliance on external cloud services and reducing data costs</li>
                  <li>Optimized network configurations for high-speed data transfer and secure remote access</li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between"><span className="font-semibold">Programming & Logic Development</span><span className="text-gray-500">2024</span></div>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li>Built CLI tools including a financial calculator and secure password generator demonstrating strong algorithmic problem-solving</li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between"><span className="font-semibold">Resume Portfolio Website</span><span className="text-gray-500">Mar 2026</span></div>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li>Built and deployed personal portfolio site using React, Vite, and Tailwind CSS — live at thierrysresume.netlify.app</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="EXPERIENCE">
            <div className="flex justify-between"><span className="font-semibold text-sm">Apprentice Plumber — UGC Construction Company</span><span className="text-gray-500 text-sm">May 2024 – Dec 2024</span></div>
            <p className="text-gray-500 text-sm">Nassau, Bahamas</p>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-1 space-y-1">
              <li>Managed material tracking and on-site logistics, improving inventory efficiency and reducing project waste</li>
              <li>Collaborated within multidisciplinary teams to execute large-scale projects meeting strict safety and quality standards</li>
              <li>Applied strong attention to detail and problem-solving in high-pressure, deadline-driven environments</li>
            </ul>
          </Section>

          <Section title="LEADERSHIP & ACTIVITIES">
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li><span className="font-semibold">Baseball Team Captain (12U–18U):</span> Led team for 6+ years, represented Team Bahamas internationally (3x), earned MVP and Best Hitter awards</li>
              <li><span className="font-semibold">Treasurer, Life 101 Club:</span> Managed club finances including budgeting and expense tracking, ensuring fiscal responsibility</li>
              <li><span className="font-semibold">Chess Club Member:</span> Developed advanced strategic thinking and pattern recognition through competitive play</li>
            </ul>
          </Section>

          <Section title="CERTIFICATIONS & INTERESTS">
            <p className="text-sm text-gray-700">Currently pursuing Microsoft Excel Expert and Google Data Analytics certifications. Strong interest in finance, systems optimization, and workflow automation technologies.</p>
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-5">
      <h2 className="text-xs font-bold text-[#6B5344] tracking-widest uppercase border-b border-gray-200 pb-1 mb-3">{title}</h2>
      {children}
    </div>
  );
}
