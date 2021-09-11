import React from 'react';
import Soup from 'assets/images/soup.jpg';
import { BackgroundWrapper, Wrapper, ImageBackground } from './BackgroundMain.styles';

const BackgroundMain = () => (
  <BackgroundWrapper>
    <Wrapper />
    <ImageBackground img={Soup} />
  </BackgroundWrapper>
);

export default BackgroundMain;
