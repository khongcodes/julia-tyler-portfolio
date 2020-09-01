/////////////////////////////////////////////////////////////////////////////////
/////////////                                                               NOTES

/////////////////////////////////////////////////////////////////////////////////
/////////////                                                             IMPORTS

import React from 'react';
import { Link } from "react-router-dom";

import navSettings from "../configData/navSettings.json";

import logo from "../assets/images/logo.png";

import layoutStyles from "../assets/styles/Layout.module.sass";


/////////////////////////////////////////////////////////////////////////////////
/////////////                                                               SETUP

type LayoutProps = {
  children: React.ReactNode[] | React.ReactNode;
}

type NavSettingsType = {
  activeLinks: Array<{
    text: string;
    path: string;
  }>;
};

/////////////////////////////////////////////////////////////////////////////////
/////////////                                                  COMPONENTS & LOGIC

const Nav = () => {
  const settings: NavSettingsType = navSettings;
  
  return (
    <div id={layoutStyles.navContainer}>
        
      <Link to="/" >
        <img 
          className={layoutStyles.navLogo}
          src={logo}
          alt="Julia Tyler logo"
        />
      </Link>

      <ul className={layoutStyles.linkList}>
        {settings.activeLinks.map(link => 
          <li>
            <Link to={link.path}>
              {link.text}
            </Link>
          </li>
        )}
      </ul>

    </div>
  )
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div id={layoutStyles.layoutRoot}>
      <div id={layoutStyles.mobileMenuDrawerContainer}>

      </div>

      <div id={layoutStyles.mainAppContainer}>
        <Nav />
        {children}
      </div>
    </div>
  )
}

export default Layout;