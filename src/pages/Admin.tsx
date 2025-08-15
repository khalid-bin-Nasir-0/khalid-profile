import { ContactMessages } from '@/components/admin/ContactMessages';
import ProtectedRoute from '@/components/ProtectedRoute';

const Admin = () => {
  return (
    <ProtectedRoute requireAdmin={true}>
      <ContactMessages />
    </ProtectedRoute>
  );
};

export default Admin;