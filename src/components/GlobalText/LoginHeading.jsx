import { StyledWelcome, StyledLoginApp } from './StyledTexts';
import styled from 'styled-components';

const StyledDiv = styled.div`
  margin: 5rem 0;
`;

const LoginHeading = () => {
  return (
    <StyledDiv>
      <StyledWelcome>Welcome to</StyledWelcome>
      <StyledLoginApp>GymRats social media!</StyledLoginApp>
    </StyledDiv>
  );
};

export default LoginHeading;
