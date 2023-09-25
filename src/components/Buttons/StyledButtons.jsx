import styled from 'styled-components';

const StyledBtn = styled.button`
  all: unset;
  min-width: 15rem;
  min-height: 2rem;
  text-align: center;
  background-color: var(--loginBtnBg);
  margin-top: 2rem;
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
  &:active {
    transform: scale(0.95);
  }
`;

export { StyledBtn };
