import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  span {
    font-size: ${({ theme }) => theme.font.s};
    color: red;
  }
`;
