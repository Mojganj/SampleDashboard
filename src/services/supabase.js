import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://inbwwyfajflozmhupdia.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImluYnd3eWZhamZsb3ptaHVwZGlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5NDEyMzgsImV4cCI6MjAyODUxNzIzOH0.nLOOfP2-93s-tb2rbo31-9x9hUEPizH2Gh1RgO91sv8";
const supabase = createClient(supabaseUrl, supabaseKey);
export { supabaseUrl, supabase };
