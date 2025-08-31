import { useEffect, useState } from 'react';
import AdminBootstrap from '@/components/admin/AdminBootstrap';
import ProtectedRoute from '@/components/ProtectedRoute';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';

const Admin = () => {
  const { user } = useAuth();
  const [hasAdminUser, setHasAdminUser] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAdminExists = async () => {
      try {
        const { data, error } = await supabase
          .from('user_roles')
          .select('id')
          .eq('role', 'admin')
          .limit(1);

        if (error) {
          console.error('Error checking admin user:', error);
          setHasAdminUser(false);
          return;
        }

        setHasAdminUser(data && data.length > 0);
      } catch (error) {
        console.error('Error checking admin user:', error);
        setHasAdminUser(false);
      }
    };

    if (user) {
      checkAdminExists();
    }
  }, [user]);

  // Show loading while checking
  if (hasAdminUser === null) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  // If no admin exists, show bootstrap component
  if (!hasAdminUser) {
    return <AdminBootstrap />;
  }

  // Normal admin panel with protection
  return (
    <ProtectedRoute requireAdmin={true}>
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Admin Panel</h1>
          <p className="text-muted-foreground">Welcome to the admin dashboard</p>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Admin;