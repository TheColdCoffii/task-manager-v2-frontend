import ProtectedRoute from '../components/utils/ProtectedRoute';

export default function Logout() {
  return (
    <ProtectedRoute>
      <div>Logout</div>;
    </ProtectedRoute>
  );
}
