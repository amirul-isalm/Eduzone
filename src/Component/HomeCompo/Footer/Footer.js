import React from 'react';
import logo from '../../Header/header-logo.png'
const Footer = () => {
    return (
      <div className="bg-info py-3">
        <img src={logo} alt="" />
       <br />
       <br />
        <p> Copyright © 2021 Bootstrap.com</p>
      </div>
    );
};

export default Footer;