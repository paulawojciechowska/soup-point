import React, { useState } from 'react';
import MainLogo from 'assets/images/mainLogo.svg';
import NavLinks from './NavLinks';
import { Wrapper, NavigationMenu } from './Navigation.styles';

const Navigation = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <>
      <Wrapper>
        <img src={MainLogo} alt="logo" />
        <NavigationMenu onClick={() => setOpenNav(!openNav)} />
      </Wrapper>
      <NavLinks isOpen={openNav} />
    </>
  );
};

export default Navigation;
