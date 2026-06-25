import { createClient } from "@supabase/supabase-js";

const SUPABASE_URLS = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEYS = process.env.SUPABASE_ANON_KEY;

if (!SUPABASE_URLS || !SUPABASE_ANON_KEYS) {
  throw new Error(
    "Missing SUPABASE_URL or SUPABASE_ANON_KEY environment variables",
  );
}

const supabase = createClient(SUPABASE_URLS, SUPABASE_ANON_KEYS);

export default supabase;
