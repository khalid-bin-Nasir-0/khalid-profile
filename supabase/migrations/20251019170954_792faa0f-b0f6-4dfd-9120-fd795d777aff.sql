-- Add UPDATE and DELETE RLS policies for messages table
-- Only admins should be able to modify or delete contact submissions

CREATE POLICY "Only admins can update messages"
ON public.messages
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Only admins can delete messages"
ON public.messages
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));