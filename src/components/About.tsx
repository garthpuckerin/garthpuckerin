import React from "react";
import { Code, Palette, Users, Zap } from "lucide-react";

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: "LMS Administration",
      description: "End-to-end platform configuration and governance",
    },
    {
      icon: <Palette size={24} />,
      title: "System Integration",
      description: "API-driven connections with HRIS, CRM, and BI tools",
    },
    {
      icon: <Users size={24} />,
      title: "User Enablement",
      description: "Training, documentation, and enterprise support",
    },
    {
      icon: <Zap size={24} />,
      title: "Compliance",
      description: "Data privacy and regulatory alignment for global audiences",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Professional Summary
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                Experienced LMS Administrator with more than a decade of success
                managing, configuring, and optimizing learning management
                systems across highly regulated enterprise environments. I
                specialize in diagnosing complex platform issues, leading
                coordinated incident response, and implementing process
                improvements that keep learning programs running smoothly.
              </p>

              <p>
                I partner with cross-functional stakeholders to integrate LMS
                platforms with business-critical applications, ranging from
                Workday and Salesforce to analytics suites like Tableau and
                QuickSight, while safeguarding data privacy and compliance
                requirements.
              </p>

              <p>
                By combining technical depth with a people-first mindset, I
                support global audiences of 10,000+ learners, deliver insightful
                reporting, and build scalable solutions that improve
                accessibility, automation, and user satisfaction.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium">
                10+ Years in Enterprise LMS
              </span>
              <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium">
                10,000+ Global Learners Supported
              </span>
              <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium">
                Compliance & Security Focused
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-cyan-50 p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-cyan-600 mb-4">{highlight.icon}</div>
                <h3 className="font-bold text-slate-800 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
