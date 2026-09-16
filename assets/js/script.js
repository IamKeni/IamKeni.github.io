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
        'footer-privacy': 'Privacy & Disclaimer',
        'back-top': 'Terug naar boven',

        'privacy-page-title': 'Privacy & Disclaimer',
        'privacy-subtitle': 'Informatie over privacy, gegevensverwerking, cookies en het gebruik van deze website.',
        'privacy-back': 'Terug naar Portfolio',
        'privacy-updated': 'Laatst bijgewerkt: 2026',

        'privacy-card1-title': '1. Algemeen & Privacyverklaring',
        'privacy-card1-p1': 'Welkom op de portfolio-website van <strong>Henry Elsinga</strong> (bereikbaar via <code>henryelsinga.nl</code>). Ik hecht veel waarde aan privacy en transparantie. Deze website is ontworpen om mijn kennis, projecten en ervaringen als HBO-ICT Cloud & Security student te tonen.',
        'privacy-card1-p2': 'Deze website verzamelt geen direct identificeerbare persoonsgegevens van bezoekers, tenzij je er zelf voor kiest om per e-mail contact met mij op te nemen. Er worden geen trackingprofielen opgebouwd en er is geen sprake van geautomatiseerde besluitvorming.',

        'privacy-card2-title': '2. Gegevensverwerking bij Contact',
        'privacy-card2-p1': 'Als je contact met mij opneemt via e-mail of LinkedIn, worden de door jou verstrekte gegevens (zoals je naam, e-mailadres en de inhoud van je bericht) uitsluitend gebruikt om te reageren op je vraag of verzoek.',
        'privacy-card2-p2': 'Deze communicatiegegevens worden vertrouwelijk behandeld, nooit aan derden verstrekt voor commerciële doeleinden en niet langer bewaard dan noodzakelijk voor het betreffende contact.',

        'privacy-card3-title': '3. Cookies & Lokale Browseropslag',
        'privacy-card3-p1': 'Deze website maakt <strong>geen</strong> gebruik van tracking-cookies, advertentiecookies of analytische cookies van derden.',
        'privacy-card3-p2': 'Om je gebruikerservaring te verbeteren, maakt de website uitsluitend gebruik van browser <code>localStorage</code> voor functionele doeleinden:',
        'privacy-card3-li1': '<strong>Thema-voorkeur:</strong> het onthouden of je de website in de lichte of donkere modus wilt bekijken (<code>theme</code>).',
        'privacy-card3-li2': '<strong>Taalvoorkeur:</strong> het onthouden van de gekozen taal (<code>language</code>: Nederlands of Engels).',
        'privacy-card3-p3': 'Deze gegevens blijven te allen tijde lokaal op jouw apparaat opgeslagen en worden nooit naar externe servers verzonden.',

        'privacy-card4-title': '4. Externe Links & Software Lab',
        'privacy-card4-p1': 'Op deze website staan links naar externe platforms en diensten, waaronder GitHub, LinkedIn en softwareprojecten onder de naam <strong>IamKenii Productions</strong> (zoals <code>ip.henryelsinga.nl</code>).',
        'privacy-card4-p2': 'Zodra je via een link deze website verlaat, is het privacybeleid van de betreffende externe partij of dienst van toepassing. Ik ben niet verantwoordelijk voor de privacybescherming of inhoud van websites van derden.',

        'privacy-card5-title': '5. Disclaimer & Aansprakelijkheid',
        'privacy-card5-p1': 'De informatie, projecten, scripts en casestudies op deze website worden uitsluitend voor educatieve, informatieve en portfolio-doeleinden aangeboden.',
        'privacy-card5-p2': 'Hoewel er constante zorg en aandacht wordt besteed aan de inhoud, kan niet worden gegarandeerd dat alle informatie te allen tijde foutloos, volledig of actueel is. Het gebruik van codevoorbeelden, scripts of configuraties geschiedt geheel op eigen risico. Henry Elsinga is niet aansprakelijk voor enige directe of indirecte schade voortvloeiend uit het gebruik van deze website.',

        'privacy-card6-title': '6. Intellectueel Eigendom & Auteursrecht',
        'privacy-card6-p1': 'Tenzij expliciet anders aangegeven, berusten alle intellectuele eigendomsrechten op teksten, ontwerpen, grafische elementen en portfolio-inhoud bij Henry Elsinga / IamKenii Productions.',
        'privacy-card6-p2': 'Het overnemen, verspreiden of hergebruiken van inhoud zonder voorafgaande toestemming is niet toegestaan, met uitzondering van opensource projecten die onder een specifieke licentie (zoals MIT of Apache) zijn vrijgegeven op mijn GitHub-profiel.',

        'privacy-card7-title': '7. Contact & Vragen',
        'privacy-card7-p1': 'Heb je vragen, opmerkingen of verzoeken met betrekking tot deze Privacy & Disclaimer? Neem dan gerust contact op:',
        'privacy-contact-email': 'E-mail:',
        'privacy-contact-web': 'Website:'
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
        'footer-privacy': 'Privacy & Disclaimer',
        'back-top': 'Back to top',

        'privacy-page-title': 'Privacy & Disclaimer',
        'privacy-subtitle': 'Information regarding privacy, data handling, cookies, and the terms of using this website.',
        'privacy-back': 'Back to Portfolio',
        'privacy-updated': 'Last updated: 2026',

        'privacy-card1-title': '1. General & Privacy Statement',
        'privacy-card1-p1': 'Welcome to the portfolio website of <strong>Henry Elsinga</strong> (accessible via <code>henryelsinga.nl</code>). I highly value privacy and transparency. This website is built to showcase my knowledge, projects, and practical experience as an HBO-ICT Cloud & Security student.',
        'privacy-card1-p2': 'This website does not collect directly identifiable personal data from visitors unless you intentionally reach out via email. No tracking profiles are created, and no automated decision-making is employed.',

        'privacy-card2-title': '2. Data Handling on Contact',
        'privacy-card2-p1': 'When contacting me via email or LinkedIn, the information you provide (such as your name, email address, and message contents) is used exclusively to respond to your inquiry.',
        'privacy-card2-p2': 'Your communication data is treated confidentially, never provided to third parties for commercial purposes, and not stored longer than necessary for our communication.',

        'privacy-card3-title': '3. Cookies & Local Browser Storage',
        'privacy-card3-p1': 'This website does <strong>not</strong> use tracking cookies, advertising cookies, or third-party analytics cookies.',
        'privacy-card3-p2': 'To enhance your browsing experience, the site strictly uses browser <code>localStorage</code> for functional preferences:',
        'privacy-card3-li1': '<strong>Theme preference:</strong> remembering whether you prefer dark or light mode (<code>theme</code>).',
        'privacy-card3-li2': '<strong>Language preference:</strong> remembering your preferred language (<code>language</code>: Dutch or English).',
        'privacy-card3-p3': 'This data remains stored locally on your device at all times and is never transmitted to external servers.',

        'privacy-card4-title': '4. External Links & Software Lab',
        'privacy-card4-p1': 'This website contains links to external platforms and services, including GitHub, LinkedIn, and software projects under the name <strong>IamKenii Productions</strong> (such as <code>ip.henryelsinga.nl</code>).',
        'privacy-card4-p2': 'Once you navigate away via an external link, the privacy policy of that respective third-party service applies. I am not responsible for the privacy practices or content of external websites.',

        'privacy-card5-title': '5. Disclaimer & Liability',
        'privacy-card5-p1': 'The information, projects, scripts, and case studies on this website are provided solely for educational, informational, and portfolio demonstration purposes.',
        'privacy-card5-p2': 'While constant care is taken to ensure content accuracy, no guarantees are made that all information is complete, error-free, or up-to-date. Any implementation of shared code, scripts, or configurations is at your own risk. Henry Elsinga is not liable for any direct or indirect damages resulting from using this website.',

        'privacy-card6-title': '6. Intellectual Property & Copyright',
        'privacy-card6-p1': 'Unless explicitly stated otherwise, all intellectual property rights to text, layout, graphical elements, and portfolio content belong to Henry Elsinga / IamKenii Productions.',
        'privacy-card6-p2': 'Reproduction, distribution, or reuse of content without prior permission is prohibited, except for open-source repositories published under specific licenses (e.g. MIT or Apache) on my GitHub profile.',

        'privacy-card7-title': '7. Contact & Inquiries',
        'privacy-card7-p1': 'If you have questions, feedback, or requests regarding this Privacy & Disclaimer, feel free to reach out:',
        'privacy-contact-email': 'Email:',
        'privacy-contact-web': 'Website:'
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
