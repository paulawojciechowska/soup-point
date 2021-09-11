import React from 'react';
import MainTemplate from 'components/templates/MainTemplate';
import BackgroundMain from 'components/molecules/BackgroundMain/BackgroundMain';
import { Wrapper, WrapperDark, InfoPlate } from './Root.styles';

const Root = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <BackgroundMain />
        <WrapperDark />
        <InfoPlate></InfoPlate>
      </Wrapper>
    </MainTemplate>
  );
};

export default Root;
