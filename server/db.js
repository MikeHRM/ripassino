// db.js
const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

// yeah, yeah, this is still terrible but still just for training purposes so who cares?
const SUPABASE_URL = "https://ghzxehgxnsdnmeazbuzd.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdoenhlaGd4bnNkbm1lYXpidXpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM0NTM5NzgsImV4cCI6MjA2OTAyOTk3OH0.D9NTWkrHihJPYFEYK2odysV0iAvIwZrVFqsOHrtWwSY";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

console.log("✅ Supabase client initialized");

module.exports = supabase;
