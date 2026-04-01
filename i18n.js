const translations = {
    en: {
        logo_engineering: "ENGINEERING",
        system_status: "SYSTEM OPERATIONAL",
        h1_part1: "Apex Data Engineering for",
        h1_gradient: "Global B2B Growth.",
        compliance: "// GDPR & CCPA COMPLIANT B2B DATA ENGINEERING",
        subtitle: "We identify what others miss. Our autonomous engine scans the global web to transform technical vulnerabilities into high-ticket sales opportunities.",
        feature1_title: "Autonomous Web Infiltration",
        feature1_desc: "Our proprietary engine bypasses standard barriers to extract deep metadata from any domain worldwide, bypassing residential blocks and firewalls.",
        feature2_title: "Universal AI Inference",
        feature2_desc: "Powered by advanced machine learning algorithms, we analyze tech-stacks, mobile performance, and conversion gaps to identify $1,000+ lead assets in real-time.",
        feature3_title: "Precision Sniper Hooks",
        feature3_desc: "We don't send emails; we deliver technical evidence. Every data point is paired with a hyper-personalized hook that forces engagement.",
        placeholder_agency: "Agency Name",
        placeholder_niche: "Target Niche",
        placeholder_location: "Location",
        placeholder_email: "Email",
        button_request: "Request Custom Data Batch",
        limited_capacity: "Limited capacity for Q2 2026. US-Agencies only.",
        footer_links: "GLOBAL // INTERNATIONAL // APEX"
    },
    de: {
        logo_engineering: "ENGINEERING",
        system_status: "SYSTEM BEREIT",
        h1_part1: "Apex Data Engineering für",
        h1_gradient: "globales B2B-Wachstum.",
        compliance: "// DSGVO & CCPA KONFORMES B2B DATA ENGINEERING",
        subtitle: "Wir identifizieren, was andere übersehen. Unsere autonome Engine scannt das globale Web, um technische Schwachstellen in hochkarätige Verkaufschancen zu verwandeln.",
        feature1_title: "Autonome Web-Infiltration",
        feature1_desc: "Unsere proprietäre Engine umgeht Standardbarrieren, um tiefe Metadaten von jeder Domain weltweit zu extrahieren – vorbei an Firewalls und Blockaden.",
        feature2_title: "Universal AI Inference",
        feature2_desc: "Angetrieben durch fortschrittliche Machine-Learning-Algorithmen analysieren wir Tech-Stacks und Conversion-Lücken, um $1.000+ Lead-Assets in Echtzeit zu finden.",
        feature3_title: "Precision Sniper Hooks",
        feature3_desc: "Wir versenden keine gewöhnlichen E-Mails; wir liefern technische Beweise. Jeder Datenpunkt wird mit einem personalisierten Hook kombiniert.",
        placeholder_agency: "Agentur Name",
        placeholder_niche: "Ziel-Nische",
        placeholder_location: "Standort",
        placeholder_email: "E-Mail",
        button_request: "Individuellen Datensatz anfordern",
        limited_capacity: "Begrenzte Kapazität für Q2 2026. Nur für US-Agenturen.",
        footer_links: "GLOBAL // INTERNATIONAL // APEX"
    }
};

function setLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
    document.documentElement.lang = lang;
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT') {
                element.placeholder = translations[lang][key];
            } else if (element.classList.contains('gradient-text')) {
                element.textContent = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Handle special cases like complex innerHTML if needed
    const h1 = document.querySelector('h1');
    if (h1) {
        h1.innerHTML = `${translations[lang].h1_part1} <span class="gradient-text">${translations[lang].h1_gradient}</span>`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLanguage') || (navigator.language.startsWith('de') ? 'de' : 'en');
    setLanguage(savedLang);
});
