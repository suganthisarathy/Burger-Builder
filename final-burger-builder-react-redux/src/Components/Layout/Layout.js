import React ,{Component} from "react";
import Aux from "../hoc/Aux";
import "./Layout.css"
import Toolbar from "../Navigation/Toolbar/Toolbar"
import SideDrawer from "../Navigation/SideDrawer/SideDrawer"

class Layout extends Component{
  state={
    showSideDrawer:true
  }

   sideDrawerClosedHandler=()=>{
     this.setState({showSideDrawer:false})
   }
   SideDrawerToggleHandler=()=>{
     this.setState((prevState)=>{
       return {showSideDrawer:!prevState.showSideDrawer}
     })
   }
  render()
  {
    return(
    <Aux>
    <main className="Content">
    <Toolbar drawerToggleClicked={this.SideDrawerToggleHandler}/>
    <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
    {this.props.children}
    </main>
    
    </Aux>)
  }
} 
  

export default Layout;
