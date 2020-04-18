import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import BackDrop from "../../UI/Backdrop/Backdrop"
import Aux from "../../hoc/Aux"
import './SideDrawer.css'


const sideDrawer=(props) =>{
   
    return(
        <Aux>
        <BackDrop show={props.open} clicked={props.closed}/>
        <div className={`SideDrawer ${props.open ? "Open" : "Close"}`}>
            <div className="Logo1">
            <Logo/>
            </div>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
        </Aux>
    );
}
export default sideDrawer