import styled from 'styled-components';
import { StyledBtn } from '../Buttons/StyledButtons';
import { Link, useLocation } from 'react-router-dom';

const FooterContainer = styled.footer`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterText = styled.p`
  color: var(--formFields);
`;
const StyledAnchor = styled(Link)`
  all: unset;
  display: inline-block;
  min-width: 100%;
  min-height: 100%;
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
