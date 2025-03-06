import { createClient } from '@supabase/supabase-js';

const supabaseURL = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_AUTH_ANON;
const supabase = createClient(supabaseURL, supabaseAnonKey);

export default supabase;
