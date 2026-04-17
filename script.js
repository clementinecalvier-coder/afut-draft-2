// ============================================
// AFUTÉ — Envol Pro · Livre Blanc 2026
// Interactive JavaScript
// ============================================

// ===== STEP DATA =====
const stepData = {
  '1a': {
    num: '1a',
    title: 'Préqualification',
    track: 'Côté Candidat',
    trackClass: 'badge-candidat',
    numClass: '',
    deroulé: `Une famille, une structure ou un établissement contacte Afuté. L'objectif de la rencontre est de vérifier s'il y a un projet à construire. Le jeune souhaite-t-il travailler ? Dispose-t-il d'un socle d'autonomie suffisant ? Un questionnaire et un entretien permettent d'évaluer cela. Si l'intérêt est confirmé, les questionnaires administratifs et d'aptitude sont envoyés.`,
    pierre: `L'éducateur de Pierre contacte Afuté. Sa famille confirme le souhait d'orientation vers un travail en milieu ordinaire. Pierre semble lui aussi motivé. Les premiers échanges permettent de le rencontrer et de faire une première évaluation de ses aptitudes et habiletés sociales.`,
    parties: [
      { label: 'Jeune', role: 'Engagement sur le souhait d\'être employé' },
      { label: 'Famille', role: 'Volonté d\'orienter vers le milieu ordinaire' },
      { label: 'Structure MS', role: 'Volonté d\'orienter vers le milieu ordinaire' },
      { label: 'Afuté', role: 'Évalue la faisabilité, conduit l\'entretien' },
    ]
  },
  '2a': {
    num: '2a',
    title: 'Profilage',
    track: 'Côté Candidat',
    trackClass: 'badge-candidat',
    numClass: '',
    deroulé: `Afuté propose des séances d'essai et des mises en situation sur des tâches simples. Les formateurs observent la prise en main du matériel, la persévérance, la réaction aux imprévus, la concentration, la station debout. L'objectif : évaluer les aptitudes, la motivation du candidat, le soutien de la famille. Toutes les observations sont traduites dans le référentiel Afuté : 26 axes, notés de 1 à 5. Le profil complet sert de base à toute décision.`,
    pierre: `En situation, les formateurs Afuté remarquent que Pierre découpe des légumes avec précision. Il reste concentré une heure. Il est aussi capable de tenir deux heures debout. Le référentiel se précise. Le profil Afuté de Pierre est complet, il sera confronté aux référentiels de postes en entreprise pour trouver le meilleur duo candidat-entreprise.`,
    parties: [
      { label: 'Jeune', role: 'Participe aux mises en situation' },
      { label: 'Famille', role: 'Soutient la démarche, valide le projet' },
      { label: 'Structure MS', role: 'Engagement sur les freins de l\'apprenant' },
      { label: 'Afuté', role: 'Évalue les aptitudes, construit le profil' },
    ]
  },
  '3a': {
    num: '3a',
    title: 'Orientation',
    track: 'Côté Candidat',
    trackClass: 'badge-candidat',
    numClass: '',
    deroulé: `Afuté formule un avis collectif sur le candidat, réunissant l'ensemble des observations recueillies lors du profilage. Une orientation vers l'une des formations Afuté est proposée. Le candidat rejoint alors un vivier de profils prêts à être matchés avec des postes en entreprise. L'état d'esprit, le projet professionnel et l'adéquation du profil sont validés à cette étape.`,
    pierre: `L'équipe Afuté valide la candidature de Pierre et l'oriente vers le programme Envol Pro. Son profil (forte concentration, bonne motricité fine, capacité à tenir le poste debout) est intégré au vivier, en attente d'un poste correspondant côté entreprise.`,
    parties: [
      { label: 'Jeune', role: 'Confirme son projet professionnel' },
      { label: 'Famille', role: 'Valide l\'orientation proposée' },
      { label: 'Structure MS', role: 'Apporte son éclairage sur la faisabilité' },
      { label: 'Afuté', role: 'Formule l\'avis collectif, intègre le vivier' },
    ]
  },
  '1b': {
    num: '1b',
    title: 'Contact Entreprise',
    track: 'Côté Entreprise',
    trackClass: 'badge-entreprise',
    numClass: 'entreprise',
    deroulé: `Afuté prospecte les entreprises partenaires sur des postes en tension dont les tâches sont généralement accessibles et appréciées par des profils neuroatypiques : commis de cuisine, agent de restauration, employé de cafétéria, agent de propreté. Lors de la prise de contact, un membre de l'équipe Afuté se rend sur site. On valide surtout la compréhension du dispositif et l'engagement d'embauche en cas de formation réussie.`,
    pierre: `Un restaurant d'entreprise cherche un tisanier. Le directeur contacte Afuté. Un membre de l'équipe se rend sur place. Les premières observations alimentent le référentiel Afuté. Pas de caractérisation à ce stade : on vérifie l'adéquation du cadre et l'engagement de l'équipe.`,
    parties: [
      { label: 'Afuté', role: 'Prospecte, visite le site, présente le dispositif' },
      { label: 'Entreprise', role: 'Relation de partenariat avec le directeur de site' },
    ]
  },
  '2b': {
    num: '2b',
    title: 'Diagnostic',
    track: 'Côté Entreprise',
    trackClass: 'badge-entreprise',
    numClass: 'entreprise',
    deroulé: `Sur le site, Afuté observe le fonctionnement concret, découpe le poste en tâches élémentaires, et évalue chaque tâche sur le même référentiel que les candidats. Le résultat : un contenu de poste précisément défini et caractérisé en termes d'aptitudes requises. C'est ce référentiel métier qui permettra le matching.`,
    pierre: `4 blocs de tâches sont identifiés sur le poste de tisanier : préparation, service (étages), plonge, nettoyage. Afuté note que le bruit ambiant est modéré. C'est une équipe de 2, horaires 7h30-12h30. Niveau de motricité fine et de concentration requis : moyen.`,
    parties: [
      { label: 'Afuté', role: 'Réalise le diagnostic, établit le référentiel métier' },
      { label: 'Entreprise', role: 'Facilite l\'accès au site, valide l\'analyse des tâches' },
    ]
  },
  '3b': {
    num: '3b',
    title: 'Opportunité',
    track: 'Côté Entreprise',
    trackClass: 'badge-entreprise',
    numClass: 'entreprise',
    deroulé: `Le poste post-formation est défini en concertation avec Afuté : tâches identifiées, correspondance avec le profil attendu, budget confirmé pour l'embauche. Le décisionnaire d'emploi confirme le GO pour l'embauche en cas de formation réussie. L'environnement de travail est vérifié : stabilité du personnel et de l'organisation sur une durée supérieure à un an.`,
    pierre: `Le poste de tisanier est confirmé. Le directeur du restaurant valide l'engagement d'embauche en CDI à temps partiel en cas de formation réussie. L'environnement est stable : même équipe, mêmes horaires prévus sur 18 mois. Le poste est prêt à recevoir un apprenant.`,
    parties: [
      { label: 'Afuté', role: 'Vérifie la stabilité, confirme la correspondance profil-poste' },
      { label: 'Entreprise', role: 'Confirme le poste, le budget, l\'engagement d\'embauche' },
    ]
  },
  '4': {
    num: '4',
    title: 'Matching',
    track: 'Candidat & Entreprise',
    trackClass: 'badge-joint',
    numClass: 'joint',
    deroulé: `Les deux référentiels se superposent. Pour chaque axe, la note du candidat doit être égale ou supérieure au minimum requis par le poste. Lorsqu'un écart existe, l'équipe évalue s'il peut être comblé par la formation ou un aménagement, ou si le contenu du poste peut être adapté. C'est la rencontre des deux démarches menées en parallèle.`,
    pierre: `Le profil de Pierre (motricité fine élevée, forte concentration, capacité debout confirmée) est confronté au référentiel du poste de tisanier. L'adéquation est confirmée sur tous les axes. Le niveau de bruit modéré correspond au besoin de Pierre d'un environnement limité. La formation peut démarrer.`,
    parties: [
      { label: 'Jeune', role: 'Profil validé et confronté au poste' },
      { label: 'Famille', role: 'Informée du matching, valide l\'engagement' },
      { label: 'Structure MS', role: 'Vérifie la compatibilité avec le suivi en cours' },
      { label: 'Afuté', role: 'Réalise le croisement des référentiels, décide' },
      { label: 'Entreprise', role: 'Valide l\'adéquation profil-poste' },
    ]
  },
  '5': {
    num: '5',
    title: 'Formation',
    track: 'Candidat & Entreprise',
    trackClass: 'badge-joint',
    numClass: 'joint',
    deroulé: `420h de formation, 100% en entreprise. Le Formateur Entreprise montre, explique, fait faire. Le Formateur Afuté est présent au démarrage pour installer la relation et identifier les premiers ajustements. Les fiches FUTE servent de repères visuels au quotidien. Double suivi tout au long du parcours : suivi pédagogique (5 évaluations) et suivi des conditions de vie (transport, famille, structure MS).`,
    pierre: `Pierre apprend le chariot les 6 premières semaines, puis intègre le service tisanerie (sem. 4-12) et la plonge (sem. 8-16). Dès la semaine 4, il travaille en binôme seul avec le formateur interne. Au bilan de mi-parcours : des retards le lundi liés aux transports. L'IME met en place un travail sur l'anticipation qui porte ses fruits.`,
    parties: [
      { label: 'Jeune', role: 'Maîtrise des savoir-être et savoir-faire du poste' },
      { label: 'Famille', role: 'Soutien quotidien, autonomie transport, stabilité vie' },
      { label: 'Structure MS', role: 'Accompagnement complémentaire, compatibilité emploi/suivi' },
      { label: 'Afuté', role: 'Formateur sur site, suivi pédagogique, coordination' },
      { label: 'Entreprise', role: 'Formateur Entreprise, évaluations, signalement des freins' },
    ]
  },
  '6': {
    num: '6',
    title: 'Emploi 🎯',
    track: 'Candidat & Entreprise',
    trackClass: 'badge-joint',
    numClass: 'joint',
    deroulé: `La décision d'embauche repose sur les compétences documentées dans les évaluations. L'issue ne doit être une surprise pour aucune des parties : chacun l'aura anticipée dès le bilan de mi-parcours. L'emploi visé est durable : CDI, CDD > 6 mois ou alternance. La compatibilité financière (aides, rémunération) et le maintien du suivi médico-social ont été vérifiés en amont.`,
    pierre: `Au bilan de fin de parcours, Pierre maîtrise l'ensemble des tâches. Le niveau de bruit, point de vigilance identifié en cours de formation, est géré. Le directeur du site confirme l'embauche en CDI à temps partiel. Pierre rejoint l'équipe.`,
    parties: [
      { label: 'Jeune', role: 'Compétences documentées, emploi durable' },
      { label: 'Famille', role: 'Valide les conditions de vie et la rémunération' },
      { label: 'Structure MS', role: 'Anticipe la compatibilité emploi / maintien du suivi' },
      { label: 'Afuté', role: 'Coordonne la décision, vérifie la viabilité globale' },
      { label: 'Entreprise', role: 'Confirme l\'embauche, propose un contrat conforme' },
    ]
  }
};

