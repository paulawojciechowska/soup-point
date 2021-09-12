import styled from 'styled-components';

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 3px;
  height: 35px;
  padding: 0 10px;
  width: ${({ isBig }) => (isBig ? '405px' : '200px')};
  margin: 5px 0;
  @media (max-width: 1190px) {
    flex-direction: column;
    width: 200px;
  }
`;
