import { Navigate, Outlet } from 'react-router-dom';
import { useUserContext } from '../../context/Users/useUserContext';

const PrivateRoute = () => {
  const [user] = useUserContext();
  // Check if user is in the context
  const auth = user.name !== '' || user.token !== '' || user.email !== ''; // determine if authorized, from context or however you're doing it

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return auth ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoute;
