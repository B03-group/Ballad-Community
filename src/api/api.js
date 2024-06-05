import { createClient } from '@supabase/supabase-js';

const superbaseUrl = import.meta.env.VITE_MAIN_URL;
const supabaseKey = import.meta.env.VITE_MAIN_KEY;
export const supabase = createClient(superbaseUrl, supabaseKey);
