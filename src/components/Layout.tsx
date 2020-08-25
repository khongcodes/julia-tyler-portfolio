/////////////////////////////////////////////////////////////////////////////////
/////////////                                                               NOTES

/////////////////////////////////////////////////////////////////////////////////
/////////////                                                             IMPORTS

import React from 'react';


/////////////////////////////////////////////////////////////////////////////////
/////////////                                                               SETUP

type LayoutProps = {
  children: React.ReactNode[] | React.ReactNode;
}

/////////////////////////////////////////////////////////////////////////////////
/////////////                                                  COMPONENTS & LOGIC

const Nav = () => {
  return (
    <div>
      
    </div>
  )
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Layout;