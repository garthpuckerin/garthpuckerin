import React from "react";
import { Briefcase } from "lucide-react";
import FHLBCLogo from "../assets/logos/federal_home_loan_bank_of_chicago_logo.jpg";
import CitadelLogo from "../assets/logos/citadel_federal_credit_union_logo.jpg";
import EntrustLogo from "../assets/logos/entrust_logo.jpg";
import MedidataLogo from "../assets/logos/medidata_logo.jpg";
import SuccessAcademyLogo from "../assets/logos/success_academy_charter_schools_logo.jpg";
import BoehringerLogo from "../assets/logos/boehringer_ingelheim_logo.jpg";
import MontefioreLogo from "../assets/logos/montefiore_health_system_logo.jpg";
import AmericanExpressLogo from "../assets/logos/amex_logo.jpg";
import { useTheme } from "../context/ThemeContext";
import { cn } from "../lib/utils";
import { experience } from "../data/resumeData";

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

  // Map logos to experience items
  const experienceWithLogos = experience.map((item) => {
    let logo = item.logo;
    let logoAlt = item.logoAlt;

    // Map company names to logo imports
    switch (item.company) {
      case "Federal Home Loan Bank of Chicago (FHLBC)":
        logo = FHLBCLogo;
        logoAlt = "Federal Home Loan Bank of Chicago logo";
        break;
      case "Citadel Credit Union":
        logo = CitadelLogo;
        logoAlt = "Citadel Credit Union logo";
        break;
      case "Entrust Corporation":
        logo = EntrustLogo;
        logoAlt = "Entrust Corporation logo";
        break;
      case "Medidata Solutions (Dassault Systèmes)":
        logo = MedidataLogo;
        logoAlt = "Medidata Solutions logo";
        break;
      case "Success Academy Charter Schools":
        logo = SuccessAcademyLogo;
        logoAlt = "Success Academy Charter Schools logo";
        break;
      case "Boehringer Ingelheim Pharmaceuticals":
        logo = BoehringerLogo;
        logoAlt = "Boehringer Ingelheim logo";
        break;
      case "Montefiore Hospital":
        logo = MontefioreLogo;
        logoAlt = "Montefiore Health System logo";
        break;
      case "American Express":
        logo = AmericanExpressLogo;
        logoAlt = "American Express logo";
        break;
    }

    return { ...item, logo, logoAlt };
  });

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
          {experienceWithLogos.map((role) => (
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
