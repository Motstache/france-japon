import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zrrbhyhulzwqldrepxso.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

console.log("🔑 Clé Supabase chargée :", supabaseKey ? "✅ OK" : "❌ MANQUANTE");

if (!supabaseKey) {
  console.error("❌ ERREUR : La clé Supabase n'est pas définie !");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
