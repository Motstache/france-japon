import { createClient } from "@supabase/supabase-js";

// ✅ URL de ton projet Supabase
const supabaseUrl = "https://zrrbhyhulzwqldrepxso.supabase.co";

// ✅ On utilise une variable d'environnement Vite (doit commencer par VITE_)
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

if (!supabaseKey) {
  console.error("❌ ERREUR : VITE_SUPABASE_KEY est introuvable !");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
