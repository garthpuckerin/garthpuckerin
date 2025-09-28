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
    "LMS leader unifying governance, analytics, and AI automation for global, regulated organizations.",
    "",
    "Core Leadership Strengths",
    "- LMS governance and automation roadmaps",
    "- GenAI and agentic workflows for diagnostics and content ops",
    "- Compliance, privacy, and SOC2 readiness",
    "- Stakeholder enablement and change communications",
    "- Incident, risk, and vendor management",
    "- Executive analytics and KPI storytelling",
    "",
    "Selected Platforms and Tools",
    "Docebo | SuccessFactors | Workday | SumTotal | Canvas | Cornerstone",
    "Microsoft 365 | Google Workspace | SharePoint",
    "Tableau | Power BI | Amazon QuickSight",
    "JavaScript | HTML/CSS | SQL | REST APIs | Postman",
    "",
    "Experience - Entrust Corporation (2022-2025)",
    "* Directed a 10k+ user Docebo program with audit-ready controls and 99.98% uptime.",
    "* Integrated Workday, Salesforce, QuickSight, LinkedIn Learning to automate KPIs.",
    "* Led Tier I/II incident response, reducing resolution time by 38%.",
    "* Delivered HTML micro experiences and dashboards that lifted completion by 22%.",
    "",
    "Experience - Medidata Solutions (2020-2022)",
    "* Implemented Docebo with SSO, RBAC, and admin enablement playbooks.",
    "* Built API monitors and analytics linking adoption to Sales pipeline health.",
    "",
    "Experience - Success Academy, Boehringer Ingelheim, Montefiore, American Express",
    "* Delivered LXP integrations, compliance programs, and analytics for regulated environments.",
    "",
    "Signature Projects",
    "- EPIC 2025: SQL Server + FastAPI + Next.js modernization of Montefiore scheduling.",
    "- PDE/IPDE: AI-augmented VS Code extension generating repos, tests, CI, and docs.",
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
    "Professional Profile",
    "Ten-year record operating enterprise LMS programs with compliance rigor, AI augmentation,",
    "and stakeholder-first leadership across global organizations.",
    "",
    "Areas of Expertise",
    "LMS Operations | Compliance & Audit Readiness | GenAI Automation | Incident Management",
    "Analytics & KPI Reporting | Integration Architecture | Vendor & Stakeholder Management",
    "",
    "Professional Experience",
    "Entrust Corporation - LMS Administrator / BSA (2022-2025)",
    " - Managed Docebo for 10k+ learners; maintained SOC2 controls and 99.98% availability.",
    " - Integrated Workday, Salesforce, QuickSight, LinkedIn Learning for automated KPIs.",
    " - Orchestrated Tier I/II incident response with vendors/security, reducing MTTR by 38%.",
    " - Built HTML journeys and dashboards that increased completion by 22%.",
    "",
    "Medidata Solutions - LMS Administrator (2020-2022)",
    " - Activated Docebo with SSO/RBAC; produced admin enablement and support assets.",
    " - Implemented API and browser monitoring; delivered monthly adoption analytics.",
    "",
    "Success Academy Charter Schools - LXP Manager (2019)",
    " - Deployed xAPI-ready LXP; automated cohort workflows via APIs.",
    "",
    "Boehringer Ingelheim - LMS Associate (2016-2018)",
    " - Configured compliance training journeys, SCORM packaging, and launch coordination.",
    "",
    "Montefiore Hospital - Project Coordinator (2015-2016)",
    " - Created ILT/WBT programs, analytics dashboards, and an Access scheduling system.",
    "",
    "American Express - Compliance Training Analyst (2012-2015)",
    " - Led global compliance training, migrating workflows to SharePoint and SumTotal.",
    "",
    "Education",
    "New York Code + Design Academy - Software Engineering Bootcamp (2018)",
]

exec_lines = [
    "GARTH PUCKERIN - AI-FORWARD LMS OPERATIONS LEADER",
    "Contact: East Stroudsburg, PA | (718) 310-8707 | garth.puckerin@me.com",
    "LinkedIn: linkedin.com/in/garthpuckerin | GitHub: github.com/garthpuckerin",
    "",
    "Leadership Snapshot",
    "Drives enterprise learning strategy by pairing LMS governance with agentic AI automation",
    "that accelerates diagnostics, content operations, and analytics for executive decision makers.",
    "",
    "Impact Highlights",
    "- Entrust: Ran 10k+ user Docebo platform; integrated Workday/Salesforce/QuickSight/LinkedIn;",
    "  reduced incident MTTR by 38% and increased completions by 22%.",
    "- Medidata: Launched Docebo with SSO/RBAC, admin enablement, and adoption analytics tied",
    "  directly to Sales pipeline health.",
    "- PipelineOS (Founder): Human-in-the-loop DevOps control hub turning strategic intent into",
    "  governed delivery pipelines using provider-agnostic AI adapters.",
    "",
    "Signature Programs",
    "1. EPIC 2025: Modernizing Montefiore scheduling with SQL Server, FastAPI, Next.js, RBAC, telemetry.",
    "2. PDE/IPDE: AI-augmented VS Code extension producing repos, tests, CI, docs, and review gates.",
    "3. Agentic AI Integrations: Designed ChatGPT/Gemini/Claude workflows for diagnostics and comms.",
    "",
    "Core Capabilities",
    "- LMS strategy, governance, and modernization roadmaps",
    "- Compliance privacy controls, SOC2 audit readiness",
    "- Incident response, vendor management, SLA stewardship",
    "- Executive analytics, KPI storytelling, enablement",
    "- AI-assisted automation for productivity and insights",
    "",
    "Technical Savvy",
    "Docebo | SuccessFactors | Workday | SumTotal | Canvas | Cornerstone",
    "Microsoft 365 | Google Workspace | SharePoint",
    "Tableau | Power BI | Amazon QuickSight",
    "JavaScript | HTML/CSS | SQL | REST APIs | Postman",
    "ChatGPT | Gemini | Claude | Custom LLM adapters",
    "",
    "Experience Overview",
    "Entrust (2022-2025) | Medidata (2020-2022) | Success Academy (2019) |",
    "Boehringer Ingelheim (2016-2018) | Montefiore (2015-2016) | American Express (2012-2015)",
    "",
    "Education",
    "New York Code + Design Academy - Software Engineering Bootcamp (2018)",
]
write_pdf(resume_dir / 'garth_modern_resume.pdf', modern_lines)
write_pdf(resume_dir / 'garth_classic_resume.pdf', classic_lines)
write_pdf(resume_dir / 'garth_exec_resume.pdf', exec_lines)





