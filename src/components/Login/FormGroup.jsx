// import styled from 'styled-components';

const FormGroup = ({ formName, type, id, required }) => {
  return (
    <div>
      <label>{formName}</label>
      <input type={type} id={id} name={id} required={required} />
    </div>
  );
};

export default FormGroup;
