-- Fix critical security vulnerability in contact_form_rate_limit table
-- Replace overly permissive RLS policy that exposes all user data

-- Drop the existing insecure policy
DROP POLICY IF EXISTS "Users can view their own rate limit data" ON public.contact_form_rate_limit;

-- Create a secure policy that only allows viewing rate limit data for the current user's email
-- This prevents exposure of other users' email addresses and IP addresses
CREATE POLICY "Users can view their own rate limit data" 
ON public.contact_form_rate_limit 
FOR SELECT 
USING (
  -- Only allow access if authenticated user's email matches the rate limit record
  -- or if user is an admin (for monitoring purposes)
  auth.uid() IS NOT NULL AND (
    (SELECT email FROM auth.users WHERE id = auth.uid()) = email
    OR has_role(auth.uid(), 'admin'::app_role)
  )
);

-- Add policy for authenticated users to insert their own rate limit data
CREATE POLICY "Users can insert their own rate limit data" 
ON public.contact_form_rate_limit 
FOR INSERT 
WITH CHECK (
  auth.uid() IS NOT NULL AND 
  (SELECT email FROM auth.users WHERE id = auth.uid()) = email
);