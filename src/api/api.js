import { createClient } from "@supabase/supabase-js";

const superbaseUrl = 'https://hosygkmrpmwxwrqoqlhq.supabase.co';
const supabaseKey = import.meta.env.VITE_COMMENTS_SUPABASE_KEY;
export const supabase = createClient(superbaseUrl, supabaseKey);

