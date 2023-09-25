import styled from 'styled-components';
//images
import { loginBg } from '../images/images';
import LoginForm from '../components/Login/LoginForm';

const StyledMain = styled.main`
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1;
  }
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
  @media (min-width: 1440px) {
    position: static;
  }
`;

const SignUp = () => {
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

export default SignUp;