// ===== STAKEHOLDER DATA =====
const stakeholderData = {
  apprenant: {
    icon: '🧑',
    title: 'L\'Apprenant',
    intro: 'Acteur central du dispositif, le jeune en situation de handicap est accompagné tout au long du parcours pour acquérir les compétences techniques et comportementales nécessaires à l\'emploi.',
    conditions: [
      { n: 1, title: 'Engagement sincère', desc: 'Un désir réel d\'emploi — pas une orientation subie.' },
      { n: 2, title: 'Projet professionnel', desc: 'Un métier réaliste, choisi, désirable.' },
      { n: 3, title: 'Aptitudes', desc: 'Des capacités en adéquation avec le poste visé.' },
      { n: 4, title: 'Savoir-faire', desc: 'Les compétences techniques acquises ou acquérables.' },
      { n: 5, title: 'Savoir-être', desc: 'Ponctualité, relations, gestion de l\'imprévu : travaillées explicitement.' },
      { n: 6, title: 'Transport', desc: 'Un trajet autonome, sans correspondances excessives.' },
      { n: 7, title: 'Logement', desc: 'Un cadre de vie stable, condition de toute projection dans l\'emploi.' },
      { n: 8, title: 'Santé', desc: 'Une stabilité physique et mentale suffisante pour tenir un rythme.' },
      { n: 9, title: 'Rémunération', desc: 'Le niveau de salaire compris et accepté, aides comprises.' },
    ]
  },
  famille: {
    icon: '👨‍👩‍👦',
    title: 'La Famille',
    intro: 'La famille est un partenaire clé du parcours. Son engagement ne se limite pas à un accord de principe : elle doit activement soutenir le projet au quotidien.',
    conditions: [
      { n: 1, title: 'Engagement actif', desc: 'Soutenir la motivation au quotidien, valoriser les progrès.' },
      { n: 2, title: 'Savoir-être', desc: 'Accompagner les habitudes : ponctualité, tenue, gestion des émotions.' },
      { n: 3, title: 'Transports', desc: 'Travailler l\'autonomie, accompagner l\'apprentissage du trajet.' },
      { n: 4, title: 'Conditions de vie', desc: 'Assurer la stabilité du cadre de vie, anticiper l\'impact financier.' },
    ]
  },
  structure: {
    icon: '🏥',
    title: 'Structure Médico-Sociale',
    intro: 'L\'ESMS ou IME doit s\'impliquer activement — pas seulement tolérer le projet. Sa mission est de rendre l\'emploi compatible avec le suivi médico-social.',
    conditions: [
      { n: 1, title: 'État d\'esprit', desc: 'Une volonté réelle, pas une tolérance passive.' },
      { n: 2, title: 'Engagement sur les freins', desc: 'S\'impliquer activement, pas déléguer à Afuté.' },
      { n: 3, title: 'Compatibilité emploi/suivi', desc: 'L\'emploi ne doit pas rompre le lien médico-social.' },
      { n: 4, title: 'Habiletés sociales', desc: 'Guidance comportementale et ateliers spécifiques si nécessaire.' },
    ]
  },
  entreprise: {
    icon: '🏢',
    title: 'L\'Entreprise',
    intro: 'L\'entreprise n\'est pas un destinataire passif du dispositif. Elle est co-formatrice. Son engagement sur le poste, le budget et la stabilité est une condition sine qua non.',
    conditions: [
      { n: 1, title: 'Partenariat terrain', desc: 'Un vrai besoin identifié sur le terrain.' },
      { n: 2, title: 'Partenariat décisionnel', desc: 'Un accord formalisé : budget, date, volonté.' },
      { n: 3, title: 'Poste adapté', desc: 'Des tâches définies et adaptées à un profil neuro-atypique.' },
      { n: 4, title: 'Poste budgété', desc: 'Pas de promesse sans ligne budgétaire confirmée.' },
      { n: 5, title: 'Stabilité', desc: 'Équipe, lieu, organisation stables sur au moins un an.' },
      { n: 6, title: 'Tuteur engagé', desc: 'Un référent formé, disponible, impliqué dans la formation.' },
    ]
  },
  afute: {
    icon: '⚡',
    title: 'Afuté',
    intro: 'Afuté est le coordinateur central du dispositif. Son rôle est de créer les conditions du matching et de maintenir le suivi d\'inclusion tout au long du parcours.',
    conditions: [
      { n: 1, title: 'Coordination globale', desc: 'Coordonne l\'ensemble des parties prenantes tout au long du parcours.' },
      { n: 2, title: 'Faisabilité du matching', desc: 'Vérifie en amont : transport, rémunération, compatibilité poste/profil.' },
      { n: 3, title: 'Outils pédagogiques', desc: 'Fiches FUTE, référentiel 26 axes, livrets formateur.' },
      { n: 4, title: 'Suivi d\'inclusion renforcé', desc: 'Au-delà du suivi pédagogique, maintient le lien avec toutes les parties.' },
    ]
  }
};

