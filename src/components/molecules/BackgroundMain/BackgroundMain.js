import React from 'react';
import styled from 'styled-components';
import Soup from 'assets/images/soup.jpg';

const BackgroundWrapper = styled.div`
  position: relative;
`;
const Wrapper = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  width: 50vw;
  height: 100vh;
`;

const ImageBackground = styled.div`
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: auto 100%;
  height: 100vh;
`;
const BackgroundMain = () => (
  <BackgroundWrapper>
    <Wrapper />
    <ImageBackground img={Soup} />
  </BackgroundWrapper>
);

export default BackgroundMain;
