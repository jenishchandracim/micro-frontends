import styled from 'styled-components';

const Button = styled.button.attrs({ type: 'button' })`
  height: 30px;
  width: 100px;
  font-size: 20px;
  background-color: #005ba8;
  color: #ffffff;
  border: none;
  &:hover {
    background-color: #273240;
    cursor: pointer;
  }
  &:active {
    background-color: #273240;
  }
`;

export default Button;
