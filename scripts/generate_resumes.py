# -*- coding: utf-8 -*-
from pathlib import Path

resume_dir = Path("public/resume")
resume_dir.mkdir(parents=True, exist_ok=True)

def escape(text: str) -> str:
    return text.replace("\\", r"\\").replace("(", r"\(").replace(")", r"\)")

def write_pdf(path: Path, lines):
    text_lines = ["BT", "/F1 12 Tf", "14 TL", "72 780 Td"]
    for idx, line in enumerate(lines):
        text_lines.append(f"({escape(line)}) Tj")
        if idx != len(lines) - 1:
            text_lines.append("T*")
    text_lines.append("ET")
    stream = "\n".join(text_lines)
    stream_bytes = stream.encode("latin-1", "replace")
    length = len(stream_bytes)

    objects = [
        "1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj",
        "2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj",
        "3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj",
        f"4 0 obj\n<< /Length {length} >>\nstream\n{stream}\nendstream\nendobj",
        "5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj",
    ]

    pdf_parts = ["%PDF-1.4\n"]
    xref_entries = ["xref", "0 6", "0000000000 65535 f "]
    for obj in objects:
        offset = len("".join(pdf_parts).encode("latin-1"))
        xref_entries.append(f"{offset:010} 00000 n ")
        pdf_parts.append(obj + "\n")
    xref = "\n".join(xref_entries) + "\n"
    pdf_parts.append(xref)
    pdf_parts.append("trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n")
    startxref = len("".join(pdf_parts).encode("latin-1"))
    pdf_parts.append(f"{startxref}\n%%EOF")
    path.write_bytes("".join(pdf_parts).encode("latin-1", "replace"))

modern_lines = [
    "GARTH PUCKERIN - Modern Resume",
    "East Stroudsburg, PA | (718) 310-8707 | garth.puckerin@me.com",
    "LinkedIn: linkedin.com/in/garthpuckerin | GitHub: github.com/garthpuckerin",
    "",
    "Executive Summary",
    "LMS administrator leveraging AI-assisted workflows to automate diagnostics and scale global learning.",
    "",
    "Core Strengths",
    "- Program and project leadership",
    "- GenAI and agentic AI integration",
    "- LMS governance and automation",
    "- Incident and risk management",
    "- Analytics and executive reporting",
    "- Stakeholder enablement",
    "",
    "Platforms and Tools",
    "Docebo, SuccessFactors, Workday, SumTotal, Canvas, Cornerstone",
    "Microsoft 365, Google Workspace, SharePoint",
    "Tableau, Power BI, Amazon QuickSight",
    "JavaScript, HTML/CSS, SQL, REST APIs, Postman",
    "",
    "Experience - Entrust Corporation (2022-2025)",
    "* Operated global Docebo ecosystem with 10k plus users and compliance-ready controls.",
    "* Integrated Workday, Salesforce, QuickSight, LinkedIn Learning to streamline KPIs.",
    "* Led Tier I and II incident response reducing MTTR.",
    "",
    "Experience - Medidata Solutions (2020-2022)",
    "* Deployed Docebo with SSO and role governance; produced admin training playbooks.",
    "* Instrumented performance monitoring and delivered adoption scorecards.",
    "",
    "Experience - Success Academy, Boehringer Ingelheim, Montefiore, American Express",
    "* Delivered LXP integrations, compliance programs, and analytics dashboards across regulated industries.",
    "",
    "Signature Projects",
    "- EPIC 2025: Modernizing Montefiore scheduling to SQL Server + FastAPI + Next.js.",
    "- PDE/IPDE: VS Code extension generating repos, tests, CI, and review gates.",
    "- PipelineOS: Intent-to-execution platform orchestrating AI-driven delivery.",
    "",
    "Education",
    "New York Code + Design Academy - Software Engineering Bootcamp (2018)",
]

