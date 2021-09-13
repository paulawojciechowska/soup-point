import React from 'react';
import { NavLink } from 'react-router-dom';
import { Header } from 'components/atoms/Header/Header';
import { Input } from 'components/atoms/Input/Input';
import { Button } from 'components/atoms/Button/Button';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import { Wrapper, NameWrapper } from './SignUp.styled';

const SignUp = () => (
  <Wrapper>
    <Header>Sign Up</Header>
    <NameWrapper>
      <Input placeholder="*Name" />
      <Input placeholder="*Surname" />
    </NameWrapper>
    <Input isBig placeholder="*Email" />
    <Input isBig placeholder="*Create Password" />
    <Button grey>Create an account</Button>
    <Paragraph small orange>
      By signing up you accept the Terms of Service and Privacy Policy.
    </Paragraph>
    <Paragraph>Already have an account?</Paragraph>
    <Button as={NavLink} to="/login">
      Login
    </Button>
  </Wrapper>
);

export default SignUp;
