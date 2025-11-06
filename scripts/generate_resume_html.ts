import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import the resume data
import { resumeData } from '../src/data/resumeData.js';

const HTML_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Garth Puckerin - Resume Generator</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
            background: #f0f2f5;
            padding: 20px;
        }

        .controls {
            max-width: 8.5in;
            margin: 0 auto 20px;
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .controls h2 {
            margin-bottom: 15px;
            color: #333;
        }

        .style-selector {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
            flex-wrap: wrap;
        }

        .style-btn {
            padding: 10px 20px;
            border: 2px solid #ddd;
            background: white;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.2s;
            font-weight: 600;
        }

        .style-btn:hover {
            border-color: #4CAF50;
        }

        .style-btn.active {
            background: #4CAF50;
            color: white;
            border-color: #4CAF50;
        }

        .print-btn {
            width: 100%;
            padding: 15px;
            background: #2196F3;
            color: white;
            border: none;
            border-radius: 6px;
            font-size: 16px;
            cursor: pointer;
            font-weight: 600;
            transition: background 0.3s;
        }

        .print-btn:hover {
            background: #1976D2;
        }

        .print-btn:active {
            background: #1565c0;
        }

        .resume-container {
            max-width: 8.5in;
            margin: 0 auto;
            background: white;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        .resume {
            width: 8.5in;
            min-height: 11in;
            padding: 0.75in;
            background: white;
        }

        .resume.minimal {
            padding: 0.25in;
        }

        /* Classic Style */
        .resume.classic .header {
            text-align: center;
            border-bottom: 2px solid #333;
            padding-bottom: 15px;
            margin-bottom: 25px;
        }

        .resume.classic .name {
            font-size: 28pt;
            font-weight: bold;
            margin-bottom: 8px;
            color: #1a1a1a;
        }

        .resume.classic .contact {
            font-size: 10pt;
            color: #555;
        }

        .resume.classic .section {
            margin-bottom: 20px;
        }

        .resume.classic .section-title {
            font-size: 14pt;
            font-weight: bold;
            text-transform: uppercase;
            border-bottom: 1px solid #333;
            padding-bottom: 5px;
            margin-bottom: 12px;
            color: #1a1a1a;
        }

        .resume.classic .job-title {
            font-weight: bold;
            font-size: 11pt;
        }

        .resume.classic .company {
            font-style: italic;
            color: #555;
        }

        .resume.classic .date {
            float: right;
            color: #666;
            font-size: 10pt;
            margin-left: 8px;
        }

        /* Modern and Minimal styles... */
        .resume.modern {
            display: grid;
            grid-template-columns: 2.5in 1fr;
            gap: 0;
            padding: 0;
        }

        .resume.modern .sidebar {
            background: #2c3e50;
            color: white;
            padding: 0.75in 0.5in;
        }

        .resume.modern .main {
            padding: 0.75in 0.5in;
        }

        .resume.modern .name {
            font-size: 26pt;
            font-weight: bold;
            margin-bottom: 5px;
        }

        .resume.modern .title {
            font-size: 12pt;
            color: #3498db;
            margin-bottom: 20px;
        }

        .resume.modern .sidebar .section {
            margin-bottom: 25px;
        }

        .resume.modern .sidebar .section-title {
            font-size: 10pt;
            font-weight: bold;
            margin-bottom: 10px;
            color: #3498db;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .resume.modern .main .section-title {
            font-size: 12pt;
            font-weight: bold;
            color: #2c3e50;
            margin-bottom: 15px;
            padding-bottom: 5px;
            border-bottom: 2px solid #3498db;
        }

        .resume.modern .contact-item {
            margin-bottom: 8px;
            font-size: 9pt;
        }

        .resume.modern .skill {
            margin-bottom: 8px;
            font-size: 10pt;
        }

        .resume.minimal .header {
            margin-bottom: 30px;
        }

        .resume.minimal .name {
            font-size: 32pt;
            font-weight: 300;
            letter-spacing: -1px;
            margin-bottom: 5px;
            color: #000;
        }

        .resume.minimal .contact {
            font-size: 10pt;
            color: #666;
            font-weight: 300;
        }

        .resume.minimal .section {
            margin-bottom: 25px;
        }

        .resume.minimal .section-title {
            font-size: 11pt;
            font-weight: 600;
            letter-spacing: 2px;
            text-transform: uppercase;
            margin-bottom: 15px;
            color: #000;
        }

        .resume.minimal .job-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 5px;
        }

        .resume.minimal .job-title {
            font-weight: 600;
            font-size: 11pt;
        }

        .resume.minimal .date {
            color: #999;
            font-size: 10pt;
        }

        .resume.minimal .company {
            color: #666;
            margin-bottom: 8px;
        }

        .item {
            margin-bottom: 15px;
            clear: both;
        }

        ul {
            margin-left: 20px;
            margin-top: 8px;
        }

        li {
            margin-bottom: 5px;
            font-size: 10pt;
            line-height: 1.5;
        }

        @media print {
            /* Page rules are handled dynamically by setPageMargins() function */
            
            /* Suppress all browser-generated print headers and footers */
            @page {
                @top-left { content: ""; }
                @top-center { content: ""; }
                @top-right { content: ""; }
                @bottom-left { content: ""; }
                @bottom-center { content: ""; }
                @bottom-right { content: ""; }
            }
            
            /* Additional browser print suppression */
            * {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
            }
            
            /* Modern template gets edge-to-edge layout */
            .resume.modern {
                position: absolute !important;
                top: 0 !important;
                left: 0 !important;
                margin: 0 !important;
                width: 100% !important;
                height: 100% !important;
            }
            
            html, body {
                margin: 0 !important;
                padding: 0 !important;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
            }
            
            body * {
                visibility: hidden;
            }
            
            .resume-container,
            .resume-container * {
                visibility: visible;
            }
            
            .resume.classic .modern-content,
            .resume.classic .minimal-content,
            .resume.modern .classic-content,
            .resume.modern .minimal-content,
            .resume.minimal .classic-content,
            .resume.minimal .modern-content {
                display: none !important;
                visibility: hidden !important;
            }
            
            .resume.classic .classic-content,
            .resume.minimal .minimal-content {
                display: block !important;
                visibility: visible !important;
            }
            
            .resume.modern .modern-content {
                display: contents !important;
                visibility: visible !important;
            }
            
            body {
                background: white;
                padding: 0;
                margin: 0;
            }

            .controls {
                display: none !important;
            }

            .resume-container {
                position: absolute;
                left: 0;
                top: 0;
                box-shadow: none;
                max-width: none;
                margin: 0;
                width: 100vw;
                height: 100vh;
            }

            .resume {
                box-shadow: none;
                page-break-after: avoid;
                width: 100%;
                min-height: auto !important;
                height: auto !important;
                padding: 0.5in !important;
            }
            
            /* Modern template uses standard grid layout - edge-to-edge handled by dynamic @page rules */
            .resume.modern {
                position: relative !important;
                top: 0 !important;
                left: 0 !important;
                margin: 0 !important;
                width: 100% !important;
                height: 100% !important;
                display: grid;
                grid-template-columns: 2.3in 1fr;
                gap: 0;
                padding: 0 !important;
                max-width: none !important;
            }

            .resume.modern .sidebar {
                padding: 0.25in !important;
                margin: 0 !important;
                background: #2c3e50;
                color: white;
            }

            .resume.modern .main {
                padding: 0.25in !important;
                margin: 0 !important;
                background: white;
            }
            
            /* Modern template specific typography for space efficiency */
            .resume.modern .name {
                font-size: 18pt !important;
                margin-bottom: 4px !important;
            }
            
            .resume.modern .title {
                font-size: 10pt !important;
                margin-bottom: 15px !important;
            }
            
            .resume.modern .sidebar .section {
                margin-bottom: 15px !important;
            }
            
            .resume.modern .sidebar .section-title {
                font-size: 9pt !important;
                margin-bottom: 6px !important;
            }
            
            .resume.modern .main .section {
                margin-bottom: 10px !important;
            }
            
            .resume.modern .main .section-title {
                font-size: 11pt !important;
                margin-bottom: 8px !important;
            }
            
            .resume.modern .item {
                margin-bottom: 6px !important;
            }
            
            .resume.modern li {
                font-size: 8pt !important;
                line-height: 1.2 !important;
                margin-bottom: 2px !important;
            }
            
            .resume.modern p {
                font-size: 8pt !important;
                line-height: 1.3 !important;
            }

            .item {
                page-break-inside: auto;
                margin-bottom: 8px;
            }

            .section {
                page-break-inside: auto;
                margin-bottom: 12px;
            }

            .resume.classic .name {
                font-size: 22pt !important;
            }

            .resume.classic .section-title {
                font-size: 11pt !important;
            }

            .resume.classic .job-title {
                font-size: 9pt !important;
            }

            .resume.classic .contact {
                font-size: 8pt !important;
            }

            .resume.classic li {
                font-size: 10pt !important;
                line-height: 1.4 !important;
                margin-bottom: 4px !important;
            }

            .resume.modern .name {
                font-size: 20pt !important;
            }

            .resume.modern .sidebar .section-title {
                font-size: 10pt !important;
            }

            .resume.modern .main .section-title {
                font-size: 12pt !important;
            }

            li {
                font-size: 10pt !important;
                line-height: 1.4 !important;
                margin-bottom: 3px !important;
            }

            p {
                font-size: 10pt !important;
                line-height: 1.4 !important;
            }

            /* Minimal template print styles */
            .resume.minimal {
                padding: 0.25in !important;
            }
        }
    </style>
</head>
<body>
    <div class="controls">
        <h2>Garth Puckerin Resume - Choose Your Style</h2>
        <div class="style-selector">
            <button class="style-btn active" data-style="classic">Classic</button>
            <button class="style-btn" data-style="modern">Modern</button>
            <button class="style-btn" data-style="minimal">Minimal</button>
        </div>
        <button class="print-btn" onclick="handlePrint()">📥 Download as Garth_Puckerin_Resume.pdf</button>
    </div>

    <div class="resume-container">
        <div class="resume classic" id="resume">
            <!-- Classic Template -->
            <div class="classic-content">
{{CLASSIC_CONTENT}}
            </div>

            <!-- Modern Template -->
            <div class="modern-content" style="display: none;">
{{MODERN_CONTENT}}
            </div>

            <!-- Minimal Template -->
            <div class="minimal-content" style="display: none;">
{{MINIMAL_CONTENT}}
            </div>
        </div>
    </div>

    <script type="module">
        const styleBtns = document.querySelectorAll('.style-btn');
        const resume = document.getElementById('resume');
        const templates = {
            classic: document.querySelector('.classic-content'),
            modern: document.querySelector('.modern-content'),
            minimal: document.querySelector('.minimal-content')
        };

        // Function to dynamically inject @page rules for different templates
        function setPageMargins(templateType) {
            // Remove any existing dynamic page rules
            const existingStyle = document.getElementById('dynamic-page-rules');
            if (existingStyle) {
                existingStyle.remove();
            }
            
            if (templateType === 'modern') {
                // Create new style element with zero margins for modern template
                const style = document.createElement('style');
                style.id = 'dynamic-page-rules';
                style.textContent = \`
                    @media print {
                        @page {
                            size: letter;
                            margin: 0 !important;
                            @top-left { content: ""; }
                            @top-center { content: ""; }
                            @top-right { content: ""; }
                            @bottom-left { content: ""; }
                            @bottom-center { content: ""; }
                            @bottom-right { content: ""; }
                        }
                        @page :first {
                            margin: 0 !important;
                            @top-left { content: ""; }
                            @top-center { content: ""; }
                            @top-right { content: ""; }
                            @bottom-left { content: ""; }
                            @bottom-center { content: ""; }
                            @bottom-right { content: ""; }
                        }
                        @page :not(:first) {
                            margin: 0 !important;
                            @top-left { content: ""; }
                            @top-center { content: ""; }
                            @top-right { content: ""; }
                            @bottom-left { content: ""; }
                            @bottom-center { content: ""; }
                            @bottom-right { content: ""; }
                        }
                    }
                \`;
                document.head.appendChild(style);
            } else if (templateType === 'minimal') {
                // Create new style element with 0.25in left/right margins for minimal template
                const style = document.createElement('style');
                style.id = 'dynamic-page-rules';
                style.textContent = \`
                    @media print {
                        @page {
                            size: letter;
                            margin: 0.75in 0.25in 0.5in 0.25in !important;
                            @top-left { content: ""; }
                            @top-right { content: ""; }
                            @bottom-left { content: ""; }
                            @bottom-center { content: ""; }
                            @bottom-right { content: ""; }
                        }
                        @page :first {
                            margin: 0 0.25in 0.5in 0.25in !important;
                            @top-left { content: ""; }
                            @top-center { content: ""; }
                            @top-right { content: ""; }
                            @bottom-left { content: ""; }
                            @bottom-center { content: ""; }
                            @bottom-right { content: ""; }
                        }
                        @page :not(:first) {
                            margin: 0.75in 0.25in 0.5in 0.25in !important;
                            @top-left { content: ""; }
                            @top-center {
                                content: "Garth Puckerin";
                            }
                            @top-right { content: ""; }
                            @bottom-left { content: ""; }
                            @bottom-center { content: ""; }
                            @bottom-right { content: ""; }
                        }
                    }
                \`;
                document.head.appendChild(style);
            } else if (templateType === 'classic') {
                // Create new style element with proper margins for classic template
                const style = document.createElement('style');
                style.id = 'dynamic-page-rules';
                style.textContent = \`
                    @media print {
                        @page {
                            size: letter;
                            margin: 0.75in 0.5in 0.5in 0.5in !important;
                            @top-left { content: ""; }
                            @top-right { content: ""; }
                            @bottom-left { content: ""; }
                            @bottom-center { content: ""; }
                            @bottom-right { content: ""; }
                        }
                        @page :first {
                            margin-top: 0 !important;
                            @top-left { content: ""; }
                            @top-center { content: ""; }
                            @top-right { content: ""; }
                            @bottom-left { content: ""; }
                            @bottom-center { content: ""; }
                            @bottom-right { content: ""; }
                        }
                        @page :not(:first) {
                            margin: 0.75in 0.5in 0.5in 0.5in !important;
                            @top-left { content: ""; }
                            @top-center {
                                content: "Garth Puckerin";
                            }
                            @top-right { content: ""; }
                            @bottom-left { content: ""; }
                            @bottom-center { content: ""; }
                            @bottom-right { content: ""; }
                        }
                    }
                \`;
                document.head.appendChild(style);
            }
        }

        function handlePrint() {
            console.log('Print button clicked');
            try {
                // Check which template is currently active and set appropriate margins
                const currentTemplate = document.querySelector('.resume.classic, .resume.modern, .resume.minimal');
                let templateType = 'classic'; // default
                if (currentTemplate && currentTemplate.classList.contains('modern')) {
                    templateType = 'modern';
                } else if (currentTemplate && currentTemplate.classList.contains('minimal')) {
                    templateType = 'minimal';
                }
                setPageMargins(templateType);
                
                window.print();
            } catch (error) {
                console.error('Print error:', error);
                alert('Unable to open print dialog. Please try using Ctrl+P (Windows) or Cmd+P (Mac)');
            }
        }

        // Make handlePrint globally available
        window.handlePrint = handlePrint;

        function getUrlParameter(name) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(name);
        }

        function initializeStyle() {
            const styleParam = getUrlParameter('style');
            if (styleParam && ['classic', 'modern', 'minimal'].includes(styleParam)) {
                styleBtns.forEach(b => b.classList.remove('active'));
                
                const targetBtn = document.querySelector(\`[data-style="\${styleParam}"]\`);
                if (targetBtn) {
                    targetBtn.classList.add('active');
                }
                
                resume.className = \`resume \${styleParam}\`;
                
                // Set appropriate page margins
                setPageMargins(styleParam);
                
                Object.keys(templates).forEach(key => {
                    templates[key].style.display = key === styleParam ? 'block' : 'none';
                });

                if (styleParam === 'modern') {
                    templates.modern.style.display = 'contents';
                }
            }
        }

        styleBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const style = btn.dataset.style;
                
                styleBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                resume.className = \`resume \${style}\`;
                
                // Set appropriate page margins
                setPageMargins(style);
                
                Object.keys(templates).forEach(key => {
                    templates[key].style.display = key === style ? 'block' : 'none';
                });

                if (style === 'modern') {
                    templates.modern.style.display = 'contents';
                }
            });
        });

        document.addEventListener('DOMContentLoaded', initializeStyle);
    </script>
</body>
</html>`;

function renderClassic() {
  const { personal, summary, coreCompetencies, experience, education } = resumeData;
  
  let html = `
                <div class="header">
                    <div class="name">${personal.name.toUpperCase()}</div>
                    <div class="contact">
                        ${personal.phone} | ${personal.location} | ${personal.email}<br>
                        ${personal.linkedin} | ${personal.github}
                    </div>
                </div>

                <div class="section">
                    <div class="section-title">Professional Summary</div>
                    <p style="font-size: 10pt; line-height: 1.6;">${summary}</p>
                </div>

                <div class="section">
                    <div class="section-title">Core Competencies</div>
                    <p style="font-size: 10pt; line-height: 1.5;">
                        ${coreCompetencies.join(' • ')}
                    </p>
                </div>

                <div class="section">
                    <div class="section-title">Professional Experience</div>
                    ${experience.map(item => `
                    <div class="item">
                        <div class="job-title">${item.role}</div>
                        <div class="company">${item.company} <span class="date">${item.period}</span></div>
                        <ul>
                            ${item.accomplishments.map(acc => `<li>${acc}</li>`).join('\n')}
                        </ul>
                    </div>
                    `).join('\n')}
                </div>

                <div class="section">
                    <div class="section-title">Education</div>
                    <div class="item">
                        <div class="job-title">${education.program}</div>
                        <div class="company">${education.institution} <span class="date">${education.year}</span></div>
                        <p style="font-size: 10pt; margin-top: 8px; margin-bottom: 8px;">${education.description}</p>
                        ${education.coursework.map(category => `
                        <div style="margin-bottom: 10px;">
                            <strong style="font-size: 10pt;">${category.title}:</strong>
                            <span style="font-size: 10pt;"> ${category.items.join(', ')}</span>
                        </div>
                        `).join('')}
                    </div>
                </div>`;
  
  return html.trim();
}

function renderModern() {
  const { personal, summary, coreCompetencies, experience, education } = resumeData;
  
  let html = `
                <div class="sidebar">
                    <div class="section">
                        <div class="section-title">Contact</div>
                        <div class="contact-item">${personal.email}</div>
                        <div class="contact-item">${personal.phone}</div>
                        <div class="contact-item">${personal.location}</div>
                        <div class="contact-item">${personal.linkedin}</div>
                        <div class="contact-item">${personal.github}</div>
                    </div>

                    <div class="section">
                        <div class="section-title">Core Skills</div>
                        ${coreCompetencies.slice(0, 6).map(skill => `<div class="skill">${skill}</div>`).join('\n')}
                    </div>

                    <div class="section">
                        <div class="section-title">Education</div>
                        <div style="font-size: 10pt; font-weight: 600; margin-bottom: 3px;">${education.program}</div>
                        <div style="font-size: 9pt;">${education.institution}</div>
                        <div style="font-size: 9pt; color: #bbb; margin-bottom: 8px;">${education.year}</div>
                        ${education.coursework.map(category => `
                        <div style="margin-bottom: 6px;">
                            <div style="font-size: 8pt; font-weight: 600; color: #3498db; margin-bottom: 2px;">${category.title}</div>
                            <div style="font-size: 8pt; line-height: 1.3;">${category.items.join(', ')}</div>
                        </div>
                        `).join('')}
                    </div>
                </div>

                <div class="main">
                    <div class="name">${personal.name}</div>
                    <div class="title">${personal.title}</div>

                    <div class="section">
                        <div class="section-title">Professional Summary</div>
                        <p style="font-size: 10pt; line-height: 1.6; color: #333;">${summary}</p>
                    </div>

                    <div class="section">
                        <div class="section-title">Experience</div>
                        ${experience.slice(0, 4).map(item => `
                        <div class="item">
                            <div style="font-weight: 600; font-size: 11pt;">${item.role}</div>
                            <div style="color: #666; font-size: 10pt; margin-bottom: 3px;">${item.company} | ${item.period}</div>
                            <ul style="color: #333;">
                                ${item.accomplishments.slice(0, 2).map(acc => `<li>${acc}</li>`).join('\n')}
                            </ul>
                        </div>
                        `).join('\n')}

                        <div class="item">
                            <div style="font-weight: 600; font-size: 10pt; color: #555;">Previous Roles:</div>
                            <div style="font-size: 9pt; color: #666; line-height: 1.6;">
                                ${experience.slice(4).map(item => `${item.company} (${item.role}, ${item.period.split(' - ')[0]})`).join(' • ')}
                            </div>
                        </div>
                    </div>
                </div>`;
  
  return html.trim();
}

function renderMinimal() {
  const { personal, summary, experience, education } = resumeData;
  
  // Create a minimal summary - just the key point
  const minimalSummary = "LMS Administrator with 10+ years managing enterprise learning platforms across financial, healthcare, and technology organizations. Specialized in Docebo configuration, system integrations, UAT coordination, and compliance assurance.";
  
  let html = `
                <div class="header">
                    <div class="name">${personal.name}</div>
                    <div class="contact">
                        ${personal.email} • ${personal.phone} • linkedin: /garthpuckerin • github: /garthpuckerin • ${personal.location}
                    </div>
                </div>

                <div class="section">
                    <div class="section-title">Summary</div>
                    <p style="font-size: 10pt; line-height: 1.7; color: #333;">${minimalSummary}</p>
                </div>

                <div class="section">
                    <div class="section-title">Experience</div>
                    ${experience.slice(0, 4).map(item => `
                    <div class="item">
                        <div class="job-header">
                            <div class="job-title">${item.role}, ${item.company}</div>
                            <div class="date">${item.period}</div>
                        </div>
                        <ul>
                            ${item.accomplishments.slice(0, 2).map(acc => `<li>${acc}</li>`).join('\n')}
                        </ul>
                    </div>
                    `).join('\n')}
                    
                    <div class="item">
                        <div class="job-header">
                            <div class="job-title" style="font-weight: 600; color: #666;">Previous Roles</div>
                            <div class="date"></div>
                        </div>
                        <div style="font-size: 9pt; color: #666; line-height: 1.6;">
                            ${experience.slice(4).map(item => `${item.company} (${item.role}, ${item.period.split(' - ')[0]})`).join(' • ')}
                        </div>
                    </div>
                </div>

                <div class="section">
                    <div class="section-title">Education</div>
                    <div class="item">
                        <div class="job-header">
                            <div class="job-title">${education.program}</div>
                            <div class="date">${education.year}</div>
                        </div>
                        <div class="company">${education.institution}</div>
                        <div style="font-size: 9pt; margin-top: 6px; line-height: 1.4;">
                            ${education.coursework.map(category => `<strong>${category.title}:</strong> ${category.items.join(', ')}`).join(' • ')}
                        </div>
                    </div>
                </div>`;
  
  return html.trim();
}

// Generate the HTML
const classicContent = renderClassic();
const modernContent = renderModern();
const minimalContent = renderMinimal();

const finalHTML = HTML_TEMPLATE
  .replace('{{CLASSIC_CONTENT}}', classicContent)
  .replace('{{MODERN_CONTENT}}', modernContent)
  .replace('{{MINIMAL_CONTENT}}', minimalContent);

// Write to file
const outputPath = path.join(__dirname, '../public/resume/resume-generator.html');
fs.writeFileSync(outputPath, finalHTML, 'utf8');
console.log('✅ Generated resume-generator.html from src/data/resumeData.ts');

