/*! PeakMind © 2026. Tous droits réservés. Copie, modification et redistribution interdites sans autorisation. */
(() => {
'use strict';
const APP = 'PeakMind';
const KEY = 'peakmind.v1';
const OLD_KEY = 'peakwinner.v1';
const VERSION = '1.5.0';
const OFFICIAL_URL = 'https://peakwinner93.github.io/app/';
(() => {
if (!OFFICIAL_URL || location.protocol === 'file:') return;
const host = h => String(h).toLowerCase().replace(/^www\./, '');
const here = host(location.hostname);
if (here === host(new URL(OFFICIAL_URL).hostname) || here === 'localhost' || here === '127.0.0.1' || here.endsWith('.localhost')) return;
const fr = (navigator.language || 'fr').toLowerCase().startsWith('fr');
const bar = document.createElement('a');
bar.href = OFFICIAL_URL; bar.rel = 'noopener'; bar.className = 'fake-bar';
bar.textContent = (fr ? '⚠️ Copie non officielle de PeakMind. La vraie appli est ici : ' : '⚠️ Unofficial copy of PeakMind. The real app is here: ') + OFFICIAL_URL.replace(/^https?:\/\//, '');
document.body.prepend(bar);
})();
const T = {
fr: {
'tab.today': "Aujourd'hui", 'tab.goals': 'Objectifs', 'tab.badges': 'Badges', 'tab.settings': 'Réglages',
'hello': 'Salut {name}', 'hello.m': 'Bonjour {name}', 'hello.e': 'Bonsoir {name}', 'day.ring': 'aujourd\'hui', 'hello.anon': 'Salut !', 'stat.streak': 'jours de série', 'stat.goals': 'objectifs', 'stat.badges': 'badges',
'today.habits': 'À faire aujourd\'hui', 'today.quits': 'Ce que tu arrêtes', 'today.targets': 'Tes objectifs chiffrés', 'today.rest': 'Rien de prévu aujourd\'hui pour tes habitudes. Profite pour récupérer.',
'empty.title': 'Ton sommet commence ici', 'empty.text': 'Crée ton premier objectif : un objectif perso, une habitude à prendre ou une mauvaise habitude à arrêter.', 'empty.cta': 'Créer mon premier objectif',
'type.target': 'Objectif chiffré', 'type.target.d': 'Atteindre un nombre : 10 km, 70 kg, 12 livres…',
'type.habit': 'Habitude à prendre', 'type.habit.d': 'Cocher chaque jour prévu et tenir la série.',
'type.quit': 'Habitude à arrêter', 'type.quit.d': 'Compter les jours sans craquer.',
'type.tiktok': 'Compte TikTok', 'type.tiktok.d': 'Suivre tes abonnés jusqu\'à ton objectif.',
'new.title': 'Nouvel objectif', 'new.pick': 'Choisis un modèle', 'new.custom': 'Personnalisé', 'new.custom.d': 'Écris ton propre objectif',
'f.title': 'Ton objectif', 'f.emoji': 'Icône', 'f.why': 'Pourquoi c\'est important pour toi ? (facultatif)', 'f.why.ph': 'Ex. : être fier de moi en juin',
'f.unit': 'Unité', 'f.start': 'Valeur de départ', 'f.target': 'Valeur visée', 'f.deadline': 'Date limite', 'f.days': 'Jours prévus',
'f.since': 'Depuis quand ?', 'f.handle': 'Ton @ TikTok', 'f.followers': 'Abonnés aujourd\'hui', 'f.goalFollowers': 'Abonnés visés',
'f.create': 'Créer l\'objectif', 'f.back': 'Retour', 'f.required': 'Remplis le nom de l\'objectif.', 'f.numbers': 'Indique une valeur de départ et une valeur visée différentes.',
'card.left': 'encore {n} {unit}', 'card.done': 'Objectif atteint !', 'card.add': 'Ajouter', 'card.value': 'Nouvelle valeur', 'card.streak': '{n} j de série', 'card.best': 'record : {n} j',
'quit.since': 'sans craquer', 'quit.days': '{d} j {h} h', 'quit.relapse': 'J\'ai craqué', 'quit.relapse.q': 'Ton compteur repart de zéro, mais ton record reste. Chaque nouveau départ compte. On repart ?', 'quit.relapse.ok': 'Oui, je repars',
'quit.best': 'Record', 'quit.restarts': 'Nouveaux départs',
'd.progress': 'Progression', 'd.history': 'Historique', 'd.deadline': 'Il reste {n} jours (jusqu\'au {date})', 'd.late': 'Date limite dépassée ({date})', 'd.pace': 'Rythme idéal aujourd\'hui : {v} {unit}',
'd.delete': 'Supprimer cet objectif', 'd.delete.q': 'Supprimer « {name} » et tout son historique ? C\'est définitif.', 'd.delete.ok': 'Supprimer',
'd.rate': '{p} % des jours prévus tenus (30 derniers jours)', 'd.tapdays': 'Touche un jour pour le cocher ou le décocher.', 'd.open': 'Ouvrir @{h} sur TikTok', 'd.why': 'Pourquoi',
'd.tiktok.note': 'Ton compte TikTok n\'est pas encore relié automatiquement : note tes abonnés de temps en temps pour voir ta courbe.',
'legend.you': 'toi', 'legend.ideal': 'rythme idéal',
'cancel': 'Annuler', 'close': 'Fermer', 'saved': 'Enregistré', 'checked': 'Bien joué ! Série : {n} j',
'badge.new': 'Badge débloqué : {name}', 'badges.title': 'Tes badges', 'badges.count': '{n} sur {t} débloqués', 'badge.on': 'le {date}', 'badge.off': 'à débloquer',
'b.first': 'Premier pas', 'b.first.d': 'Ta première action', 'b.goals3': 'Ambitieux', 'b.goals3.d': '3 objectifs créés',
'b.streak3': 'Lancé', 'b.streak3.d': '3 jours de série', 'b.streak7': 'Une semaine', 'b.streak7.d': '7 jours de série', 'b.streak30': 'Machine', 'b.streak30.d': '30 jours de série',
'b.clean7': 'Solide', 'b.clean7.d': '7 jours sans craquer', 'b.clean30': 'Inarrêtable', 'b.clean30.d': '30 jours sans craquer',
'b.half': 'Mi-parcours', 'b.half.d': '50 % d\'un objectif', 'b.summit': 'Sommet', 'b.summit.d': 'Un objectif atteint',
'b.tiktok': 'En ligne', 'b.tiktok.d': 'Suivi TikTok lancé', 'b.k1': '1K', 'b.k1.d': '1 000 abonnés',
's.profile': 'Profil', 's.name': 'Ton pseudo', 's.lang': 'Langue', 's.theme': 'Thème', 's.dark': 'Sombre', 's.light': 'Clair',
's.data': 'Tes données', 's.privacy': 'Tout reste sur ton téléphone : rien n\'est envoyé sur internet. Pense à sauvegarder de temps en temps.',
's.export': 'Sauvegarder (fichier)', 's.import': 'Restaurer une sauvegarde', 's.reset': 'Tout effacer', 's.reset.q': 'Effacer tous tes objectifs, ton historique et tes badges ? C\'est définitif.', 's.reset.ok': 'Tout effacer',
's.imported': 'Sauvegarde restaurée', 's.badfile': 'Ce fichier n\'est pas une sauvegarde PeakMind.',
's.install': 'Installer l\'appli', 's.install.ios': 'iPhone : bouton Partager, puis « Sur l\'écran d\'accueil ».', 's.install.android': 'Android : menu ⋮, puis « Installer l\'application ».',
's.about': 'À propos', 's.about.t': 'PeakMind {v}. Fixe ton objectif, avance chaque jour, atteins ton sommet. © 2026 PeakMind, tous droits réservés.',
'onb.title': 'Atteins ton sommet', 'onb.text': 'Fixe tes objectifs, prends de bonnes habitudes, arrête les mauvaises et regarde-toi progresser jour après jour.', 'onb.name': 'Comment on t\'appelle ?', 'onb.start': 'C\'est parti',
'err.storage': 'Impossible d\'enregistrer sur cet appareil (navigation privée ?).',
'wd': ['D', 'L', 'M', 'M', 'J', 'V', 'S'], 'unit.default': 'points',
'w.welcome': 'Bienvenue dans', 'w.alt': 'Altitude', 'w.tagline': 'Fixe ton cap. Atteins ton sommet.', 'w.start': 'Commencer', 'w.step': 'Étape {n} sur {t}',
'w.back': 'Retour', 'w.next': 'Continuer', 'w.skip': 'Passer',
'w.pseudo.t': 'Choisis ton pseudo', 'w.pseudo.d': 'C\'est le nom qu\'on affichera dans l\'appli. Tu pourras le changer plus tard.', 'w.pseudo.ph': 'ex. alex.fit',
'w.pseudo.hi': 'Salut, {name} 👋', 'w.pseudo.err': '2 à 20 caractères : lettres, chiffres, point, tiret ou _ (sans espace).',
'w.avatar.t': 'Choisis ton avatar', 'w.avatar.d': 'Il t\'accompagnera tout au long de ton ascension.',
'w.goals.t': 'Qu\'est-ce que tu veux améliorer ?', 'w.goals.d': 'Choisis tout ce qui te parle : on te proposera des objectifs adaptés.',
'w.done.t': 'Prêt, {name} ?', 'w.done.d': 'Ton ascension commence aujourd\'hui. Un objectif, un pas chaque jour, et tu atteindras ton sommet.',
'w.done.create': 'Créer mon premier objectif', 'w.done.explore': 'Découvrir l\'appli',
'i.sport': 'Sport & physique', 'i.study': 'Études', 'i.social': 'Réseaux sociaux', 'i.health': 'Santé & sommeil', 'i.quit': 'Arrêter une mauvaise habitude', 'i.money': 'Argent & projets',
'sugg.t': 'Suggestions pour toi', 'sugg.other': 'Un autre objectif', 'sugg.other.d': 'Choisis parmi tous les types', 's.replay': 'Revoir l\'accueil',
's.sound': 'Sons', 's.sound.on': 'Activés', 's.sound.off': 'Coupés',
'tab.league': 'Classement', 'lg.live': 'En ligne', 'lg.world': 'Monde', 'lg.week': 'Semaine', 'lg.friends': 'Amis', 'lg.you': 'toi',
'lg.soon.t': 'Bientôt en ligne', 'lg.soon.d': 'Le classement arrive bientôt. Ton code ami est déjà prêt : garde-le pour ajouter tes amis dès l\'ouverture.',
'lg.f.world': 'Classement mondial : tous les utilisateurs de PeakMind, selon leur XP.', 'lg.f.week': 'Classement de la semaine : remis à zéro chaque lundi, tout le monde a sa chance.',
'lg.f.friends': 'Ligue entre amis : ajoute tes amis avec leur code.',
'lg.join.t': 'Rejoins le classement', 'lg.join.d': 'Compare ton XP avec les autres utilisateurs de PeakMind, dans le monde, cette semaine et entre amis.',
'lg.pub': 'Seuls ton pseudo, ton avatar icône, ton cadre, ton rang, ton niveau et ton XP sont visibles. Jamais ta photo ni tes objectifs.',
'lg.minor': 'Tu as moins de 15 ans ? Demande l\'accord d\'un parent avant de rejoindre.', 'lg.join.btn': 'Rejoindre le classement',
'lg.joined': 'Bienvenue dans le classement !', 'lg.left': 'Tu as quitté le classement. Tes données en ligne sont effacées.',
'lg.leave': 'Quitter le classement et effacer mes données', 'lg.leave.q': 'Ton pseudo, ton XP et tes amis seront supprimés du classement. Tes objectifs restent sur ton téléphone.', 'lg.leave.ok': 'Quitter',
'lg.week.reset': 'Remis à zéro chaque lundi', 'lg.loading': 'Chargement du classement…', 'lg.cached': 'dernier classement connu',
'lg.friends.empty': 'Pas encore d\'amis. Partage ton code ou entre celui d\'un ami.',
'lg.code': 'Ton code ami', 'lg.copy': 'Copier', 'lg.share': 'Partager', 'lg.copied': 'Code copié', 'lg.share.text': 'Ajoute-moi sur PeakMind avec mon code ami : {code}',
'lg.code.d': 'Donne-le à tes amis : en l\'entrant, ils t\'ajoutent dans leur ligue (et toi dans la leur).',
'lg.code.soon': 'Garde-le : il servira à t\'ajouter entre amis dès que le classement sera en ligne.',
'lg.add.t': 'Ajouter un ami', 'lg.add.btn': 'Ajouter', 'lg.added': '{name} est maintenant ton ami !',
'lg.report': 'Signaler ce pseudo', 'lg.report.q': 'Signaler « {name} » ? Après plusieurs signalements, ce joueur est masqué du classement.', 'lg.report.ok': 'Signaler', 'lg.reported': 'Merci, c\'est signalé.',
'lg.unfriend': 'Retirer de mes amis', 'lg.unfriend.q': 'Retirer « {name} » de tes amis ?',
'lg.err.offline': 'Pas de connexion internet.', 'lg.err.pseudo': 'Ce pseudo n\'est pas accepté dans le classement. Change-le dans Réglages.',
'lg.err.xp': 'Ton XP n\'a pas pu être vérifiée.', 'lg.err.code': 'Aucun joueur avec ce code.', 'lg.err.own': 'C\'est ton propre code !',
'lg.err.full': '100 amis maximum.', 'lg.err.anon': 'Le classement n\'est pas encore activé sur le serveur.', 'lg.err.generic': 'Le classement ne répond pas. Réessaie plus tard.',
'lg.err.format': 'Le code ressemble à PM-XXXX-XXX.',
'lg.s.title': 'Classement en ligne', 'lg.s.soon': 'Le classement en ligne n\'est pas encore ouvert.', 'lg.s.on': 'Tu participes au classement.', 'lg.s.off': 'Tu ne participes pas au classement.', 'w.gate': 'Toucher pour démarrer', 'w.gate.mute': 'Démarrer sans le son',
'w.photo': 'Importer une photo de ma galerie', 'w.photo.change': 'Changer de photo', 'w.or': 'ou choisis un avatar',
'w.photo.err': 'Impossible de lire cette image. Essaie une autre photo (JPG ou PNG).',
's.photo': 'Photo de profil', 's.photo.add': 'Importer une photo', 's.photo.change': 'Changer la photo', 's.photo.remove': 'Retirer la photo',
'av.initials': 'Initiales', 'av.peak': 'Sommet', 'av.target': 'Cible', 'av.bolt': 'Éclair', 'av.flame': 'Flamme', 'av.shield': 'Bouclier',
'av.crown': 'Couronne', 'av.compass': 'Boussole', 'av.dumbbell': 'Haltère', 'av.diamond': 'Diamant', 'av.trend': 'Progression', 'av.book': 'Livre', 'av.summit': 'Sommet au soleil', 'av.star': 'Étoile',
'av.rocket': 'Fusée', 'av.heart': 'Cœur', 'av.moon': 'Lune', 'av.kettlebell': 'Kettlebell', 'av.sword': 'Épée', 'av.wave': 'Vague', 'av.leaf': 'Feuille',
'av.controller': 'Manette', 'av.headphones': 'Casque', 'av.planet': 'Planète', 'av.atom': 'Atome', 'av.infinity': 'Infini',
'pp.week': '+{n} XP cette semaine', 'pp.last7': 'XP des 7 derniers jours',
'pp.how': 'Comment gagner de l\'XP', 'pp.r.habit': '+{n} XP par habitude cochée', 'pp.r.entry': '+{n} XP par mesure notée',
'pp.r.clean': '+{n} XP par journée complète sans craquer', 'pp.r.badge': '+{n} XP par badge débloqué',
'pp.r.cap': '{n} XP maximum par jour, quêtes comprises (hors badges et défi de la semaine) : la régularité compte plus que la quantité.', 'pp.continue': 'Continuer',
'tab.profile': 'Profil', 'stat.level': 'niveau',
'lvl.title': 'Rang et niveau', 'lvl.n': 'Niveau {n}', 'lvl.short': 'Niv. {n}', 'lvl.next': 'Encore {n} XP avant le niveau {l}',
'lvl.nextReward': 'niv. {l} : {name}', 'lvl.sheet': 'Ta progression', 'lvl.total': '{n} XP au total',
'lvl.ranks': 'Les rangs', 'lvl.ranks.d': 'Tu commences en Fer. Tous les 10 niveaux, tu passes au rang suivant, jusqu\'à Légende au niveau 100. Chaque rang débloque son cadre.',
'lvl.nextRank': 'Prochain rang : {name} au niveau {l}', 'lvl.maxRank': 'Rang maximum atteint : tu es une légende.', 'lvl.max': 'Niveau maximum atteint. Ton XP continue de compter pour le classement.',
'lvl.up': 'Niveau supérieur !', 'lvl.rankUp': 'Nouveau rang !', 'lvl.unlocked': 'Débloqué', 'lvl.see': 'Voir mes récompenses',
'rw.avatar': 'Avatar', 'rw.frame': 'Cadre', 'rw.theme': 'Thème',
'rw.equipped': 'Équipé ✓', 'rw.locked': 'Se débloque au niveau {n}', 'rw.photo.q': 'Remplacer ta photo de profil par cet avatar ?', 'rw.photo.ok': 'Remplacer',
'rw.hint': 'Monte de niveau pour débloquer de nouveaux styles. Ce que tu équipes sera visible dans le futur classement.',
'badges.hint': 'Chaque badge débloqué rapporte +50 XP.', 'fm.none': 'Aucun',
'pt.themes': 'Thèmes', 'pt.avatars': 'Avatars', 'pt.frames': 'Cadres', 'pt.badges': 'Badges', 's.theme.change': 'Changer',
'pp.r.steps': '+{n} XP par jour où tu atteins ton objectif de pas', 'pp.r.run': '+{n} XP par jour avec une course d\'au moins 1 km',
'quote.t': 'Le mot du jour', 'today.activity': 'Ton activité',
'type.steps': 'Pas quotidiens', 'type.steps.d': 'Un nombre de pas chaque jour, avec le compteur intégré.', 'f.daily': 'Pas par jour', 'f.stepsErr': 'Indique un nombre de pas par jour (au moins 100).',
'st.unit': 'pas', 'st.left': 'encore {n} pas', 'st.done': 'objectif du jour atteint', 'st.live': 'Compter en direct', 'st.set': 'Saisir le total',
'st.set.t': 'Tes pas du jour', 'st.set.d': 'Recopie le total de ton appli Santé (iPhone : Santé › Activité › Pas. Android : Google Fit ou Samsung Health).',
'st.set.ph': 'ex. 8450', 'st.save': 'Enregistrer', 'st.km': '≈ {n} km', 'st.streak': '{n} j d\'objectif tenu', 'st.week': 'Tes 7 derniers jours',
'st.reached': '👟 Objectif de pas atteint !', 'st.best': 'record : {n} pas',
'ped.title': 'Compteur de pas', 'ped.start': 'Démarrer le compteur', 'ped.stop': 'Arrêter', 'ped.session': 'pas pendant cette session', 'ped.today': '{n} / {goal} pas aujourd\'hui',
'ped.hint': 'Le compteur utilise le capteur de mouvement du téléphone. Garde l\'appli ouverte, en main ou en poche : l\'écran reste allumé pendant le comptage.',
'ped.on': 'Compteur en marche : marche normalement.', 'ped.nosensor': 'Aucun capteur de mouvement détecté. Essaie sur ton téléphone.',
'ped.denied': 'Accès aux capteurs refusé. Tu peux l\'autoriser dans les réglages du navigateur.', 'ped.done': '{n} pas comptés',
'run.title': 'Course GPS', 'run.start': 'Lancer une course', 'run.go': 'Démarrer', 'run.pause': 'Pause', 'run.resume': 'Reprendre', 'run.finish': 'Terminer',
'run.none': 'Mesure ta distance, ton temps et ton allure en direct.', 'run.last': 'Dernière course : {km} km, {date}',
'run.time': 'Temps', 'run.pace': 'Allure', 'run.wait': 'Recherche du signal GPS…', 'run.gps': 'GPS précis à {n} m', 'run.weak': 'Signal GPS faible ({n} m) : attends un peu à découvert.',
'run.hint': 'Garde l\'appli ouverte pendant la course : l\'écran reste allumé. Ta position n\'est jamais enregistrée ni envoyée, seule la distance est gardée.',
'run.nogps': 'GPS indisponible sur cet appareil.', 'run.denied': 'Accès à la position refusé. Autorise-le dans les réglages du navigateur pour mesurer ta course.',
'run.reached': '🚩 {title} : objectif atteint !', 'run.done': 'Course terminée', 'run.save': 'Enregistrer', 'run.discard': 'Ne pas enregistrer',
'run.discard.sure': 'Oui, l\'oublier', 'run.link': 'Compter pour mon objectif', 'run.link.d': 'Ta meilleure distance est mise à jour si cette course la bat.',
'run.short': 'Course trop courte pour être enregistrée (moins de 50 m).', 'run.saved': 'Course enregistrée : {km} km',
'b.steps10k': '10 000 pas', 'b.steps10k.d': '10 000 pas en un jour', 'b.run5': 'Coureur', 'b.run5.d': '5 km en une course'
},
en: {
'tab.today': 'Today', 'tab.goals': 'Goals', 'tab.badges': 'Badges', 'tab.settings': 'Settings',
'hello': 'Hey {name}', 'hello.m': 'Morning {name}', 'hello.e': 'Evening {name}', 'day.ring': 'today', 'hello.anon': 'Hey!', 'stat.streak': 'day streak', 'stat.goals': 'goals', 'stat.badges': 'badges',
'today.habits': 'To do today', 'today.quits': 'What you\'re quitting', 'today.targets': 'Your number goals', 'today.rest': 'No habits planned today. Use it to recover.',
'empty.title': 'Your summit starts here', 'empty.text': 'Create your first goal: a personal target, a habit to build or a bad habit to quit.', 'empty.cta': 'Create my first goal',
'type.target': 'Number goal', 'type.target.d': 'Reach a number: 10 km, 70 kg, 12 books…',
'type.habit': 'Habit to build', 'type.habit.d': 'Tick every planned day and keep the streak.',
'type.quit': 'Habit to quit', 'type.quit.d': 'Count the days without giving in.',
'type.tiktok': 'TikTok account', 'type.tiktok.d': 'Track your followers up to your goal.',
'new.title': 'New goal', 'new.pick': 'Pick a template', 'new.custom': 'Custom', 'new.custom.d': 'Write your own goal',
'f.title': 'Your goal', 'f.emoji': 'Icon', 'f.why': 'Why does it matter to you? (optional)', 'f.why.ph': 'E.g. be proud of myself by June',
'f.unit': 'Unit', 'f.start': 'Starting value', 'f.target': 'Target value', 'f.deadline': 'Deadline', 'f.days': 'Planned days',
'f.since': 'Since when?', 'f.handle': 'Your TikTok @', 'f.followers': 'Followers today', 'f.goalFollowers': 'Target followers',
'f.create': 'Create goal', 'f.back': 'Back', 'f.required': 'Give your goal a name.', 'f.numbers': 'Enter different starting and target values.',
'card.left': '{n} {unit} to go', 'card.done': 'Goal reached!', 'card.add': 'Add', 'card.value': 'New value', 'card.streak': '{n}-day streak', 'card.best': 'best: {n} d',
'quit.since': 'without giving in', 'quit.days': '{d} d {h} h', 'quit.relapse': 'I slipped', 'quit.relapse.q': 'Your counter goes back to zero, but your record stays. Every restart counts. Ready to go again?', 'quit.relapse.ok': 'Yes, restart',
'quit.best': 'Record', 'quit.restarts': 'Restarts',
'd.progress': 'Progress', 'd.history': 'History', 'd.deadline': '{n} days left (until {date})', 'd.late': 'Deadline passed ({date})', 'd.pace': 'Ideal pace today: {v} {unit}',
'd.delete': 'Delete this goal', 'd.delete.q': 'Delete “{name}” and all its history? This can\'t be undone.', 'd.delete.ok': 'Delete',
'd.rate': '{p}% of planned days done (last 30 days)', 'd.tapdays': 'Tap a day to tick or untick it.', 'd.open': 'Open @{h} on TikTok', 'd.why': 'Why',
'd.tiktok.note': 'Your TikTok account isn\'t linked automatically yet: log your followers from time to time to see your curve.',
'legend.you': 'you', 'legend.ideal': 'ideal pace',
'cancel': 'Cancel', 'close': 'Close', 'saved': 'Saved', 'checked': 'Nice! Streak: {n} d',
'badge.new': 'Badge unlocked: {name}', 'badges.title': 'Your badges', 'badges.count': '{n} of {t} unlocked', 'badge.on': 'on {date}', 'badge.off': 'locked',
'b.first': 'First step', 'b.first.d': 'Your first action', 'b.goals3': 'Ambitious', 'b.goals3.d': '3 goals created',
'b.streak3': 'Rolling', 'b.streak3.d': '3-day streak', 'b.streak7': 'One week', 'b.streak7.d': '7-day streak', 'b.streak30': 'Machine', 'b.streak30.d': '30-day streak',
'b.clean7': 'Solid', 'b.clean7.d': '7 days clean', 'b.clean30': 'Unstoppable', 'b.clean30.d': '30 days clean',
'b.half': 'Halfway', 'b.half.d': '50% of a goal', 'b.summit': 'Summit', 'b.summit.d': 'A goal reached',
'b.tiktok': 'Online', 'b.tiktok.d': 'TikTok tracking started', 'b.k1': '1K', 'b.k1.d': '1,000 followers',
's.profile': 'Profile', 's.name': 'Your username', 's.lang': 'Language', 's.theme': 'Theme', 's.dark': 'Dark', 's.light': 'Light',
's.data': 'Your data', 's.privacy': 'Everything stays on your phone: nothing is sent online. Back up from time to time.',
's.export': 'Back up (file)', 's.import': 'Restore a backup', 's.reset': 'Erase everything', 's.reset.q': 'Erase all your goals, history and badges? This can\'t be undone.', 's.reset.ok': 'Erase everything',
's.imported': 'Backup restored', 's.badfile': 'This file is not a PeakMind backup.',
's.install': 'Install the app', 's.install.ios': 'iPhone: Share button, then “Add to Home Screen”.', 's.install.android': 'Android: ⋮ menu, then “Install app”.',
's.about': 'About', 's.about.t': 'PeakMind {v}. Set your goal, move forward every day, reach your summit. © 2026 PeakMind, all rights reserved.',
'onb.title': 'Reach your summit', 'onb.text': 'Set goals, build good habits, quit bad ones and watch yourself improve day after day.', 'onb.name': 'What should we call you?', 'onb.start': 'Let\'s go',
'err.storage': 'Can\'t save on this device (private browsing?).',
'wd': ['S', 'M', 'T', 'W', 'T', 'F', 'S'], 'unit.default': 'points',
'w.welcome': 'Welcome to', 'w.alt': 'Altitude', 'w.tagline': 'Set your course. Reach your summit.', 'w.start': 'Get started', 'w.step': 'Step {n} of {t}',
'w.back': 'Back', 'w.next': 'Continue', 'w.skip': 'Skip',
'w.pseudo.t': 'Pick a username', 'w.pseudo.d': 'It\'s the name shown in the app. You can change it later.', 'w.pseudo.ph': 'e.g. alex.fit',
'w.pseudo.hi': 'Hey, {name} 👋', 'w.pseudo.err': '2 to 20 characters: letters, numbers, dot, dash or _ (no spaces).',
'w.avatar.t': 'Choose your avatar', 'w.avatar.d': 'It\'ll be with you all the way to the top.',
'w.goals.t': 'What do you want to improve?', 'w.goals.d': 'Pick everything that speaks to you: we\'ll suggest goals that fit.',
'w.done.t': 'Ready, {name}?', 'w.done.d': 'Your climb starts today. One goal, one step a day, and you\'ll reach your summit.',
'w.done.create': 'Create my first goal', 'w.done.explore': 'Explore the app',
'i.sport': 'Sport & fitness', 'i.study': 'School', 'i.social': 'Social media', 'i.health': 'Health & sleep', 'i.quit': 'Quit a bad habit', 'i.money': 'Money & projects',
'sugg.t': 'Suggested for you', 'sugg.other': 'Another goal', 'sugg.other.d': 'Pick from every type', 's.replay': 'Replay the welcome',
's.sound': 'Sounds', 's.sound.on': 'On', 's.sound.off': 'Off',
'tab.league': 'Ranking', 'lg.live': 'Live', 'lg.world': 'World', 'lg.week': 'Week', 'lg.friends': 'Friends', 'lg.you': 'you',
'lg.soon.t': 'Coming soon', 'lg.soon.d': 'The ranking is coming soon. Your friend code is already ready: keep it to add your friends as soon as it opens.',
'lg.f.world': 'World ranking: every PeakMind user, by XP.', 'lg.f.week': 'Weekly ranking: reset every Monday, everyone gets a chance.',
'lg.f.friends': 'Friends league: add your friends with their code.',
'lg.join.t': 'Join the ranking', 'lg.join.d': 'Compare your XP with other PeakMind users: worldwide, this week and with friends.',
'lg.pub': 'Only your username, icon avatar, frame, rank, level and XP are visible. Never your photo or your goals.',
'lg.minor': 'Under 15? Ask a parent before joining.', 'lg.join.btn': 'Join the ranking',
'lg.joined': 'Welcome to the ranking!', 'lg.left': 'You left the ranking. Your online data is deleted.',
'lg.leave': 'Leave the ranking and delete my data', 'lg.leave.q': 'Your username, XP and friends will be removed from the ranking. Your goals stay on your phone.', 'lg.leave.ok': 'Leave',
'lg.week.reset': 'Resets every Monday', 'lg.loading': 'Loading the ranking…', 'lg.cached': 'last known ranking',
'lg.friends.empty': 'No friends yet. Share your code or enter a friend\'s.',
'lg.code': 'Your friend code', 'lg.copy': 'Copy', 'lg.share': 'Share', 'lg.copied': 'Code copied', 'lg.share.text': 'Add me on PeakMind with my friend code: {code}',
'lg.code.d': 'Give it to your friends: by entering it, they add you to their league (and themselves to yours).',
'lg.code.soon': 'Keep it: you\'ll use it to add friends as soon as the ranking is online.',
'lg.add.t': 'Add a friend', 'lg.add.btn': 'Add', 'lg.added': '{name} is now your friend!',
'lg.report': 'Report this username', 'lg.report.q': 'Report “{name}”? After several reports, this player is hidden from the ranking.', 'lg.report.ok': 'Report', 'lg.reported': 'Thanks, it\'s reported.',
'lg.unfriend': 'Remove friend', 'lg.unfriend.q': 'Remove “{name}” from your friends?',
'lg.err.offline': 'No internet connection.', 'lg.err.pseudo': 'This username isn\'t allowed in the ranking. Change it in Settings.',
'lg.err.xp': 'Your XP couldn\'t be verified.', 'lg.err.code': 'No player with this code.', 'lg.err.own': 'That\'s your own code!',
'lg.err.full': '100 friends maximum.', 'lg.err.anon': 'The ranking isn\'t enabled on the server yet.', 'lg.err.generic': 'The ranking isn\'t responding. Try again later.',
'lg.err.format': 'The code looks like PM-XXXX-XXX.',
'lg.s.title': 'Online ranking', 'lg.s.soon': 'The online ranking isn\'t open yet.', 'lg.s.on': 'You\'re in the ranking.', 'lg.s.off': 'You\'re not in the ranking.', 'w.gate': 'Tap to start', 'w.gate.mute': 'Start without sound',
'w.photo': 'Upload a photo from my gallery', 'w.photo.change': 'Change photo', 'w.or': 'or pick an avatar',
'w.photo.err': 'Can\'t read this image. Try another photo (JPG or PNG).',
's.photo': 'Profile picture', 's.photo.add': 'Upload a photo', 's.photo.change': 'Change photo', 's.photo.remove': 'Remove photo',
'av.initials': 'Initials', 'av.peak': 'Summit', 'av.target': 'Target', 'av.bolt': 'Bolt', 'av.flame': 'Flame', 'av.shield': 'Shield',
'av.crown': 'Crown', 'av.compass': 'Compass', 'av.dumbbell': 'Dumbbell', 'av.diamond': 'Diamond', 'av.trend': 'Growth', 'av.book': 'Book', 'av.summit': 'Sunlit summit', 'av.star': 'Star',
'av.rocket': 'Rocket', 'av.heart': 'Heart', 'av.moon': 'Moon', 'av.kettlebell': 'Kettlebell', 'av.sword': 'Sword', 'av.wave': 'Wave', 'av.leaf': 'Leaf',
'av.controller': 'Controller', 'av.headphones': 'Headphones', 'av.planet': 'Planet', 'av.atom': 'Atom', 'av.infinity': 'Infinity',
'pp.week': '+{n} XP this week', 'pp.last7': 'XP over the last 7 days',
'pp.how': 'How to earn XP', 'pp.r.habit': '+{n} XP per habit ticked', 'pp.r.entry': '+{n} XP per value logged',
'pp.r.clean': '+{n} XP per full day without giving in', 'pp.r.badge': '+{n} XP per badge unlocked',
'pp.r.cap': 'Up to {n} XP per day, quests included (badges and weekly challenge excluded): consistency beats quantity.', 'pp.continue': 'Continue',
'tab.profile': 'Profile', 'stat.level': 'level',
'lvl.title': 'Rank & level', 'lvl.n': 'Level {n}', 'lvl.short': 'Lv. {n}', 'lvl.next': '{n} XP to level {l}',
'lvl.nextReward': 'lv. {l}: {name}', 'lvl.sheet': 'Your progress', 'lvl.total': '{n} XP in total',
'lvl.ranks': 'Ranks', 'lvl.ranks.d': 'You start in Iron. Every 10 levels you move up a rank, all the way to Legend at level 100. Each rank unlocks its frame.',
'lvl.nextRank': 'Next rank: {name} at level {l}', 'lvl.maxRank': 'Top rank reached: you\'re a legend.', 'lvl.max': 'Max level reached. Your XP still counts for the leaderboard.',
'lvl.up': 'Level up!', 'lvl.rankUp': 'New rank!', 'lvl.unlocked': 'Unlocked', 'lvl.see': 'See my rewards',
'rw.avatar': 'Avatar', 'rw.frame': 'Frame', 'rw.theme': 'Theme',
'rw.equipped': 'Equipped ✓', 'rw.locked': 'Unlocks at level {n}', 'rw.photo.q': 'Replace your profile picture with this avatar?', 'rw.photo.ok': 'Replace',
'rw.hint': 'Level up to unlock new styles. What you equip will show in the upcoming leaderboard.',
'badges.hint': 'Each badge you unlock is worth +50 XP.', 'fm.none': 'None',
'pt.themes': 'Themes', 'pt.avatars': 'Avatars', 'pt.frames': 'Frames', 'pt.badges': 'Badges', 's.theme.change': 'Change',
'pp.r.steps': '+{n} XP per day you hit your step goal', 'pp.r.run': '+{n} XP per day with a run of at least 1 km',
'quote.t': 'Today\'s words', 'today.activity': 'Your activity',
'type.steps': 'Daily steps', 'type.steps.d': 'A step count every day, with the built-in counter.', 'f.daily': 'Steps per day', 'f.stepsErr': 'Enter a daily step count (at least 100).',
'st.unit': 'steps', 'st.left': '{n} steps to go', 'st.done': 'today\'s goal reached', 'st.live': 'Count live', 'st.set': 'Enter total',
'st.set.t': 'Today\'s steps', 'st.set.d': 'Copy the total from your phone\'s health app (iPhone: Health › Activity › Steps. Android: Google Fit or Samsung Health).',
'st.set.ph': 'e.g. 8450', 'st.save': 'Save', 'st.km': '≈ {n} km', 'st.streak': '{n}-day goal streak', 'st.week': 'Your last 7 days',
'st.reached': '👟 Step goal reached!', 'st.best': 'best: {n} steps',
'ped.title': 'Step counter', 'ped.start': 'Start counting', 'ped.stop': 'Stop', 'ped.session': 'steps this session', 'ped.today': '{n} / {goal} steps today',
'ped.hint': 'The counter uses your phone\'s motion sensor. Keep the app open, in your hand or pocket: the screen stays on while counting.',
'ped.on': 'Counter running: just walk normally.', 'ped.nosensor': 'No motion sensor found. Try on your phone.',
'ped.denied': 'Sensor access denied. You can allow it in your browser settings.', 'ped.done': '{n} steps counted',
'run.title': 'GPS run', 'run.start': 'Start a run', 'run.go': 'Start', 'run.pause': 'Pause', 'run.resume': 'Resume', 'run.finish': 'Finish',
'run.none': 'Track your distance, time and pace live.', 'run.last': 'Last run: {km} km, {date}',
'run.time': 'Time', 'run.pace': 'Pace', 'run.wait': 'Looking for GPS signal…', 'run.gps': 'GPS accurate to {n} m', 'run.weak': 'Weak GPS signal ({n} m): wait a moment in the open.',
'run.hint': 'Keep the app open during your run: the screen stays on. Your location is never stored or sent, only the distance is kept.',
'run.nogps': 'GPS isn\'t available on this device.', 'run.denied': 'Location access denied. Allow it in your browser settings to track your run.',
'run.reached': '🚩 {title}: goal reached!', 'run.done': 'Run complete', 'run.save': 'Save', 'run.discard': 'Don\'t save',
'run.discard.sure': 'Yes, forget it', 'run.link': 'Count toward my goal', 'run.link.d': 'Your best distance is updated if this run beats it.',
'run.short': 'Run too short to save (under 50 m).', 'run.saved': 'Run saved: {km} km',
'b.steps10k': '10K steps', 'b.steps10k.d': '10,000 steps in a day', 'b.run5': 'Runner', 'b.run5.d': '5 km in one run'
}
};
const TEMPLATES = {
target: [
{ e: '🏃', fr: 'Courir 10 km', en: 'Run 10 km', ufr: 'km', uen: 'km', start: 3, target: 10, weeks: 12 },
{ e: '💪', fr: 'Faire 50 pompes d\'affilée', en: 'Do 50 push-ups in a row', ufr: 'pompes', uen: 'push-ups', start: 15, target: 50, weeks: 10 },
{ e: '🏋️', fr: 'Prendre de la masse', en: 'Build muscle', ufr: 'kg', uen: 'kg', start: 60, target: 65, weeks: 16 },
{ e: '📚', fr: 'Lire 12 livres', en: 'Read 12 books', ufr: 'livres', uen: 'books', start: 0, target: 12, weeks: 52 },
{ e: '🎓', fr: 'Avoir 15 de moyenne', en: 'Raise my grade average', ufr: '/20', uen: 'pts', start: 11, target: 15, weeks: 14 },
{ e: '💶', fr: 'Gagner 50 € ce mois-ci', en: 'Earn $50 this month', ufr: '€', uen: '$', start: 0, target: 50, weeks: 4 }
],
save: [
{ e: '💻', fr: 'Un nouveau PC', en: 'A new PC', target: 800, plan: 15 },
{ e: '👟', fr: 'Des nouvelles baskets', en: 'New sneakers', target: 120, plan: 10 },
{ e: '🎮', fr: 'Une console', en: 'A console', target: 400, plan: 10 },
{ e: '📱', fr: 'Un nouveau téléphone', en: 'A new phone', target: 300, plan: 10 },
{ e: '✈️', fr: 'Un voyage', en: 'A trip', target: 500, plan: 15 },
{ e: '🛟', fr: 'Mon fonds de secours', en: 'My safety fund', target: 100, plan: 5 }
],
habit: [
{ e: '🏋️', fr: 'M\'entraîner 4 fois par semaine', en: 'Work out 4 times a week', days: [1, 2, 4, 6] },
{ e: '😴', fr: 'Dormir 8 h', en: 'Sleep 8 hours', days: [0, 1, 2, 3, 4, 5, 6] },
{ e: '💧', fr: 'Boire 2 L d\'eau', en: 'Drink 2 L of water', days: [0, 1, 2, 3, 4, 5, 6] },
{ e: '📖', fr: 'Réviser 30 min', en: 'Study 30 minutes', days: [1, 2, 3, 4, 5] },
{ e: '🎬', fr: 'Publier un post', en: 'Post content', days: [1, 2, 3, 5, 0] },
{ e: '🧘', fr: '10 min sans écran le matin', en: '10 screen-free minutes each morning', days: [0, 1, 2, 3, 4, 5, 6] },
{ e: '🚫', fr: 'Jour sans dépense', en: 'No-spend day', days: [1, 2, 3, 4] }
],
quit: [
{ e: '🥤', fr: 'Arrêter les sodas', en: 'Quit soda' },
{ e: '🍔', fr: 'Arrêter la malbouffe', en: 'Quit junk food' },
{ e: '📱', fr: 'Plus de téléphone au lit', en: 'No phone in bed' },
{ e: '⏳', fr: 'Arrêter de procrastiner', en: 'Stop procrastinating' },
{ e: '🍬', fr: 'Arrêter le grignotage', en: 'Stop snacking' },
{ e: '🎮', fr: 'Arrêter les achats dans les jeux', en: 'Stop in-game purchases' }
],
steps: [
{ e: '👟', fr: '8 000 pas par jour', en: '8,000 steps a day', daily: 8000 },
{ e: '🚶', fr: '10 000 pas par jour', en: '10,000 steps a day', daily: 10000 },
{ e: '⛰️', fr: '12 000 pas par jour', en: '12,000 steps a day', daily: 12000 }
],
tiktok: [{ e: '🎵', fr: 'Abonnés TikTok', en: 'TikTok followers', start: 100, target: 1000, weeks: 13 }]
};
const MO = window.PM_MONEY || { CATS: [], LESSONS: [], CURS: ['€'] };
const EMOJIS = ['🎯', '🏃', '👟', '🚶', '💪', '🏋️', '📚', '🎓', '💧', '😴', '🧘', '🎵', '💰', '🥤', '📱', '🔥', '⛰️', '⭐', '💻', '🎮', '✈️', '🛟', '🐷', '🚫'];
const BADGES = [
{ id: 'first', i: '👣' }, { id: 'goals3', i: '🎯' }, { id: 'streak3', i: '🔥' }, { id: 'streak7', i: '⚡' }, { id: 'streak30', i: '🏆' },
{ id: 'clean7', i: '🛡️' }, { id: 'clean30', i: '💎' }, { id: 'half', i: '⛰️' }, { id: 'summit', i: '🚩' }, { id: 'tiktok', i: '🎵' }, { id: 'k1', i: '📈' },
{ id: 'steps10k', i: '👟' }, { id: 'run5', i: '🏃' },
{ id: 'q1', i: '📜' }, { id: 'q50', i: '🗡️' }, { id: 'qperfect7', i: '👑' },
{ id: 'dungeon', i: '⚔️' }, { id: 'dungeon5', i: '🐉' }, { id: 'q200', i: '🏅' }, { id: 'streak100', i: '💯' }, { id: 'run42', i: '🏁' },
{ id: 'steps1m', i: '🌍' }, { id: 'redeem', i: '🕊️' }, { id: 'raise', i: '🚀' }, { id: 'exam1', i: '📝' }, { id: 'piggy', i: '🐷' }, { id: 'funded', i: '🎁' }, { id: 'resist', i: '🧊' }, { id: 'budgetok', i: '📊' }, { id: 'graduate', i: '🎓' }
];
const QUOTES = {
fr: ['Le sommet ne se gagne pas en un jour : il se gagne chaque jour.', 'Chaque case cochée est une marche de plus vers le haut.', 'Personne ne voit l\'entraînement. Tout le monde voit le résultat.',
'Tu n\'as pas besoin d\'être prêt. Tu as besoin de commencer.', 'Un mauvais jour n\'efface pas dix bons jours. Repars.', 'Compare-toi à celui que tu étais hier, pas aux autres.',
'Lent, c\'est toujours plus rapide qu\'arrêté.', 'Les excuses ne font pas monter de niveau.', 'Le premier pas est le plus dur. Le deuxième est déjà plus facile.',
'Garde ta série en vie. Même petite, elle compte.', 'Chaque sommet a été atteint par quelqu\'un qui a refusé de faire demi-tour.', 'Fatigué, c\'est normal. Abandonner, c\'est un choix.',
'Ton futur toi te regarde. Donne-lui une raison d\'être fier.', 'Aujourd\'hui compte. Pas demain, pas lundi : aujourd\'hui.', 'Le niveau 100 se construit un niveau à la fois.',
'Moins d\'écran, plus d\'élan.', 'Si c\'était facile, tout le monde serait au sommet.', 'Les petits progrès restent des progrès.',
'Bouge, même un peu. Le corps suit, la tête aussi.', 'Vise le sommet, savoure chaque marche.'],
en: ['The summit isn\'t won in a day. It\'s won every day.', 'Every box you tick is one more step up.', 'No one sees the training. Everyone sees the result.',
'You don\'t need to be ready. You need to start.', 'One bad day doesn\'t erase ten good ones. Go again.', 'Compare yourself to who you were yesterday, not to others.',
'Slow is still faster than stopped.', 'Excuses don\'t level you up.', 'The first step is the hardest. The second is already easier.',
'Keep your streak alive. Even a small one counts.', 'Every summit was reached by someone who refused to turn back.', 'Tired is normal. Quitting is a choice.',
'Your future self is watching. Give them a reason to be proud.', 'Today counts. Not tomorrow, not Monday: today.', 'Level 100 is built one level at a time.',
'Less screen, more drive.', 'If it were easy, everyone would be at the top.', 'Small progress is still progress.',
'Move, even a little. Your body follows, and so does your mind.', 'Aim for the summit, enjoy every step.']
};
const fresh = () => ({ v: 1, lang: (navigator.language || 'fr').toLowerCase().startsWith('fr') ? 'fr' : 'en', name: '', avatar: 'initials', photo: '', frame: 'none', skin: 'glacier', interests: [], goals: [], runs: [], badges: {}, activity: {}, onboarded: false, tab: 'today', profTab: 'themes' });
function migrate(s) {
if (!s.skin) s.skin = { emerald: 'emerald', violet: 'amethyst', gold: 'gold', ember: 'ember' }[s.accent] || (s.theme === 'light' ? 'snow' : 'glacier');
delete s.accent; delete s.theme;
if (!Array.isArray(s.runs)) s.runs = [];
return s;
}
const FREE_TEXT = new Set(['title', 'emoji', 'why', 'unit', 'handle', 'name', 'grade', 'note', 'n', 'gt']);
const PHOTO_RE = /^data:image\/(png|jpe?g|webp|gif);base64,[A-Za-z0-9+/=]+$/;
const BAD_CH = /[<>"`\\]/g;
function cleanData(v, key = '', depth = 0) {
if (depth > 12) return undefined;
if (typeof v === 'string') {
if (key === 'photo') return v.length < 3e6 && PHOTO_RE.test(v) ? v : '';
return FREE_TEXT.has(key) ? v.slice(0, 1000) : v.replace(BAD_CH, '').slice(0, 200);
}
if (typeof v === 'number') return Number.isFinite(v) ? v : 0;
if (typeof v === 'boolean' || v === null) return v;
if (Array.isArray(v)) return v.slice(0, 50000).map(x => cleanData(x, key, depth + 1)).filter(x => x !== undefined);
if (typeof v === 'object') {
const o = {};
for (const k of Object.keys(v)) {
if (k === '__proto__' || k === 'constructor' || k === 'prototype' || k.length > 80 || /[<>"`\\]/.test(k)) continue;
const c = cleanData(v[k], k, depth + 1); if (c !== undefined) o[k] = c;
}
return o;
}
return undefined;
}
function load() {
try { const s = cleanData(JSON.parse(localStorage.getItem(KEY) ?? localStorage.getItem(OLD_KEY))); if (s && Array.isArray(s.goals)) return migrate(Object.assign(fresh(), s)); } catch (e) {  }
return fresh();
}
let S = load();
function save() { dirty(); try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { toast(t('err.storage')); } }
let memo = {}, memoKey = '';
function memoGet(name, fn) { const key = today() + '|' + S.lang; if (memoKey !== key) { memo = {}; memoKey = key; } return name in memo ? memo[name] : (memo[name] = fn()); }
function dirty() { memo = {}; }
function saveUI() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {  } }
const t = (k, vars) => {
let s = (T[S.lang] && T[S.lang][k]) ?? T.fr[k] ?? k;
if (vars && typeof s === 'string') for (const v in vars) s = s.split('{' + v + '}').join(vars[v]);
return s;
};
const L = (obj, base) => obj[S.lang === 'en' ? base + 'en' : base + 'fr'] ?? obj[S.lang] ?? obj.fr;
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const nf = (n, d = 0) => Number(n).toLocaleString(S.lang === 'fr' ? 'fr-FR' : 'en-US', { maximumFractionDigits: d });
const uid = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);
const dkey = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const today = () => dkey(new Date());
const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };
const parseKey = k => { const [y, m, d] = k.split('-').map(Number); return new Date(y, m - 1, d); };
const daysBetween = (a, b) => Math.round((parseKey(b) - parseKey(a)) / 86400000);
const fmtDate = (k, long) => parseKey(k).toLocaleDateString(S.lang === 'fr' ? 'fr-FR' : 'en-US', long ? { weekday: 'long', day: 'numeric', month: 'long' } : { day: 'numeric', month: 'short' });
function current(g) { return g.type === 'save' ? saveTotal(g) : g.entries && g.entries.length ? g.entries[g.entries.length - 1].v : g.start; }
const saveTotal = g => Math.max(0, Math.round((g.dep || []).reduce((s, e) => s + e.a, 0) * 100) / 100);
function pct(g) { const span = g.target - g.start; if (!span) return 1; return Math.max(0, Math.min(1, (current(g) - g.start) / span)); }
function idealAt(g, k) {
const total = Math.max(1, daysBetween(g.created, g.deadline));
const f = Math.max(0, Math.min(1, daysBetween(g.created, k) / total));
return g.start + (g.target - g.start) * f;
}
function habitStreak(g) {
let n = 0, d = new Date();
if (!g.checks[today()]) d = addDays(d, -1);
for (let i = 0; i < 1000; i++) {
const k = dkey(d);
if (k < g.created) break;
if (g.days.includes(d.getDay())) { if (g.checks[k]) n++; else break; }
d = addDays(d, -1);
}
return n;
}
function habitBest(g) {
let best = 0, run = 0;
for (let d = parseKey(g.created); dkey(d) <= today(); d = addDays(d, 1)) {
if (!g.days.includes(d.getDay())) continue;
if (g.checks[dkey(d)]) { run++; best = Math.max(best, run); } else if (dkey(d) !== today()) run = 0;
}
return best;
}
function habitRate(g) {
let due = 0, done = 0;
for (let i = 0; i < 30; i++) {
const d = addDays(new Date(), -i), k = dkey(d);
if (k < g.created) break;
if (!g.days.includes(d.getDay())) continue;
if (k === today() && !g.checks[k]) continue;
due++; if (g.checks[k]) done++;
}
return due ? Math.round(done / due * 100) : 0;
}
const quitMs = g => Math.max(0, Date.now() - new Date(g.since).getTime());
const quitBest = g => Math.max(g.best || 0, quitMs(g));
function globalStreak() {
let n = 0, d = new Date();
if (!S.activity[today()]) d = addDays(d, -1);
while (S.activity[dkey(d)]) { n++; d = addDays(d, -1); }
return n;
}
const markActivity = () => { S.activity[today()] = true; };
const questsDone = () => Object.values((S.quests && S.quests.log) || {}).reduce((s, e) => s + (e.d || []).length, 0);
function checkBadges() {
const earned = [];
const maxStreak = Math.max(0, ...S.goals.filter(g => g.type === 'habit').map(habitStreak));
const maxClean = Math.max(0, ...S.goals.filter(g => g.type === 'quit').map(g => quitMs(g) / 86400000));
const nums = S.goals.filter(g => g.type === 'target' || g.type === 'tiktok' || (g.type === 'save' && (g.dep || []).length)), saves = S.goals.filter(g => g.type === 'save');
const m = mon();
const tests = {
piggy: saves.some(g => (g.dep || []).some(e => e.a > 0)), funded: saves.some(g => pct(g) >= 1),
resist: m.wish.filter(w => w.st === 'skip' && w.ripe).length >= 3, budgetok: budgetWeeksOk() >= 1,
dungeon: (S.dg || []).some(d => d.cleared), dungeon5: (S.dg || []).filter(d => d.cleared).length >= 5,
q200: questsDone() >= 200, streak100: maxStreak >= 100, run42: (S.runs || []).reduce((a, r) => a + r.km, 0) >= 42,
steps1m: S.goals.filter(g => g.type === 'steps').reduce((a, g) => a + Object.values(g.steps || {}).reduce((b, v) => b + v, 0), 0) >= 1e6,
redeem: ((S.redeem || {}).n || 0) >= 1, raise: S.goals.some(g => g.arch || (g.dlog || []).length), exam1: (S.exams || []).some(e => (e.rev || 0) >= 5),
graduate: MO.LESSONS.length > 0 && MO.LESSONS.every(l => m.lessons[l.id]),
first: Object.keys(S.activity).length > 0,
goals3: S.goals.length >= 3,
streak3: maxStreak >= 3, streak7: maxStreak >= 7, streak30: maxStreak >= 30,
clean7: maxClean >= 7, clean30: maxClean >= 30,
half: nums.some(g => (g.entries || g.dep || []).length && pct(g) >= 0.5),
summit: nums.some(g => (g.entries || g.dep || []).length && pct(g) >= 1),
tiktok: S.goals.some(g => g.type === 'tiktok'),
k1: S.goals.some(g => g.type === 'tiktok' && current(g) >= 1000),
steps10k: S.goals.some(g => g.type === 'steps' && Object.values(g.steps || {}).some(v => v >= 10000)),
run5: (S.runs || []).some(r => r.km >= 5),
q1: questsDone() >= 1, q50: questsDone() >= 50,
qperfect7: Object.values((S.quests && S.quests.log) || {}).filter(e => e.b).length >= 7
};
for (const b of BADGES) if (tests[b.id] && !S.badges[b.id]) { S.badges[b.id] = today(); earned.push(b); }
if (earned.length) { save(); setTimeout(() => { toast(t('badge.new', { name: earned.map(b => b.i + ' ' + t('b.' + b.id)).join(', ') })); SFX.play('badge'); }, 350); }
checkTitles();
}
const $ = s => document.querySelector(s);
const view = $('#view'), sheet = $('#sheet'), welcomeEl = $('#welcome');
const toastQueue = []; let toastBusy = false;
function toast(msg) { toastQueue.push(msg); if (!toastBusy) nextToast(); }
function nextToast() {
const el = $('#toast'), msg = toastQueue.shift();
if (msg == null) { toastBusy = false; el.hidden = true; return; }
toastBusy = true; el.textContent = msg; el.hidden = false;
setTimeout(nextToast, 2200);
}
const SFX = (() => {
let ctx = null, master = null, echo = null, introBus = null, noiseBuf = null, verb = null;
const on = () => S.sound !== false;
function init() {
if (ctx) return ctx;
const AC = window.AudioContext || window.webkitAudioContext;
if (!AC) return null;
ctx = new AC();
const comp = ctx.createDynamicsCompressor(); comp.threshold.value = -20; comp.knee.value = 12; comp.ratio.value = 3.5; comp.attack.value = .004; comp.release.value = .18;
const tame = ctx.createBiquadFilter(); tame.type = 'highshelf'; tame.frequency.value = 7500; tame.gain.value = -5;
master = ctx.createGain(); master.gain.value = .55; master.connect(tame); tame.connect(comp); comp.connect(ctx.destination);
try {
const len = Math.floor(ctx.sampleRate * 1.8), ir = ctx.createBuffer(2, len, ctx.sampleRate);
for (let c = 0; c < 2; c++) { const d = ir.getChannelData(c); for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.6); }
verb = ctx.createConvolver(); verb.buffer = ir;
const vg = ctx.createGain(); vg.gain.value = .55; const vlp = ctx.createBiquadFilter(); vlp.type = 'lowpass'; vlp.frequency.value = 5200;
verb.connect(vlp); vlp.connect(vg); vg.connect(master);
} catch (e) { verb = null; }
echo = ctx.createDelay(1); echo.delayTime.value = .19;
const fb = ctx.createGain(), damp = ctx.createBiquadFilter(), wet = ctx.createGain();
fb.gain.value = .32; damp.type = 'lowpass'; damp.frequency.value = 2600; wet.gain.value = .5;
echo.connect(damp); damp.connect(fb); fb.connect(echo); damp.connect(wet); wet.connect(master);
return ctx;
}
const locked = () => !ctx || ctx.state !== 'running';
function unlock() {
if (!on() || !init()) return Promise.resolve();
return ctx.state === 'running' ? Promise.resolve() : ctx.resume().catch(() => {});
}
function tone({ f = 440, f2, type = 'sine', at = 0, dur = .15, vol = .1, attack = .005, lp, wet = 0, out, rich = false, pan = 0, room = .1 } = {}) {
const t = ctx.currentTime + at, g = ctx.createGain(), oscs = [ctx.createOscillator()];
if (rich) oscs.push(ctx.createOscillator());
g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(vol / (rich ? 1.5 : 1), t + attack); g.gain.exponentialRampToValueAtTime(.0001, t + dur);
let sink = g;
if (lp) { const fl = ctx.createBiquadFilter(); fl.type = 'lowpass'; fl.frequency.value = lp; fl.connect(g); sink = fl; }
oscs.forEach((o, i) => {
o.type = type; o.detune.value = i ? 7 : 0; o.frequency.setValueAtTime(f, t); if (f2) o.frequency.exponentialRampToValueAtTime(f2, t + dur);
o.connect(sink); o.start(t); o.stop(t + dur + .05);
});
let outNode = g;
if (pan && ctx.createStereoPanner) { const p = ctx.createStereoPanner(); p.pan.value = pan; g.connect(p); outNode = p; }
outNode.connect(out || master);
if (wet) { const w = ctx.createGain(); w.gain.value = wet * .6; outNode.connect(w); w.connect(echo); }
if (verb && !out && (wet || room)) { const r = ctx.createGain(); r.gain.value = wet + room; outNode.connect(r); r.connect(verb); }
}
function bell({ f = 1320, at = 0, dur = .9, vol = .06, pan = 0, wet = .35 } = {}) {
tone({ f, at, dur, vol, pan, wet, attack: .003 });
tone({ f: f * 2.756, at, dur: dur * .45, vol: vol * .35, pan, wet, attack: .002 });
tone({ f: f * 5.404, at, dur: dur * .18, vol: vol * .14, pan, attack: .001, room: .05 });
}
function noise({ at = 0, dur = .3, vol = .05, f = 800, f2, q = 1, type = 'bandpass', attack, out } = {}) {
if (!noiseBuf) { noiseBuf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate); const d = noiseBuf.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; }
const t = ctx.currentTime + at, s = ctx.createBufferSource(), fl = ctx.createBiquadFilter(), g = ctx.createGain();
s.buffer = noiseBuf; s.loop = true; fl.type = type; fl.Q.value = q;
fl.frequency.setValueAtTime(f, t); if (f2) fl.frequency.exponentialRampToValueAtTime(f2, t + dur);
g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + (attack ?? dur * .4)); g.gain.exponentialRampToValueAtTime(.0001, t + dur);
s.connect(fl); fl.connect(g); g.connect(out || master); s.start(t); s.stop(t + dur + .05);
}
const BLIPS = [784, 880, 1047, 1175, 1319, 1568, 1760, 2093];
const SOUNDS = {
tick: () => tone({ f: 2900, f2: 2200, dur: .025, vol: .022, room: .04 }),
key: () => tone({ f: 2600 + Math.random() * 900, type: 'square', dur: .012, vol: .012, lp: 5000, room: 0 }),
nav: () => { tone({ f: 988, dur: .07, vol: .045, rich: true, pan: -.15 }); tone({ f: 1480, at: .05, dur: .09, vol: .038, rich: true, pan: .15 }); },
select: () => { tone({ f: 1175, f2: 1760, dur: .09, vol: .05, rich: true }); bell({ f: 2349, at: .05, dur: .3, vol: .015 }); },
deselect: () => tone({ f: 1047, f2: 698, dur: .1, vol: .04, rich: true }),
open: () => { noise({ dur: .26, vol: .03, f: 600, f2: 3600, q: .7 }); tone({ f: 392, f2: 784, dur: .2, vol: .022, rich: true }); },
close: () => noise({ dur: .2, vol: .022, f: 3000, f2: 600, q: .7 }),
next: () => { noise({ dur: .22, vol: .026, f: 900, f2: 4200 }); bell({ f: 1568, at: .08, dur: .35, vol: .035 }); },
check: () => { tone({ f: 523, f2: 494, type: 'triangle', dur: .09, vol: .07, lp: 2200, room: .05 }); bell({ f: 1319, at: .045, dur: .7, vol: .055, pan: .1 }); tone({ f: 1976, at: .09, dur: .35, vol: .016, wet: .3, pan: .25 }); },
uncheck: () => tone({ f: 659, f2: 392, type: 'triangle', dur: .16, vol: .045, lp: 2200, rich: true }),
xp: () => [1568, 1976, 2349, 3136].forEach((f, i) => bell({ f, at: .1 + i * .05, dur: .32, vol: .02, pan: -.4 + i * .27, wet: .3 })),
error: () => { tone({ f: 165, f2: 130, type: 'square', dur: .09, vol: .035, lp: 650, room: .02 }); tone({ f: 155, f2: 115, type: 'square', at: .11, dur: .11, vol: .032, lp: 650, room: .02 }); },
equip: () => { noise({ dur: .25, vol: .025, f: 1200, f2: 5000, q: .8 }); tone({ f: 523, f2: 1047, type: 'sawtooth', dur: .14, vol: .028, lp: 1800 }); bell({ f: 1568, at: .12, dur: .6, vol: .05, wet: .4 }); },
down: () => { tone({ f: 392, f2: 196, dur: .4, vol: .06, rich: true }); tone({ f: 98, f2: 70, dur: .45, vol: .08, room: .02 }); },
badge: () => { [1319, 1568, 1976, 2637].forEach((f, i) => bell({ f, at: i * .07, dur: .45, vol: .032, pan: -.3 + i * .2 })); bell({ f: 1760, at: .3, dur: 1.6, vol: .05, wet: .55 }); tone({ f: 440, at: .3, dur: 1.2, vol: .03, attack: .1, rich: true }); },
levelUp: () => {
noise({ dur: .55, vol: .035, f: 500, f2: 7000, q: .6 });
[523, 659, 784, 1047].forEach((f, i) => tone({ f, type: 'sawtooth', at: .22 + i * .085, dur: .3, vol: .035, lp: 2200, wet: .25, pan: -.3 + i * .2 }));
[262, 523, 659, 784].forEach(f => tone({ f, type: 'triangle', at: .58, dur: 1.6, vol: .04, attack: .06, rich: true, room: .25 }));
bell({ f: 2093, at: .6, dur: 1.4, vol: .045, wet: .5 });
},
rankUp: () => {
tone({ f: 90, f2: 40, dur: 1, vol: .28, attack: .01, room: .2 });
noise({ dur: .8, vol: .045, f: 300, f2: 7000, q: .6 });
[392, 523, 659, 784, 1047, 1319].forEach((f, i) => tone({ f, type: 'sawtooth', at: .3 + i * .07, dur: .34, vol: .034, lp: 2400, wet: .3, pan: -.4 + i * .16 }));
[196, 523, 659, 784, 988].forEach(f => tone({ f, type: 'triangle', at: .75, dur: 2.2, vol: .036, attack: .1, rich: true, room: .3 }));
bell({ f: 1319, at: .8, dur: 1.8, vol: .06, wet: .6 }); bell({ f: 2637, at: 1, dur: 1.2, vol: .025, wet: .5 });
},
start: () => [660, 660, 990].forEach((f, i) => tone({ f, type: 'square', at: i * .16, dur: i === 2 ? .3 : .09, vol: .035, lp: 2000, room: .05 })),
pause: () => tone({ f: 880, f2: 523, type: 'triangle', dur: .2, vol: .05, rich: true }),
finish: () => { [784, 988, 1175, 1568].forEach((f, i) => bell({ f, at: i * .1, dur: .5, vol: .04, pan: -.3 + i * .2 })); tone({ f: 392, at: .3, dur: 1.2, vol: .03, attack: .08, rich: true }); },
charge: () => { noise({ dur: 1.05, vol: .03, f: 300, f2: 5000, q: 1.4, attack: .95 }); tone({ f: 110, f2: 440, type: 'sawtooth', dur: 1.05, vol: .022, lp: 1500, attack: .9, room: .15 }); tone({ f: 220, f2: 880, type: 'triangle', dur: 1.05, vol: .018, attack: .9, wet: .3 }); },
warp: () => { noise({ dur: .6, vol: .045, f: 3000, f2: 200, q: .8 }); tone({ f: 220, f2: 55, dur: .6, vol: .1, room: .2 }); bell({ f: 1568, at: .35, dur: .8, vol: .035, wet: .5 }); },
quest: () => { noise({ dur: .4, vol: .022, f: 1500, f2: 7000, q: .7 }); bell({ f: 1318.5, dur: 1, vol: .055, wet: .5, pan: -.2 }); bell({ f: 1975.5, at: .15, dur: 1.2, vol: .045, wet: .5, pan: .2 }); tone({ f: 220, at: .05, dur: 1.2, vol: .03, attack: .15, rich: true, room: .3 }); },
questDone: () => { [988, 1319, 1760].forEach((f, i) => bell({ f, at: i * .07, dur: .45, vol: .045, pan: -.25 + i * .25 })); bell({ f: 2637, at: .22, dur: .9, vol: .03, wet: .5 }); tone({ f: 330, at: .2, dur: .7, vol: .025, attack: .05, rich: true }); },
coin: () => { tone({ f: 988, type: 'square', dur: .07, vol: .022, lp: 3200, room: .05 }); tone({ f: 1319, type: 'square', at: .07, dur: .3, vol: .024, lp: 3200, wet: .2 }); bell({ f: 2637, at: .08, dur: .5, vol: .022, pan: .2 }); },
lock: () => { tone({ f: 180, f2: 120, type: 'triangle', dur: .08, vol: .08, lp: 1200, room: .02 }); noise({ at: .06, dur: .08, vol: .03, f: 2500, q: 1.2 }); tone({ f: 740, at: .1, dur: .18, vol: .03, rich: true }); },
saved: () => { [1319, 1568, 1976].forEach((f, i) => tone({ f, type: 'square', at: i * .06, dur: .1, vol: .018, lp: 3500, pan: -.2 + i * .2 })); bell({ f: 2637, at: .2, dur: .9, vol: .04, wet: .5 }); },
boot: () => { tone({ f: 55, f2: 110, dur: 1.4, vol: .2, attack: .3 }); noise({ dur: 1, vol: .028, f: 200, f2: 1600, q: .8 }); tone({ f: 3200, type: 'square', at: .02, dur: .012, vol: .03 }); },
intro: () => {
introBus = ctx.createGain(); introBus.connect(master); const out = introBus;
[.45, .5, .55, .6].forEach(at => tone({ f: 3200, type: 'square', at, dur: .012, vol: .03, out }));
tone({ f: 1760, at: .62, dur: .1, vol: .03, out });
noise({ at: .3, dur: 1.4, vol: .03, f: 300, f2: 2800, attack: .5, out });
tone({ f: 220, f2: 440, at: .3, dur: 1.4, vol: .018, attack: .4, out });
noise({ at: 1.75, dur: .35, vol: .022, f: 5000, type: 'highpass', out }); tone({ f: 2637, at: 1.78, dur: .4, vol: .02, wet: .4, out });
tone({ f: 180, f2: 700, type: 'triangle', at: 1.4, dur: 1.5, vol: .025, lp: 1500, attack: .3, out });
tone({ f: 140, f2: 55, at: 2.85, dur: .25, vol: .2, out }); noise({ at: 2.85, dur: .12, vol: .05, f: 400, type: 'lowpass', attack: .005, out });
tone({ f: 1047, at: 2.9, dur: .6, vol: .045, wet: .4, out }); tone({ f: 1568, at: 2.9, dur: .6, vol: .035, wet: .4, out });
tone({ f: 1320, at: 2.95, dur: 1.1, vol: .075, attack: .003, wet: .55, out }); tone({ f: 1175, at: 3.35, dur: 1.1, vol: .06, attack: .003, wet: .55, out });
},
blip: i => tone({ f: BLIPS[i % BLIPS.length], type: 'triangle', dur: .07, vol: .03 }),
alt: k => tone({ f: 500 + k * 90, dur: .035, vol: .022 })
};
function play(name, arg) {
if (!on() || !init() || !SOUNDS[name]) return;
if (ctx.state !== 'running') {
if (!(navigator.userActivation && navigator.userActivation.isActive)) return;
ctx.resume().catch(() => {});
}
try { SOUNDS[name](arg); } catch (e) { console.warn('PeakMind son', name, e); }
}
function cutIntro() { if (introBus && ctx) { introBus.gain.setTargetAtTime(0, ctx.currentTime, .04); introBus = null; } }
return { play, unlock, locked, cutIntro };
})();
let sheetLock = false, onSheetClose = null;
function runSheetHook() { const cb = onSheetClose; onSheetClose = null; if (cb) cb(); }
function openSheet(html, center) {
runSheetHook();
SFX.play('open');
sheet.innerHTML = `<div class="sheet-panel${center ? ' center' : ''}" role="dialog" aria-modal="true">${center ? '' : '<div class="grabber"></div>'}${html}</div>`;
sheet.hidden = false;
const f = sheet.querySelector('input, button'); if (f) f.focus({ preventScroll: true });
}
function closeSheet() {
if (sheetLock) return;
if (!sheet.hidden) SFX.play('close');
sheet.hidden = true; sheet.innerHTML = '';
runSheetHook();
}
sheet.addEventListener('click', e => { if (e.target === sheet) closeSheet(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !sheet.hidden) closeSheet(); });
function confirmBox(text, okLabel, onOk, danger = true) {
openSheet(`<p style="margin:4px 0 0;font-size:1.05rem">${esc(text)}</p>
      <div class="grid-2"><button type="button" class="btn subtle" data-x="no">${esc(t('cancel'))}</button><button type="button" class="btn ${danger ? 'danger' : ''}" data-x="ok">${esc(okLabel)}</button></div>`, true);
sheet.querySelector('[data-x="no"]').onclick = closeSheet;
sheet.querySelector('[data-x="ok"]').onclick = () => { closeSheet(); onOk(); };
}
const checkSvg = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
const ic = p => `<svg class="ic" viewBox="0 0 24 24" aria-hidden="true">${p}</svg>`;
const IC = {
flame: ic('<path d="M12 21c-3.9 0-6.5-2.6-6.5-6.1 0-3.3 2.3-5.2 3.7-7.6.4 1.9 1.4 3 2.6 3.6-.1-2.6.8-5.1 3.1-7.4.2 3 1.9 4.6 3.1 6.4 1 1.5 1.5 3 1.5 4.6 0 3.8-2.6 6.5-6.5 6.5z"/>'),
target: ic('<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r=".8"/>'),
steps: ic('<path d="M8 3.5c1.7 0 2.6 1.6 2.6 3.6S9.8 11 8.4 11 5.6 9.6 5.6 7.4 6.4 3.5 8 3.5zM6 13.2l4.4-.6.5 2.6c.3 1.5-.6 2.6-2 2.6s-2.4-1-2.6-2.4zM16 8.5c1.6 0 2.4 1.8 2.4 3.6s-.8 3.5-2.2 3.5-2.5-1.2-2.5-3.2.7-3.9 2.3-3.9zM14 18l4.2-.6.4 2.4c.2 1.3-.7 2.2-1.9 2.2s-2.2-.9-2.4-2.1z"/>'),
edit: ic('<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/>'),
run: ic('<circle cx="15" cy="4.5" r="2"/><path d="M13.5 8l-3 5.5M10.5 13.5L7.5 15l-2.5 3.5M10.5 13.5l3 2.5-1 4.5M8 9.5l3.5-1.5 2.5 2.5 3 1"/>'),
spark: ic('<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 16v4M17 18h4"/>'),
vault: ic('<rect x="3.5" y="4.5" width="17" height="14.5" rx="2.5"/><circle cx="12" cy="11.75" r="3.4"/><path d="M12 8.35v1.2M12 13.95v1.2M15.4 11.75h-1.2M9.8 11.75H8.6M6.5 19v1.8M17.5 19v1.8"/>'),
lock: ic('<rect x="5" y="10.5" width="14" height="10" rx="2.5"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"/><path d="M12 14.5v2.5"/>')
};
const typeTag = g => `<span class="tag ${g.type}">${esc(t('type.' + g.type))}</span>`;
const mark = '<img src="icons/mark.png" alt="" class="mark">';
function applyTheme() {
const th = themeOf(), root = document.documentElement;
root.dataset.theme = th.mode;
if (th.fx) root.dataset.fx = th.fx; else delete root.dataset.fx;
const v = { bg: th.bg, surface: th.s1, 'surface-2': th.s2, line: th.line, ink: th.ink, muted: th.muted, accent: th.a, 'accent-2': th.a2, 'on-accent': th.mode === 'dark' ? th.bg : '#ffffff', hero1: th.h1, hero2: th.h2 };
for (const k in v) root.style.setProperty('--' + k, v[k]);
document.querySelector('meta[name="theme-color"]').content = th.bg;
}
function render() {
document.documentElement.lang = S.lang;
applyTheme();
if (S.tab === 'badges') S.tab = 'profile';
$('#langBtn').textContent = S.lang.toUpperCase();
document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
document.querySelectorAll('.tabbar [data-tab]').forEach(b => { if (b.dataset.tab === S.tab) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current'); });
$('.tabbar').hidden = !S.onboarded;
if (!S.onboarded && welcomeEl.hidden) showWelcome();
const sb = $('#setBtn'); sb.setAttribute('aria-label', t('tab.settings')); if (S.tab === 'settings') sb.setAttribute('aria-current', 'page'); else sb.removeAttribute('aria-current');
questsTick();
({ today: renderToday, goals: renderGoals, league: renderLeague, profile: renderProfile, settings: renderSettings }[S.tab] || renderToday)();
}
const AVATARS = ['initials', 'peak', 'target', 'bolt', 'flame', 'shield', 'crown', 'compass', 'dumbbell', 'diamond', 'trend', 'book', 'summit', 'star',
'rocket', 'heart', 'moon', 'kettlebell', 'sword', 'wave', 'leaf', 'controller', 'headphones', 'planet', 'atom', 'infinity'];
const AV_BG = [['#141f3d', '#3a7bff'], ['#0a1f3a', '#16a6e0'], ['#33091a', '#e8365f'], ['#2b1c00', '#f2b10a'], ['#381005', '#ff6b2c'], ['#04261f', '#14c49e'],
['#2c1f00', '#e6b52c'], ['#03243a', '#25bdf0'], ['#141924', '#7c8bab'], ['#170f3b', '#8f6bff'], ['#04281a', '#2ed37c'], ['#280c33', '#c45ce0'],
['#05213a', '#5adbff'], ['#2a1800', '#ffc94a'],
['#1a0b33', '#7b5cff'], ['#33061a', '#ff4f7b'], ['#0b1233', '#6f8cff'], ['#1c1c1c', '#9aa3b2'], ['#2a0a0a', '#ff5a3c'], ['#032433', '#2bc4f0'],
['#0a2410', '#5fd08a'], ['#1d0833', '#d45cff'], ['#06202a', '#4de1ff'], ['#2a1405', '#ff9f43'], ['#04201f', '#3fe0c0'], ['#2a2104', '#ffd36b']];
const AV_SVG = {
peak: '<path class="f" d="M2.8 19.5l6.4-10.8 4 6.2 2.2-3.2 5.8 7.8z"/><path d="M9.2 8.7V3.6l4.2 1.7-4.2 1.7"/>',
target: '<circle class="f" cx="12" cy="12" r="8.6"/><circle cx="12" cy="12" r="4.8"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/><path d="M12 3.4V1.6M12 22.4v-1.8M3.4 12H1.6M22.4 12h-1.8"/>',
bolt: '<path class="f" d="M13.4 2.6L4.8 14h6.4l-1.2 7.4 8.8-11.8h-6.4z"/>',
flame: '<path class="f" d="M12 21.4c-3.9 0-6.6-2.7-6.6-6.3 0-3.3 2.3-5.2 3.7-7.6.4 1.9 1.4 3 2.6 3.6-.1-2.6.8-5.1 3.1-7.4.2 3 1.9 4.6 3.1 6.4 1 1.5 1.5 3 1.5 4.6 0 3.9-2.6 6.7-6.6 6.7z"/><path d="M12 21.4c-1.7 0-2.9-1.2-2.9-2.8 0-1.8 1.4-2.8 2.2-4.2.9 1.4 3.6 2.4 3.6 4.4 0 1.5-1.2 2.6-2.9 2.6z"/>',
shield: '<path class="f" d="M12 2.6l7.4 3.1v5.7c0 4.7-3.1 8.1-7.4 9.8-4.3-1.7-7.4-5.1-7.4-9.8V5.7z"/><path d="M8.6 12.1l2.3 2.3 4.5-4.6"/>',
crown: '<path class="f" d="M3.6 7.6l4.4 4.2 4-6.4 4 6.4 4.4-4.2-1.7 10.4H5.3z"/><path d="M5.6 21h12.8"/><circle cx="12" cy="4.2" r=".9" fill="currentColor"/>',
compass: '<circle class="f" cx="12" cy="12" r="9.2"/><path d="M15.8 8.2l-2.2 5.4-5.4 2.2 2.2-5.4z" fill="currentColor" fill-opacity=".9"/><path d="M12 2.8v1.6M12 19.6v1.6M2.8 12h1.6M19.6 12h1.6"/>',
dumbbell: '<rect class="f" x="4.6" y="6.2" width="3.4" height="11.6" rx="1.2"/><rect class="f" x="16" y="6.2" width="3.4" height="11.6" rx="1.2"/><path d="M2.6 9.6v4.8M21.4 9.6v4.8M8 12h8"/>',
diamond: '<path class="f" d="M7 3.8h10l4.2 5.3L12 20.4 2.8 9.1z"/><path d="M2.8 9.1h18.4M12 20.4L8.4 9.1l2.5-5.3M12 20.4l3.6-11.3-2.5-5.3"/>',
trend: '<path class="f" d="M3 20.5v-3.6l6-6 4 4 7-7v12.6z" stroke="none"/><path d="M3 16.9l6-6 4 4 7-7"/><path d="M14.2 7.9H20v5.8"/>',
book: '<path class="f" d="M5 4.6A1.6 1.6 0 0 1 6.6 3H19.2v15H6.6A1.6 1.6 0 0 0 5 19.6z"/><path d="M5 19.6A1.6 1.6 0 0 0 6.6 21.2h12.6"/><path d="M9 7.2h6.4M9 10.4h4"/>',
summit: '<path class="f" d="M2.4 20.4l7.2-11.2 4 6.1 2.3-3.3 5.8 8.4z"/><path d="M7.6 12.3l2 1.4 1.6-1.3"/><circle cx="17.2" cy="5.8" r="2.3"/><path d="M17.2 1.6v.9M21.4 5.8h-.9M14.3 2.9l.6.6M20.1 2.9l-.6.6"/>',
star: '<path class="f" d="M12 2.6l2.8 5.8 6.3.9-4.6 4.4 1.2 6.3L12 17l-5.7 3 1.2-6.3-4.6-4.4 6.3-.9z"/>',
rocket: '<path class="f" d="M12 2.5c3.2 2.2 4.8 5.6 4.8 9.6v4.4H7.2v-4.4c0-4 1.6-7.4 4.8-9.6z"/><circle cx="12" cy="9.6" r="1.9"/><path d="M7.2 13.4l-2.6 2.8v3.3l2.6-1.6M16.8 13.4l2.6 2.8v3.3l-2.6-1.6M10.2 19.4l1.8 2.4 1.8-2.4"/>',
heart: '<path class="f" d="M12 20.6s-8.4-5.1-8.4-11a4.6 4.6 0 0 1 8.4-2.6 4.6 4.6 0 0 1 8.4 2.6c0 5.9-8.4 11-8.4 11z"/><path d="M7.4 9.2a2.2 2.2 0 0 1 2-1.8"/>',
moon: '<path class="f" d="M19.6 14.6A8.4 8.4 0 1 1 9.4 4.4a6.6 6.6 0 0 0 10.2 10.2z"/><path d="M16.4 3.4v2.4M15.2 4.6h2.4M20.2 7.6v1.6M19.4 8.4H21"/>',
kettlebell: '<path d="M8.4 9V7.4a3.6 3.6 0 0 1 7.2 0V9"/><path class="f" d="M12 8.6c4.1 0 7 3 7 6.6 0 2.2-1 3.9-2.4 5.2H7.4C6 19.1 5 17.4 5 15.2c0-3.6 2.9-6.6 7-6.6z"/>',
sword: '<path class="f" d="M20.4 3.6l-.8 4.2L10 17.4 6.6 14 16.2 4.4z"/><path d="M5 12.4l6.6 6.6M8.3 15.7l-4.6 4.6"/>',
wave: '<path class="f" d="M2.6 18.6c2.2 0 2.9-1.6 4.7-1.6s2.5 1.6 4.7 1.6 2.9-1.6 4.7-1.6 2.5 1.6 4.7 1.6v2.6H2.6z" stroke="none"/><path d="M2.6 18.6c2.2 0 2.9-1.6 4.7-1.6s2.5 1.6 4.7 1.6 2.9-1.6 4.7-1.6 2.5 1.6 4.7 1.6"/><path d="M4.6 14.6c1-5.6 5-9.8 10.6-10.4-2.6 2-3.4 4.6-2.6 7.4 1.4-1.4 3.4-2 5.6-1.6"/>',
leaf: '<path class="f" d="M20.4 3.6C11.2 3.6 4.6 8.6 4.6 15.4c0 1.8.6 3.4 1.4 4.6 1.2.8 2.8 1.4 4.6 1.4 6.8 0 9.8-7.4 9.8-17.8z"/><path d="M3.6 20.4c4-5.4 8.2-9 12.6-11.6"/>',
controller: '<path class="f" d="M7.4 7.6h9.2a4.4 4.4 0 0 1 4.3 3.6l.9 5.2a2.6 2.6 0 0 1-4.5 2.2L15 16.2H9l-2.3 2.4a2.6 2.6 0 0 1-4.5-2.2l.9-5.2a4.4 4.4 0 0 1 4.3-3.6z"/><path d="M7.4 10.6v3M5.9 12.1h3"/><circle cx="16" cy="11.2" r=".9" fill="currentColor"/><circle cx="17.8" cy="13" r=".9" fill="currentColor"/>',
headphones: '<path d="M4.4 15.6v-3.4a7.6 7.6 0 0 1 15.2 0v3.4"/><rect class="f" x="3.4" y="13.6" width="4.4" height="7" rx="1.6"/><rect class="f" x="16.2" y="13.6" width="4.4" height="7" rx="1.6"/>',
planet: '<circle class="f" cx="12" cy="12" r="6.4"/><path d="M5.2 14.6c-2.4 1.8-3.4 3.4-2.8 4.3 1.1 1.6 7-.6 12.5-4.6S23 5.6 21.6 4.5c-.7-.6-2.4-.1-4.4 1.1"/>',
atom: '<circle cx="12" cy="12" r="1.6" fill="currentColor"/><ellipse class="f" cx="12" cy="12" rx="9.4" ry="3.8"/><ellipse cx="12" cy="12" rx="9.4" ry="3.8" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9.4" ry="3.8" transform="rotate(120 12 12)"/>',
infinity: '<path class="f" d="M12 12c-2.2-2.7-3.9-4-5.9-4a4 4 0 0 0 0 8c2 0 3.7-1.3 5.9-4zm0 0c2.2 2.7 3.9 4 5.9 4a4 4 0 0 0 0-8c-2 0-3.7 1.3-5.9 4z"/>'
};
function initialsOf(name) {
const parts = String(name || '').split(/[\s._-]+/).filter(Boolean);
if (!parts.length) return 'PM';
const chars = parts.length > 1 ? [[...parts[0]][0], [...parts[1]][0]] : [...parts[0]].slice(0, 2);
return chars.join('').toUpperCase();
}
const avatarInner = (id, name) => id === 'initials' ? `<span class="ini">${esc(initialsOf(name))}</span>` : `<svg viewBox="0 0 24 24" aria-hidden="true">${AV_SVG[id] || AV_SVG.peak}</svg>`;
const avatarOf = () => AVATARS.includes(S.avatar) && isUnlocked('avatar', S.avatar) ? S.avatar : AVATARS[0];
const frameOf = () => FRAMES.includes(S.frame) && S.frame !== 'none' && isUnlocked('frame', S.frame) ? S.frame : 'none';
const myAvatar = cls => avatarHtml(`${cls}${frameOf() === 'none' ? '' : ' frame-' + frameOf()}`, avatarOf(), S.photo, null, S.name);
const avatarBg = e => { const [a, b] = AV_BG[Math.max(0, AVATARS.indexOf(e))];
return `radial-gradient(90% 70% at 30% 18%, rgba(255,255,255,.34), rgba(255,255,255,0) 55%), radial-gradient(120% 90% at 70% 110%, ${b}, rgba(0,0,0,0) 70%), linear-gradient(155deg, ${b} -10%, ${a} 80%)`; };
function avatarHtml(cls, id, photo, elId, name) {
const idAttr = elId ? ` id="${elId}"` : '';
return photo
? `<span class="avatar photo ${cls}"${idAttr}><img src="${esc(photo)}" alt=""></span>`
: `<span class="avatar ${cls}"${idAttr} style="background:${avatarBg(id)}">${avatarInner(id, name)}</span>`;
}
function readPhoto(file) {
return new Promise((resolve, reject) => {
if (!file || !/^image\//.test(file.type)) return reject(new Error('type'));
const url = URL.createObjectURL(file), img = new Image();
img.onload = () => {
const size = 320, side = Math.min(img.naturalWidth, img.naturalHeight);
const c = document.createElement('canvas'); c.width = c.height = size;
const ctx = c.getContext('2d'); ctx.imageSmoothingQuality = 'high';
ctx.drawImage(img, (img.naturalWidth - side) / 2, (img.naturalHeight - side) / 2, side, side, 0, 0, size, size);
URL.revokeObjectURL(url);
resolve(c.toDataURL('image/jpeg', 0.85));
};
img.onerror = () => { URL.revokeObjectURL(url); reject(new Error('decode')); };
img.src = url;
});
}
const INTERESTS = [['sport', '🏃'], ['study', '📚'], ['social', '📱'], ['health', '😴'], ['quit', '🛑'], ['money', '💰']];
const SUGGEST = {
sport: [['steps', 0], ['habit', 0], ['target', 0], ['target', 1]], study: [['habit', 3], ['target', 3], ['target', 4]],
social: [['tiktok', 0], ['habit', 4]], health: [['steps', 0], ['habit', 1], ['habit', 2], ['habit', 5]],
quit: [['quit', 0], ['quit', 2], ['quit', 3]], money: [['save', 0], ['save', 1], ['habit', 6], ['quit', 5], ['target', 5]]
};
const NAME_RE = /^[\p{L}\p{N}._-]{2,20}$/u;
let W = null;
function sceneHtml() {
return `<div class="scene" aria-hidden="true"><div class="sky"></div><div class="range"><div class="sun-wrap"><div class="sun in"></div></div>
      <svg class="mountains" viewBox="0 0 400 300" preserveAspectRatio="xMidYMax slice">
        <defs>
          <linearGradient id="wgFront" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f3f7ff"/><stop offset=".3" stop-color="#9cc3f5"/><stop offset=".72" stop-color="#1f4f9a"/><stop offset="1" stop-color="#0b1c3c"/></linearGradient>
          <linearGradient id="wgBack" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#22417a"/><stop offset="1" stop-color="#08132a"/></linearGradient>
        </defs>
        <path class="m-back in" d="M0 300V205L55 168L105 196L165 138L228 188L292 146L350 182L400 158V300Z" fill="url(#wgBack)"/>
        <path class="ridge-line back in" pathLength="1" d="M0 205L55 168L105 196L165 138L228 188L292 146L350 182L400 158"/>
        <g class="m-front in"><path d="M30 300L200 88L262 168L302 128L400 252V300Z" fill="url(#wgFront)"/><path d="M200 88L262 168L222 300H176Z" fill="#0b1a36" opacity=".22"/></g>
        <path class="ridge-line front in" pathLength="1" d="M30 300L200 88L262 168L302 128L400 252"/>
        <path class="trail in" pathLength="1" d="M96 300C130 276 160 262 150 238S178 204 168 180S196 132 200 91" fill="none" stroke="#5cb6ff" stroke-width="2.6" stroke-linecap="round"/>
        <circle class="pulse in" cx="200" cy="88" r="5"/><circle class="pulse p2 in" cx="200" cy="88" r="5"/>
        <g class="flag in"><line x1="200" y1="89" x2="200" y2="57" stroke="#f4f7fc" stroke-width="2.4" stroke-linecap="round"/><path class="flag-wave" d="M201 57L227 64.5L201 72Z" fill="#5cb6ff"/></g>
      </svg></div><div class="w-floor in"></div></div>`;
}
const GLYPHS = 'ABCDEFGHJKLMNPRSTUVWXYZ0123456789<>/#*+=';
const ALT_TOP = 8849;
function skipIntro() {
SFX.cutIntro();
welcomeEl.classList.add('skip');
welcomeEl.querySelectorAll('.w-name span').forEach(s => { s.textContent = s.dataset.c; s.style.width = ''; });
const a = $('#wAlt'); if (a) a.textContent = nf(ALT_TOP);
}
function introFx() {
if (matchMedia('(prefers-reduced-motion: reduce)').matches) { skipIntro(); return; }
const t0 = performance.now(), live = () => W && W.step === 0 && !welcomeEl.classList.contains('skip');
(document.fonts ? document.fonts.ready : Promise.resolve()).then(() => {
welcomeEl.querySelectorAll('.w-name span').forEach((s, i) => {
if (!live()) return;
s.style.width = s.offsetWidth + 'px';
const start = 500 + i * 70, end = start + 380;
const tick = () => {
const el = performance.now() - t0;
if (!live() || el >= end) { if (live()) SFX.play('blip', i); s.textContent = s.dataset.c; s.style.width = ''; return; }
if (el >= start) { s.textContent = GLYPHS[Math.floor(Math.random() * GLYPHS.length)]; if (Math.random() < .25) SFX.play('key'); }
setTimeout(tick, 45);
};
tick();
});
});
let lastK = 0;
const alt = () => {
const e = $('#wAlt'); if (!e) return;
if (!live()) { e.textContent = nf(ALT_TOP); return; }
const p = Math.min(1, Math.max(0, (performance.now() - t0 - 1400) / 1500)), v = Math.round(ALT_TOP * (1 - Math.pow(1 - p, 3)));
e.textContent = nf(v);
if (Math.floor(v / 1000) > lastK) { lastK = Math.floor(v / 1000); SFX.play('alt', lastK); }
if (p < 1) requestAnimationFrame(alt);
};
requestAnimationFrame(alt);
}
function showWelcome() {
const gate = S.sound !== false && SFX.locked();
W = { step: gate ? -1 : 0, name: S.name || '', avatar: avatarOf(), photo: S.photo || '', interests: Array.isArray(S.interests) ? S.interests.slice() : [] };
closeSheet();
welcomeEl.className = 'welcome' + (gate ? ' gated' : '');
welcomeEl.innerHTML = sceneHtml() + '<div class="w-top" id="wTop"></div><div class="w-body" id="wBody"></div><div class="confetti" id="wConfetti"></div>';
const sky = welcomeEl.querySelector('.sky');
for (let i = 0; i < 48; i++) {
const s = document.createElement('i'), z = Math.random(), size = z > .9 ? 3 : z > .6 ? 2 : 1.4;
s.className = 'star';
s.style.cssText = `left:${(Math.random() * 100).toFixed(1)}%;top:${(Math.random() * 60).toFixed(1)}%;width:${size}px;height:${size}px;--d:${(2 + Math.random() * 3).toFixed(1)}s;--delay:${(Math.random() * 3).toFixed(1)}s`;
sky.append(s);
}
welcomeEl.hidden = false;
document.body.style.overflow = 'hidden';
welcomeEl.onclick = e => {
if (!W) return;
if (W.step === -1 && !e.target.closest('#wMute, #wLang')) startIntro();
else if (W.step === 0 && !e.target.closest('button')) skipIntro();
};
renderWelcome();
}
async function startIntro() {
if (!W || W.step !== -1) return;
W.step = 0;
await SFX.unlock();
SFX.play('boot');
welcomeEl.classList.remove('gated');
renderWelcome();
}
function renderWelcome() {
const top = $('#wTop'), body = $('#wBody');
if (W.shown !== W.step) { body.scrollTop = 0; W.shown = W.step; }
welcomeEl.classList.toggle('calm', W.step >= 1 && W.step <= 3);
welcomeEl.setAttribute('aria-label', APP);
top.innerHTML = (W.step >= 1 ? `<button type="button" class="w-ghost" id="wBack" aria-label="${esc(t('w.back'))}">←</button>` : '<span class="w-spacer"></span>')
+ `<div class="w-dots" aria-hidden="true">${W.step >= 1 ? [1, 2, 3, 4].map(i => `<i class="${i <= W.step ? 'on' : ''}"></i>`).join('') : ''}</div>`
+ `<button type="button" class="w-ghost" id="wLang" aria-label="Langue / Language">${S.lang.toUpperCase()}</button>`;
$('#wLang').onclick = () => { S.lang = S.lang === 'fr' ? 'en' : 'fr'; save(); if (W.step === 0) skipIntro(); render(); renderWelcome(); };
if ($('#wBack')) $('#wBack').onclick = () => { SFX.play('nav'); W.step--; renderWelcome(); };
const step = (n, inner) => `<div class="w-step w-enter"><span class="w-eyebrow">${esc(t('w.step', { n, t: 4 }))}</span>${inner}</div>`;
if (W.step === -1) {
body.innerHTML = `<div class="w-gate"><button type="button" class="w-power" id="wPower" aria-label="${esc(t('w.gate'))}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5v8"/><path d="M6.6 7a7.5 7.5 0 1 0 10.8 0"/></svg></button>
        <span class="w-gate-t">${esc(t('w.gate'))}</span></div>
        <div class="w-cta"><button type="button" class="btn ghost-light" id="wMute">${esc(t('w.gate.mute'))}</button></div>`;
$('#wMute').onclick = () => { S.sound = false; save(); W.step = 0; welcomeEl.classList.remove('gated'); renderWelcome(); };
} else if (W.step === 0) {
const skipped = welcomeEl.classList.contains('skip');
const letters = APP.toUpperCase().split('').map((c, i) => `<span style="--i:${i}" data-c="${c}"${i >= 4 ? ' class="hl"' : ''}>${c}</span>`).join('');
body.innerHTML = `<div class="w-intro"><div class="w-frame">${['tl', 'tr', 'bl', 'br'].map(k => `<i class="c ${k} in"></i>`).join('')}
          <div class="w-hello in">${esc(t('w.welcome'))}</div><h1 class="w-name in" aria-label="${APP}">${letters}</h1><p class="w-tag in">${esc(t('w.tagline'))}</p></div>
          <div class="w-alt in" aria-hidden="true"><span>${esc(t('w.alt'))}</span><b class="num" id="wAlt">${skipped ? nf(ALT_TOP) : '0'}</b><span>m</span><em>27°59′N · 86°55′E</em></div></div>
        <div class="w-cta in"><button type="button" class="btn" id="wStart">${esc(t('w.start'))}</button></div>`;
$('#wStart').onclick = () => { skipIntro(); SFX.play('next'); W.step = 1; renderWelcome(); };
if (!skipped) { SFX.play('intro'); introFx(); }
} else if (W.step === 1) {
body.innerHTML = step(1, `<h2>${esc(t('w.pseudo.t'))}</h2><p class="lead">${esc(t('w.pseudo.d'))}</p>
        <input class="w-input" id="wName" maxlength="20" autocomplete="nickname" autocapitalize="off" spellcheck="false" enterkeyhint="next" aria-label="${esc(t('w.pseudo.t'))}" aria-describedby="wErr" placeholder="${esc(t('w.pseudo.ph'))}" value="${esc(W.name)}">
        <div class="w-hi" id="wHi" aria-live="polite"></div><p class="w-err" id="wErr"></p>
        <div class="w-actions"><button type="button" class="btn" id="wNext">${esc(t('w.next'))}</button></div>`);
const inp = $('#wName'), hi = $('#wHi'), err = $('#wErr');
const update = () => { W.name = inp.value.trim(); const ok = NAME_RE.test(W.name); hi.textContent = ok ? t('w.pseudo.hi', { name: W.name }) : ''; if (ok) err.textContent = ''; return ok; };
const go = () => {
if (update()) { SFX.play('next'); W.step = 2; renderWelcome(); return; }
SFX.play('error');
err.textContent = t('w.pseudo.err'); inp.classList.remove('shake'); void inp.offsetWidth; inp.classList.add('shake'); inp.focus();
};
inp.oninput = () => { SFX.play('key'); update(); };
inp.onkeydown = e => { if (e.key === 'Enter') { e.preventDefault(); go(); } };
$('#wNext').onclick = go;
update();
setTimeout(() => inp.focus({ preventScroll: true }), 350);
} else if (W.step === 2) {
const lvlNow = ppStats().level;
body.innerHTML = step(2, `<h2>${esc(t('w.avatar.t'))}</h2><p class="lead">${esc(t('w.avatar.d'))}</p>
        <div class="w-preview">${avatarHtml('big', W.avatar, W.photo, 'wAvPrev', W.name)}<b class="w-hi">${esc(W.name)}</b></div>
        <button type="button" class="btn ghost-light w-photo-btn" id="wPhotoBtn">${esc(t(W.photo ? 'w.photo.change' : 'w.photo'))}</button>
        <input type="file" id="wPhoto" accept="image/*" hidden><p class="w-err" id="wPhotoErr" role="alert"></p>
        <span class="w-or">${esc(t('w.or'))}</span>
        <div class="w-avatars" role="group" aria-label="${esc(t('w.avatar.t'))}">${byLvl('avatar', AVATARS).map(a => { const need = reqLevel('avatar', a), ok = isUnlocked('avatar', a, lvlNow);
return `<button type="button" class="w-av${ok ? '' : ' locked'}" data-av="${a}" aria-label="${esc(t('av.' + a))}${ok ? '' : ' · ' + esc(t('rw.locked', { n: need }))}" aria-disabled="${!ok}" aria-pressed="${ok && !W.photo && a === W.avatar}" style="background:${avatarBg(a)}">${avatarInner(a, W.name)}${ok ? '' : `<span class="lock">${esc(t('lvl.short', { n: need }))}</span>`}</button>`; }).join('')}</div>
        <div class="w-actions"><button type="button" class="btn" id="wNext">${esc(t('w.next'))}</button></div>`);
const refresh = () => {
$('#wAvPrev').outerHTML = avatarHtml('big pop', W.avatar, W.photo, 'wAvPrev', W.name);
body.querySelectorAll('[data-av]').forEach(x => x.setAttribute('aria-pressed', String(x.getAttribute('aria-disabled') !== 'true' && !W.photo && x.dataset.av === W.avatar)));
$('#wPhotoBtn').textContent = t(W.photo ? 'w.photo.change' : 'w.photo');
};
body.querySelectorAll('[data-av]').forEach(b => b.onclick = () => {
if (b.getAttribute('aria-disabled') === 'true') { SFX.play('error'); $('#wPhotoErr').textContent = t('rw.locked', { n: reqLevel('avatar', b.dataset.av) }); return; }
SFX.play('select'); $('#wPhotoErr').textContent = ''; W.avatar = b.dataset.av; W.photo = ''; refresh();
});
$('#wPhotoBtn').onclick = () => $('#wPhoto').click();
$('#wPhoto').onchange = async e => {
const f = e.target.files[0]; e.target.value = '';
if (!f) return;
try { W.photo = await readPhoto(f); $('#wPhotoErr').textContent = ''; refresh(); SFX.play('equip'); }
catch (err) { SFX.play('error'); $('#wPhotoErr').textContent = t('w.photo.err'); }
};
$('#wNext').onclick = () => { SFX.play('next'); W.step = 3; renderWelcome(); };
} else if (W.step === 3) {
body.innerHTML = step(3, `<h2>${esc(t('w.goals.t'))}</h2><p class="lead">${esc(t('w.goals.d'))}</p>
        <div class="w-interests">${INTERESTS.map(([k, e]) => `<button type="button" class="w-int" data-int="${k}" aria-pressed="${W.interests.includes(k)}"><span class="e" aria-hidden="true">${e}</span>${esc(t('i.' + k))}</button>`).join('')}</div>
        <div class="w-actions"><button type="button" class="btn" id="wNext">${esc(t('w.next'))}</button><button type="button" class="btn ghost-light" id="wSkip">${esc(t('w.skip'))}</button></div>`);
body.querySelectorAll('[data-int]').forEach(b => b.onclick = () => {
const k = b.dataset.int, on = !W.interests.includes(k);
W.interests = on ? W.interests.concat(k) : W.interests.filter(x => x !== k);
b.setAttribute('aria-pressed', String(on)); SFX.play(on ? 'select' : 'deselect');
});
$('#wNext').onclick = () => { W.step = 4; renderWelcome(); };
$('#wSkip').onclick = () => { SFX.play('nav'); W.interests = []; W.step = 4; renderWelcome(); };
} else {
body.innerHTML = `<div class="w-step w-final w-enter"><div class="w-orb">${avatarHtml('huge pop', W.avatar, W.photo, null, W.name)}<i></i><i></i></div>
        <h2>${esc(t('w.done.t', { name: W.name }))}</h2><p class="lead">${esc(t('w.done.d'))}</p>
        <div class="w-actions"><button type="button" class="btn" id="wCreate">${esc(t('w.done.create'))}</button><button type="button" class="btn ghost-light" id="wExplore">${esc(t('w.done.explore'))}</button></div></div>`;
burstConfetti(); SFX.play('levelUp');
$('#wCreate').onclick = () => finishWelcome(true);
$('#wExplore').onclick = () => finishWelcome(false);
}
if (W.step >= 2) setTimeout(() => { const b = body.querySelector('.btn'); if (b) b.focus({ preventScroll: true }); }, 350);
}
function burstConfetti(box = $('#wConfetti')) {
if (!box || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
box.innerHTML = '';
const colors = ['#5cb6ff', '#a98bf0', '#ffc35c', '#4cc483', '#ff6b9a', '#ffffff'];
for (let i = 0; i < 70; i++) {
const c = document.createElement('i');
c.style.cssText = `left:${(Math.random() * 100).toFixed(1)}%;background:${colors[i % colors.length]};--x:${(Math.random() * 120 - 60).toFixed(0)}px;--r:${(200 + Math.random() * 520).toFixed(0)}deg;--dur:${(2.4 + Math.random() * 1.6).toFixed(2)}s;--delay:${(Math.random() * .5).toFixed(2)}s;width:${6 + Math.round(Math.random() * 5)}px;height:${10 + Math.round(Math.random() * 7)}px`;
box.append(c);
}
}
function finishWelcome(create) {
Object.assign(S, { name: W.name, avatar: W.avatar, photo: W.photo, interests: W.interests, onboarded: true, tab: 'today', seenVersion: VERSION });
if (!S.startDay && !Object.keys(S.activity || {}).length) S.startDay = today();
save(); W = null;
SFX.play('warp');
welcomeEl.classList.add('leaving');
setTimeout(() => {
welcomeEl.hidden = true; welcomeEl.innerHTML = ''; welcomeEl.className = 'welcome'; welcomeEl.onclick = null;
document.body.style.overflow = '';
checkBadges(); render();
const bar = $('.tabbar');
view.classList.add('app-enter'); bar.classList.add('app-enter');
setTimeout(() => { view.classList.remove('app-enter'); bar.classList.remove('app-enter'); }, 1400);
if (create) openSuggestions();
}, 560);
}
function suggestions(max = 6) {
const out = [], seen = new Set(), lists = (S.interests || []).map(k => (SUGGEST[k] || []).slice());
while (out.length < max && lists.some(l => l.length)) {
for (const l of lists) { while (l.length) { const [ty, i] = l.shift(); if (!seen.has(ty + i)) { seen.add(ty + i); out.push([ty, i]); break; } } if (out.length >= max) break; }
}
return out;
}
function suggestionButtons() {
return suggestions().map(([ty, i]) => {
const tp = TEMPLATES[ty][i];
return `<button type="button" class="type" data-sugg="${ty}:${i}"><div class="emoji">${tp.e}</div><div style="min-width:0"><b style="text-transform:none;font-size:1.15rem">${esc(L(tp, ''))}</b><div style="margin-top:4px"><span class="tag ${ty}">${esc(t('type.' + ty))}</span></div></div></button>`;
}).join('');
}
function bindSuggestions(root) {
root.querySelectorAll('[data-sugg]').forEach(b => b.onclick = () => { const [ty, i] = b.dataset.sugg.split(':'); goalForm(ty, TEMPLATES[ty][+i]); });
}
function openSuggestions() {
if (!suggestions().length) return openNew();
openSheet(`<div class="sheet-head"><h2>${esc(t('sugg.t'))}</h2><button type="button" class="icon-btn" id="closeS" aria-label="${esc(t('close'))}">✕</button></div>
      <div class="types">${suggestionButtons()}<button type="button" class="type" id="sOther"><div class="emoji">✏️</div><div><b>${esc(t('sugg.other'))}</b><small>${esc(t('sugg.other.d'))}</small></div></button></div>`);
$('#closeS').onclick = closeSheet;
$('#sOther').onclick = openNew;
bindSuggestions(sheet);
}
function dayProgress() {
const tk = today(), dow = new Date().getDay(), q = (S.quests && S.quests.day === tk && S.quests.list) || [];
let n = q.length, d = q.filter(x => x.done).length;
for (const g of S.goals) {
if (g.type === 'habit' && g.days.includes(dow)) { n++; if (g.checks[tk]) d++; }
else if (g.type === 'steps') { n++; if (stepsToday(g) >= g.daily) d++; }
}
return n ? d / n : 0;
}
function heroHtml() {
const h = new Date().getHours(), key = h >= 18 || h < 5 ? 'hello.e' : h < 12 ? 'hello.m' : 'hello';
const name = S.name ? t(key, { name: esc(S.name) }) : esc(t('hello.anon'));
const p = S.onboarded ? dayProgress() : 0, C = 2 * Math.PI * 22;
const ring = S.onboarded ? `<div class="day-ring${p >= 1 ? ' full' : ''}" title="${esc(t('day.ring'))}"><svg viewBox="0 0 52 52" aria-hidden="true"><circle cx="26" cy="26" r="22" class="dr-bg"/><circle cx="26" cy="26" r="22" class="dr-fg" stroke-dasharray="${(C * p).toFixed(1)} ${C.toFixed(1)}"/></svg><b class="num">${Math.round(p * 100)}%</b><small>${esc(t('day.ring'))}</small></div>` : '';
return `<section class="hero">${mark}
      <span class="eyebrow">${esc(fmtDate(today(), true))}</span>
      <div class="hero-id">${myAvatar('')}<div class="hero-name"><h1>${name}</h1>${S.onboarded ? `<span class="hero-title">« ${esc(L(titleNow(), ''))} »</span>` : ''}</div>${ring}</div>
      <div class="hero-stats">
        <div><b class="num st-flame">${IC.flame}${globalStreak()}</b><span>${esc(t('stat.streak'))}</span></div>
        <div><b class="num st-goal">${IC.target}${S.goals.length}</b><span>${esc(t('stat.goals'))}</span></div>
        <div><b class="num">${rankEmblem(ppStats().rank, 'xs')}${ppStats().level}</b><span>${esc(t('stat.level'))}</span></div>
      </div></section>`;
}
function habitCard(g) {
const done = !!g.checks[today()], st = habitStreak(g);
return `<article class="card" data-goal="${g.id}">
      <div class="card-head"><div class="emoji">${esc(g.emoji)}</div>
        <div class="card-title" data-open="${g.id}" role="button" tabindex="0"><h3>${esc(g.title)}</h3><p><span class="flame">${IC.flame}${esc(t('card.streak', { n: st }))}</span></p></div>
        <button type="button" class="check${done ? ' on' : ''}" data-check="${g.id}" aria-pressed="${done}" aria-label="${esc(g.title)}">${checkSvg}</button></div>
      ${weekStrip(g)}</article>`;
}
function weekStrip(g) {
const wd = t('wd'); let html = '<div class="week">';
for (let i = 6; i >= 0; i--) {
const d = addDays(new Date(), -i), k = dkey(d), planned = g.days.includes(d.getDay());
html += `<span>${wd[d.getDay()]}<i class="${g.checks[k] ? 'on' : ''}${planned ? '' : ' off'}${i === 0 ? ' today' : ''}"></i></span>`;
}
return html + '</div>';
}
function quitCard(g) {
const ms = quitMs(g), d = Math.floor(ms / 86400000), h = Math.floor(ms / 3600000) % 24;
return `<article class="card" data-goal="${g.id}">
      <div class="card-head"><div class="emoji">${esc(g.emoji)}</div>
        <div class="card-title" data-open="${g.id}" role="button" tabindex="0"><h3>${esc(g.title)}</h3><p>${esc(t('card.best', { n: Math.floor(quitBest(g) / 86400000) }))}</p></div></div>
      <div class="row between"><div><div class="big-num num" data-since="${g.id}">${esc(t('quit.days', { d, h }))}</div><div class="muted">${esc(t('quit.since'))}</div></div>
        <button type="button" class="btn subtle" data-relapse="${g.id}">${esc(t('quit.relapse'))}</button></div></article>`;
}
function numberCard(g) {
const p = pct(g), cur = current(g), left = Math.abs(g.target - cur), unit = g.type === 'tiktok' ? (S.lang === 'fr' ? 'abonnés' : 'followers') : g.unit;
return `<article class="card" data-goal="${g.id}">
      <div class="card-head"><div class="emoji">${esc(g.emoji)}</div>
        <div class="card-title" data-open="${g.id}" role="button" tabindex="0"><h3>${esc(g.title)}</h3><p>${g.type === 'tiktok' && g.handle ? '@' + esc(g.handle) + ' · ' : ''}${p >= 1 ? esc(t('card.done')) : esc(t('card.left', { n: nf(left, 1), unit: unit }))}</p></div></div>
      <div class="row between"><span class="big-num num">${nf(cur, 1)}<small class="muted" style="font-size:1rem"> / ${nf(g.target, 1)} ${esc(unit)}</small></span><b class="num" style="color:var(--accent)">${Math.round(p * 100)} %</b></div>
      <div class="bar"><i style="width:${(p * 100).toFixed(1)}%"></i></div>
      ${raiseHtml(g)}
      <form class="inline-form" data-entry="${g.id}"><input type="number" inputmode="decimal" step="any" placeholder="${esc(t('card.value'))}" aria-label="${esc(t('card.value'))}" required><button class="btn" type="submit">${esc(t('card.add'))}</button></form>
    </article>`;
}
function stepsCard(g) {
const n = stepsToday(g), p = Math.min(1, n / g.daily), done = n >= g.daily;
return `<article class="card" data-goal="${g.id}">
      <div class="card-head"><div class="emoji">${esc(g.emoji)}</div>
        <div class="card-title" data-open="${g.id}" role="button" tabindex="0"><h3>${esc(g.title)}</h3><p>${done ? `<span class="ok-txt">✓ ${esc(t('st.done'))}</span>` : esc(t('st.left', { n: nf(g.daily - n) }))} · ${esc(t('st.km', { n: nf(n * STRIDE_KM, 1) }))}</p></div>
        <span class="flame num">${IC.flame}${stepsStreak(g)}</span></div>
      <div class="row between"><span class="big-num num">${nf(n)}<small class="muted" style="font-size:1rem"> / ${nf(g.daily)} ${esc(t('st.unit'))}</small></span><b class="num" style="color:${done ? 'var(--good)' : 'var(--accent)'}">${Math.round(p * 100)} %</b></div>
      <div class="bar${done ? ' good' : ''}"><i style="width:${(p * 100).toFixed(1)}%"></i></div>
      ${raiseHtml(g)}
      <div class="grid-2"><button type="button" class="btn subtle" data-ped="${g.id}">${IC.steps}${esc(t('st.live'))}</button><button type="button" class="btn subtle" data-stepset="${g.id}">${IC.edit}${esc(t('st.set'))}</button></div>
    </article>`;
}
function runCard() {
const last = (S.runs || []).slice(-1)[0];
return `<article class="card run-card">
      <div class="card-head"><div class="emoji">🏃</div><div class="card-title"><h3>${esc(t('run.title'))}</h3><p>${esc(last ? t('run.last', { km: nf(last.km, 2), date: fmtDate(last.d) }) : t('run.none'))}</p></div></div>
      <button type="button" class="btn block" data-run>${esc(t('run.start'))}</button></article>`;
}
const quoteCard = () => {
const q = QUOTES[S.lang] || QUOTES.fr, i = Math.floor(parseKey(today()).getTime() / 86400000) % q.length;
const [o, c] = S.lang === 'fr' ? ['« ', ' »'] : ['“', '”'];
return `<section class="card quote"><span class="section-title" style="margin:0">${esc(t('quote.t'))}</span><p>${o}${esc(q[i])}${c}</p></section>`;
};
function renderToday() {
if (!S.goals.length) {
view.innerHTML = heroHtml() + betaCard() + newsCard() + dangerCard() + guideTip() + installCard() + backupCard() + questsHtml() + dungeonCard() + examCard() + vaultCard() + climbCard() + quoteCard() + (suggestions().length
? `<h2 class="section-title">${esc(t('sugg.t'))}</h2><div class="types">${suggestionButtons()}</div><button type="button" class="btn ghost" id="emptyCta">${esc(t('sugg.other'))}</button>`
: `<div class="empty"><img src="icons/icon-192.png" alt=""><h2>${esc(t('empty.title'))}</h2><p class="muted" style="margin:0;max-width:34ch">${esc(t('empty.text'))}</p><button type="button" class="btn" id="emptyCta">${esc(t('empty.cta'))}</button></div>`);
$('#emptyCta').onclick = openNew;
$('#climbCard').onclick = openClimb;
bindSuggestions(view); bindQuests(view); bindVaultCard(view); bindExamCard(view); bindDungeonCard(view); bindTodayExtras(view); bindInstall(view); bindBackup(view); bindNews(view); bindBeta(view); maybeSystemPopup();
return;
}
const dow = new Date().getDay();
const habits = S.goals.filter(g => g.type === 'habit' && g.days.includes(dow));
const quits = S.goals.filter(g => g.type === 'quit');
const nums = S.goals.filter(g => (g.type === 'target' || g.type === 'tiktok') && !g.arch);
const steps = S.goals.filter(g => g.type === 'steps');
const saves = S.goals.filter(g => g.type === 'save');
let html = heroHtml() + betaCard() + newsCard() + dangerCard() + guideTip() + installCard() + backupCard() + reportCard() + questsHtml() + dungeonCard() + examCard() + vaultCard() + climbCard() + quoteCard();
if (S.goals.some(g => g.type === 'habit')) html += `<h2 class="section-title">${esc(t('today.habits'))}</h2><div class="stack">${habits.length ? habits.map(habitCard).join('') : `<p class="muted" style="margin:0">${esc(t('today.rest'))}</p>`}</div>`;
html += `<h2 class="section-title">${esc(t('today.activity'))}</h2><div class="stack">${steps.map(stepsCard).join('')}${runCard()}</div>`;
if (quits.length) html += `<h2 class="section-title">${esc(t('today.quits'))}</h2><div class="stack">${quits.map(quitCard).join('')}</div>`;
if (nums.length) html += `<h2 class="section-title">${esc(t('today.targets'))}</h2><div class="stack">${nums.map(numberCard).join('')}</div>`;
if (saves.length) html += `<h2 class="section-title">${esc(t('today.saves'))}</h2><div class="stack">${saves.map(saveCard).join('')}</div>`;
view.innerHTML = html;
bindCards(); bindQuests(view); bindVaultCard(view); bindExamCard(view); bindDungeonCard(view); bindTodayExtras(view); bindInstall(view); bindBackup(view); bindNews(view); bindBeta(view); maybeSystemPopup();
const rpb = $('#rpOpenT'); if (rpb) rpb.onclick = () => openReport();
}
function renderGoals() {
let html = `<div class="row between"><h2 style="font-size:1.9rem;text-transform:uppercase">${esc(t('tab.goals'))}</h2><button type="button" class="btn" id="goalsNew">+ ${esc(t('new.title'))}</button></div>`;
const vs = vaultSummary();
if (featOn('vault')) html += `<button type="button" class="type vault-row" id="goalsVault"><div class="emoji vault-ico">${IC.vault}</div><div style="min-width:0;flex:1;display:grid;gap:3px"><b>${esc(t('v.title'))}</b><small>${esc(vs.ripe ? t('v.ripe', { n: vs.ripe }) : t('v.row'))}</small></div><span class="vault-go" aria-hidden="true">›</span></button>`;
const ex = examsAhead();
if (featOn('exam')) html += `<button type="button" class="type vault-row exam-row" id="goalsExam"><div class="emoji exam-ico">🎓</div><div style="min-width:0;flex:1;display:grid;gap:3px"><b>${esc(t('ex.title'))}</b><small>${esc(ex.length ? t('ex.row.next', { s: examName(ex[0]), n: examDays(ex[0]) }) : t('ex.row'))}</small></div><span class="vault-go" aria-hidden="true">›</span></button>`;
html += lockedFeatsHtml();
if (!S.goals.length) html += `<div class="empty"><img src="icons/icon-192.png" alt=""><p class="muted" style="margin:0">${esc(t('empty.text'))}</p></div>`;
const arch = S.goals.filter(g => g.arch);
for (const g of S.goals) {
if (g.arch) continue;
let sub = '';
if (g.type === 'save') sub = `${money(saveTotal(g))} / ${money(g.target)} · ${Math.round(pct(g) * 100)} %`;
else if (g.type === 'habit') sub = `🔥 ${t('card.streak', { n: habitStreak(g) })} · ${t('d.rate', { p: habitRate(g) })}`;
else if (g.type === 'quit') { const ms = quitMs(g); sub = `${t('quit.days', { d: Math.floor(ms / 86400000), h: Math.floor(ms / 3600000) % 24 })} ${t('quit.since')}`; }
else if (g.type === 'steps') sub = `${nf(stepsToday(g))} / ${nf(g.daily)} ${t('st.unit')} · 🔥 ${t('st.streak', { n: stepsStreak(g) })}`;
else sub = `${nf(current(g), 1)} / ${nf(g.target, 1)} · ${Math.round(pct(g) * 100)} %`;
const p = g.type === 'habit' ? habitRate(g) / 100 : g.type === 'steps' ? Math.min(1, stepsToday(g) / g.daily) : g.type === 'quit' ? Math.min(1, quitMs(g) / Math.max(7 * 864e5, quitBest(g))) : pct(g);
html += `<button type="button" class="type goal-row" data-open="${g.id}"><div class="emoji">${esc(g.emoji)}</div><div style="min-width:0;flex:1;display:grid;gap:5px"><b style="text-transform:none;font-size:1.2rem">${esc(g.title)}</b><small>${esc(sub)}</small><div class="bar thin${p >= 1 ? ' good' : ''}"><i style="width:${(Math.max(.02, p) * 100).toFixed(1)}%"></i></div><div>${typeTag(g)}</div></div></button>`;
}
if (arch.length) html += `<h2 class="section-title">${esc(t('rs.done'))}</h2><div class="arch-list">${arch.map(g => `<button type="button" class="arch-row" data-open="${g.id}"><span aria-hidden="true">🏆</span><b>${esc(g.title)}</b><small class="muted">${esc(fmtDate(g.arch))}</small></button>`).join('')}</div>`;
view.innerHTML = html;
$('#goalsNew').onclick = openNew;
if ($('#goalsVault')) $('#goalsVault').onclick = () => openVault();
if ($('#goalsExam')) $('#goalsExam').onclick = () => openExams();
view.querySelectorAll('[data-open]').forEach(b => b.onclick = () => openDetail(b.dataset.open));
}
function renderProfile() {
const st = ppStats(), lvl = st.level, n = BADGES.filter(b => S.badges[b.id]).length, p = st.p;
const tile = (kind, id, preview, label) => {
const need = reqLevel(kind, id), ok = isUnlocked(kind, id, lvl);
const on = ok && (kind === 'avatar' ? !S.photo && avatarOf() === id : kind === 'frame' ? frameOf() === id : themeOf().id === id);
return `<button type="button" class="rw-tile" data-rw="${kind}:${id}" aria-pressed="${on}" aria-disabled="${!ok}" aria-label="${esc(label)}${ok ? '' : ' · ' + esc(t('rw.locked', { n: need }))}">`
+ `<span class="rw-prev">${preview}</span>${kind === 'avatar' ? '' : `<span class="rw-name">${esc(label)}</span>`}`
+ `${ok ? '' : `<span class="lock">🔒 ${esc(t('lvl.short', { n: need }))}</span>`}</button>`;
};
const tabs = {
themes: [THEMES.filter(th => isUnlocked('theme', th.id, lvl)).length, THEMES.length],
avatars: [AVATARS.filter(a => isUnlocked('avatar', a, lvl)).length, AVATARS.length],
frames: [FRAMES.filter(f => isUnlocked('frame', f, lvl)).length, FRAMES.length],
titles: [titlesEarned().length, TITLES.length],
badges: [n, BADGES.length]
};
const cur = tabs[S.profTab] ? S.profTab : 'themes';
let body;
const earnedT = titlesEarned(), myT = titleNow();
if (cur === 'titles') body = `<div class="title-list">${TITLES.map(x => { const ok = earnedT.includes(x); return `<button type="button" class="title-tile${x === myT ? ' on' : ''}" data-title="${x.id}" aria-pressed="${x === myT}" aria-disabled="${!ok}"><b>${ok ? '' : '🔒 '}${esc(L(x, ''))}</b><small>${esc(L(x, 'd'))}</small></button>`; }).join('')}</div>`;
else if (cur === 'themes') body =`<div class="rw-grid wide">${byLvl('theme', THEMES, th => th.id).map(th => tile('theme', th.id, themePreview(th), L(th, ''))).join('')}</div>`;
else if (cur === 'avatars') body = `<div class="rw-grid">${byLvl('avatar', AVATARS).map(a => tile('avatar', a, rewardPreview({ kind: 'avatar', id: a }, ''), t('av.' + a))).join('')}</div>`;
else if (cur === 'frames') body = `<div class="rw-grid wide">${byLvl('frame', FRAMES).map(f => tile('frame', f, rewardPreview({ kind: 'frame', id: f }, ''), frameName(f))).join('')}</div>`;
else body = `<div class="badges">${BADGES.map(b => { const on = S.badges[b.id]; return `<div class="badge${on ? '' : ' locked'}"><div class="medal">${b.i}</div><b>${esc(t('b.' + b.id))}</b><small>${esc(t('b.' + b.id + '.d'))}</small><small>${on ? esc(t('badge.on', { date: fmtDate(on) })) : esc(t('badge.off'))}</small><small class="badge-pp">+${PP.badge} XP</small></div>`; }).join('')}</div>`;
view.innerHTML = `<section class="card profile-card">${myAvatar('huge')}
        <h2>${esc(S.name || t('hello.anon'))}</h2>
        <span class="hero-title">« ${esc(L(titleNow(), ''))} »</span>
        <div class="rank-line">${rankEmblem(st.rank, 'sm')}<span class="lvl-pill num">${esc(t('lvl.n', { n: lvl }))} · ${esc(L(st.rank, ''))}</span></div>
        <div class="bar"><i style="width:${(p * 100).toFixed(1)}%"></i></div>
        <span class="muted num">${st.max ? esc(t('lvl.total', { n: nf(st.total) })) : `${nf(st.total)} / ${nf(st.to)} XP`} · ${esc(st.next)}</span>
        <div class="grid-2 prof-btns"><button type="button" class="btn subtle" id="profProgress">${esc(t('lvl.sheet'))}</button><button type="button" class="btn" id="profShare">📤 ${esc(t('pc.share'))}</button></div></section>
      ${ascentCard()}
      ${hunterCard()}
      ${activityCard()}
      ${codeCard(true)}
      <div class="seg" role="tablist" aria-label="${esc(t('tab.profile'))}">${Object.keys(tabs).map(k => `<button type="button" role="tab" data-ptab="${k}" aria-selected="${k === cur}">${esc(t('pt.' + k))}<small class="num">${tabs[k][0]}/${tabs[k][1]}</small></button>`).join('')}</div>
      <p class="muted" style="margin:0">${esc(t(cur === 'badges' ? 'badges.hint' : cur === 'titles' ? 'ti.hint' : 'rw.hint'))}</p>
      ${body}`;
$('#profProgress').onclick = openClimb;
$('#profShare').onclick = () => openPlayerCard();
$('#ascentCard').onclick = openAscent;
$('#rpOpen').onclick = () => openReport();
$('#hsTitle').onclick = () => { S.profTab = 'titles'; save(); renderProfile(); const sg = view.querySelector('.seg'); if (sg) sg.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
view.querySelectorAll('[data-title]').forEach(b => b.onclick = () => {
const x = TITLES.find(y => y.id === b.dataset.title);
if (!titlesEarned().includes(x)) { SFX.play('error'); toast(L(x, 'd')); return; }
S.title = x.id; save(); SFX.play('equip'); toast(t('ti.equipped') + ' : ' + L(x, '')); renderProfile();
});
bindCode(view);
view.querySelectorAll('[data-ptab]').forEach(b => b.onclick = () => { S.profTab = b.dataset.ptab; saveUI(); renderProfile(); });
view.querySelectorAll('[data-rw]').forEach(b => b.onclick = () => {
const [kind, id] = b.dataset.rw.split(':');
if (!isUnlocked(kind, id, lvl)) { SFX.play('error'); toast(t('rw.locked', { n: reqLevel(kind, id) })); return; }
const equip = () => {
if (kind === 'avatar') { S.avatar = id; S.photo = ''; }
if (kind === 'frame') S.frame = id;
if (kind === 'theme') S.skin = id;
save(); render(); toast(t('rw.equipped')); SFX.play('equip'); scheduleSync();
};
if (kind === 'avatar' && S.photo) confirmBox(t('rw.photo.q'), t('rw.photo.ok'), equip, false); else equip();
});
}
function renderSettings() {
view.innerHTML = `<h2 style="font-size:1.9rem;text-transform:uppercase">${esc(t('tab.settings'))}</h2>
      ${creatorCard()}${betaSettingsCard()}
      <button type="button" class="type guide-row" id="setGuide"><div class="emoji">📖</div><div style="min-width:0;flex:1;display:grid;gap:3px"><b>${esc(t('gd.title'))}</b><small>${esc(t('gd.row'))}</small></div><span class="vault-go" aria-hidden="true">›</span></button>
      <section class="card"><h3>${esc(t('s.profile'))}</h3>
        <label class="field" for="setName">${esc(t('s.name'))}<input id="setName" maxlength="20" autocapitalize="off" spellcheck="false" value="${esc(S.name)}"></label>
        <div class="field">${esc(t('s.photo'))}<div class="row" style="flex-wrap:nowrap">${myAvatar('big')}
          <div class="stack" style="gap:8px;flex:1;min-width:0"><button type="button" class="btn subtle" id="setPhotoBtn">${esc(t(S.photo ? 's.photo.change' : 's.photo.add'))}</button>
          ${S.photo ? `<button type="button" class="btn danger" id="setPhotoDel">${esc(t('s.photo.remove'))}</button>` : ''}</div></div>
          <input type="file" id="setPhoto" accept="image/*" hidden></div>
        <div class="field">${esc(t('s.lang'))}<div class="chips"><button type="button" class="chip" data-lang="fr" aria-pressed="${S.lang === 'fr'}">Français</button><button type="button" class="chip" data-lang="en" aria-pressed="${S.lang === 'en'}">English</button></div></div>
        <div class="field">${esc(t('s.sound'))}<div class="chips"><button type="button" class="chip" data-sound="on" aria-pressed="${S.sound !== false}">${esc(t('s.sound.on'))}</button><button type="button" class="chip" data-sound="off" aria-pressed="${S.sound === false}">${esc(t('s.sound.off'))}</button></div></div>
        <div class="field">${esc(t('s.theme'))}<button type="button" class="theme-row" id="setTheme">${themePreview(themeOf(), 'mini')}<b>${esc(L(themeOf(), ''))}</b><span class="muted">${esc(t('s.theme.change'))} ›</span></button></div>
        <button type="button" class="btn subtle" id="replayIntro">${IC.spark}${esc(t('s.replay'))}</button>
      </section>
      <section class="card"><h3>${esc(t('lg.s.title'))}</h3>
        <p class="muted" style="margin:0">${esc(t(!NET.ready() ? 'lg.s.soon' : S.league && S.league.joined ? 'lg.s.on' : 'lg.s.off'))} ${esc(t('lg.pub'))}</p>
        <button type="button" class="btn subtle" id="setLeague">${esc(t('tab.league'))} ›</button></section>
      <section class="card"><h3>${esc(t('s.install'))}</h3>${standalone() ? `<p class="ok-txt" style="margin:0">${esc(t('in.already'))}</p>`
: `<ul class="list-plain"><li>${esc(t('s.install.ios'))}</li><li>${esc(t('s.install.android'))}</li></ul><button type="button" class="btn subtle" id="setInstall">📲 ${esc(t(installEvt ? 'in.go' : 'in.how'))}</button>`}</section>
      ${remindCard()}
      <section class="card"><h3>${esc(t('s.data'))}</h3><p class="muted" style="margin:0">${esc(t(NET.ready() ? 's.privacy.count' : 's.privacy'))}</p>
        <p class="muted" style="margin:0;font-size:.85rem">💾 ${esc(S.lastExport ? t('s.lastExp', { d: fmtDate(S.lastExport, true) }) : t('s.lastExp.never'))}</p>
        <div class="grid-2"><button type="button" class="btn subtle" id="exp">${esc(t('s.export'))}</button><button type="button" class="btn subtle" id="impBtn">${esc(t('s.import'))}</button></div>
        <input type="file" id="imp" accept="application/json,.json" hidden>
        <button type="button" class="btn danger" id="reset">${esc(t('s.reset'))}</button></section>
      <section class="card" id="about"><h3>${esc(t('s.about'))}</h3><p class="muted" style="margin:0">${esc(t('s.about.t', { v: VERSION }))}</p></section>`;
bindCreator(); bindInstall(view); bindBeta(view); bindRemind(view);
$('#setGuide').onclick = () => openGuide();
$('#setName').onchange = e => {
const v = e.target.value.trim();
if (!NAME_RE.test(v)) { toast(t('w.pseudo.err')); e.target.value = S.name; return; }
if (S.league && S.league.joined && badPseudo(v)) { SFX.play('error'); toast(t('lg.err.pseudo')); e.target.value = S.name; return; }
S.name = v; save(); toast(t('saved')); scheduleSync();
};
$('#replayIntro').onclick = async () => { await SFX.unlock(); S.onboarded = false; save(); showWelcome(); };
view.querySelectorAll('[data-sound]').forEach(b => b.onclick = async () => {
S.sound = b.dataset.sound === 'on'; save();
if (S.sound) { await SFX.unlock(); SFX.play('equip'); }
render();
});
$('#setPhotoBtn').onclick = () => $('#setPhoto').click();
$('#setPhoto').onchange = async e => {
const f = e.target.files[0]; e.target.value = '';
if (!f) return;
try { S.photo = await readPhoto(f); save(); render(); toast(t('saved')); } catch (err) { toast(t('w.photo.err')); }
};
if ($('#setPhotoDel')) $('#setPhotoDel').onclick = () => { S.photo = ''; save(); render(); };
view.querySelectorAll('[data-lang]').forEach(b => b.onclick = () => { S.lang = b.dataset.lang; save(); render(); });
$('#setTheme').onclick = () => { S.tab = 'profile'; S.profTab = 'themes'; save(); render(); window.scrollTo(0, 0); };
$('#exp').onclick = () => { exportBackup(); render(); };
$('#impBtn').onclick = () => $('#imp').click();
$('#imp').onchange = async e => {
const f = e.target.files[0]; if (!f) return;
try {
if (f.size > 20e6) throw new Error('size');
const data = cleanData(JSON.parse(await f.text()));
if (!data || typeof data !== 'object' || Array.isArray(data) || !Array.isArray(data.goals)) throw new Error('format');
delete data.creator;
S = migrate(Object.assign(fresh(), data, { onboarded: true, tab: 'settings' })); save(); render(); toast(t('s.imported'));
} catch (err) { toast(t('s.badfile')); }
};
$('#reset').onclick = () => confirmBox(t('s.reset.q'), t('s.reset.ok'), () => {
if (NET.ready() && S.league && S.league.joined) NET.rpc('pm_leave', {}).catch(() => {}).finally(() => NET.forget());
const lang = S.lang; S = fresh(); S.lang = lang; save(); render();
});
$('#setLeague').onclick = () => { S.tab = 'league'; SFX.play('nav'); save(); render(); window.scrollTo(0, 0); };
}
const byId = id => S.goals.find(g => g.id === id);
function toggleHabit(g, k) {
if (g.checks[k]) { delete g.checks[k]; SFX.play('uncheck'); } else { g.checks[k] = true; markActivity(); SFX.play('check'); buzz(14); }
save(); checkBadges();
}
function addEntry(g, v) {
const k = today();
g.entries = g.entries.filter(e => e.d !== k).concat([{ d: k, v }]).sort((a, b) => a.d < b.d ? -1 : 1);
markActivity(); save(); checkBadges(); SFX.play('check');
}
function relapse(g) {
confirmBox(t('quit.relapse.q'), t('quit.relapse.ok'), () => {
const now = new Date().toISOString();
g.best = quitBest(g); g.relapses = (g.relapses || 0) + 1; g.since = now;
g.relapseLog = (g.relapseLog || []).concat(now);
SFX.play('down'); save(); render(); if (!sheet.hidden) openDetail(g.id);
}, false);
}
function bindCards(root = view) {
root.querySelectorAll('[data-check]').forEach(b => b.onclick = () => {
const g = byId(b.dataset.check), before = ppStats().total;
toggleHabit(g, today());
render();
rewardFeedback(before, g.checks[today()] ? t('checked', { n: habitStreak(g) }) : '');
});
root.querySelectorAll('[data-open]').forEach(b => { b.onclick = () => openDetail(b.dataset.open); b.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openDetail(b.dataset.open); } }; });
root.querySelectorAll('[data-relapse]').forEach(b => b.onclick = () => relapse(byId(b.dataset.relapse)));
root.querySelectorAll('[data-entry]').forEach(f => f.onsubmit = e => {
e.preventDefault();
const v = parseFloat(f.querySelector('input').value.replace(',', '.'));
if (!Number.isFinite(v)) return;
const before = ppStats().total;
addEntry(byId(f.dataset.entry), v); render();
rewardFeedback(before, t('saved'));
});
root.querySelectorAll('[data-dep]').forEach(f => f.onsubmit = e => {
e.preventDefault();
const v = parseFloat(f.querySelector('input').value.replace(',', '.'));
if (!Number.isFinite(v) || v <= 0) { SFX.play('error'); return; }
saveMove(byId(f.dataset.dep), v); render();
});
const climb = root.querySelector('#climbCard'); if (climb) climb.onclick = openClimb;
root.querySelectorAll('[data-ped]').forEach(b => b.onclick = () => openPedometer(byId(b.dataset.ped)));
root.querySelectorAll('[data-stepset]').forEach(b => b.onclick = () => openStepSet(byId(b.dataset.stepset)));
root.querySelectorAll('[data-run]').forEach(b => b.onclick = openRun);
}
const CODE_ABC = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const CODE_RE = /^PM-[A-HJ-NP-Z2-9]{4}-[A-HJ-NP-Z2-9]{3}$/;
function newFriendCode() { const r = new Uint32Array(7); crypto.getRandomValues(r); const c = [...r].map(x => CODE_ABC[x % 32]).join(''); return `PM-${c.slice(0, 4)}-${c.slice(4)}`; }
function league() {
if (!S.league || typeof S.league !== 'object') S.league = {};
const lg = S.league;
if (!CODE_RE.test(lg.code || '')) { lg.code = newFriendCode(); save(); }
if (!lg.cache || typeof lg.cache !== 'object') lg.cache = {};
return lg;
}
const BAD_LONG = ['connard', 'connasse', 'salope', 'salaud', 'encule', 'batard', 'putain', 'petasse', 'niquer', 'tamere', 'enfoire',
'fuck', 'bitch', 'nigger', 'nigga', 'faggot', 'whore', 'hitler', 'bougnoul', 'tapette', 'pedophile', 'porno',
'peakmind', 'peakwinner', 'officiel', 'official', 'createur', 'creator', 'fondateur', 'founder', 'moderat', 'administrat'];
const BAD_WORDS = ['con', 'cons', 'conne', 'pute', 'putes', 'pd', 'fdp', 'ntm', 'tg', 'nique', 'merde', 'bite', 'cul', 'couille', 'couilles',
'viol', 'nazi', 'pedo', 'negro', 'negre', 'cunt', 'dick', 'shit', 'porn', 'rape', 'sex', 'sexe', 'ass', 'slut', 'fag', 'kkk',
'admin', 'modo', 'staff', 'owner', 'support', 'team', 'dev', 'bot'];
function badPseudo(p) {
const from = 'àâäáãåçéèêëíìîïñóòôöõúùûüýÿ013457@$', to = 'aaaaaaceeeeiiiinooooouuuuyyoieastas';
const s = [...String(p || '').toLowerCase()].map(c => { const i = from.indexOf(c); return i < 0 ? c : to[i]; }).join('');
const flat = s.replace(/[^a-z]/g, ''), parts = s.split(/[^a-z]+/);
return BAD_LONG.some(w => flat.includes(w)) || BAD_WORDS.some(w => flat === w || parts.includes(w));
}
const NET = (() => {
const cfg = window.PEAKMIND_CONFIG || {};
const url = String(cfg.supabaseUrl || '').trim().replace(/\/+$/, ''), key = String(cfg.supabaseAnonKey || '').trim();
const SKEY = 'peakmind.session';
const ready = () => !!(url && key);
const getS = () => { try { return JSON.parse(localStorage.getItem(SKEY)); } catch (e) { return null; } };
const setS = s => { try { if (s) localStorage.setItem(SKEY, JSON.stringify(s)); else localStorage.removeItem(SKEY); } catch (e) {  } };
async function call(path, body, tok) {
const r = await fetch(url + path, { method: 'POST', headers: { apikey: key, Authorization: `Bearer ${tok || key}`, 'Content-Type': 'application/json' }, body: JSON.stringify(body || {}) });
const txt = await r.text(); let data = null;
try { data = txt ? JSON.parse(txt) : null; } catch (e) { data = null; }
if (!r.ok) { const err = new Error((data && (data.message || data.msg || data.error_description || data.error)) || 'http_' + r.status); err.status = r.status; throw err; }
return data;
}
const keep = d => ({ access: d.access_token, refresh: d.refresh_token, exp: d.expires_at || Math.floor(Date.now() / 1000) + (d.expires_in || 3600) });
async function token() {
let s = getS();
if (s && s.access && s.exp - 60 > Date.now() / 1000) return s.access;
if (s && s.refresh) {
try { s = keep(await call('/auth/v1/token?grant_type=refresh_token', { refresh_token: s.refresh })); setS(s); return s.access; }
catch (e) { if (e.status && e.status < 500) setS(null); else throw e; }
}
s = keep(await call('/auth/v1/signup', { data: {} })); setS(s); return s.access;
}
const rpc = async (fn, args) => call('/rest/v1/rpc/' + fn, args || {}, await token());
const rpcAnon = (fn, args) => call('/rest/v1/rpc/' + fn, args || {});
return { ready, rpc, rpcAnon, forget: () => setS(null) };
})();
function netErr(e) {
const m = String((e && e.message) || '');
if (e instanceof TypeError || /Failed to fetch|NetworkError|Load failed/i.test(m)) return t('lg.err.offline');
const map = { pseudo_refused: 'lg.err.pseudo', pseudo_invalid: 'lg.err.pseudo', xp_invalid: 'lg.err.xp', code_not_found: 'lg.err.code', own_code: 'lg.err.own', too_many_friends: 'lg.err.full', not_joined: 'lg.err.generic' };
for (const k in map) if (m.includes(k)) return t(map[k]);
if (/anonymous/i.test(m)) return t('lg.err.anon');
return t('lg.err.generic');
}
const rankById = id => RANKS.find(r => r.id === id) || RANKS[0];
const cleanRow = r => ({
pos: Math.max(1, parseInt(r.pos, 10) || 1), pid: String(r.pid || ''), pseudo: String(r.pseudo || '?').slice(0, 20),
avatar: AVATARS.includes(r.avatar) ? r.avatar : 'initials', frame: FRAMES.includes(r.frame) ? r.frame : 'none',
rank: rankById(r.rank).id, level: Math.min(100, Math.max(1, parseInt(r.level, 10) || 1)),
xp: Math.max(0, parseInt(r.xp, 10) || 0), xp_week: Math.max(0, parseInt(r.xp_week, 10) || 0), me: !!r.me
});
async function leagueSync(force) {
const lg = league();
if (!NET.ready() || !lg.joined || creatorOn()) return false;
if (!force && Date.now() - (lg.lastSync || 0) < 60000) return false;
const st = ppStats();
const res = await NET.rpc('pm_sync', { p_pseudo: S.name, p_avatar: avatarOf(), p_frame: frameOf(), p_xp: st.total, p_xp_week: st.week, p_week: weekStart(), p_code: lg.code });
const row = Array.isArray(res) ? res[0] : res;
if (row && CODE_RE.test(row.code || '')) lg.code = row.code;
lg.lastSync = Date.now(); lg.err = ''; save();
return true;
}
let syncTimer = null;
function scheduleSync() {
if (!NET.ready() || !S.league || !S.league.joined) return;
clearTimeout(syncTimer);
syncTimer = setTimeout(() => leagueSync(true).catch(e => { league().err = netErr(e); save(); }), 2500);
}
const loading = {}, lastTry = {};
async function leagueLoad(scope, force) {
const lg = league();
if (loading[scope] || (!force && Date.now() - (lastTry[scope] || 0) < 30000)) return;
loading[scope] = true; lastTry[scope] = Date.now();
try {
await leagueSync(false);
const rows = await NET.rpc('pm_leaderboard', { p_scope: scope, p_limit: 50 });
lg.cache[scope] = { at: Date.now(), rows: (Array.isArray(rows) ? rows : []).map(cleanRow) }; lg.err = '';
} catch (e) { lg.err = netErr(e); }
loading[scope] = false; save();
if (S.tab === 'league' && (lg.scope || 'world') === scope) renderLeague();
}
async function copyText(txt) {
try { await navigator.clipboard.writeText(txt); return true; }
catch (e) {
const ta = document.createElement('textarea'); ta.value = txt; ta.setAttribute('readonly', ''); ta.style.cssText = 'position:fixed;opacity:0';
document.body.append(ta); ta.select(); let ok = false; try { ok = document.execCommand('copy'); } catch (err) { ok = false; } ta.remove(); return ok;
}
}
async function shareCode() {
const code = league().code, text = t('lg.share.text', { code });
if (navigator.share) { try { await navigator.share({ title: APP, text }); return; } catch (e) { if (e && e.name === 'AbortError') return; } }
if (await copyText(code)) { SFX.play('select'); toast(t('lg.copied')); }
}
const codeCard = (withAdd) => `<section class="card code-card"><span class="section-title" style="margin:0">${esc(t('lg.code'))}</span>
    <div class="code-row"><b class="fcode num">${esc(league().code)}</b><button type="button" class="btn subtle" data-copycode>${esc(t('lg.copy'))}</button><button type="button" class="btn" data-sharecode>${esc(t('lg.share'))}</button></div>
    <p class="muted" style="margin:0;font-size:.86rem">${esc(t(NET.ready() ? 'lg.code.d' : 'lg.code.soon'))}</p>
    ${withAdd ? `<button type="button" class="btn ghost block" data-gofriends>${esc(t('lg.add.t'))}</button>` : ''}</section>`;
function bindCode(root) {
root.querySelectorAll('[data-copycode]').forEach(b => b.onclick = async () => { if (await copyText(league().code)) { SFX.play('select'); toast(t('lg.copied')); } });
root.querySelectorAll('[data-sharecode]').forEach(b => b.onclick = shareCode);
root.querySelectorAll('[data-gofriends]').forEach(b => b.onclick = () => { const lg = league(); lg.scope = 'friends'; S.tab = 'league'; SFX.play('nav'); save(); render(); window.scrollTo(0, 0); });
}
const lbRow = (r, scope) => {
const rk = rankById(r.rank);
return `<button type="button" class="lb-row${r.me ? ' me' : ''}${r.pos <= 3 ? ' top' + r.pos : ''}" data-pid="${esc(r.pid)}">
      <span class="lb-pos num">${r.pos}</span>
      ${avatarHtml(`sm${r.frame === 'none' ? '' : ' frame-' + r.frame}`, r.avatar, '', null, r.pseudo)}
      <span class="lb-name"><b>${esc(r.pseudo)}${r.me ? ` <em>${esc(t('lg.you'))}</em>` : ''}</b><small>${rankEmblem(rk, 'xs')}${esc(L(rk, ''))} · ${esc(t('lvl.short', { n: r.level }))}</small></span>
      <span class="lb-xp num">${nf(scope === 'week' ? r.xp_week : r.xp)}<small>XP</small></span></button>`;
};
function renderLeague() {
const lg = league(), st = ppStats(), online = NET.ready();
const scopes = ['world', 'week', 'friends'], scope = scopes.includes(lg.scope) ? lg.scope : 'world';
const cache = lg.cache[scope], rows = cache ? cache.rows : null, mine = rows && rows.find(r => r.me);
let html = `<div class="page-head"><h2>${esc(t('tab.league'))}</h2>${online && lg.joined ? `<span class="live-dot">${esc(t('lg.live'))}</span>` : ''}</div>`;
html += `<section class="card lb-me">${rankEmblem(st.rank, 'md')}<div class="lvl-info"><b class="num">${esc(S.name || t('hello.anon'))}</b>
      <span class="rank-name">${esc(L(st.rank, ''))} · ${esc(t('lvl.short', { n: st.level }))}</span>
      <span class="muted num">${nf(st.total)} XP · ${esc(t('pp.week', { n: nf(st.week) }))}</span></div>
      <div class="lb-place"><b class="num">${online && lg.joined && mine ? '#' + mine.pos : '—'}</b><small>${esc(t('lg.' + scope))}</small></div></section>`;
if (!online) {
html += `<section class="card lb-soon"><span class="section-title" style="margin:0">${esc(t('lg.soon.t'))}</span><p style="margin:0">${esc(t('lg.soon.d'))}</p>
        <ul class="list-plain"><li>${esc(t('lg.f.world'))}</li><li>${esc(t('lg.f.week'))}</li><li>${esc(t('lg.f.friends'))}</li></ul></section>` + codeCard(false);
} else if (!lg.joined) {
html += `<section class="card lb-join"><span class="section-title" style="margin:0">${esc(t('lg.join.t'))}</span><p style="margin:0">${esc(t('lg.join.d'))}</p>
        <p class="muted" style="margin:0;font-size:.88rem">${esc(t('lg.pub'))}</p><p class="muted" style="margin:0;font-size:.88rem">${esc(t('lg.minor'))}</p>
        ${lg.err ? `<p class="lb-err" role="alert">${esc(lg.err)}</p>` : ''}
        <button type="button" class="btn block" id="lgJoin">${esc(t('lg.join.btn'))}</button></section>` + codeCard(false);
} else {
html += `<div class="seg seg-3" role="tablist" aria-label="${esc(t('tab.league'))}">${scopes.map(k => `<button type="button" role="tab" data-lgscope="${k}" aria-selected="${k === scope}">${esc(t('lg.' + k))}</button>`).join('')}</div>`;
if (scope === 'week') html += `<p class="lb-note">${esc(t('lg.week.reset'))}</p>`;
if (scope === 'friends') html += `<section class="card"><span class="section-title" style="margin:0">${esc(t('lg.add.t'))}</span>
          <form class="inline-form" id="lgAdd"><input id="lgCode" maxlength="11" autocapitalize="characters" autocomplete="off" spellcheck="false" placeholder="PM-XXXX-XXX" aria-label="${esc(t('lg.add.t'))}"><button class="btn" type="submit">${esc(t('lg.add.btn'))}</button></form>
          <p class="lb-err" id="lgAddErr" role="alert"></p></section>` + codeCard(false);
if (lg.err) html += `<p class="lb-err" role="alert">${esc(lg.err)}${rows ? ' · ' + esc(t('lg.cached')) : ''}</p>`;
if (!rows) html += `<p class="lb-note">${esc(t('lg.loading'))}</p>`;
else if (scope === 'friends' && rows.length <= 1) html += `<p class="lb-note">${esc(t('lg.friends.empty'))}</p>`;
if (rows && rows.length) {
let list = '', prev = 0;
for (const r of rows) { if (prev && r.pos > prev + 1) list += '<div class="lb-gap" aria-hidden="true">• • •</div>'; list += lbRow(r, scope); prev = r.pos; }
html += `<div class="lb">${list}</div>`;
}
html += `<button type="button" class="btn danger block" id="lgLeave">${esc(t('lg.leave'))}</button>`;
}
view.innerHTML = html;
bindCode(view);
if ($('#lgJoin')) $('#lgJoin').onclick = joinLeague;
if ($('#lgLeave')) $('#lgLeave').onclick = () => confirmBox(t('lg.leave.q'), t('lg.leave.ok'), leaveLeague);
view.querySelectorAll('[data-lgscope]').forEach(b => b.onclick = () => { lg.scope = b.dataset.lgscope; save(); renderLeague(); });
view.querySelectorAll('[data-pid]').forEach(b => b.onclick = () => { const r = (rows || []).find(x => x.pid === b.dataset.pid); if (r) openPlayer(r, scope); });
if ($('#lgAdd')) $('#lgAdd').onsubmit = e => { e.preventDefault(); addFriend($('#lgCode').value); };
if (online && lg.joined && (!cache || Date.now() - cache.at > 30000)) leagueLoad(scope);
}
async function joinLeague() {
const lg = league();
if (badPseudo(S.name) || !NAME_RE.test(S.name || '')) { lg.err = t('lg.err.pseudo'); SFX.play('error'); save(); renderLeague(); return; }
const btn = $('#lgJoin'); if (btn) { btn.disabled = true; btn.textContent = t('lg.loading'); }
lg.joined = true;
try { await leagueSync(true); SFX.play('rankUp'); toast(t('lg.joined')); lg.cache = {}; leagueLoad(lg.scope || 'world', true); }
catch (e) { lg.joined = false; lg.err = netErr(e); SFX.play('error'); }
save(); renderLeague();
}
async function leaveLeague() {
const lg = league();
try {
await NET.rpc('pm_leave', {});
NET.forget();
Object.assign(lg, { joined: false, cache: {}, lastSync: 0, err: '', code: newFriendCode() });
SFX.play('down'); toast(t('lg.left'));
} catch (e) { lg.err = netErr(e); SFX.play('error'); }
save(); render();
}
async function addFriend(raw) {
const code = String(raw || '').toUpperCase().replace(/\s+/g, '').replace(/^PM(?=[A-Z0-9]{4})/, 'PM-').replace(/^(PM-[A-Z0-9]{4})(?=[A-Z0-9]{3}$)/, '$1-');
const err = $('#lgAddErr');
if (!CODE_RE.test(code)) { if (err) err.textContent = t('lg.err.format'); SFX.play('error'); return; }
if (code === league().code) { if (err) err.textContent = t('lg.err.own'); SFX.play('error'); return; }
try {
const res = await NET.rpc('pm_add_friend', { p_code: code });
const name = String(((Array.isArray(res) ? res[0] : res) || {}).pseudo || '').slice(0, 20);
SFX.play('badge'); toast(t('lg.added', { name }));
delete league().cache.friends; save(); leagueLoad('friends', true); renderLeague();
} catch (e) { if (err) err.textContent = netErr(e); SFX.play('error'); }
}
function openPlayer(r, scope) {
const rk = rankById(r.rank);
openSheet(`<div class="summit-up">${avatarHtml(`huge${r.frame === 'none' ? '' : ' frame-' + r.frame}`, r.avatar, '', null, r.pseudo)}
      <h2 style="text-transform:none">${esc(r.pseudo)}</h2>
      <div class="rank-line">${rankEmblem(rk, 'sm')}<span class="lvl-pill num">${esc(t('lvl.n', { n: r.level }))} · ${esc(L(rk, ''))}</span></div>
      <p class="muted num" style="margin:0">#${r.pos} · ${nf(r.xp)} XP · ${esc(t('pp.week', { n: nf(r.xp_week) }))}</p></div>
      ${r.me ? '' : `<div class="grid-2">${scope === 'friends' ? `<button type="button" class="btn subtle" id="plUnfriend">${esc(t('lg.unfriend'))}</button>` : ''}<button type="button" class="btn danger${scope === 'friends' ? '' : ' block'}" id="plReport"${scope === 'friends' ? '' : ' style="grid-column:1/-1"'}>${esc(t('lg.report'))}</button></div>`}
      <button type="button" class="btn subtle block" id="plClose">${esc(t('close'))}</button>`, true);
$('#plClose').onclick = closeSheet;
if ($('#plReport')) $('#plReport').onclick = () => confirmBox(t('lg.report.q', { name: r.pseudo }), t('lg.report.ok'), async () => {
try { await NET.rpc('pm_report', { p_pid: r.pid }); toast(t('lg.reported')); } catch (e) { toast(netErr(e)); }
});
if ($('#plUnfriend')) $('#plUnfriend').onclick = () => confirmBox(t('lg.unfriend.q', { name: r.pseudo }), t('lg.unfriend'), async () => {
try { await NET.rpc('pm_remove_friend', { p_pid: r.pid }); delete league().cache.friends; save(); leagueLoad('friends', true); renderLeague(); } catch (e) { toast(netErr(e)); }
});
}
const STRIDE_KM = 0.00075;
const stepsToday = g => (g.steps || {})[today()] || 0;
const dailyOn = (g, k) => { let n = g.daily0 || g.daily; for (const c of g.dlog || []) if (c.d <= k) n = c.n; return n; };
const isKmGoal = g => g.type === 'target' && /^\s*km\s*$/i.test(g.unit || '');
function stepsStreak(g) {
let n = 0, d = new Date();
if (stepsToday(g) < g.daily) d = addDays(d, -1);
for (let i = 0; i < 1000; i++) { const k = dkey(d); if (k < g.created || ((g.steps || {})[k] || 0) < dailyOn(g, k)) break; n++; d = addDays(d, -1); }
return n;
}
const stepsBest = g => Math.max(0, ...Object.values(g.steps || {}));
function setSteps(g, n) { g.steps = g.steps || {}; g.steps[today()] = Math.max(0, Math.round(n)); markActivity(); save(); checkBadges(); }
let wakeLock = null;
async function keepAwake(on) {
try {
if (on && 'wakeLock' in navigator && !wakeLock) { wakeLock = await navigator.wakeLock.request('screen'); wakeLock.addEventListener('release', () => { wakeLock = null; }); }
else if (!on && wakeLock) { await wakeLock.release(); wakeLock = null; }
} catch (e) {  }
}
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible' && (Ped.on || (Run.on && !Run.paused))) keepAwake(true); });
function openStepSet(g) {
openSheet(`<div class="sheet-head"><h2>${esc(t('st.set.t'))}</h2><button type="button" class="icon-btn" id="closeSS" aria-label="${esc(t('close'))}">✕</button></div>
      <p class="muted" style="margin:0">${esc(t('st.set.d'))}</p>
      <form class="inline-form" id="ssForm"><input type="number" inputmode="numeric" min="0" max="200000" step="1" value="${stepsToday(g) || ''}" placeholder="${esc(t('st.set.ph'))}" aria-label="${esc(t('st.set.t'))}" required><button class="btn" type="submit">${esc(t('st.save'))}</button></form>`, true);
$('#closeSS').onclick = closeSheet;
$('#ssForm').onsubmit = e => {
e.preventDefault();
const v = parseInt($('#ssForm input').value, 10);
if (!Number.isFinite(v) || v < 0) return;
const before = ppStats().total;
setSteps(g, Math.min(v, 200000)); closeSheet(); render(); SFX.play('check');
rewardFeedback(before, v >= g.daily ? t('st.reached') : t('saved'));
};
}
const Ped = { on: false, n: 0, g: null, f: 9.81, avg: 9.81, up: false, last: 0, seen: false, before: 0 };
function pedSample(e) {
const a = e.accelerationIncludingGravity;
if (!a || a.x == null) return;
Ped.seen = true;
const m = Math.hypot(a.x, a.y, a.z), now = e.timeStamp || performance.now();
Ped.f = Ped.f * 0.5 + m * 0.5;
Ped.avg = Ped.avg * 0.97 + Ped.f * 0.03;
const d = Ped.f - Ped.avg;
if (!Ped.up && d > 1.1) { Ped.up = true; if (now - Ped.last > 280) { Ped.last = now; pedStep(); } }
else if (Ped.up && d < 0.1) Ped.up = false;
}
function pedStep() {
const g = Ped.g, k = today();
Ped.n++; g.steps = g.steps || {}; g.steps[k] = (g.steps[k] || 0) + 1;
if (g.steps[k] === g.daily) { markActivity(); save(); toast(t('st.reached')); SFX.play('badge'); }
if (Ped.n % 10 === 0) save();
pedDraw();
}
function pedDraw() {
const g = Ped.g, n = stepsToday(g);
if (!$('#pedN')) return;
$('#pedN').textContent = nf(Ped.n);
$('#pedToday').textContent = t('ped.today', { n: nf(n), goal: nf(g.daily) });
$('#pedBar').style.width = (Math.min(1, n / g.daily) * 100).toFixed(1) + '%';
$('#pedGo').textContent = t(Ped.on ? 'ped.stop' : 'ped.start');
$('#pedGo').classList.toggle('subtle', Ped.on);
}
async function pedStart() {
const msg = $('#pedMsg');
if (typeof DeviceMotionEvent === 'undefined') { msg.textContent = t('ped.nosensor'); return; }
try {
if (typeof DeviceMotionEvent.requestPermission === 'function' && await DeviceMotionEvent.requestPermission() !== 'granted') { msg.textContent = t('ped.denied'); return; }
} catch (e) { msg.textContent = t('ped.denied'); return; }
Object.assign(Ped, { on: true, seen: false, up: false, f: 9.81, avg: 9.81 });
window.addEventListener('devicemotion', pedSample);
keepAwake(true); msg.textContent = t('ped.on'); pedDraw(); SFX.play('start');
setTimeout(() => { if (Ped.on && !Ped.seen) { pedStop(); if ($('#pedMsg')) $('#pedMsg').textContent = t('ped.nosensor'); } }, 2500);
}
function pedStop() {
if (!Ped.on) return;
Ped.on = false; window.removeEventListener('devicemotion', pedSample);
keepAwake(false); if (Ped.n) markActivity(); save(); checkBadges(); pedDraw();
}
function openPedometer(g) {
Object.assign(Ped, { g, n: 0, before: ppStats().total });
openSheet(`<div class="sheet-head"><h2>${esc(t('ped.title'))}</h2><button type="button" class="icon-btn" id="closeP" aria-label="${esc(t('close'))}">✕</button></div>
      <div class="card live-card"><div class="live-num num" id="pedN" aria-live="polite">0</div><div class="muted">${esc(t('ped.session'))}</div>
        <div class="bar"><i id="pedBar"></i></div><div class="num" id="pedToday"></div></div>
      <p class="muted" id="pedMsg" role="status" style="margin:0">${esc(t('ped.hint'))}</p>
      <button type="button" class="btn block" id="pedGo"></button>`);
pedDraw();
$('#closeP').onclick = closeSheet;
$('#pedGo').onclick = () => { if (Ped.on) { pedStop(); SFX.play('pause'); } else pedStart(); };
onSheetClose = () => { pedStop(); render(); rewardFeedback(Ped.before, Ped.n ? t('ped.done', { n: nf(Ped.n) }) : ''); };
}
const Run = { on: false, paused: false, km: 0, ms: 0, t0: 0, last: null, fix: null, watch: null, timer: null, goals: [], hit: null };
function haversineKm(a, b) {
const r = Math.PI / 180, dLat = (b.lat - a.lat) * r, dLon = (b.lon - a.lon) * r;
const x = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * r) * Math.cos(b.lat * r) * Math.sin(dLon / 2) ** 2;
return 2 * 6371 * Math.asin(Math.sqrt(x));
}
const runMs = () => Run.ms + (Run.on && !Run.paused ? Date.now() - Run.t0 : 0);
const km2 = v => Number(v).toLocaleString(S.lang === 'fr' ? 'fr-FR' : 'en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const fmtDur = ms => { const s = Math.floor(ms / 1000), h = Math.floor(s / 3600), m = Math.floor(s / 60) % 60, ss = String(s % 60).padStart(2, '0'); return h ? `${h}:${String(m).padStart(2, '0')}:${ss}` : `${m}:${ss}`; };
const fmtPace = (ms, km) => { if (km < 0.05) return '–'; const s = Math.round(ms / 1000 / km); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; };
function runPos(p) {
const c = p.coords; Run.fix = c.accuracy;
if (Run.on && !Run.paused && c.accuracy <= 35) {
const pt = { lat: c.latitude, lon: c.longitude, t: p.timestamp || Date.now() };
if (!Run.last) Run.last = pt;
else {
const d = haversineKm(Run.last, pt), dt = (pt.t - Run.last.t) / 1000;
if (dt > 0 && d * 1000 / dt > 12) Run.last = pt;
else if (d >= 0.004) { Run.km += d; Run.last = pt; }
}
}
runDraw();
}
function runErr(e) { const el = $('#rGps'); if (el) el.textContent = t(e && e.code === 1 ? 'run.denied' : 'run.wait'); }
function runDraw() {
if (!$('#rKm')) return;
const ms = runMs();
$('#rKm').textContent = km2(Run.km);
$('#rTime').textContent = fmtDur(ms);
$('#rPace').textContent = fmtPace(ms, Run.km);
if (Run.fix != null) $('#rGps').textContent = Run.fix <= 35 ? t('run.gps', { n: Math.round(Run.fix) }) : t('run.weak', { n: Math.round(Run.fix) });
$('#rGps').classList.toggle('ok', Run.fix != null && Run.fix <= 35);
$('#rGoals').innerHTML = Run.goals.map(g => { const p = Math.min(1, Run.km / g.target);
return `<div class="run-goal"><div class="row between"><span>${esc(g.emoji)} ${esc(g.title)}</span><b class="num">${km2(Run.km)} / ${nf(g.target, 1)} km</b></div><div class="bar${p >= 1 ? ' good' : ''}"><i style="width:${(p * 100).toFixed(1)}%"></i></div></div>`; }).join('');
for (const g of Run.goals) if (Run.km >= g.target && !Run.hit.has(g.id)) { Run.hit.add(g.id); toast(t('run.reached', { title: g.title })); SFX.play('badge'); }
const btns = !Run.on
? `<button type="button" class="btn block" id="rGo">${esc(t('run.go'))}</button>`
: `<button type="button" class="btn subtle" id="rPause">${esc(t(Run.paused ? 'run.resume' : 'run.pause'))}</button><button type="button" class="btn" id="rEnd">${esc(t('run.finish'))}</button>`;
const box = $('#rBtns');
if (box.dataset.state !== `${Run.on}${Run.paused}`) {
box.dataset.state = `${Run.on}${Run.paused}`; box.innerHTML = btns; box.classList.toggle('grid-2', Run.on);
if ($('#rGo')) $('#rGo').onclick = () => { Object.assign(Run, { on: true, paused: false, t0: Date.now(), last: null }); sheetLock = true; $('#closeR').hidden = true; keepAwake(true); SFX.play('start'); runDraw(); };
if ($('#rPause')) $('#rPause').onclick = () => {
if (Run.paused) { Run.paused = false; Run.t0 = Date.now(); Run.last = null; keepAwake(true); SFX.play('start'); }
else { Run.ms += Date.now() - Run.t0; Run.paused = true; SFX.play('pause'); }
runDraw();
};
if ($('#rEnd')) $('#rEnd').onclick = runFinish;
}
}
function runCleanup() {
if (Run.watch != null) navigator.geolocation.clearWatch(Run.watch);
clearInterval(Run.timer); Run.watch = null; Run.timer = null; sheetLock = false; keepAwake(false);
}
function openRun() {
if (!('geolocation' in navigator)) { toast(t('run.nogps')); return; }
Object.assign(Run, { on: false, paused: false, km: 0, ms: 0, t0: 0, last: null, fix: null, hit: new Set(), goals: S.goals.filter(isKmGoal) });
openSheet(`<div class="sheet-head"><h2>${esc(t('run.title'))}</h2><button type="button" class="icon-btn" id="closeR" aria-label="${esc(t('close'))}">✕</button></div>
      <div class="card live-card"><div class="live-num num" id="rKm">0</div><div class="muted">km</div>
        <div class="grid-2 run-stats"><div><b class="num" id="rTime">0:00</b><span class="muted">${esc(t('run.time'))}</span></div><div><b class="num" id="rPace">–</b><span class="muted">${esc(t('run.pace'))} /km</span></div></div></div>
      <div id="rGoals" class="stack"></div>
      <p class="gps" id="rGps" role="status">${esc(t('run.wait'))}</p>
      <div id="rBtns"></div>
      <p class="muted" style="margin:0;font-size:.88rem">${esc(t('run.hint'))}</p>`);
$('#closeR').onclick = closeSheet;
onSheetClose = runCleanup;
Run.watch = navigator.geolocation.watchPosition(runPos, runErr, { enableHighAccuracy: true, maximumAge: 0, timeout: 30000 });
Run.timer = setInterval(runDraw, 1000);
runDraw();
}
function runFinish() {
if (!Run.paused) Run.ms += Date.now() - Run.t0;
Run.on = false; Run.paused = false;
sheetLock = false; SFX.play('finish');
const km = Math.round(Run.km * 100) / 100, ms = Run.ms, goals = Run.goals;
if (km < 0.05) {
openSheet(`<p style="margin:4px 0 0">${esc(t('run.short'))}</p><button type="button" class="btn block" id="rOk">${esc(t('close'))}</button>`, true);
$('#rOk').onclick = closeSheet; return;
}
openSheet(`<div class="summit-up"><span class="eyebrow-up">${esc(t('run.done'))}</span><div class="live-num num">${km2(km)} <small>km</small></div>
      <div class="grid-2 run-stats" style="width:100%"><div><b class="num">${fmtDur(ms)}</b><span class="muted">${esc(t('run.time'))}</span></div><div><b class="num">${fmtPace(ms, km)}</b><span class="muted">${esc(t('run.pace'))} /km</span></div></div></div>
      ${goals.length ? `<div class="field">${esc(t('run.link'))}<small>${esc(t('run.link.d'))}</small><div class="chips">${goals.map(g => `<button type="button" class="chip" data-rg="${g.id}" aria-pressed="true">${esc(g.emoji)} ${esc(g.title)}</button>`).join('')}</div></div>` : ''}
      <div class="grid-2"><button type="button" class="btn subtle" id="rDrop">${esc(t('run.discard'))}</button><button type="button" class="btn" id="rSave">${esc(t('run.save'))}</button></div>`, true);
sheet.querySelectorAll('[data-rg]').forEach(b => b.onclick = () => b.setAttribute('aria-pressed', String(b.getAttribute('aria-pressed') !== 'true')));
$('#rDrop').onclick = e => { const b = e.currentTarget; if (b.dataset.sure) { closeSheet(); return; } b.dataset.sure = '1'; b.textContent = t('run.discard.sure'); b.className = 'btn danger'; };
$('#rSave').onclick = () => {
const before = ppStats().total, linked = [...sheet.querySelectorAll('[data-rg][aria-pressed="true"]')].map(b => byId(b.dataset.rg)).filter(Boolean);
S.runs = (S.runs || []).concat({ d: today(), km, sec: Math.round(ms / 1000) }).slice(-300);
for (const g of linked) if (km > current(g)) addEntry(g, km);
markActivity(); save(); checkBadges(); closeSheet(); render();
rewardFeedback(before, t('run.saved', { km: nf(km, 2) }));
};
}
const PP = { habit: 10, entry: 10, clean: 5, steps: 10, run: 10, log: 5, wish: 10, lesson: 15, badge: 50, cap: 100 };
const MAX_LVL = 100;
const xpForLevel = n => Math.round(100 * (n - 1) + 2.5 * (n - 1) ** 2);
const levelOf = xp => { let n = 1; while (n < MAX_LVL && xp >= xpForLevel(n + 1)) n++; return n; };
const RANKS = [
{ lvl: 1, id: 'iron', fr: 'Fer', en: 'Iron', c: ['#4a525e', '#a4adb9'] },
{ lvl: 10, id: 'bronze', fr: 'Bronze', en: 'Bronze', c: ['#6e3f17', '#e4a96b'] },
{ lvl: 20, id: 'silver', fr: 'Argent', en: 'Silver', c: ['#6f7886', '#f4f7fb'] },
{ lvl: 30, id: 'gold', fr: 'Or', en: 'Gold', c: ['#9a6c05', '#ffe28a'] },
{ lvl: 40, id: 'platinum', fr: 'Platine', en: 'Platinum', c: ['#2f7a75', '#c9f5ee'] },
{ lvl: 50, id: 'emerald', fr: 'Émeraude', en: 'Emerald', c: ['#0b5e3c', '#6ee8a8'] },
{ lvl: 60, id: 'diamond', fr: 'Diamant', en: 'Diamond', c: ['#3a64c8', '#c4e6ff'] },
{ lvl: 70, id: 'master', fr: 'Maître', en: 'Master', c: ['#4e2490', '#d9b8ff'] },
{ lvl: 80, id: 'grandmaster', fr: 'Grand Maître', en: 'Grandmaster', c: ['#7a1626', '#ff9a9a'] },
{ lvl: 90, id: 'champion', fr: 'Champion', en: 'Champion', c: ['#a86a00', '#fff0b0'] },
{ lvl: 100, id: 'legend', fr: 'Légende', en: 'Legend', c: ['#ffd36b', '#ff7b54', '#a98bf0', '#5cb6ff'] }
];
const rankOf = lvl => RANKS.filter(r => r.lvl <= lvl).pop();
const nextRank = lvl => RANKS.find(r => r.lvl > lvl);
const FRAME_X = [
{ id: 'ice', lvl: 5, fr: 'Givre', en: 'Frost' }, { id: 'sakura', lvl: 12, fr: 'Sakura', en: 'Sakura' }, { id: 'neon', lvl: 15, fr: 'Néon', en: 'Neon' },
{ id: 'ember', lvl: 25, fr: 'Braise', en: 'Ember' }, { id: 'circuit', lvl: 35, fr: 'Circuit', en: 'Circuit' }, { id: 'aurora', lvl: 45, fr: 'Aurore', en: 'Aurora' },
{ id: 'royal', lvl: 65, fr: 'Royal', en: 'Royal' }, { id: 'cosmic', lvl: 85, fr: 'Cosmique', en: 'Cosmic' }
];
const FRAMES = ['none', ...[...RANKS.slice(1), ...FRAME_X].sort((a, b) => a.lvl - b.lvl).map(r => r.id)];
const THEMES = [
{ id: 'glacier', lvl: 1, fr: 'Glacier', en: 'Glacier', mode: 'dark', bg: '#0c1018', s1: '#151b26', s2: '#1c2433', line: '#263043', ink: '#eef2f8', muted: '#98a3b6', a: '#5cb6ff', a2: '#a98bf0', h1: '#0a1222', h2: '#0e1c36' },
{ id: 'holo', lvl: 1, fr: 'Hologramme', en: 'Hologram', mode: 'dark', fx: 'holo', bg: '#04050d', s1: '#0a0c1c', s2: '#11142a', line: '#1f2442', ink: '#eef3ff', muted: '#8f97c0', a: '#00e5ff', a2: '#b44bff', h1: '#050716', h2: '#160f42' },
{ id: 'snow', lvl: 1, fr: 'Neige', en: 'Snow', mode: 'light', bg: '#f2f5fa', s1: '#ffffff', s2: '#eef2f8', line: '#dbe2ec', ink: '#111722', muted: '#5b6577', a: '#1f6fe0', a2: '#6a3fc1', h1: '#13305f', h2: '#1f4f9a' },
{ id: 'forest', lvl: 3, fr: 'Forêt', en: 'Forest', mode: 'dark', bg: '#0b120e', s1: '#131d17', s2: '#1a271f', line: '#24352a', ink: '#edf5ef', muted: '#93a89a', a: '#5fd08a', a2: '#c3e06b', h1: '#0a1a10', h2: '#123020' },
{ id: 'dusk', lvl: 5, fr: 'Crépuscule', en: 'Dusk', mode: 'dark', bg: '#120e18', s1: '#1b1524', s2: '#241c30', line: '#33283f', ink: '#f3eef8', muted: '#a89cb6', a: '#ff9f6b', a2: '#c77dff', h1: '#1c0f24', h2: '#3a1838' },
{ id: 'ocean', lvl: 8, fr: 'Océan', en: 'Ocean', mode: 'dark', bg: '#08121a', s1: '#0f1c26', s2: '#152532', line: '#1e3242', ink: '#eaf4f8', muted: '#8fa8b6', a: '#3fd0e0', a2: '#4c8dff', h1: '#061826', h2: '#0b2f44' },
{ id: 'desert', lvl: 12, fr: 'Désert', en: 'Desert', mode: 'light', bg: '#f6f0e6', s1: '#fffaf2', s2: '#f0e7d8', line: '#e2d5bf', ink: '#2a2116', muted: '#7a6a55', a: '#c2571e', a2: '#a8790a', h1: '#4a2a12', h2: '#8a4a1c' },
{ id: 'emerald', lvl: 15, fr: 'Émeraude', en: 'Emerald', mode: 'dark', bg: '#08130f', s1: '#0f1e18', s2: '#152a21', line: '#1e3a2e', ink: '#eaf6f0', muted: '#8fb0a2', a: '#4cd2a0', a2: '#4cc6cc', h1: '#06190f', h2: '#0d3a2a' },
{ id: 'amethyst', lvl: 18, fr: 'Améthyste', en: 'Amethyst', mode: 'dark', bg: '#100c1a', s1: '#181327', s2: '#211a34', line: '#2f2648', ink: '#f1edf9', muted: '#a49bbd', a: '#a98bf0', a2: '#f06292', h1: '#150c2a', h2: '#2e1658' },
{ id: 'ember', lvl: 22, fr: 'Braise', en: 'Ember', mode: 'dark', bg: '#140c0b', s1: '#1f1412', s2: '#2a1b18', line: '#3b2622', ink: '#f8efed', muted: '#b39a95', a: '#ff6b6b', a2: '#ff9f43', h1: '#200b0a', h2: '#4a1510' },
{ id: 'sakura', lvl: 26, fr: 'Sakura', en: 'Sakura', mode: 'light', bg: '#fbf1f4', s1: '#ffffff', s2: '#f8e6ec', line: '#efd2dc', ink: '#2a1520', muted: '#806170', a: '#d6457a', a2: '#8a5cd6', h1: '#4a1830', h2: '#8a2f58' },
{ id: 'gold', lvl: 30, fr: 'Or', en: 'Gold', mode: 'dark', bg: '#0f0d08', s1: '#1a1710', s2: '#242016', line: '#362f1f', ink: '#f8f3e6', muted: '#b0a68c', a: '#ffc35c', a2: '#ff9f43', h1: '#1a1408', h2: '#3a2a0c' },
{ id: 'aurora', lvl: 35, fr: 'Aurore boréale', en: 'Northern lights', mode: 'dark', bg: '#071214', s1: '#0e1d20', s2: '#14282c', line: '#1d3a3e', ink: '#e9f8f5', muted: '#8db3ad', a: '#7cf2d4', a2: '#c38bff', h1: '#04161a', h2: '#10283e' },
{ id: 'midnight', lvl: 40, fr: 'Minuit', en: 'Midnight', mode: 'dark', bg: '#05070d', s1: '#0c1019', s2: '#121826', line: '#1b2335', ink: '#e6ecf8', muted: '#8a95ab', a: '#4de1ff', a2: '#6f7bff', h1: '#03050c', h2: '#0c1430' },
{ id: 'mist', lvl: 45, fr: 'Brume', en: 'Mist', mode: 'light', bg: '#eef1f4', s1: '#fbfcfd', s2: '#e6eaef', line: '#d3dae2', ink: '#1a2029', muted: '#5f6a78', a: '#3f6f8f', a2: '#6c7fa8', h1: '#2a3a4a', h2: '#4a627a' },
{ id: 'volcano', lvl: 50, fr: 'Volcan', en: 'Volcano', mode: 'dark', bg: '#0d0908', s1: '#181110', s2: '#221816', line: '#33221f', ink: '#f6ece9', muted: '#a8948f', a: '#ff5a2a', a2: '#ffb02e', h1: '#1a0806', h2: '#3d0f08' },
{ id: 'arctic', lvl: 60, fr: 'Arctique', en: 'Arctic', mode: 'light', bg: '#eef8fb', s1: '#ffffff', s2: '#e2f1f6', line: '#cde5ee', ink: '#0f2230', muted: '#557080', a: '#0a8fb8', a2: '#3b6fd8', h1: '#0b3550', h2: '#11618a' },
{ id: 'neon', lvl: 70, fr: 'Néon', en: 'Neon', mode: 'dark', bg: '#08070f', s1: '#110f1d', s2: '#18152a', line: '#26213f', ink: '#f1efff', muted: '#9d97c0', a: '#ff3fbf', a2: '#3ff0ff', h1: '#0d0620', h2: '#2a0a3a' },
{ id: 'cosmos', lvl: 80, fr: 'Cosmos', en: 'Cosmos', mode: 'dark', bg: '#090818', s1: '#120f28', s2: '#1a1636', line: '#29234d', ink: '#efedff', muted: '#9e98c8', a: '#8f7bff', a2: '#ff7bd5', h1: '#0a0624', h2: '#1f0f4a' },
{ id: 'obsidian', lvl: 90, fr: 'Obsidienne', en: 'Obsidian', mode: 'dark', bg: '#050505', s1: '#0f0f10', s2: '#18181a', line: '#26262a', ink: '#f2f2f4', muted: '#9a9aa2', a: '#d9dde4', a2: '#8f98a8', h1: '#0a0a0b', h2: '#1c1c20' },
{ id: 'legend', lvl: 100, fr: 'Légende', en: 'Legend', mode: 'dark', bg: '#0a0806', s1: '#15110c', s2: '#1e1810', line: '#3a2e18', ink: '#fbf5e6', muted: '#b8a988', a: '#ffd36b', a2: '#ff7b54', h1: '#140e05', h2: '#3a2608' },
{ id: 'storm', lvl: 10, fr: 'Orage', en: 'Storm', mode: 'dark', bg: '#0a0d14', s1: '#121826', s2: '#19202f', line: '#252e42', ink: '#edf1f8', muted: '#94a0b6', a: '#ffd84d', a2: '#5c8dff', h1: '#0b0f1c', h2: '#1a2340' },
{ id: 'jungle', lvl: 20, fr: 'Jungle', en: 'Jungle', mode: 'dark', bg: '#07110a', s1: '#0f1c13', s2: '#15271b', line: '#1f3826', ink: '#ecf7ee', muted: '#8fae96', a: '#a6e22e', a2: '#2ed37c', h1: '#06150b', h2: '#0f3318' },
{ id: 'coral', lvl: 28, fr: 'Corail', en: 'Coral', mode: 'dark', bg: '#071313', s1: '#0e1f1f', s2: '#142a2a', line: '#1d3b3b', ink: '#eaf7f6', muted: '#8fb2b0', a: '#ff7f6b', a2: '#3fd0c0', h1: '#051a1a', h2: '#0c3434' },
{ id: 'sunset', lvl: 33, fr: 'Coucher de soleil', en: 'Sunset', mode: 'dark', bg: '#140b12', s1: '#1f121c', s2: '#2a1826', line: '#3b2335', ink: '#fbeff6', muted: '#b89aae', a: '#ff8a4c', a2: '#ff4f9a', h1: '#22091a', h2: '#4a1430' },
{ id: 'terminal', lvl: 38, fr: 'Terminal', en: 'Terminal', mode: 'dark', bg: '#030805', s1: '#08120c', s2: '#0d1a12', line: '#16301f', ink: '#d8ffe6', muted: '#7fae90', a: '#00ff88', a2: '#00c2ff', h1: '#020a05', h2: '#06261a' },
{ id: 'lavender', lvl: 42, fr: 'Lavande', en: 'Lavender', mode: 'light', bg: '#f5f2fb', s1: '#ffffff', s2: '#efe9f9', line: '#ddd3ef', ink: '#1d1730', muted: '#6b6185', a: '#7b4fd6', a2: '#d6457a', h1: '#2e1a5c', h2: '#5a3aa0' },
{ id: 'ruby', lvl: 55, fr: 'Rubis', en: 'Ruby', mode: 'dark', bg: '#12070b', s1: '#1d0d13', s2: '#28121b', line: '#3a1a27', ink: '#fbeef2', muted: '#b8939f', a: '#ff3d6e', a2: '#ffb3c6', h1: '#1e060e', h2: '#4a0c22' },
{ id: 'cyber', lvl: 65, fr: 'Cyber', en: 'Cyber', mode: 'dark', fx: 'holo', bg: '#07040d', s1: '#100a1c', s2: '#170f29', line: '#2a1b45', ink: '#f5efff', muted: '#a497c4', a: '#f9f871', a2: '#ff2bd6', h1: '#0c0518', h2: '#2a0a40' },
{ id: 'abyss', lvl: 75, fr: 'Abysses', en: 'Abyss', mode: 'dark', bg: '#02060c', s1: '#071222', s2: '#0b1a30', line: '#13294a', ink: '#e3f1ff', muted: '#84a0c0', a: '#00d1ff', a2: '#0066ff', h1: '#010812', h2: '#04204a' },
{ id: 'phoenix', lvl: 85, fr: 'Phénix', en: 'Phoenix', mode: 'dark', bg: '#0f0705', s1: '#1a0d09', s2: '#25130d', line: '#3a1d12', ink: '#fff2e8', muted: '#c09a86', a: '#ff7a1a', a2: '#ffd36b', h1: '#1a0703', h2: '#4a1606' },
{ id: 'eclipse', lvl: 95, fr: 'Éclipse', en: 'Eclipse', mode: 'dark', bg: '#040404', s1: '#0d0c0a', s2: '#161410', line: '#29251c', ink: '#f7f2e6', muted: '#a39b88', a: '#fff4d6', a2: '#ffb347', h1: '#070604', h2: '#201a0e' }
].sort((a, b) => a.lvl - b.lvl);
const AV_LVL = { flame: 2, rocket: 3, dumbbell: 4, heart: 5, shield: 6, moon: 7, compass: 9, kettlebell: 11, sword: 13, trend: 14, wave: 16, book: 17,
leaf: 20, diamond: 24, controller: 27, crown: 33, headphones: 36, planet: 44, summit: 55, atom: 60, star: 75, infinity: 90 };
const REWARDS = [
...Object.entries(AV_LVL).map(([id, lvl]) => ({ kind: 'avatar', id, lvl })),
...RANKS.slice(1).map(r => ({ kind: 'frame', id: r.id, lvl: r.lvl })),
...FRAME_X.map(f => ({ kind: 'frame', id: f.id, lvl: f.lvl })),
...THEMES.filter(th => th.lvl > 1).map(th => ({ kind: 'theme', id: th.id, lvl: th.lvl }))
].sort((a, b) => a.lvl - b.lvl);
const reqLevel = (kind, id) => (REWARDS.find(r => r.kind === kind && r.id === id) || { lvl: 1 }).lvl;
const isUnlocked = (kind, id, lvl) => creatorAll() || (lvl ?? ppStats().level) >= reqLevel(kind, id);
const byLvl = (kind, list, id = x => x) => list.slice().sort((a, b) => reqLevel(kind, id(a)) - reqLevel(kind, id(b)));
const frameName = id => id === 'none' ? t('fm.none') : L(RANKS.find(r => r.id === id) || FRAME_X.find(f => f.id === id) || RANKS[0], '');
const themeName = id => L(THEMES.find(th => th.id === id) || THEMES[0], '');
const rewardName = r => `${t('rw.' + r.kind)} · ${r.kind === 'avatar' ? t('av.' + r.id) : r.kind === 'frame' ? frameName(r.id) : themeName(r.id)}`;
const themeOf = () => { const th = THEMES.find(x => x.id === S.skin); return th && isUnlocked('theme', th.id) ? th : THEMES[0]; };
let emblemSeq = 0;
function rankEmblem(r, cls = '') {
const i = RANKS.indexOf(r), id = 'rk' + (++emblemSeq), cols = r.c.length === 2 ? [r.c[1], r.c[0]] : r.c;
const stops = cols.map((c, k) => `<stop offset="${k / (cols.length - 1)}" stop-color="${c}"/>`).join('');
const shield = 'M24 8l14 5v10c0 9.6-6 16.5-14 20.6C16 39.5 10 32.6 10 23V13z';
return `<svg class="emblem ${cls}" viewBox="0 0 48 48" role="img" aria-label="${esc(L(r, ''))}"><defs><linearGradient id="${id}" x1="0" y1="0" x2=".35" y2="1">${stops}</linearGradient></defs>`
+ (i >= 6 ? `<path d="M10 16L2.5 13.5l2.6 7.2-2.8 1.8 6 5.2M38 16l7.5-2.5-2.6 7.2 2.8 1.8-6 5.2" fill="url(#${id})" stroke="rgba(255,255,255,.4)" stroke-width=".8" stroke-linejoin="round"/>` : '')
+ `<path d="${shield}" fill="url(#${id})" stroke="rgba(255,255,255,.5)" stroke-width="1.2" stroke-linejoin="round"/>`
+ `<path d="M24 8v35.6C16 39.5 10 32.6 10 23V13z" fill="#000" opacity=".13"/>`
+ `<path d="M16.5 33l6-9.5 3.6 5.4 2.6-3.6 5.3 7.7z" fill="#fff" opacity=".93"/>`
+ (i >= 3 ? '<path d="M24 14.2l.85 2.23 2.38.12-1.85 1.5.62 2.3L24 19.05l-2 1.3.62-2.3-1.85-1.5 2.38-.12z" fill="#fff" opacity=".95"/>' : '')
+ (i >= 9 ? `<path d="M17.5 7.5l3 2.2L24 4.5l3.5 5.2 3-2.2-1.2 5.2H18.7z" fill="${i === 10 ? '#ffd36b' : '#fff0b0'}" stroke="rgba(0,0,0,.25)" stroke-width=".6" stroke-linejoin="round"/>` : '')
+ '</svg>';
}
const themePreview = (th, cls = '') => `<span class="th-prev ${cls}${th.fx ? ' ' + th.fx : ''}" style="background:linear-gradient(180deg, ${th.h2}, ${th.bg} 90%)"><svg viewBox="0 0 60 34" preserveAspectRatio="none" aria-hidden="true"><path d="M0 34L17 13l8 9 11-15 24 27z" fill="${th.a}" opacity=".85"/><path d="M0 34l11-8 9 5 12-9 13 8 15-6v10z" fill="${th.s1}"/></svg><i style="background:linear-gradient(90deg, ${th.a}, ${th.a2})"></i></span>`;
const weekStart = () => { const d = new Date(); d.setDate(d.getDate() - (d.getDay() + 6) % 7); return dkey(d); };
function ppByDay() {
const act = {}, add = (k, n) => { act[k] = (act[k] || 0) + n; }, tk = today();
for (const g of S.goals) {
if (g.type === 'habit') {
for (const k in g.checks) if (g.checks[k] && k >= g.created && k <= tk) add(k, PP.habit);
} else if (g.type === 'quit') {
const slips = new Set((g.relapseLog || []).map(iso => dkey(new Date(iso))));
const startDay = dkey(new Date(g.startSince || g.since));
for (let d = parseKey(g.created > startDay ? g.created : startDay); dkey(d) < tk; d = addDays(d, 1)) if (!slips.has(dkey(d))) add(dkey(d), PP.clean);
} else if (g.type === 'steps') {
for (const k in g.steps || {}) if (g.steps[k] >= dailyOn(g, k) && k >= g.created && k <= tk) add(k, PP.steps);
} else if (g.type === 'save') {
for (const k of new Set((g.dep || []).filter(e => e.a > 0).map(e => e.d))) if (k >= g.created && k <= tk) add(k, PP.entry);
} else {
for (const e of g.entries || []) if (e.d >= g.created && e.d <= tk) add(e.d, PP.entry);
}
}
const m = mon();
for (const k of moneyLogDays()) if (k <= tk) add(k, PP.log);
for (const w of m.wish) if (w.st === 'skip' && w.ripe && w.at && w.at <= tk) add(w.at, PP.wish);
for (const id in m.lessons) if (m.lessons[id] <= tk) add(m.lessons[id], PP.lesson);
for (const k of new Set((S.runs || []).filter(r => r.km >= 1).map(r => r.d))) if (k <= tk) add(k, PP.run);
const qq = S.quests || {};
for (const k in qq.log || {}) {
if (k > tk) continue;
const e = qq.log[k], x = (e.d || []).reduce((s, d) => s + (d.xp || 0), 0) + (e.b || 0);
if (x > 0) add(k, x);
}
for (const dg of S.dg || []) for (const f of dg.floors || []) if (f.done && f.done <= tk) add(f.done, f.xp || 0);
const days = {};
for (const k in act) days[k] = Math.min(PP.cap, act[k]);
for (const b of BADGES) { const k = S.badges[b.id]; if (k) days[k] = (days[k] || 0) + PP.badge; }
for (const k of Object.values(qq.wdone || {})) if (k <= tk) days[k] = (days[k] || 0) + QXP.week;
for (const dg of S.dg || []) if (dg.cleared && dg.cleared <= tk) days[dg.cleared] = (days[dg.cleared] || 0) + DG.clear;
return days;
}
function ppStats() { return memoGet('pp', ppCompute); }
function ppCompute() {
const days = ppByDay(), ws = weekStart();
let total = 0, week = 0;
for (const k in days) { total += days[k]; if (k >= ws) week += days[k]; }
const level = levelOf(total), max = level >= MAX_LVL, from = xpForLevel(level), to = max ? from : xpForLevel(level + 1);
return { total, week, days, level, from, to, max, rank: rankOf(level),
p: max ? 1 : (total - from) / (to - from),
next: max ? t('lvl.max') : t('lvl.next', { n: nf(to - total), l: level + 1 }) };
}
let lastPt = null;
document.addEventListener('pointerdown', e => { lastPt = { x: e.clientX, y: e.clientY, t: Date.now() }; }, true);
function floatXP(n) {
if (!(n > 0) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
const p = lastPt && Date.now() - lastPt.t < 4000 ? lastPt : { x: innerWidth / 2, y: 120 };
const el = document.createElement('span'); el.className = 'xp-float num'; el.textContent = `+${nf(n)} XP`;
el.style.left = Math.max(40, Math.min(innerWidth - 40, p.x)) + 'px'; el.style.top = Math.max(60, p.y - 24) + 'px';
document.body.appendChild(el); setTimeout(() => el.remove(), 1300);
}
const buzz = pattern => { if (S.sound !== false && navigator.vibrate && (!navigator.userActivation || navigator.userActivation.hasBeenActive)) { try { navigator.vibrate(pattern); } catch (e) {  } } };
function rewardFeedback(before, msg) {
const st = ppStats(), delta = st.total - before, parts = [];
if (delta > 0) { parts.push(`+${nf(delta)} XP`); SFX.play('xp'); floatXP(delta); }
if (delta) scheduleSync();
if (msg) parts.push(msg);
if (parts.length) toast(parts.join(' · '));
checkLevelUp(st, 600);
}
function checkLevelUp(st = ppStats(), delay = 0) {
checkSummit(st);
if (S.levelSeen == null) { S.levelSeen = st.level; save(); return; }
if (S.onboarded && st.level > S.levelSeen) {
const from = S.levelSeen; S.levelSeen = st.level; save();
setTimeout(() => celebrateLevel(from, st.level), delay);
}
}
const nextRankLine = lvl => { const nr = nextRank(lvl); return nr ? t('lvl.nextRank', { name: L(nr, ''), l: nr.lvl }) : t('lvl.maxRank'); };
function climbCard() {
const st = ppStats(), next = REWARDS.find(r => r.lvl > st.level);
return `<button type="button" class="card climb" id="climbCard">
      <div class="row between"><span class="section-title" style="margin:0">${esc(t('lvl.title'))}</span><span class="pp-week num">${esc(t('pp.week', { n: nf(st.week) }))}</span></div>
      <div class="lvl-row">${rankEmblem(st.rank, 'md')}<div class="lvl-info"><b class="num">${esc(t('lvl.n', { n: st.level }))}</b><span class="rank-name">${esc(L(st.rank, ''))}</span><span class="muted num">${st.max ? esc(t('lvl.total', { n: nf(st.total) })) : `${nf(st.total)} / ${nf(st.to)} XP`}</span></div></div>
      <div class="bar"><i style="width:${(st.p * 100).toFixed(1)}%"></i></div>
      <span class="muted climb-next">${esc(st.next)}${next ? ' · ' + esc(t('lvl.nextReward', { l: next.lvl, name: rewardName(next) })) : ''}</span>
      <span class="muted climb-next">${rankEmblem(nextRank(st.level) || st.rank, 'xs')} ${esc(nextRankLine(st.level))}</span>
      ${(() => { const alt = altOf(st.total), nx = SUMMITS[summitsReached(alt)]; return `<span class="muted climb-next">⛰️ <b class="num" style="color:var(--ink)">${nf(alt)} m</b> · ${nx ? esc(t('as.nextShort', { name: L(nx, ''), a: nf(nx.a) })) : esc(t('as.top'))}</span>`; })()}
    </button>`;
}
function rewardPreview(r, cls = 'sm') {
if (r.kind === 'avatar') return `<span class="avatar ${cls}" style="background:${avatarBg(r.id)}">${avatarInner(r.id, S.name)}</span>`;
if (r.kind === 'frame') return avatarHtml(`${cls}${r.id === 'none' ? '' : ' frame-' + r.id}`, avatarOf(), S.photo, null, S.name);
return themePreview(THEMES.find(th => th.id === r.id) || THEMES[0], cls);
}
function openClimb() {
const st = ppStats(), wd = t('wd'), bars = [];
let max = 20;
for (let i = 6; i >= 0; i--) { const d = addDays(new Date(), -i), v = st.days[dkey(d)] || 0; bars.push({ v, wd: wd[d.getDay()], now: i === 0 }); max = Math.max(max, v); }
const W = 320, H = 130, bw = 30, gap = (W - 7 * bw) / 6;
const chart = bars.map((b, i) => {
const h = Math.round(b.v / max * (H - 40)), x = i * (bw + gap);
return `<rect x="${x}" y="${H - 20 - Math.max(h, 3)}" width="${bw}" height="${Math.max(h, 3)}" rx="7" fill="${b.now ? 'var(--accent)' : 'var(--accent-2)'}" opacity="${b.v ? 1 : .25}"/>`
+ `<text x="${x + bw / 2}" y="${H - 5}" text-anchor="middle">${b.wd}</text>`
+ (b.v ? `<text x="${x + bw / 2}" y="${H - 26 - h}" text-anchor="middle">${b.v}</text>` : '');
}).join('');
const ladder = RANKS.map(r => { const got = st.level >= r.lvl;
return `<div class="ladder-row${got ? ' done' : ''}${r === st.rank ? ' cur' : ''}">${rankEmblem(r, 'sm' + (got ? '' : ' dim'))}<b>${esc(L(r, ''))}</b><span class="num muted">${got ? '✓ ' : ''}${esc(t('lvl.short', { n: r.lvl }))}</span></div>`; }).reverse().join('');
openSheet(`<div class="sheet-head"><h2>${esc(t('lvl.sheet'))}</h2><button type="button" class="icon-btn" id="closeC" aria-label="${esc(t('close'))}">✕</button></div>
      <div class="card climb-hero">${rankEmblem(st.rank, 'lg')}<div class="lvl-info"><b class="num">${esc(t('lvl.n', { n: st.level }))}</b><span class="rank-name">${esc(L(st.rank, ''))}</span><span class="muted num">${esc(t('lvl.total', { n: nf(st.total) }))}</span></div>
        <div class="bar"><i style="width:${(st.p * 100).toFixed(1)}%"></i></div><p class="muted num" style="margin:0">${esc(st.next)}${st.max ? '' : `<br>${esc(nextRankLine(st.level))}`}</p></div>
      <div class="card"><span class="section-title" style="margin:0">${esc(t('pp.last7'))}</span><svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(t('pp.last7'))}">${chart}</svg></div>
      <div class="card"><span class="section-title" style="margin:0">${esc(t('lvl.ranks'))}</span><p class="muted" style="margin:0">${esc(t('lvl.ranks.d'))}</p><div class="ladder">${ladder}</div></div>
      <div class="card"><span class="section-title" style="margin:0">${esc(t('pp.how'))}</span><ul class="list-plain">
        <li>${esc(t('pp.r.habit', { n: PP.habit }))}</li><li>${esc(t('pp.r.entry', { n: PP.entry }))}</li><li>${esc(t('pp.r.clean', { n: PP.clean }))}</li>
        <li>${esc(t('pp.r.steps', { n: PP.steps }))}</li><li>${esc(t('pp.r.run', { n: PP.run }))}</li>
        <li>${esc(t('pp.r.badge', { n: PP.badge }))}</li><li>${esc(t('pp.r.cap', { n: PP.cap }))}</li></ul></div>`);
$('#closeC').onclick = closeSheet;
}
function levelFx(from, to, newRank, done) {
if (matchMedia('(prefers-reduced-motion: reduce)').matches) { done(true); return; }
const fx = document.createElement('div'); fx.className = 'lvlfx' + (newRank ? ' rank' : '');
fx.setAttribute('role', 'dialog'); fx.setAttribute('aria-label', t(newRank ? 'lvl.rankUp' : 'lvl.up'));
let sparks = ''; for (let i = 0; i < 26; i++) sparks += `<i style="--a:${(i / 26 * 360 + Math.random() * 10).toFixed(0)}deg;--d:${(120 + Math.random() * 130).toFixed(0)}px;--s:${(.6 + Math.random() * .8).toFixed(2)};--t:${(.7 + Math.random() * .6).toFixed(2)}s"></i>`;
const title = t(newRank ? 'lvl.rankUp' : 'lvl.up').replace(/\s*!$/, '');
fx.innerHTML = `<div class="lf-bg"></div><div class="lf-beam"></div><div class="lf-grid"></div>
      <div class="lf-core"><svg class="lf-ring" viewBox="0 0 200 200" aria-hidden="true"><circle class="lf-track" cx="100" cy="100" r="88"/><circle class="lf-fill" cx="100" cy="100" r="88" pathLength="1"/></svg>
        <div class="lf-dash"></div><div class="lf-flash"></div><span class="lf-num num">${from}</span><div class="lf-emb">${newRank ? rankEmblem(newRank, 'xl') : ''}</div></div>
      <div class="lf-waves"><i></i><i></i><i></i></div><div class="lf-sparks">${sparks}</div>
      <p class="lf-title" aria-live="polite"></p><p class="lf-sub">${esc(newRank ? L(newRank, '') + ' · ' + t('lvl.n', { n: to }) : t('lvl.n', { n: to }) + ' · ' + L(rankOf(to), ''))}</p>
      <p class="lf-skip">${esc(t('lf.skip'))}</p>`;
document.body.append(fx);
const timers = [], at = (ms, f) => timers.push(setTimeout(f, ms));
let over = false;
const end = () => { if (over) return; over = true; timers.forEach(clearTimeout); fx.classList.add('out'); setTimeout(() => fx.remove(), 380); done(false); };
fx.onclick = end;
SFX.play('charge'); buzz(12);
const num = fx.querySelector('.lf-num'), GLY = '0123456789#%&?!';
if (to - from > 1) for (let k = 1; k < to - from; k++) at(200 + k * 800 / (to - from), () => { num.textContent = from + k; });
at(1050, () => {
fx.classList.add('hit'); SFX.play(newRank ? 'rankUp' : 'levelUp'); buzz(newRank ? [40, 70, 40, 70, 120] : [30, 60, 50]);
let n = 0; const scr = setInterval(() => { num.textContent = n++ < 6 ? GLY[Math.floor(Math.random() * GLY.length)] + GLY[Math.floor(Math.random() * GLY.length)] : String(to); if (n > 6) clearInterval(scr); }, 40);
timers.push(scr);
});
at(1250, () => {
const el = fx.querySelector('.lf-title'), L2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&'; let i = 0;
const dec = setInterval(() => { i++; el.textContent = [...title].map((c, k) => k < i / 2 || c === ' ' ? c : L2[Math.floor(Math.random() * L2.length)]).join('').toUpperCase(); if (i / 2 > title.length) clearInterval(dec); }, 28);
timers.push(dec);
});
at(newRank ? 3200 : 2700, end);
}
function celebrateLevel(from, to) {
const newRank = rankOf(to) !== rankOf(from) ? rankOf(to) : null;
levelFx(from, to, newRank, plain => levelSheet(from, to, newRank, plain));
}
Object.assign(T.fr, { 'lf.skip': 'Touche pour continuer' });
Object.assign(T.en, { 'lf.skip': 'Tap to continue' });
function levelSheet(from, to, newRank, plain) {
const unlocked = REWARDS.filter(r => r.lvl > from && r.lvl <= to);
openSheet(`<div class="summit-up">${newRank ? rankEmblem(newRank, 'xl pop') : `<span class="lvl-num big num">${to}</span>`}
      <span class="eyebrow-up">${esc(t(newRank ? 'lvl.rankUp' : 'lvl.up'))}</span><h2>${esc(newRank ? L(newRank, '') : t('lvl.n', { n: to }))}</h2>
      ${newRank ? `<p class="lvl-rankup">${esc(t('lvl.n', { n: to }))} · ${esc(nextRankLine(to))}</p>` : ''}
      ${unlocked.length ? `<div class="unlock-list"><span class="section-title" style="margin:0">${esc(t('lvl.unlocked'))}</span>${unlocked.map(r => `<div class="unlock-item">${rewardPreview(r)}<b>${esc(rewardName(r))}</b></div>`).join('')}</div>` : ''}
      <div class="lvl-actions">${unlocked.length ? `<button type="button" class="btn subtle" id="lvlSee">${esc(t('lvl.see'))}</button>` : ''}<button type="button" class="btn" id="sumOk">${esc(t('pp.continue'))}</button></div>
      ${newRank ? `<button type="button" class="btn ghost block" id="lvlShare">📤 ${esc(t('pc.shareRank'))}</button>` : ''}</div>`, true);
if ($('#lvlShare')) $('#lvlShare').onclick = () => openPlayerCard();
if (plain) { SFX.play(newRank ? 'rankUp' : 'levelUp'); buzz(newRank ? [40, 70, 40, 70, 120] : [30, 60, 50]); }
$('#sumOk').onclick = closeSheet;
if ($('#lvlSee')) $('#lvlSee').onclick = () => { closeSheet(); S.tab = 'profile'; S.profTab = { avatar: 'avatars', frame: 'frames', theme: 'themes' }[unlocked[unlocked.length - 1].kind]; save(); render(); window.scrollTo(0, 0); };
burstConfetti($('#fxConfetti'));
}
function chartSvg(g) {
const W = 340, H = 180, Lm = 38, R = 12, Tm = 14, B = 24;
const pts = (!g.entries.length || g.entries[0].d > g.created) ? [{ d: g.created, v: g.start }].concat(g.entries) : g.entries.slice();
const end = [g.deadline, ...pts.map(p => p.d)].sort().pop();
const span = Math.max(1, daysBetween(g.created, end));
const vals = pts.map(p => p.v).concat([g.start, g.target]);
let lo = Math.min(...vals), hi = Math.max(...vals); if (lo === hi) { hi += 1; lo -= 1; }
const pad = (hi - lo) * 0.1; lo -= pad; hi += pad;
const x = k => Lm + (daysBetween(g.created, k) / span) * (W - Lm - R), y = v => Tm + (1 - (v - lo) / (hi - lo)) * (H - Tm - B);
let s = '';
for (let i = 0; i <= 3; i++) { const v = lo + (hi - lo) * i / 3; s += `<line x1="${Lm}" x2="${W - R}" y1="${y(v)}" y2="${y(v)}" stroke="var(--line)"/><text x="${Lm - 6}" y="${y(v) + 4}" text-anchor="end">${nf(v, Math.abs(hi - lo) < 10 ? 1 : 0)}</text>`; }
s += `<text x="${Lm}" y="${H - 6}">${esc(fmtDate(g.created))}</text><text x="${W - R}" y="${H - 6}" text-anchor="end">${esc(fmtDate(end))}</text>`;
s += `<line x1="${x(g.created)}" y1="${y(g.start)}" x2="${x(g.deadline)}" y2="${y(g.target)}" stroke="var(--muted)" stroke-width="2" stroke-dasharray="5 5"/>`;
const poly = pts.map(p => `${x(p.d).toFixed(1)},${y(p.v).toFixed(1)}`).join(' ');
if (pts.length > 1) s += `<polygon points="${poly} ${x(pts[pts.length - 1].d).toFixed(1)},${H - B} ${x(pts[0].d).toFixed(1)},${H - B}" fill="var(--accent)" opacity=".15"/><polyline points="${poly}" fill="none" stroke="var(--accent)" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>`;
pts.forEach((p, i) => { s += `<circle cx="${x(p.d)}" cy="${y(p.v)}" r="${i === pts.length - 1 ? 5.5 : 3.5}" fill="var(--accent)" stroke="var(--bg)" stroke-width="2"/>`; });
return `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(t('d.progress'))}">${s}</svg>
      <div class="row muted" style="font-size:.85rem"><span><b style="color:var(--accent)">━</b> ${esc(t('legend.you'))}</span><span>┄ ${esc(t('legend.ideal'))}</span></div>`;
}
function openDetail(id) {
const g = byId(id); if (!g) return;
let body = '';
if (g.why) body += `<div class="card" style="gap:4px"><span class="section-title" style="margin:0">${esc(t('d.why'))}</span><p style="margin:0;font-style:italic">« ${esc(g.why)} »</p></div>`;
if (g.type === 'habit') {
const wd = t('wd'); let grid = '<div class="week" style="gap:6px">';
for (let i = 34; i >= 0; i--) {
const d = addDays(new Date(), -i), k = dkey(d), planned = g.days.includes(d.getDay());
grid += `<span>${i >= 28 ? wd[d.getDay()] : ''}<button type="button" data-day="${k}" class="dayb" aria-pressed="${!!g.checks[k]}" aria-label="${esc(fmtDate(k))}" style="all:unset;cursor:pointer"><i class="${g.checks[k] ? 'on' : ''}${planned ? '' : ' off'}${i === 0 ? ' today' : ''}" style="width:30px;height:30px"></i></button></span>`;
}
grid += '</div>';
body += `<div class="card"><div class="row between"><div><div class="big-num num flame">${IC.flame}${habitStreak(g)}</div><div class="muted">${esc(t('card.streak', { n: habitStreak(g) }))} · ${esc(t('card.best', { n: habitBest(g) }))}</div></div>
        <button type="button" class="check${g.checks[today()] ? ' on' : ''}" data-check="${g.id}" aria-pressed="${!!g.checks[today()]}" aria-label="${esc(g.title)}">${checkSvg}</button></div>
        <p class="muted" style="margin:0">${esc(t('d.rate', { p: habitRate(g) }))}</p>${grid}<p class="muted" style="margin:0;font-size:.85rem">${esc(t('d.tapdays'))}</p></div>`;
} else if (g.type === 'quit') {
const ms = quitMs(g);
body += `<div class="card" style="text-align:center"><div class="big-num num" style="font-size:3.2rem" data-since="${g.id}">${esc(t('quit.days', { d: Math.floor(ms / 86400000), h: Math.floor(ms / 3600000) % 24 }))}</div><div class="muted">${esc(t('quit.since'))}</div>
        <div class="grid-2"><div><b class="big-num num" style="font-size:1.6rem">${Math.floor(quitBest(g) / 86400000)} ${S.lang === 'fr' ? 'j' : 'd'}</b><div class="muted">${esc(t('quit.best'))}</div></div><div><b class="big-num num" style="font-size:1.6rem">${g.relapses || 0}</b><div class="muted">${esc(t('quit.restarts'))}</div></div></div>
        <button type="button" class="btn subtle block" data-relapse="${g.id}">${esc(t('quit.relapse'))}</button></div>`;
} else if (g.type === 'steps') {
const n = stepsToday(g), p = Math.min(1, n / g.daily), wd = t('wd'), W = 320, H = 140, bw = 30, gap = (W - 7 * bw) / 6, bars = [];
let max = g.daily * 1.15;
for (let i = 6; i >= 0; i--) { const d = addDays(new Date(), -i), v = (g.steps || {})[dkey(d)] || 0; bars.push({ v, k: dkey(d), wd: wd[d.getDay()] }); max = Math.max(max, v); }
const yOf = v => H - 20 - Math.round(v / max * (H - 34));
const chart = bars.map((b, i) => { const x = i * (bw + gap), y = Math.min(yOf(b.v), H - 23);
return `<rect x="${x}" y="${y}" width="${bw}" height="${H - 20 - y}" rx="7" fill="${b.v >= dailyOn(g, b.k) ? 'var(--good)' : 'var(--accent)'}" opacity="${b.v ? 1 : .25}"/><text x="${x + bw / 2}" y="${H - 5}" text-anchor="middle">${b.wd}</text>`; }).join('')
+ `<line x1="0" x2="${W}" y1="${yOf(g.daily)}" y2="${yOf(g.daily)}" stroke="var(--muted)" stroke-dasharray="5 5"/>`;
body += `<div class="card"><div class="row between"><span class="big-num num">${nf(n)}<small class="muted" style="font-size:1rem"> / ${nf(g.daily)} ${esc(t('st.unit'))}</small></span><span class="flame num">${IC.flame}${stepsStreak(g)}</span></div>
        <div class="bar${n >= g.daily ? ' good' : ''}"><i style="width:${(p * 100).toFixed(1)}%"></i></div>
        <p class="muted" style="margin:0">${esc(t('st.km', { n: nf(n * STRIDE_KM, 1) }))} · ${esc(t('st.streak', { n: stepsStreak(g) }))} · ${esc(t('st.best', { n: nf(stepsBest(g)) }))}</p>
        ${raiseHtml(g)}
        <div class="grid-2"><button type="button" class="btn" data-ped="${g.id}">${IC.steps}${esc(t('st.live'))}</button><button type="button" class="btn subtle" data-stepset="${g.id}">${IC.edit}${esc(t('st.set'))}</button></div></div>
        <div class="card"><span class="section-title" style="margin:0">${esc(t('st.week'))}</span><svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(t('st.week'))}">${chart}</svg></div>`;
} else if (g.type === 'save') {
const tot = saveTotal(g), p = pct(g), deps = (g.dep || []).map((e, i) => ({ e, i })).reverse();
body += `<div class="card save-detail"><div class="row between" style="align-items:flex-end"><div><span class="big-num num">${esc(money(tot))}</span><div class="muted num">/ ${esc(money(g.target))} · ${Math.round(p * 100)} %</div></div>${saveMtn(p, 'lg')}</div>
        <div class="bar${p >= 1 ? ' good' : ''}"><i style="width:${(p * 100).toFixed(1)}%"></i></div>
        ${saveEtaHtml(g)}
        <form class="dep-form" id="depForm"><input type="number" min="0" step="any" inputmode="decimal" placeholder="${esc(t('dep.amount', { c: cur() }))}" aria-label="${esc(t('dep.amount', { c: cur() }))}" required>
          <div class="grid-2"><button class="btn" type="submit">＋ ${esc(t('dep.add'))}</button><button class="btn subtle" type="button" id="depTake">− ${esc(t('dep.take'))}</button></div></form></div>`;
if (deps.length) body += `<div class="card"><span class="section-title" style="margin:0">${esc(t('d.history'))}</span><div class="history">${deps.slice(0, 20).map(({ e, i }) => `<div><span>${esc(fmtDate(e.d))}${e.n ? ' · ' + esc(e.n) : ''}</span><span class="row" style="gap:10px"><b class="num ${e.a < 0 ? 'neg' : 'pos'}">${e.a < 0 ? '−' : '+'}${esc(money(Math.abs(e.a)))}</b><button type="button" class="tx-del" data-depdel="${i}" aria-label="${esc(t('v.del'))}">✕</button></span></div>`).join('')}</div></div>`;
} else {
const unit = g.type === 'tiktok' ? (S.lang === 'fr' ? 'abonnés' : 'followers') : g.unit;
const left = daysBetween(today(), g.deadline);
body += `<div class="card"><div class="row between"><span class="big-num num">${nf(current(g), 1)}<small class="muted" style="font-size:1rem"> / ${nf(g.target, 1)} ${esc(unit)}</small></span><b class="num" style="color:var(--accent)">${Math.round(pct(g) * 100)} %</b></div>
        <div class="bar"><i style="width:${(pct(g) * 100).toFixed(1)}%"></i></div>
        ${raiseHtml(g)}
        <p class="muted" style="margin:0">${esc(left >= 0 ? t('d.deadline', { n: left, date: fmtDate(g.deadline) }) : t('d.late', { date: fmtDate(g.deadline) }))}${left >= 0 && pct(g) < 1 ? ' · ' + esc(t('d.pace', { v: nf(idealAt(g, today()), 1), unit })) : ''}</p>
        ${chartSvg(g)}
        ${isKmGoal(g) ? `<button type="button" class="btn ghost block" data-run>${IC.run}${esc(t('run.start'))}</button>` : ''}
        <form class="inline-form" data-entry="${g.id}"><input type="number" inputmode="decimal" step="any" placeholder="${esc(t('card.value'))}" aria-label="${esc(t('card.value'))}" required><button class="btn" type="submit">${esc(t('card.add'))}</button></form></div>`;
if (g.type === 'tiktok') body += `<div class="card"><p class="muted" style="margin:0">${esc(t('d.tiktok.note'))}</p>${g.handle ? `<a class="btn ghost block" style="text-align:center;text-decoration:none" href="https://www.tiktok.com/@${encodeURIComponent(g.handle)}" target="_blank" rel="noopener">${esc(t('d.open', { h: g.handle }))}</a>` : ''}</div>`;
if (g.entries.length) body += `<div class="card"><span class="section-title" style="margin:0">${esc(t('d.history'))}</span><div class="history">${g.entries.map((e, i) => ({ e, i })).reverse().slice(0, 12).map(({ e, i }) => `<div><span>${esc(fmtDate(e.d))}</span><span class="row" style="gap:10px"><b class="num">${nf(e.v, 1)} ${esc(unit)}</b><button type="button" class="tx-del" data-entdel="${i}" aria-label="${esc(t('ed.ent.del'))}">✕</button></span></div>`).join('')}</div></div>`;
}
body += `<button type="button" class="btn danger" id="delGoal">${esc(t('d.delete'))}</button>`;
openSheet(`<div class="sheet-head"><div class="emoji">${esc(g.emoji)}</div><h2 style="text-transform:none">${esc(g.title)}</h2><button type="button" class="icon-btn" id="editD" aria-label="${esc(t('ed.btn'))}" title="${esc(t('ed.btn'))}">${IC.edit}</button><button type="button" class="icon-btn" id="closeD" aria-label="${esc(t('close'))}">✕</button></div><div>${typeTag(g)}</div>${body}`);
$('#closeD').onclick = closeSheet;
$('#editD').onclick = () => { SFX.play('select'); openEdit(g.id); };
sheet.querySelectorAll('[data-entdel]').forEach(b => b.onclick = () => delEntry(g, +b.dataset.entdel));
$('#delGoal').onclick = () => confirmBox(t('d.delete.q', { name: g.title }), t('d.delete.ok'), () => { S.goals = S.goals.filter(x => x.id !== g.id); SFX.play('down'); save(); render(); });
const toggleIn = k => { const before = ppStats().total; toggleHabit(g, k); render(); openDetail(g.id); rewardFeedback(before, ''); };
sheet.querySelectorAll('.dayb').forEach(b => b.onclick = () => toggleIn(b.dataset.day));
sheet.querySelectorAll('[data-check]').forEach(b => b.onclick = () => toggleIn(today()));
sheet.querySelectorAll('[data-relapse]').forEach(b => b.onclick = () => relapse(g));
sheet.querySelectorAll('[data-ped]').forEach(b => b.onclick = () => openPedometer(g));
sheet.querySelectorAll('[data-stepset]').forEach(b => b.onclick = () => openStepSet(g));
sheet.querySelectorAll('[data-run]').forEach(b => b.onclick = openRun);
const df = $('#depForm');
const depGo = sign => {
const v = parseFloat(df.querySelector('input').value.replace(',', '.'));
if (!Number.isFinite(v) || v <= 0) { SFX.play('error'); df.querySelector('input').focus(); return; }
if (sign < 0 && v > saveTotal(g)) { SFX.play('error'); toast(t('dep.tooMuch')); return; }
saveMove(g, sign * v); render(); openDetail(g.id);
};
if (df) { df.onsubmit = e => { e.preventDefault(); depGo(1); }; $('#depTake').onclick = () => depGo(-1); }
sheet.querySelectorAll('[data-depdel]').forEach(b => b.onclick = () => confirmBox(t('dep.del.q'), t('v.del'), () => { g.dep.splice(+b.dataset.depdel, 1); save(); SFX.play('down'); render(); openDetail(g.id); }));
sheet.querySelectorAll('[data-entry]').forEach(f => f.onsubmit = e => {
e.preventDefault(); const v = parseFloat(f.querySelector('input').value.replace(',', '.'));
if (!Number.isFinite(v)) return;
const before = ppStats().total; addEntry(g, v); render(); openDetail(g.id); rewardFeedback(before, t('saved'));
});
}
function openNew() {
const types = ['target', 'habit', 'steps', 'quit', 'save', 'tiktok'], ico = { target: '🎯', habit: '✅', steps: '👟', quit: '🛑', save: '🐷', tiktok: '🎵' };
openSheet(`<div class="sheet-head"><h2>${esc(t('new.title'))}</h2><button type="button" class="icon-btn" id="closeN" aria-label="${esc(t('close'))}">✕</button></div>
      <div class="types">${types.map(ty => `<button type="button" class="type" data-type="${ty}"><div class="emoji">${ico[ty]}</div><div><b>${esc(t('type.' + ty))}</b><small>${esc(t('type.' + ty + '.d'))}</small></div></button>`).join('')}</div>`);
$('#closeN').onclick = closeSheet;
sheet.querySelectorAll('[data-type]').forEach(b => b.onclick = () => pickTemplate(b.dataset.type));
}
function pickTemplate(type) {
const list = TEMPLATES[type];
if (type === 'tiktok') return goalForm(type, list[0]);
openSheet(`<div class="sheet-head"><button type="button" class="icon-btn" id="backN" aria-label="${esc(t('f.back'))}">←</button><h2>${esc(t('new.pick'))}</h2></div>
      <div class="types">${list.map((tp, i) => `<button type="button" class="type" data-tpl="${i}"><div class="emoji">${tp.e}</div><div><b style="text-transform:none">${esc(L(tp, ''))}</b></div></button>`).join('')}
      <button type="button" class="type" data-tpl="-1"><div class="emoji">✏️</div><div><b>${esc(t('new.custom'))}</b><small>${esc(t('new.custom.d'))}</small></div></button></div>`);
$('#backN').onclick = openNew;
sheet.querySelectorAll('[data-tpl]').forEach(b => b.onclick = () => goalForm(type, b.dataset.tpl === '-1' ? null : list[+b.dataset.tpl]));
}
function goalForm(type, tp) {
const weeks = tp && tp.weeks ? tp.weeks : 12;
const dl = dkey(addDays(new Date(), weeks * 7));
const nowLocal = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 16);
const days = tp && tp.days ? tp.days : [0, 1, 2, 3, 4, 5, 6];
const emoji = tp ? tp.e : '🎯';
const wd = t('wd'), order = [1, 2, 3, 4, 5, 6, 0];
let fields = `<label class="field" for="fTitle">${esc(t('f.title'))}<input id="fTitle" maxlength="60" value="${esc(tp ? L(tp, '') : '')}" required></label>
      <div class="field">${esc(t('f.emoji'))}<div class="chips" id="fEmoji">${EMOJIS.map(e => `<button type="button" class="chip" data-emoji="${e}" aria-pressed="${e === emoji}">${e}</button>`).join('')}</div></div>`;
if (type === 'target') fields += `<div class="grid-2"><label class="field" for="fStart">${esc(t('f.start'))}<input id="fStart" type="number" step="any" inputmode="decimal" value="${tp ? tp.start : ''}"></label><label class="field" for="fTarget">${esc(t('f.target'))}<input id="fTarget" type="number" step="any" inputmode="decimal" value="${tp ? tp.target : ''}"></label></div>
      <div class="grid-2"><label class="field" for="fUnit">${esc(t('f.unit'))}<input id="fUnit" maxlength="14" value="${esc(tp ? L(tp, 'u') : t('unit.default'))}"></label><label class="field" for="fDeadline">${esc(t('f.deadline'))}<input id="fDeadline" type="date" value="${dl}" min="${dkey(addDays(new Date(), 1))}"></label></div>`;
if (type === 'tiktok') fields += `<label class="field" for="fHandle">${esc(t('f.handle'))}<input id="fHandle" maxlength="30" placeholder="peakwinner" autocapitalize="off" spellcheck="false"></label>
      <div class="grid-2"><label class="field" for="fStart">${esc(t('f.followers'))}<input id="fStart" type="number" min="0" inputmode="numeric" value="${tp.start}"></label><label class="field" for="fTarget">${esc(t('f.goalFollowers'))}<input id="fTarget" type="number" min="1" inputmode="numeric" value="${tp.target}"></label></div>
      <label class="field" for="fDeadline">${esc(t('f.deadline'))}<input id="fDeadline" type="date" value="${dl}" min="${dkey(addDays(new Date(), 1))}"></label>`;
if (type === 'habit') fields += `<div class="field">${esc(t('f.days'))}<div class="chips days" id="fDays">${order.map(d => `<button type="button" class="chip" data-day="${d}" aria-pressed="${days.includes(d)}">${wd[d]}</button>`).join('')}</div></div>`;
if (type === 'steps') fields += `<label class="field" for="fDaily">${esc(t('f.daily'))}<input id="fDaily" type="number" min="100" max="100000" step="500" inputmode="numeric" value="${tp && tp.daily ? tp.daily : 8000}"></label>`;
if (type === 'quit') fields += `<label class="field" for="fSince">${esc(t('f.since'))}<input id="fSince" type="datetime-local" value="${nowLocal}" max="${nowLocal}"></label>`;
if (type === 'save') fields += `<div class="grid-2"><label class="field" for="fTarget">${esc(t('f.price', { c: cur() }))}<input id="fTarget" type="number" min="1" step="any" inputmode="decimal" value="${tp ? tp.target : ''}"></label><label class="field" for="fHave">${esc(t('f.have', { c: cur() }))}<input id="fHave" type="number" min="0" step="any" inputmode="decimal" value="0"></label></div>
      <label class="field" for="fPlan">${esc(t('f.plan', { c: cur() }))}<input id="fPlan" type="number" min="0" step="any" inputmode="decimal" value="${tp && tp.plan ? tp.plan : 5}"><small class="muted" id="fEta"></small></label>`;
fields += `<label class="field" for="fWhy">${esc(t('f.why'))}<input id="fWhy" maxlength="120" placeholder="${esc(t('f.why.ph'))}"></label>
      <p class="muted" id="fErr" role="alert" style="margin:0;color:var(--bad)"></p>
      <button type="button" class="btn block" id="fCreate">${esc(t('f.create'))}</button>`;
openSheet(`<div class="sheet-head"><button type="button" class="icon-btn" id="backF" aria-label="${esc(t('f.back'))}">←</button><h2>${esc(t('type.' + type))}</h2></div>${fields}`);
$('#backF').onclick = () => type === 'tiktok' ? openNew() : pickTemplate(type);
sheet.querySelectorAll('[data-emoji]').forEach(b => b.onclick = () => sheet.querySelectorAll('[data-emoji]').forEach(x => x.setAttribute('aria-pressed', String(x === b))));
sheet.querySelectorAll('#fDays [data-day]').forEach(b => b.onclick = () => b.setAttribute('aria-pressed', String(b.getAttribute('aria-pressed') !== 'true')));
const num = id => { const el = $(id); return el ? parseFloat(String(el.value).replace(',', '.')) : NaN; };
const etaLive = () => {
const el = $('#fEta'); if (!el) return;
const tg = num('#fTarget'), have = num('#fHave') || 0, plan = num('#fPlan');
if (!(tg > 0)) { el.textContent = ''; return; }
if (have >= tg) { el.textContent = t('f.eta.now'); return; }
el.textContent = plan > 0 ? t('f.eta', { w: nf(Math.ceil((tg - have) / plan)), date: fmtDateY(dkey(addDays(new Date(), Math.ceil((tg - have) / plan * 7)))) }) : '';
};
['#fTarget', '#fHave', '#fPlan'].forEach(id => { const el = $(id); if (el) el.oninput = etaLive; });
etaLive();
$('#fCreate').onclick = () => {
const title = $('#fTitle').value.trim(), err = $('#fErr');
if (!title) { err.textContent = t('f.required'); SFX.play('error'); $('#fTitle').focus(); return; }
const g = { id: uid(), type, title, emoji: (sheet.querySelector('[data-emoji][aria-pressed="true"]') || {}).dataset?.emoji || '🎯', why: $('#fWhy').value.trim(), created: today() };
if (type === 'target' || type === 'tiktok') {
const st = parseFloat(String($('#fStart').value).replace(',', '.')), tg = parseFloat(String($('#fTarget').value).replace(',', '.'));
if (!Number.isFinite(st) || !Number.isFinite(tg) || st === tg) { err.textContent = t('f.numbers'); SFX.play('error'); return; }
Object.assign(g, { start: st, target: tg, deadline: $('#fDeadline').value || dl, entries: [] });
if (type === 'target') g.unit = $('#fUnit').value.trim() || t('unit.default');
else g.handle = $('#fHandle').value.trim().replace(/^@/, '').replace(/[^\w.]/g, '');
}
if (type === 'habit') { g.days = [...sheet.querySelectorAll('#fDays [aria-pressed="true"]')].map(b => +b.dataset.day); if (!g.days.length) g.days = [0, 1, 2, 3, 4, 5, 6]; g.checks = {}; }
if (type === 'steps') {
const d = parseInt($('#fDaily').value, 10);
if (!Number.isFinite(d) || d < 100) { err.textContent = t('f.stepsErr'); SFX.play('error'); return; }
g.daily = Math.min(d, 100000); g.steps = {};
}
if (type === 'quit') { const v = $('#fSince').value; g.since = v ? new Date(v).toISOString() : new Date().toISOString(); g.startSince = g.since; g.relapseLog = []; g.best = 0; g.relapses = 0; }
if (type === 'save') {
const tg = num('#fTarget'), have = num('#fHave') || 0, plan = num('#fPlan');
if (!(tg > 0) || have < 0) { err.textContent = t('f.priceErr'); SFX.play('error'); return; }
Object.assign(g, { start: 0, target: Math.round(tg * 100) / 100, plan: plan > 0 ? Math.round(plan * 100) / 100 : 0, dep: have > 0 ? [{ d: today(), a: Math.round(have * 100) / 100, n: t('dep.start') }] : [] });
}
const before = ppStats().total;
S.goals.push(g); markActivity(); save(); closeSheet(); S.tab = 'today'; checkBadges(); render(); SFX.play('check');
rewardFeedback(before, '🚩 ' + title);
};
}
const Q = window.PM_QUESTS || { BANK: [], TUTO: [], COACH: {}, WEEKLY: [], SUBJECTS: [], LANGS: [], BEDTIME: { fr: [], en: [] }, DUNGEONS: [], BOSSES: [], BOSS: [], CATS: [] };
const QXP = { 1: 10, 2: 15, 3: 20, trial: 25, bonus: 10, week: 50 };
const QICON = { sport: '💪', study: '📚', health: '🌙', social: '💬', quit: '🛑', money: '💰', mind: '🧠', tuto: '🧭', coach: '🎯' };
const qIcon = it => it.coach === 'redeem' ? '🔥' : it.ex ? '🎓' : QICON[it.c] || '✦';
Object.assign(T.fr, {
'q.title': 'Quêtes du jour', 'q.week': 'Défi de la semaine', 'q.done': 'Fait', 'q.undo': 'Annuler', 'q.start': 'Lancer · {t}', 'q.running': 'En cours · {t}',
'q.go.steps': 'Compter mes pas', 'q.go.run': 'Démarrer une course', 'q.go.goal': 'Ouvrir l\'objectif', 'q.go.new': 'Créer', 'q.go.profile': 'Choisir', 'q.auto': 'validé tout seul',
'q.reroll': 'Changer', 'q.reroll.none': 'Un seul changement par jour. Reviens demain !', 'q.rerolled': 'Nouvelle quête !',
'q.diff1': 'Facile', 'q.diff2': 'Normal', 'q.diff3': 'Difficile', 'q.trial': 'Épreuve de rang',
'q.bonus': '+{n} XP bonus si tu finis les 3', 'q.bonus.ok': 'Journée parfaite · +{n} XP bonus', 'q.count': '{d}/{n}',
'q.why': 'Choisies pour toi · difficulté {t}/5', 'q.why.up': 'Difficulté {t}/5 : elle monte, tu réussis {p} % de tes quêtes', 'q.why.down': 'Difficulté {t}/5 : allégée pour t\'aider à reprendre le rythme',
'q.near': 'Plus que {n} XP avant le niveau {l} : une quête et c\'est bon !', 'q.complete': 'Quête accomplie · +{n} XP', 'q.complete.cap': 'Quête accomplie · limite de 100 XP atteinte aujourd\'hui', 'q.undone': 'Quête remise à faire',
'q.week.done': 'Défi de la semaine réussi ! +{n} XP', 'q.week.left': 'jusqu\'à dimanche soir · +{n} XP', 'q.week.ok': 'Réussi · +{n} XP',
'q.focus': 'Mode focus', 'q.focus.d': 'Téléphone de côté, une seule tâche. Chaque session compte pour le défi focus.', 'q.focus.done': 'Session focus terminée. Bien joué !', 'q.focus.today': '{n} session(s) aujourd\'hui',
'q.timer.pause': 'Pause', 'q.timer.go': 'Reprendre', 'q.timer.start': 'Démarrer', 'q.timer.stop': 'Abandonner', 'q.timer.stop.q': 'Arrêter le minuteur ? La quête ne sera pas validée.',
'q.timer.bg': 'Tu peux fermer cette fenêtre : le minuteur continue.', 'q.timer.busy': 'Un minuteur est déjà en cours.',
'q.sys': 'SYSTÈME', 'q.sys.new': 'Nouvelles quêtes disponibles', 'q.sys.d': 'Termine-les avant minuit pour gagner leur XP.', 'q.sys.ok': 'Accepter', 'q.lost': 'objectif supprimé : change cette quête',
'q.cat.sport': 'Sport', 'q.cat.study': 'Études', 'q.cat.health': 'Santé', 'q.cat.social': 'Social', 'q.cat.quit': 'Arrêter', 'q.cat.money': 'Argent', 'q.cat.mind': 'Esprit', 'q.cat.tuto': 'Découverte', 'q.cat.coach': 'Coach',
'b.q1': 'Aventurier', 'b.q1.d': 'Ta première quête', 'b.q50': 'Chasseur', 'b.q50.d': '50 quêtes terminées', 'b.qperfect7': 'Sans faute', 'b.qperfect7.d': '7 journées de quêtes parfaites'
});
Object.assign(T.en, {
'q.title': 'Daily quests', 'q.week': 'Weekly challenge', 'q.done': 'Done', 'q.undo': 'Undo', 'q.start': 'Start · {t}', 'q.running': 'Running · {t}',
'q.go.steps': 'Count my steps', 'q.go.run': 'Start a run', 'q.go.goal': 'Open the goal', 'q.go.new': 'Create', 'q.go.profile': 'Choose', 'q.auto': 'checked automatically',
'q.reroll': 'Swap', 'q.reroll.none': 'Only one swap a day. Come back tomorrow!', 'q.rerolled': 'New quest!',
'q.diff1': 'Easy', 'q.diff2': 'Normal', 'q.diff3': 'Hard', 'q.trial': 'Rank trial',
'q.bonus': '+{n} bonus XP if you finish all 3', 'q.bonus.ok': 'Perfect day · +{n} bonus XP', 'q.count': '{d}/{n}',
'q.why': 'Picked for you · difficulty {t}/5', 'q.why.up': 'Difficulty {t}/5: going up, you complete {p}% of your quests', 'q.why.down': 'Difficulty {t}/5: eased to help you get back on track',
'q.near': 'Only {n} XP to level {l}: one quest and you\'re there!', 'q.complete': 'Quest complete · +{n} XP', 'q.complete.cap': 'Quest complete · 100 XP daily limit reached', 'q.undone': 'Quest back to do',
'q.week.done': 'Weekly challenge complete! +{n} XP', 'q.week.left': 'until Sunday night · +{n} XP', 'q.week.ok': 'Done · +{n} XP',
'q.focus': 'Focus mode', 'q.focus.d': 'Phone away, one task only. Every session counts toward the focus challenge.', 'q.focus.done': 'Focus session done. Nice work!', 'q.focus.today': '{n} session(s) today',
'q.timer.pause': 'Pause', 'q.timer.go': 'Resume', 'q.timer.start': 'Start', 'q.timer.stop': 'Give up', 'q.timer.stop.q': 'Stop the timer? The quest won\'t be completed.',
'q.timer.bg': 'You can close this window: the timer keeps running.', 'q.timer.busy': 'A timer is already running.',
'q.sys': 'SYSTEM', 'q.sys.new': 'New quests available', 'q.sys.d': 'Finish them before midnight to earn their XP.', 'q.sys.ok': 'Accept', 'q.lost': 'goal deleted: swap this quest',
'q.cat.sport': 'Sport', 'q.cat.study': 'Study', 'q.cat.health': 'Health', 'q.cat.social': 'Social', 'q.cat.quit': 'Quit', 'q.cat.money': 'Money', 'q.cat.mind': 'Mind', 'q.cat.tuto': 'Discovery', 'q.cat.coach': 'Coach',
'b.q1': 'Adventurer', 'b.q1.d': 'Your first quest', 'b.q50': 'Hunter', 'b.q50.d': '50 quests completed', 'b.qperfect7': 'Flawless', 'b.qperfect7.d': '7 perfect quest days'
});
const hashStr = s => { let h = 1779033703 ^ s.length; for (let i = 0; i < s.length; i++) { h = Math.imul(h ^ s.charCodeAt(i), 3432918353); h = h << 13 | h >>> 19; } return h >>> 0; };
const rngOf = seed => { let a = hashStr(seed); return () => { a = a + 0x6D2B79F5 | 0; let x = Math.imul(a ^ a >>> 15, 1 | a); x = x + Math.imul(x ^ x >>> 7, 61 | x) ^ x; return ((x ^ x >>> 14) >>> 0) / 4294967296; }; };
const pickW = (rnd, items, wf) => { const tot = items.reduce((s, x) => s + wf(x), 0); let r = rnd() * tot; for (const x of items) { r -= wf(x); if (r <= 0) return x; } return items[items.length - 1]; };
function qs() {
if (!S.quests || typeof S.quests !== 'object') S.quests = {};
const q = S.quests; q.log = q.log || {}; q.hist = q.hist || {}; q.focus = q.focus || {}; q.wdone = q.wdone || {};
return q;
}
const qTpl = id => Q.BANK.find(x => x.id === id) || Q.TUTO.find(x => x.id === id);
const stepsOn = k => Math.max(0, ...S.goals.filter(g => g.type === 'steps').map(g => (g.steps || {})[k] || 0));
function stepsAvg7() { const v = []; for (let i = 1; i <= 7; i++) { const n = stepsOn(dkey(addDays(new Date(), -i))); if (n > 0) v.push(n); } return v.length ? v.reduce((a, b) => a + b, 0) / v.length : 0; }
const stepsRecord = () => Math.max(0, ...S.goals.filter(g => g.type === 'steps').flatMap(g => Object.entries(g.steps || {}).filter(([k]) => k < today()).map(([, v]) => v)));
function questCtx() {
const st = ppStats(), ints = new Set(S.interests || []);
const habits = S.goals.filter(g => g.type === 'habit'), hasSteps = S.goals.some(g => g.type === 'steps');
return { st, lvl: st.level, ints, habits, hasSteps,
need: { steps: hasSteps, habit: habits.length > 0, creator: ints.has('social') || S.goals.some(g => g.type === 'tiktok'),
sportish: ints.has('sport') || (S.runs || []).length > 0, study: ints.has('study') || !ints.size,
saver: S.goals.some(g => g.type === 'save' && pct(g) < 1), nosave: !S.goals.some(g => g.type === 'save'),
nobudget: !mon().budget, lessons: MO.LESSONS.some(l => !mon().lessons[l.id]) } };
}
function questTier(lvl) {
const base = lvl < 10 ? 1 : lvl < 25 ? 2 : lvl < 45 ? 3 : lvl < 70 ? 4 : 5, log = qs().log;
let a = 0, d = 0;
for (let i = 1; i <= 14; i++) { const e = log[dkey(addDays(new Date(), -i))]; if (e) { a += e.a || 0; d += (e.d || []).filter(x => x.c !== 'tuto').length; } }
const prev = (qs().tier && qs().tier.adj) || 0;
let adj = 0;
if (a >= 6) {
const r = d / a;
if (r >= .75 || (prev > 0 && r >= .6)) adj = 1;
else if (r < .4 || (prev < 0 && r < .55)) adj = -1;
}
return { tier: Math.max(1, Math.min(5, base + adj)), adj, rate: a ? d / a : null };
}
function catWeights(ctx) {
const dow = new Date().getDay(), w = {}, none = !ctx.ints.size;
for (const c of Q.CATS) w[c] = none ? (['sport', 'study', 'health', 'mind'].includes(c) ? .8 : .25) : (ctx.ints.has(c) ? 1 : .12);
w.mind = Math.max(w.mind, .55);
if (ctx.hasSteps) w.sport = Math.max(w.sport, .7);
if (S.goals.some(g => g.type === 'quit')) w.quit = Math.max(w.quit, .8);
if (ctx.need.creator) w.social = Math.max(w.social, .8);
if (ctx.need.saver || mon().budget) w.money = Math.max(w.money, .6);
if (dow >= 1 && dow <= 5) w.study *= 1.4;
if (dow === 6) { w.study *= .5; w.sport *= 1.3; }
if (dow === 0) { w.mind *= 1.3; w.health *= 1.1; }
return w;
}
function makeQuest(tp, tier, diff, rnd) {
const i = Math.max(0, Math.min(4, tier - 1));
const q = { id: uid(), t: tp.id, c: tp.c, k: tp.k, diff, xp: QXP[diff] || 10 };
if (tp.n) q.n = tp.n[i]; if (tp.m) q.m = tp.m[i];
if (tp.fr.includes('{s}')) q.s = Math.floor(rnd() * Q.SUBJECTS.length);
if (tp.fr.includes('{l}')) q.l = Math.floor(rnd() * Q.LANGS.length);
if (tp.fr.includes('{h}')) q.h = i;
if (tp.auto) q.auto = tp.auto;
if (tp.id === 'steps') {
const g = S.goals.find(x => x.type === 'steps'), base = Math.max(stepsAvg7(), (g ? g.daily : 6000) * .7);
q.n = Math.max(3000, Math.min(30000, Math.round(base * [1, 1.05, 1.1, 1.15, 1.25][i] / 500) * 500));
}
if (tp.k === 't') q.dur = Math.round((q.n || 5) * (tp.u === 's' ? 1 : 60) * (tp.x2 ? 2 : 1));
return q;
}
function drawFrom(cat, ctx, tier, diff, rnd, avoid) {
const dow = new Date().getDay();
const vaultQ = tp => tp.go || /^(m[a-z]+|savegoal)$/.test(tp.auto || '');
const ok = tp => tp.c === cat && (!tp.d || tp.d.includes(dow)) && (!tp.need || ctx.need[tp.need]) && !avoid.has(tp.id) && (featOn('vault') || !vaultQ(tp));
let pool = Q.BANK.filter(tp => ok(tp) && !avoid.recent.has(tp.id));
if (!pool.length) pool = Q.BANK.filter(ok);
return pool.length ? makeQuest(pickW(rnd, pool, tp => (tp.w || 1) * (diff === 3 ? (tp.n ? 3 : .35) : 1)), tier, diff, rnd) : null;
}
const coachKey = q => `coach:${q.coach}:${q.g || ''}`;
function coachQuest(ctx, recent) {
const tk = today(), now = new Date(), dow = now.getDay(), yd = addDays(now, -1), y = dkey(yd), out = [];
const mk = (coach, g, auto, extra) => out.push(Object.assign({ id: uid(), coach, c: 'coach', k: auto ? 'a' : 'm', auto, g: g && g.id, gt: g && g.title, diff: 2, xp: QXP[2] }, extra || {}));
for (const g of ctx.habits) {
if (!g.days.includes(dow) || g.checks[tk] || !g.days.includes(yd.getDay()) || g.checks[y] || g.created >= y) continue;
let n = 0; for (let i = 2; i <= 8; i++) if (g.checks[dkey(addDays(now, -i))]) n++;
if (n >= 2) mk('relaunch', g, 'habit');
}
for (const g of S.goals.filter(x => x.type === 'target')) {
if (pct(g) >= 1 || g.deadline < tk || (g.entries || []).some(e => e.d === tk)) continue;
const ideal = idealAt(g, tk), cur = current(g), span = Math.abs(g.target - g.start);
if (g.target >= g.start ? cur < ideal - span * .05 : cur > ideal + span * .05) mk('behind', g, 'entry');
}
for (const g of ctx.habits) if (g.days.includes(dow) && !g.checks[tk] && habitStreak(g) === 6) mk('streak7', g, 'habit');
const rec = stepsRecord();
if (ctx.hasSteps && rec >= 5000 && stepsAvg7() >= rec * .85) mk('record', null, 'steps', { n: rec + 1, diff: 3, xp: QXP[3] });
for (const g of S.goals.filter(x => x.type === 'target' || x.type === 'tiktok')) {
const last = (g.entries || []).slice(-1)[0];
if (pct(g) < 1 && daysBetween(last ? last.d : g.created, tk) >= 7) mk('stale', g, 'entry');
}
for (const g of S.goals.filter(x => x.type === 'save')) {
const last = (g.dep || []).filter(e => e.a > 0).map(e => e.d).sort().pop();
if (pct(g) < 1 && daysBetween(last || g.created, tk) >= 7) mk('piggy', g, 'deposit');
}
for (const g of S.goals.filter(x => x.type === 'quit')) mk('clean', g, null);
return out.find(c => !recent.has(coachKey(c))) || null;
}
function ensureQuests() {
const q = qs(), tk = today();
if (q.day === tk && Array.isArray(q.list)) return;
const ctx = questCtx(), tierInfo = questTier(ctx.lvl), { tier } = tierInfo, rnd = rngOf(tk + '|' + (S.name || '') + '|' + Object.keys(q.log).length);
q.tier = tierInfo;
const avoid = new Set(); avoid.recent = new Set();
for (let i = 1; i <= 3; i++) (q.hist[dkey(addDays(new Date(), -i))] || []).forEach(id => avoid.recent.add(id));
const list = [];
if (!Object.keys(q.hist).length && Object.keys(S.activity).length <= 1) {
for (const tp of Q.TUTO) { if (list.length >= 2) break; const qq = makeQuest(tp, 1, 1, rnd); const p = questProgress(qq); if (p && p[0] < p[1]) list.push(qq); }
}
const diffs = [1, 2, 3].sort(() => rnd() - .5).slice(list.length);
const w = catWeights(ctx), cats = Object.keys(w).filter(c => w[c] > 0);
const recentCoach = new Set(); for (let i = 1; i <= 2; i++) (q.hist[dkey(addDays(new Date(), -i))] || []).forEach(k => recentCoach.add(k));
let coach = list.length ? null : coachQuest(ctx, recentCoach);
if (coach && (coach.coach === 'clean' || coach.coach === 'stale') && rnd() > .6) coach = null;
if (!list.length) { const special = redeemQuest() || examQuest(tier); if (special) coach = special; }
if (coach) { list.push(coach); diffs.splice(diffs.indexOf(coach.diff) >= 0 ? diffs.indexOf(coach.diff) : 0, 1); }
const nr = nextRank(ctx.lvl), trial = nr && nr.lvl - ctx.lvl <= 1;
const used = new Set();
for (const diff of diffs) {
let qq = null, tries = 0;
while (!qq && tries++ < 8) {
const left = cats.filter(c => !used.has(c)); if (!left.length) used.clear();
const cat = pickW(rnd, left.length ? left : cats, c => w[c]); used.add(cat);
qq = drawFrom(cat, ctx, Math.max(1, Math.min(5, tier + diff - 2)), diff, rnd, avoid);
}
if (!qq) continue;
avoid.add(qq.t);
if (diff === 3 && trial) { qq.trial = true; qq.xp = QXP.trial; }
list.push(qq);
}
const rq = list.find(x => x.coach === 'redeem'); if (rq) rq.m = list.length - 1;
q.day = tk; q.list = list; q.rerolls = 0;
q.hist[tk] = list.map(x => x.coach ? coachKey(x) : x.t);
for (const k of Object.keys(q.hist)) if (daysBetween(k, tk) > 14) delete q.hist[k];
const e = q.log[tk] || (q.log[tk] = { d: [] }); e.a = list.filter(x => x.c !== 'tuto').length;
save();
}
function rerollQuest(id) {
const q = qs(), i = (q.list || []).findIndex(x => x.id === id);
if (i < 0 || q.list[i].done) return;
if ((q.rerolls || 0) >= 1) { SFX.play('error'); toast(t('q.reroll.none')); return; }
const old = q.list[i], ctx = questCtx(), { tier } = questTier(ctx.lvl), rnd = rngOf(today() + 'r' + Date.now());
const avoid = new Set(q.list.map(x => x.t).filter(Boolean)); avoid.recent = new Set();
const w = catWeights(ctx), cats = Object.keys(w).filter(c => c !== old.c && !q.list.some(x => x.c === c));
let nq = null, tries = 0;
while (!nq && tries++ < 8) nq = drawFrom(pickW(rnd, cats.length ? cats : Q.CATS, c => w[c] || .2), ctx, Math.max(1, Math.min(5, tier + old.diff - 2)), old.diff, rnd, avoid);
if (!nq) return;
if (old.trial) { nq.trial = true; nq.xp = QXP.trial; }
q.list[i] = nq; q.rerolls = (q.rerolls || 0) + 1;
(q.hist[today()] || (q.hist[today()] = [])).push(nq.t);
if (q.timer && q.timer.qid === old.id) q.timer = null;
save(); SFX.play('equip'); toast(t('q.rerolled')); render();
}
function questText(q) {
const tp = q.coach ? Q.COACH[q.coach] : q.boss ? Q.BOSS.find(x => x.id === q.t) : qTpl(q.t); if (!tp) return { title: '', tip: '' };
const en = S.lang === 'en', g = q.g ? byId(q.g) : null;
const subj = q.s != null ? Q.SUBJECTS[q.s] : null, lang = q.l != null ? Q.LANGS[q.l] : null;
const fill = s => String(s || '').replace('{n}', nf(q.n ?? 0, 1)).replace('{m}', nf(q.m ?? 0)).replace('{s}', subj ? subj[en ? 1 : 0] : '')
.replace('{l}', lang ? lang[en ? 1 : 0] : '').replace('{h}', (Q.BEDTIME[en ? 'en' : 'fr'] || [])[q.h || 0] || '').replace('{g}', g ? g.title : (q.gt || '')).replace('{mn}', money(q.n ?? 0));
return { title: fill(en ? tp.en : tp.fr), tip: q.g && !g ? t('q.lost') : fill(en ? tp.te : tp.tf) };
}
function questProgress(q) {
const tk = today(), g = q.g ? byId(q.g) : null;
switch (q.auto) {
case 'steps': return [stepsOn(tk), q.n];
case 'run': return [Math.round((S.runs || []).filter(r => r.d === tk).reduce((s, r) => s + r.km, 0) * 100) / 100, q.n];
case 'habit': return [g && g.checks[tk] ? 1 : 0, 1];
case 'entry': return [g && (g.entries || []).some(e => e.d === tk) ? 1 : 0, 1];
case 'goals1': return [Math.min(1, S.goals.length), 1];
case 'goals2': return [Math.min(2, S.goals.length), 2];
case 'action': return [S.activity[tk] ? 1 : 0, 1];
case 'perfect': { const l = (qs().day === tk && qs().list) || []; return [l.filter(x => x.done).length, Math.max(1, l.length)]; }
case 'focus': return [qs().focus[tk] || 0, q.n];
case 'avatar': return [S.photo || S.avatar !== 'initials' ? 1 : 0, 1];
case 'stepsgoal': return [S.goals.some(x => x.type === 'steps') ? 1 : 0, 1];
case 'redeem': { const o = (qs().list || []).filter(x => x.id !== q.id); return [o.filter(x => x.done).length, Math.max(1, o.length)]; }
case 'deposit': return [g && (g.dep || []).some(e => e.d === tk && e.a > 0) ? 1 : 0, 1];
case 'mexp': return [moneyLogDays().has(tk) ? 1 : 0, 1];
case 'mwish': return [mon().wish.some(w => dkey(new Date(w.t0)) === tk) ? 1 : 0, 1];
case 'mlesson': return [Object.values(mon().lessons).includes(tk) ? 1 : 0, 1];
case 'mbudget': return [mon().budget ? 1 : 0, 1];
case 'savegoal': return [S.goals.some(x => x.type === 'save') ? 1 : 0, 1];
}
return null;
}
function completeQuest(id) {
const q = qs(), it = (q.list || []).find(x => x.id === id);
if (!it || it.done || q.day !== today()) return false;
const before = ppStats().total;
it.done = true; it.at = Date.now();
const e = q.log[q.day] || (q.log[q.day] = { a: q.list.length, d: [] });
e.d.push({ id: it.t || it.coach, xp: it.xp, c: it.c });
if (q.list.every(x => x.done) && !e.b) e.b = QXP.bonus;
if (it.k === 't' && it.c === 'study') q.focus[q.day] = (q.focus[q.day] || 0) + 1;
if (it.c !== 'tuto') markActivity();
if (it.coach === 'redeem') redeemDone(it);
if (it.ex) { const x = (S.exams || []).find(e => e.id === it.ex); if (x) x.rev = (x.rev || 0) + 1; }
save(); checkBadges();
SFX.play('questDone');
const gain = ppStats().total - before;
floatXP(gain); buzz([14, 50, 24]);
toast(`${qIcon(it)} ${gain > 0 ? t('q.complete', { n: gain }) : t('q.complete.cap')}`);
scheduleSync();
return true;
}
function undoQuest(id) {
const q = qs(), it = (q.list || []).find(x => x.id === id);
if (!it || !it.done || it.k !== 'm') return;
it.done = false; delete it.at;
const e = q.log[q.day]; if (e) { const j = e.d.findIndex(x => x.id === (it.t || it.coach)); if (j >= 0) e.d.splice(j, 1); delete e.b; }
save(); SFX.play('uncheck'); toast(t('q.undone')); scheduleSync(); render();
}
function ensureWeekly() {
const q = qs(), ws = weekStart();
if (q.week && q.week.start === ws) return;
const ctx = questCtx(), { tier } = questTier(ctx.lvl), i = tier - 1, rnd = rngOf(ws + '|w|' + (S.name || ''));
const pool0 = Q.WEEKLY.filter(x => !x.need || ctx.need[x.need]), prevT = q.week && q.week.t;
const pool = pool0.length > 1 ? pool0.filter(x => x.id !== prevT) : pool0;
const tp = pickW(rnd, pool, x => (x.w || 1) * (x.need && ctx.ints.has(x.need === 'sportish' ? 'sport' : x.need) ? 1.5 : 1));
let n = tp.n ? tp.n[i] : 0;
if (tp.id === 'w_steps') n = Math.max(20000, Math.round(Math.max(stepsAvg7(), 5000) * 7 * [.9, 1, 1.1, 1.2, 1.3][i] / 1000) * 1000);
if (tp.id === 'w_habits') { const planned = ctx.habits.reduce((s, g) => s + g.days.length, 0); n = Math.max(3, Math.min(n, Math.round(planned * [.5, .6, .7, .8, .9][i]))); }
if (tp.id === 'w_lessons') n = Math.max(1, Math.min(n, MO.LESSONS.filter(l => !mon().lessons[l.id]).length));
const left = 7 - daysBetween(ws, today());
if (left < 7 && tp.id !== 'w_xp') n = Math.max(1, Math.round(n * left / 7 / (tp.id === 'w_steps' ? 1000 : 1)) * (tp.id === 'w_steps' ? 1000 : 1));
if (left < 7 && tp.id === 'w_xp') n = Math.max(50, Math.round(n * left / 7 / 10) * 10);
q.week = { start: ws, t: tp.id, n, done: false }; save();
}
function weeklyProgress() {
const q = qs(), w = q.week; if (!w) return 0;
const ws = w.start, tk = today(), inWeek = k => k >= ws && k <= tk;
switch (w.t) {
case 'w_quests': return Object.keys(q.log).filter(inWeek).reduce((s, k) => s + (q.log[k].d || []).length, 0);
case 'w_perfect': return Object.keys(q.log).filter(k => inWeek(k) && q.log[k].b).length;
case 'w_xp': return ppStats().week - (w.done ? QXP.week : 0);
case 'w_habits': return S.goals.filter(g => g.type === 'habit').reduce((s, g) => s + Object.keys(g.checks).filter(k => g.checks[k] && inWeek(k)).length, 0);
case 'w_steps': { let s = 0; for (let d = parseKey(ws); dkey(d) <= tk; d = addDays(d, 1)) s += stepsOn(dkey(d)); return s; }
case 'w_run': return Math.round((S.runs || []).filter(r => inWeek(r.d)).reduce((s, r) => s + r.km, 0) * 10) / 10;
case 'w_focus': return Object.keys(q.focus).filter(inWeek).reduce((s, k) => s + q.focus[k], 0);
case 'w_save': return Math.round(S.goals.filter(g => g.type === 'save').reduce((s, g) => s + (g.dep || []).filter(e => e.a > 0 && inWeek(e.d)).reduce((a, e) => a + e.a, 0), 0) * 100) / 100;
case 'w_lessons': return Object.values(mon().lessons).filter(inWeek).length;
}
return 0;
}
function questsTick() {
if (!S.onboarded) return;
ensureQuests(); ensureWeekly(); dungeonTick();
const q = qs(); let gained = false;
for (const it of q.list || []) {
if (it.done || it.k !== 'a') continue;
const p = questProgress(it); if (p && p[0] >= p[1] && completeQuest(it.id)) gained = true;
}
if (q.timer && !q.timer.pause && Date.now() >= q.timer.end) timerFinish();
const w = q.week;
if (w && !w.done && weeklyProgress() >= w.n) {
w.done = true; q.wdone[w.start] = today(); save();
setTimeout(() => { toast('🏆 ' + t('q.week.done', { n: QXP.week })); SFX.play('badge'); }, 500); gained = true;
}
if (gained) checkLevelUp(ppStats(), 900);
}
const durTxt = d => d < 60 ? d + ' s' : d % 60 ? Math.floor(d / 60) + ' min ' + String(d % 60).padStart(2, '0') : d / 60 + ' min';
const mmss = s => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
const timerLeft = tm => Math.max(0, tm.pause != null ? tm.pause : (tm.end - Date.now()) / 1000);
let timerTick = null;
function timerFinish() {
const q = qs(), tm = q.timer; if (!tm) return;
q.timer = null; keepAwake(false);
if (tm.qid === 'free') { q.focus[today()] = (q.focus[today()] || 0) + 1; save(); SFX.play('finish'); toast('⏱ ' + t('q.focus.done')); checkTitles(); }
else if (tm.qid === 'dg') { save(); dungeonClear(); }
else { save(); completeQuest(tm.qid); }
}
function openTimer(qid, dur) {
const q = qs();
if (q.timer && q.timer.qid !== qid) { SFX.play('error'); toast(t('q.timer.busy')); qid = q.timer.qid; }
const it = qid === 'free' ? null : qid === 'dg' ? dgFloor() : (q.list || []).find(x => x.id === qid);
const title = it ? questText(it).title : t('q.focus'), tip = it ? questText(it).tip : t('q.focus.d');
const total = q.timer ? q.timer.dur : dur || (it && it.dur) || 1500;
let shown = null;
const draw = () => {
const tm = qs().timer, left = tm ? timerLeft(tm) : total, p = 1 - left / total;
const ring = $('#tmRing'), lab = $('#tmLeft'); if (!ring) return;
ring.style.setProperty('--p', (p * 100).toFixed(2));
lab.textContent = mmss(Math.ceil(left));
if (tm && tm.pause == null && Date.now() >= tm.end) { clearInterval(timerTick); closeSheet(); timerFinish(); render(); return; }
const state = !tm ? 'idle' : tm.pause != null ? 'paused' : 'run';
if (state === shown) return;
shown = state;
$('#tmBtns').innerHTML = !tm ? `<button type="button" class="btn block" id="tmGo">${esc(t('q.timer.start'))}</button>`
: `<div class="grid-2"><button type="button" class="btn subtle" id="tmPause">${esc(t(tm.pause != null ? 'q.timer.go' : 'q.timer.pause'))}</button><button type="button" class="btn danger" id="tmStop">${esc(t('q.timer.stop'))}</button></div>`;
const go = $('#tmGo'); if (go) go.onclick = () => { qs().timer = { qid, dur: total, end: Date.now() + total * 1000 }; save(); keepAwake(true); SFX.play('start'); draw(); render(); };
const pa = $('#tmPause'); if (pa) pa.onclick = () => { const x = qs().timer; if (x.pause != null) { x.end = Date.now() + x.pause * 1000; delete x.pause; SFX.play('start'); } else { x.pause = timerLeft(x); SFX.play('pause'); } save(); draw(); };
const so = $('#tmStop'); if (so) so.onclick = () => confirmBox(t('q.timer.stop.q'), t('q.timer.stop'), () => { qs().timer = null; keepAwake(false); save(); SFX.play('down'); closeSheet(); render(); });
};
openSheet(`<div class="sheet-head"><h2>${esc(t(qid === 'free' ? 'q.focus' : 'q.title'))}</h2><button type="button" class="icon-btn" id="closeS" aria-label="${esc(t('close'))}">✕</button></div>
      <div class="timer-box"><div class="timer-ring" id="tmRing"><span class="num" id="tmLeft">${mmss(total)}</span></div>
      <b class="timer-title">${esc(title)}</b><p class="muted" style="margin:0">${esc(tip)}</p></div>
      <div id="tmBtns"></div><p class="muted" style="margin:0;font-size:.82rem;text-align:center">${esc(t('q.timer.bg'))}</p>`, true);
$('#closeS').onclick = closeSheet;
clearInterval(timerTick); timerTick = setInterval(() => { if (sheet.hidden || !$('#tmRing')) { clearInterval(timerTick); return; } draw(); }, 250);
onSheetClose = () => clearInterval(timerTick);
draw();
}
function openFocus() {
const q = qs();
if (q.timer) return openTimer(q.timer.qid);
openSheet(`<div class="sheet-head"><h2>${esc(t('q.focus'))}</h2><button type="button" class="icon-btn" id="closeS" aria-label="${esc(t('close'))}">✕</button></div>
      <p class="muted" style="margin:0">${esc(t('q.focus.d'))}</p>
      <div class="grid-3">${[15, 25, 45].map(m => `<button type="button" class="btn subtle" data-fm="${m}"><b class="num" style="font-size:1.4rem">${m}</b> min</button>`).join('')}</div>
      <p class="muted num" style="margin:0">${esc(t('q.focus.today', { n: q.focus[today()] || 0 }))}</p>`);
$('#closeS').onclick = closeSheet;
sheet.querySelectorAll('[data-fm]').forEach(b => b.onclick = () => openTimer('free', +b.dataset.fm * 60));
}
function questRow(it) {
const { title, tip } = questText(it), q = qs(), p = it.k === 'a' ? questProgress(it) : null;
const running = q.timer && q.timer.qid === it.id, g = it.g ? byId(it.g) : null;
let act = '';
if (it.done) act = it.k === 'm' ? `<button type="button" class="q-btn on" data-qundo="${it.id}" aria-label="${esc(t('q.undo'))}">${checkSvg}</button>` : `<span class="q-btn on" aria-hidden="true">${checkSvg}</span>`;
else if (it.k === 'm') act = `<button type="button" class="q-btn" data-qdone="${it.id}" aria-label="${esc(t('q.done'))} : ${esc(title)}">${checkSvg}</button>`;
let extra = '';
if (!it.done && it.k === 't') extra = `<button type="button" class="btn subtle q-act" data-qtimer="${it.id}">⏱ ${esc(running ? t('q.running', { t: mmss(Math.ceil(timerLeft(q.timer))) }) : t('q.start', { t: durTxt(it.dur) }))}</button>`;
const vgo = !it.done && it.k === 'm' && (qTpl(it.t) || {}).go;
if (vgo) extra = `<div class="q-row"><button type="button" class="btn subtle q-act" data-qvault="${vgo}">${IC.vault}${esc(t('q.go.vault'))}</button></div>`;
if (!it.done && p) {
const unit = it.auto === 'steps' ? ' ' + t('st.unit') : it.auto === 'run' ? ' km' : '';
const go = { steps: 'q.go.steps', run: 'q.go.run', habit: 'q.go.goal', entry: 'q.go.goal', deposit: 'q.go.goal', goals1: 'q.go.new', goals2: 'q.go.new', stepsgoal: 'q.go.new', avatar: 'q.go.profile',
mexp: 'q.go.vault', mwish: 'q.go.vault', mlesson: 'q.go.vault', mbudget: 'q.go.vault', savegoal: 'q.go.vault' }[it.auto];
const bar = p[1] > 1 || it.auto === 'run';
extra = (bar ? `<div class="bar"><i style="width:${Math.min(100, p[0] / p[1] * 100).toFixed(1)}%"></i></div>` : '')
+ `<div class="q-row">${go && (!['habit', 'entry', 'deposit'].includes(it.auto) || g) ? `<button type="button" class="btn subtle q-act" data-qgo="${it.id}">${go === 'q.go.vault' ? IC.vault : ''}${esc(t(go))}</button>` : ''}`
+ `<span class="muted num q-prog">${bar ? `${nf(p[0], it.auto === 'run' ? 2 : 0)} / ${nf(p[1])}${unit} · ` : ''}${esc(t('q.auto'))}</span></div>`;
}
const diffTxt = it.trial ? t('q.trial') : t('q.diff' + it.diff);
return `<article class="q-item${it.done ? ' done' : ''}${it.trial ? ' trial' : ''}${it.coach === 'redeem' ? ' redeem' : ''}${it.ex ? ' exam' : ''}" data-cat="${it.c}">
      <div class="q-ico" aria-hidden="true">${qIcon(it)}</div>
      <div class="q-body"><b>${esc(title)}</b><small>${esc(tip)}</small>
        <div class="q-tags"><span class="q-cat">${esc(t('q.cat.' + it.c))}</span><span class="q-diff d${it.trial ? 4 : it.diff}">${esc(diffTxt)}</span><span class="q-xp num">+${it.xp} XP</span>${!it.done && (q.rerolls || 0) < 1 && it.c !== 'tuto' && it.coach !== 'redeem' && !it.ex ? `<button type="button" class="q-swap" data-qswap="${it.id}" aria-label="${esc(t('q.reroll'))}" title="${esc(t('q.reroll'))}">↻</button>` : ''}</div>
        ${extra}</div>${act}</article>`;
}
function questsHtml() {
if (!S.onboarded) return '';
const q = qs(), list = q.list || [], d = list.filter(x => x.done).length, e = q.log[today()] || {};
const st = ppStats(), { tier, adj, rate } = q.tier || questTier(st.level);
const why = adj > 0 ? t('q.why.up', { t: tier, p: Math.round(rate * 100) }) : adj < 0 ? t('q.why.down', { t: tier }) : t('q.why', { t: tier });
const gap = st.to - st.total, near = !st.max && gap > 0 && gap <= 45 && d < list.length;
const w = q.week, wtp = w && Q.WEEKLY.find(x => x.id === w.t), wp = w ? Math.min(w.n, weeklyProgress()) : 0;
let wTitle = wtp ? (S.lang === 'en' ? wtp.en : wtp.fr).replace('{n}', nf(w.n)).replace('{mn}', money(w.n)) : '';
if (w && w.n === 1) wTitle = wTitle.replace(/(\b1[\s ]+(?:focus[\s ]+)?)(\p{L}+?)s(?!\p{L})/u, '$1$2');
return `<section class="card quests">
      <div class="row between"><span class="section-title" style="margin:0">${esc(t('q.title'))}</span><span class="q-count num">${esc(t('q.count', { d, n: list.length }))}</span></div>
      <p class="muted q-why">${esc(why)}</p>
      <div class="q-list">${list.map(questRow).join('')}</div>
      <div class="q-foot"><span class="${e.b ? 'ok-txt' : 'muted'}">${esc(e.b ? t('q.bonus.ok', { n: e.b }) : t('q.bonus', { n: QXP.bonus }))}</span>
        <button type="button" class="btn subtle q-focus" id="qFocus">⏱ ${esc(q.timer && q.timer.qid === 'free' ? t('q.running', { t: mmss(Math.ceil(timerLeft(q.timer))) }) : t('q.focus'))}</button></div>
      ${near ? `<p class="q-near">${esc(t('q.near', { n: nf(gap), l: st.level + 1 }))}</p>` : ''}
      ${w ? `<div class="q-week${w.done ? ' done' : ''}"><div class="row between"><span class="section-title" style="margin:0">${esc(t('q.week'))}</span><span class="num muted">${w.t === 'w_save' ? `${esc(money(wp))} / ${esc(money(w.n))}` : `${nf(wp, w.t === 'w_run' ? 1 : 0)} / ${nf(w.n)}`}</span></div>
        <b>${esc(wTitle)}</b><div class="bar${w.done ? ' good' : ''}"><i style="width:${(wp / Math.max(1, w.n) * 100).toFixed(1)}%"></i></div>
        <small class="${w.done ? 'ok-txt' : 'muted'}">${esc(w.done ? t('q.week.ok', { n: QXP.week }) : t('q.week.left', { n: QXP.week }))}</small></div>` : ''}
    </section>`;
}
function bindQuests(root = view) {
const q = qs(), find = id => (q.list || []).find(x => x.id === id);
root.querySelectorAll('[data-qdone]').forEach(b => b.onclick = () => { if (completeQuest(b.dataset.qdone)) { render(); checkLevelUp(ppStats(), 700); } });
root.querySelectorAll('[data-qundo]').forEach(b => b.onclick = () => undoQuest(b.dataset.qundo));
root.querySelectorAll('[data-qswap]').forEach(b => b.onclick = () => rerollQuest(b.dataset.qswap));
root.querySelectorAll('[data-qtimer]').forEach(b => b.onclick = () => openTimer(b.dataset.qtimer));
root.querySelectorAll('[data-qgo]').forEach(b => b.onclick = () => {
const it = find(b.dataset.qgo); if (!it) return;
const sg = S.goals.find(g => g.type === 'steps');
if (it.auto === 'steps' && sg) openPedometer(sg);
else if (it.auto === 'run') openRun();
else if ((it.auto === 'habit' || it.auto === 'entry' || it.auto === 'deposit') && it.g && byId(it.g)) openDetail(it.g);
else if (VAULT_TAB[it.auto]) openVault(VAULT_TAB[it.auto]);
else if (it.auto === 'stepsgoal' || (it.auto === 'steps' && !sg)) goalForm('steps', TEMPLATES.steps[0]);
else if (it.auto === 'goals1' || it.auto === 'goals2') (suggestions().length ? openSuggestions : openNew)();
else if (it.auto === 'avatar') { S.tab = 'profile'; S.profTab = 'avatars'; save(); render(); window.scrollTo(0, 0); }
});
root.querySelectorAll('[data-qvault]').forEach(b => b.onclick = () => openVault(b.dataset.qvault));
const fb = root.querySelector('#qFocus'); if (fb) fb.onclick = openFocus;
}
function maybeSystemPopup() {
const q = qs(), tk = today();
if (!S.onboarded || q.seen === tk || S.tab !== 'today' || !sheet.hidden || !(q.list || []).length) return;
setTimeout(() => {
if (q.seen === tk || !sheet.hidden || S.tab !== 'today') return;
q.seen = tk; save();
SFX.play('quest');
openSheet(`<div class="sys-win"><div class="sys-head"><span class="sys-ico">!</span><b>${esc(t('q.sys'))}</b></div>
        <h2>${esc(t('q.sys.new'))}</h2>
        <ul class="sys-list">${q.list.map(it => `<li><span aria-hidden="true">${qIcon(it)}</span><span>${esc(questText(it).title)}</span><b class="num">+${it.xp}</b></li>`).join('')}</ul>
        ${unlockLines()}${dgNewLine()}
        <p class="muted" style="margin:0">${esc(t('q.sys.d'))}</p>
        <button type="button" class="btn block" id="sysOk">${esc(t('q.sys.ok'))}</button></div>`, true);
$('#sysOk').onclick = () => { SFX.play('select'); closeSheet(); };
}, 650);
}
setInterval(() => {
const q = S.quests; if (!q || !q.timer) return;
if (q.timer.pause == null && Date.now() >= q.timer.end && sheet.hidden) { timerFinish(); render(); return; }
document.querySelectorAll(`[data-qtimer="${q.timer.qid}"]`).forEach(b => { b.textContent = '⏱ ' + t('q.running', { t: mmss(Math.ceil(timerLeft(q.timer))) }); });
if (q.timer.qid === 'free') { const fb = $('#qFocus'); if (fb) fb.textContent = '⏱ ' + t('q.running', { t: mmss(Math.ceil(timerLeft(q.timer))) }); }
}, 1000);
const altOfLevel = lvl => Math.round((lvl - 1) / (MAX_LVL - 1) * ALT_TOP);
const ASC_GAPS = [1.25, .8, 1.35, .7, 1.2, .75, 1.3, .85, 1.15, .65];
const ascX = (i, x0, x1) => { const tot = ASC_GAPS.reduce((a, b) => a + b, 0); let s = 0; for (let k = 0; k <= i; k++) s += ASC_GAPS[k]; return x0 + s / tot * (x1 - x0); };
const SUMMITS = RANKS.slice(1).map(r => ({ a: altOfLevel(r.lvl), fr: r.fr, en: r.en, r }));
function altOf(xp) {
const lv = levelOf(xp); if (lv >= MAX_LVL) return ALT_TOP;
const from = xpForLevel(lv), to = xpForLevel(lv + 1);
return Math.round((lv - 1 + (xp - from) / (to - from)) / (MAX_LVL - 1) * ALT_TOP);
}
const summitsReached = alt => SUMMITS.filter(s => alt >= s.a).length;
function checkSummit(st) {
const n = summitsReached(altOf(st.total)); S.rankLog = S.rankLog || {};
let changed = false;
for (let i = 0; i < n; i++) if (!S.rankLog[SUMMITS[i].r.id]) { S.rankLog[SUMMITS[i].r.id] = today(); changed = true; }
if (changed) save();
}
const emblemAt = (r, x, y, size, cls) => rankEmblem(r, cls).replace('<svg ', `<svg x="${(x - size / 2).toFixed(1)}" y="${(y - size / 2).toFixed(1)}" width="${size}" height="${size}" style="width:${size}px;height:${size}px" `);
let ascSeq = 0;
function ascentSvg(alt, cls = '') {
const W = 340, H = 190, x0 = 14, x1 = W - 24, yb = H - 16, yt = 30, id = 'asc' + (++ascSeq);
const X = i => ascX(i, x0, x1), Y = a => yb - a / ALT_TOP * (yb - yt);
const pts = [[x0, yb], ...SUMMITS.map((s, i) => [X(i), Y(s.a)])];
let cx = pts[pts.length - 1][0], cy = Y(ALT_TOP);
for (let i = 0; i < SUMMITS.length; i++) {
const a0 = i ? SUMMITS[i - 1].a : 0, a1 = SUMMITS[i].a;
if (alt <= a1) { const f = (alt - a0) / (a1 - a0); cx = pts[i][0] + f * (pts[i + 1][0] - pts[i][0]); cy = Y(alt); break; }
}
const line = pts.map(p => p.map(v => v.toFixed(1)).join(',')).join(' ');
const n = summitsReached(alt), next = SUMMITS[n];
const far = `M0 ${H} L0 ${yb - 18} L40 ${yb - 46} L70 ${yb - 30} L118 ${yb - 70} L150 ${yb - 52} L196 ${yb - 96} L232 ${yb - 64} L270 ${yb - 108} L300 ${yb - 84} L${W} ${yb - 120} L${W} ${H} Z`;
const marks = emblemAt(RANKS[0], x0, yb - 2, 18, 'asc-em got') + SUMMITS.map((s, i) => { const got = i < n, [x, y] = pts[i + 1], big = got || s === next || i === SUMMITS.length - 1;
return emblemAt(s.r, x, y - 2, big ? 22 : 16, 'asc-em' + (got ? ' got' : s === next ? ' next' : '')); }).join('');
const lab = (s, i, cls2) => { const [x, y] = pts[i + 1], end = x > W - 80;
return `<text x="${(end ? x - 13 : x + 13).toFixed(1)}" y="${(y - 12).toFixed(1)}" text-anchor="${end ? 'end' : 'start'}" class="${cls2}">${esc(L(s, ''))} · ${nf(s.a)} m</text>`; };
return `<svg class="asc-svg ${cls}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(t('as.title'))} : ${nf(alt)} m">
      <defs><linearGradient id="${id}f" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--accent)" stop-opacity=".28"/><stop offset="1" stop-color="var(--accent)" stop-opacity="0"/></linearGradient>
        <clipPath id="${id}c"><rect x="0" y="0" width="${cx.toFixed(1)}" height="${H}"/></clipPath></defs>
      <path d="${far}" class="asc-far"/>
      <polygon points="${line} ${x1},${yb} ${x0},${yb}" fill="url(#${id}f)"/>
      <polyline points="${line}" class="asc-ridge"/>
      <polyline points="${line}" class="asc-done" clip-path="url(#${id}c)"/>
      ${marks}
      ${next && next !== SUMMITS[SUMMITS.length - 1] ? lab(next, n, 'asc-lab') : ''}
      ${lab(SUMMITS[SUMMITS.length - 1], SUMMITS.length - 1, 'asc-lab top')}
      <g class="asc-me"><line x1="${cx.toFixed(1)}" y1="${cy.toFixed(1)}" x2="${cx.toFixed(1)}" y2="${(cy - 18).toFixed(1)}"/><path d="M${(cx + .6).toFixed(1)} ${(cy - 18).toFixed(1)}l10 3.4-10 3.4z"/><circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="5"/></g>
    </svg>`;
}
function ascentCard() {
const st = ppStats(), alt = altOf(st.total), n = summitsReached(alt), next = SUMMITS[n];
return `<button type="button" class="card ascent" id="ascentCard">
      <div class="row between"><span class="section-title" style="margin:0">${esc(t('as.title'))}</span><b class="asc-alt num">${nf(alt)} m</b></div>
      ${ascentSvg(alt)}
      <span class="muted climb-next">${next ? esc(t('as.next', { name: L(next, ''), a: nf(next.a), d: nf(next.a - alt) })) : esc(t('as.top'))}</span>
    </button>`;
}
function openAscent() {
const st = ppStats(), alt = altOf(st.total), n = summitsReached(alt), log = S.rankLog || {};
const rows = [{ a: 0, r: RANKS[0] }, ...SUMMITS].map((s, i) => { const got = i <= n;
return `<div class="ladder-row${got ? ' done' : ''}${i === n ? ' cur' : ''}">${rankEmblem(s.r, 'sm' + (got ? '' : ' dim'))}<div class="asc-name"><b>${esc(L(s.r, ''))}</b><small class="muted">${esc(i ? t('lvl.n', { n: s.r.lvl }) : t('as.base'))}</small></div><span class="num muted">${nf(s.a)} m${got && i && log[s.r.id] ? `<br><small>${esc(fmtDate(log[s.r.id]))}</small>` : ''}</span></div>`; }).reverse().join('');
openSheet(`<div class="sheet-head"><h2>${esc(t('as.title'))}</h2><button type="button" class="icon-btn" id="closeA" aria-label="${esc(t('close'))}">✕</button></div>
      <div class="card ascent-hero"><b class="asc-alt big num">${nf(alt)} m</b>${ascentSvg(alt, 'lg')}<p class="muted" style="margin:0">${esc(t('as.d'))}</p></div>
      <div class="card"><span class="section-title" style="margin:0">${esc(t('as.summits', { n, t: SUMMITS.length }))}</span><div class="ladder">${rows}</div></div>`);
$('#closeA').onclick = closeSheet;
}
const STATS = [
{ id: 'str', i: '💪', fr: 'Force', en: 'Strength' }, { id: 'end', i: '🫁', fr: 'Endurance', en: 'Stamina' },
{ id: 'int', i: '📘', fr: 'Intelligence', en: 'Intelligence' }, { id: 'dis', i: '🛡️', fr: 'Discipline', en: 'Discipline' },
{ id: 'men', i: '🧘', fr: 'Mental', en: 'Mind' }
];
const ST_END = new Set(['walk', 'run', 'steps', 'rope', 'sprints', 'jacks', 'burpees', 'stairs', 'wakeup']);
const ST_DIS = new Set(['bedtime', 'noscreen', 'nosnooze', 'makebed', 'early', 'homework', 'bag', 'planner', 'desk', 'top3', 'goalpaper']);
const ST_INT = new Set(['read', 'learn', 'moneylearn']);
function statOf(id, c) {
if (c === 'tuto') return null;
if (c === 'coach') return 'dis';
if (c === 'sport') return ST_END.has(id) ? 'end' : 'str';
if (c === 'study') return ST_DIS.has(id) ? 'dis' : 'int';
if (c === 'health') return ST_DIS.has(id) ? 'dis' : 'men';
if (c === 'mind') return ST_INT.has(id) ? 'int' : ST_DIS.has(id) ? 'dis' : 'men';
if (c === 'social') return 'men';
return 'dis';
}
function hunterStats(from = '0000', to = '9999') { return memoGet('hs' + from + '|' + to, () => hunterCompute(from, to)); }
function hunterCompute(from, to) {
const s = { str: 0, end: 0, int: 0, dis: 0, men: 0 }, tk = today(), inR = k => k >= from && k <= to && k <= tk;
const q = S.quests || {};
for (const k in q.log || {}) {
if (!inR(k)) continue;
const e = q.log[k];
for (const d of e.d || []) { const st = statOf(d.id, d.c); if (st) s[st] += { 10: 1, 15: 2, 20: 3, 25: 4 }[d.xp] || 1; }
if (e.b) s.dis += 2;
}
for (const k in q.focus || {}) if (inR(k)) s.int += q.focus[k];
for (const g of S.goals) {
if (g.type === 'habit') { for (const k in g.checks) if (g.checks[k] && inR(k)) s.dis++; }
else if (g.type === 'steps') { for (const k in g.steps || {}) if (g.steps[k] >= dailyOn(g, k) && inR(k)) s.end += 2; }
else if (g.type === 'quit') {
const slips = new Set((g.relapseLog || []).map(iso => dkey(new Date(iso)))), sd = dkey(new Date(g.startSince || g.since));
for (let d = parseKey(g.created > sd ? g.created : sd); dkey(d) < tk; d = addDays(d, 1)) if (!slips.has(dkey(d)) && inR(dkey(d))) s.men++;
} else if (g.type === 'save') { for (const k of new Set((g.dep || []).filter(e => e.a > 0).map(e => e.d))) if (inR(k)) s.dis++; }
else for (const e of g.entries || []) if (inR(e.d)) s.dis++;
}
for (const r of S.runs || []) if (inR(r.d)) s.end += Math.max(1, Math.round(r.km));
const m = mon();
for (const k of moneyLogDays()) if (inR(k)) s.dis++;
for (const w of m.wish) if (w.st === 'skip' && w.at && inR(w.at)) s.men++;
for (const id in m.lessons) if (inR(m.lessons[id])) s.int += 2;
for (const dg of S.dg || []) {
for (const f of dg.floors || []) if (f.done && inR(f.done)) { const st = f.boss ? 'men' : statOf(f.t, f.c); if (st) s[st] += f.boss ? 3 : 2; }
}
return s;
}
const statVal = p => 10 + p;
function radarSvg(s, size = 220) {
const c = size / 2, R = c - 34, vals = STATS.map(x => statVal(s[x.id])), M = Math.max(30, Math.ceil(Math.max(...vals) / 10) * 10);
const pt = (i, r) => { const a = -Math.PI / 2 + i * 2 * Math.PI / STATS.length; return [c + r * Math.cos(a), c + r * Math.sin(a)]; };
const ring = f => STATS.map((_, i) => pt(i, R * f).map(v => v.toFixed(1)).join(',')).join(' ');
const poly = vals.map((v, i) => pt(i, R * Math.max(.06, v / M)).map(x => x.toFixed(1)).join(',')).join(' ');
return `<svg class="radar" viewBox="0 0 ${size} ${size}" role="img" aria-label="${esc(STATS.map((x, i) => L(x, '') + ' ' + vals[i]).join(', '))}">
      ${[.33, .66, 1].map(f => `<polygon points="${ring(f)}" class="rd-ring"/>`).join('')}
      ${STATS.map((_, i) => { const [x, y] = pt(i, R); return `<line x1="${c}" y1="${c}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" class="rd-ax"/>`; }).join('')}
      <polygon points="${poly}" class="rd-val"/>
      ${vals.map((v, i) => { const [x, y] = pt(i, R * Math.max(.06, v / M)); return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3" class="rd-pt"/>`; }).join('')}
      ${STATS.map((x, i) => { const [lx, ly] = pt(i, R + 18); return `<text x="${lx.toFixed(1)}" y="${(ly + 5).toFixed(1)}" text-anchor="middle">${x.i}</text>`; }).join('')}
    </svg>`;
}
function titleCtx() { return memoGet('tc', titleCompute); }
function titleCompute() {
const q = S.quests || {}, log = q.log || {}, cnt = {}; let quests = 0, perfect = 0;
for (const k in log) { if (log[k].b) perfect++; for (const d of log[k].d || []) { quests++; cnt[d.id] = (cnt[d.id] || 0) + 1; } }
const sum = ids => ids.reduce((s, id) => s + (cnt[id] || 0), 0);
const stepDays = new Set(); S.goals.filter(g => g.type === 'steps').forEach(g => Object.keys(g.steps || {}).forEach(k => { if (g.steps[k] >= dailyOn(g, k)) stepDays.add(k); }));
const s = hunterStats();
return { quests, perfect, early: sum(['nosnooze', 'early', 'wakeup']), zen: sum(['meditate', 'breath', 'silence', 'visualise']),
focus: Object.values(q.focus || {}).reduce((a, b) => a + b, 0), stepDays: stepDays.size, km: (S.runs || []).reduce((a, r) => a + r.km, 0),
streak: Math.max(0, ...S.goals.filter(g => g.type === 'habit').map(habitBest)), level: ppStats().level, s: Object.fromEntries(STATS.map(x => [x.id, statVal(s[x.id])])),
dungeons: (S.dg || []).filter(d => d.cleared).length, lessons: Object.keys(mon().lessons).length,
legendDg: (S.dg || []).some(d => d.cleared && dgRank(d).id === 'legend'), redeems: (S.redeem || {}).n || 0,
revs: (S.exams || []).reduce((a, e) => a + (e.rev || 0), 0), summits: S.goals.filter(g => g.arch).length, resisted: mon().wish.filter(w => w.st === 'skip').length,
put: S.goals.filter(g => g.type === 'save').reduce((a, g) => a + (g.dep || []).filter(e => e.a > 0).reduce((b, e) => b + e.a, 0), 0) };
}
const TITLES = [
{ id: 'novice', fr: 'Novice', en: 'Rookie', dfr: 'Ton premier titre', den: 'Your first title', ok: () => true },
{ id: 'adventurer', fr: 'Aventurier', en: 'Adventurer', dfr: '10 quêtes terminées', den: '10 quests completed', ok: c => c.quests >= 10 },
{ id: 'early', fr: 'Lève-tôt', en: 'Early bird', dfr: '5 quêtes du matin (lever, réveil)', den: '5 morning quests', ok: c => c.early >= 5 },
{ id: 'scholar', fr: 'Rat de bibliothèque', en: 'Bookworm', dfr: '10 sessions focus', den: '10 focus sessions', ok: c => c.focus >= 10 },
{ id: 'zen', fr: 'Esprit zen', en: 'Zen mind', dfr: '10 quêtes de calme (méditation, respiration)', den: '10 calm quests (meditation, breathing)', ok: c => c.zen >= 10 },
{ id: 'walker', fr: 'Marcheur', en: 'Walker', dfr: 'Objectif de pas atteint 7 jours', den: 'Step goal reached on 7 days', ok: c => c.stepDays >= 7 },
{ id: 'marathon', fr: 'Marathonien', en: 'Marathoner', dfr: '42 km de course au total', den: '42 km run in total', ok: c => c.km >= 42 },
{ id: 'flawless', fr: 'Perfectionniste', en: 'Perfectionist', dfr: '7 journées parfaites', den: '7 perfect days', ok: c => c.perfect >= 7 },
{ id: 'unstoppable', fr: 'Inarrêtable', en: 'Unstoppable', dfr: '30 jours de série sur une habitude', den: '30-day streak on a habit', ok: c => c.streak >= 30 },
{ id: 'colossus', fr: 'Colosse', en: 'Colossus', dfr: 'Force à 50', den: 'Strength at 50', ok: c => c.s.str >= 50 },
{ id: 'tireless', fr: 'Infatigable', en: 'Tireless', dfr: 'Endurance à 50', den: 'Stamina at 50', ok: c => c.s.end >= 50 },
{ id: 'genius', fr: 'Génie', en: 'Genius', dfr: 'Intelligence à 50', den: 'Intelligence at 50', ok: c => c.s.int >= 50 },
{ id: 'machine', fr: 'Machine', en: 'Machine', dfr: 'Discipline à 50', den: 'Discipline at 50', ok: c => c.s.dis >= 50 },
{ id: 'monk', fr: 'Moine', en: 'Monk', dfr: 'Mental à 50', den: 'Mind at 50', ok: c => c.s.men >= 50 },
{ id: 'delver', fr: 'Explorateur de donjons', en: 'Dungeon delver', dfr: '3 donjons terminés', den: '3 dungeons cleared', ok: c => c.dungeons >= 3 },
{ id: 'slayer', fr: 'Tueur de boss', en: 'Boss slayer', dfr: '10 boss vaincus', den: '10 bosses defeated', ok: c => c.dungeons >= 10 },
{ id: 'ant', fr: 'Fourmi', en: 'Ant', dfr: '100 mis de côté dans tes tirelires', den: '100 put into your jars', ok: c => c.put >= 100 },
{ id: 'strategist', fr: 'Stratège', en: 'Strategist', dfr: '5 leçons de l\'Académie et 1 envie abandonnée', den: '5 Academy lessons and 1 want resisted', ok: c => c.lessons >= 5 && c.resisted >= 1 },
{ id: 'hunter', fr: 'Chasseur de quêtes', en: 'Quest hunter', dfr: '100 quêtes terminées', den: '100 quests completed', ok: c => c.quests >= 100 },
{ id: 'sage', fr: 'Sage', en: 'Sage', dfr: 'Toutes les stats à 40', den: 'Every stat at 40', ok: c => STATS.every(x => c.s[x.id] >= 40) },
{ id: 'everest', fr: 'Conquérant de l\'Everest', en: 'Everest conqueror', dfr: 'Niveau 100 : 8 849 m', den: 'Level 100: 8,849 m', ok: c => c.level >= MAX_LVL },
{ id: 'erudite', fr: 'Érudit', en: 'Scholar', dfr: '25 sessions focus', den: '25 focus sessions', ok: c => c.focus >= 25 },
{ id: 'phoenix', fr: 'Phénix', en: 'Phoenix', dfr: 'Une série sauvée par la rédemption', den: 'A streak saved by redemption', ok: c => c.redeems >= 1 },
{ id: 'prepared', fr: 'Préparé', en: 'Prepared', dfr: '10 révisions d\'examen', den: '10 exam revisions', ok: c => c.revs >= 10 },
{ id: 'climber', fr: 'Alpiniste', en: 'Mountaineer', dfr: '3 objectifs dépassés (« Monter la barre »)', den: '3 goals surpassed ("Raise the bar")', ok: c => c.summits >= 3 },
{ id: 'professor', fr: 'Professeur', en: 'Professor', dfr: 'Toutes les leçons de l\'Académie', den: 'Every Academy lesson', ok: c => c.lessons >= MO.LESSONS.length && MO.LESSONS.length > 0 },
{ id: 'banker', fr: 'Banquier', en: 'Banker', dfr: '500 mis de côté dans tes tirelires', den: '500 put into your jars', ok: c => c.put >= 500 },
{ id: 'untouchable', fr: 'Intouchable', en: 'Untouchable', dfr: '30 journées parfaites', den: '30 perfect days', ok: c => c.perfect >= 30 },
{ id: 'legendslayer', fr: 'Tueur de légendes', en: 'Legend slayer', dfr: 'Vaincre un donjon de rang Légende', den: 'Clear a Legend dungeon', ok: c => c.legendDg },
{ id: 'sysmaster', fr: 'Maître du Système', en: 'System master', dfr: '500 quêtes terminées', den: '500 quests completed', ok: c => c.quests >= 500 },
{ id: 'creator', fr: 'Créateur de PeakMind', en: 'PeakMind creator', dfr: 'Réservé au créateur de l\'appli', den: 'Reserved for the app\'s creator', ok: () => creatorOn() }
];
const titlesEarned = (c = titleCtx()) => creatorAll() ? TITLES.slice() : TITLES.filter(x => x.ok(c));
const titleNow = () => { const e = titlesEarned(); return e.find(x => x.id === S.title) || e[e.length - 1] || TITLES[0]; };
function checkTitles() {
if (creatorAll()) return;
const ids = titlesEarned().map(x => x.id);
if (!Array.isArray(S.titlesSeen)) { S.titlesSeen = ids; save(); return; }
const fresh = ids.filter(id => !S.titlesSeen.includes(id));
if (!fresh.length) return;
S.titlesSeen = S.titlesSeen.concat(fresh); save();
setTimeout(() => { toast('🏷️ ' + t('ti.new', { name: fresh.map(id => L(TITLES.find(x => x.id === id), '')).join(', ') })); SFX.play('equip'); }, 900);
}
function hunterCard() {
const s = hunterStats(), wk = hunterStats(weekStart()), M = Math.max(30, ...STATS.map(x => statVal(s[x.id])));
return `<section class="card hunter">
      <div class="row between"><span class="section-title" style="margin:0">${esc(t('hs.title'))}</span><button type="button" class="btn subtle q-act" id="hsTitle">🏷️ ${esc(L(titleNow(), ''))}</button></div>
      <div class="hunter-body">${radarSvg(s)}
        <div class="stat-list">${STATS.map(x => `<div class="stat-row"><span aria-hidden="true">${x.i}</span><b>${esc(L(x, ''))}</b><span class="num stat-v">${statVal(s[x.id])}${wk[x.id] ? `<small> +${wk[x.id]}</small>` : ''}</span>
          <div class="bar thin"><i style="width:${(statVal(s[x.id]) / M * 100).toFixed(1)}%"></i></div></div>`).join('')}</div></div>
      <p class="muted" style="margin:0;font-size:.82rem">${esc(t('hs.d'))}</p>
      <button type="button" class="btn ghost" id="rpOpen">📜 ${esc(t('rp.open2'))}</button>
    </section>`;
}
const reportWeek = () => new Date().getDay() === 1 ? dkey(addDays(parseKey(weekStart()), -7)) : weekStart();
function reportData(ws = reportWeek()) {
const we = dkey(addDays(parseKey(ws), 6)), st = ppStats(), days = st.days, q = S.quests || {}, log = q.log || {};
let xp = 0, before = 0, best = null;
for (const k in days) { if (k < ws) before += days[k]; else if (k <= we) { xp += days[k]; if (!best || days[k] > days[best]) best = k; } }
let quests = 0, perfect = 0;
for (const k in log) if (k >= ws && k <= we) { quests += (log[k].d || []).length; if (log[k].b) perfect++; }
const endXp = before + xp, lvl = levelOf(endXp);
return { ws, we, xp, quests, perfect, best, bestXp: best ? days[best] : 0, altEnd: altOf(endXp), altGain: altOf(endXp) - altOf(before),
level: lvl, rank: rankOf(lvl), gain: hunterStats(ws, we), stats: hunterStats('0000', we), streak: globalStreak(), title: titleNow() };
}
function reportCard() {
const dow = new Date().getDay(); if (!S.onboarded || (dow !== 0 && dow !== 1)) return '';
const r = reportData();
return `<section class="card report-card"><div class="row between"><span class="section-title" style="margin:0">${esc(t('rp.title'))}</span><span class="muted num">${esc(t('rp.week', { a: fmtDate(r.ws), b: fmtDate(r.we) }))}</span></div>
      <div class="rp-mini"><div><b class="num">+${nf(r.xp)}</b><small>${esc(t('rp.xp'))}</small></div><div><b class="num">${nf(r.quests)}</b><small>${esc(t('rp.quests'))}</small></div><div><b class="num">+${nf(r.altGain)} m</b><small>${esc(t('rp.alt'))}</small></div></div>
      <button type="button" class="btn block" id="rpOpenT">📜 ${esc(t('rp.open'))}</button></section>`;
}
const loadImg = src => new Promise(res => { const im = new Image(); im.onload = () => res(im); im.onerror = () => res(null); im.src = src; });
async function drawReport(r) {
const W = 1080, H = 1920, cv = document.createElement('canvas'); cv.width = W; cv.height = H;
const g = cv.getContext('2d'), th = themeOf(), dark = th.mode === 'dark';
try { await Promise.all(['700 80px "Chakra Petch"', '600 40px "Chakra Petch"', '500 36px "Space Grotesk"', '700 40px "Space Grotesk"'].map(f => document.fonts.load(f))); } catch (e) {  }
const A = th.a, A2 = th.a2, base = dark ? th.bg : '#0b1020', top = dark ? th.h2 : th.h1, INK = '#f2f6fc', MUT = 'rgba(214,224,240,.66)';
const D = (w, s, fam = 'Chakra Petch') => `${w} ${s}px "${fam}", "Segoe UI", sans-serif`;
let bg = g.createLinearGradient(0, 0, 0, H); bg.addColorStop(0, top); bg.addColorStop(.42, base); bg.addColorStop(1, base); g.fillStyle = bg; g.fillRect(0, 0, W, H);
let rg = g.createRadialGradient(W * .8, 120, 0, W * .8, 120, 760); rg.addColorStop(0, A + '55'); rg.addColorStop(1, A + '00'); g.fillStyle = rg; g.fillRect(0, 0, W, H);
rg = g.createRadialGradient(80, H * .62, 0, 80, H * .62, 700); rg.addColorStop(0, A2 + '33'); rg.addColorStop(1, A2 + '00'); g.fillStyle = rg; g.fillRect(0, 0, W, H);
g.strokeStyle = 'rgba(255,255,255,.035)'; g.lineWidth = 1; for (let y = 0; y < H; y += 6) { g.beginPath(); g.moveTo(0, y); g.lineTo(W, y); g.stroke(); }
const rr = (x, y, w, h, r) => { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); };
const txt = (s, x, y, font, color, align = 'left', spacing = 0) => { g.font = font; g.fillStyle = color; g.textAlign = align; if ('letterSpacing' in g) g.letterSpacing = spacing + 'px'; g.fillText(s, x, y); if ('letterSpacing' in g) g.letterSpacing = '0px'; };
g.strokeStyle = A; g.lineWidth = 4; g.beginPath(); g.arc(W / 2 - 190, 128, 26, 0, Math.PI * 2); g.stroke();
txt('!', W / 2 - 190, 142, D(700, 38), A, 'center'); txt(t('q.sys'), W / 2 + 20, 142, D(700, 40), A, 'center', 14);
g.fillStyle = A + '88'; g.fillRect(140, 190, W - 280, 3);
txt(t('rp.title').toUpperCase(), W / 2, 290, D(700, 78), INK, 'center', 2);
txt(t('rp.week', { a: fmtDate(r.ws), b: fmtDate(r.we) }), W / 2, 352, D(500, 38, 'Space Grotesk'), MUT, 'center');
const em = await loadImg('data:image/svg+xml;charset=utf-8,' + encodeURIComponent(rankEmblem(r.rank).replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" width="220" height="220" ')));
rr(70, 410, W - 140, 250, 34); g.fillStyle = 'rgba(255,255,255,.05)'; g.fill(); g.strokeStyle = A + '55'; g.lineWidth = 2; g.stroke();
if (em) g.drawImage(em, 100, 425, 220, 220);
const name = (S.name || 'PeakMind').slice(0, 20);
txt(name, 345, 515, D(700, name.length > 12 ? 62 : 76), INK);
txt('« ' + L(r.title, '') + ' »', 345, 572, D(600, 40), A);
txt(`${t('lvl.n', { n: r.level })} · ${L(r.rank, '')}`, 345, 625, D(500, 36, 'Space Grotesk'), MUT);
const tiles = [[`+${nf(r.xp)}`, t('rp.xp')], [nf(r.quests), t('rp.quests')], [nf(r.perfect), t('rp.perfect')], [`+${nf(r.altGain)} m`, t('rp.alt')]];
tiles.forEach(([v, l], i) => {
const x = 70 + (i % 2) * 480, y = 700 + Math.floor(i / 2) * 230;
rr(x, y, 460, 200, 30); g.fillStyle = 'rgba(255,255,255,.05)'; g.fill(); g.strokeStyle = (i % 2 ? A2 : A) + '66'; g.stroke();
txt(v, x + 36, y + 112, D(700, 84), i % 2 ? A2 : A); txt(l, x + 38, y + 166, D(500, 34, 'Space Grotesk'), MUT);
});
txt(t('hs.title').toUpperCase(), 76, 1200, D(600, 36), MUT, 'left', 6);
const M = Math.max(30, ...STATS.map(x => statVal(r.stats[x.id])));
STATS.forEach((x, i) => {
const y = 1262 + i * 66;
txt(`${x.i}  ${L(x, '')}`, 76, y + 12, D(700, 38, 'Space Grotesk'), INK);
rr(470, y - 14, 380, 22, 11); g.fillStyle = 'rgba(255,255,255,.08)'; g.fill();
const v = statVal(r.stats[x.id]), bw = Math.max(22, 380 * v / M), lg = g.createLinearGradient(470, 0, 470 + bw, 0); lg.addColorStop(0, A2); lg.addColorStop(1, A);
rr(470, y - 14, bw, 22, 11); g.fillStyle = lg; g.fill();
txt(String(v), 940, y + 12, D(700, 40), INK, 'right');
if (r.gain[x.id]) txt('+' + r.gain[x.id], 1004, y + 12, D(600, 32), A, 'right');
});
const by = 1830, ty = 1690, X = i => ascX(i, 70, W - 90), Y = a => by - a / ALT_TOP * (by - ty);
const pts = [[70, by], ...SUMMITS.map((s, i) => [X(i), Y(s.a)])];
g.beginPath(); pts.forEach(([x, y], i) => i ? g.lineTo(x, y) : g.moveTo(x, y)); g.lineTo(W - 90, by); g.closePath();
const mg = g.createLinearGradient(0, ty, 0, by); mg.addColorStop(0, A + '44'); mg.addColorStop(1, A + '00'); g.fillStyle = mg; g.fill();
g.beginPath(); pts.forEach(([x, y], i) => i ? g.lineTo(x, y) : g.moveTo(x, y)); g.strokeStyle = 'rgba(255,255,255,.25)'; g.lineWidth = 4; g.stroke();
let cx = pts[pts.length - 1][0], cy = Y(ALT_TOP);
for (let i = 0; i < SUMMITS.length; i++) { const a0 = i ? SUMMITS[i - 1].a : 0, a1 = SUMMITS[i].a; if (r.altEnd <= a1) { cx = pts[i][0] + (r.altEnd - a0) / (a1 - a0) * (pts[i + 1][0] - pts[i][0]); cy = Y(r.altEnd); break; } }
g.save(); g.beginPath(); g.rect(0, 0, cx, H); g.clip();
g.beginPath(); pts.forEach(([x, y], i) => i ? g.lineTo(x, y) : g.moveTo(x, y)); g.strokeStyle = A; g.lineWidth = 7; g.shadowColor = A; g.shadowBlur = 24; g.stroke(); g.restore();
g.fillStyle = INK; g.shadowColor = A; g.shadowBlur = 30; g.beginPath(); g.arc(cx, cy, 13, 0, Math.PI * 2); g.fill(); g.shadowBlur = 0;
const n = summitsReached(r.altEnd), next = SUMMITS[n];
txt(`⛰ ${nf(r.altEnd)} m`, 76, 1650, D(700, 56), INK);
txt(next ? t('as.nextShort', { name: L(next, ''), a: nf(next.a) }) : t('as.top'), 1004, 1650, D(500, 34, 'Space Grotesk'), MUT, 'right');
txt('PEAK', W / 2 - 8, 1898, D(700, 46), INK, 'right', 10); txt('MIND', W / 2 + 8, 1898, D(700, 46), A, 'left', 10);
return cv;
}
async function openReport(ws) {
const r = reportData(ws);
openSheet(`<div class="sheet-head"><h2>${esc(t('rp.title'))}</h2><button type="button" class="icon-btn" id="closeR" aria-label="${esc(t('close'))}">✕</button></div>
      <p class="muted" style="margin:0">${esc(t('rp.week', { a: fmtDate(r.ws), b: fmtDate(r.we) }))}${r.best ? ' · ' + esc(t('rp.best', { d: fmtDate(r.best, true), n: nf(r.bestXp) })) : ''}</p>
      <div class="rp-img" id="rpImg"><span class="muted">${esc(t('rp.making'))}</span></div>
      <div class="grid-2"><button type="button" class="btn" id="rpShare" disabled>${esc(t('rp.share'))}</button><button type="button" class="btn subtle" id="rpSave" disabled>${esc(t('rp.save'))}</button></div>
      <p class="muted" style="margin:0;font-size:.82rem;text-align:center">${esc(t('rp.hint'))}</p>`);
$('#closeR').onclick = closeSheet;
SFX.play('quest');
const cv = await drawReport(r), blob = await new Promise(res => cv.toBlob(res, 'image/png'));
const box = $('#rpImg'); if (!box || !blob) return;
const url = URL.createObjectURL(blob), file = new File([blob], `peakmind-rapport-${r.ws}.png`, { type: 'image/png' });
box.innerHTML = `<img src="${url}" alt="${esc(t('rp.title'))}">`;
const share = $('#rpShare'), dl = $('#rpSave');
const download = () => { const a = document.createElement('a'); a.href = url; a.download = file.name; document.body.appendChild(a); a.click(); a.remove(); toast(t('rp.saved')); };
share.disabled = dl.disabled = false;
share.onclick = async () => {
if (navigator.canShare && navigator.canShare({ files: [file] })) { try { await navigator.share({ files: [file], text: '#peakmind' }); } catch (e) {  } }
else download();
};
dl.onclick = download;
onSheetClose = () => setTimeout(() => URL.revokeObjectURL(url), 1000);
}
Object.assign(T.fr, {
'as.title': 'L\'ascension', 'as.next': 'Prochain palier : {name} · {a} m (encore {d} m)', 'as.nextShort': 'prochain palier : {name} · {a} m', 'as.top': 'Tu es au sommet : Légende, 8 849 m.',
'as.base': 'Camp de base', 'as.d': 'Chaque XP te fait grimper. Chaque rang est un palier de la montagne : tu pars de Fer au camp de base, et Légende (niveau 100) t\'attend au sommet, à 8 849 m.', 'as.summits': 'Paliers atteints : {n}/{t}',
'hs.title': 'Fiche du chasseur', 'hs.d': 'Tes quêtes et tes actions font monter tes stats : sport → Force ou Endurance, devoirs → Intelligence, régularité → Discipline, calme et santé → Mental.',
'ti.new': 'Nouveau titre : {name}', 'ti.hint': 'Touche un titre débloqué pour l\'afficher sous ton pseudo.', 'ti.equipped': 'Titre équipé', 'pt.titles': 'Titres',
'rp.title': 'Rapport du Système', 'rp.week': 'du {a} au {b}', 'rp.xp': 'XP gagnée', 'rp.quests': 'Quêtes', 'rp.perfect': 'Journées parfaites', 'rp.alt': 'Altitude',
'rp.best': 'meilleur jour : {d} ({n} XP)', 'rp.share': 'Partager', 'rp.save': 'Enregistrer l\'image', 'rp.open': 'Voir et partager mon rapport', 'rp.open2': 'Rapport de la semaine',
'rp.making': 'Le Système prépare ton rapport…', 'rp.hint': 'Poste-le en story ou sur TikTok avec #peakmind.', 'rp.saved': 'Image enregistrée'
});
Object.assign(T.en, {
'as.title': 'The ascent', 'as.next': 'Next stage: {name} · {a} m ({d} m to go)', 'as.nextShort': 'next stage: {name} · {a} m', 'as.top': 'You\'re at the top: Legend, 8,849 m.',
'as.base': 'Base camp', 'as.d': 'Every XP takes you higher. Each rank is a stage of the mountain: you start as Iron at base camp, and Legend (level 100) waits at the summit, 8,849 m up.', 'as.summits': 'Stages reached: {n}/{t}',
'hs.title': 'Hunter profile', 'hs.d': 'Your quests and actions raise your stats: sport → Strength or Stamina, homework → Intelligence, consistency → Discipline, calm and health → Mind.',
'ti.new': 'New title: {name}', 'ti.hint': 'Tap an unlocked title to show it under your name.', 'ti.equipped': 'Title equipped', 'pt.titles': 'Titles',
'rp.title': 'System report', 'rp.week': '{a} to {b}', 'rp.xp': 'XP earned', 'rp.quests': 'Quests', 'rp.perfect': 'Perfect days', 'rp.alt': 'Altitude',
'rp.best': 'best day: {d} ({n} XP)', 'rp.share': 'Share', 'rp.save': 'Save image', 'rp.open': 'See and share my report', 'rp.open2': 'Weekly report',
'rp.making': 'The System is preparing your report…', 'rp.hint': 'Post it in your story or on TikTok with #peakmind.', 'rp.saved': 'Image saved'
});
function mon() {
if (!S.money || typeof S.money !== 'object') S.money = {};
const m = S.money;
if (!m.cur) m.cur = S.lang === 'en' ? '$' : '€';
if (!Array.isArray(m.tx)) m.tx = [];
if (!m.zero || typeof m.zero !== 'object') m.zero = {};
if (!Array.isArray(m.wish)) m.wish = [];
if (!m.lessons || typeof m.lessons !== 'object') m.lessons = {};
if (m.budget != null && !(m.budget > 0)) m.budget = null;
return m;
}
const cur = () => mon().cur;
function money(n) {
const c = cur(), a = Math.abs(Number(n) || 0), frac = Math.round(a * 100) % 100 !== 0;
const s = a.toLocaleString(S.lang === 'fr' ? 'fr-FR' : 'en-US', { minimumFractionDigits: frac ? 2 : 0, maximumFractionDigits: 2 });
return (n < 0 ? '−' : '') + (c === '$' || c === '£' ? c + s : s + ' ' + c);
}
const r2 = n => Math.round(n * 100) / 100;
const fmtDateY = k => { const d = parseKey(k); return d.toLocaleDateString(S.lang === 'fr' ? 'fr-FR' : 'en-US', d.getFullYear() === new Date().getFullYear() ? { day: 'numeric', month: 'long' } : { day: 'numeric', month: 'long', year: 'numeric' }); };
function moneyLogDays() { const m = mon(), s = new Set(m.tx.map(x => x.d)); for (const k in m.zero) if (m.zero[k]) s.add(k); return s; }
const spentIn = (from, to) => r2(mon().tx.filter(x => x.d >= from && x.d <= to).reduce((s, x) => s + x.a, 0));
const weekEnd = ws => dkey(addDays(parseKey(ws), 6));
function budgetWeeksOk() {
const m = mon(); if (!m.budget) return 0;
const days = [...moneyLogDays()]; let n = 0;
for (let i = 1; i <= 12; i++) {
const ws = dkey(addDays(parseKey(weekStart()), -7 * i)), we = weekEnd(ws);
if (m.since && we < m.since) break;
if (days.filter(k => k >= ws && k <= we).length >= 3 && spentIn(ws, we) <= m.budget) n++;
}
return n;
}
const H48 = 48 * 3600e3;
const wishRipe = w => Date.now() - w.t0 >= H48;
function vaultSummary() {
const m = mon(), ws = weekStart();
return { jars: r2(S.goals.filter(g => g.type === 'save').reduce((s, g) => s + saveTotal(g), 0)),
saved: r2(m.wish.filter(w => w.st === 'skip').reduce((s, w) => s + w.p, 0)),
left: m.budget ? r2(m.budget - spentIn(ws, weekEnd(ws))) : null,
ripe: m.wish.filter(w => w.st === 'wait' && wishRipe(w)).length };
}
const vaultUsed = () => { const m = mon(); return (S.interests || []).includes('money') || S.goals.some(g => g.type === 'save') || !!m.budget || m.tx.length > 0 || m.wish.length > 0 || Object.keys(m.lessons).length > 0; };
function saveMove(g, a) {
if (!g) return;
const before = ppStats().total, was = pct(g);
g.dep = (g.dep || []).concat([{ d: today(), a: r2(a) }]);
if (a > 0) markActivity();
save(); checkBadges();
SFX.play(a > 0 ? 'coin' : 'down'); if (a > 0) buzz(12);
rewardFeedback(before, a > 0 ? t('dep.ok', { a: money(a), g: g.title }) : t('dep.out', { a: money(-a) }));
if (was < 1 && pct(g) >= 1) setTimeout(() => { toast('🎁 ' + t('dep.funded', { g: g.title })); SFX.play('levelUp'); buzz([30, 60, 50]); }, 1100);
}
function saveEta(g) {
const left = g.target - saveTotal(g);
if (left <= 0) return { done: true };
const age = daysBetween(g.created, today()) + 1;
let perDay = 0, src = 'rate';
if (age >= 14) { const win = Math.min(28, age), from = dkey(addDays(new Date(), -(win - 1))); perDay = (g.dep || []).filter(e => e.d >= from).reduce((s, e) => s + e.a, 0) / win; }
if (perDay <= 0 && g.plan > 0) { perDay = g.plan / 7; src = 'plan'; }
if (perDay <= 0) return null;
const days = Math.ceil(left / perDay);
if (days > 3650) return { far: true };
const wk = perDay * 7, extra = [1, 2, 5, 10, 20, 50, 100].find(s => s >= wk * .25) || 100, days2 = Math.ceil(left / (perDay + extra / 7));
return { src, wk: r2(wk), date: dkey(addDays(new Date(), days)), extra, date2: dkey(addDays(new Date(), days2)), gain: days - days2 };
}
function saveEtaHtml(g) {
const e = saveEta(g);
if (!e) return `<p class="eta muted">${esc(t('eta.none'))}</p>`;
if (e.done) return `<p class="eta ok-txt">🎁 ${esc(t('eta.done'))}</p>`;
if (e.far) return `<p class="eta muted">${esc(t('eta.far'))}</p>`;
return `<p class="eta">🎯 <span>${esc(t(e.src === 'plan' ? 'eta.plan' : 'eta.rate', { w: money(e.wk), date: fmtDateY(e.date) }))}</span></p>`
+ (e.gain >= 3 ? `<p class="eta boost">⚡ <span>${esc(t('eta.boost', { x: money(e.extra), date: fmtDateY(e.date2), n: e.gain }))}</span></p>` : '');
}
let mtnSeq = 0;
function saveMtn(p, cls = '') {
const id = 'sm' + (++mtnSeq), y = (66 - 52 * Math.max(0, Math.min(1, p))).toFixed(1), path = 'M2 66L30 34l12 10 20-30 22 24 10-8 24 36z';
return `<svg class="save-mtn ${cls}" viewBox="0 0 120 68" aria-hidden="true"><defs><linearGradient id="${id}g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--accent)"/><stop offset="1" stop-color="var(--accent-2)" stop-opacity=".55"/></linearGradient><clipPath id="${id}c"><rect x="0" y="${y}" width="120" height="70"/></clipPath></defs>
      <path d="${path}" class="sm-bg"/><path d="${path}" fill="url(#${id}g)" clip-path="url(#${id}c)" class="sm-fill"/>
      <path d="M2 66L30 34l12 10 20-30 22 24 10-8 24 36" class="sm-ridge"/><path d="M62 14V2l9 3.5-9 3.5" class="sm-flag${p >= 1 ? ' on' : ''}"/></svg>`;
}
function saveCard(g) {
const tot = saveTotal(g), p = pct(g);
return `<article class="card save-card" data-goal="${g.id}">
      <div class="card-head"><div class="emoji">${esc(g.emoji)}</div>
        <div class="card-title" data-open="${g.id}" role="button" tabindex="0"><h3>${esc(g.title)}</h3><p>${esc(p >= 1 ? t('eta.done') : t('save.left', { n: money(g.target - tot) }))}</p></div></div>
      <div class="row between" style="align-items:flex-end"><div><span class="big-num num">${esc(money(tot))}</span><div class="muted num">/ ${esc(money(g.target))} · ${Math.round(p * 100)} %</div></div>${saveMtn(p)}</div>
      <div class="bar${p >= 1 ? ' good' : ''}"><i style="width:${(p * 100).toFixed(1)}%"></i></div>
      ${saveEtaHtml(g)}
      ${p < 1 ? `<form class="inline-form" data-dep="${g.id}"><input type="number" min="0" step="any" inputmode="decimal" placeholder="${esc(t('dep.amount', { c: cur() }))}" aria-label="${esc(t('dep.amount', { c: cur() }))}" required><button class="btn" type="submit">＋ ${esc(t('dep.add'))}</button></form>` : ''}
    </article>`;
}
function vaultCard() {
if (!S.onboarded || !vaultUsed() || !featOn('vault')) return '';
const v = vaultSummary();
return `<section class="card vault-card" id="vaultCard" role="button" tabindex="0" aria-label="${esc(t('v.title'))}">
      <div class="row between"><span class="section-title v-head" style="margin:0">${IC.vault}${esc(t('v.title'))}</span><span class="vault-go" aria-hidden="true">›</span></div>
      <div class="rp-mini v-mini"><div><b class="num">${esc(money(v.jars))}</b><small>${esc(t('v.s.jars'))}</small></div>
        <div><b class="num${v.left != null && v.left < 0 ? ' neg' : ''}">${v.left == null ? '—' : esc(money(v.left))}</b><small>${esc(t('v.s.left'))}</small></div>
        <div><b class="num">${esc(money(v.saved))}</b><small>${esc(t('v.s.saved'))}</small></div></div>
      ${v.ripe ? `<p class="v-alert">⏰ ${esc(t('v.ripe', { n: v.ripe }))}</p>` : ''}</section>`;
}
function bindVaultCard(root) {
const c = root.querySelector('#vaultCard'); if (!c) return;
const go = () => openVault(vaultSummary().ripe ? 'wish' : null);
c.onclick = go; c.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } };
}
const VAULT_TABS = ['proj', 'budget', 'wish', 'academy'];
const VAULT_TAB = { mexp: 'budget', mbudget: 'budget', mwish: 'wish', mlesson: 'academy', savegoal: 'proj' };
const VT_ICO = { proj: '🐷', budget: '📊', wish: '🔒', academy: '🎓' };
function sheetView(html, cls, snd) {
const panel = sheet.querySelector('.sheet-panel');
if (!sheet.hidden && panel && panel.classList.contains(cls)) { panel.innerHTML = '<div class="grabber"></div>' + html; if (snd) SFX.play(snd); return panel; }
openSheet(html); const p = sheet.querySelector('.sheet-panel'); p.classList.add(cls); return p;
}
function openVault(tab, snd) {
if (tab && VAULT_TABS.includes(tab)) S.vaultTab = tab;
const vt = VAULT_TABS.includes(S.vaultTab) ? S.vaultTab : 'proj', v = vaultSummary();
const body = { proj: vaultProj, budget: vaultBudget, wish: vaultWish, academy: vaultAcademy }[vt]();
sheetView(`<div class="sheet-head"><div class="emoji vault-ico">${IC.vault}</div><h2>${esc(t('v.title'))}</h2><button type="button" class="icon-btn" id="closeV" aria-label="${esc(t('close'))}">✕</button></div>
      <div class="rp-mini v-mini"><div><b class="num">${esc(money(v.jars))}</b><small>${esc(t('v.s.jars'))}</small></div>
        <div><b class="num${v.left != null && v.left < 0 ? ' neg' : ''}">${v.left == null ? '—' : esc(money(v.left))}</b><small>${esc(t('v.s.left'))}</small></div>
        <div><b class="num">${esc(money(v.saved))}</b><small>${esc(t('v.s.saved'))}</small></div></div>
      <div class="seg v-seg" role="tablist" aria-label="${esc(t('v.title'))}">${VAULT_TABS.map(k => `<button type="button" role="tab" data-vtab="${k}" aria-selected="${k === vt}"><span aria-hidden="true">${VT_ICO[k]}</span>${esc(t('v.tab.' + k))}${k === 'wish' && v.ripe ? '<i class="v-dot"></i>' : ''}</button>`).join('')}</div>
      <div class="v-body">${body}</div>
      <p class="muted v-privacy">🔒 ${esc(t('v.private'))}</p>`, 'vault-sheet', snd);
$('#closeV').onclick = closeSheet;
sheet.querySelectorAll('[data-vtab]').forEach(b => b.onclick = () => { if (S.vaultTab !== b.dataset.vtab) { S.vaultTab = b.dataset.vtab; saveUI(); openVault(null, 'nav'); } });
({ proj: bindVaultProj, budget: bindVaultBudget, wish: bindVaultWish, academy: bindVaultAcademy }[vt])();
}
const vaultRefresh = () => { render(); openVault(); };
function vaultProj() {
const saves = S.goals.filter(g => g.type === 'save');
return (saves.length ? `<div class="types">${saves.map(g => { const p = pct(g), e = saveEta(g);
return `<button type="button" class="type v-jar" data-vopen="${g.id}"><div class="emoji">${esc(g.emoji)}</div><div style="min-width:0;flex:1;display:grid;gap:5px"><b style="text-transform:none">${esc(g.title)}</b><small class="num">${esc(money(saveTotal(g)))} / ${esc(money(g.target))}${e && e.date ? ' · 🎯 ' + esc(fmtDateY(e.date)) : e && e.done ? ' · 🎁' : ''}</small><div class="bar thin${p >= 1 ? ' good' : ''}"><i style="width:${(Math.max(.02, p) * 100).toFixed(1)}%"></i></div></div>${saveMtn(p, 'xs')}</button>`; }).join('')}</div>`
: `<div class="v-empty"><span aria-hidden="true">🐷</span><p class="muted">${esc(t('v.proj.empty'))}</p></div>`)
+ `<button type="button" class="btn block" id="vNewJar">＋ ${esc(t('v.proj.new'))}</button><p class="muted v-tip">💡 ${esc(t('v.proj.tip'))}</p>`;
}
function bindVaultProj() {
sheet.querySelectorAll('[data-vopen]').forEach(b => b.onclick = () => openDetail(b.dataset.vopen));
$('#vNewJar').onclick = () => pickTemplate('save');
}
function vaultBudget() {
const m = mon(), c = cur();
if (!m.budget || S.vaultEdit) {
const P = [5, 10, 15, 20, 30, 50];
return `<div class="card v-setup"><b class="v-q">${esc(t('v.b.q'))}</b><p class="muted" style="margin:0">${esc(t('v.b.d'))}</p>
        <div class="chips">${P.map(n => `<button type="button" class="chip num" data-vb="${n}" aria-pressed="${m.budget === n}">${esc(money(n))}</button>`).join('')}</div>
        <form class="inline-form" id="vbForm"><input id="vbIn" type="number" min="1" step="any" inputmode="decimal" placeholder="${esc(t('v.b.other', { c }))}" value="${m.budget && !P.includes(m.budget) ? m.budget : ''}"><button class="btn" type="submit">${esc(t('v.b.set'))}</button></form>
        <div class="field">${esc(t('v.cur'))}<div class="chips">${MO.CURS.map(x => `<button type="button" class="chip" data-vcur="${esc(x)}" aria-pressed="${x === c}">${esc(x)}</button>`).join('')}</div></div>
        ${m.budget ? `<button type="button" class="btn subtle" id="vbCancel">${esc(t('cancel'))}</button>` : ''}</div>`;
}
const ws = weekStart(), we = weekEnd(ws), tk = today(), spent = spentIn(ws, we), left = r2(m.budget - spent), p = spent / m.budget, dl = daysBetween(tk, we) + 1;
const wk = m.tx.filter(x => x.d >= ws && x.d <= we), logged = moneyLogDays().has(tk), catOf = id => MO.CATS.find(x => x.id === id) || MO.CATS[MO.CATS.length - 1];
const selCat = MO.CATS.some(x => x.id === S.vaultCat) ? S.vaultCat : MO.CATS[0].id;
let h = `<div class="card v-gauge${left < 0 ? ' over' : ''}"><div class="row between"><span class="section-title" style="margin:0">${esc(t('v.b.week'))}</span><button type="button" class="icon-btn v-edit" id="vbEdit" aria-label="${esc(t('v.b.edit'))}" title="${esc(t('v.b.edit'))}">${IC.edit}</button></div>
      <div class="v-left"><b class="big-num num">${esc(money(Math.abs(left)))}</b><span>${esc(t(left >= 0 ? 'v.b.left' : 'v.b.over'))}</span></div>
      <div class="bar ${left < 0 ? 'over' : p < .75 ? 'good' : 'warn'}"><i style="width:${Math.min(100, p * 100).toFixed(1)}%"></i></div>
      <small class="muted num">${esc(t('v.b.spent', { s: money(spent), b: money(m.budget) }))}${left > 0 && dl > 1 ? ' · ' + esc(t('v.b.perday', { n: money(r2(left / dl)) })) : ''}</small></div>
      <form class="card v-add" id="vAdd"><span class="section-title" style="margin:0">${esc(t('v.b.add'))}</span>
        <div class="chips v-cats">${MO.CATS.map(x => `<button type="button" class="chip" data-vcat="${x.id}" aria-pressed="${x.id === selCat}">${x.e} ${esc(L(x, ''))}</button>`).join('')}</div>
        <input id="vNote" maxlength="40" placeholder="${esc(t('v.b.note'))}" aria-label="${esc(t('v.b.note'))}">
        <div class="inline-form"><input id="vAmt" type="number" min="0" step="any" inputmode="decimal" placeholder="${esc(t('dep.amount', { c }))}" aria-label="${esc(t('dep.amount', { c }))}" required><button class="btn" type="submit">${esc(t('card.add'))}</button></div>
        ${m.zero[tk] ? `<p class="ok-txt" style="margin:0">${esc(t('v.b.zeroOk'))}</p>` : !logged ? `<button type="button" class="btn ghost block" id="vZero">✓ ${esc(t('v.b.zero'))}</button>` : ''}</form>`;
if (spent > 0) {
const by = MO.CATS.map(x => ({ x, s: r2(wk.filter(y => catOf(y.c) === x).reduce((a, y) => a + y.a, 0)) })).filter(o => o.s > 0).sort((a, b) => b.s - a.s);
h += `<div class="card"><span class="section-title" style="margin:0">${esc(t('v.b.where'))}</span>
        <div class="v-stack">${by.map(o => `<i style="width:${(o.s / spent * 100).toFixed(1)}%;background:${o.x.c}" title="${esc(L(o.x, ''))}"></i>`).join('')}</div>
        <div class="v-legend">${by.map(o => `<div><span><i style="background:${o.x.c}"></i>${o.x.e} ${esc(L(o.x, ''))}</span><b class="num">${esc(money(o.s))} <small class="muted">${Math.round(o.s / spent * 100)} %</small></b></div>`).join('')}</div></div>`;
}
h += `<div class="card"><span class="section-title" style="margin:0">${esc(t('v.b.list'))}</span>${wk.length ? `<div class="history">${wk.slice().reverse().map(x => `<div><span>${catOf(x.c).e} ${esc(x.n || L(catOf(x.c), ''))} <small class="muted">· ${esc(fmtDate(x.d))}</small></span><span class="row" style="gap:10px"><b class="num">${esc(money(x.a))}</b><button type="button" class="tx-del" data-txdel="${x.id}" aria-label="${esc(t('v.del'))}">✕</button></span></div>`).join('')}</div>` : `<p class="muted" style="margin:0">${esc(t('v.b.none'))}</p>`}</div>`;
const weeks = [3, 2, 1, 0].map(i => { const s0 = dkey(addDays(parseKey(ws), -7 * i)); return { ws: s0, s: spentIn(s0, weekEnd(s0)) }; });
const top = Math.max(m.budget * 1.2, ...weeks.map(w => w.s));
h += `<div class="card"><span class="section-title" style="margin:0">${esc(t('v.b.weeks'))}</span><div class="v-weeks">${weeks.map(w => `<div class="v-wk${w.s > m.budget ? ' over' : ''}${w.ws === ws ? ' now' : ''}"><span class="v-col"><b class="num">${esc(money(w.s))}</b><i style="height:${Math.max(2, w.s / top * 86).toFixed(1)}px"></i></span><small>${esc(fmtDate(w.ws))}</small></div>`).join('')}<span class="v-bline" style="bottom:calc(22px + ${(m.budget / top * 86).toFixed(1)}px)"><em>${esc(money(m.budget))}</em></span></div></div>`;
return h;
}
function bindVaultBudget() {
const m = mon();
const setBudget = n => {
if (!(n > 0)) { SFX.play('error'); return; }
const before = ppStats().total;
m.budget = r2(n); if (!m.since) m.since = today(); S.vaultEdit = false; save(); SFX.play('equip');
render(); openVault(); rewardFeedback(before, t('v.b.ok', { a: money(m.budget) }));
};
sheet.querySelectorAll('[data-vb]').forEach(b => b.onclick = () => setBudget(+b.dataset.vb));
const bf = $('#vbForm'); if (bf) bf.onsubmit = e => { e.preventDefault(); setBudget(parseFloat($('#vbIn').value.replace(',', '.'))); };
sheet.querySelectorAll('[data-vcur]').forEach(b => b.onclick = () => { m.cur = b.dataset.vcur; save(); SFX.play('select'); vaultRefresh(); });
const bc = $('#vbCancel'); if (bc) bc.onclick = () => { S.vaultEdit = false; openVault(null, 'close'); };
const be = $('#vbEdit'); if (be) be.onclick = () => { S.vaultEdit = true; openVault(null, 'open'); };
sheet.querySelectorAll('[data-vcat]').forEach(b => b.onclick = () => { S.vaultCat = b.dataset.vcat; sheet.querySelectorAll('[data-vcat]').forEach(x => x.setAttribute('aria-pressed', String(x === b))); SFX.play('tick'); });
const add = $('#vAdd');
if (add) add.onsubmit = e => {
e.preventDefault();
const a = parseFloat($('#vAmt').value.replace(',', '.'));
if (!Number.isFinite(a) || a <= 0) { SFX.play('error'); $('#vAmt').focus(); return; }
const before = ppStats().total, tk = today(), ws = weekStart(), wasOver = spentIn(ws, weekEnd(ws)) > m.budget;
m.tx.push({ id: uid(), d: tk, a: r2(a), c: MO.CATS.some(x => x.id === S.vaultCat) ? S.vaultCat : MO.CATS[0].id, n: $('#vNote').value.trim().slice(0, 40) });
delete m.zero[tk];
markActivity(); save(); checkBadges(); SFX.play('coin');
const over = spentIn(ws, weekEnd(ws)) > m.budget;
vaultRefresh(); rewardFeedback(before, t('v.b.added', { a: money(a) }));
if (over && !wasOver) setTimeout(() => { toast('⚠️ ' + t('v.b.warn')); SFX.play('error'); }, 700);
};
const z = $('#vZero');
if (z) z.onclick = () => { const before = ppStats().total; m.zero[today()] = true; markActivity(); save(); checkBadges(); SFX.play('check'); buzz(14); vaultRefresh(); rewardFeedback(before, t('v.b.zeroDone')); };
sheet.querySelectorAll('[data-txdel]').forEach(b => b.onclick = () => confirmBox(t('v.b.del.q'), t('v.del'), () => { m.tx = m.tx.filter(x => x.id !== b.dataset.txdel); save(); SFX.play('down'); render(); openVault(); }));
}
function vaultWish() {
const m = mon(), now = Date.now(), c = cur();
const waiting = m.wish.filter(w => w.st === 'wait').sort((a, b) => a.t0 - b.t0), past = m.wish.filter(w => w.st !== 'wait').slice(-10).reverse();
const skipped = m.wish.filter(w => w.st === 'skip'), saved = r2(skipped.reduce((s, w) => s + w.p, 0));
let h = `<div class="card v-saved"><span class="section-title" style="margin:0">${esc(t('v.w.saved'))}</span><b class="big-num num">${esc(money(saved))}</b><small class="muted">${esc(t('v.w.savedN', { n: skipped.length }))}</small></div>`;
h += waiting.map(w => {
const el = now - w.t0, ripe = el >= H48;
return `<div class="card v-wish${ripe ? ' ripe' : ''}"><div class="row between"><b class="v-wn">${ripe ? '⏰' : IC.lock} ${esc(w.n)}</b><b class="num">${esc(money(w.p))}</b></div>
        ${ripe ? `<p style="margin:0">${esc(t('v.w.ask'))}</p><div class="grid-2"><button type="button" class="btn subtle" data-wbuy="${w.id}">${esc(t('v.w.buy'))}</button><button type="button" class="btn" data-wskip="${w.id}">${esc(t('v.w.skip', { xp: PP.wish }))}</button></div>`
: `<div class="bar thin"><i style="width:${(el / H48 * 100).toFixed(1)}%"></i></div><div class="row between"><small class="muted num">${esc(t('v.w.left', { h: Math.max(1, Math.ceil((H48 - el) / 3.6e6)) }))}</small><button type="button" class="link-btn" data-wgive="${w.id}">${esc(t('v.w.give'))}</button></div>`}</div>`;
}).join('');
h += `<form class="card v-add" id="vWish"><span class="section-title" style="margin:0">${esc(t('v.w.add'))}</span><p class="muted" style="margin:0">${esc(t('v.w.d'))}</p>
      <input id="vwName" maxlength="40" placeholder="${esc(t('v.w.name'))}" aria-label="${esc(t('v.w.name'))}" required>
      <div class="inline-form"><input id="vwPrice" type="number" min="0" step="any" inputmode="decimal" placeholder="${esc(t('v.w.price', { c }))}" aria-label="${esc(t('v.w.price', { c }))}" required><button class="btn" type="submit">${IC.lock}${esc(t('v.w.lock'))}</button></div></form>`;
if (!waiting.length && !past.length) h += `<p class="muted v-tip">💡 ${esc(t('v.w.none'))}</p>`;
if (past.length) h += `<div class="card"><span class="section-title" style="margin:0">${esc(t('v.w.hist'))}</span><div class="history">${past.map(w => `<div><span>${w.st === 'skip' ? '🧊' : '🛍️'} ${esc(w.n)} <small class="muted">· ${esc(t(w.st === 'skip' ? 'v.w.hSkip' : 'v.w.hBuy'))}</small></span><b class="num ${w.st === 'skip' ? 'pos' : ''}">${esc(money(w.p))}</b></div>`).join('')}</div></div>`;
return h;
}
function bindVaultWish() {
const m = mon(), find = id => m.wish.find(w => w.id === id);
const f = $('#vWish');
if (f) f.onsubmit = e => {
e.preventDefault();
const n = $('#vwName').value.trim().slice(0, 40), p = parseFloat($('#vwPrice').value.replace(',', '.'));
if (!n) { SFX.play('error'); $('#vwName').focus(); return; }
if (!Number.isFinite(p) || p < 0) { SFX.play('error'); $('#vwPrice').focus(); return; }
m.wish.push({ id: uid(), n, p: r2(p), t0: Date.now(), st: 'wait' });
markActivity(); save(); SFX.play('lock'); buzz(20);
vaultRefresh(); toast('🔒 ' + t('v.w.locked'));
};
sheet.querySelectorAll('[data-wskip]').forEach(b => b.onclick = () => {
const w = find(b.dataset.wskip); if (!w) return;
const before = ppStats().total;
Object.assign(w, { st: 'skip', ripe: true, at: today() }); save(); checkBadges(); SFX.play('saved'); buzz([14, 40, 20]);
vaultRefresh(); rewardFeedback(before, '🧊 ' + t('v.w.skipped', { a: money(w.p) }));
});
sheet.querySelectorAll('[data-wgive]').forEach(b => b.onclick = () => {
const w = find(b.dataset.wgive); if (!w) return;
Object.assign(w, { st: 'skip', ripe: false, at: today() }); save(); checkBadges(); SFX.play('saved');
vaultRefresh(); toast('🧊 ' + t('v.w.skipped', { a: money(w.p) }) + ' · ' + t('v.w.early'));
});
sheet.querySelectorAll('[data-wbuy]').forEach(b => b.onclick = () => {
const w = find(b.dataset.wbuy); if (!w) return;
Object.assign(w, { st: 'buy', at: today() });
if (m.budget && w.p > 0) { m.tx.push({ id: uid(), d: today(), a: w.p, c: 'other', n: w.n }); delete m.zero[today()]; }
save(); SFX.play('select');
vaultRefresh(); toast('🛍️ ' + t('v.w.bought') + (m.budget && w.p > 0 ? ' ' + t('v.w.boughtB') : ''));
});
}
function vaultAcademy() {
const m = mon(), n = MO.LESSONS.filter(l => m.lessons[l.id]).length, tot = MO.LESSONS.length;
return `<div class="card v-acad"><div class="row between"><span class="section-title" style="margin:0">${esc(t('v.a.title'))}</span><span class="num muted">${n}/${tot}</span></div>
        <div class="bar${n >= tot ? ' good' : ''}"><i style="width:${(n / Math.max(1, tot) * 100).toFixed(1)}%"></i></div><p class="muted" style="margin:0;font-size:.85rem">${esc(t('v.a.d', { xp: PP.lesson }))}</p></div>
      <button type="button" class="type v-sim" id="vSim"><div class="emoji">🔮</div><div><b>${esc(t('sim.title'))}</b><small>${esc(t('sim.d'))}</small></div></button>
      <div class="v-lessons">${MO.LESSONS.map((l, i) => `<button type="button" class="v-lesson${m.lessons[l.id] ? ' done' : ''}" data-lesson="${l.id}"><span class="v-ln num">${String(i + 1).padStart(2, '0')}</span><span class="v-le" aria-hidden="true">${l.e}</span><b>${esc(L(l, ''))}</b><span class="v-lx num">${m.lessons[l.id] ? '✓' : '+' + PP.lesson + ' XP'}</span></button>`).join('')}</div>`;
}
function bindVaultAcademy() {
$('#vSim').onclick = () => openSim();
sheet.querySelectorAll('[data-lesson]').forEach(b => b.onclick = () => openLesson(b.dataset.lesson));
}
function openLesson(id, step = 0, score = 0) {
const l = MO.LESSONS.find(x => x.id === id); if (!l) return;
const en = S.lang === 'en', pages = en ? l.pe : l.pf, nP = pages.length, nQ = l.q.length, m = mon();
const total = nP + nQ;
let body;
if (step < nP) {
body = `<div class="card l-page"><span class="l-num num">${step + 1}/${nP}</span><p>${esc(pages[step])}</p></div>
        ${l.sim && step === nP - 1 ? `<button type="button" class="btn ghost block" id="lSim">🔮 ${esc(t('sim.title'))}</button>` : ''}
        <button type="button" class="btn block" id="lNext">${esc(t(step === nP - 1 ? 'l.quiz' : 'l.next'))}</button>`;
} else if (step < total) {
const qi = step - nP, q = l.q[qi];
body = `<div class="card l-quiz"><span class="section-title" style="margin:0">${esc(t('l.q', { n: qi + 1, t: nQ }))}</span><b class="l-qt">${esc(en ? q.en : q.fr)}</b>
        <div class="l-answers">${q.a.map((a, i) => `<button type="button" class="l-ans" data-ans="${i}">${esc(a[en ? 1 : 0])}</button>`).join('')}</div><p class="l-x" id="lX" hidden></p></div>
        <button type="button" class="btn block" id="lNext" hidden>${esc(t(qi === nQ - 1 ? 'l.finish' : 'l.next'))}</button>`;
} else {
const win = score >= nQ, already = !!m.lessons[id];
body = `<div class="card l-result${win ? ' win' : ''}"><span class="l-big" aria-hidden="true">${win ? '🎓' : '📘'}</span><h3>${esc(win ? t('l.win') : t('l.lose', { s: score, t: nQ }))}</h3>
          <p class="muted" style="margin:0">${esc(win ? (already ? t('l.again') : t('l.winD')) : t('l.loseD'))}</p></div>
        ${win ? '' : `<div class="grid-2"><button type="button" class="btn subtle" id="lReread">${esc(t('l.reread'))}</button><button type="button" class="btn" id="lRetry">${esc(t('l.retry'))}</button></div>`}
        <button type="button" class="btn ${win ? '' : 'ghost '}block" id="lBack">${esc(t('l.back'))}</button>`;
}
const panel = sheetView(`<div class="sheet-head"><button type="button" class="icon-btn" id="backL" aria-label="${esc(t('f.back'))}">←</button><h2 style="text-transform:none;font-size:1.25rem">${l.e} ${esc(L(l, ''))}</h2></div>
      <div class="l-dots" aria-hidden="true">${Array.from({ length: total }, (_, i) => `<i class="${i < step ? 'on' : i === step ? 'cur' : ''}"></i>`).join('')}</div>${body}`, 'lesson-sheet', step ? 'next' : null);
panel.scrollTop = 0;
$('#backL').onclick = () => openVault('academy');
const nx = $('#lNext'); if (nx) nx.onclick = () => openLesson(id, step + 1, score);
const ls = $('#lSim'); if (ls) ls.onclick = () => openSim(() => openLesson(id, step, score));
const lb = $('#lBack'); if (lb) lb.onclick = () => openVault('academy');
const rr = $('#lRetry'); if (rr) rr.onclick = () => openLesson(id, nP, 0);
const rd = $('#lReread'); if (rd) rd.onclick = () => openLesson(id, 0, 0);
if (step >= nP && step < total) {
const q = l.q[step - nP];
sheet.querySelectorAll('[data-ans]').forEach(b => b.onclick = () => {
const i = +b.dataset.ans, ok = i === q.ok;
sheet.querySelectorAll('[data-ans]').forEach(x => { x.disabled = true; if (+x.dataset.ans === q.ok) x.classList.add('ok'); });
if (!ok) b.classList.add('bad');
SFX.play(ok ? 'check' : 'error'); if (ok) buzz(14);
const x = $('#lX'); x.hidden = false; x.className = 'l-x ' + (ok ? 'ok' : 'bad'); x.textContent = (ok ? '✓ ' : '✗ ') + (en ? q.xe : q.xf);
const n2 = $('#lNext'); n2.hidden = false; n2.onclick = () => openLesson(id, step + 1, score + (ok ? 1 : 0));
});
}
if (step === total && score >= nQ && !m.lessons[id]) {
const before = ppStats().total;
m.lessons[id] = today(); markActivity(); save(); checkBadges();
SFX.play('finish'); buzz([20, 50, 30]);
render(); rewardFeedback(before, '🎓 ' + t('l.done'));
} else if (step === total) SFX.play(score >= nQ ? 'questDone' : 'down');
}
function openSim(back) {
const w0 = S.simW || 5, c = cur();
sheetView(`<div class="sheet-head"><button type="button" class="icon-btn" id="backSim" aria-label="${esc(t('f.back'))}">←</button><h2 style="text-transform:none;font-size:1.25rem">🔮 ${esc(t('sim.title'))}</h2></div>
      <div class="card sim"><label class="field" for="simR">${esc(t('sim.q', { c }))}<input type="range" id="simR" min="1" max="50" step="1" value="${w0}"></label>
        <b class="big-num num sim-w" id="simW"></b>
        <div class="sim-grid" id="simGrid"></div>
        <p class="sim-int" id="simI"></p><p class="muted" style="margin:0;font-size:.8rem">${esc(t('sim.note'))}</p></div>
      <div id="simJars"></div>`, 'sim-sheet');
const upd = () => {
const w = +$('#simR').value, mo = w * 52 / 12, r = .03 / 12, fv = mo * ((1 + r) ** 60 - 1) / r;
$('#simW').textContent = t('sim.w', { a: money(w) });
$('#simGrid').innerHTML = [[1, 'sim.1m'], [6, 'sim.6m'], [12, 'sim.1y'], [36, 'sim.3y']].map(([n, k]) => `<div><b class="num">${esc(money(Math.round(mo * n)))}</b><small>${esc(t(k))}</small></div>`).join('');
$('#simI').textContent = t('sim.int', { p: money(Math.round(mo * 60)), f: money(Math.round(fv)) });
const jars = S.goals.filter(g => g.type === 'save' && pct(g) < 1);
$('#simJars').innerHTML = jars.length ? `<div class="card"><span class="section-title" style="margin:0">${esc(t('sim.jars'))}</span><div class="history">${jars.map(g => `<div><span>${esc(g.emoji)} ${esc(g.title)}</span><b class="num">${esc(t('sim.weeks', { n: nf(Math.ceil((g.target - saveTotal(g)) / w)) }))}</b></div>`).join('')}</div></div>` : '';
S.simW = w;
};
$('#simR').oninput = () => { upd(); SFX.play('tick'); };
$('#simR').onchange = saveUI;
upd();
$('#backSim').onclick = () => (back || (() => openVault('academy')))();
}
Object.assign(T.fr, {
'type.save': 'Tirelire projet', 'type.save.d': 'Ce que tu veux t\'offrir, avec ta date d\'arrivée.', 'today.saves': 'Tes tirelires projet',
'f.price': 'Prix ({c})', 'f.have': 'Déjà de côté ({c})', 'f.plan': 'Je peux mettre par semaine ({c})', 'f.eta': 'Environ {w} semaines : tu l\'auras vers le {date}.', 'f.eta.now': 'Tu as déjà tout : fonce !', 'f.priceErr': 'Indique un prix supérieur à 0.',
'dep.amount': 'Montant ({c})', 'dep.add': 'Déposer', 'dep.take': 'Retirer', 'dep.ok': '+{a} dans « {g} »', 'dep.out': '{a} retirés', 'dep.funded': 'Projet financé : « {g} » ! Tu peux te l\'offrir.',
'dep.tooMuch': 'Tu ne peux pas retirer plus que ce qu\'il y a dans la tirelire.', 'dep.del.q': 'Supprimer ce mouvement ?', 'dep.start': 'Déjà de côté', 'save.left': 'Encore {n} à mettre de côté',
'eta.rate': 'À ce rythme ({w} par semaine), tu l\'auras le {date}.', 'eta.plan': 'Avec {w} par semaine, tu l\'auras le {date}.', 'eta.boost': 'Mets {x} de plus par semaine et tu l\'as le {date} ({n} jours plus tôt).',
'eta.none': 'Fais ton premier dépôt pour voir ta date d\'arrivée.', 'eta.done': 'Objectif atteint : tu peux te l\'offrir !', 'eta.far': 'À ce rythme, il te faudrait plus de 10 ans : augmente un peu tes dépôts.',
'q.go.vault': 'Ouvrir le Coffre',
'v.title': 'Le Coffre', 'v.row': 'Tirelires, budget, envies sous clé, Académie', 'v.ripe': 'Envies qui attendent ta décision : {n}',
'v.tab.proj': 'Projets', 'v.tab.budget': 'Budget', 'v.tab.wish': 'Envies', 'v.tab.academy': 'Académie',
'v.s.jars': 'dans tes tirelires', 'v.s.left': 'reste cette semaine', 'v.s.saved': 'sauvés (48 h)',
'v.private': 'Tout reste sur ton téléphone : aucun montant n\'apparaît dans le classement.', 'v.del': 'Supprimer',
'v.proj.empty': 'Pas encore de tirelire. Choisis ce que tu veux t\'offrir : le Coffre te dira à quelle date tu l\'auras.', 'v.proj.new': 'Nouvelle tirelire projet',
'v.proj.tip': 'Paie-toi en premier : dès que tu reçois de l\'argent, mets une part dans ta tirelire avant de dépenser.',
'v.b.q': 'Combien tu peux dépenser par semaine ?', 'v.b.d': 'Ton budget de la semaine, du lundi au dimanche. Tu pourras le changer quand tu veux.', 'v.b.other': 'Autre montant ({c})', 'v.b.set': 'Valider', 'v.cur': 'Devise',
'v.b.week': 'Budget de la semaine', 'v.b.edit': 'Modifier', 'v.b.left': 'il te reste jusqu\'à dimanche', 'v.b.over': 'de dépassement cette semaine', 'v.b.spent': '{s} dépensés sur {b}', 'v.b.perday': 'environ {n} par jour',
'v.b.add': 'Ajouter une dépense', 'v.b.note': 'Quoi ? (facultatif)', 'v.b.zero': 'Rien dépensé aujourd\'hui', 'v.b.zeroOk': '✓ Journée sans dépense notée', 'v.b.zeroDone': 'Journée sans dépense : bien joué !',
'v.b.where': 'Où part ton argent', 'v.b.list': 'Cette semaine', 'v.b.none': 'Aucune dépense notée cette semaine.', 'v.b.weeks': 'Les 4 dernières semaines', 'v.b.added': 'Dépense notée : {a}',
'v.b.ok': 'Budget fixé : {a} par semaine', 'v.b.warn': 'Tu as dépassé ton budget de la semaine.', 'v.b.del.q': 'Supprimer cette dépense ?',
'v.w.saved': 'Argent sauvé grâce aux 48 h', 'v.w.savedN': 'Envies abandonnées : {n}', 'v.w.add': 'Une envie ? Mets-la sous clé', 'v.w.d': 'Elle reste verrouillée 48 h. Ensuite, tu décides à tête reposée.',
'v.w.name': 'Ce que tu veux acheter', 'v.w.price': 'Prix ({c})', 'v.w.lock': 'Verrouiller 48 h', 'v.w.locked': 'Sous clé pour 48 h : on en reparle après-demain.',
'v.w.left': 'Déverrouillage dans {h} h', 'v.w.give': 'J\'abandonne déjà', 'v.w.ask': '48 h sont passées. Tu le veux toujours ?', 'v.w.buy': 'Je l\'achète', 'v.w.skip': 'Plus envie (+{xp} XP)',
'v.w.skipped': '{a} sauvés !', 'v.w.early': 'pas d\'XP avant 48 h, mais l\'argent est sauvé', 'v.w.bought': 'C\'était une vraie envie : profite !', 'v.w.boughtB': 'Ajouté à ton budget de la semaine.',
'v.w.hist': 'Historique', 'v.w.hSkip': 'abandonnée', 'v.w.hBuy': 'achetée', 'v.w.none': 'La prochaine fois que tu as envie d\'acheter un truc, mets-le ici d\'abord.',
'v.a.title': 'Académie de l\'argent', 'v.a.d': '1 minute de lecture, 2 questions : +{xp} XP par leçon réussie.',
'sim.title': 'Simulateur « Et si… »', 'sim.d': 'Combien tu aurais en mettant un peu de côté chaque semaine ?', 'sim.q': 'Si je mets de côté chaque semaine ({c})', 'sim.w': '{a} par semaine',
'sim.1m': 'dans 1 mois', 'sim.6m': 'dans 6 mois', 'sim.1y': 'dans 1 an', 'sim.3y': 'dans 3 ans', 'sim.int': 'Sur 5 ans : {p} mis de côté. Sur un compte à 3 % par an, ça ferait environ {f}.',
'sim.note': 'Exemple pour comprendre : les vrais taux changent selon les comptes et les années.', 'sim.jars': 'À ce rythme, tes tirelires', 'sim.weeks': '{n} sem.',
'l.next': 'Suivant', 'l.quiz': 'Passer au quiz', 'l.q': 'Question {n}/{t}', 'l.finish': 'Voir le résultat', 'l.win': 'Leçon validée !', 'l.winD': 'Tu as tout juste. Ton cerveau monte de niveau.',
'l.again': 'Déjà validée : tu la connais par cœur.', 'l.lose': 'Presque ! {s}/{t}', 'l.loseD': 'Il faut tout juste pour valider la leçon. Relis-la et retente.', 'l.retry': 'Recommencer le quiz', 'l.reread': 'Relire la leçon',
'l.back': 'Retour à l\'Académie', 'l.done': 'Leçon de l\'Académie validée',
'b.piggy': 'Tirelire lancée', 'b.piggy.d': 'Ton premier dépôt dans une tirelire projet', 'b.funded': 'Projet financé', 'b.funded.d': 'Une tirelire remplie à 100 %',
'b.resist': 'Sang-froid', 'b.resist.d': '3 envies abandonnées après 48 h', 'b.budgetok': 'Gestionnaire', 'b.budgetok.d': 'Une semaine entière sous ton budget (au moins 3 jours notés)',
'b.graduate': 'Diplômé', 'b.graduate.d': 'Toutes les leçons de l\'Académie de l\'argent'
});
Object.assign(T.en, {
'type.save': 'Project jar', 'type.save.d': 'Something you want to buy, with your arrival date.', 'today.saves': 'Your project jars',
'f.price': 'Price ({c})', 'f.have': 'Already saved ({c})', 'f.plan': 'I can put aside per week ({c})', 'f.eta': 'About {w} weeks: you\'ll have it around {date}.', 'f.eta.now': 'You already have it all: go for it!', 'f.priceErr': 'Enter a price above 0.',
'dep.amount': 'Amount ({c})', 'dep.add': 'Add', 'dep.take': 'Take out', 'dep.ok': '+{a} into “{g}”', 'dep.out': '{a} taken out', 'dep.funded': 'Project funded: “{g}”! You can treat yourself.',
'dep.tooMuch': 'You can\'t take out more than what\'s in the jar.', 'dep.del.q': 'Delete this entry?', 'dep.start': 'Already saved', 'save.left': '{n} left to save',
'eta.rate': 'At this pace ({w} a week), you\'ll have it on {date}.', 'eta.plan': 'With {w} a week, you\'ll have it on {date}.', 'eta.boost': 'Add {x} more per week and you\'ll have it on {date} ({n} days sooner).',
'eta.none': 'Make your first deposit to see your arrival date.', 'eta.done': 'Goal reached: you can treat yourself!', 'eta.far': 'At this pace it would take over 10 years: add a bit more each week.',
'q.go.vault': 'Open the Vault',
'v.title': 'The Vault', 'v.row': 'Jars, budget, locked wants, Academy', 'v.ripe': 'Wants waiting for your decision: {n}',
'v.tab.proj': 'Projects', 'v.tab.budget': 'Budget', 'v.tab.wish': 'Wants', 'v.tab.academy': 'Academy',
'v.s.jars': 'in your jars', 'v.s.left': 'left this week', 'v.s.saved': 'saved (48 h)',
'v.private': 'Everything stays on your phone: no amount ever shows on the leaderboard.', 'v.del': 'Delete',
'v.proj.empty': 'No jar yet. Pick something you want to buy: the Vault will tell you the date you\'ll have it.', 'v.proj.new': 'New project jar',
'v.proj.tip': 'Pay yourself first: as soon as you get money, put some in your jar before spending.',
'v.b.q': 'How much can you spend per week?', 'v.b.d': 'Your weekly budget, Monday to Sunday. You can change it anytime.', 'v.b.other': 'Other amount ({c})', 'v.b.set': 'Set', 'v.cur': 'Currency',
'v.b.week': 'This week\'s budget', 'v.b.edit': 'Edit', 'v.b.left': 'left until Sunday', 'v.b.over': 'over budget this week', 'v.b.spent': '{s} spent of {b}', 'v.b.perday': 'about {n} a day',
'v.b.add': 'Add an expense', 'v.b.note': 'What? (optional)', 'v.b.zero': 'Nothing spent today', 'v.b.zeroOk': '✓ No-spend day logged', 'v.b.zeroDone': 'No-spend day: nice one!',
'v.b.where': 'Where your money goes', 'v.b.list': 'This week', 'v.b.none': 'No expenses logged this week.', 'v.b.weeks': 'Last 4 weeks', 'v.b.added': 'Expense logged: {a}',
'v.b.ok': 'Budget set: {a} per week', 'v.b.warn': 'You went over this week\'s budget.', 'v.b.del.q': 'Delete this expense?',
'v.w.saved': 'Money saved by the 48-hour rule', 'v.w.savedN': 'Wants dropped: {n}', 'v.w.add': 'Want something? Lock it', 'v.w.d': 'It stays locked for 48 hours. Then you decide with a clear head.',
'v.w.name': 'What you want to buy', 'v.w.price': 'Price ({c})', 'v.w.lock': 'Lock 48 h', 'v.w.locked': 'Locked for 48 hours: let\'s talk again in two days.',
'v.w.left': 'Unlocks in {h} h', 'v.w.give': 'I\'m already over it', 'v.w.ask': '48 hours have passed. Do you still want it?', 'v.w.buy': 'I\'ll buy it', 'v.w.skip': 'Don\'t want it (+{xp} XP)',
'v.w.skipped': '{a} saved!', 'v.w.early': 'no XP before 48 h, but the money is saved', 'v.w.bought': 'It was a real want: enjoy!', 'v.w.boughtB': 'Added to this week\'s budget.',
'v.w.hist': 'History', 'v.w.hSkip': 'dropped', 'v.w.hBuy': 'bought', 'v.w.none': 'Next time you want to buy something, put it here first.',
'v.a.title': 'Money Academy', 'v.a.d': '1 minute of reading, 2 questions: +{xp} XP per lesson passed.',
'sim.title': '"What if…" simulator', 'sim.d': 'How much would you have by saving a little every week?', 'sim.q': 'If I put aside every week ({c})', 'sim.w': '{a} a week',
'sim.1m': 'in 1 month', 'sim.6m': 'in 6 months', 'sim.1y': 'in 1 year', 'sim.3y': 'in 3 years', 'sim.int': 'Over 5 years: {p} saved. In an account at 3% a year, it would be about {f}.',
'sim.note': 'An example to understand: real rates vary between accounts and over time.', 'sim.jars': 'At this pace, your jars', 'sim.weeks': '{n} wk',
'l.next': 'Next', 'l.quiz': 'Take the quiz', 'l.q': 'Question {n}/{t}', 'l.finish': 'See the result', 'l.win': 'Lesson passed!', 'l.winD': 'All correct. Your brain levels up.',
'l.again': 'Already passed: you know it by heart.', 'l.lose': 'Almost! {s}/{t}', 'l.loseD': 'You need every answer right to pass. Read it again and retry.', 'l.retry': 'Retry the quiz', 'l.reread': 'Read again',
'l.back': 'Back to the Academy', 'l.done': 'Academy lesson passed',
'b.piggy': 'Jar started', 'b.piggy.d': 'Your first deposit into a project jar', 'b.funded': 'Project funded', 'b.funded.d': 'A jar filled to 100%',
'b.resist': 'Cool head', 'b.resist.d': '3 wants dropped after 48 hours', 'b.budgetok': 'Money manager', 'b.budgetok.d': 'A full week under budget (at least 3 days logged)',
'b.graduate': 'Graduate', 'b.graduate.d': 'Every Money Academy lesson'
});
function streakEndingAt(k) { let n = 0, d = parseKey(k); while (S.activity[dkey(d)]) { n++; d = addDays(d, -1); } return n; }
function redeemQuest() {
const now = new Date(), y = dkey(addDays(now, -1)), y2 = dkey(addDays(now, -2)), r = S.redeem || {};
if (S.activity[y] || !S.activity[y2]) return null;
const lost = streakEndingAt(y2);
if (lost < 3 || (r.last && daysBetween(r.last, today()) < 7)) return null;
return { id: uid(), coach: 'redeem', c: 'coach', k: 'a', auto: 'redeem', n: lost, diff: 3, xp: QXP[3], day: y };
}
function redeemDone(it) {
S.activity[it.day] = 'r';
S.redeem = { last: today(), n: ((S.redeem || {}).n || 0) + 1 };
setTimeout(() => { toast('🔥 ' + t('rd.saved', { n: globalStreak() })); SFX.play('badge'); buzz([30, 60, 30, 60, 90]); }, 1200);
}
const niceUp = v => { const st = Math.pow(10, Math.floor(Math.log10(Math.max(1, v)))) / 2; return Math.ceil(v / st - 1e-9) * st; };
function raiseOffer(g) {
if (g.arch || (g.rsNo && daysBetween(g.rsNo, today()) < 7)) return null;
if (g.type === 'steps') {
const last = (g.dlog || []).slice(-1)[0];
if (g.daily >= 30000 || (last && daysBetween(last.d, today()) < 7) || daysBetween(g.created, today()) < 6) return null;
let hit = 0; for (let i = 1; i <= 7; i++) { const k = dkey(addDays(new Date(), -i)); if (((g.steps || {})[k] || 0) >= dailyOn(g, k)) hit++; }
return hit >= 5 ? { from: g.daily, to: g.daily + (g.daily < 10000 ? 1000 : 2000), unit: t('st.unit'), h: hit } : null;
}
if ((g.type === 'target' || g.type === 'tiktok') && g.target > g.start && pct(g) >= 1 && !/kg|lb|\//i.test(g.unit || '')) {
return { from: g.target, to: niceUp(g.target + (g.target - g.start) * .5), unit: g.type === 'tiktok' ? (S.lang === 'fr' ? 'abonnés' : 'followers') : g.unit };
}
return null;
}
function raiseHtml(g) {
const o = raiseOffer(g); if (!o) return '';
return `<div class="raise"><div><b>🚀 ${esc(t('rs.t'))}</b><small>${esc(t(g.type === 'steps' ? 'rs.steps' : 'rs.target', { to: nf(o.to, 1), unit: o.unit, h: o.h }))}</small></div><button type="button" class="btn" data-raise="${g.id}">${esc(t('rs.go'))}</button></div>`;
}
function retitle(s, from, to) {
const pat = String(Math.round(from * 100) / 100).replace('.', '[.,]').replace(/\B(?=(\d{3})+(?!\d))/g, '[\\s\\u00a0\\u202f,.]?');
const re = new RegExp('(^|[^\\d])' + pat + '(?!\\d)');
return re.test(s) ? s.replace(re, (m, p1) => p1 + nf(to, 1)) : s;
}
function openRaise(id) {
const g = byId(id), o = g && raiseOffer(g); if (!o) return;
openSheet(`<div class="raise-head"><span class="raise-ico" aria-hidden="true">🚀</span><h2>${esc(t('rs.t'))}</h2></div>
      <p class="muted" style="margin:0">${esc(t(g.type === 'steps' ? 'rs.d.steps' : 'rs.d.target', { from: nf(o.from, 1), unit: o.unit }))}</p>
      <label class="field" for="rsTo">${esc(t('rs.new'))} (${esc(o.unit)})<input id="rsTo" type="number" inputmode="decimal" step="any" min="${o.from}" value="${o.to}"></label>
      <div class="grid-2"><button type="button" class="btn subtle" id="rsNo">${esc(t('rs.later'))}</button><button type="button" class="btn" id="rsOk">${esc(t('rs.go'))}</button></div>`, true);
$('#rsNo').onclick = () => { g.rsNo = today(); save(); closeSheet(); render(); };
$('#rsOk').onclick = () => {
const to = parseFloat($('#rsTo').value.replace(',', '.'));
if (!Number.isFinite(to) || to <= o.from) { SFX.play('error'); $('#rsTo').focus(); return; }
const title = retitle(g.title, o.from, to);
if (g.type === 'steps') {
if (!g.daily0) g.daily0 = g.daily;
g.dlog = (g.dlog || []).filter(c => c.d !== today()).concat([{ d: today(), n: Math.round(to) }]);
g.daily = Math.round(to); g.title = title;
} else {
const dur = Math.max(28, daysBetween(g.created, g.deadline));
const ng = { id: uid(), type: g.type, title, emoji: g.emoji, why: g.why, created: today(), start: current(g), target: to, deadline: dkey(addDays(new Date(), dur)), entries: [] };
if (g.unit) ng.unit = g.unit; if (g.handle) ng.handle = g.handle;
g.arch = today();
S.goals.splice(S.goals.indexOf(g), 1, ng, g);
}
markActivity(); save(); closeSheet(); SFX.play('warp'); buzz([20, 40, 60]);
toast('🚀 ' + t('rs.ok', { g: title })); render();
};
}
document.addEventListener('click', e => { const b = e.target.closest && e.target.closest('[data-raise]'); if (b) { e.stopPropagation(); openRaise(b.dataset.raise); } });
const examsAhead = () => { const tk = today(); return (S.exams || []).filter(e => e.d >= tk).sort((a, b) => a.d < b.d ? -1 : 1); };
const examDays = e => daysBetween(today(), e.d);
const examName = e => e.n;
function examQuest(tier) {
const e = examsAhead().find(x => examDays(x) <= 14); if (!e) return null;
const n = examDays(e), soon = n <= 3;
const q = { id: uid(), c: 'study', ex: e.id, gt: e.n, coach: n === 0 ? 'examday' : n === 1 ? 'exam1' : 'exam', n, diff: soon ? 3 : 2, xp: QXP[soon ? 3 : 2] };
if (n === 0) return Object.assign(q, { k: 'm', diff: 2, xp: QXP[2] });
return Object.assign(q, { k: 't', dur: ([15, 20, 25, 30, 40][Math.max(1, Math.min(5, tier)) - 1] + (soon ? 5 : 0)) * 60 });
}
function examCard() {
const e = examsAhead().find(x => examDays(x) <= 14); if (!S.onboarded || !e) return '';
const n = examDays(e);
return `<section class="card exam-card" id="examCard" role="button" tabindex="0">
      <div class="row between"><span class="section-title" style="margin:0">🎓 ${esc(t('ex.card'))}</span><span class="vault-go" aria-hidden="true">›</span></div>
      <div class="exam-main"><b class="exam-j num">${n === 0 ? esc(t('ex.jday')) : esc(t('ex.in', { n }))}</b><div><b class="exam-n">${esc(e.n)}</b><small class="muted">${esc(fmtDate(e.d, true))} · ${esc(t('ex.rev', { n: e.rev || 0 }))}</small></div></div>
      ${n <= 1 ? `<p class="exam-msg">${esc(t(n === 0 ? 'ex.today' : 'ex.tomorrow'))}</p>` : ''}</section>`;
}
function bindExamCard(root) {
const c = root.querySelector('#examCard'); if (!c) return;
c.onclick = openExams; c.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openExams(); } };
}
function openExams() {
const ahead = examsAhead(), past = (S.exams || []).filter(e => e.d < today()).sort((a, b) => a.d < b.d ? 1 : -1).slice(0, 6), en = S.lang === 'en';
openSheet(`<div class="sheet-head"><div class="emoji exam-ico">🎓</div><h2>${esc(t('ex.title'))}</h2><button type="button" class="icon-btn" id="closeE" aria-label="${esc(t('close'))}">✕</button></div>
      <p class="muted" style="margin:0">${esc(t('ex.d'))}</p>
      ${ahead.length ? `<div class="stack">${ahead.map(e => { const n = examDays(e); return `<div class="card exam-item${n <= 3 ? ' soon' : ''}"><div class="exam-main"><b class="exam-j num">${n === 0 ? esc(t('ex.jday')) : esc(t('ex.in', { n }))}</b><div style="flex:1;min-width:0"><b class="exam-n">${esc(e.n)}</b><small class="muted">${esc(fmtDate(e.d, true))} · ${esc(t('ex.rev', { n: e.rev || 0 }))}</small></div><button type="button" class="tx-del" data-exdel="${e.id}" aria-label="${esc(t('v.del'))}">✕</button></div></div>`; }).join('')}</div>` : `<p class="muted v-tip">${esc(t('ex.none'))}</p>`}
      <form class="card v-add" id="exForm"><span class="section-title" style="margin:0">${esc(t('ex.add'))}</span>
        <div class="chips v-cats">${Q.SUBJECTS.map((s, i) => `<button type="button" class="chip" data-exs="${i}">${esc(s[en ? 1 : 0])}</button>`).join('')}</div>
        <input id="exName" maxlength="40" placeholder="${esc(t('ex.what'))}" aria-label="${esc(t('ex.what'))}">
        <label class="field" for="exDate">${esc(t('ex.when'))}<input id="exDate" type="date" min="${today()}" value="${dkey(addDays(new Date(), 7))}"></label>
        <p class="muted" id="exErr" role="alert" style="margin:0;color:var(--bad)"></p>
        <button type="submit" class="btn block">${esc(t('ex.add'))}</button></form>
      ${past.length ? `<div class="card"><span class="section-title" style="margin:0">${esc(t('ex.past'))}</span><div class="history">${past.map(e => `<div><span>${esc(e.n)} <small class="muted">· ${esc(fmtDate(e.d))} · ${esc(t('ex.rev', { n: e.rev || 0 }))}</small></span><input class="ex-grade" data-exg="${e.id}" maxlength="8" placeholder="${esc(t('ex.grade'))}" value="${esc(e.grade || '')}" aria-label="${esc(t('ex.grade'))}"></div>`).join('')}</div></div>` : ''}`);
$('#closeE').onclick = closeSheet;
sheet.querySelectorAll('[data-exs]').forEach(b => b.onclick = () => { $('#exName').value = b.textContent.charAt(0).toUpperCase() + b.textContent.slice(1); sheet.querySelectorAll('[data-exs]').forEach(x => x.setAttribute('aria-pressed', String(x === b))); SFX.play('tick'); });
sheet.querySelectorAll('[data-exdel]').forEach(b => b.onclick = () => confirmBox(t('ex.del.q'), t('v.del'), () => { S.exams = S.exams.filter(e => e.id !== b.dataset.exdel); save(); SFX.play('down'); render(); openExams(); }));
sheet.querySelectorAll('[data-exg]').forEach(i => i.onchange = () => { const e = S.exams.find(x => x.id === i.dataset.exg); if (e) { e.grade = i.value.trim().slice(0, 8); save(); SFX.play('select'); } });
$('#exForm').onsubmit = ev => {
ev.preventDefault();
const n = $('#exName').value.trim().slice(0, 40), d = $('#exDate').value;
if (!n || !d || d < today()) { $('#exErr').textContent = t('ex.err'); SFX.play('error'); return; }
const e = { id: uid(), n, d, rev: 0 };
S.exams = (S.exams || []).concat([e]);
let now = false;
const q = qs();
if (examDays(e) <= 14 && q.day === today() && !(q.list || []).some(x => x.ex)) {
const i = (q.list || []).findIndex(x => x.coach && x.coach !== 'redeem' && !x.done);
const nq = examQuest((q.tier && q.tier.tier) || 1);
if (i >= 0 && nq) { q.list[i] = nq; (q.hist[today()] || (q.hist[today()] = [])).push(coachKey(nq)); now = true; }
}
save(); SFX.play('equip'); render(); openExams();
toast('🎓 ' + t('ex.ok', { s: n }) + ' · ' + t(now ? 'ex.okNow' : examDays(e) <= 14 ? 'ex.okTomorrow' : 'ex.okLater'));
};
}
Object.assign(T.fr, {
'rd.saved': 'Rédemption accomplie : ta série de {n} jours est sauvée !',
'rs.t': 'Monter la barre', 'rs.target': 'Objectif atteint ! Prochain sommet : {to} {unit}.', 'rs.steps': 'Objectif tenu {h} jours sur 7. Prêt pour {to} {unit} ?', 'rs.go': 'C\'est parti',
'rs.d.target': 'Tu as atteint {from} {unit}. Ton objectif atteint reste dans « Sommets atteints » (avec toute ton XP), et le prochain commence ici.',
'rs.d.steps': 'Tu tiens ton objectif presque tous les jours : ton corps est prêt pour plus. Les jours passés gardent leur ancien objectif.',
'rs.new': 'Nouvel objectif', 'rs.ok': 'Nouveau sommet : {g}', 'rs.later': 'Plus tard', 'rs.done': 'Sommets atteints',
'ex.title': 'Mode examen', 'ex.card': 'Prochain examen', 'ex.row': 'Contrôles, brevet : compte à rebours et révisions', 'ex.row.next': '{s} dans {n} j',
'ex.d': 'Ajoute tes contrôles. Dans les 14 jours avant, le Système te donne chaque jour une quête de révision chronométrée, plus longue quand l\'examen approche.',
'ex.add': 'Ajouter un examen', 'ex.what': 'Matière ou nom (ex. : brevet blanc)', 'ex.when': 'Date', 'ex.ok': 'Examen ajouté : {s}', 'ex.okNow': 'ta quête de révision est déjà dans tes quêtes du jour',
'ex.okTomorrow': 'ta première quête de révision arrive demain', 'ex.okLater': 'les révisions commenceront 14 jours avant', 'ex.none': 'Aucun examen prévu pour l\'instant.', 'ex.rev': 'révisions : {n}',
'ex.jday': 'Jour J', 'ex.in': 'J-{n}', 'ex.today': 'C\'est aujourd\'hui : respire, tu es prêt. Bonne chance ! 🍀', 'ex.tomorrow': 'C\'est demain ! Relis tes fiches et couche-toi tôt.',
'ex.past': 'Examens passés', 'ex.grade': 'Note', 'ex.del.q': 'Supprimer cet examen ?', 'ex.err': 'Indique une matière et une date (aujourd\'hui ou plus tard).'
});
Object.assign(T.en, {
'rd.saved': 'Redemption complete: your {n}-day streak is saved!',
'rs.t': 'Raise the bar', 'rs.target': 'Goal reached! Next summit: {to} {unit}.', 'rs.steps': 'Goal hit {h} days out of 7. Ready for {to} {unit}?', 'rs.go': 'Let\'s go',
'rs.d.target': 'You reached {from} {unit}. Your completed goal stays in "Summits reached" (with all your XP), and the next one starts here.',
'rs.d.steps': 'You hit your goal almost every day: your body is ready for more. Past days keep their old goal.',
'rs.new': 'New goal', 'rs.ok': 'New summit: {g}', 'rs.later': 'Later', 'rs.done': 'Summits reached',
'ex.title': 'Exam mode', 'ex.card': 'Next exam', 'ex.row': 'Tests and exams: countdown and revision', 'ex.row.next': '{s} in {n} d',
'ex.d': 'Add your tests. In the 14 days before, the System gives you a timed revision quest every day, longer as the exam gets closer.',
'ex.add': 'Add an exam', 'ex.what': 'Subject or name (e.g. mock exam)', 'ex.when': 'Date', 'ex.ok': 'Exam added: {s}', 'ex.okNow': 'your revision quest is already in today\'s quests',
'ex.okTomorrow': 'your first revision quest arrives tomorrow', 'ex.okLater': 'revision starts 14 days before', 'ex.none': 'No exams planned yet.', 'ex.rev': 'revisions: {n}',
'ex.jday': 'D-Day', 'ex.in': 'D-{n}', 'ex.today': 'It\'s today: breathe, you\'re ready. Good luck! 🍀', 'ex.tomorrow': 'It\'s tomorrow! Go over your notes and get to bed early.',
'ex.past': 'Past exams', 'ex.grade': 'Grade', 'ex.del.q': 'Delete this exam?', 'ex.err': 'Enter a subject and a date (today or later).'
});
const DG = { floor: [10, 15, 15, 20], boss: 30, clear: 75 };
const DG_OLD = { E: 'iron', D: 'bronze', C: 'silver', B: 'gold', A: 'platinum', S: 'legend' };
const dgRank = dg => RANKS.find(r => r.id === (DG_OLD[dg.rank] || dg.rank)) || RANKS[0];
const dgRankName = dg => L(dgRank(dg), '');
const dgCol = dg => { const c = dgRank(dg).c; return c.length === 2 ? c : ['#b4501a', '#ffd36b']; };
const dgNow = () => (S.dg || []).find(d => d.ws === weekStart()) || null;
const dgName = dg => (Q.DUNGEONS[dg.name] || ['', ''])[S.lang === 'en' ? 1 : 0];
const bossName = dg => (Q.BOSSES[dg.boss] || ['', ''])[S.lang === 'en' ? 1 : 0];
const dgFloor = () => { const dg = dgNow(); return dg ? dg.floors.find(f => !f.done) || null : null; };
const dgDoneToday = dg => !!dg && dg.floors.some(f => f.done === today());
function ensureDungeon() {
if (!S.onboarded || dgNow() || !featOn('dungeon')) return;
const ws = weekStart(), ctx = questCtx(), { tier } = questTier(ctx.lvl), rnd = rngOf(ws + '|dg|' + (S.name || ''));
const past = (S.dg || []).slice(-2), up = past.length === 2 && past.every(d => d.cleared) ? 1 : 0;
const rank = RANKS[Math.min(RANKS.length - 1, RANKS.indexOf(rankOf(ctx.lvl)) + up)].id;
const left = 7 - daysBetween(ws, today()), steps = Math.max(1, Math.min(5, left <= 2 ? left : left - 1));
const w = catWeights(ctx), cats = Object.keys(w).filter(c => w[c] > 0), used = new Set();
const ok = tp => (tp.k === 'm' || tp.k === 't' || (tp.k === 'a' && tp.auto === 'steps')) && (!tp.need || ctx.need[tp.need]) && !tp.d && !used.has(tp.id);
const floors = [];
for (let i = 0; i < steps - 1; i++) {
let f = null, tries = 0;
while (!f && tries++ < 12) {
const free = cats.filter(c => !floors.some(x => x.c === c)), cat = pickW(rnd, free.length ? free : cats, c => w[c]);
const pool = Q.BANK.filter(tp => tp.c === cat && ok(tp)); if (!pool.length) continue;
const tp = pickW(rnd, pool, x => x.w || 1); used.add(tp.id);
f = makeQuest(tp, Math.max(1, Math.min(5, tier + up + [-1, 0, 0, 1][i])), [1, 2, 2, 3][i], rnd); f.xp = DG.floor[i];
}
if (f) floors.push(f);
}
const bpool = Q.BOSS.filter(tp => !tp.need || ctx.need[tp.need]);
if (bpool.length) { const tp = pickW(rnd, bpool, x => x.w || 1), b = makeQuest(Object.assign({ c: 'boss' }, tp), Math.min(5, tier + up), 3, rnd); Object.assign(b, { boss: true, xp: DG.boss }); floors.push(b); }
S.dg = (S.dg || []).concat([{ ws, rank, name: Math.floor(rnd() * Q.DUNGEONS.length), boss: Math.floor(rnd() * Q.BOSSES.length), floors, cleared: null, seen: false }]);
save();
}
function dungeonTick() {
ensureDungeon();
const dg = dgNow(), f = dgFloor();
if (f && f.k === 'a' && !dgDoneToday(dg)) { const p = questProgress(f); if (p && p[0] >= p[1]) dungeonClear(); }
}
function dungeonClear() {
const dg = dgNow(), f = dgFloor(); if (!dg || !f || dgDoneToday(dg)) return false;
const before = ppStats().total;
f.done = today(); markActivity();
const win = dg.floors.every(x => x.done); if (win) dg.cleared = today();
save(); checkBadges();
const gain = ppStats().total - before;
floatXP(gain);
if (win) {
SFX.play('rankUp'); buzz([40, 70, 40, 70, 120]);
setTimeout(() => showDgWin(dg, gain), 500);
} else { SFX.play('questDone'); buzz([14, 50, 24]); toast('🗝️ ' + t('dg.floorOk', { n: dg.floors.indexOf(f) + 1, x: gain })); }
scheduleSync(); checkLevelUp(ppStats(), win ? 2500 : 900);
return true;
}
function showDgWin(dg, gain) {
openSheet(`<div class="dg-win" style="--g2:${dgCol(dg)[1]}">${gateSvg(dg, 'lg')}<span class="dg-rank">${esc(t('dg.rank', { r: dgRankName(dg) }))}</span><h2>${esc(t('dg.winT'))}</h2>
      <p class="muted" style="margin:0">${esc(t('dg.winD', { b: bossName(dg), x: DG.clear }))}</p><b class="dg-win-xp num">+${gain} XP</b>
      <button type="button" class="btn block" id="dgWinOk">${esc(t('dg.winOk'))}</button></div>`, true);
$('#dgWinOk').onclick = () => { closeSheet(); render(); };
}
let gateSeq = 0;
function gateSvg(dg, cls = '') {
const [c1, c2] = dgCol(dg), id = 'gt' + (++gateSeq);
return `<svg class="gate ${cls}" viewBox="0 0 100 100" style="--g2:${c2}" role="img" aria-label="${esc(dgRankName(dg))}"><defs><radialGradient id="${id}" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#02030a"/><stop offset=".5" stop-color="${c1}" stop-opacity=".5"/><stop offset=".78" stop-color="${c2}" stop-opacity=".95"/><stop offset="1" stop-color="${c2}" stop-opacity="0"/></radialGradient></defs>
      <circle cx="50" cy="50" r="49" fill="url(#${id})"/><circle cx="50" cy="50" r="41" fill="none" stroke="${c2}" stroke-width="2.4"/><circle cx="50" cy="50" r="34" fill="none" stroke="${c2}" stroke-width="1.2" stroke-dasharray="2 5" opacity=".75"/>
      ${emblemAt(dgRank(dg), 50, 51, 46, '')}</svg>`;
}
const dgCloses = dg => { const n = daysBetween(today(), dkey(addDays(parseKey(dg.ws), 6))); return n <= 0 ? t('dg.closes0') : t('dg.closes', { n }); };
function dungeonCard() {
const dg = dgNow(); if (!S.onboarded || !dg) return '';
const f = dgFloor(), dt = dgDoneToday(dg), col = dgCol(dg);
const status = dg.cleared ? t('dg.cleared') : (dt ? t('dg.tomorrow') : f && f.boss ? t('dg.bossReady') : t('dg.ready', { n: dg.floors.indexOf(f) + 1 })) + ' · ' + dgCloses(dg);
return `<section class="card dg-card${dg.cleared ? ' cleared' : ''}" id="dgCard" role="button" tabindex="0" style="--g1:${col[0]};--g2:${col[1]}">
      ${gateSvg(dg, 'sm')}
      <div class="dg-info"><span class="dg-rank">${esc(t('dg.rank', { r: dgRankName(dg) }))}</span><b class="dg-name">${esc(dgName(dg))}</b>
        <div class="dg-nodes">${dg.floors.map(x => `<i class="${x.done ? 'on' : ''}${x.boss ? ' boss' : ''}${x === f && !dt && !dg.cleared ? ' cur' : ''}"></i>`).join('')}</div>
        <small class="${dg.cleared ? 'ok-txt' : 'muted'}">${esc(status)}</small></div>
      <span class="vault-go" aria-hidden="true">›</span></section>`;
}
function bindDungeonCard(root) {
const c = root.querySelector('#dgCard'); if (!c) return;
c.onclick = () => openDungeon(); c.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openDungeon(); } };
}
function dgNewLine() {
const dg = dgNow(); if (!dg || dg.seen) return '';
dg.seen = true; save();
return `<p class="sys-dg">⚠️ ${esc(t('dg.new', { r: dgRankName(dg), name: dgName(dg) }))}</p>`;
}
function openDungeon(snd) {
const dg = dgNow(); if (!dg) return;
if (!dg.seen) { dg.seen = true; save(); }
const f = dgFloor(), dt = dgDoneToday(dg), col = dgCol(dg), q = qs();
const rows = dg.floors.map((x, i) => {
const cur = x === f && !dg.cleared, locked = !x.done && !cur, tx = questText(x);
let act = '';
if (cur && dt) act = `<small class="muted">🔒 ${esc(t('dg.tomorrow'))}</small>`;
else if (cur && x.k === 'm') act = `<button type="button" class="btn block" id="dgDo">${esc(t(x.boss ? 'dg.hit' : 'dg.do'))}</button>`;
else if (cur && x.k === 't') { const run = q.timer && q.timer.qid === 'dg'; act = `<button type="button" class="btn block" data-qtimer="dg" id="dgTimer">⏱ ${esc(run ? t('q.running', { t: mmss(Math.ceil(timerLeft(q.timer))) }) : t('q.start', { t: durTxt(x.dur) }))}</button>`; }
else if (cur) {
const p = questProgress(x) || [0, 1], go = { steps: 'q.go.steps', run: 'q.go.run', focus: 'q.focus' }[x.auto];
act = `<div class="bar"><i style="width:${Math.min(100, p[0] / p[1] * 100).toFixed(1)}%"></i></div><div class="q-row">${go ? `<button type="button" class="btn subtle q-act" id="dgGo">${esc(t(go))}</button>` : ''}<span class="muted num q-prog">${nf(p[0], x.auto === 'run' ? 2 : 0)} / ${nf(p[1])} · ${esc(t('q.auto'))}</span></div>`;
}
return `<div class="dg-floor${x.done ? ' done' : ''}${cur ? ' cur' : ''}${locked ? ' locked' : ''}${x.boss ? ' boss' : ''}">
        <span class="dg-node">${x.done ? '✓' : x.boss ? '💀' : locked ? '🔒' : i + 1}</span>
        <div class="dg-fb"><span class="dg-fl">${x.boss ? esc(bossName(dg)) : esc(t('dg.floor', { n: i + 1 }))} · +${x.xp} XP</span>
          <b>${locked ? esc(t('dg.mystery')) : esc(tx.title)}</b>${cur && !dt ? `<small class="muted">${esc(tx.tip)}</small>` : ''}${act}</div></div>`;
}).reverse().join('');
const past = (S.dg || []).filter(d => d !== dg).slice(-5).reverse();
sheetView(`<div class="sheet-head"><h2>${esc(t('dg.title'))}</h2><button type="button" class="icon-btn" id="closeDg" aria-label="${esc(t('close'))}">✕</button></div>
      <div class="dg-head" style="--g1:${col[0]};--g2:${col[1]}">${gateSvg(dg, 'lg')}<div><span class="dg-rank">${esc(t('dg.rank', { r: dgRankName(dg) }))}</span><b class="dg-name">${esc(dgName(dg))}</b><small class="muted">${esc(dg.cleared ? t('dg.cleared') : dgCloses(dg))}</small></div></div>
      ${dg.cleared ? `<p class="dg-banner">🏆 ${esc(t('dg.winD', { b: bossName(dg), x: DG.clear }))}</p>` : `<p class="muted" style="margin:0;font-size:.88rem">${esc(t('dg.rules', { x: DG.clear }))}</p>`}
      <div class="dg-tower">${rows}</div>
      ${past.length ? `<div class="card"><span class="section-title" style="margin:0">${esc(t('dg.hist'))}</span><div class="history">${past.map(d => `<div><span>${rankEmblem(dgRank(d), 'xs')} ${esc(dgName(d))}</span><small class="${d.cleared ? 'ok-txt' : 'muted'}">${esc(d.cleared ? t('dg.ok') : t('dg.fail'))}</small></div>`).join('')}</div></div>` : ''}`, 'dg-sheet', snd);
$('#closeDg').onclick = closeSheet;
const done = () => { if (dungeonClear()) { render(); if (!dgNow().cleared) openDungeon(); } };
const dd = $('#dgDo'); if (dd) dd.onclick = () => f && f.boss ? confirmBox(t('dg.sure'), t('dg.sureOk'), done, false) : done();
const dtm = $('#dgTimer'); if (dtm) dtm.onclick = () => openTimer('dg');
const dgo = $('#dgGo');
if (dgo) dgo.onclick = () => { const sg = S.goals.find(g => g.type === 'steps'); if (f.auto === 'steps') (sg ? openPedometer(sg) : goalForm('steps', TEMPLATES.steps[0])); else if (f.auto === 'run') openRun(); else if (f.auto === 'focus') openFocus(); };
}
Object.assign(T.fr, {
'dg.title': 'Donjon de la semaine', 'dg.rank': 'Donjon de rang {r}', 'dg.new': 'Un donjon de rang {r} est apparu : {name}', 'dg.ready': 'Étage {n} disponible', 'dg.bossReady': 'Le boss t\'attend',
'dg.tomorrow': 'Étage suivant demain', 'dg.cleared': 'Boss vaincu ! Nouveau donjon lundi', 'dg.closes0': 'se ferme ce soir', 'dg.closes': 'se ferme dans {n} j', 'dg.floor': 'Étage {n}',
'dg.mystery': '??? (étage verrouillé)', 'dg.do': 'Étage terminé', 'dg.hit': 'Boss vaincu !', 'dg.sure': 'Tu as vraiment relevé le défi du boss ?', 'dg.sureOk': 'Oui, il est vaincu',
'dg.rules': 'Un étage par jour. Grimpe jusqu\'au boss avant dimanche soir : +{x} XP bonus si tu le bats.', 'dg.winT': 'Donjon terminé', 'dg.winD': '{b} est tombé. Le Système te récompense : +{x} XP bonus.',
'dg.floorOk': 'Étage {n} franchi · +{x} XP', 'dg.hist': 'Donjons passés', 'dg.fail': 'refermé', 'dg.ok': 'terminé',
'dg.winOk': 'Récupérer le butin', 'b.dungeon': 'Pilleur de donjon', 'b.dungeon.d': 'Ton premier boss vaincu',
'b.dungeon5': 'Seigneur des donjons', 'b.dungeon5.d': '5 donjons terminés', 'b.q200': 'Vétéran', 'b.q200.d': '200 quêtes terminées',
'b.streak100': 'Centurion', 'b.streak100.d': '100 jours de série sur une habitude', 'b.run42': 'Marathon', 'b.run42.d': '42 km de course au total',
'b.steps1m': 'Tour du monde', 'b.steps1m.d': '1 000 000 de pas au total', 'b.redeem': 'Seconde chance', 'b.redeem.d': 'Une série sauvée par la rédemption',
'b.raise': 'Toujours plus haut', 'b.raise.d': 'Monter la barre sur un objectif', 'b.exam1': 'Bien préparé', 'b.exam1.d': '5 révisions pour un même examen'
});
Object.assign(T.en, {
'dg.title': 'Dungeon of the week', 'dg.rank': '{r} dungeon', 'dg.new': 'A {r} dungeon has appeared: {name}', 'dg.ready': 'Floor {n} available', 'dg.bossReady': 'The boss awaits',
'dg.tomorrow': 'Next floor tomorrow', 'dg.cleared': 'Boss defeated! New dungeon on Monday', 'dg.closes0': 'closes tonight', 'dg.closes': 'closes in {n} d', 'dg.floor': 'Floor {n}',
'dg.mystery': '??? (locked floor)', 'dg.do': 'Floor cleared', 'dg.hit': 'Boss defeated!', 'dg.sure': 'Did you really beat the boss challenge?', 'dg.sureOk': 'Yes, it\'s defeated',
'dg.rules': 'One floor per day. Climb to the boss before Sunday night: +{x} bonus XP if you beat it.', 'dg.winT': 'Dungeon cleared', 'dg.winD': '{b} has fallen. The System rewards you: +{x} bonus XP.',
'dg.floorOk': 'Floor {n} cleared · +{x} XP', 'dg.hist': 'Past dungeons', 'dg.fail': 'closed', 'dg.ok': 'cleared',
'dg.winOk': 'Claim the loot', 'b.dungeon': 'Dungeon raider', 'b.dungeon.d': 'Your first boss defeated',
'b.dungeon5': 'Dungeon lord', 'b.dungeon5.d': '5 dungeons cleared', 'b.q200': 'Veteran', 'b.q200.d': '200 quests completed',
'b.streak100': 'Centurion', 'b.streak100.d': '100-day streak on a habit', 'b.run42': 'Marathon', 'b.run42.d': '42 km run in total',
'b.steps1m': 'Around the world', 'b.steps1m.d': '1,000,000 steps in total', 'b.redeem': 'Second chance', 'b.redeem.d': 'A streak saved by redemption',
'b.raise': 'Ever higher', 'b.raise.d': 'Raise the bar on a goal', 'b.exam1': 'Well prepared', 'b.exam1.d': '5 revisions for one exam'
});
const CREATOR_HASH = '8b676f3cb2e4dc8dbe8cff64bb9ebe519235ff2ed1686144a53fdb5f78780cdf';
function creatorOn() { return !!(S.creator && S.creator.on); }
function creatorAll() { return creatorOn() && S.creator.all !== false; }
async function sha256(txt) { const b = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(txt)); return [...new Uint8Array(b)].map(x => x.toString(16).padStart(2, '0')).join(''); }
let aboutTaps = 0, aboutAt = 0;
function creatorCard() {
if (!creatorOn()) return '';
const tools = [['sys', '🪟'], ['quests', '🎲'], ['level', '⬆️'], ['rank', '🛡️'], ['dgfloor', '🗝️'], ['dgwin', '🏆'], ['report', '📜'], ['intro', '✨']];
return `<section class="card creator-card"><div class="row between"><h3>👑 ${esc(t('cr.title'))}</h3><span class="cr-chip">${esc(t('cr.on'))}</span></div>
      <p class="muted" style="margin:0;font-size:.88rem">${esc(t('cr.d'))}</p>
      <div class="field">${esc(t('cr.all'))}<div class="chips"><button type="button" class="chip" data-crall="1" aria-pressed="${creatorAll()}">${esc(t('cr.yes'))}</button><button type="button" class="chip" data-crall="0" aria-pressed="${!creatorAll()}">${esc(t('cr.no'))}</button></div></div>
      <div class="cr-users" id="crUsers"><b>👥 ${esc(t('us.title'))}</b><span class="muted">${esc(t(NET.ready() ? 'us.loading' : 'us.off'))}</span></div>
      <div class="cr-tools">${tools.map(([k, i]) => `<button type="button" class="btn subtle" data-cr="${k}"><span aria-hidden="true">${i}</span>${esc(t('cr.' + k))}</button>`).join('')}</div>
      <button type="button" class="btn danger" data-cr="off">${esc(t('cr.off'))}</button></section>`;
}
function bindCreator() {
const ab = $('#about');
if (ab) ab.onclick = () => {
const now = Date.now(); aboutTaps = now - aboutAt < 1500 ? aboutTaps + 1 : 1; aboutAt = now;
if (aboutTaps >= 4 && aboutTaps < 7 && !creatorOn()) SFX.play('tick');
if (aboutTaps >= 7) { aboutTaps = 0; creatorCode(); }
};
view.querySelectorAll('[data-crall]').forEach(b => b.onclick = () => { S.creator.all = b.dataset.crall === '1'; save(); SFX.play('equip'); render(); });
view.querySelectorAll('[data-cr]').forEach(b => b.onclick = () => creatorTool(b.dataset.cr));
const box = $('#crUsers');
if (box && NET.ready()) NET.rpcAnon('pm_stats').then(st => {
const n = k => nf(Math.max(0, parseInt(st && st[k], 10) || 0));
box.innerHTML = `<b>👥 ${esc(t('us.title'))}</b><div class="cr-nums"><span><b class="num">${n('total')}</b>${esc(t('us.total'))}</span><span><b class="num">${n('today')}</b>${esc(t('us.today'))}</span><span><b class="num">${n('week')}</b>${esc(t('us.week'))}</span><span><b class="num">${n('month')}</b>${esc(t('us.month'))}</span></div>`;
}).catch(() => { box.querySelector('.muted').textContent = t('us.err'); });
}
function pingUsers() {
if (!NET.ready() || !S.onboarded || S.pingDay === today() || devHost()) return;
if (!S.anonId) { S.anonId = (crypto.randomUUID ? crypto.randomUUID() : 'xxxxxxxx-xxxx-4xxx-8xxx-xxxxxxxxxxxx'.replace(/x/g, () => (Math.random() * 16 | 0).toString(16))); saveUI(); }
NET.rpcAnon('pm_ping', { p_id: S.anonId }).then(() => { S.pingDay = today(); saveUI(); }).catch(() => {  });
}
Object.assign(T.fr, { 'us.title': 'Joueurs de PeakMind', 'us.loading': 'Chargement…', 'us.off': 'Le compteur s\'allume avec le classement en ligne (Supabase, voir le README).', 'us.err': 'Pas de réseau, ou le serveur ne répond pas.', 'us.total': 'au total', 'us.today': 'aujourd\'hui', 'us.week': 'sur 7 jours', 'us.month': 'sur 30 jours',
's.privacy.count': 'Tes objectifs et tes progrès restent sur ton téléphone. Seul un compteur anonyme (sans pseudo ni donnée perso) dit combien de personnes utilisent PeakMind. Pense à sauvegarder de temps en temps.' });
Object.assign(T.en, { 'us.title': 'PeakMind players', 'us.loading': 'Loading…', 'us.off': 'The counter turns on with the online ranking (Supabase, see the README).', 'us.err': 'No network, or the server isn\'t answering.', 'us.total': 'in total', 'us.today': 'today', 'us.week': 'last 7 days', 'us.month': 'last 30 days',
's.privacy.count': 'Your goals and progress stay on your phone. Only an anonymous counter (no name, no personal data) tells how many people use PeakMind. Back up from time to time.' });
function creatorCode() {
if (creatorOn()) { toast(t('cr.already')); return; }
openSheet(`<div class="sheet-head"><h2>👑 ${esc(t('cr.title'))}</h2><button type="button" class="icon-btn" id="closeCr" aria-label="${esc(t('close'))}">✕</button></div>
      <p class="muted" style="margin:0">${esc(t('cr.ask'))}</p>
      <form class="inline-form" id="crForm"><input id="crCode" autocomplete="off" autocapitalize="characters" spellcheck="false" placeholder="PEAK-XXXXX-XXXXX" aria-label="${esc(t('cr.ask'))}"><button class="btn" type="submit">OK</button></form>
      <p class="muted" id="crErr" role="alert" style="margin:0;color:var(--bad)"></p>`, true);
$('#closeCr').onclick = closeSheet;
$('#crForm').onsubmit = async e => {
e.preventDefault();
const v = $('#crCode').value.trim().toUpperCase().replace(/\s+/g, '');
let ok = false;
try { ok = (await sha256('peakmind:creator:' + v)) === CREATOR_HASH; } catch (err) {  }
if (!ok) { SFX.play('error'); $('#crErr').textContent = t('cr.bad'); $('#crCode').select(); return; }
S.creator = { on: true, all: true, since: today() }; save(); closeSheet();
SFX.play('rankUp'); buzz([40, 70, 40, 70, 120]); toast('👑 ' + t('cr.welcome')); render(); checkTitles();
};
}
function creatorTool(k) {
const q = qs(), go = () => { S.tab = 'today'; save(); render(); window.scrollTo(0, 0); };
if (k === 'sys') { q.seen = ''; save(); go(); }
else if (k === 'quests') { q.day = ''; q.list = []; q.rerolls = 0; save(); toast('🎲 ' + t('cr.quests.ok')); go(); }
else if (k === 'level') { const lv = ppStats().level; celebrateLevel(Math.max(1, lv - 1), lv); }
else if (k === 'rank') {
const i = 1 + ((S.creator.rk || 0) % (RANKS.length - 1)); S.creator.rk = i; save();
celebrateLevel(RANKS[i].lvl - 1, RANKS[i].lvl);
}
else if (k === 'dgfloor') {
const dg = dgNow(); if (!dg) return;
dg.floors.forEach(f => { if (f.done === today()) delete f.done; }); if (dg.cleared === today()) dg.cleared = null;
save(); render(); toast('🗝️ ' + t('cr.dgfloor.ok')); openDungeon();
}
else if (k === 'dgwin') { const dg = dgNow() || { rank: 'legend', boss: 0 }; showDgWin(dg, DG.boss + DG.clear); SFX.play('rankUp'); }
else if (k === 'report') openReport();
else if (k === 'intro') { SFX.unlock().then(() => { S.onboarded = false; save(); showWelcome(); }); }
else if (k === 'off') confirmBox(t('cr.off.q'), t('cr.off'), () => { S.creator = null; save(); SFX.play('down'); render(); scheduleSync(); }, false);
}
Object.assign(T.fr, {
'cr.title': 'Mode créateur', 'cr.on': 'ACTIVÉ', 'cr.d': 'Réservé au créateur de PeakMind. Ton XP ne change pas, et le classement en ligne est en pause tant que ce mode est activé.',
'cr.all': 'Tout débloquer (thèmes, avatars, cadres, titres)', 'cr.yes': 'Oui', 'cr.no': 'Non',
'cr.sys': 'Fenêtre SYSTÈME', 'cr.quests': 'Nouvelles quêtes', 'cr.level': 'Célébration de niveau', 'cr.rank': 'Célébration de rang',
'cr.dgfloor': 'Rouvrir l\'étage du jour', 'cr.dgwin': 'Victoire du donjon', 'cr.report': 'Rapport du Système', 'cr.intro': 'Rejouer l\'intro',
'cr.off': 'Quitter le mode créateur', 'cr.off.q': 'Quitter le mode créateur ? Les récompenses reviennent à ton vrai niveau.',
'cr.ask': 'Entre ton code créateur.', 'cr.bad': 'Code incorrect.', 'cr.welcome': 'Mode créateur activé. Bienvenue, créateur.', 'cr.already': 'Le mode créateur est déjà activé.',
'cr.quests.ok': 'Nouvelles quêtes tirées', 'cr.dgfloor.ok': 'L\'étage du jour est de nouveau disponible'
});
Object.assign(T.en, {
'cr.title': 'Creator mode', 'cr.on': 'ON', 'cr.d': 'Reserved for PeakMind\'s creator. Your XP doesn\'t change, and the online leaderboard is paused while this mode is on.',
'cr.all': 'Unlock everything (themes, avatars, frames, titles)', 'cr.yes': 'Yes', 'cr.no': 'No',
'cr.sys': 'SYSTEM window', 'cr.quests': 'New quests', 'cr.level': 'Level-up celebration', 'cr.rank': 'Rank-up celebration',
'cr.dgfloor': 'Reopen today\'s floor', 'cr.dgwin': 'Dungeon victory', 'cr.report': 'System report', 'cr.intro': 'Replay the intro',
'cr.off': 'Leave creator mode', 'cr.off.q': 'Leave creator mode? Rewards go back to your real level.',
'cr.ask': 'Enter your creator code.', 'cr.bad': 'Wrong code.', 'cr.welcome': 'Creator mode on. Welcome, creator.', 'cr.already': 'Creator mode is already on.',
'cr.quests.ok': 'New quests drawn', 'cr.dgfloor.ok': 'Today\'s floor is available again'
});
const FEATS = [{ id: 'dungeon', ico: '🌀' }, { id: 'vault', ico: '💰' }, { id: 'exam', ico: '🎓' }];
const journeyDay = () => S.startDay ? daysBetween(S.startDay, today()) + 1 : 99;
function featDay(id) {
const ints = S.interests || [];
return id === 'dungeon' ? 2 : id === 'vault' ? (ints.includes('money') ? 1 : 3) : id === 'exam' ? (ints.includes('study') ? 2 : 4) : 1;
}
function featOn(id) { return creatorOn() || journeyDay() >= featDay(id); }
function lockedFeatsHtml() {
const locked = FEATS.filter(f => !featOn(f.id)); if (!locked.length) return '';
return `<div class="locked-feats">${locked.map(f => { const n = featDay(f.id) - journeyDay();
return `<div class="lf-row"><span class="lf-ico" aria-hidden="true">${f.ico}</span><b>${esc(t('ul.' + f.id))}</b><small>🔒 ${esc(n <= 1 ? t('ul.tomorrow') : t('ul.inDays', { n }))}</small></div>`; }).join('')}</div>`;
}
function unlockLines() {
if (!S.startDay) return '';
S.unlockSeen = S.unlockSeen || {};
const fresh = FEATS.filter(f => featDay(f.id) > 1 && featOn(f.id) && !S.unlockSeen[f.id]);
if (!fresh.length) return '';
fresh.forEach(f => { S.unlockSeen[f.id] = today(); }); save();
return fresh.map(f => `<p class="sys-unlock"><span aria-hidden="true">🔓</span><span><b>${esc(t('ul.new'))} ${f.ico} ${esc(t('ul.' + f.id))}</b><small>${esc(t('ul.' + f.id + '.d'))}</small></span></p>`).join('');
}
Object.assign(T.fr, {
'ul.dungeon': 'Les donjons', 'ul.vault': 'Le Coffre', 'ul.exam': 'Le mode examen', 'ul.tomorrow': 'se débloque demain', 'ul.inDays': 'se débloque dans {n} jours',
'ul.new': 'Nouvelle fonction :', 'ul.dungeon.d': 'Un donjon s\'ouvre chaque semaine : grimpe ses étages et bats le boss.',
'ul.vault.d': 'Tirelires, budget, envies sous clé et Académie de l\'argent (onglet Objectifs).', 'ul.exam.d': 'Ajoute tes contrôles : le Système te fera réviser chaque jour (onglet Objectifs).'
});
Object.assign(T.en, {
'ul.dungeon': 'Dungeons', 'ul.vault': 'The Vault', 'ul.exam': 'Exam mode', 'ul.tomorrow': 'unlocks tomorrow', 'ul.inDays': 'unlocks in {n} days',
'ul.new': 'New feature:', 'ul.dungeon.d': 'A dungeon opens every week: climb its floors and beat the boss.',
'ul.vault.d': 'Jars, budget, locked wants and the Money Academy (Goals tab).', 'ul.exam.d': 'Add your tests: the System will make you revise every day (Goals tab).'
});
function dangerCard() {
if (!S.onboarded) return '';
const tk = today(), y = dkey(addDays(new Date(), -1));
if (new Date().getHours() < 18 || S.activity[tk] || !S.activity[y]) return '';
const n = streakEndingAt(y); if (n < 2) return '';
return `<section class="card danger-card" role="alert"><span class="dz-ico" aria-hidden="true">🔥</span><div class="dz-txt"><b>${esc(t('dz.t', { n }))}</b><small>${esc(t('dz.d'))}</small></div><button type="button" class="btn" id="dzGo">${esc(t('dz.go'))}</button></section>`;
}
function guideTip() {
if (!S.onboarded || S.guideSeen || Object.keys(S.activity).length > 3) return '';
return `<section class="card guide-tip"><span aria-hidden="true">📖</span><div><b>${esc(t('gd.tipT'))}</b><small>${esc(t('gd.tipD'))}</small></div>
      <div class="gt-btns"><button type="button" class="btn small-btn" id="gtOpen">${esc(t('gd.read'))}</button><button type="button" class="icon-btn" id="gtClose" aria-label="${esc(t('close'))}">✕</button></div></section>`;
}
function bindTodayExtras(root) {
const dz = root.querySelector('#dzGo'); if (dz) dz.onclick = () => { const q = view.querySelector('.quests'); if (q) q.scrollIntoView({ behavior: 'smooth', block: 'start' }); SFX.play('select'); };
const go = root.querySelector('#gtOpen'); if (go) go.onclick = () => openGuide();
const gc = root.querySelector('#gtClose'); if (gc) gc.onclick = () => { S.guideSeen = true; save(); SFX.play('close'); render(); };
}
function bestStreakEver() { let best = 0, run = 0, prev = null; for (const k of Object.keys(S.activity).filter(k => S.activity[k]).sort()) { run = prev && daysBetween(prev, k) === 1 ? run + 1 : 1; best = Math.max(best, run); prev = k; } return best; }
function activityCard() {
const days = ppStats().days, W = 26, now = new Date(), tk = today();
const start = addDays(now, -((now.getDay() + 6) % 7) - (W - 1) * 7);
let cells = '', active = 0, lastMonth = -1, months = '';
for (let w = 0; w < W; w++) {
const mon = addDays(start, w * 7);
if (mon.getMonth() !== lastMonth) { months += `<span style="grid-column:${w + 1}">${esc(mon.toLocaleDateString(S.lang === 'fr' ? 'fr-FR' : 'en-US', { month: 'short' }).replace('.', ''))}</span>`; lastMonth = mon.getMonth(); }
for (let d = 0; d < 7; d++) {
const k = dkey(addDays(mon, d));
if (k > tk) { cells += '<i class="fut"></i>'; continue; }
const xp = days[k] || 0, act = !!S.activity[k]; if (act) active++;
const lv = xp >= 90 ? 4 : xp >= 60 ? 3 : xp >= 30 ? 2 : xp > 0 || act ? 1 : 0;
cells += `<i class="l${lv}${k === tk ? ' today' : ''}" title="${esc(fmtDate(k))} · ${xp} XP"></i>`;
}
}
return `<section class="card act-card"><div class="row between"><span class="section-title" style="margin:0">${esc(t('ac.title'))}</span><span class="muted num" style="font-size:.8rem">${esc(t('ac.range'))}</span></div>
      <div class="hm-wrap"><div class="hm-months" style="grid-template-columns:repeat(${W},1fr)">${months}</div><div class="hm" style="grid-template-columns:repeat(${W},1fr)">${cells}</div></div>
      <div class="hm-legend"><span>${esc(t('ac.less'))}</span><i class="l0"></i><i class="l1"></i><i class="l2"></i><i class="l3"></i><i class="l4"></i><span>${esc(t('ac.more'))}</span></div>
      <div class="rp-mini"><div><b class="num">${active}</b><small>${esc(t('ac.active'))}</small></div><div><b class="num">${bestStreakEver()}</b><small>${esc(t('ac.best'))}</small></div><div><b class="num">${nf(questsDone())}</b><small>${esc(t('ac.quests'))}</small></div></div></section>`;
}
async function drawPlayerCard() {
const W = 1080, H = 1920, cv = document.createElement('canvas'); cv.width = W; cv.height = H;
const g = cv.getContext('2d'), th = themeOf(), st = ppStats(), alt = altOf(st.total), dark = th.mode === 'dark';
try { await Promise.all(['700 80px "Chakra Petch"', '600 40px "Chakra Petch"', '500 36px "Space Grotesk"'].map(f => document.fonts.load(f))); } catch (e) {  }
const A = th.a, A2 = th.a2, base = dark ? th.bg : '#0b1020', top = dark ? th.h2 : th.h1, INK = '#f2f6fc', MUT = 'rgba(214,224,240,.66)';
const D = (w, s, fam = 'Chakra Petch') => `${w} ${s}px "${fam}", "Segoe UI", sans-serif`;
let bg = g.createLinearGradient(0, 0, 0, H); bg.addColorStop(0, top); bg.addColorStop(.45, base); bg.addColorStop(1, base); g.fillStyle = bg; g.fillRect(0, 0, W, H);
let rg = g.createRadialGradient(W / 2, 430, 0, W / 2, 430, 620); rg.addColorStop(0, A + '55'); rg.addColorStop(1, A + '00'); g.fillStyle = rg; g.fillRect(0, 0, W, H);
g.strokeStyle = 'rgba(255,255,255,.035)'; g.lineWidth = 1; for (let y = 0; y < H; y += 6) { g.beginPath(); g.moveTo(0, y); g.lineTo(W, y); g.stroke(); }
const rr = (x, y, w, h, r) => { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); };
const txt = (s, x, y, font, color, align = 'left', sp = 0) => { g.font = font; g.fillStyle = color; g.textAlign = align; if ('letterSpacing' in g) g.letterSpacing = sp + 'px'; g.fillText(s, x, y); if ('letterSpacing' in g) g.letterSpacing = '0px'; };
txt('PEAK', W / 2 - 6, 130, D(700, 44), INK, 'right', 10); txt('MIND', W / 2 + 6, 130, D(700, 44), A, 'left', 10);
txt(t('pc.title').toUpperCase(), W / 2, 190, D(600, 30), MUT, 'center', 10);
const av = avatarOf(), [c1, c2] = AV_BG[Math.max(0, AVATARS.indexOf(av))];
const inner = av === 'initials' ? `<text x="12" y="15.6" text-anchor="middle" font-family="Chakra Petch, sans-serif" font-weight="700" font-size="9" fill="#fff">${esc(initialsOf(S.name))}</text>`
: `<g transform="translate(5.4 5.4) scale(.55)" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${AV_SVG[av] || AV_SVG.peak}</g>`;
const avSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 24 24"><style>.f{fill:#fff;fill-opacity:.22}</style><defs><linearGradient id="a" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c2}"/><stop offset="1" stop-color="${c1}"/></linearGradient></defs><circle cx="12" cy="12" r="12" fill="url(#a)"/><ellipse cx="9" cy="6" rx="7" ry="4" fill="#fff" fill-opacity=".18"/>${inner}</svg>`;
const [avImg, emImg] = await Promise.all([loadImg('data:image/svg+xml;charset=utf-8,' + encodeURIComponent(avSvg)),
loadImg('data:image/svg+xml;charset=utf-8,' + encodeURIComponent(rankEmblem(st.rank).replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" ')))]);
const ring = g.createLinearGradient(W / 2 - 170, 280, W / 2 + 170, 620); ring.addColorStop(0, A); ring.addColorStop(1, A2);
g.save(); g.shadowColor = A; g.shadowBlur = 40; g.beginPath(); g.arc(W / 2, 450, 172, 0, Math.PI * 2); g.lineWidth = 12; g.strokeStyle = ring; g.stroke(); g.restore();
if (avImg) g.drawImage(avImg, W / 2 - 150, 300, 300, 300);
if (emImg) g.drawImage(emImg, W / 2 + 70, 470, 180, 180);
const name = (S.name || 'PeakMind').slice(0, 20);
txt(name, W / 2, 760, D(700, name.length > 12 ? 72 : 88), INK, 'center');
txt('« ' + L(titleNow(), '') + ' »', W / 2, 825, D(600, 42), A, 'center');
txt(`${t('lvl.n', { n: st.level })} · ${L(st.rank, '')}`.toUpperCase(), W / 2, 885, D(600, 36), MUT, 'center', 4);
rr(160, 930, 760, 22, 11); g.fillStyle = 'rgba(255,255,255,.1)'; g.fill();
const bw = Math.max(22, 760 * (st.max ? 1 : st.p)), lg = g.createLinearGradient(160, 0, 160 + bw, 0); lg.addColorStop(0, A2); lg.addColorStop(1, A); rr(160, 930, bw, 22, 11); g.fillStyle = lg; g.fill();
txt(st.max ? t('lvl.total', { n: nf(st.total) }) : `${nf(st.total)} / ${nf(st.to)} XP`, W / 2, 1000, D(500, 32, 'Space Grotesk'), MUT, 'center');
const badges = BADGES.filter(b => S.badges[b.id]).length;
const tiles = [[`${nf(alt)} m`, t('rp.alt')], [`${globalStreak()} ${S.lang === 'fr' ? 'j' : 'd'}`, t('stat.streak')], [nf(questsDone()), t('rp.quests')], [`${badges}/${BADGES.length}`, t('pt.badges')]];
tiles.forEach(([v, l], i) => { const x = 90 + (i % 2) * 460, y = 1060 + Math.floor(i / 2) * 210;
rr(x, y, 440, 185, 30); g.fillStyle = 'rgba(255,255,255,.05)'; g.fill(); g.strokeStyle = (i % 2 ? A2 : A) + '66'; g.lineWidth = 2; g.stroke();
txt(v, x + 34, y + 102, D(700, 72), i % 2 ? A2 : A); txt(String(l), x + 36, y + 152, D(500, 32, 'Space Grotesk'), MUT); });
const by = 1800, ty = 1530, X = i => ascX(i, 70, W - 90), Y = a => by - a / ALT_TOP * (by - ty);
const pts = [[70, by], ...SUMMITS.map((s, i) => [X(i), Y(s.a)])];
g.beginPath(); pts.forEach(([x, y], i) => i ? g.lineTo(x, y) : g.moveTo(x, y)); g.lineTo(W - 90, by); g.closePath();
const mg = g.createLinearGradient(0, ty, 0, by); mg.addColorStop(0, A + '44'); mg.addColorStop(1, A + '00'); g.fillStyle = mg; g.fill();
g.beginPath(); pts.forEach(([x, y], i) => i ? g.lineTo(x, y) : g.moveTo(x, y)); g.strokeStyle = 'rgba(255,255,255,.25)'; g.lineWidth = 4; g.stroke();
let cx = pts[pts.length - 1][0], cy = Y(ALT_TOP);
for (let i = 0; i < SUMMITS.length; i++) { const a0 = i ? SUMMITS[i - 1].a : 0, a1 = SUMMITS[i].a; if (alt <= a1) { cx = pts[i][0] + (alt - a0) / (a1 - a0) * (pts[i + 1][0] - pts[i][0]); cy = Y(alt); break; } }
g.save(); g.beginPath(); g.rect(0, 0, cx, H); g.clip(); g.beginPath(); pts.forEach(([x, y], i) => i ? g.lineTo(x, y) : g.moveTo(x, y)); g.strokeStyle = A; g.lineWidth = 7; g.shadowColor = A; g.shadowBlur = 24; g.stroke(); g.restore();
g.fillStyle = INK; g.shadowColor = A; g.shadowBlur = 30; g.beginPath(); g.arc(cx, cy, 13, 0, Math.PI * 2); g.fill(); g.shadowBlur = 0;
txt('#peakmind', W / 2, 1880, D(600, 36), MUT, 'center', 4);
return cv;
}
async function openPlayerCard() {
openSheet(`<div class="sheet-head"><h2>${esc(t('pc.title'))}</h2><button type="button" class="icon-btn" id="closePc" aria-label="${esc(t('close'))}">✕</button></div>
      <div class="rp-img" id="pcImg"><span class="muted">${esc(t('rp.making'))}</span></div>
      <div class="grid-2"><button type="button" class="btn" id="pcShare" disabled>${esc(t('rp.share'))}</button><button type="button" class="btn subtle" id="pcSave" disabled>${esc(t('rp.save'))}</button></div>
      <p class="muted" style="margin:0;font-size:.82rem;text-align:center">${esc(t('pc.hint'))}</p>`);
$('#closePc').onclick = closeSheet;
SFX.play('quest');
const cv = await drawPlayerCard(), blob = await new Promise(res => cv.toBlob(res, 'image/png'));
const box = $('#pcImg'); if (!box || !blob) return;
const url = URL.createObjectURL(blob), file = new File([blob], `peakmind-carte-${today()}.png`, { type: 'image/png' });
box.innerHTML = `<img src="${url}" alt="${esc(t('pc.title'))}">`;
const share = $('#pcShare'), dl = $('#pcSave');
const download = () => { const a = document.createElement('a'); a.href = url; a.download = file.name; document.body.appendChild(a); a.click(); a.remove(); toast(t('rp.saved')); };
share.disabled = dl.disabled = false;
share.onclick = async () => { if (navigator.canShare && navigator.canShare({ files: [file] })) { try { await navigator.share({ files: [file], text: '#peakmind' }); } catch (e) {  } } else download(); };
dl.onclick = download;
onSheetClose = () => setTimeout(() => URL.revokeObjectURL(url), 1000);
}
const GUIDE = ['start', 'quests', 'xp', 'dungeon', 'stats', 'vault', 'exam', 'tips', 'league', 'data'];
function openGuide() {
S.guideSeen = true; save();
openSheet(`<div class="sheet-head"><h2>📖 ${esc(t('gd.title'))}</h2><button type="button" class="icon-btn" id="closeGd" aria-label="${esc(t('close'))}">✕</button></div>
      <p class="muted" style="margin:0">${esc(t('gd.intro'))}</p>
      <div class="guide">${GUIDE.map((k, i) => `<details${i === 0 ? ' open' : ''}><summary>${esc(t('gd.' + k + '.t'))}</summary><p>${esc(t('gd.' + k + '.d'))}</p></details>`).join('')}</div>`);
$('#closeGd').onclick = closeSheet;
sheet.querySelectorAll('.guide summary').forEach(s => s.addEventListener('click', () => SFX.play('tick')));
}
Object.assign(T.fr, {
'dz.t': 'Ta série de {n} jours est en danger !', 'dz.d': 'Fais une quête ou une action avant minuit pour la garder.', 'dz.go': 'J\'y vais',
'gd.tipT': 'Nouveau ici ?', 'gd.tipD': 'Le guide du Système t\'explique tout en 2 minutes.', 'gd.read': 'Lire',
'ac.title': 'Ton activité', 'ac.range': '6 derniers mois', 'ac.less': 'Moins', 'ac.more': 'Plus', 'ac.active': 'jours actifs', 'ac.best': 'meilleure série', 'ac.quests': 'quêtes',
'pc.title': 'Carte de joueur', 'pc.share': 'Partager ma carte', 'pc.shareRank': 'Partager mon nouveau rang', 'pc.hint': 'Poste-la en story ou sur TikTok avec #peakmind. Ta photo n\'apparaît jamais.',
'gd.title': 'Guide du Système', 'gd.row': 'Comment marche PeakMind, en 2 minutes', 'gd.intro': 'Touche une partie pour la lire.',
'gd.start.t': '🎯 Le principe', 'gd.start.d': 'Tu choisis tes objectifs (sport, cours, sommeil, argent, mauvaises habitudes). Chaque action te rapporte de l\'XP. L\'XP te fait monter de niveau, de Fer jusqu\'à Légende, et grimper la montagne jusqu\'à 8 849 m.',
'gd.quests.t': '⚔️ Les quêtes du jour', 'gd.quests.d': 'Chaque matin, le Système te donne 3 quêtes choisies pour toi. Plus tu réussis, plus elles deviennent dures. Tu peux en changer une par jour (↻). Finis les 3 pour une journée parfaite (+10 XP). Chaque semaine, un défi rapporte +50 XP.',
'gd.xp.t': '⛰️ XP, niveaux et rangs', 'gd.xp.d': 'Tu peux gagner jusqu\'à 100 XP par jour (actions + quêtes). Les badges, le défi de la semaine et le boss du donjon rapportent de l\'XP en plus. Un nouveau rang tous les 10 niveaux : Bronze, Argent, Or… et Légende au niveau 100. Chaque niveau débloque des thèmes, des avatars ou des cadres.',
'gd.dungeon.t': '🌀 Les donjons', 'gd.dungeon.d': 'Chaque lundi, un donjon de ton rang s\'ouvre. Grimpe un étage par jour, puis bats le boss avant dimanche soir : +75 XP. Réussis 2 donjons d\'affilée et le Système t\'envoie dans un donjon du rang au-dessus.',
'gd.stats.t': '📊 Fiche, titres et badges', 'gd.stats.d': 'Tes quêtes font monter 5 stats : Force, Endurance, Intelligence, Discipline, Mental. Tu débloques des titres à afficher sous ton pseudo, et des badges qui rapportent chacun +50 XP.',
'gd.vault.t': '💰 Le Coffre', 'gd.vault.d': 'Tirelires projet (avec ta date d\'arrivée), budget de la semaine, envies sous clé 48 h et Académie de l\'argent. Ouvre-le depuis l\'onglet Objectifs. Aucun montant ne quitte ton téléphone.',
'gd.exam.t': '🎓 Le mode examen', 'gd.exam.d': 'Ajoute tes contrôles dans Objectifs → Mode examen. Dans les 14 jours avant, le Système te donne une quête de révision chronométrée chaque jour.',
'gd.tips.t': '🔥 Séries, rédemption et « monter la barre »', 'gd.tips.d': 'Ta série compte les jours où tu fais au moins une action. Tu as raté un jour ? Une quête de rédemption peut la sauver (une fois par semaine). Objectif atteint ? Touche « Monter la barre » pour viser le sommet suivant. Une faute ou un chiffre à changer ? Ouvre l\'objectif et touche le crayon ✏️.',
'gd.league.t': '🏆 Le classement', 'gd.league.d': 'Monde, semaine et amis. Ton code ami est dans ton profil. Seuls ton pseudo, ton avatar, ton cadre, ton rang et ton XP sont visibles. Jamais ta photo ni tes objectifs.',
'gd.data.t': '📱 Installer et sauvegarder', 'gd.data.d': 'Ajoute PeakMind à ton écran d\'accueil pour l\'avoir en plein écran, même hors ligne. Tes données restent sur ton téléphone : pense à les sauvegarder de temps en temps (Réglages → Tes données). Pour ne pas oublier tes quêtes, ajoute un rappel quotidien à ton agenda (Réglages → Rappel quotidien).'
});
Object.assign(T.en, {
'dz.t': 'Your {n}-day streak is in danger!', 'dz.d': 'Do a quest or an action before midnight to keep it.', 'dz.go': 'On it',
'gd.tipT': 'New here?', 'gd.tipD': 'The System guide explains everything in 2 minutes.', 'gd.read': 'Read',
'ac.title': 'Your activity', 'ac.range': 'last 6 months', 'ac.less': 'Less', 'ac.more': 'More', 'ac.active': 'active days', 'ac.best': 'best streak', 'ac.quests': 'quests',
'pc.title': 'Player card', 'pc.share': 'Share my card', 'pc.shareRank': 'Share my new rank', 'pc.hint': 'Post it in your story or on TikTok with #peakmind. Your photo never appears.',
'gd.title': 'System guide', 'gd.row': 'How PeakMind works, in 2 minutes', 'gd.intro': 'Tap a part to read it.',
'gd.start.t': '🎯 The idea', 'gd.start.d': 'You pick your goals (sport, school, sleep, money, bad habits). Every action earns XP. XP levels you up from Iron to Legend and takes you up the mountain, all the way to 8,849 m.',
'gd.quests.t': '⚔️ Daily quests', 'gd.quests.d': 'Every morning, the System gives you 3 quests picked for you. The more you succeed, the harder they get. You can swap one per day (↻). Finish all 3 for a perfect day (+10 XP). Each week, a challenge earns +50 XP.',
'gd.xp.t': '⛰️ XP, levels and ranks', 'gd.xp.d': 'You can earn up to 100 XP per day (actions + quests). Badges, the weekly challenge and the dungeon boss give extra XP. A new rank every 10 levels: Bronze, Silver, Gold… and Legend at level 100. Each level unlocks themes, avatars or frames.',
'gd.dungeon.t': '🌀 Dungeons', 'gd.dungeon.d': 'Every Monday, a dungeon of your rank opens. Climb one floor per day, then beat the boss before Sunday night: +75 XP. Clear 2 dungeons in a row and the System sends you to a higher-rank dungeon.',
'gd.stats.t': '📊 Profile, titles and badges', 'gd.stats.d': 'Your quests raise 5 stats: Strength, Stamina, Intelligence, Discipline, Mind. You unlock titles to show under your name, and badges worth +50 XP each.',
'gd.vault.t': '💰 The Vault', 'gd.vault.d': 'Project jars (with your arrival date), weekly budget, 48-hour locked wants and the Money Academy. Open it from the Goals tab. No amount ever leaves your phone.',
'gd.exam.t': '🎓 Exam mode', 'gd.exam.d': 'Add your tests in Goals → Exam mode. In the 14 days before, the System gives you a timed revision quest every day.',
'gd.tips.t': '🔥 Streaks, redemption and "raise the bar"', 'gd.tips.d': 'Your streak counts the days you do at least one action. Missed a day? A redemption quest can save it (once a week). Goal reached? Tap "Raise the bar" to aim for the next summit. A typo or a number to change? Open the goal and tap the pencil ✏️.',
'gd.league.t': '🏆 Leaderboard', 'gd.league.d': 'World, week and friends. Your friend code is in your profile. Only your name, avatar, frame, rank and XP are visible. Never your photo or your goals.',
'gd.data.t': '📱 Install and back up', 'gd.data.d': 'Add PeakMind to your home screen to get it full screen, even offline. Your data stays on your phone: back it up from time to time (Settings → Your data). So you don\'t forget your quests, add a daily reminder to your calendar (Settings → Daily reminder).'
});
const standalone = () => matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
const isIOS = () => /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
let installEvt = null;
window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); installEvt = e; if (S.onboarded && (S.tab === 'today' || S.tab === 'settings') && sheet.hidden) render(); });
window.addEventListener('appinstalled', () => { installEvt = null; toast(t('in.done')); if (S.tab === 'today' || S.tab === 'settings') render(); });
function installCard() {
if (!S.onboarded || standalone() || (S.installSnooze && daysBetween(S.installSnooze, today()) < 3)) return '';
return `<section class="card install-card"><span class="in-ico" aria-hidden="true">📲</span><div class="in-txt"><b>${esc(t('in.t'))}</b><small>${esc(t('in.d'))}</small></div>
      <div class="gt-btns"><button type="button" class="btn small-btn" id="inGo">${esc(t(installEvt ? 'in.go' : 'in.how'))}</button><button type="button" class="icon-btn" id="inLater" aria-label="${esc(t('in.later'))}">✕</button></div></section>`;
}
async function doInstall() {
if (installEvt) {
const ev = installEvt; installEvt = null; ev.prompt();
try { const r = await ev.userChoice; if (r && r.outcome === 'accepted') SFX.play('levelUp'); } catch (e) {  }
render(); return;
}
const ios = isIOS();
openSheet(`<div class="sheet-head"><h2>📲 ${esc(t('in.t'))}</h2><button type="button" class="icon-btn" id="closeIn" aria-label="${esc(t('close'))}">✕</button></div>
      <p class="muted" style="margin:0">${esc(t('in.why'))}</p>
      <ol class="in-steps">${(ios ? ['in.ios1', 'in.ios2', 'in.ios3'] : ['in.and1', 'in.and2', 'in.and3']).map(k => `<li>${esc(t(k))}</li>`).join('')}</ol>
      <button type="button" class="btn block" id="inOk">${esc(t('in.ok'))}</button>`);
$('#closeIn').onclick = closeSheet; $('#inOk').onclick = closeSheet;
}
function bindInstall(root) {
const g = root.querySelector('#inGo'); if (g) g.onclick = () => { SFX.play('select'); doInstall(); };
const l = root.querySelector('#inLater'); if (l) l.onclick = () => { S.installSnooze = today(); save(); SFX.play('close'); render(); };
const s = root.querySelector('#setInstall'); if (s) s.onclick = () => { SFX.play('select'); doInstall(); };
}
Object.assign(T.fr, {
'in.t': 'Installe PeakMind', 'in.d': 'Plein écran, hors ligne, données protégées.',
'in.go': 'Installer', 'in.how': 'Comment ?', 'in.later': 'Plus tard', 'in.done': 'PeakMind est installé 🏔️', 'in.ok': 'Compris',
'in.why': 'Une fois installée, l\'appli s\'ouvre comme une vraie appli, marche sans réseau, et ton téléphone garde tes données (sur iPhone, un site non installé peut les effacer après quelques jours sans visite).',
'in.ios1': 'Ouvre PeakMind dans Safari.', 'in.ios2': 'Touche le bouton Partager (le carré avec une flèche vers le haut).', 'in.ios3': 'Choisis « Sur l\'écran d\'accueil », puis « Ajouter ».',
'in.and1': 'Ouvre PeakMind dans Chrome.', 'in.and2': 'Touche le menu ⋮ en haut à droite.', 'in.and3': 'Choisis « Installer l\'application » (ou « Ajouter à l\'écran d\'accueil »).',
'in.already': 'PeakMind est déjà installé sur ce téléphone ✓', 's.lastExp': 'Dernière sauvegarde : {d}', 's.lastExp.never': 'Aucune sauvegarde pour l\'instant.'
});
Object.assign(T.en, {
'in.t': 'Install PeakMind', 'in.d': 'Full screen, offline, data protected.',
'in.go': 'Install', 'in.how': 'How?', 'in.later': 'Later', 'in.done': 'PeakMind is installed 🏔️', 'in.ok': 'Got it',
'in.why': 'Once installed, the app opens like a real app, works offline, and your phone keeps your data (on iPhone, a site that isn\'t installed can erase it after a few days without visits).',
'in.ios1': 'Open PeakMind in Safari.', 'in.ios2': 'Tap the Share button (the square with an arrow pointing up).', 'in.ios3': 'Choose “Add to Home Screen”, then “Add”.',
'in.and1': 'Open PeakMind in Chrome.', 'in.and2': 'Tap the ⋮ menu at the top right.', 'in.and3': 'Choose “Install app” (or “Add to Home screen”).',
'in.already': 'PeakMind is already installed on this phone ✓', 's.lastExp': 'Last backup: {d}', 's.lastExp.never': 'No backup yet.'
});
function openEdit(id) {
const g = byId(id); if (!g) return;
const wd = t('wd'), order = [1, 2, 3, 4, 5, 6, 0], val = x => x == null ? '' : String(x), tk = g.type === 'tiktok';
const emo = EMOJIS.includes(g.emoji) ? EMOJIS : [g.emoji].concat(EMOJIS);
let f = `<label class="field" for="eTitle">${esc(t('f.title'))}<input id="eTitle" maxlength="60" value="${esc(g.title)}" required></label>
      <div class="field">${esc(t('f.emoji'))}<div class="chips">${emo.map(e => `<button type="button" class="chip" data-emoji="${esc(e)}" aria-pressed="${e === g.emoji}">${esc(e)}</button>`).join('')}</div></div>`;
if (g.type === 'target' || tk) {
if (tk) f += `<label class="field" for="eHandle">${esc(t('f.handle'))}<input id="eHandle" maxlength="30" value="${esc(g.handle || '')}" autocapitalize="off" spellcheck="false"></label>`;
f += `<div class="grid-2"><label class="field" for="eStart">${esc(t(tk ? 'f.followers' : 'f.start'))}<input id="eStart" type="number" step="any" inputmode="decimal" value="${esc(val(g.start))}"></label>
        <label class="field" for="eTarget">${esc(t(tk ? 'f.goalFollowers' : 'f.target'))}<input id="eTarget" type="number" step="any" inputmode="decimal" value="${esc(val(g.target))}"></label></div>
        <div class="grid-2">${tk ? '' : `<label class="field" for="eUnit">${esc(t('f.unit'))}<input id="eUnit" maxlength="14" value="${esc(g.unit || '')}"></label>`}
        <label class="field" for="eDeadline">${esc(t('f.deadline'))}<input id="eDeadline" type="date" value="${esc(g.deadline || '')}"></label></div>`;
}
if (g.type === 'habit') f += `<div class="field">${esc(t('f.days'))}<div class="chips days" id="eDays">${order.map(d => `<button type="button" class="chip" data-day="${d}" aria-pressed="${g.days.includes(d)}">${wd[d]}</button>`).join('')}</div></div>`;
if (g.type === 'steps') f += `<label class="field" for="eDaily">${esc(t('f.daily'))}<input id="eDaily" type="number" min="100" max="100000" step="500" inputmode="numeric" value="${g.daily}"></label>`;
if (g.type === 'save') f += `<div class="grid-2"><label class="field" for="eTarget">${esc(t('f.price', { c: cur() }))}<input id="eTarget" type="number" min="1" step="any" inputmode="decimal" value="${esc(val(g.target))}"></label>
      <label class="field" for="ePlan">${esc(t('f.plan', { c: cur() }))}<input id="ePlan" type="number" min="0" step="any" inputmode="decimal" value="${esc(val(g.plan || 0))}"></label></div>`;
f += `<label class="field" for="eWhy">${esc(t('f.why'))}<input id="eWhy" maxlength="120" value="${esc(g.why || '')}" placeholder="${esc(t('f.why.ph'))}"></label>
      <p class="muted" id="eErr" role="alert" style="margin:0;color:var(--bad)"></p>
      <button type="button" class="btn block" id="eSave">${esc(t('ed.save'))}</button>`;
openSheet(`<div class="sheet-head"><button type="button" class="icon-btn" id="eBack" aria-label="${esc(t('f.back'))}">←</button><h2>${esc(t('ed.title'))}</h2></div>${f}`);
$('#eBack').onclick = () => openDetail(g.id);
sheet.querySelectorAll('[data-emoji]').forEach(b => b.onclick = () => sheet.querySelectorAll('[data-emoji]').forEach(x => x.setAttribute('aria-pressed', String(x === b))));
sheet.querySelectorAll('#eDays [data-day]').forEach(b => b.onclick = () => b.setAttribute('aria-pressed', String(b.getAttribute('aria-pressed') !== 'true')));
const num = id => { const el = $(id); return el ? parseFloat(String(el.value).replace(',', '.')) : NaN; };
$('#eSave').onclick = () => {
const title = $('#eTitle').value.trim(), err = $('#eErr'), bad = (k, focus) => { err.textContent = t(k); SFX.play('error'); if (focus) $(focus).focus(); };
if (!title) return bad('f.required', '#eTitle');
const ch = {};
if (g.type === 'target' || tk) {
ch.start = num('#eStart'); ch.target = num('#eTarget'); ch.deadline = $('#eDeadline').value || g.deadline;
if (!Number.isFinite(ch.start) || !Number.isFinite(ch.target) || ch.start === ch.target) return bad('f.numbers', '#eTarget');
if (tk && ch.start < 0) return bad('f.numbers', '#eStart');
}
if (g.type === 'steps') { ch.daily = parseInt($('#eDaily').value, 10); if (!Number.isFinite(ch.daily) || ch.daily < 100) return bad('f.stepsErr', '#eDaily'); ch.daily = Math.min(ch.daily, 100000); }
if (g.type === 'save') { ch.target = num('#eTarget'); ch.plan = num('#ePlan'); if (!(ch.target > 0)) return bad('f.priceErr', '#eTarget'); }
g.title = title; g.why = $('#eWhy').value.trim();
g.emoji = (sheet.querySelector('[data-emoji][aria-pressed="true"]') || {}).dataset?.emoji || g.emoji;
if (g.type === 'target' || tk) {
Object.assign(g, { start: ch.start, target: ch.target, deadline: ch.deadline });
if (tk) g.handle = $('#eHandle').value.trim().replace(/^@/, '').replace(/[^\w.]/g, '');
else g.unit = $('#eUnit').value.trim() || t('unit.default');
}
if (g.type === 'habit') { const d = [...sheet.querySelectorAll('#eDays [aria-pressed="true"]')].map(b => +b.dataset.day); g.days = d.length ? d : [0, 1, 2, 3, 4, 5, 6]; }
if (g.type === 'steps' && ch.daily !== g.daily) {
if (!g.daily0) g.daily0 = g.daily;
g.dlog = (g.dlog || []).filter(c => c.d !== today()).concat([{ d: today(), n: ch.daily }]); g.daily = ch.daily;
}
if (g.type === 'save') { g.target = Math.round(ch.target * 100) / 100; g.plan = ch.plan > 0 ? Math.round(ch.plan * 100) / 100 : 0; }
save(); SFX.play('equip'); toast(t('ed.ok')); scheduleSync(); render(); openDetail(g.id);
};
}
function delEntry(g, i) {
const e = g.entries[i]; if (!e) return;
confirmBox(t('ed.ent.q', { v: nf(e.v, 1), d: fmtDate(e.d) }), t('ed.ent.ok'), () => { g.entries.splice(i, 1); save(); SFX.play('down'); scheduleSync(); render(); openDetail(g.id); });
sheet.querySelector('[data-x="no"]').onclick = () => openDetail(g.id);
}
Object.assign(T.fr, {
'ed.btn': 'Modifier', 'ed.title': 'Modifier l\'objectif', 'ed.save': 'Enregistrer', 'ed.ok': 'Objectif modifié ✓',
'ed.ent.q': 'Supprimer la valeur {v} du {d} ?', 'ed.ent.ok': 'Supprimer', 'ed.ent.del': 'Supprimer cette valeur'
});
Object.assign(T.en, {
'ed.btn': 'Edit', 'ed.title': 'Edit goal', 'ed.save': 'Save', 'ed.ok': 'Goal updated ✓',
'ed.ent.q': 'Delete the value {v} from {d}?', 'ed.ent.ok': 'Delete', 'ed.ent.del': 'Delete this value'
});
const appUrl = () => location.origin + location.pathname.replace(/index\.html$/, '');
function remindSlot() {
const [h, m] = String((S.remind && S.remind.time) || '18:30').split(':').map(n => parseInt(n, 10) || 0);
const d = new Date(); d.setHours(h, m, 0, 0); if (d < new Date()) d.setDate(d.getDate() + 1);
const p2 = n => String(n).padStart(2, '0'), stamp = x => `${x.getFullYear()}${p2(x.getMonth() + 1)}${p2(x.getDate())}T${p2(x.getHours())}${p2(x.getMinutes())}00`;
return { start: stamp(d), end: stamp(new Date(d.getTime() + 10 * 60000)) };
}
function remindIcs() {
const { start } = remindSlot(), now = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d+/, '');
const tx = s => s.replace(/\\/g, '\\\\').replace(/([,;])/g, '\\$1').replace(/\n/g, '\\n');
const lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//PeakMind//Rappel//FR', 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH', 'BEGIN:VEVENT',
`UID:peakmind-rappel-${uid()}@peakmind`, `DTSTAMP:${now}`, `DTSTART:${start}`, 'DURATION:PT10M', 'RRULE:FREQ=DAILY',
`SUMMARY:${tx(t('rm.ev'))}`, `DESCRIPTION:${tx(t('rm.evd') + '\n' + appUrl())}`, `URL:${appUrl()}`,
'BEGIN:VALARM', 'ACTION:DISPLAY', `DESCRIPTION:${tx(t('rm.ev'))}`, 'TRIGGER:PT0M', 'END:VALARM', 'END:VEVENT', 'END:VCALENDAR'];
return lines.join('\r\n') + '\r\n';
}
function remindCard() {
const tm = (S.remind && S.remind.time) || '18:30';
return `<section class="card" id="remindCard"><h3>⏰ ${esc(t('rm.title'))}</h3><p class="muted" style="margin:0">${esc(t('rm.d'))}</p>
      <label class="field" for="rmTime">${esc(t('rm.time'))}<input id="rmTime" type="time" value="${esc(tm)}"></label>
      <div class="grid-2"><button type="button" class="btn subtle" id="rmIcs">📅 ${esc(t('rm.ics'))}</button><button type="button" class="btn subtle" id="rmGoogle">${esc(t('rm.google'))}</button></div>
      ${S.remind && S.remind.on ? `<p class="ok-txt" style="margin:0">${esc(t('rm.set', { t: tm }))}</p>` : ''}
      <p class="muted" style="margin:0;font-size:.85rem">${esc(t('rm.stop'))}</p></section>`;
}
function bindRemind(root) {
const ti = root.querySelector('#rmTime'); if (!ti) return;
const keep = () => { S.remind = { time: /^\d{2}:\d{2}$/.test(ti.value) ? ti.value : '18:30', on: today() }; save(); };
ti.onchange = () => { S.remind = Object.assign({}, S.remind, { time: /^\d{2}:\d{2}$/.test(ti.value) ? ti.value : '18:30' }); save(); };
root.querySelector('#rmIcs').onclick = () => {
keep();
const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([remindIcs()], { type: 'text/calendar;charset=utf-8' })); a.download = 'peakmind-rappel.ics';
document.body.append(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 4000);
SFX.play('equip'); toast(t('rm.ok')); render();
};
root.querySelector('#rmGoogle').onclick = () => {
keep(); const { start, end } = remindSlot();
const q = new URLSearchParams({ action: 'TEMPLATE', text: t('rm.ev'), details: t('rm.evd') + '\n' + appUrl(), dates: `${start}/${end}`, recur: 'RRULE:FREQ=DAILY' });
window.open('https://calendar.google.com/calendar/render?' + q.toString(), '_blank', 'noopener'); SFX.play('equip'); render();
};
}
Object.assign(T.fr, {
'rm.title': 'Rappel quotidien', 'rm.d': 'Une alarme chaque jour pour penser à tes quêtes. Elle s\'ajoute à l\'agenda de ton téléphone : c\'est lui qui sonne, même quand PeakMind est fermé.',
'rm.time': 'Heure du rappel', 'rm.ics': 'Agenda du téléphone', 'rm.google': 'Google Agenda',
'rm.ev': 'PeakMind : tes quêtes du jour ⛰️', 'rm.evd': 'Ouvre PeakMind et valide tes quêtes du jour. Un pas de plus vers ton sommet.',
'rm.ok': 'Ouvre le fichier téléchargé pour ajouter le rappel à ton agenda', 'rm.set': 'Rappel ajouté pour {t} chaque jour ✓',
'rm.stop': 'Pour changer l\'heure ou l\'arrêter : modifie ou supprime l\'événement « PeakMind » dans ton agenda.'
});
Object.assign(T.en, {
'rm.title': 'Daily reminder', 'rm.d': 'An alarm every day so you don\'t forget your quests. It goes into your phone\'s calendar: the calendar rings, even when PeakMind is closed.',
'rm.time': 'Reminder time', 'rm.ics': 'Phone calendar', 'rm.google': 'Google Calendar',
'rm.ev': 'PeakMind: your daily quests ⛰️', 'rm.evd': 'Open PeakMind and complete your daily quests. One more step towards your summit.',
'rm.ok': 'Open the downloaded file to add the reminder to your calendar', 'rm.set': 'Reminder added for {t} every day ✓',
'rm.stop': 'To change the time or stop it: edit or delete the "PeakMind" event in your calendar.'
});
function exportBackup() {
const copy = JSON.parse(JSON.stringify(S)); if (copy.league) delete copy.league.cache;
const blob = new Blob([JSON.stringify(copy, null, 2)], { type: 'application/json' });
const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `peakmind-${today()}.json`;
document.body.append(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 2000);
S.lastExport = today(); save();
}
function backupCard() {
if (!S.onboarded || Object.keys(S.activity || {}).length < 5) return '';
if (S.lastExport && daysBetween(S.lastExport, today()) < 14) return '';
if (S.bkSnooze && daysBetween(S.bkSnooze, today()) < 7) return '';
return `<section class="card install-card bk-card"><span class="in-ico" aria-hidden="true">💾</span><div class="in-txt"><b>${esc(t('bk.t'))}</b><small>${esc(t(S.lastExport ? 'bk.d.old' : 'bk.d', { d: S.lastExport ? fmtDate(S.lastExport) : '' }))}</small></div>
      <div class="gt-btns"><button type="button" class="btn small-btn" id="bkGo">${esc(t('bk.go'))}</button><button type="button" class="icon-btn" id="bkLater" aria-label="${esc(t('in.later'))}">✕</button></div></section>`;
}
function bindBackup(root) {
const g = root.querySelector('#bkGo'); if (g) g.onclick = () => { exportBackup(); SFX.play('equip'); toast(t('bk.ok')); render(); };
const l = root.querySelector('#bkLater'); if (l) l.onclick = () => { S.bkSnooze = today(); save(); SFX.play('close'); render(); };
}
Object.assign(T.fr, {
'bk.t': 'Sauvegarde tes progrès', 'bk.d': 'Tes progrès sont seulement sur ce téléphone. Garde une copie, au cas où tu le changes.',
'bk.d.old': 'Dernière sauvegarde le {d}. Fais-en une nouvelle pour garder tes derniers progrès.', 'bk.go': 'Sauvegarder', 'bk.ok': 'Sauvegarde téléchargée 💾'
});
Object.assign(T.en, {
'bk.t': 'Back up your progress', 'bk.d': 'Everything lives on this phone. A small backup file protects you if you change it.',
'bk.d.old': 'Last backup on {d}. Make a new one to keep your latest progress.', 'bk.go': 'Back up', 'bk.ok': 'Backup downloaded 💾'
});
const NEWS = {
'1.5.0': {
fr: ['Nouvelle animation à chaque niveau gagné ⚡', 'Modifie un objectif avec le crayon ✏️ dans sa fiche', 'Une valeur entrée par erreur ? Supprime-la dans l\'historique (✕)', 'Rappel quotidien dans l\'agenda de ton téléphone (Réglages)', 'Un rappel pour sauvegarder tes progrès', 'Meilleur affichage sur les petits écrans', 'S\'ouvre plus vite avec un mauvais réseau, et garde son style hors ligne'],
en: ['New animation every time you level up ⚡', 'Edit a goal with the pencil ✏️ in its sheet', 'Typed a wrong value? Delete it in the history (✕)', 'Daily reminder in your phone\'s calendar (Settings)', 'A reminder to back up your progress', 'Better layout on small screens', 'Opens faster on a bad network, and keeps its style offline']
}
};
function newsCard() {
const n = NEWS[VERSION];
if (!S.onboarded || !n || S.seenVersion === VERSION) return '';
return `<section class="card news-card"><div class="row between" style="flex-wrap:nowrap"><b>✨ ${esc(t('nw.t', { v: VERSION }))}</b><button type="button" class="icon-btn" id="nwOk" aria-label="${esc(t('close'))}">✕</button></div>
      <ul class="list-plain">${(n[S.lang] || n.fr).map(x => `<li>${esc(x)}</li>`).join('')}</ul></section>`;
}
function bindNews(root) { const b = root.querySelector('#nwOk'); if (b) b.onclick = () => { S.seenVersion = VERSION; save(); SFX.play('close'); render(); }; }
Object.assign(T.fr, { 'nw.t': 'Nouveautés de PeakMind {v}' });
Object.assign(T.en, { 'nw.t': 'What\'s new in PeakMind {v}' });
const LAUNCH_AT = Date.parse('2026-11-01T18:00:00+01:00');
const BETA_HASH = '04a7775ec9921f2f33764fc7268703ee6b8e1b33d789eae4fa28b83987b0c50c';
const betaOn = () => Date.now() < LAUNCH_AT;
const devHost = () => location.protocol === 'file:' || ['localhost', '127.0.0.1'].includes(location.hostname) || location.hostname.endsWith('.localhost');
const betaLocked = () => betaOn() && !(S.beta && S.beta.ok) && (!devHost() || new URLSearchParams(location.search).has('gate'));
const tester = () => betaOn() && !!(S.beta && S.beta.ok);
const betaDay = () => S.beta && S.beta.since ? Math.max(1, daysBetween(S.beta.since, today()) + 1) : 1;
function showBetaGate() {
$('#app').hidden = true;
const g = document.createElement('div'); g.className = 'beta-gate'; g.setAttribute('role', 'dialog'); g.setAttribute('aria-label', 'PeakMind');
g.innerHTML = `<div class="bg-in"><img src="icons/icon-192.png" alt="" width="84" height="84"><div class="bg-brand">PEAK<span>MIND</span></div>
      <p class="bg-when">${esc(t('bt.when'))}</p><p class="bg-d">${esc(t('bt.private'))}</p>
      <form id="btForm" class="bg-form"><input id="btCode" autocomplete="off" autocapitalize="characters" spellcheck="false" maxlength="24" placeholder="PEAK-BETA-…" aria-label="${esc(t('bt.code'))}"><button class="btn block" type="submit">${esc(t('bt.enter'))}</button></form>
      <p class="bg-err" id="btErr" role="alert"></p></div>`;
document.body.appendChild(g);
$('#btForm').onsubmit = async e => {
e.preventDefault(); const v = $('#btCode').value.trim().toUpperCase(); let ok = false;
try { ok = (await sha256('peakmind:beta:' + v)) === BETA_HASH || (await sha256('peakmind:creator:' + v)) === CREATOR_HASH; } catch (err) {  }
if (!ok) { $('#btErr').textContent = t('bt.bad'); $('#btCode').select(); return; }
S.beta = Object.assign({ since: today(), done: {} }, S.beta || {}, { ok: true }); save(); location.reload();
};
}
const BETA_M = 7;
function betaCard() {
if (!tester() || !S.onboarded) return '';
const d = betaDay(), n = Math.min(d, BETA_M), done = !!(S.beta.done || {})[n];
if (d > BETA_M) return `<section class="card beta-card"><div class="bt-top"><span class="bt-tag">🧪 ${esc(t('bt.tag'))}</span><span class="muted num">${esc(t('bt.over'))}</span></div>
      <b>${esc(t('bt.thanks'))}</b><div class="grid-2"><button type="button" class="btn" id="btQuiz">${esc(t('bt.quiz'))}</button><button type="button" class="btn subtle" id="btFb">🐞 ${esc(t('bt.fb'))}</button></div></section>`;
return `<section class="card beta-card"><div class="bt-top"><span class="bt-tag">🧪 ${esc(t('bt.tag'))}</span><span class="muted num">${esc(t('bt.day', { n, m: BETA_M }))}</span></div>
      <div class="bt-dots">${Array.from({ length: BETA_M }, (_, i) => `<i class="${(S.beta.done || {})[i + 1] ? 'on' : i + 1 === n ? 'cur' : ''}"></i>`).join('')}</div>
      <b class="bt-m">${esc(t('bt.m' + n))}</b>
      <div class="grid-2">${n === BETA_M ? `<button type="button" class="btn" id="btQuiz">${esc(t('bt.quiz'))}</button>` : done ? `<button type="button" class="btn subtle" disabled>✓ ${esc(t('bt.done'))}</button>` : `<button type="button" class="btn" id="btDone">${esc(t('bt.doit'))}</button>`}<button type="button" class="btn subtle" id="btFb">🐞 ${esc(t('bt.fb'))}</button></div></section>`;
}
function bindBeta(root) {
const dn = root.querySelector('#btDone'); if (dn) dn.onclick = () => { S.beta.done = S.beta.done || {}; S.beta.done[Math.min(betaDay(), BETA_M)] = true; save(); SFX.play('questDone'); toast(t('bt.bravo')); render(); };
const fb = root.querySelector('#btFb'); if (fb) fb.onclick = () => openFeedback();
const qz = root.querySelector('#btQuiz'); if (qz) qz.onclick = () => openQuiz();
}
const deviceTxt = () => { const u = navigator.userAgent;
return (/iphone|ipad/i.test(u) ? 'iPhone' : /android/i.test(u) ? 'Android' : 'PC') + ' · ' + (/edg\//i.test(u) ? 'Edge' : /crios|chrome/i.test(u) ? 'Chrome' : /fxios|firefox/i.test(u) ? 'Firefox' : /safari/i.test(u) ? 'Safari' : '?') + (standalone() ? ' · ' + t('bt.installed') : ''); };
const betaFooter = () => `— ${S.name || '?'} · ${t('bt.day', { n: betaDay(), m: BETA_M })} · ${t('lvl.n', { n: ppStats().level })} · PeakMind ${VERSION} · ${deviceTxt()}`;
async function sendText(txt) {
if (navigator.share) { try { await navigator.share({ text: txt }); toast(t('bt.sent')); return true; } catch (e) { if (e && e.name === 'AbortError') return false; } }
try { await navigator.clipboard.writeText(txt); toast(t('bt.copied')); return true; } catch (e) {  }
openSheet(`<div class="sheet-head"><h2>${esc(t('bt.copyT'))}</h2><button type="button" class="icon-btn" id="closeCp" aria-label="${esc(t('close'))}">✕</button></div>
      <p class="muted" style="margin:0">${esc(t('bt.copyD'))}</p><textarea class="bt-area" readonly rows="8">${esc(txt)}</textarea>`);
$('#closeCp').onclick = closeSheet; return false;
}
function openFeedback() {
let kind = 'bug';
openSheet(`<div class="sheet-head"><h2>🧪 ${esc(t('bt.fbT'))}</h2><button type="button" class="icon-btn" id="closeFb" aria-label="${esc(t('close'))}">✕</button></div>
      <p class="muted" style="margin:0">${esc(t('bt.fbD'))}</p>
      <div class="chips">${['bug', 'idea', 'opinion'].map(k => `<button type="button" class="chip" data-fbk="${k}" aria-pressed="${k === kind}">${esc(t('bt.k.' + k))}</button>`).join('')}</div>
      <textarea id="fbTxt" class="bt-area" rows="6" maxlength="1500" placeholder="${esc(t('bt.fbPh'))}"></textarea>
      <button type="button" class="btn block" id="fbSend">${esc(t('bt.send'))}</button>`);
$('#closeFb').onclick = closeSheet;
sheet.querySelectorAll('[data-fbk]').forEach(b => b.onclick = () => { kind = b.dataset.fbk; sheet.querySelectorAll('[data-fbk]').forEach(x => x.setAttribute('aria-pressed', String(x === b))); });
$('#fbSend').onclick = async () => {
const m = $('#fbTxt').value.trim(); if (!m) { $('#fbTxt').focus(); SFX.play('error'); return; }
const ok = await sendText(`PeakMind bêta · ${t('bt.k.' + kind)}\n\n${m}\n\n${betaFooter()} · ${t('tab.' + (S.tab === 'settings' ? 'settings' : S.tab))}`);
if (ok) closeSheet();
};
}
function openQuiz() {
const a = { note: 0, again: '' };
openSheet(`<div class="sheet-head"><h2>📝 ${esc(t('bt.quizT'))}</h2><button type="button" class="icon-btn" id="closeQz" aria-label="${esc(t('close'))}">✕</button></div>
      <p class="muted" style="margin:0">${esc(t('bt.quizD'))}</p>
      <div class="field">${esc(t('bt.q1'))}<div class="chips bt-notes">${Array.from({ length: 10 }, (_, i) => `<button type="button" class="chip num" data-qn="${i + 1}" aria-pressed="false">${i + 1}</button>`).join('')}</div></div>
      <label class="field" for="qz2">${esc(t('bt.q2'))}<textarea id="qz2" class="bt-area" rows="3" maxlength="600"></textarea></label>
      <label class="field" for="qz3">${esc(t('bt.q3'))}<textarea id="qz3" class="bt-area" rows="3" maxlength="600"></textarea></label>
      <label class="field" for="qz4">${esc(t('bt.q4'))}<textarea id="qz4" class="bt-area" rows="2" maxlength="600"></textarea></label>
      <div class="field">${esc(t('bt.q5'))}<div class="chips">${['yes', 'maybe', 'no'].map(k => `<button type="button" class="chip" data-qa="${k}" aria-pressed="false">${esc(t('bt.a.' + k))}</button>`).join('')}</div></div>
      <label class="field" for="qz6">${esc(t('bt.q6'))}<textarea id="qz6" class="bt-area" rows="2" maxlength="600"></textarea></label>
      <button type="button" class="btn block" id="qzSend">${esc(t('bt.send'))}</button>`);
$('#closeQz').onclick = closeSheet;
sheet.querySelectorAll('[data-qn]').forEach(b => b.onclick = () => { a.note = +b.dataset.qn; sheet.querySelectorAll('[data-qn]').forEach(x => x.setAttribute('aria-pressed', String(x === b))); });
sheet.querySelectorAll('[data-qa]').forEach(b => b.onclick = () => { a.again = b.dataset.qa; sheet.querySelectorAll('[data-qa]').forEach(x => x.setAttribute('aria-pressed', String(x === b))); });
$('#qzSend').onclick = async () => {
if (!a.note) { SFX.play('error'); toast(t('bt.needNote')); return; }
const v = id => ($('#' + id).value.trim() || '—');
const txt = `PeakMind bêta · ${t('bt.quizT')}\n\n${t('bt.q1')} ${a.note}/10\n\n${t('bt.q2')}\n${v('qz2')}\n\n${t('bt.q3')}\n${v('qz3')}\n\n${t('bt.q4')}\n${v('qz4')}\n\n${t('bt.q5')} ${a.again ? t('bt.a.' + a.again) : '—'}\n\n${t('bt.q6')}\n${v('qz6')}\n\n${betaFooter()}`;
if (await sendText(txt)) { S.beta.quiz = today(); save(); closeSheet(); render(); }
};
}
function betaSettingsCard() {
if (!tester()) return '';
return `<section class="card beta-card"><h3>🧪 ${esc(t('bt.tag'))}</h3><p class="muted" style="margin:0">${esc(t('bt.setD'))}</p>
      <div class="grid-2"><button type="button" class="btn subtle" id="btFb">🐞 ${esc(t('bt.fb'))}</button><button type="button" class="btn subtle" id="btQuiz">📝 ${esc(t('bt.quiz'))}</button></div></section>`;
}
Object.assign(T.fr, {
'bt.when': 'Sortie le dimanche 1er novembre à 18 h.', 'bt.private': 'Pour l\'instant, l\'appli est réservée aux testeurs. Tu as un code ?', 'bt.code': 'Code d\'accès',
'bt.enter': 'Entrer', 'bt.bad': 'Code incorrect. Vérifie les lettres et les tirets.', 'bt.tag': 'Test bêta', 'bt.day': 'Jour {n}/{m}', 'bt.over': 'Terminé',
'bt.thanks': 'Merci d\'avoir testé PeakMind ! Si ce n\'est pas fait, réponds au questionnaire : c\'est ce qui compte le plus.',
'bt.m1': 'Mission 1 : installe PeakMind sur ton écran d\'accueil, fais le tour de l\'accueil et crée ton premier objectif.',
'bt.m2': 'Mission 2 : fais tes 3 quêtes du jour et coche-les. Essaie de changer une quête (↻).',
'bt.m3': 'Mission 3 : ouvre le donjon de la semaine et monte ton premier étage.',
'bt.m4': 'Mission 4 : ouvre le Coffre, crée une tirelire et règle ton budget de la semaine.',
'bt.m5': 'Mission 5 : ajoute un contrôle dans le mode examen (même inventé) et lance un minuteur de révision.',
'bt.m6': 'Mission 6 : change de thème, regarde ta fiche de stats et partage ta carte de joueur.',
'bt.m7': 'Mission 7 : c\'est le dernier jour ! Réponds au questionnaire de fin de test.',
'bt.doit': 'Mission faite ✓', 'bt.done': 'Mission faite', 'bt.bravo': 'Merci ! Mission validée 🧪', 'bt.fb': 'Un bug ? Un avis ?', 'bt.quiz': 'Questionnaire',
'bt.fbT': 'Donner mon avis', 'bt.fbD': 'Explique ce qui s\'est passé (ou ton idée). L\'appli prépare un message : tu l\'envoies toi-même au créateur.',
'bt.k.bug': '🐞 Bug', 'bt.k.idea': '💡 Idée', 'bt.k.opinion': '💬 Avis', 'bt.fbPh': 'Ex. : quand je coche la quête, rien ne se passe…', 'bt.send': 'Préparer le message',
'bt.sent': 'Message prêt, merci !', 'bt.copied': 'Message copié : colle-le dans WhatsApp ou Snap pour le créateur.', 'bt.copyT': 'Copie ce message', 'bt.copyD': 'Sélectionne le texte, copie-le et envoie-le au créateur.',
'bt.installed': 'appli installée', 'bt.quizT': 'Questionnaire de fin de test', 'bt.quizD': '6 questions, 2 minutes. Sois honnête : c\'est ce qui va rendre l\'appli meilleure.',
'bt.q1': 'Ta note pour PeakMind :', 'bt.q2': 'Ce que tu as le plus aimé :', 'bt.q3': 'Ce qui t\'a saoulé ou que tu n\'as pas compris :', 'bt.q4': 'Un bug que tu as vu ?',
'bt.q5': 'Tu continuerais à l\'utiliser ?', 'bt.a.yes': 'Oui', 'bt.a.maybe': 'Peut-être', 'bt.a.no': 'Non', 'bt.q6': 'Une idée à ajouter ?', 'bt.needNote': 'Choisis d\'abord une note sur 10.',
'bt.setD': 'Tu fais partie des testeurs. Un souci, une idée ? Dis-le ici, et réponds au questionnaire à la fin de la semaine.'
});
Object.assign(T.en, {
'bt.when': 'Coming Sunday, November 1 at 6 pm.', 'bt.private': 'For now, the app is for testers only. Got a code?', 'bt.code': 'Access code',
'bt.enter': 'Enter', 'bt.bad': 'Wrong code. Check the letters and dashes.', 'bt.tag': 'Beta test', 'bt.day': 'Day {n}/{m}', 'bt.over': 'Finished',
'bt.thanks': 'Thanks for testing PeakMind! If you haven\'t yet, answer the survey: it matters most.',
'bt.m1': 'Mission 1: install PeakMind on your home screen, look around and create your first goal.',
'bt.m2': 'Mission 2: do your 3 daily quests and tick them. Try swapping one quest (↻).',
'bt.m3': 'Mission 3: open the weekly dungeon and climb your first floor.',
'bt.m4': 'Mission 4: open the Vault, create a jar and set your weekly budget.',
'bt.m5': 'Mission 5: add a test in exam mode (even a made-up one) and start a revision timer.',
'bt.m6': 'Mission 6: change theme, check your stats sheet and share your player card.',
'bt.m7': 'Mission 7: last day! Answer the end-of-test survey.',
'bt.doit': 'Mission done ✓', 'bt.done': 'Mission done', 'bt.bravo': 'Thanks! Mission complete 🧪', 'bt.fb': 'A bug? Feedback?', 'bt.quiz': 'Survey',
'bt.fbT': 'Give feedback', 'bt.fbD': 'Explain what happened (or your idea). The app prepares a message: you send it to the creator yourself.',
'bt.k.bug': '🐞 Bug', 'bt.k.idea': '💡 Idea', 'bt.k.opinion': '💬 Opinion', 'bt.fbPh': 'E.g. when I tick the quest, nothing happens…', 'bt.send': 'Prepare the message',
'bt.sent': 'Message ready, thanks!', 'bt.copied': 'Message copied: paste it in WhatsApp or Snap for the creator.', 'bt.copyT': 'Copy this message', 'bt.copyD': 'Select the text, copy it and send it to the creator.',
'bt.installed': 'installed app', 'bt.quizT': 'End-of-test survey', 'bt.quizD': '6 questions, 2 minutes. Be honest: it\'s what will make the app better.',
'bt.q1': 'Your rating for PeakMind:', 'bt.q2': 'What you liked most:', 'bt.q3': 'What annoyed you or wasn\'t clear:', 'bt.q4': 'A bug you saw?',
'bt.q5': 'Would you keep using it?', 'bt.a.yes': 'Yes', 'bt.a.maybe': 'Maybe', 'bt.a.no': 'No', 'bt.q6': 'An idea to add?', 'bt.needNote': 'Pick a rating out of 10 first.',
'bt.setD': 'You\'re one of the testers. A problem, an idea? Say it here, and answer the survey at the end of the week.'
});
if (betaLocked()) { showBetaGate(); return; }
document.querySelectorAll('.tabbar [data-tab]').forEach(b => b.onclick = () => { if (S.tab !== b.dataset.tab) SFX.play('nav'); S.tab = b.dataset.tab; saveUI(); closeSheet(); render(); view.focus({ preventScroll: true }); window.scrollTo(0, 0); });
$('#addBtn').onclick = openNew;
$('#langBtn').onclick = () => { S.lang = S.lang === 'fr' ? 'en' : 'fr'; save(); render(); SFX.play('nav'); };
$('#setBtn').onclick = () => { if (S.tab !== 'settings') SFX.play('nav'); S.tab = 'settings'; save(); closeSheet(); render(); window.scrollTo(0, 0); };
window.addEventListener('online', () => { if (S.tab === 'league' && S.league && S.league.joined) { league().err = ''; leagueLoad(league().scope || 'world', true); renderLeague(); } });
document.addEventListener('click', e => { if (e.target.closest('.chip, .seg button')) SFX.play('tick'); });
setInterval(() => document.querySelectorAll('[data-since]').forEach(el => {
const g = byId(el.dataset.since); if (!g) return; const ms = quitMs(g);
el.textContent = t('quit.days', { d: Math.floor(ms / 86400000), h: Math.floor(ms / 3600000) % 24 });
}), 60000);
checkBadges(); render();
if (S.onboarded && navigator.storage && navigator.storage.persist) navigator.storage.persisted().then(p => p || navigator.storage.persist()).catch(() => {  });
checkLevelUp(ppStats(), 900);
if (S.league && S.league.joined) leagueSync(false).catch(() => {});
setTimeout(pingUsers, 4000);
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('sw.js').catch(() => {  });
})();
