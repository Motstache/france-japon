import { createClient } from "@supabase/supabase-js";

// ✅ URL de ton projet Supabase
const supabaseUrl = "https://zrrbhyhulzwqldrepxso.supabase.co";

// ✅ On récupère la clé depuis les variables d'environnement Vite
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

console.log("🔑 VITE_SUPABASE_KEY =", supabaseKey || "❌ NON DÉFINIE");

if (!supabaseKey) {
  console.error("❌ ERREUR : La clé Supabase n'est pas définie !");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
