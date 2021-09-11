import styled from 'styled-components';

export const BackgroundWrapper = styled.div`
  position: relative;
`;
export const Wrapper = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.white};
  width: 50vw;
  height: 100vh;
`;

export const ImageBackground = styled.div`
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: auto 100%;
  height: 100vh;
`;
