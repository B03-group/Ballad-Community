import { createClient } from "@supabase/supabase-js";

const superbaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
export const supabase = createClient(superbaseUrl, supabaseKey);

