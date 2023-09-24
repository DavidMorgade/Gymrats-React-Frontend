import styled from 'styled-components';
import FormGroup from './FormGroup';
import LoginHeading from './LoginHeading';
import LoginBtn from './LoginBtn';

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
  return (
    <StyledSection>
      <LoginHeading />
      <StyledForm>
        <HeadingContainer>
          <Heading>Login</Heading>
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
        <LoginBtn />
      </StyledForm>
    </StyledSection>
  );
};

export default LoginForm;
