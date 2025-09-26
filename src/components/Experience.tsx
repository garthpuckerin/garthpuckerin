import React from "react";
import { Briefcase } from "lucide-react";
import EntrustLogo from "../assets/logos/entrust_logo.jpg";
import MedidataLogo from "../assets/logos/medidata_logo.jpg";
import SuccessAcademyLogo from "../assets/logos/success_academy_charter_schools_logo.jpg";
import BoehringerLogo from "../assets/logos/boehringer_ingelheim_logo.jpg";
import MontefioreLogo from "../assets/logos/montefiore_health_system_logo.jpg";
import AmericanExpressLogo from "../assets/logos/amex_logo.jpg";
import { useTheme } from "../context/ThemeContext";
import { cn } from "../lib/utils";

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  accomplishments: string[];
  logo?: string;
  logoAlt?: string;
};

const Experience: React.FC = () => {
  const { theme } = useTheme();

  const sectionClass = cn(
    "py-20 transition-colors duration-300",
    theme === "original" && "bg-slate-950 text-gray-100",
    theme === "light" && "bg-slate-50 text-slate-800",
    theme === "dark" && "bg-slate-950 text-gray-100",
  );

  const timelineBorder =
    theme === "light" ? "border-slate-200" : "border-slate-800";

  const cardClass = cn(
    "rounded-xl border backdrop-blur-sm p-6 shadow-sm transition-colors duration-300 md:p-8",
    theme === "original" && "border-slate-800 bg-slate-900/60",
    theme === "dark" && "border-slate-800 bg-slate-900/60",
    theme === "light" && "border-slate-200 bg-white",
  );

  const textMuted = theme === "light" ? "text-slate-500" : "text-gray-400";
  const listText = theme === "light" ? "text-slate-700" : "text-gray-300";

  const badgeFallback =
    theme === "light"
      ? "bg-slate-200 text-cyan-600"
      : "bg-slate-800 text-cyan-300";

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
    <section id="experience" className={sectionClass}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold">Professional Experience</h2>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
        </div>

        <div
          className={cn("relative space-y-12 border-l pl-6", timelineBorder)}
        >
          {experience.map((role) => (
            <article key={role.company} className="relative">
              <div className="absolute -left-9 mt-1">
                <div className="h-14 w-14 overflow-hidden rounded-md shadow-lg">
                  {role.logo ? (
                    <img
                      src={role.logo}
                      alt={role.logoAlt ?? `${role.company} logo`}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div
                      className={cn(
                        "flex h-full w-full items-center justify-center",
                        badgeFallback,
                      )}
                    >
                      <Briefcase size={22} />
                    </div>
                  )}
                </div>
              </div>
              <div className={cardClass}>
                <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-wide text-cyan-600 dark:text-cyan-300">
                      {role.company}
                    </p>
                    <h3 className="text-2xl font-semibold">{role.role}</h3>
                  </div>
                  <span className={cn("text-sm", textMuted)}>
                    {role.period}
                  </span>
                </div>
                <ul className={cn("space-y-2", listText)}>
                  {role.accomplishments.map((item) => (
                    <li key={item} className="list-disc list-inside">
                      {item}
                    </li>
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
