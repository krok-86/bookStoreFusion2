import type { FC, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

interface IProtectedRoute {
  isAuth: boolean | null;
  children: ReactElement;
}

const ProtectedRoute: FC<IProtectedRoute> = ({ isAuth, children }) => {
  if (!isAuth) {
    return <Navigate to="/authorization" replace />;
  }

  return children;
};

export default ProtectedRoute;
