import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Loader from './Loader';

export default function ProtectedRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null = loading
  // const location = useLocation(); // To preserve redirect origin

  useEffect(() => {
    let isMounted = true;

    async function checkAuth() {
      try {
        const res = await fetch('http://localhost:5001/auth/protect', {
          credentials: 'include',
        });
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.message || 'Authentication failed');
        }

        const data = await res.json();

        if (data.status !== 'success') {
          throw new Error(errorData.message || 'Authentication failed');
        }

        if (isMounted) {
          setIsAuthenticated(true);
        }
      } catch (err) {
        if (isMounted) {
          console.error('Auth check failed:', err.message);
          setIsAuthenticated(false);
        }
      }
    }

    checkAuth();

    return () => {
      isMounted = false;
    };
  }, []);

  // Show loading state while checking authentication
  if (isAuthenticated === null) {
    return <Loader isLoading={true} />;
  }

  // Redirect to login/registration page if not authenticated, preserving the original location
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
