import styled from 'styled-components';
// components
import FormGroup from './FormGroup';
import LoginHeading from './LoginHeading';
import LoginBtn from './LoginBtn';
import LoginFooter from './LoginFooter';
//google button
import GoogleButton from 'react-google-button';
// hooks
import { useLocation, useNavigate } from 'react-router-dom';

// login functions
import { userLogin } from '../../helpers/UserLogin';
import { useUserContext } from '../../context/Users/useUserContext';
import { useEffect } from 'react';

const StyledSection = styled.section`
  gap: 2rem;
  padding: 0 2rem;
  background-color: var(--backgroundPage);
  height: 100vh;
  @media (min-width: 1440px) {
    background-color: #1c1d21;
    padding: 0 5rem;
  }
`;
const HeadingContainer = styled.div`
  text-align: center;
  margin: 2rem 0;
  @media (min-width: 768px) {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
  }
  @media (min-width: 1440px) {
    text-align: left;
  }
`;
const Heading = styled.h1`
  font-size: 2rem;
  margin: 0;
  line-height: 1.5;
  color: var(--white);
  @media (min-width: 768px) {
    font-size: 2.6rem;
  }
  @media (min-width: 1440px) {
    font-size: 3rem;
  }
`;
const SubHeading = styled.p`
  margin: 0;
  color: var(--formFields);
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
  @media (min-width: 1440px) {
    font-size: 1.3rem;
  }
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`;

const LoginForm = () => {
  const { pathname } = useLocation();
  const [user, setUser] = useUserContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    userLogin(e.target.email.value, e.target.password.value);
    setUser({
      name: localStorage.getItem('name'),
      email: localStorage.getItem('email'),
      token: localStorage.getItem('x-token'),
      auth: localStorage.getItem('auth'),
    });
  };
  // dunno why i did this on this component but its the only way it works to force users to / when logged in, CHANGES TODO in this ugly code:
  const auth = user.name !== '' || user.email !== '' || user.token !== '';
  let navigate = useNavigate();
  useEffect(() => {
    if (auth) {
      return navigate('/');
    }
  }, [auth, navigate]);
  console.log(user);
  return (
    <StyledSection>
      <LoginHeading />
      <StyledForm onSubmit={handleSubmit}>
        <HeadingContainer>
          <Heading>{pathname === '/login' ? 'Login' : 'Sign Up'}</Heading>
          <SubHeading>Enter your account details</SubHeading>
        </HeadingContainer>
        <FormGroup
          required={true}
          id={'email'}
          type={'email'}
          formName={'Email'}
        />
        <FormGroup
          required={true}
          id={'password'}
          type={'password'}
          formName={'Password'}
        />
        {pathname === '/signup' && (
          <FormGroup
            required={true}
            id={'username'}
            type={'username'}
            formName={'Username'}
          />
        )}
        <GoogleButton
          className="googleBtn"
          type="dark"
          label={
            pathname === '/login' ? 'Login with Google' : 'Sign Up with Google'
          }
        />
        <LoginBtn />
      </StyledForm>
      <LoginFooter />
    </StyledSection>
  );
};

export default LoginForm;
