import styled from 'styled-components';
//images
import { loginBg } from '../images/images';
import LoginForm from '../components/Login/LoginForm';

const StyledMain = styled.main`
  display: flex;
  flex-direction: column-reverse;
`;

const StyledImg = styled.img`
  opacity: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  z-index: -1;
`;

const Login = () => {
  return (
    <StyledMain>
      <LoginForm />

      <StyledImg
        src={loginBg}
        alt="Gymrats login screen photo of people training on the gym"
      />
    </StyledMain>
  );
};

export default Login;
