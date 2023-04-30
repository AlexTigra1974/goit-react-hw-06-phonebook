import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikError } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 400px;
  padding: 10px;
  border: 1px solid #212121;
`;
export const ErrorMessage = styled(FormikError)`
  color: crimson;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  width: 150px;
`;

export const Button = styled.button`
  width: 100px;
  padding: 4px;
  border: 1px solid grey;
  border-radius: 4px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: mediumslateblue;
    border-color: skyblue;
    border-radius: 8px;
    color: white;
  }
`;
