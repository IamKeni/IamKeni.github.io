// Translation Dictionary (NL / EN)
const translations = {
    nl: {
        'nav-projects': 'Projecten',
        'nav-lab': 'Software Lab',
        'nav-skills': 'Skills & Certificaten',
        'nav-edu': 'Opleiding',
        'nav-contact': 'Contact',

        'hi': 'Hoi, ik ben',
        'hero-subtitle': 'HBO-ICT student Cloud & Security Engineering met een sterke basis in elektrotechniek en IT-infrastructuur. Gespecialiseerd in het ontwerpen, beveiligen en beheren van hybride netwerken en cloudomgevingen.',
        'stat1': 'Casestudies',
        'stat2': 'Certificaten',
        'stat3': 'Jaar Praktijk',
        'cta-work': 'Bekijk Projecten',
        'cta-cv': 'Download CV',
        'profile-role': 'Cloud & Security Student',

        'nav-about': 'Over Mij',
        'about-title': 'Over Mij',
        'about-p1': 'Ik ben Henry, HBO-ICT student Cloud & Security Engineering aan Windesheim. Mijn achtergrond ligt in zowel elektrotechniek als IT-infrastructuur, waardoor ik systemen begrijp van fysieke installatie tot cloudomgeving.',
        'about-p2': 'Tijdens mijn MBO-opleidingen heb ik gewerkt met Windows, Linux, Cisco en verschillende netwerk- en securityoplossingen. Ik begon met kabels trekken en stopcontacten aansluiten tijdens mijn elektrotechniek-opleiding, en die gewoonte om eerst het fysieke te snappen voordat je iets beveiligt, zit nog steeds in hoe ik naar systemen kijk.',
        'about-p3': 'Op dit moment ben ik bezig met Proxmox en netwerksegmentatie in mijn homelab, en duik ik steeds dieper in cloud computing en hybride infrastructuren. Mijn focus ligt op het beveiligen van informatiesystemen binnen moderne omgevingen. De software en tools die ik bouw publiceer ik onder de naam <a href="#lab">IamKenii Productions</a>.',
        'about-skills-title': 'KERNCOMPETENTIES',
        'about-skill1': 'Linux- & Systeembeheer',
        'about-skill2': 'Datacenter Infrastructuur (MBO-project)',
        'about-skill3': 'Netwerkarchitectuur & Segmentatie',
        'about-skill4': 'Specialisatie in Cloud & Security',

        'projects': 'Projecten & Casestudies',
        'badge-hardware': 'Hardware & Netwerk',
        'project1-title': 'School Datacenter Implementatie',
        'project1-desc': 'Volledige realisatie van een nieuw schooldatacenter tijdens mijn MBO-4 afstuderen. Van fysieke structured cabling en rack-indeling tot de configuratie van VLANs en firewall-regels.',
        'case-challenge-title': 'De Uitdaging',
        'case1-challenge': 'Vervanging van een verouderde serverruimte door een modern, energie-efficiënt datacenter dat voldoet aan huidige beveiligingsnormen.',
        'case-solution-title': 'Aanpak & Realisatie',
        'case1-step1': 'Ontwerpen van rack-lay-out en structured cabling (CAT6a/Glasvezel).',
        'case1-step2': 'Installatie en configuratie van managed switches en hardware.',
        'case1-step3': 'Implementatie van netwerksegmentatie met gescheiden VLANs en firewall-policies.',
        'toggle-details': 'Details / Casestudy',

        'badge-homelab': 'Homelab & Cloud',
        'project2-title': 'Proxmox Monitoring Setup',
        'project2-desc': 'Self-hosted telemetry en omgevingsmonitoring. DHT11 hardware-sensoren gekoppeld aan een Proxmox-cluster dat live statistieken verwerkt op een gecentraliseerd dashboard.',
        'case2-desc': 'Opzetten van een virtuele LXC-container op Proxmox, verwerking van sensor-data via Python scripts en visualisatie in Grafana met geautomatiseerde notificaties.',

        'lab-desc': 'Onder het label <strong>IamKenii Productions</strong> ontwerp en ontwikkel ik eigen software tools, scripts en web-applicaties. Dit dient als mijn persoonlijke zandbak om nieuwe technologieën en security-tools in de praktijk te testen.',
        'lab-btn': 'Bezoek ip.henryelsinga.nl',

        'skills': 'Vaardigheden & Certificaten',
        'cert-vca-desc': 'Officieel gecertificeerd voor veilig werken in risicovolle en technische omgevingen.',

        'education': 'Opleiding & Achtergrond',
        'current': 'Huidig',
        'completed': 'Afgerond',
        'edu1-desc': 'Focus op cybersecurity, ethical hacking, netwerkbeveiliging en informatiebeveiliging binnen cloudinfrastructuur.',
        'edu2-desc': 'Brede basis in ICT-systemen, softwareontwikkeling, hardware en gebruikersgericht ontwerpen.',
        'edu3-desc': 'Systeem- en netwerkbeheer, serverconfiguratie en praktijkervaring opgedaan met het datacenterproject van de school.',
        'edu4-desc': 'Fysieke infrastructuur, bekabeling en elektrotechniek. De basis voor mijn grondige kennis van fysieke systemen.',

        'contact-title': 'Laten We Connecten',
        'contact-subtitle': 'Op zoek naar een gedreven Cloud & Security student voor een stage of project? Stuur gerust een bericht!',
        'cta-title': 'Direct contact opnemen?',
        'cta-text': 'Of je nu een vraag hebt, een project wilt bespreken of wilt netwerken — mijn mailbox staat open.',
        'send-message': 'Stuur Een Bericht',
        'footer': '| Cloud & Security Portfolio',
        'back-top': 'Terug naar boven'
    },
    en: {
        'nav-projects': 'Projects',
        'nav-lab': 'Software Lab',
        'nav-skills': 'Skills & Certs',
        'nav-edu': 'Education',
        'nav-contact': 'Contact',

        'hi': 'Hi, I\'m',
        'hero-subtitle': 'HBO-ICT student in Cloud & Security Engineering with a strong foundation in electrical engineering and IT infrastructure. Specialized in designing, securing, and managing hybrid networks and cloud environments.',
        'stat1': 'Case Studies',
        'stat2': 'Certificates',
        'stat3': 'Years Practice',
        'cta-work': 'View Projects',
        'cta-cv': 'Download CV',
        'profile-role': 'Cloud & Security Student',

        'nav-about': 'About Me',
        'about-title': 'About Me',
        'about-p1': 'I am Henry, an HBO-ICT student in Cloud & Security Engineering at Windesheim. My background spans both electrical engineering and IT infrastructure, giving me a solid understanding of systems from physical installations to cloud environments.',
        'about-p2': 'During my vocational studies (MBO), I worked with Windows, Linux, Cisco, and various network and security solutions. Starting with pulling cables and connecting sockets during my electrical engineering track taught me to understand the physical layer before securing it—an approach I still use today.',
        'about-p3': 'Currently, I am working with Proxmox and network segmentation in my homelab while diving deeper into cloud computing and hybrid infrastructures. My focus is on securing information systems in modern environments. I publish my custom software tools and scripts under the name <a href="#lab">IamKenii Productions</a>.',
        'about-skills-title': 'CORE COMPETENCIES',
        'about-skill1': 'Linux & System Administration',
        'about-skill2': 'Datacenter Infrastructure (MBO project)',
        'about-skill3': 'Network Architecture & Segmentation',
        'about-skill4': 'Specialization in Cloud & Security',

        'projects': 'Projects & Case Studies',
        'badge-hardware': 'Hardware & Network',
        'project1-title': 'School Datacenter Implementation',
        'project1-desc': 'Full implementation of a new school datacenter during my MBO-4 graduation project. From physical structured cabling to VLAN configuration and firewall rules.',
        'case-challenge-title': 'The Challenge',
        'case1-challenge': 'Replacing an outdated server room with a modern, energy-efficient datacenter that meets modern security standards.',
        'case-solution-title': 'Approach & Realization',
        'case1-step1': 'Designing rack layout and structured cabling (CAT6a/Fiber).',
        'case1-step2': 'Installation and configuration of managed switches and hardware.',
        'case1-step3': 'Implementation of network segmentation using dedicated VLANs and firewall policies.',
        'toggle-details': 'Details / Case Study',

        'badge-homelab': 'Homelab & Cloud',
        'project2-title': 'Proxmox Monitoring Setup',
        'project2-desc': 'Self-hosted telemetry and environmental monitoring. DHT11 hardware sensors linked to a Proxmox cluster processing live stats on a dashboard.',
        'case2-desc': 'Deployment of an LXC container on Proxmox, processing sensor data via Python scripts, and visualising in Grafana with automated alerts.',

        'lab-desc': 'Under the subbrand <strong>IamKenii Productions</strong>, I build software tools, scripts, and applications. It serves as my practical sandbox for security testing.',
        'lab-btn': 'Visit ip.henryelsinga.nl',

        'skills': 'Skills & Certifications',
        'cert-vca-desc': 'Officially certified for safe working practices in technical and high-risk environments.',

        'education': 'Education & Background',
        'current': 'Current',
        'completed': 'Completed',
        'edu1-desc': 'Focus on cybersecurity, ethical hacking, network security, and cloud infrastructure safety.',
        'edu2-desc': 'Broad foundation in ICT systems, software development, hardware, and user-centered design.',
        'edu3-desc': 'System and network administration, server configuration, and practical experience gained from the school datacenter project.',
        'edu4-desc': 'Physical infrastructure, cabling, and electrical engineering. The foundation of my hands-on hardware understanding.',

        'contact-title': 'Let\'s Connect',
        'contact-subtitle': 'Looking for a motivated Cloud & Security student for an internship or project? Feel free to reach out!',
        'cta-title': 'Ready to talk?',
        'cta-text': 'Whether you have a question, want to discuss a project, or just network — my inbox is open.',
        'send-message': 'Send a Message',
        'footer': '| Cloud & Security Portfolio',
        'back-top': 'Back to top'
    }
};

