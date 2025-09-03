-- Drop the insecure public read policy
DROP POLICY IF EXISTS "Public can view messages" ON public.messages;

-- Create a secure policy that only allows admins to view messages
CREATE POLICY "Only admins can view messages" 
ON public.messages 
FOR SELECT 
USING (has_role(auth.uid(), 'admin'::public.app_role));