import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const ContactForm = styled(Form)`
  display: flex;
  flex-direction: column;

  width: 100%;
  font-family: sans-serif;
  font-size: 28px;
  padding: 20px;
  margin: 20px;
  border: 1px solid #524f4e;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 1), -23px 0 20px -23px rgba(0, 0, 0, 0.8),
    23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1);
`;

export const ButtonAdd = styled.button`
  max-width: 130px;
  max-height: 45px;
  line-height: 45px;
  border-radius: 45px;
  padding-left: 10px;
  padding-right: 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;

  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  font-weight: 400;
  color: #010101;
  background: white;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  &:hover {
    background: #2ee59d;
    box-shadow: 0 15px 20px rgba(165, 188, 179, 0.4);
    color: white;
    transform: translateY(-7px);
  }
`;

export const InputError = styled.div`
  background-color: rgb(255, 245, 245);
  color: rgb(120, 27, 0);
  display: block;
  width: 90%;

  padding: 0.5rem 0.75rem;
  margin-top: 0.5rem;
  white-space: pre-line;
`;

export const FormInput = styled(Field)`
  display: flex;
  min-width: 90%;
  height: 40px;
  margin-top: 10px;
  font-family: sans-serif;
  font-size: 28px;

  :hover {
    box-shadow: 0 1px 15px rgb(125, 141, 243),
      -23px 0 20px -23px rgba(104, 104, 249, 0.8),
      23px 0 20px -23px rgba(94, 127, 235, 0.8), 0 0 40px rgb(0 0 0 / 10%);
  }
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 140px;
`;
