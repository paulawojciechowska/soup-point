import React from 'react';
import { NavLink } from 'react-router-dom';
import { Input } from 'components/atoms/Input/Input';
import { Header } from 'components/atoms/Header/Header';
import { Button } from 'components/atoms/Button/Button';
import { Wrapper, StyledParagraph } from './LogIn.styles';

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
