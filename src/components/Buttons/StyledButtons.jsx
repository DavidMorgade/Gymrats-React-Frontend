import styled from 'styled-components';

const StyledBtn = styled.button`
  all: unset;
  padding: 0.5rem 7rem;
  background-color: var(--loginBtnBg);
  margin-top: 5rem;
  border-radius: 12px;
  color: var(--white);
  font-weight: 300;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.5s ease-in-out;
  &:hover {
    background-color: white;
    color: var(--loginBtnBg);
  }
`;

export { StyledBtn };
