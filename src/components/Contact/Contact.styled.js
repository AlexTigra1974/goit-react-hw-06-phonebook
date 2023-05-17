import styled from 'styled-components';

export const ButtonDel = styled.button`
  width: 100px;
  height: 30px;
  margin-top: auto;
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

export const Note = styled.p`
  margin-top: 20px;
  margin-right: auto;
  font-size: large;
`;
