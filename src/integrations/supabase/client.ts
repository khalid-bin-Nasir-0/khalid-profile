import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Mock client for when Supabase is not connected
const mockClient = {
  from: () => ({
    insert: () => Promise.resolve({ error: new Error('Please connect to Supabase first') }),
    select: () => Promise.resolve({ data: [], error: null }),
    update: () => Promise.resolve({ error: new Error('Please connect to Supabase first') }),
    eq: function() { return this; },
    order: function() { return this; },
  })
} as any;

// Export supabase client - real or mock depending on connection status
export const supabase = (!supabaseUrl || !supabaseAnonKey) 
  ? (() => {
      console.warn('Supabase not connected yet. Please connect via the Supabase button.');
      return mockClient;
    })()
  : createClient(supabaseUrl, supabaseAnonKey);