// ===== OPEN STEP MODAL =====
function openStepModal(stepId) {
  const step = stepData[stepId];
  if (!step) return;

  const partiesHTML = step.parties.map(p => `
    <div class="partie-item">
      <span class="partie-label">${p.label}</span>
      <span class="partie-role">${p.role}</span>
    </div>
  `).join('');

  document.getElementById('modal-body').innerHTML = `
    <div class="modal-step-header">
      <div class="modal-step-num ${step.numClass}">${step.num}</div>
      <h3>${step.title}</h3>
    </div>
    <span class="modal-track-badge ${step.trackClass}">${step.track}</span>

    <div class="modal-deroulé">
      <h4>Le déroulé</h4>
      <p>${step.deroulé}</p>
    </div>

    ${step.pierre ? `
    <div class="modal-pierre">
      <h4>🧑 Suivons l'exemple de Pierre, 20 ans</h4>
      <p>${step.pierre}</p>
    </div>
    ` : ''}

    <div class="modal-parties">
      <h4>Parties prenantes à cette étape</h4>
      <div class="parties-grid">${partiesHTML}</div>
    </div>
  `;

  openModal();
}

// ===== OPEN STAKEHOLDER MODAL =====
function openStakeholderModal(key) {
  const sh = stakeholderData[key];
  if (!sh) return;

  const condsHTML = sh.conditions.map(c => `
    <div class="partie-item" style="align-items:flex-start; gap:14px; padding:14px;">
      <span class="cond-n" style="flex-shrink:0;">${c.n}</span>
      <div>
        <strong style="display:block; font-size:13px; font-weight:700; color:var(--text); margin-bottom:2px;">${c.title}</strong>
        <span style="font-size:13px; color:var(--text-muted);">${c.desc}</span>
      </div>
    </div>
  `).join('');

  document.getElementById('modal-body').innerHTML = `
    <div class="modal-step-header">
      <span style="font-size:36px;">${sh.icon}</span>
      <h3>${sh.title}</h3>
    </div>
    <p style="font-size:14px; line-height:1.75; color:var(--text); margin-bottom:24px; padding-bottom:20px; border-bottom:1px solid var(--border);">${sh.intro}</p>
    <div class="modal-parties">
      <h4 style="font-size:11px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:var(--text-muted); margin-bottom:12px;">Conditions de réussite</h4>
      <div class="parties-grid">${condsHTML}</div>
    </div>
  `;

  openModal();
}

