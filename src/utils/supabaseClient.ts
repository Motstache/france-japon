import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zrrbhyhulzwqldrepxso.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

console.log("🔑 Valeur réelle de VITE_SUPABASE_KEY :", supabaseKey ? supabaseKey : "❌ NON DÉFINIE");

if (!supabaseKey) {
  console.error("❌ ERREUR : La variable d'environnement VITE_SUPABASE_KEY est introuvable !");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
