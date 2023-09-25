import { StyledWelcome, StyledLoginApp } from '../GlobalText/StyledTexts';
import styled from 'styled-components';

const StyledDiv = styled.div`
  margin: 2rem 0;
  text-align: center;
  @media (min-width: 1440px) {
    text-align: right;
  }
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
