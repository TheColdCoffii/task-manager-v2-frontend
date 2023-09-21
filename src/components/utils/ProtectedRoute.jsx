import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const { checkSession, user } = useAuth();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleCheckSession = async () => {
      await checkSession();
      setLoading(false);
      return;
    };
    try {
      handleCheckSession();
    } catch (error) {
      setLoading(false);
      navigate('/login');
    }
  }, [navigate, checkSession]);

  if (loading) {
    return <h1>loading...</h1>;
  }
  if (user.isAuthenticated) {
    return children;
  } else {
    return (
      <Navigate
        to={'/login'}
        replace={true}
      />
    );
  }
}
