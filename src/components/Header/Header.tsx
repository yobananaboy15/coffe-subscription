import React from 'react';
import HeaderLogo from '../HeaderLogo/HeaderLogo';
import HeaderItem, { items } from '../HeaderItem/HeaderItem';

const Header = () => (
  <header>
    <HeaderLogo />
    {items.map((item) => <HeaderItem itemDetails={item} />)}
  </header>
);

export default Header;
