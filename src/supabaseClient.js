import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fulqoeccruwlqvbdqeia.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ1bHFvZWNjcnV3bHF2YmRxZWlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcxNDI3NjUsImV4cCI6MjAzMjcxODc2NX0.kzDsuvzo0f1cfXjl7pL4yGhqgfqvV2SGLzuPWjylfKo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
