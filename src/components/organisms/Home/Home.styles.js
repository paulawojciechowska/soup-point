import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  position: relative;
  h4 {
    max-width: 400px;
    color: ${({ theme }) => theme.colors.orange};
    font-weight: ${({ theme }) => theme.font.bold};
    margin: 15px 0;
  }
  h5 {
    color: ${({ theme }) => theme.colors.darkGrey};
    font-weight: ${({ theme }) => theme.font.regular};
    max-width: 350px;
    margin: 15px 0;
  }
  img {
    width: 200px;
    margin: 20px 0;
    position: absolute;
    top: 100%;
  }
  div {
    display: flex;
    gap: 20px;
    @media (max-width: 1190px) {
      flex-direction: column;
    }
  }
`;