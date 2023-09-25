import styled from 'styled-components';
import FormGroup from './FormGroup';
import LoginHeading from './LoginHeading';
import LoginBtn from './LoginBtn';
import LoginFooter from './LoginFooter';
import { useLocation } from 'react-router-dom';

const StyledSection = styled.section`
  gap: 2rem;
  padding: 0 2rem;
  background-color: var(--backgroundPage);
  height: 100vh;
`;
const HeadingContainer = styled.div`
  text-align: center;
  margin: 2rem 0;
`;
const Heading = styled.h1`
  font-size: 2rem;
  margin: 0;
  line-height: 1.5;
  color: var(--white);
`;
const SubHeading = styled.p`
  margin: 0;
  color: var(--formFields);
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginForm = () => {
  const { pathname } = useLocation();

  return (
    <StyledSection>
      <LoginHeading />
      <StyledForm>
        <HeadingContainer>
          <Heading>{pathname === '/login' ? 'Login' : 'Sign Up'}</Heading>
          <SubHeading>Enter your account details</SubHeading>
        </HeadingContainer>
        <FormGroup
          required={true}
          id={'username'}
          type={'text'}
          formName={'Username'}
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
            id={'email'}
            type={'email'}
            formName={'Email'}
          />
        )}
        <LoginBtn />
      </StyledForm>
      <LoginFooter />
    </StyledSection>
  );
};

export default LoginForm;
