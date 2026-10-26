// Données détaillées des projets, dans le même ordre que les cartes de la page Projets
const projectsData = [
  {
    id: 7,
    role: "Projet d'entraînement personnel sur données simulées (en cours)",
    images: [
      { src: "images/ventes-retail-powerbi.png", alt: "Dashboard Power BI « Performance commerciale » : janvier-septembre 2026 comparé à la même période de 2025" },
      { src: "images/ventes-retail-sql.png", alt: "Vue v_bilan_categorie_annee dans pgAdmin : chiffre d'affaires 2025 par catégorie, évolution sur un an et rang" }
    ],
    title: "Ventes retail : analyses SQL et dashboard Power BI",
    subtitle: "PostgreSQL 18 / Vues, CTE et fonctions de fenêtre / Power BI et DAX / Git",
    kpi: "+59,5 % de CA pour l'Audio entre 2024 et 2025",
    tags: ["sql", "powerbi"],
    githubUrl: "https://github.com/jpnioule/ventes-retail-sql",
    demoUrl: "",
    demoLabel: "",
    icon: `<svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>`,
    summary: "Entraînement à l'analyse de données en SQL sur les ventes simulées d'une enseigne fictive de matériel informatique, d'audio et de mobilier de bureau (6 magasins et vente en ligne), en adoptant la démarche d'un analyste face à une direction commerciale.",
    context: "Projet d'entraînement personnel mené en séances successives et versionné sur GitHub : création de la base, génération de données simulées, puis requêtes d'analyse. Les tendances (croissance par catégorie, hausse des prix, saisonnalité, remises, coûts d'achat) sont paramétrées dans le script de génération : l'objectif n'est pas de découvrir des tendances inconnues, mais de maîtriser SQL et la démarche d'analyse, en vérifiant que les requêtes retrouvent fidèlement ce que contiennent les données. Les données sont arrêtées au 30 septembre 2026, date de l'analyse. Prochaine étape : diagnostic commercial complet sur des données réelles.",
    objectives: "Identifier les catégories qui portent la croissance et celles qui reculent, les mois qui pèsent le plus et l'effet des promotions sur les marges, en comparant toujours des périodes de même durée.",
    dataUsed: "Données simulées : 100 clients, 21 produits (Informatique, Audio, Mobilier), 6 magasins et environ 2 300 ventes de janvier 2024 à septembre 2026, avec saisonnalité, soldes et Black Friday, magasins fermés le dimanche et les jours fériés, et hausse des prix d'environ 3 % par an.",
    tools: "PostgreSQL 18, pgAdmin 4, PL/pgSQL, Power BI Desktop et DAX, Git et GitHub.",
    methodology: [
      { t: "1. Modélisation", d: "Tables clients, produits, magasins, ventes et calendrier (avec les jours fériés français), clés étrangères et contraintes CHECK. Chaque modification de la base est un script numéroté, pour pouvoir la reconstruire à l'identique." },
      { t: "2. Vue analytique", d: "Vue v_ventes_detail qui relie ventes, clients, produits et magasins (LEFT JOIN pour garder les ventes en ligne sans magasin) et calcule le chiffre d'affaires net et la marge de chaque vente." },
      { t: "3. Sous-requêtes et CTE", d: "Ventes atypiques, produits jamais vendus, CA par ville comparé à la moyenne, meilleurs mois, évolution par catégorie, comparaison mois par mois et clients en baisse, découpés en étapes lisibles avec WITH." },
      { t: "4. Comparer des périodes égales", d: "2026 ne couvre que 9 mois : la comparer à 2025 entière aurait montré une baisse artificielle, puisque novembre et décembre sont les meilleurs mois. Comparaison annuelle 2025 contre 2024, puis 2026 contre 2025 de janvier à septembre, mois par mois." },
      { t: "5. Fonctions de fenêtre", d: "Part de chaque catégorie dans le CA total (SUM OVER), classement des produits par catégorie (RANK), cumul mensuel, écart avec le mois précédent et le même mois de l'année précédente (LAG), 3 meilleurs clients par ville (ROW_NUMBER). Synthèse dans la vue v_bilan_categorie_annee : CA annuel par catégorie, évolution et rang." },
      { t: "6. Rentabilité et moteurs de la croissance", d: "Taux de marge par catégorie et selon le niveau de remise, décomposition du chiffre d'affaires en nombre de ventes × panier moyen, part des canaux et évolution de chaque magasin (FILTER, clause WINDOW)." },
      { t: "7. Dashboard Power BI", d: "Rapport « Performance commerciale » connecté à PostgreSQL, qui répond à une question : notre croissance est-elle au rendez-vous, et est-elle rentable ? Cartes CA net, marge, nombre de ventes et panier moyen avec leur évolution vs N-1 à périodes comparables (mesures DAX), CA mensuel comparé à N-1, CA par catégorie (vert en hausse, rouge en baisse) et par canal, filtre par année." },
      { t: "8. Transactions", d: "Arrêt des données au 30 septembre 2026 par un script exécuté dans une transaction (BEGIN, vérification, COMMIT), et test d'une vue avec BEGIN / ROLLBACK sans modifier les données." }
    ],
    analyses: "Chiffre d'affaires par catégorie et son évolution, taux de marge par catégorie et selon la remise, décomposition volume × panier moyen, canaux et magasins, comparaison mensuelle janvier-septembre 2026 contre 2025, meilleurs mois, part de chaque catégorie, classement des produits, cumuls mensuels, villes au-dessus de la moyenne, ventes atypiques, produits jamais vendus et clients dont les achats ont le plus baissé.",
    visualizations: "Dashboard Power BI « Performance commerciale » et résultats des requêtes dans pgAdmin.",
    results: "Les requêtes retrouvent les tendances paramétrées. Le chiffre d'affaires progresse de 26,9 % entre 2024 et 2025, puis de 14,1 % sur janvier-septembre 2026 par rapport à la même période de 2025 (104 K€, marge +19,9 %). L'Audio (+59,5 %, porté uniquement par le volume) et l'Informatique (+46,3 %) tirent la croissance, alors que l'Informatique a le taux de marge le plus faible (26,4 %). Le Mobilier, le plus rentable (47,4 % de marge), perd 10,7 % de ventes. Chaque palier de remise coûte plusieurs points de marge : 38,6 % sans remise, 17,4 % à 20 %. Magasins et vente en ligne pèsent à parts égales ; Marseille, Toulouse et Paris portent la croissance, Lyon, Bordeaux et Strasbourg stagnent. Recommandations, rédigées comme pour une vraie direction commerciale : relancer le Mobilier par le volume plutôt que par des remises, surveiller la marge globale et analyser les magasins qui stagnent.",
    difficulties: "Les écarts d'un mois à l'autre sont très variables : avec quelques dizaines de ventes par mois, quelques grosses commandes suffisent à faire bouger le pourcentage. J'ai donc privilégié la tendance d'ensemble plutôt qu'un mois isolé, et appris à ne comparer que des périodes de même durée.",
    skills: "Modélisation relationnelle, SQL analytique (jointures, agrégations, GROUP BY / HAVING, vues, sous-requêtes, CTE, fonctions de fenêtre, transactions), PL/pgSQL, versionnement avec Git, tableau de bord Power BI (mesures DAX, comparaisons N-1 à périodes comparables, mise en forme conditionnelle), traduction des résultats en recommandations business."
  },
  {
    id: 5,
    role: "Conception et développement (projet individuel, M2 INSEEC)",
    image: "images/lumea-chatbot.png",
    imageAlt: "Landing page Luméa avec le chatbot RAG intégré",
    title: "Luméa : écosystème marketing piloté par l'IA",
    subtitle: "Node.js / Chroma / API Anthropic (Claude) / n8n / Airtable",
    kpi: "4 livrables IA fonctionnels",
    tags: ["ia", "rag", "n8n"],
    githubUrl: "https://github.com/jpnioule/lumea-ai-marketing-agency",
    demoUrl: "",
    demoLabel: "Voir la landing page",
    icon: `<svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9.75h4.5m-4.5 3h7.5m-7.5 3h4.5m3.75-14.25H6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 006 21h12a2.25 2.25 0 002.25-2.25V11.25l-6-6z" /><path stroke-linecap="round" stroke-linejoin="round" d="M14.25 3v4.5a2.25 2.25 0 002.25 2.25h4.5" /></svg>`,
    summary: "Écosystème marketing complet piloté par l'IA pour Luméa, une marque fictive de skincare : chatbot RAG, agent de contenu Instagram, séquence d'e-mails automatisée avec n8n et landing page déployée sur Netlify.",
    context: "Projet du Master 2 Data Marketing (INSEEC, 2025-2026). Luméa est une marque fictive de skincare bio vendue en direct (8 produits, cible 25-40 ans, panier moyen de 45 €). Sa problématique : développer l'acquisition et le support client sans recruter, tout en professionnalisant sa présence sur les réseaux sociaux.",
    objectives: "Démontrer l'intégration de plusieurs briques d'IA générative dans un vrai parcours marketing : répondre aux clients sans inventer d'informations, produire du contenu social de façon régulière, et convertir les leads de la landing page grâce à une séquence d'e-mails automatisée.",
    dataUsed: "Base de connaissances de 11 documents (8 fiches produits, routine, livraison et retours, engagement de marque), découpée en 16 extraits de 500 caractères avec un chevauchement de 50 caractères. Leads et contenus à valider stockés dans Airtable.",
    tools: "Node.js, Chroma (base vectorielle locale), modèle d'embeddings multilingue local (paraphrase-multilingual-MiniLM-L12-v2), API Anthropic (Claude), n8n Cloud, Airtable, HTML/CSS/JS, Netlify, GitHub.",
    methodology: [
      { t: "1. Chatbot RAG", d: "Indexation des 16 extraits dans Chroma, puis transmission des 10 passages les plus pertinents à Claude, avec un prompt système qui impose de répondre uniquement à partir de ce contexte." },
      { t: "2. Agent de contenu Instagram", d: "Workflow n8n déclenché tous les 2 jours : il choisit un produit, génère un post structuré (accroche, texte, appel à l'action, hashtags, prompt image) et l'enregistre dans Airtable avec le statut « À valider »." },
      { t: "3. Nurturing par e-mail", d: "Séquence de 5 e-mails (J0 à J+14) déclenchée par le formulaire de la landing page. Avant chaque envoi, le workflow vérifie dans Airtable si le lead a déjà acheté, et arrête la séquence si c'est le cas." },
      { t: "4. Landing page", d: "Site vitrine à l'identité de la marque, avec une frise interactive des routines, le chatbot intégré et un formulaire de capture de leads relié à n8n. Déployé sur Netlify." }
    ],
    analyses: "Tests de pertinence des passages récupérés et de la fidélité des réponses du chatbot. Suivi de la délivrabilité des e-mails de la séquence.",
    visualizations: "Landing page avec chatbot intégré, file de contenus Instagram dans Airtable et workflows n8n documentés.",
    results: "Les 4 livrables sont fonctionnels et documentés. Le chatbot répond à partir des seules sources de la marque et indique quand il ne sait pas. Chaque post Instagram est relu par un humain avant publication, un choix assumé pour éviter tout contenu inapproprié. Pistes d'amélioration identifiées : authentifier le domaine d'envoi (SPF, DKIM, DMARC) contre le spam, et générer les visuels via une API d'images.",
    difficulties: "Le premier modèle d'embeddings, anglophone, donnait des résultats imprécis en français. Solution : passage à un modèle multilingue et augmentation du nombre de passages récupérés de 4 à 10.",
    skills: "Architecture RAG, bases vectorielles, prompt engineering, intégration de l'API Claude, automatisation marketing avec n8n, gestion de données dans Airtable, déploiement web."
  },
  {
    id: 3,
    role: "Segmentation K-Means (projet d'équipe de cinq, M2 INSEEC)",
    image: "images/online-retail.png",
    imageAlt: "Visualisation des 4 segments clients RFM issus du K-Means",
    title: "Online Retail : analyse des ventes et segmentation clients",
    subtitle: "Python / pandas / Statsmodels / Scikit-Learn / Dataset UCI Online Retail",
    kpi: "4 segments clients (k = 4)",
    tags: ["python", "statistiques", "machine-learning"],
    githubUrl: "https://github.com/jpnioule/--Online-Retail---Analyse-des-ventes-e-commerce",
    demoUrl: "https://colab.research.google.com/drive/18vKRla5exyzTEduXY7qOiJRw7qKesD5Z?usp=sharing",
    demoLabel: "Ouvrir le notebook (Colab)",
    icon: `<svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" /><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" /></svg>`,
    summary: "Analyse complète des ventes d'un site e-commerce britannique (392 000 transactions) : indicateurs clés, ANOVA, régression multiple et segmentation clients RFM par K-Means, jusqu'aux recommandations marketing.",
    context: "Projet réalisé en équipe de cinq dans le cadre du Master 2 Data Marketing Manager (INSEEC). J'étais responsable de la segmentation clients par clustering K-Means. Le jeu de données couvre les ventes d'un site e-commerce entre décembre 2010 et décembre 2011, avec une clientèle majoritairement professionnelle.",
    objectives: "Produire les indicateurs de performance clés (chiffre d'affaires par pays, saisonnalité, meilleurs produits), valider les observations par des tests statistiques, segmenter les clients selon leur comportement d'achat, et en tirer des recommandations marketing actionnables.",
    dataUsed: "Dataset Online Retail (UCI Machine Learning Repository) : 541 000 lignes brutes, 392 000 après nettoyage, 4 339 clients, 18 536 commandes et 3 665 produits.",
    tools: "Python (pandas, Matplotlib, Seaborn, Scikit-Learn, Statsmodels), Jupyter et Google Colab.",
    methodology: [
      { t: "1. Préparation des données", d: "Suppression des lignes sans identifiant client et des commandes annulées, typage des dates, création du montant de chaque ligne (quantité × prix unitaire)." },
      { t: "2. Analyse exploratoire", d: "Chiffre d'affaires par pays (Royaume-Uni dominant), meilleurs produits, saisonnalité avec un pic en novembre-décembre, activité concentrée en semaine entre 8 h et 17 h, signe d'une clientèle surtout professionnelle. Forte corrélation entre quantité et montant (r = 0,91)." },
      { t: "3. ANOVA", d: "Test de l'effet du pays sur le montant des commandes : F = 12,21, p-value inférieure à 10⁻⁷⁰, donc le pays influence significativement le comportement d'achat." },
      { t: "4. Régression linéaire multiple", d: "Modélisation du montant selon la quantité, le prix, le pays et le jour de la semaine : R² de 83,3 %, la quantité étant le principal levier." },
      { t: "5. Segmentation K-Means (ma partie)", d: "Calcul pour chaque client de la récence, de la fréquence, de la valeur et de la quantité totale, puis choix de k = 4 par la méthode du coude." }
    ],
    analyses: "Profilage des 4 segments : Champions, Fidèles, Clients moyens et Clients à risque, chacun associé à une stratégie marketing.",
    visualizations: "Graphiques de chiffre d'affaires par pays, saisonnalité, heatmap horaire, matrice de corrélation, courbe du coude et profils des clusters.",
    results: "Recommandations issues de l'analyse : programme VIP pour les Champions et les Fidèles, cross-selling pour les clients moyens (principal réservoir de croissance), campagne de réactivation avec 20 % de remise pour les clients à risque, renforcement marketing dès octobre, et développement vers les Pays-Bas, l'Allemagne et la France.",
    difficulties: "Les résidus de la régression étaient très asymétriques (skewness de 82,67) à cause des commandes en gros. Nous avons donc présenté les coefficients avec prudence plutôt que de surinterpréter le modèle.",
    skills: "Segmentation RFM et clustering K-Means, statistiques inférentielles (ANOVA, régression), analyse exploratoire, travail en équipe sur un projet data."
  },
  {
    role: "Conception et analyse (projet académique, M2 INSEEC)",
    id: 1,
    // Capture d'écran affichée dans la fiche projet (masquée automatiquement si le fichier n'existe pas)
    image: "images/segmentation-rfm.png",
    imageAlt: "Visualisation des 4 segments clients issus du K-Means",
    title: "Segmentation clients RFM & K-Means",
    subtitle: "Python / Scikit-Learn / Clustering K-Means / Dataset Olist",
    kpi: "4 segments clients actionnables",
    tags: ["python", "machine-learning", "marketing-analytics"],
    githubUrl: "",
    demoUrl: "",
    demoLabel: "Ouvrir le notebook",
    icon: `<svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>`,
    summary: "Segmentation comportementale de 100 000 clients du dataset public Olist avec K-Means, pour proposer des campagnes marketing ciblées par profil.",
    context: "Projet académique du Master 2 Data Marketing (INSEEC), réalisé sur les données publiques de l'e-commerçant brésilien Olist. Problématique posée : remplacer des campagnes marketing de masse, coûteuses et peu ciblées, par une communication adaptée à chaque profil de client afin de limiter l'attrition.",
    objectives: "L'objectif était de regrouper la base de 100 000 clients en segments homogènes basés sur leur historique d'achat. Cela devait permettre aux équipes marketing d'élaborer des campagnes de réactivation personnalisées pour chaque groupe identifié.",
    dataUsed: "Jeu de données Olist (disponible sur Kaggle) contenant l'historique transactionnel de 2016 à 2018. Il regroupe l'état de la commande, le prix, le coût du fret, les détails de paiement, la localisation du client et les évaluations de produits.",
    tools: "Python (pandas pour la manipulation, NumPy, Matplotlib et Seaborn pour la dataviz, Scikit-Learn pour la modélisation statistique et le clustering).",
    methodology: [
      { t: "1. Nettoyage des données", d: "Gestion des valeurs manquantes, filtrage des transactions hors période d'analyse et typage des variables de date." },
      { t: "2. Construction des variables RFM", d: "Calcul pour chaque client de la récence (jours depuis le dernier achat), de la fréquence (nombre total de commandes) et du montant (somme dépensée)." },
      { t: "3. Correction de l'asymétrie", d: "Transformation logarithmique pour corriger la forte asymétrie des distributions, suivie d'une normalisation via StandardScaler." },
      { t: "4. Clustering K-Means", d: "Entraînement de l'algorithme K-Means pour k allant de 2 à 10." },
      { t: "5. Choix du nombre de clusters", d: "Utilisation conjointe de la méthode du coude et du score de silhouette pour identifier le nombre optimal de clusters (k = 4)." }
    ],
    analyses: "Analyse descriptive détaillée des clusters pour comprendre leur identité, et profilage statistique de la distribution des métriques RFM au sein de chaque groupe pour valider la séparation.",
    visualizations: "Matrice de corrélation des variables RFM transformées, graphiques de distribution de la récence/fréquence, visualisation 3D interactive des clusters et boxplots de comparaison des variables clés entre clusters.",
    results: "Identification de 4 segments clients actionnables : « Grossistes », « VIP », « Clients moyens » et « Clients à risque ». Chaque segment est associé à une recommandation marketing (programme VIP, montée en gamme, réactivation des clients à risque), mesurable ensuite par A/B test.",
    difficulties: "La présence d'outliers extrêmes en montants d'achats faussait initialement les centres des clusters K-Means. Solution : filtrage des valeurs aberrantes au-delà de 3 écarts-types et normalisation robuste.",
    skills: "Machine learning non supervisé, feature engineering avancé, segmentation marketing stratégique, manipulation de grands volumes de données transactionnelles."
  },
  {
    id: 6,
    role: "Conception du dashboard (projet personnel)",
    image: "images/dashboard-tableau.png",
    imageAlt: "Dashboard Tableau de performance commerciale 2018-2020",
    title: "Dashboard Tableau : performance commerciale",
    subtitle: "Tableau Desktop / KPI / Analyse géographique et temporelle",
    kpi: "4 KPI et 4 axes d'analyse",
    tags: ["tableau", "dataviz"],
    githubUrl: "https://github.com/jpnioule/dashboard-performance-commerciale-auto-Sales",
    demoUrl: "",
    demoLabel: "Voir le dashboard en ligne",
    icon: `<svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" /></svg>`,
    summary: "Dashboard Tableau de suivi de la performance commerciale sur 2018-2020 : indicateurs clés, répartition géographique, évolution du chiffre d'affaires, lignes de produits et saisonnalité.",
    context: "Projet personnel de data visualisation sur des données de ventes (commandes, clients, lignes de produits et pays) couvrant la période 2018-2020.",
    objectives: "Offrir en un seul écran une vue d'ensemble de la performance commerciale, puis permettre d'explorer les ventes par pays, par période et par ligne de produits.",
    dataUsed: "Données de ventes 2018-2020 : commandes, clients, lignes de produits et répartition géographique, incluses dans le classeur Tableau.",
    tools: "Tableau Desktop (classeur packagé .twbx, consultable gratuitement avec Tableau Public).",
    methodology: [
      { t: "1. Indicateurs clés", d: "Quatre KPI en tête de dashboard : chiffre d'affaires total, nombre de commandes, quantité commandée et nombre de clients." },
      { t: "2. Analyse géographique", d: "Carte des ventes par pays et classement des 10 premiers pays." },
      { t: "3. Analyse temporelle", d: "Évolution du chiffre d'affaires en vue annuelle et mensuelle, puis répartition des ventes par trimestre." },
      { t: "4. Analyse produits", d: "Chiffre d'affaires par ligne de produits et ventes mensuelles par catégorie." }
    ],
    analyses: "Identification des pays et des lignes de produits les plus contributeurs, et mise en évidence de la saisonnalité des ventes.",
    visualizations: "Cartes KPI, carte géographique, classement Top 10, courbes d'évolution et graphiques par catégorie.",
    results: "Un dashboard unique qui répond aux questions clés d'un responsable commercial : combien, où, quand et sur quels produits.",
    difficulties: "La première version contenait des intitulés de feuilles incohérents et deux visualisations construites mais absentes du dashboard. Une version corrigée a harmonisé les intitulés et intégré le Top 10 pays et les ventes mensuelles par catégorie.",
    skills: "Data visualisation avec Tableau, conception de KPI, storytelling de données commerciales."
  }
];

