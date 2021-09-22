import styled from 'styled-components';

export const IconButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  background-color: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.l};
  margin-right: 10px;
`;

export const ButtonWrapper = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;
