// Portfolio Internationalization (i18n) Dictionary
// Supports Automatic Language Detection (French / English) and Manual Switching

const translations = {
  en: {
    // Navigation
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.honors": "Honors",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "nav.download_cv": "Download CV",
    "nav.download_cv_full": "Download CV (PDF)",
    "nav.subtitle": "Business Intelligence Student & Data Developer",

    // Hero Section
    "hero.name_tag": "Mohamed Aziz Tabakh",
    "hero.title_prefix": "Business Intelligence",
    "hero.title_highlight": "Student &amp; <span class=\"whitespace-nowrap\">Data Developer</span>",
    "hero.stack": "Python · SQL · Power BI · Data Warehousing · ETL · PostgreSQL",
    "hero.summary": "Building data pipelines, analytical systems, and AI-powered applications.",
    "hero.view_projects": "View Projects",
    "hero.download_cv": "Download CV",
    "hero.copy_email": "Copy Email",
    "hero.location": "Tunis, Tunisia",
    "hero.education": "ESEN Manouba (BI Spec.)",
    "hero.trainer": "Robotics Trainer @ Youth Yes We Care",

    // About Section
    "about.tag": "About Mohamed Aziz",
    "about.heading": "Building BI and Data Systems from Raw Data to Decision-Ready Analytics.",
    "about.p1": "I’m a Business Intelligence student at <strong class=\"text-white\">ESEN Manouba</strong>, combining analytical data modeling with practical software development.",
    "about.p2": "My focus is designing dimensional data warehouses, automated ETL pipelines, and reporting solutions using tools like <strong class=\"text-white\">SQL Server, PostgreSQL, Power BI, and Python</strong>. I also build applied AI capabilities for BI, including <strong class=\"text-cyan-400\">Text-to-SQL</strong> and RAG to make business data accessible through natural language.",
    "about.p3": "Alongside BI, I work as a <strong class=\"text-white\">Robotics Trainer</strong> at <strong class=\"text-white\">Youth Yes We Care Association</strong>, teaching embedded programming and automation while mentoring students on hands-on hardware builds.",
    "about.edu_degree": "Bachelor’s in Business Computing (BI)",
    "about.edu_school": "ESEN Manouba, Tunisia",
    "about.ibm_title": "IBM Data Fundamentals",
    "about.ibm_desc": "Relational Databases & Watson Knowledge Studio",
    "about.ibm_certified": "Certified",
    "about.cf_title": "Codeforces Specialist",
    "about.cf_desc": "200+ Solved Algorithmic Challenges",
    "about.cf_badge": "Specialist",
    "about.bac_title": "Baccalauréat en Sciences Info",
    "about.bac_school": "Lycée Mohamed Arbi Chammari",

    // Bento Cards
    "bento.dw_title": "Data Warehousing & Dimensional Modeling",
    "bento.dw_desc": "Skilled in Kimball dimensional modeling, star schemas, automated ETL (Python, SSIS), data mart design, query optimization, and analytical data modeling with SQL Server & PostgreSQL.",
    "bento.ai_title": "Applied AI in Business Intelligence",
    "bento.ai_desc": "Building practical AI solutions for business data: RAG (Retrieval-Augmented Generation), local LLM deployments, and natural-language Text-to-SQL querying.",
    "bento.cp_title": "Algorithmic Problem Solving",
    "bento.cp_desc": "Codeforces Specialist (200+ problems solved) and TCPC National Finalist. Proven command of time/space complexity, data structures, and competitive problem decomposition in C++.",

    // Projects Section
    "projects.tag": "Portfolio Showcase",
    "projects.heading": "Featured Projects",
    "projects.subtitle": "Selected projects spanning data engineering, BI analytics, software development, and applied AI.",
    "projects.filter_all": "All (6)",
    "projects.filter_data": "Data & BI",
    "projects.filter_apps": "Web & Applications",
    "projects.filter_ai": "Applied AI & Analytics",
    "projects.zoom": "Zoom",
    "projects.code": "Code",
    "projects.repo": "Repository",

    // Project Cards
    "project.coficab_badge": "Enterprise Internship",
    "project.coficab_title": "Coficab BI Integration & AI",
    "project.coficab_desc": "Automotive cable data platform developed during summer internship at Coficab. Automated Excel data extraction, Python cleaning pipelines, SQL Server integration, Power BI reporting dashboards, a file management web app (Flask & Angular), and an AI chatbot for natural-language queries.",

    "project.customer360_badge": "Customer Intelligence",
    "project.customer360_title": "Customer360 — Customer Analytics Platform",
    "project.customer360_desc": "E-commerce customer analytics platform analyzing 95,560 customers and 99,441 orders across the Olist dataset with Kimball star schema, RFM segmentation, and cohort retention.",

    "project.dataforge_badge": "Data Quality Engine",
    "project.dataforge_title": "DataForge — Data Quality Platform",
    "project.dataforge_desc": "Batch ETL pipeline with automated data validation and operations console. Ingests retail datasets, enforces quarantine rules for invalid records, transforms data using dbt into a star-schema warehouse on PostgreSQL, and monitors pipeline execution health.",

    "project.supplychain_badge": "Predictive Operations",
    "project.supplychain_title": "SupplyChainIQ Platform",
    "project.supplychain_desc": "Logistics and supply chain analytics platform built on historical DataCo dataset. Ingests order and shipping data into an analytical warehouse, computes reorder points and monitoring delivery delays.",

    "project.maintiq_badge": "Predictive Maintenance",
    "project.maintiq_title": "MaintIQ — Maintenance Analytics",
    "project.maintiq_desc": "Industrial equipment maintenance analytics platform. Ingests machine sensor readings, detects anomalies with rolling z-score analysis, evaluates failure risk factors, and manages maintenance work-order lifecycles.",

    "project.masroufi_badge": "100% Offline App",
    "project.masroufi_title": "Masroufi (مصروفي)",
    "project.masroufi_desc": "Privacy-first personal finance and expense budgeting mobile app. Engineered to run completely offline without external cloud tracking, utilizing encrypted local SQLite storage and a multilingual responsive UI.",

    // Experience Section
    "exp.tag": "Career Track",
    "exp.heading": "Work Experience & Leadership",
    "exp.subtitle": "Proven industry experience in corporate data pipelines and leadership in algorithmic training.",
    
    // Role 1
    "exp.r1_company": "COFICAB Group (Tunisia)",
    "exp.r1_role": "Summer Intern — Business Intelligence & AI",
    "exp.r1_mentor": "(Encadré par Wassim Adeyssi)",
    "exp.r1_date": "August 2026 · Hybrid",
    "exp.r1_b1": "Developed an end-to-end Business Intelligence solution for data processing, validation, and analytics in automotive manufacturing.",
    "exp.r1_b2": "Automated Excel data extraction, cleaning pipelines, and structured integration into <strong class=\"text-white\">SQL Server</strong>.",
    "exp.r1_b3": "Designed and modeled data schemas for executive <strong class=\"text-white\">Power BI</strong> dashboards and reporting.",
    "exp.r1_b4": "Contributed to developing a web interface for data and file management using <strong class=\"text-white\">Flask</strong> and <strong class=\"text-white\">Angular</strong>.",
    "exp.r1_b5": "Developed an AI-powered conversational chatbot enabling business teams to query data using natural language.",

    // Role 2
    "exp.r2_company": "ESEN HiVE Club",
    "exp.r2_role": "Project Manager · Part-time (On-site)",
    "exp.r2_date": "August 2026 – Present",
    "exp.r2_b1": "Manage and oversee project execution, resource allocation, and operations for university tech initiatives, workshops, and hackathons at ESEN Manouba.",
    "exp.r2_b2": "Coordinate cross-functional student committees spanning competitive programming, software development, and community logistics.",
    "exp.r2_b3": "Lead event planning, schedules, resources, and technical infrastructure for university-wide coding contests and hackathons.",

    // Role 3
    "exp.r3_company": "IEEE INSAT Computer Society Chapter",
    "exp.r3_role": "Competitive Programming Workshop Trainer",
    "exp.r3_date": "October 2026",
    "exp.r3_b1": "Invited as a competitive programming trainer alongside teammates Mohamed Aziz Beldi and Mohamed Yassine Rached to lead an intensive Introduction to Competitive Programming workshop at INSAT.",
    "exp.r3_b2": "Trained university engineering participants in problem-solving techniques, analytical problem decomposition, and competitive C++ fundamentals.",

    // Role 4
    "exp.r4_company": "Youth Yes We Care Association",
    "exp.r4_role": "Robotics Trainer · Part-time (On-site)",
    "exp.r4_date": "June 2024 – Present · 2 yrs 5 mos",
    "exp.r4_b1": "Teach students fundamentals of robotics, coding, circuit schematics, and automation.",
    "exp.r4_b2": "Lead hands-on technical sessions where students build and program robots with Arduino, sensors, motor controllers, and embedded C++.",

    // Role 5
    "exp.r5_company": "ESEN HiVE Club",
    "exp.r5_role": "Problem Solving Department Leader · Part-time",
    "exp.r5_date": "September 2025 – June 2026 · 10 mos",
    "exp.r5_b1": "Led the Problem Solving division of ESEN HiVE Club, structuring training curricula for competitive programming in C++.",
    "exp.r5_b2": "Provided technical mentorship in algorithms and served as a problem setter for the club's flagship <strong class=\"text-white\">Bee Battle</strong> contest.",

    // Honors & Competitions Section
    "honors.tag": "Honors & Contests",
    "honors.heading": "Competitions I've Taken Part In",
    "honors.subtitle": "Selected competitive programming, hackathon, and problem-setting achievements.",

    "honors.h1_badge": "🏆 1st Place Winner 🥇",
    "honors.h1_meta": "May 2026 • ENACTUS TBS",
    "honors.h1_title": "Hackathon Monopoly 5.0 — 1st Place 🥇",
    "honors.h1_desc": "Secured 1st place with team <strong class=\"text-white\">\"Team Wahda\"</strong> in the Hackathon Monopoly 5.0 organized by ENACTUS TBS. Developed an innovative strategic and technological solution evaluated by industry judges on feasibility, business impact, and execution.",
    "honors.h1_team": "<span>Team:</span> <span class=\"text-amber-400 font-semibold\">Team Wahda</span> • 1st Place Winner 🥇",

    "honors.h2_badge": "🎖️ Rank 32 / 100 National",
    "honors.h2_meta": "April 2026 • ICPC Pathway",
    "honors.h2_title": "Tunisian Collegiate Programming Contest (TCPC)",
    "honors.h2_desc": "Secured 32nd place nationwide out of 100 elite university teams with 5 problems solved as team <strong class=\"text-white\">\"MakeLoop Bel EscaLoop\"</strong> alongside teammates Yassine Rached and Hiba Brahmi. A national collegiate programming competition on the ACPC/ICPC competitive programming pathway.",
    "honors.h2_team": "<span>Team:</span> <span class=\"text-indigo-400 font-semibold\">MakeLoop Bel EscaLoop</span> • 5 Problems Solved",

    "honors.h3_badge": "📝 Problem Setter",
    "honors.h3_meta": "ESEN Manouba",
    "honors.h3_title": "ESEN HiVE Contest & Problem Solving",
    "honors.h3_desc": "Served as a problem setter for the collegiate competitive programming contest at ESEN Manouba. Authored challenging algorithmic problem sets, designed edge-case test suites, and supervised technical judging during live contest rounds.",
    "honors.h3_team": "<span class=\"text-cyan-400\">Role:</span> Problem Setter &amp; Test Suite Design",

    "honors.h4_badge": "❄️ Winter Cup @ INSAT",
    "honors.h4_meta": "INSAT • March 2026",
    "honors.h4_title": "Winter Cup Contest — INSAT",
    "honors.h4_desc": "Represented <strong class=\"text-white\">ESEN HiVE Club</strong> with the competitive programming team at the Winter Cup CP tournament held at INSAT. Demonstrating team strategy, modular algorithm design, and endurance through intense problem rounds.",
    "honors.h4_team": "<span>Delegation:</span> <span class=\"text-cyan-400 font-semibold\">ESEN HiVE Club</span> @ INSAT",

    "honors.h5_badge": "🌙 Night Contest",
    "honors.h5_meta": "Sup'Com Junior Entreprise",
    "honors.h5_title": "Codex CP Competition",
    "honors.h5_desc": "Participated in the Codex competitive programming night organized at Sup'Com. Solved algorithmic tasks under intense time pressure and high-energy atmosphere.",
    "honors.h5_team": "<span class=\"text-amber-400\">Event:</span> Sup'Com Coding Challenge",

    "honors.h6_badge": "🐝 Bee Battle",
    "honors.h6_meta": "ESEN HiVE Club • Problem Setter & Org",
    "honors.h6_title": "Bee Battle Contest — ESEN HiVE Club",
    "honors.h6_desc": "Flagship competitive programming competition organized and hosted by <strong class=\"text-white\">ESEN HiVE Club</strong>. Contributed on the problem-setting committee—authoring algorithmic problems, designing test suites, and coordinating live contest rounds.",
    "honors.h6_team": "<span>Role:</span> <span class=\"text-amber-400 font-semibold\">Problem Setter &amp; Organizer</span> • ESEN HiVE Club",

    // Skills Section
    "skills.tag": "Technical Arsenal",
    "skills.heading": "Skills & Technology Stack",
    "skills.subtitle": "Tools, frameworks, and methodologies applied across Business Intelligence & software systems.",
    "skills.cat_bi": "BI & Data",
    "skills.cat_prog": "Programming",
    "skills.cat_dev": "Development",
    "skills.cat_other": "Other",

    // Contact Section
    "contact.tag": "Let's Collaborate",
    "contact.heading": "Looking for a BI or Data Internship?",
    "contact.subtitle": "Open to internship opportunities in Business Intelligence, Data Engineering, Analytics, and Data Warehousing.",
    "contact.email_label": "Email Address",
    "contact.phone_label": "Phone / WhatsApp",
    "contact.linkedin_label": "LinkedIn Profile",
    "contact.github_label": "GitHub Profile",
    "contact.send_msg": "Send Direct Message",
    "contact.download_cv": "Download CV (PDF)",
    "contact.copy_email": "Copy Email",
    "contact.copy_phone": "Copy Phone",

    // Footer
    "footer.rights": "Mohamed Aziz Tabakh. All rights reserved.",

    // Toast & Alerts
    "toast.copied": "Copied {label} to clipboard!"
  },

  fr: {
    // Navigation
    "nav.about": "À propos",
    "nav.projects": "Projets",
    "nav.experience": "Parcours",
    "nav.honors": "Distinctions",
    "nav.skills": "Compétences",
    "nav.contact": "Contact",
    "nav.download_cv": "Télécharger CV",
    "nav.download_cv_full": "Télécharger le CV (PDF)",
    "nav.subtitle": "Étudiant en Business Intelligence & Développeur Data",

    // Hero Section
    "hero.name_tag": "Mohamed Aziz Tabakh",
    "hero.title_prefix": "Business Intelligence",
    "hero.title_highlight": "Étudiant &amp; <span class=\"whitespace-nowrap\">Développeur Data</span>",
    "hero.stack": "Python · SQL · Power BI · Data Warehousing · ETL · PostgreSQL",
    "hero.summary": "Conception de pipelines de données, de systèmes décisionnels et d'applications d'IA d'entreprise.",
    "hero.view_projects": "Voir les Projets",
    "hero.download_cv": "Télécharger le CV",
    "hero.copy_email": "Copier l'Email",
    "hero.location": "Tunis, Tunisie",
    "hero.education": "ESEN Manouba (Spéc. BI)",
    "hero.trainer": "Formateur Robotique @ Youth Yes We Care",

    // About Section
    "about.tag": "À propos de Mohamed Aziz",
    "about.heading": "De la donnée brute aux décisions stratégiques : modélisation décisionnelle et systèmes d'IA.",
    "about.p1": "Je suis étudiant en Business Intelligence à l'<strong class=\"text-white\">ESEN Manouba</strong>, alliant modélisation analytique de données et développement logiciel pratique.",
    "about.p2": "Mon domaine d'expertise porte sur la conception d'entrepôts de données dimensionnels, de pipelines ETL automatisés et de solutions de reporting avec <strong class=\"text-white\">SQL Server, PostgreSQL, Power BI et Python</strong>. Je développe également des solutions d'IA appliquée au décisionnel, notamment du <strong class=\"text-cyan-400\">Text-to-SQL</strong> et du RAG pour interroger les données d'entreprise en langage naturel.",
    "about.p3": "En parallèle de la BI, j'interviens en tant que <strong class=\"text-white\">Formateur en Robotique</strong> au sein de l'association <strong class=\"text-white\">Youth Yes We Care</strong>, où j'enseigne la programmation embarquée et l'automatisation tout en encadrant des projets pratiques.",
    "about.edu_degree": "Licence en Informatique de Gestion (BI)",
    "about.edu_school": "ESEN Manouba, Tunisie",
    "about.ibm_title": "Fondamentaux des Données IBM",
    "about.ibm_desc": "Bases de données relationnelles & Watson Knowledge Studio",
    "about.ibm_certified": "Certifié",
    "about.cf_title": "Specialist Codeforces",
    "about.cf_desc": "Plus de 200 défis algorithmiques résolus",
    "about.cf_badge": "Specialist",
    "about.bac_title": "Baccalauréat en Sciences Informatiques",
    "about.bac_school": "Lycée Mohamed Arbi Chammari",

    // Bento Cards
    "bento.dw_title": "Entrepôts de Données & Modélisation Dimensionnelle",
    "bento.dw_desc": "Maîtrise de la modélisation dimensionnelle de Kimball, schémas en étoile, pipelines ETL automatisés (Python, SSIS), conception de Data Marts et optimisation SQL Server & PostgreSQL.",
    "bento.ai_title": "IA Appliquée au Décisionnel (BI)",
    "bento.ai_desc": "Développement de solutions d'IA concrètes pour l'entreprise : RAG (Génération Augmentée par Récupération), déploiement de LLMs locaux et requêtage Text-to-SQL en langage naturel.",
    "bento.cp_title": "Résolution Algorithmique de Problèmes",
    "bento.cp_desc": "Specialist Codeforces (200+ problèmes résolus) et finaliste national TCPC. Solide maîtrise de la complexité algorithmique, des structures de données et de la programmation en C++.",

    // Projects Section
    "projects.tag": "Portfolio & Réalisations",
    "projects.heading": "Projets Phares",
    "projects.subtitle": "Sélection de projets couvrant l'ingénierie des données, l'analyse décisionnelle, le développement logiciel et l'IA appliquée.",
    "projects.filter_all": "Tous (6)",
    "projects.filter_data": "Données & BI",
    "projects.filter_apps": "Web & Applications",
    "projects.filter_ai": "IA Appliquée & Analyse",
    "projects.zoom": "Zoom",
    "projects.code": "Code",
    "projects.repo": "Dépôt GitHub",

    // Project Cards
    "project.coficab_badge": "Stage en Entreprise",
    "project.coficab_title": "Coficab — Intégration BI & IA",
    "project.coficab_desc": "Plateforme de données industrielles développée lors d'un stage d'été chez Coficab. Extraction automatisée depuis Excel, nettoyage via Python, intégration SQL Server, tableaux de bord Power BI, application web (Flask & Angular) et chatbot IA pour requêtes en langage naturel.",

    "project.customer360_badge": "Intelligence Client",
    "project.customer360_title": "Customer360 — Plateforme d'Analyse Client",
    "project.customer360_desc": "Plateforme d'analyse client e-commerce traitant 95 560 clients et 99 441 commandes sur le jeu de données Olist avec schéma en étoile de Kimball, segmentation RFM et analyse de cohortes.",

    "project.dataforge_badge": "Qualité des Données",
    "project.dataforge_title": "DataForge — Moteur de Données & ETL",
    "project.dataforge_desc": "Pipeline ETL par lots avec console d'opérations et validation automatisée des données. Intègre des données commerciales, applique des règles de quarantaine, transforme les données via dbt dans un entrepôt PostgreSQL et surveille la santé du pipeline.",

    "project.supplychain_badge": "Opérations Prédictives",
    "project.supplychain_title": "Plateforme SupplyChainIQ",
    "project.supplychain_desc": "Plateforme d'analyse logistique et de chaîne d'approvisionnement bâtie sur le dataset DataCo. Intègre les flux de commandes et de livraisons dans un entrepôt analytique, calcule les points de commande et prévient les retards de livraison.",

    "project.maintiq_badge": "Maintenance Prédictive",
    "project.maintiq_title": "MaintIQ — Analyse de Maintenance",
    "project.maintiq_desc": "Plateforme d'analyse pour la maintenance des équipements industriels. Traite les relevés de capteurs en temps réel, détecte les anomalies par analyse de score Z glissant, évalue les risques de panne et gère le cycle de vie des ordres d'intervention.",

    "project.masroufi_badge": "App 100% Hors-ligne",
    "project.masroufi_title": "Masroufi (مصروفي)",
    "project.masroufi_desc": "Application mobile de gestion budgétaire et de dépenses personnelles axée sur la confidentialité. Conçue pour fonctionner entièrement hors ligne sans traçage externe, avec stockage SQLite local chiffré et interface responsive multilingue.",

    // Experience Section
    "exp.tag": "Parcours Professionnel",
    "exp.heading": "Expérience & Leadership",
    "exp.subtitle": "Expérience concrète dans l'industrie en pipelines de données et leadership en formation algorithmique.",
    
    // Role 1
    "exp.r1_company": "COFICAB Group (Tunisie)",
    "exp.r1_role": "Stagiaire d'été — Business Intelligence & IA",
    "exp.r1_mentor": "(Encadré par Wassim Adeyssi)",
    "exp.r1_date": "Août 2026 · Hybride",
    "exp.r1_b1": "Conception et déploiement d'une solution complète de Business Intelligence pour le traitement, la validation et l'analyse de données dans l'industrie automobile.",
    "exp.r1_b2": "Automatisation de l'extraction des données Excel, des pipelines de nettoyage et de l'intégration structurée dans <strong class=\"text-white\">SQL Server</strong>.",
    "exp.r1_b3": "Modélisation dimensionnelle et conception de schémas de données pour des tableaux de bord et rapports exécutifs sur <strong class=\"text-white\">Power BI</strong>.",
    "exp.r1_b4": "Contribution au développement d'une interface web de gestion des fichiers et données avec <strong class=\"text-white\">Flask</strong> et <strong class=\"text-white\">Angular</strong>.",
    "exp.r1_b5": "Développement d'un agent conversationnel doté d'IA permettant aux équipes opérationnelles d'interroger les données en langage naturel.",

    // Role 2
    "exp.r2_company": "Club ESEN HiVE",
    "exp.r2_role": "Chef de Projet · Temps partiel (Sur site)",
    "exp.r2_date": "Août 2026 – Présent",
    "exp.r2_b1": "Supervision de l'exécution des projets, allocation des ressources et opérations pour les initiatives technologiques, ateliers et hackathons universitaires à l'ESEN Manouba.",
    "exp.r2_b2": "Coordination des comités étudiants interdisciplinaires couvrant la programmation compétitive, le développement logiciel et la logistique événementielle.",
    "exp.r2_b3": "Direction de la planification, des calendriers, des ressources et de l'infrastructure technique pour les concours de code et hackathons universitaires.",

    // Role 3
    "exp.r3_company": "IEEE INSAT Computer Society Chapter",
    "exp.r3_role": "Formateur en Programmation Compétitive",
    "exp.r3_date": "Octobre 2026",
    "exp.r3_b1": "Invité comme formateur en programmation compétitive aux côtés de mes coéquipiers Mohamed Aziz Beldi et Mohamed Yassine Rached pour animer un atelier intensif d'initiation à la programmation compétitive à l'INSAT.",
    "exp.r3_b2": "Formation des participants élèves-ingénieurs aux techniques de résolution de problèmes, à la décomposition analytique et aux bases de la compétition en C++.",

    // Role 4
    "exp.r4_company": "Youth Yes We Care",
    "exp.r4_role": "Formateur en Robotique · Temps partiel (Sur site)",
    "exp.r4_date": "Juin 2024 – Présent",
    "exp.r4_b1": "Enseignement des fondamentaux de la robotique, du code, des schémas de circuits électroniques et de l'automatisation.",
    "exp.r4_b2": "Animation de sessions techniques pratiques où les élèves construisent et programment des robots avec Arduino, capteurs, contrôleurs de moteurs et C++ embarqué.",

    // Role 5
    "exp.r5_company": "Club ESEN HiVE",
    "exp.r5_role": "Responsable du Pôle Résolution de Problèmes · Temps partiel",
    "exp.r5_date": "Sept. 2025 – Juin 2026",
    "exp.r5_b1": "Direction du département Problem Solving d'ESEN HiVE, structuration des cursus de formation en algorithmes et programmation compétitive en C++.",
    "exp.r5_b2": "Mentorat technique en algorithmique et conception d'épreuves (Problem Setter) pour le concours phare du club, <strong class=\"text-white\">Bee Battle</strong>.",

    // Honors & Competitions Section
    "honors.tag": "Distinctions & Concours",
    "honors.heading": "Compétitions & Hackathons",
    "honors.subtitle": "Palmarès en programmation compétitive, hackathons et conception d'épreuves algorithmiques.",

    "honors.h1_badge": "🏆 1ère Place 🥇",
    "honors.h1_meta": "Mai 2026 • ENACTUS TBS",
    "honors.h1_title": "Hackathon Monopoly 5.0 — 1ère Place 🥇",
    "honors.h1_desc": "Obtention de la 1ère place avec l'équipe <strong class=\"text-white\">« Team Wahda »</strong> lors du Hackathon Monopoly 5.0 organisé par ENACTUS TBS. Développement d'une solution stratégique et technologique innovante primée par un jury d'experts.",
    "honors.h1_team": "<span>Équipe :</span> <span class=\"text-amber-400 font-semibold\">Team Wahda</span> • 1ère Place 🥇",

    "honors.h2_badge": "🎖️ 32ème / 100 National",
    "honors.h2_meta": "Avril 2026 • Parcours ICPC",
    "honors.h2_title": "Tunisian Collegiate Programming Contest (TCPC)",
    "honors.h2_desc": "Classé 32ème national parmi 100 équipes universitaires d'élite avec 5 problèmes résolus au sein de l'équipe <strong class=\"text-white\">« MakeLoop Bel EscaLoop »</strong> avec Yassine Rached et Hiba Brahmi. Concours officiel sur le parcours ACPC / ICPC.",
    "honors.h2_team": "<span>Équipe :</span> <span class=\"text-indigo-400 font-semibold\">MakeLoop Bel EscaLoop</span> • 5 Problèmes Résolus",

    "honors.h3_badge": "📝 Problem Setter",
    "honors.h3_meta": "ESEN Manouba",
    "honors.h3_title": "Concours ESEN HiVE & Problem Solving",
    "honors.h3_desc": "Concepteur d'épreuves algorithmiques pour le concours universitaire de programmation compétitive à l'ESEN Manouba. Rédaction de problèmes, création des jeux de tests et supervision de l'arbitrage technique en direct.",
    "honors.h3_team": "<span class=\"text-cyan-400\">Rôle :</span> Auteur d'Épreuves &amp; Conception des Tests",

    "honors.h4_badge": "❄️ Winter Cup @ INSAT",
    "honors.h4_meta": "INSAT • Mars 2026",
    "honors.h4_title": "Concours Winter Cup — INSAT",
    "honors.h4_desc": "Représentation de la délégation d'<strong class=\"text-white\">ESEN HiVE Club</strong> lors du tournoi de programmation compétitive Winter Cup à l'INSAT. Démonstration de stratégie d'équipe, d'algorithmique et d'endurance lors des rounds chronométrés.",
    "honors.h4_team": "<span>Délégation :</span> <span class=\"text-cyan-400 font-semibold\">ESEN HiVE Club</span> @ INSAT",

    "honors.h5_badge": "🌙 Compétition Nocturne",
    "honors.h5_meta": "Sup'Com Junior Entreprise",
    "honors.h5_title": "Compétition Codex CP",
    "honors.h5_desc": "Participation à la nuit de programmation compétitive Codex organisée à Sup'Com. Résolution de défis algorithmiques sous haute intensité et contrainte de temps.",
    "honors.h5_team": "<span class=\"text-amber-400\">Événement :</span> Défi de Code Sup'Com",

    "honors.h6_badge": "🐝 Bee Battle",
    "honors.h6_meta": "Club ESEN HiVE • Conception & Organisation",
    "honors.h6_title": "Concours Bee Battle — Club ESEN HiVE",
    "honors.h6_desc": "Concours phare de programmation compétitive fondé et organisé par le club <strong class=\"text-white\">ESEN HiVE</strong>. Contribution au comité d'élaboration des problèmes, conception des tests et coordination des rounds en direct.",
    "honors.h6_team": "<span>Rôle :</span> <span class=\"text-amber-400 font-semibold\">Auteur d'Épreuves &amp; Organisateur</span> • Club ESEN HiVE",

    // Skills Section
    "skills.tag": "Arsenal Technique",
    "skills.heading": "Compétences & Technologies",
    "skills.subtitle": "Outils, frameworks et méthodologies appliqués au décisionnel et aux systèmes logiciels.",
    "skills.cat_bi": "BI & Données",
    "skills.cat_prog": "Programmation",
    "skills.cat_dev": "Développement",
    "skills.cat_other": "Autres",

    // Contact Section
    "contact.tag": "Collaborons Ensemble",
    "contact.heading": "À la recherche d'un profil BI & Data ?",
    "contact.subtitle": "Ouvert aux opportunités de stage en Business Intelligence, Ingénierie des Données, Analytics et Entrepôts de Données.",
    "contact.email_label": "Adresse Email",
    "contact.phone_label": "Téléphone / WhatsApp",
    "contact.linkedin_label": "Profil LinkedIn",
    "contact.github_label": "Profil GitHub",
    "contact.send_msg": "Envoyer un Message Direct",
    "contact.download_cv": "Télécharger le CV (PDF)",
    "contact.copy_email": "Copier l'Email",
    "contact.copy_phone": "Copier le Téléphone",

    // Footer
    "footer.rights": "Mohamed Aziz Tabakh. Tous droits réservés.",

    // Toast & Alerts
    "toast.copied": "{label} copié dans le presse-papiers !"
  }
};

// Expose globally for browser and test runners
if (typeof window !== 'undefined') {
  window.translations = translations;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = translations;
}