let currentLanguage = 'nl';
let currentTheme = 'light';

// Theme Switcher
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');

    if (currentTheme === 'light') {
        body.setAttribute('data-theme', 'dark');
        if (themeIcon) themeIcon.className = 'fas fa-sun';
        currentTheme = 'dark';
    } else {
        body.setAttribute('data-theme', 'light');
        if (themeIcon) themeIcon.className = 'fas fa-moon';
        currentTheme = 'light';
    }
    localStorage.setItem('theme', currentTheme);
}

// Language Switcher
function changeLanguage(lang) {
    currentLanguage = lang;

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        const translation = translations[lang]?.[key];
        
        if (translation) {
            if (translation.includes('<')) {
                el.innerHTML = translation;
            } else {
                el.textContent = translation;
            }
        }
    });

    document.documentElement.lang = lang;
    localStorage.setItem('language', lang);
}

// Case Study Toggle (Sluit alle andere, klapt de gekozen open/dicht)
function toggleCaseStudy(id) {
    document.querySelectorAll('.work-case-study').forEach(el => {
        if (el.id !== id) {
            el.classList.remove('open');
        }
    });

    const caseStudy = document.getElementById(id);
    if (caseStudy) {
        caseStudy.classList.toggle('open');
    }
}

// Intersection Observer for scroll animations
function setupIntersectionObserver() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Load Preferences
function loadPreferences() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    currentTheme = savedTheme;
    document.body.setAttribute('data-theme', currentTheme);
    
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
        themeIcon.className = currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }

    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && savedLanguage !== currentLanguage) {
        changeLanguage(savedLanguage);
    }
}

// Mobile Navigation Toggle
function setupMobileNav() {
    const toggleBtn = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    if (!toggleBtn || !navLinks) return;

    toggleBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = toggleBtn.querySelector('i');
        if (icon) {
            icon.className = navLinks.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
        }
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = toggleBtn.querySelector('i');
            if (icon) icon.className = 'fas fa-bars';
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadPreferences();
    setupIntersectionObserver();
    setupMobileNav();
});
