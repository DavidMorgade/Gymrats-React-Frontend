import { useState } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  width: 80%;
  label {
    position: absolute;

    z-index: 0;
    pointer-events: none;
    color: var(--formFields);
    opacity: 0.4;
    width: 100%;
  }
  input {
    all: unset;
    padding: 0.5rem;
    background-color: inherit;
    border: none;
    border-bottom: 2px solid gray;
    width: 100%;
    color: var(--formFields);
  }
`;

const FormGroup = ({ formName, type, id, required }) => {
  const [userTypes, setUserTypes] = useState(true);

  const userTypesHandler = (event) => {
    if (event.target.value === '') {
      setUserTypes(true);
    } else {
      setUserTypes(false);
    }
  };

  return (
    <StyledContainer>
      {userTypes && <label>{formName}</label>}
      <input
        onChange={userTypesHandler}
        type={type}
        id={id}
        name={id}
        required={required}
      />
    </StyledContainer>
  );
};

export default FormGroup;
