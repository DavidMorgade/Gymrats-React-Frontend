import { Navigate, Outlet } from 'react-router-dom';

import { useUserContext } from '../../context/Users/useUserContext';

const PrivateRoute = () => {
  const [user] = useUserContext();

  return user.auth ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoute;