// Attente du chargement complet du DOM
document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initBurgerMenu();
  initTypewriter();
  initSPARouter();
  initFilters();
  initModals();
  initEmailCopy();
  initContactForm();
  initSkillsAccordions();
});

// 1. GESTION DU THEME SOMBRE / CLAIR (Sombre par défaut)
function initThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return;

  const sunIcon = toggleBtn.querySelector(".sun-icon");
  const moonIcon = toggleBtn.querySelector(".moon-icon");

  function applyTheme(theme) {
    if (theme === "light") {
      document.documentElement.classList.add("light-mode");
      if (sunIcon) sunIcon.style.display = "block";
      if (moonIcon) moonIcon.style.display = "none";
    } else {
      document.documentElement.classList.remove("light-mode");
      if (sunIcon) sunIcon.style.display = "none";
      if (moonIcon) moonIcon.style.display = "block";
    }
  }

  // Initialisation sur cache
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    applyTheme(prefersLight ? "light" : "dark");
  }

  toggleBtn.addEventListener("click", () => {
    const isLight = document.documentElement.classList.contains("light-mode");
    const nextTheme = isLight ? "dark" : "light";
    applyTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
  });
}

// 2. INTERACTION MOBILE BURGER & ACCORDEON OVERLAY
function initBurgerMenu() {
  const burger = document.getElementById("mobile-toggle");
  const overlay = document.getElementById("mobile-nav-overlay");
  const links = document.querySelectorAll(".mobile-nav-link");

  if (!burger || !overlay) return;

  function toggleMenu() {
    burger.classList.toggle("active");
    overlay.classList.toggle("active");
    burger.setAttribute("aria-expanded", overlay.classList.contains("active") ? "true" : "false");
    if (overlay.classList.contains("active")) {
      document.body.style.overflow = "hidden"; // Bloque scroll
    } else {
      document.body.style.overflow = "";
    }
  }

  burger.addEventListener("click", toggleMenu);

  links.forEach(link => {
    link.addEventListener("click", () => {
      burger.classList.remove("active");
      overlay.classList.remove("active");
      burger.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });
}

// 3. EFFECT TYPEWRITER DANS LE HERO
function initTypewriter() {
  const element = document.getElementById("hero-typewriter");
  if (!element) return;

  const words = [
    "Futur Data Analyst",
    "MSc 2 Data Marketing (INSEEC Paris)",
    "SQL, Power BI & DAX",
    "IA générative appliquée au business"
  ];

  // Si le visiteur a demandé moins d'animations, on affiche simplement le premier intitulé
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    element.textContent = words[0];
    return;
  }
  
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      element.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      element.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = 80;
    if (isDeleting) {
      typeSpeed /= 2;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      typeSpeed = 2000; // Pause avant effacement
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 400; // Pause avant ré-écriture
    }

    setTimeout(type, typeSpeed);
  }

  setTimeout(type, 800);
}

