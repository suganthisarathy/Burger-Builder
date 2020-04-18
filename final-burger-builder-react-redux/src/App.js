import React ,{Component} from 'react'
import Layout from './Components/Layout/Layout'
import {Route,Switch } from 'react-router-dom'
import BurgerBuilder from './Components/Containers/BurgerBuilder/BurgerBuilder'
import Checkout from './Components/Containers/Checkout/Checkout'
import Orders from './Components/Containers/Orders/Orders'

class App extends Component{
  render()
  {
    return(
      <div>
        <Layout>
          <Switch>
          <Route path="/checkout" component={Checkout}/>  
          <Route path="/orders" component={Orders}/>   
          <Route path="/"  exact component={BurgerBuilder}/>
          </Switch>
          </Layout>
      </div>
    )
  }
}
export default App;
