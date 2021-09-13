import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Input } from 'components/atoms/Input/Input';
import { Header } from 'components/atoms/Header/Header';
import { Button } from 'components/atoms/Button/Button';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 50px;
`;
const StyledParagraph = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.font.m};
  margin: 55px 0 0 0;
`;
const LogIn = () => (
  <Wrapper>
    <Header>Log in</Header>
    <Input placeholder="*Email" />
    <Input placeholder="*Password" />
    <Button orange>Login</Button>
    <StyledParagraph>Don't have account yet?</StyledParagraph>
    <Button grey as={NavLink} to="/sign">
      Create account
    </Button>
  </Wrapper>
);

export default LogIn;