// ===== MODAL UTILS =====
function openModal() {
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

// Close on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ===== SCROLL TO =====
function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

// ===== TOOL TABS =====
function showToolCategory(cat) {
  document.querySelectorAll('.tool-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tool-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('tools-' + cat)?.classList.add('active');
  event.currentTarget.classList.add('active');
}

// ===== CONDITIONS TABS =====
function showConditions(key) {
  document.querySelectorAll('.conditions-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.cond-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('cond-' + key)?.classList.add('active');
  event.currentTarget.classList.add('active');
}

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== REVEAL ON SCROLL =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.track-step, .stakeholder-card, .tool-item, .cond-card, .condition-item, .conv-step, .insight-box').forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// ===== HERO MINI PROCESS CLICK =====
document.querySelectorAll('.pm-step').forEach(el => {
  el.addEventListener('click', () => {
    const step = el.getAttribute('data-step');
    if (step) openStepModal(step);
  });
});

document.querySelectorAll('.pm-joint').forEach(el => {
  el.addEventListener('click', () => {
    const step = el.getAttribute('data-step');
    if (step) openStepModal(step);
  });
});

// ===== STAGGER ANIMATIONS FOR CARDS =====
function staggerReveal(selector, delay = 80) {
  document.querySelectorAll(selector).forEach((el, i) => {
    el.style.transitionDelay = `${i * delay}ms`;
  });
}

staggerReveal('.track-step', 60);
staggerReveal('.stakeholder-card', 80);
staggerReveal('.condition-item', 50);
