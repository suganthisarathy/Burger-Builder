import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import './Toolbar.css'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const toolbar=(props)=>(
  
   <div className="Toolbar">
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <Logo height="80%"/>
    <nav className="DesktopOnly">
      <NavigationItems/>
    </nav>
    </div>
   
)

export default toolbar