classic_lines = [
    "GARTH PUCKERIN",
    "LMS Administrator | East Stroudsburg, PA | (718) 310-8707 | garth.puckerin@me.com",
    "LinkedIn /garthpuckerin | GitHub @garthpuckerin",
    "",
    "PROFILE",
    "Ten-year track record running enterprise LMS programs with a focus on compliance, integrations, and AI automation.",
    "",
    "AREAS OF EXPERTISE",
    "LMS Operations, Compliance and Audit Readiness, AI Workflows, Incident Management, Analytics, Enablement",
    "",
    "PROFESSIONAL EXPERIENCE",
    "Entrust Corporation - LMS Administrator / BSA (2022-2025)",
    " - Managed global Docebo platform (10k plus users), integrating Workday, Salesforce, QuickSight, LinkedIn Learning.",
    " - Authored HTML micro experiences and executive dashboards; reduced MTTR via Tier I and II coordination.",
    "",
    "Medidata Solutions - LMS Administrator (2020-2022)",
    " - Implemented Docebo with SSO, governance, and admin enablement assets.",
    " - Resolved performance issues using API monitoring; reported adoption KPIs to leadership.",
    "",
    "Success Academy Charter Schools - LXP Manager (2019)",
    " - Deployed xAPI-ready LXP stack; automated event workflows via APIs.",
    "",
    "Boehringer Ingelheim - LMS Associate (2016-2018)",
    " - Configured compliance learning journeys and SCORM releases.",
    "",
    "Montefiore Hospital - Project Coordinator (2015-2016)",
    " - Created ILT/WBT programs and Access-based trainer scheduling system.",
    "",
    "American Express - Compliance Training Analyst (2012-2015)",
    " - Led global compliance training and SharePoint workflow migration.",
    "",
    "EDUCATION",
    "New York Code + Design Academy - Software Engineering Bootcamp (2018)",
]

exec_lines = [
    "GARTH PUCKERIN - LMS OPERATIONS LEADER",
    "Contact: East Stroudsburg, PA | (718) 310-8707 | garth.puckerin@me.com",
    "",
    "SUMMARY",
    "Strategist blending LMS governance, AI tooling, and stakeholder enablement to deliver reliable learning ecosystems.",
    "",
    "HIGHLIGHTS",
    "* EPIC 2025: SQL Server / FastAPI / Next.js modernization of Montefiore scheduling.",
    "* PDE/IPDE: AI-augmented VS Code extension creating governed repositories and PRs.",
    "* PipelineOS: Intent-to-execution DevOps platform with AI guardrails.",
    "",
    "RECENT EXPERIENCE",
    "Entrust Corporation - LMS Administrator / BSA (2022-2025)",
    "  Maintained global Docebo, aligned Workday/Salesforce integrations, and automated analytics.",
    "",
    "Medidata Solutions - LMS Administrator (2020-2022)",
    "  Launched Docebo with SSO, produced admin tooling, and delivered adoption analytics.",
    "",
    "EARLIER ROLES",
    "Success Academy Charter Schools - LXP Manager",
    "Boehringer Ingelheim - LMS Associate",
    "Montefiore Hospital - Project Coordinator",
    "American Express - Compliance Training Analyst",
    "",
    "SKILLS",
    "Docebo, SuccessFactors, Workday, SumTotal, Canvas, Cornerstone",
    "Microsoft 365, Google Workspace, SharePoint",
    "Tableau, Power BI, Amazon QuickSight",
    "JavaScript, HTML/CSS, SQL, REST APIs, Postman",
    "",
    "EDUCATION",
    "New York Code + Design Academy - Software Engineering Bootcamp (2018)",
]

write_pdf(resume_dir / 'garth_modern_resume.pdf', modern_lines)
write_pdf(resume_dir / 'garth_classic_resume.pdf', classic_lines)
write_pdf(resume_dir / 'garth_exec_resume.pdf', exec_lines)
