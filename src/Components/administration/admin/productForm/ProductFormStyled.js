import styled from "styled-components";

export const ProductFormStyled = styled.form`
  .formWrapper {
    width: 100vw;
    display: flex;
  }

  .formColumn {
    display: flex;
    flex-direction: column;
    width: 50%;
  }
  .submitBtn {
    width: 100px;
    padding: 4px;
  }
  .description {
    width: 80vw;
  }
  label {
    width: 90%;
    padding: 4px;
  }
  input {
    margin-left: 35px;
    width: 50%;
  }
  .button {
    display: block;
  }
`;
