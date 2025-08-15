import { ContactMessages } from '@/components/admin/ContactMessages';
import AdminHeader from '@/components/AdminHeader';

const Admin = () => {
  return (
    <div className="min-h-screen bg-background">
      <AdminHeader />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ContactMessages />
      </main>
    </div>
  );
};

export default Admin;