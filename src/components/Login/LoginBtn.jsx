import { useLocation } from 'react-router-dom';
import { StyledBtn } from '../Buttons/StyledButtons';

const LoginBtn = () => {
  const { pathname } = useLocation();

  return <StyledBtn>{pathname === '/login' ? 'Login' : 'Sign Up'}</StyledBtn>;
};

export default LoginBtn;