// 4. ROUTER DE PAGE CLIENT (SPA par HASH) AVEC NAVIGATION FLUIDE & CLAVIER
function initSPARouter() {
  const pageContainers = document.querySelectorAll(".page-container");
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");

  const routesOrder = [
    { hash: "#Home", title: "Accueil" },
    { hash: "#Projects", title: "Projets" },
    { hash: "#Experience", title: "Expérience" },
    { hash: "#Skills", title: "Compétences" },
    { hash: "#Achievements", title: "Certifications" },
    { hash: "#Connect", title: "Contact" }
  ];

  function getCurrentRouteIndex() {
    const hash = (window.location.hash || "#Home").toLowerCase();
    const index = routesOrder.findIndex(r => r.hash.toLowerCase() === hash);
    return index !== -1 ? index : 0;
  }

  function handleRoute() {
    const currentIndex = getCurrentRouteIndex();
    const currentRoute = routesOrder[currentIndex];

    const targetPageId = "page-" + currentRoute.hash.replace("#", "").toLowerCase();
    const targetContainer = document.getElementById(targetPageId);

    if (targetContainer) {
      pageContainers.forEach(container => {
        container.style.display = "none";
        container.classList.remove("active");
      });

      targetContainer.style.display = "block";
      targetContainer.offsetHeight; // force reflow
      targetContainer.classList.add("active");

      document.title = currentIndex === 0
        ? "Jean Philippe Nioule | Data Analyst · Stage de fin d'études"
        : `${currentRoute.title} | Jean Philippe Nioule`;

      window.scrollTo({ top: 0, behavior: "smooth" });

      navLinks.forEach(link => {
        link.classList.remove("active");
        const linkHash = link.getAttribute("href");
        if (linkHash && linkHash.toLowerCase() === currentRoute.hash.toLowerCase()) {
          link.classList.add("active");
        }
      });

      setTimeout(() => {
        updateScrollArrowState();
        updateScrollProgress();
      }, 50);
    }
  }

  function updateScrollProgress() {
    const progressBar = document.getElementById("scroll-progress-bar");
    if (!progressBar) return;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    progressBar.style.width = `${Math.min(100, Math.max(0, percent))}%`;
  }

  function navigateTo(index) {
    if (index >= 0 && index < routesOrder.length) {
      window.location.hash = routesOrder[index].hash;
    }
  }

  // Navigation fluide au clavier (Flèches Droite/Bas et Gauche/Haut, PageDown/PageUp)
  document.addEventListener("keydown", (e) => {
    const isInputActive = ["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName) || document.activeElement?.isContentEditable;
    const isModalOpen = document.getElementById("project-modal-overlay")?.classList.contains("active");

    if (isInputActive || isModalOpen) return;

    // Seules les flèches gauche/droite changent de page : haut/bas et PageUp/PageDown
    // gardent leur comportement normal (faire défiler la page).
    if (e.key === "ArrowRight") {
      const curr = getCurrentRouteIndex();
      if (curr < routesOrder.length - 1) {
        e.preventDefault();
        navigateTo(curr + 1);
      }
    } else if (e.key === "ArrowLeft") {
      const curr = getCurrentRouteIndex();
      if (curr > 0) {
        e.preventDefault();
        navigateTo(curr - 1);
      }
    }
  });

  // Smooth scroll pour toutes les flèches vers le bas (hero, en-têtes et bas de page)
  document.querySelectorAll(".scroll-down-arrow").forEach(arrow => {
    arrow.addEventListener("click", (e) => {
      const href = arrow.getAttribute("href");
      if (href && href.startsWith("#")) {
        const targetEl = document.querySelector(href);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
  // Gestion dynamique & UX avancée de la flèche fixe
  const fixedScrollBtn = document.getElementById("fixed-scroll-down-btn");
  const fixedScrollTooltip = document.getElementById("fixed-scroll-tooltip");

  function updateScrollArrowState() {
    if (!fixedScrollBtn) return;

    const windowHeight = window.innerHeight;
    const currentScroll = window.scrollY || window.pageYOffset;
    const documentHeight = document.documentElement.scrollHeight;
    const curr = getCurrentRouteIndex();
    const isAtBottom = currentScroll + windowHeight >= documentHeight - 120;
    const isLastPage = curr === routesOrder.length - 1;

    if (isLastPage && isAtBottom) {
      fixedScrollBtn.classList.add("state-up");
      if (fixedScrollTooltip) fixedScrollTooltip.textContent = "Retour à l'accueil";
    } else if (isAtBottom) {
      fixedScrollBtn.classList.remove("state-up");
      const nextTitle = routesOrder[curr + 1]?.title || "Page suivante";
      if (fixedScrollTooltip) fixedScrollTooltip.textContent = `Page suivante : ${nextTitle}`;
    } else {
      fixedScrollBtn.classList.remove("state-up");
      if (fixedScrollTooltip) fixedScrollTooltip.textContent = "Défiler vers le bas";
    }
  }

  if (fixedScrollBtn) {
    fixedScrollBtn.addEventListener("click", () => {
      const windowHeight = window.innerHeight;
      const currentScroll = window.scrollY || window.pageYOffset;
      const documentHeight = document.documentElement.scrollHeight;
      const curr = getCurrentRouteIndex();

      if (curr === 0 && currentScroll < 250) {
        const homeDetails = document.getElementById("home-details");
        if (homeDetails) {
          homeDetails.scrollIntoView({ behavior: "smooth" });
          return;
        }
      }

      if (currentScroll + windowHeight < documentHeight - 120) {
        window.scrollBy({ top: windowHeight * 0.8, behavior: "smooth" });
      } else {
        if (curr < routesOrder.length - 1) {
          navigateTo(curr + 1);
        } else {
          navigateTo(0);
        }
      }
    });
  }

  window.addEventListener("scroll", () => {
    updateScrollArrowState();
    updateScrollProgress();
  }, { passive: true });

  window.addEventListener("hashchange", handleRoute);
  handleRoute();
}

// 5. FILTRES DES PROJETS
function initFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  // Les compteurs sont recalculés à partir des data-tags : plus de chiffre faux à maintenir à la main
  filterBtns.forEach(btn => {
    const value = btn.getAttribute("data-filter");
    const countEl = btn.querySelector(".filter-count");
    const n = value === "all"
      ? projectCards.length
      : [...projectCards].filter(c => c.getAttribute("data-tags").split(" ").includes(value)).length;
    if (countEl) countEl.textContent = n;
    btn.setAttribute("aria-pressed", btn.classList.contains("active") ? "true" : "false");
  });

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => { b.classList.remove("active"); b.setAttribute("aria-pressed", "false"); });
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");

      const filterValue = btn.getAttribute("data-filter");

      projectCards.forEach(card => {
        const cardTags = card.getAttribute("data-tags").split(" ");
        if (filterValue === "all" || cardTags.includes(filterValue)) {
          card.style.display = "flex";
          // Animation de fade-in
          card.style.opacity = "0";
          card.style.transform = "scale(0.98)";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "scale(1)";
          }, 50);
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

// 6. ACCORDEONS SUR LA PAGE COMPETENCES (Avec bouton Tout développer / Tout réduire)
function initSkillsAccordions() {
  const accordionCards = document.querySelectorAll(".skill-accordion-card");
  const toggleAllBtn = document.getElementById("skills-toggle-all-btn");
  const toggleAllText = document.getElementById("skills-toggle-all-text");
  const toggleAllIcon = document.getElementById("skills-toggle-all-icon");

  // Ouvert = hauteur libre ("none"), pour que tout soit visible même si la page était masquée au chargement
  function openPanel(card) {
    const header = card.querySelector(".accordion-header");
    const panel = card.querySelector(".accordion-panel");
    card.classList.add("active");
    header.setAttribute("aria-expanded", "true");
    panel.style.maxHeight = panel.scrollHeight + "px";
    panel.addEventListener("transitionend", function done() {
      if (card.classList.contains("active")) panel.style.maxHeight = "none";
      panel.removeEventListener("transitionend", done);
    });
  }

  function closePanel(card) {
    const header = card.querySelector(".accordion-header");
    const panel = card.querySelector(".accordion-panel");
    card.classList.remove("active");
    header.setAttribute("aria-expanded", "false");
    // On repart de la hauteur réelle pour que la fermeture soit animée
    panel.style.maxHeight = panel.scrollHeight + "px";
    panel.offsetHeight; // force reflow
    panel.style.maxHeight = "0px";
  }

  function updateToggleAllState() {
    const allExpanded = document.querySelectorAll(".skill-accordion-card.active").length === accordionCards.length;
    if (toggleAllBtn) toggleAllBtn.setAttribute("aria-expanded", allExpanded ? "true" : "false");
    if (toggleAllText) toggleAllText.textContent = allExpanded ? "Tout réduire" : "Tout développer";
    if (toggleAllIcon) toggleAllIcon.style.transform = allExpanded ? "rotate(180deg)" : "rotate(0deg)";
  }

  // État initial : toutes les catégories ouvertes, pour qu'un recruteur voie tout d'un coup d'œil
  accordionCards.forEach(card => {
    const panel = card.querySelector(".accordion-panel");
    if (card.classList.contains("active") && panel) panel.style.maxHeight = "none";

    const header = card.querySelector(".accordion-header");
    if (!header || !panel) return;
    header.addEventListener("click", () => {
      card.classList.contains("active") ? closePanel(card) : openPanel(card);
      updateToggleAllState();
    });
  });

  if (toggleAllBtn) {
    toggleAllBtn.addEventListener("click", () => {
      const allExpanded = document.querySelectorAll(".skill-accordion-card.active").length === accordionCards.length;
      accordionCards.forEach(card => {
        if (allExpanded) closePanel(card);
        else if (!card.classList.contains("active")) openPanel(card);
      });
      updateToggleAllState();
    });
  }

  updateToggleAllState();
}

// 7. POPUP DETAIL PROJET AVEC SES 3 ONGLETS ET NAVIGATION INTER-PROJETS
let activeModalProjectId = null;

function initModals() {
  const projectCards = document.querySelectorAll(".project-card");
  const modalOverlay = document.getElementById("project-modal-overlay");

  if (!modalOverlay) return;

  let lastFocusedCard = null;

  function openFromCard(card) {
    const id = parseInt(card.getAttribute("data-id"));
    const project = projectsData.find(p => p.id === id);

    if (project) {
      lastFocusedCard = card;
      activeModalProjectId = project.id;
      fillModalContent(project);
      modalOverlay.classList.add("active");
      document.body.style.overflow = "hidden"; // Bloque scroll
      // Petit délai : la modale doit être visible (transition CSS) pour recevoir le focus
      setTimeout(() => {
        const closeBtn = modalOverlay.querySelector(".modal-close-btn");
        if (closeBtn) closeBtn.focus();
      }, 60);
    }
  }

  projectCards.forEach(card => {
    const title = card.querySelector(".project-card-title");
    if (title) card.setAttribute("aria-label", `Voir le détail du projet : ${title.textContent}`);

    card.addEventListener("click", () => openFromCard(card));
    // Ouverture au clavier (Entrée ou Espace) pour les visiteurs qui n'utilisent pas la souris
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openFromCard(card);
      }
    });
  });

  // Fermeture déclenchée par le bouton injecté dans la modale
  modalOverlay.addEventListener("modal:close", () => closeModal());

  // Fermeture au clic à l'extérieur
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  // Navigation clavier dans la modale : Echap, Flèche Gauche (Précédent), Flèche Droite (Suivant)
  document.addEventListener("keydown", (e) => {
    if (!modalOverlay.classList.contains("active")) return;

    if (e.key === "Escape") {
      closeModal();
    } else if (e.key === "ArrowLeft") {
      const idx = projectsData.findIndex(p => p.id === activeModalProjectId);
      if (idx > 0) {
        const prevP = projectsData[idx - 1];
        activeModalProjectId = prevP.id;
        fillModalContent(prevP);
      }
    } else if (e.key === "ArrowRight") {
      const idx = projectsData.findIndex(p => p.id === activeModalProjectId);
      if (idx >= 0 && idx < projectsData.length - 1) {
        const nextP = projectsData[idx + 1];
        activeModalProjectId = nextP.id;
        fillModalContent(nextP);
      }
    }
  });

  function closeModal() {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
    // On rend le focus à la carte d'origine pour ne pas perdre l'utilisateur clavier
    if (lastFocusedCard) lastFocusedCard.focus();
  }
}

// Génération du contenu dynamique du modal
function fillModalContent(p) {
  const modalBox = document.querySelector(".modal-box");
  if (!modalBox) return;

  activeModalProjectId = p.id;
  const currentIndex = projectsData.findIndex(item => item.id === p.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < projectsData.length - 1;
  const prevProject = hasPrev ? projectsData[currentIndex - 1] : null;
  const nextProject = hasNext ? projectsData[currentIndex + 1] : null;

  let methodologyHTML = "";
  p.methodology.forEach(step => {
    methodologyHTML += `
      <div class="modal-point-item">
        <div class="modal-point-title">${step.t}</div>
        <div class="modal-point-desc">${step.d}</div>
      </div>
    `;
  });

  let tagsHTML = "";
  p.tags.forEach(t => {
    tagsHTML += `<span class="tag-pill">#${t}</span>`;
  });

  const modalBody = `
    <button class="modal-close-btn" aria-label="Fermer">
      <svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="width:18px;height:18px;"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
    </button>
    
    <div class="modal-header-section">
      <h2 class="modal-title" id="modal-project-title">${p.title}</h2>
      <div class="modal-subtitle">${p.subtitle}</div>
      <div class="project-card-tags" style="margin-bottom:1.5rem;">${tagsHTML}</div>
    </div>

    ${(p.images || (p.image ? [{ src: p.image, alt: p.imageAlt }] : [])).map(img => `
    <figure class="modal-project-figure">
      <img src="${img.src}" alt="${img.alt || p.title}" loading="lazy" onerror="this.closest('figure').remove()">
      <figcaption>${img.alt || ""}</figcaption>
    </figure>`).join("")}

    <div class="modal-meta-grid">
      <div class="modal-main-desc">
        <p style="color:var(--text-secondary); font-size:0.95rem; line-height:1.6; font-weight:300;">${p.summary}</p>
      </div>
      
      <div class="modal-side-info">
        <div class="modal-side-title">Fiche synthétique</div>
        <div class="modal-side-list">
          <div><span class="label">KPI clé :</span> <span class="val" style="color:var(--accent-emerald); font-weight:600;">${p.kpi}</span></div>
          <div><span class="label">Rôle :</span> <span class="val">${p.role || "Data Analyst"}</span></div>
        </div>
        <!-- Les boutons n'apparaissent que si un lien est renseigné : jamais de lien mort -->
        <div class="modal-side-actions" style="margin-top: 1.25rem; display: flex; flex-direction: column; gap: 0.5rem;">
          ${p.githubUrl ? `<a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="font-size: 0.8rem; padding: 0.45rem 0.8rem; border-radius: var(--radius-sm); justify-content: center;">
            Code source (GitHub)
          </a>` : ""}
          ${p.demoUrl ? `<a href="${p.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="font-size: 0.8rem; padding: 0.45rem 0.8rem; border-radius: var(--radius-sm); justify-content: center;">
            ${p.demoLabel || "Consulter le livrable"}
          </a>` : ""}
        </div>
      </div>
    </div>

    <!-- Onglets du modal -->
    <div class="modal-tabs" role="tablist">
      <button class="modal-tab-btn active" data-tab="overview" aria-selected="true">Vue d'ensemble</button>
      <button class="modal-tab-btn" data-tab="methodology" aria-selected="false">Méthodologie et difficultés</button>
      <button class="modal-tab-btn" data-tab="results" aria-selected="false">Résultats et compétences</button>
    </div>

    <!-- Onglet 1: Overview -->
    <div class="modal-tab-content active" id="tab-overview">
      <div class="modal-body-section">
        <h3 class="modal-body-title">
          <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></svg>
          Contexte et problème métier
        </h3>
        <div class="modal-body-text">
          <p>${p.context}</p>
        </div>
      </div>

      <div class="modal-body-section">
        <h3 class="modal-body-title">
          <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          Objectifs stratégiques
        </h3>
        <div class="modal-body-text">
          <p>${p.objectives}</p>
        </div>
      </div>

      <div class="modal-body-section">
        <h3 class="modal-body-title">
          <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125M3.75 10.125v3.75m16.5-3.75v3.75m-16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125M3.75 13.875v3.75" /></svg>
          Données et sources utilisées
        </h3>
        <div class="modal-body-text">
          <p>${p.dataUsed}</p>
        </div>
      </div>
    </div>

    <!-- Onglet 2: Methodology -->
    <div class="modal-tab-content" id="tab-methodology">
      <div class="modal-body-section">
        <h3 class="modal-body-title">
          <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.03 0 1.9.693 2.166 1.638m-7.377 19.462A9 9 0 1120.25 12a9 9 0 01-9.523 9.462z" /></svg>
          Méthodologie d'analyse et étapes
        </h3>
        <div class="modal-list-points">
          ${methodologyHTML}
        </div>
      </div>

      <div class="modal-body-section">
        <h3 class="modal-body-title">
          <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
          Difficultés rencontrées et solutions
        </h3>
        <div class="modal-body-text">
          <p>${p.difficulties}</p>
        </div>
      </div>
    </div>

    <!-- Onglet 3: Results -->
    <div class="modal-tab-content" id="tab-results">
      <div class="modal-body-section">
        <h3 class="modal-body-title">
          <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          Résultats et impact business
        </h3>
        <div class="modal-body-text" style="font-weight: 400; border-left: 3px solid var(--accent-emerald); padding-left: 1rem; color: var(--text-primary);">
          <p>${p.results}</p>
        </div>
      </div>

      <div class="modal-body-section">
        <h3 class="modal-body-title">
          <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
          Visualisations et outils
        </h3>
        <div class="modal-body-text">
          <p>${p.visualizations}</p>
          <p style="margin-top: 0.5rem;"><strong>Outils :</strong> ${p.tools}</p>
        </div>
      </div>

      <div class="modal-body-section">
        <h3 class="modal-body-title">
          <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 017.231-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A5.905 5.905 0 018 3.443m4.26 6.704L12 3m0 0a5.905 5.905 0 018 3.443m-9.9 3a50.568 50.568 0 012.658-.813m0 0a50.57 50.57 0 002.658-.813M21.75 8.25v2.25m-2.25-2.25h2.25m-2.25 0h.008v.008h-.008v-.008z" /></svg>
          Compétences clés développées
        </h3>
        <div class="modal-body-text">
          <p>${p.skills}</p>
        </div>
      </div>
    </div>

    <!-- Navigation inter-projets dans le footer du modal -->
    <div class="modal-nav-footer">
      <button class="modal-nav-btn modal-prev-btn" ${!hasPrev ? 'disabled' : ''}>
        <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" width="16" height="16"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
        ${hasPrev ? 'Projet précédent' : 'Premier projet'}
      </button>

      <button class="modal-nav-btn modal-next-btn" ${!hasNext ? 'disabled' : ''}>
        ${hasNext ? 'Projet suivant' : 'Dernier projet'}
        <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" width="16" height="16"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
      </button>
    </div>
  `;

  modalBox.innerHTML = modalBody;
  modalBox.scrollTop = 0;

  // Interaction des onglets au sein de la modal
  const tabBtns = modalBox.querySelectorAll(".modal-tab-btn");
  const tabContents = modalBox.querySelectorAll(".modal-tab-content");

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const tabId = btn.getAttribute("data-tab");

      tabBtns.forEach(b => { b.classList.remove("active"); b.setAttribute("aria-selected", "false"); });
      tabContents.forEach(c => c.classList.remove("active"));

      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      modalBox.querySelector(`#tab-${tabId}`).classList.add("active");
    });
  });

  // Re-lier le bouton de fermeture injecté
  const closeBtn = modalBox.querySelector(".modal-close-btn");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      const modalOverlay = document.getElementById("project-modal-overlay");
      modalOverlay.dispatchEvent(new CustomEvent("modal:close"));
    });
  }

  // Navigation inter-projets
  const prevBtn = modalBox.querySelector(".modal-prev-btn");
  const nextBtn = modalBox.querySelector(".modal-next-btn");

  if (prevBtn && hasPrev) {
    prevBtn.addEventListener("click", () => {
      fillModalContent(prevProject);
    });
  }

  if (nextBtn && hasNext) {
    nextBtn.addEventListener("click", () => {
      fillModalContent(nextProject);
    });
  }
}

