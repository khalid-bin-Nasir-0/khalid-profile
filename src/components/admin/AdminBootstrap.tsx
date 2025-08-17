import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

const AdminBootstrap = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [isCreating, setIsCreating] = useState(false);

  const createAdminUser = async () => {
    if (!user) {
      toast({
        title: "Error",
        description: "You must be logged in to create an admin user.",
        variant: "destructive",
      });
      return;
    }

    setIsCreating(true);
    try {
      const { data, error } = await supabase.rpc('create_admin_user', {
        _user_id: user.id
      });

      if (error) {
        throw error;
      }

      if (data) {
        toast({
          title: "Success",
          description: "Admin user created successfully! You can now access the admin panel.",
        });
        // Refresh the page to update permissions
        window.location.reload();
      } else {
        toast({
          title: "Info",
          description: "An admin user already exists in the system.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error creating admin user:', error);
      toast({
        title: "Error",
        description: "Failed to create admin user. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsCreating(false);
    }
  };

  if (!user) {
    return (
      <Card className="max-w-md mx-auto mt-8">
        <CardHeader>
          <CardTitle>Admin Setup</CardTitle>
          <CardDescription>
            You must be logged in to set up admin access.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="max-w-md mx-auto mt-8">
      <CardHeader>
        <CardTitle>Admin Setup Required</CardTitle>
        <CardDescription>
          No admin user exists in the system. Click below to make your account an admin.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button 
          onClick={createAdminUser} 
          disabled={isCreating}
          className="w-full"
        >
          {isCreating ? 'Creating Admin...' : 'Make Me Admin'}
        </Button>
        <p className="text-sm text-muted-foreground mt-2">
          This option is only available when no admin exists.
        </p>
      </CardContent>
    </Card>
  );
};

export default AdminBootstrap;