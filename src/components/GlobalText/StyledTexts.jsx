import styled from 'styled-components';

const StyledWelcome = styled.h1`
  color: var(--white);
  margin: 0;
  line-height: 1.2;
  font-size: 2rem;
  font-weight: 700;
  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
  @media (min-width: 1440px) {
    font-size: 4rem;
  }
`;
const StyledLoginApp = styled.span`
  color: var(--white);
  font-size: 2rem;
  display: block;
  font-weight: 300;
  @media (min-width: 768px) {
    font-size: 2.6rem;
  }
  @media (min-width: 1440px) {
    font-size: 3rem;
  }
`;

export { StyledWelcome, StyledLoginApp };
