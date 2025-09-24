import React from "react";
import { Briefcase } from "lucide-react";
import EntrustLogo from "../assets/logos/entrust_logo.jpg";
import MedidataLogo from "../assets/logos/medidata_logo.jpg";
import SuccessAcademyLogo from "../assets/logos/success_academy_charter_schools_logo.jpg";
import BoehringerLogo from "../assets/logos/boehringer_ingelheim_logo.jpg";
import MontefioreLogo from "../assets/logos/montefiore_health_system_logo.jpg";
import AmericanExpressLogo from "../assets/logos/amex_logo.jpg";

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  accomplishments: string[];
  logo?: string;
  logoAlt?: string;
};

const Experience: React.FC = () => {
  const experience: ExperienceItem[] = [
    {
      company: "Entrust Corporation",
      role: "LMS Administrator / BSA",
      period: "June 2022 - March 2025",
      accomplishments: [
        "Managed enterprise LMS configuration, platform reliability, and security compliance",
        "Integrated Docebo with Workday, Salesforce, QuickSight, and LinkedIn Learning",
        "Led Tier I/II incident triage alongside vendors and internal teams",
        "Created performance dashboards and engagement metrics to evaluate learning impact",
        "Built HTML-based notifications and modules to enhance navigation and accessibility",
        "Directed content implementation for three organizational branches serving 10k+ users",
      ],
      logo: EntrustLogo,
      logoAlt: "Entrust Corporation logo",
    },
    {
      company: "Medidata Solutions",
      role: "Learning Management System Administrator",
      period: "November 2020 - June 2022",
      accomplishments: [
        "Implemented and launched Docebo with minimal operational disruption",
        "Maintained user roles, authentication policies, and daily LMS operations",
        "Authored training guides and workshops for admins and power users",
        "Diagnosed performance issues using browser tooling and API testing",
        "Delivered enablement metrics covering course consumption and completion",
      ],
      logo: MedidataLogo,
      logoAlt: "Medidata Solutions logo",
    },
    {
      company: "Success Academy Charter Schools",
      role: "Learning Experience Platform Manager",
      period: "February 2019 - November 2019",
      accomplishments: [
        "Evaluated and implemented LXP tools aligned with xAPI standards",
        "Integrated Whova and supporting applications for large-scale programs",
        "Automated workflows and extended LMS functionality via APIs",
      ],
      logo: SuccessAcademyLogo,
      logoAlt: "Success Academy Charter Schools logo",
    },
    {
      company: "Boehringer Ingelheim",
      role: "LMS Associate",
      period: "October 2016 - July 2018",
      accomplishments: [
        "Configured LMS workflows to support compliance initiatives",
        "Resolved SCORM issues and managed course deployment lifecycles",
      ],
      logo: BoehringerLogo,
      logoAlt: "Boehringer Ingelheim logo",
    },
    {
      company: "Montefiore Hospital",
      role: "Project Coordinator",
      period: "October 2015 - July 2016",
      accomplishments: [
        "Produced ILT/WBT courses and delivered attendance + completion analytics",
        "Maintained daily LMS operations including course creation and registrations",
        "Developed an Access-based scheduling system for 120+ trainers across 50+ classrooms",
      ],
      logo: MontefioreLogo,
      logoAlt: "Montefiore Health System logo",
    },
    {
      company: "American Express",
      role: "Regulatory Compliance Training Analyst",
      period: "February 2012 - October 2015",
      accomplishments: [
        "Owned enterprise compliance training programs and regulatory alignment",
        "Migrated compliance workflows to SharePoint for improved reporting",
        "Created SCORM content and managed deployment within SumTotal LMS",
        "Monitored completion rates and delivered multi-cadence dashboards",
      ],
      logo: AmericanExpressLogo,
      logoAlt: "American Express logo",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
        </div>

        <div className="relative border-l border-slate-800 pl-6 space-y-12">
          {experience.map((role) => (
            <article key={role.company} className="relative">
              <div className="absolute -left-9 mt-1">
                <div className="h-14 w-14 rounded-md overflow-hidden shadow-lg">
                  {role.logo ? (
                    <img
                      src={role.logo}
                      alt={role.logoAlt ?? `${role.company} logo`}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <Briefcase size={22} className="text-cyan-300" />
                  )}
                </div>
              </div>
              <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                  <div>
                    <p className="text-cyan-400 text-sm uppercase tracking-wide">
                      {role.company}
                    </p>
                    <h3 className="text-2xl font-semibold">{role.role}</h3>
                  </div>
                  <span className="text-sm text-slate-400 whitespace-nowrap">
                    {role.period}
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-slate-300">
                  {role.accomplishments.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
