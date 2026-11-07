/* Connexion au classement en ligne (Supabase).
   Tant que ces deux valeurs sont vides, l'appli marche normalement et le classement affiche « Bientôt en ligne ».
   Pour l'activer (avec un parent), voir le README, partie « Activer le classement en ligne ».
   La clé « anon public » est faite pour être publique : la sécurité est assurée par supabase/schema.sql. */
window.PEAKMIND_CONFIG = {
  supabaseUrl: 'https://osclbqqcxetvmgkyabaz.supabase.co',              // projet « Projet de Peakwinner93 » (7 novembre 2026)
  supabaseAnonKey: 'sb_publishable_v3B205LIANENqITpdIndsw_BwKv4XFr'      // clé publiable (Project Settings › API Keys), jamais la secrète
};
