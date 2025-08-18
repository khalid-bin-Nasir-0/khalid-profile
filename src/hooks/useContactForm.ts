import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const submitContactForm = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: data.name.trim(),
            email: data.email.trim(),
            message: data.message.trim(),
          }
        ]);

      if (error) {
        throw error;
      }

      // Send email notification
      try {
        console.log('Attempting to send email notification...');
        const emailResult = await supabase.functions.invoke('send-contact-notification', {
          body: {
            name: data.name.trim(),
            email: data.email.trim(),
            message: data.message.trim(),
          }
        });
        
        console.log('Email notification response:', emailResult);
        
        if (emailResult.error) {
          throw emailResult.error;
        }
        
        console.log('Email notification sent successfully');
      } catch (emailError) {
        console.error('Failed to send email notification:', emailError);
        // Don't fail the entire operation if email fails
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      return { success: true };
    } catch (error) {
      console.error('Error submitting contact form:', error);
      
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });

      return { success: false, error };
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitContactForm,
    isSubmitting,
  };
};