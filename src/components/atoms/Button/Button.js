import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ grey, theme }) => (grey ? theme.colors.darkGrey : theme.colors.orange)};
  border-radius: 3px;
  height: 35px;
  width: 200px;
  font-size: ${({ theme }) => theme.font.m};
  margin-top: 15px;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
