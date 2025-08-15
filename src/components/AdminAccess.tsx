import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Shield, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminAccess = () => {
  const { user, isAdmin } = useAuth();

  if (!user) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Link to="/auth">
          <Button className="shadow-lg flex items-center space-x-2">
            <LogIn className="w-4 h-4" />
            <span>Admin Login</span>
          </Button>
        </Link>
      </div>
    );
  }

  if (isAdmin) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Link to="/admin">
          <Button className="shadow-lg flex items-center space-x-2">
            <Shield className="w-4 h-4" />
            <span>Admin Dashboard</span>
          </Button>
        </Link>
      </div>
    );
  }

  return null;
};

export default AdminAccess;