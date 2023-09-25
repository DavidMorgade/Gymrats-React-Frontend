import styled from 'styled-components';
import { StyledBtn } from '../Buttons/StyledButtons';
import { Link, useLocation } from 'react-router-dom';

const FooterContainer = styled.footer`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterText = styled.p`
  color: var(--formFields);
`;
const StyledAnchor = styled(Link)`
  all: unset;
  width: 100%;
  height: inherit;
  flex: 1;
  line-height: 2rem;
  @media (min-width: 1440px) {
    line-height: 2.4rem;
  }
`;

const LoginFooter = () => {
  const { pathname } = useLocation();

  return (
    <FooterContainer>
      <FooterText>
        {pathname === '/login'
          ? "Dont' have an account?"
          : 'Already have an account?'}
      </FooterText>
      <StyledBtn>
        <StyledAnchor to={pathname === '/login' ? '/signup' : '/login'}>
          {pathname === '/login' ? 'Sign Up' : 'Login'}
        </StyledAnchor>
      </StyledBtn>
    </FooterContainer>
  );
};

export default LoginFooter;