// 8. COPIE DE L'EMAIL DANS LE PRESSE-PAPIER
function initEmailCopy() {
  const emailWrapper = document.getElementById("email-copy-btn");
  const tooltip = document.getElementById("copy-tooltip");

  if (!emailWrapper || !tooltip) return;

  emailWrapper.addEventListener("click", () => {
    const email = "philippenioule@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      tooltip.textContent = "Adresse copiée !";
      tooltip.style.color = "var(--accent-emerald)";

      setTimeout(() => {
        tooltip.textContent = "Copier l'adresse";
        tooltip.style.color = "";
      }, 2000);
    }).catch(err => {
      console.error("Échec de la copie de l'email : ", err);
    });
  });
}

// 9. FORMULAIRE DE CONTACT (Ouverture client mail avec mailto et Toast)
function initContactForm() {
  const form = document.getElementById("form-element");
  const toast = document.getElementById("contact-toast");
  const toastMessage = toast ? toast.querySelector(".toast-message") : null;

  if (!form || !toast) return;

  const CONTACT_EMAIL = "philippenioule@gmail.com";

  const submitBtn = document.getElementById("form-submit-btn");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("form-name").value.trim();
    const email = document.getElementById("form-email").value.trim();
    const message = document.getElementById("form-message").value.trim();

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Envoi en cours…";
    }

    try {
      // Tant que l'ID Formspree n'est pas renseigné, inutile d'appeler le service : on bascule sur mailto
      if (form.action.includes("YOUR_FORM_ID")) throw new Error("Formspree non configuré");

      // Envoi réel via Formspree (voir action="..." sur le <form> dans index.html)
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      });

      if (!response.ok) throw new Error("Formspree request failed");

      if (toastMessage) {
        toastMessage.textContent = "Message envoyé avec succès !";
      }
      toast.classList.add("active");
      setTimeout(() => toast.classList.remove("active"), 4500);
      form.reset();
    } catch (err) {
      console.error("Échec de l'envoi via Formspree, fallback mailto : ", err);

      // Fallback : ouverture du client mail si le service d'envoi échoue
      const subject = `Contact Portfolio - ${name}`;
      const body = `${message}\n\n---\nDe : ${name} (${email})`;
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      if (toastMessage) {
        toastMessage.textContent = "Envoi indisponible : ouverture de votre messagerie à la place.";
      }
      toast.classList.add("active");
      setTimeout(() => toast.classList.remove("active"), 4500);
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Envoyer le message";
      }
    }
  });
}
