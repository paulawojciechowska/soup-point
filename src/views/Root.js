import React from 'react';
import styled from 'styled-components';
import MainTemplate from 'components/templates/MainTemplate';
import BackgroundMain from 'components/molecules/BackgroundMain/BackgroundMain';

const Wrapper = styled.div`
`;

const Root = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <BackgroundMain />
      </Wrapper>
    </MainTemplate>
  );
};

export default Root;
