/////////////////////////////////////////////////////////////////////////////////
/////////////                                                               NOTES

/////////////////////////////////////////////////////////////////////////////////
/////////////                                                             IMPORTS

import React from 'react';
import { Link } from "react-router-dom";

import navSettingsData from "../configData/navSettings.json";

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

type NavSettingsSubscriber = {
  navSettings: NavSettingsType;
}

/////////////////////////////////////////////////////////////////////////////////
/////////////                                                  COMPONENTS & LOGIC

const Nav: React.FC<NavSettingsSubscriber> = ({ navSettings }) => {
  
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
        {navSettings.activeLinks.map(link => 
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

const MobileMenuDrawer: React.FC<NavSettingsSubscriber> = ({ navSettings }) => {
  return (
    <div id={layoutStyles.mobileMenuDrawerContainer}>
      
      <ul className={layoutStyles.linkList}>
        {navSettings.activeLinks.map(link => 
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
  const navSettings: NavSettingsType = navSettingsData;

  return (
    <div id={layoutStyles.layoutRoot}>
      <MobileMenuDrawer navSettings={navSettings}/>

      <div id={layoutStyles.mainAppContainer}>
        <Nav navSettings={navSettings} />
        {children}
      </div>
    </div>
  )
}

export default Layout;