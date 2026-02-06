import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Mail, Linkedin, FileText } from 'lucide-react';

// TO USE YOUR PHOTO: 
// 1. Upload your photo (Nejad_Sanam-012__1_.jpg) to an image hosting service like:
//    - Imgur (imgur.com)
//    - Cloudinary (cloudinary.com)
//    - Or your own website hosting
// 2. Replace the PROFILE_IMAGE URL below with your hosted image URL
// 
// For now, using a professional placeholder that matches your style

const PROFILE_IMAGE = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop&q=80";

export default function HealthcarePortfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ['home', 'about', 'experience', 'investment-focus', 'case-work', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Investment Focus', id: 'investment-focus' },
    { name: 'Case Work', id: 'case-work' },
    { name: 'Contact', id: 'contact' }
  ];

  const experiences = {
    clinical: [
      {
        title: "Senior Physician Assistant, Orthopedic Trauma",
        organization: "Level I Trauma Center",
        period: "2018 – 2023",
        outcomes: [
          "Managed acute trauma cases requiring rapid clinical decision-making and interdisciplinary coordination across surgery, anesthesia, and critical care teams.",
          "Reduced post-operative complication rates by 18% through protocol redesign and systematic review of care pathways.",
          "Led quality improvement initiative that decreased average OR turnover time by 22 minutes, improving surgical throughput and patient access."
        ]
      },
      {
        title: "Physician Assistant, Orthopedic Surgery",
        organization: "Regional Medical Center",
        period: "2015 – 2018",
        outcomes: [
          "Provided perioperative care for high-volume orthopedic service line, managing 300+ surgical cases annually.",
          "Developed standardized clinical protocols that improved care consistency and reduced variation in patient outcomes.",
          "Collaborated with hospital administration on cost reduction strategies, identifying $200K in annual supply chain inefficiencies."
        ]
      }
    ],
    business: [
      {
        title: "MBA Candidate, Healthcare Management & Strategy",
        organization: "UCLA Anderson School of Management",
        period: "2023 – Present",
        outcomes: [
          "Focused coursework in healthcare economics, impact investing, financial modeling, and venture evaluation.",
          "Completed strategic consulting projects for digital health startups on market entry, unit economics, and scalability.",
          "Developed investment thesis frameworks for evaluating early-stage healthcare companies at the intersection of clinical efficacy and business viability."
        ]
      },
      {
        title: "Healthcare Strategy Consultant",
        organization: "Independent Advisory",
        period: "2022 – Present",
        outcomes: [
          "Advised three early-stage healthcare companies on operational efficiency, care delivery models, and reimbursement strategy.",
          "Conducted diligence on digital health platforms for angel investors, focusing on clinical validation, regulatory pathways, and market positioning.",
          "Built financial models to assess burn rate, customer acquisition costs, and path to profitability for B2B healthcare SaaS companies."
        ]
      }
    ],
    advisory: [
      {
        title: "Clinical Advisor",
        organization: "Digital Health Startups",
        period: "2021 – Present",
        outcomes: [
          "Provide clinical expertise and operational insight to founders building AI-enabled diagnostic tools and virtual care platforms.",
          "Evaluate product-market fit, clinical workflow integration, and provider adoption barriers.",
          "Support go-to-market strategy development by identifying key decision-makers, reimbursement hurdles, and competitive positioning."
        ]
      }
    ]
  };

  const investmentAreas = [
    {
      title: "Digital Health & Care Delivery",
      description: "Companies redesigning how care is accessed, delivered, and coordinated. Focus on virtual-first models, chronic disease management, and tools that improve clinical efficiency without adding provider burden."
    },
    {
      title: "AI-Enabled Clinical Tools",
      description: "Solutions that augment clinical decision-making through diagnostic support, workflow optimization, or predictive analytics. Must demonstrate measurable impact on outcomes, not just technical novelty."
    },
    {
      title: "Operationally Complex Healthcare Businesses",
      description: "Companies navigating regulatory constraints, reimbursement complexity, and multi-stakeholder sales cycles. Interest in businesses where operational excellence is a defensible moat."
    },
    {
      title: "Impact-Aligned Healthcare Infrastructure",
      description: "Platforms addressing workforce shortages, health equity gaps, or underserved patient populations. Emphasis on sustainable business models that align financial returns with measurable social impact."
    }
  ];

  const evaluationFramework = [
    {
      category: "Clinical Validation",
      questions: [
        "Does this solve a real clinical problem or create new workflow friction?",
        "What evidence supports clinical efficacy and safety?",
        "How does this integrate into existing care workflows?"
      ]
    },
    {
      category: "Market & Business Model",
      questions: [
        "Who pays, and what problem are we solving for them?",
        "What are unit economics at scale, and what's the path to profitability?",
        "How defensible is this business once competitors enter?"
      ]
    },
    {
      category: "Operational Feasibility",
      questions: [
        "What regulatory, reimbursement, or compliance hurdles exist?",
        "Does the team understand healthcare operations and stakeholder incentives?",
        "Can this scale without proportional increases in operational complexity?"
      ]
    },
    {
      category: "Impact & Alignment",
      questions: [
        "Does this measurably improve patient outcomes or access?",
        "Are financial incentives aligned with long-term impact goals?",
        "What are the second-order effects on the healthcare system?"
      ]
    }
  ];

  const caseStudies = [
    {
      title: "Virtual MSK Platform: Market Entry Strategy",
      problem: "Early-stage virtual musculoskeletal care platform seeking to expand from direct-to-consumer to employer and payer partnerships. Needed clarity on positioning, pricing, and go-to-market sequencing.",
      approach: "Conducted competitive landscape analysis, interviewed 15 potential B2B customers, modeled unit economics across customer segments, and developed phased market entry plan.",
      insights: "Identified that employers valued ROI clarity over clinical outcomes messaging. Recommended focusing initial outreach on self-insured employers with existing physical therapy benefits to leverage substitution narrative rather than net-new spend.",
      outcome: "Client successfully closed two enterprise pilots within six months using refined positioning and revised pricing structure."
    },
    {
      title: "AI Diagnostic Tool: Clinical Validation Assessment",
      problem: "Investor considering seed investment in AI-powered imaging diagnostic tool. Needed independent assessment of clinical validation claims and regulatory pathway.",
      approach: "Reviewed published validation studies, interviewed radiologists and hospital administrators, assessed FDA pathway complexity, and evaluated competitive positioning against existing diagnostic workflows.",
      insights: "Validation studies showed promise but lacked diversity in patient populations and real-world clinical settings. Regulatory pathway was longer than founders projected. Market adoption would hinge on integration with existing PACS systems, not standalone accuracy.",
      outcome: "Investor passed on the round but maintained relationship with founders. Company later pivoted strategy based on similar feedback from multiple advisors."
    },
    {
      title: "Care Coordination Platform: Operational Efficiency Analysis",
      problem: "Health system exploring partnership with care coordination software vendor. Needed assessment of operational impact, implementation complexity, and realistic ROI timeline.",
      approach: "Mapped current care coordination workflows, identified process bottlenecks, modeled time savings and cost reductions, and evaluated vendor implementation track record.",
      insights: "Platform could reduce coordination time by 35%, but required significant upfront workflow redesign and staff training. ROI positive by month 18, not month 6 as vendor projected.",
      outcome: "Health system moved forward with realistic expectations and structured implementation plan, avoiding costly false starts."
    }
  ];

  const skills = {
    clinical: [
      "Acute care medicine and trauma management",
      "Clinical protocol development and quality improvement",
      "Healthcare workflow analysis and process optimization",
      "Provider-patient communication and stakeholder management"
    ],
    operations: [
      "Operational efficiency and systems redesign",
      "Cross-functional team leadership and coordination",
      "Process improvement and performance metrics",
      "Change management in complex healthcare environments"
    ],
    strategy: [
      "Healthcare market analysis and competitive positioning",
      "Business model evaluation and unit economics",
      "Go-to-market strategy and customer segmentation",
      "Regulatory and reimbursement strategy assessment"
    ],
    finance: [
      "Financial modeling and scenario analysis",
      "Investment due diligence and risk assessment",
      "Impact measurement and outcomes tracking",
      "Burn rate analysis and capital efficiency evaluation"
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm' : 'bg-slate-50'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-xl font-light tracking-tight text-slate-900 hover:text-blue-700 transition-colors"
            >
              Sanam Nejad
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1 bg-slate-100 rounded-lg p-1">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 text-sm font-medium tracking-wide transition-all rounded-md ${
                    activeSection === item.id 
                      ? 'bg-blue-700 text-white shadow-sm' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-slate-900"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2 bg-slate-100 rounded-lg p-3">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-2 text-sm font-medium rounded-md transition-all ${
                    activeSection === item.id
                      ? 'bg-blue-700 text-white'
                      : 'text-slate-600 hover:bg-white hover:text-slate-900'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo - Left Side */}
            <div className="order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-slate-100 rounded-lg transform translate-x-4 translate-y-4"></div>
                <img 
                  src={PROFILE_IMAGE}
                  alt="Sanam Nejad"
                  className="relative rounded-lg shadow-lg w-full object-cover aspect-square"
                />
              </div>
            </div>
            
            {/* Content - Right Side */}
            <div className="order-2">
              <h1 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900 mb-6 leading-tight">
                Translating Clinical Insight into Scalable Strategy
              </h1>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">
                Healthcare operator and impact-focused MBA candidate combining deep clinical experience in orthopedic trauma with expertise in venture evaluation, healthcare innovation, and startup operations. Focused on businesses where operational excellence and clinical rigor create defensible value.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('investment-focus')}
                  className="inline-flex items-center px-6 py-3 bg-blue-700 text-white text-sm font-light tracking-wide hover:bg-blue-800 transition-colors rounded"
                >
                  Investment Focus
                  <ArrowRight className="ml-2" size={16} />
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center px-6 py-3 border border-slate-300 text-slate-900 text-sm font-light tracking-wide hover:border-blue-700 hover:text-blue-700 transition-colors rounded"
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light tracking-tight text-slate-900 mb-12">About</h2>
          
          <div className="space-y-6 text-slate-700 font-light leading-relaxed">
            <p>
              I spent eight years as a physician assistant in high-acuity orthopedic and trauma settings, managing complex cases that required rapid clinical judgment, interdisciplinary coordination, and systematic problem-solving under pressure. That work taught me to see patterns in chaos, to understand how clinical, operational, and financial constraints interact, and to distinguish between what sounds plausible and what actually works in practice.
            </p>
            
            <p>
              Clinical medicine is ultimately a study in systems. Every patient interaction sits at the intersection of biology, workflow, incentives, and organizational capacity. I learned that improving outcomes requires more than technical skill. It demands understanding how decisions cascade through a system, where friction emerges, and how to redesign processes so that the default path leads to better results.
            </p>
            
            <p>
              That systems-level thinking is what drew me to healthcare strategy and impact investing. I'm now an MBA candidate at UCLA Anderson, focused on healthcare management and venture evaluation. My work centers on translating clinical insight into scalable business strategy, evaluating early-stage companies at the intersection of care delivery and technology, and advising founders navigating the operational complexity of healthcare markets.
            </p>
            
            <p>
              I'm interested in businesses that don't just promise innovation but understand execution. Companies where operational rigor is a competitive advantage. Founders who grasp that healthcare is not a technology problem with a clinical wrapper, but a clinical problem that requires technology, aligned incentives, and deep operational discipline to solve.
            </p>
            
            <p>
              My approach to evaluation is grounded in pattern recognition and pragmatism. I look for businesses solving real problems, with business models that align financial returns with measurable impact, and teams that understand the difference between what works in a pitch deck and what works in a hospital system.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light tracking-tight text-slate-900 mb-12">Experience</h2>
          
          {/* Clinical Experience */}
          <div className="mb-16">
            <h3 className="text-xl font-light tracking-tight text-slate-900 mb-8 pb-2 border-b border-blue-200">
              Clinical Experience
            </h3>
            <div className="space-y-10">
              {experiences.clinical.map((exp, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="mb-3">
                    <h4 className="text-lg font-normal text-slate-900">{exp.title}</h4>
                    <div className="flex flex-wrap justify-between text-sm text-slate-600 mt-1">
                      <span>{exp.organization}</span>
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.outcomes.map((outcome, idx) => (
                      <li key={idx} className="text-slate-700 font-light leading-relaxed">
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Business & Strategy */}
          <div className="mb-16">
            <h3 className="text-xl font-light tracking-tight text-slate-900 mb-8 pb-2 border-b border-blue-200">
              Business & Strategy Experience
            </h3>
            <div className="space-y-10">
              {experiences.business.map((exp, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="mb-3">
                    <h4 className="text-lg font-normal text-slate-900">{exp.title}</h4>
                    <div className="flex flex-wrap justify-between text-sm text-slate-600 mt-1">
                      <span>{exp.organization}</span>
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.outcomes.map((outcome, idx) => (
                      <li key={idx} className="text-slate-700 font-light leading-relaxed">
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Advisory */}
          <div>
            <h3 className="text-xl font-light tracking-tight text-slate-900 mb-8 pb-2 border-b border-blue-200">
              Advisory & Consulting
            </h3>
            <div className="space-y-10">
              {experiences.advisory.map((exp, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="mb-3">
                    <h4 className="text-lg font-normal text-slate-900">{exp.title}</h4>
                    <div className="flex flex-wrap justify-between text-sm text-slate-600 mt-1">
                      <span>{exp.organization}</span>
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.outcomes.map((outcome, idx) => (
                      <li key={idx} className="text-slate-700 font-light leading-relaxed">
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Focus Section */}
      <section id="investment-focus" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light tracking-tight text-slate-900 mb-6">Investment Focus</h2>
          <p className="text-slate-700 font-light leading-relaxed mb-12">
            I focus on healthcare companies where operational complexity is a feature, not a bug. Businesses that require deep understanding of clinical workflows, regulatory environments, and stakeholder incentives to scale effectively.
          </p>

          {/* Investment Areas */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {investmentAreas.map((area, index) => (
              <div key={index} className="border border-blue-100 bg-blue-50/30 p-6 hover:border-blue-300 hover:shadow-md transition-all rounded-lg">
                <h3 className="text-lg font-normal text-slate-900 mb-3">{area.title}</h3>
                <p className="text-slate-700 font-light leading-relaxed text-sm">
                  {area.description}
                </p>
              </div>
            ))}
          </div>

          {/* Evaluation Framework */}
          <div className="mt-16">
            <h3 className="text-2xl font-light tracking-tight text-slate-900 mb-8">Evaluation Framework</h3>
            <p className="text-slate-700 font-light leading-relaxed mb-8">
              When assessing opportunities, I use a structured approach that balances clinical validation, business fundamentals, operational feasibility, and impact alignment.
            </p>
            
            <div className="space-y-8">
              {evaluationFramework.map((framework, index) => (
                <div key={index} className="border-l-2 border-blue-400 pl-6 py-2">
                  <h4 className="text-lg font-normal text-slate-900 mb-3">{framework.category}</h4>
                  <ul className="space-y-2">
                    {framework.questions.map((question, idx) => (
                      <li key={idx} className="text-slate-700 font-light leading-relaxed text-sm">
                        {question}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="mt-16">
            <h3 className="text-2xl font-light tracking-tight text-slate-900 mb-8">Core Competencies</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-6 rounded-lg">
                <h4 className="text-base font-normal text-slate-900 mb-4">Clinical Expertise</h4>
                <ul className="space-y-2">
                  {skills.clinical.map((skill, idx) => (
                    <li key={idx} className="text-slate-700 font-light text-sm">{skill}</li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-lg">
                <h4 className="text-base font-normal text-slate-900 mb-4">Operations</h4>
                <ul className="space-y-2">
                  {skills.operations.map((skill, idx) => (
                    <li key={idx} className="text-slate-700 font-light text-sm">{skill}</li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-lg">
                <h4 className="text-base font-normal text-slate-900 mb-4">Strategy</h4>
                <ul className="space-y-2">
                  {skills.strategy.map((skill, idx) => (
                    <li key={idx} className="text-slate-700 font-light text-sm">{skill}</li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-lg">
                <h4 className="text-base font-normal text-slate-900 mb-4">Finance & Investment</h4>
                <ul className="space-y-2">
                  {skills.finance.map((skill, idx) => (
                    <li key={idx} className="text-slate-700 font-light text-sm">{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Work Section */}
      <section id="case-work" className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light tracking-tight text-slate-900 mb-6">Selected Case Work</h2>
          <p className="text-slate-700 font-light leading-relaxed mb-12">
            Representative projects demonstrating structured analysis, operational insight, and practical business reasoning in healthcare contexts.
          </p>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-blue-500">
                <h3 className="text-xl font-normal text-slate-900 mb-4">{study.title}</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-normal text-blue-700 mb-2">Problem</h4>
                    <p className="text-slate-700 font-light leading-relaxed text-sm">{study.problem}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-normal text-blue-700 mb-2">Approach</h4>
                    <p className="text-slate-700 font-light leading-relaxed text-sm">{study.approach}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-normal text-blue-700 mb-2">Key Insights</h4>
                    <p className="text-slate-700 font-light leading-relaxed text-sm">{study.insights}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-normal text-blue-700 mb-2">Outcome</h4>
                    <p className="text-slate-700 font-light leading-relaxed text-sm">{study.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light tracking-tight text-slate-900 mb-6">Contact</h2>
          <p className="text-slate-700 font-light leading-relaxed mb-8">
            I'm open to advisory conversations, investment-related discussions, and collaboration on mission-aligned healthcare projects. If you're working on something that requires both clinical depth and business rigor, I'd be interested in hearing about it.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="mailto:sanam.nejad@anderson.ucla.edu" 
              className="inline-flex items-center px-6 py-3 bg-blue-700 text-white text-sm font-light tracking-wide hover:bg-blue-800 transition-colors rounded"
            >
              <Mail className="mr-2" size={16} />
              Send Email
            </a>
            <a 
              href="https://linkedin.com/in/sanamnejad" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-slate-300 text-slate-900 text-sm font-light tracking-wide hover:border-blue-700 hover:text-blue-700 transition-colors rounded"
            >
              <Linkedin className="mr-2" size={16} />
              LinkedIn
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank"
              className="inline-flex items-center px-6 py-3 border border-slate-300 text-slate-900 text-sm font-light tracking-wide hover:border-blue-700 hover:text-blue-700 transition-colors rounded"
            >
              <FileText className="mr-2" size={16} />
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center text-sm text-slate-400 font-light">
          <p>© 2026 Sanam Nejad</p>
          <p className="mt-2">Healthcare Operator & Impact Investor</p>
        </div>
      </footer>
    </div>
  );
}
