import React, { Component } from "react";
import {connect} from 'react-redux'
import Aux from "../../hoc/Aux";
import Burger from "../../../Components/Burger/Burger";
import BuilControls from '../../../Components/Burger/BuildControls/BuildControls'
import Modal from "../../../Components/UI/Modal/Modal"
import OrderSummary from "../../../Components/Burger/OrderSummary/OrderSummary"
import axios from '../../../axios-orders'
import Spinner from '../../UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import * as actions from '../../../store/actions/index'

class BurgerBuilder extends Component {

  state ={
    
    
    purchasing:false,
    
  }
  componentDidMount()
  {
    this.props.onInitIngredients()
  }
  updatePurchaseState(ingredients){
    const sum=Object.keys(ingredients).map(igKey=>{
      return ingredients[igKey]
    }).reduce((sum,el)=>{
      return sum+el;
    },0)
     return sum>0
  }
  
  purchaseHandler =()=>{
    this.setState({purchasing:true})
  }
  
   purchaseCancelHandler=()=>{
     this.setState({purchasing:false})
   }
  purchaseContinueHandler=()=>{
    //alert('continue!')
    this.props.onInitPurchase()
     this.props.history.push('/checkout')
  }
  render() {
    const disabledInfo={
      ...this.props.ings
    }
    for(let key in disabledInfo)
    {
      disabledInfo[key]=disabledInfo[key]<=0
    }
    let orderSummary=null
    
    
    let burger=this.props.error?<p>Ingredients can't be loaded</p>:<Spinner/>
     if(this.props.ings)
     {
      burger=(
        <Aux>
          <Burger ingredients={this.props.ings} />
          <BuilControls
           ingredientAdded={this.props.onIngredientAdded}
          ingredientRemoved={this.props.onIngredientRemoved} 
          disabled={disabledInfo}
          price={this.props.price}
          ordered={this.purchaseHandler}
          purchasable={this.updatePurchaseState(this.props.ings)}/>
        </Aux>
      )
      orderSummary=<OrderSummary ingredients={this.props.ings}
    price={this.props.price} 
    purchaseCancelled={this.purchaseCancelHandler} 
    purchaseContinued={this.purchaseContinueHandler}/>
     }
    
   
    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
        {/* <div>Build Control</div> */}
      </Aux>
    );
    }
}

const mapStateToProps=state=>{
  return{
    ings:state.burgerBuilder.ingredients,
    price:state.burgerBuilder.totalPrice,
    error:state.burgerBuilder.error
  }
}
const mapDispatchToProps=dispatch=>{
  return{
    onIngredientAdded:(ingName)=>dispatch(actions.addIngredient(ingName)),
    onIngredientRemoved:(ingName)=>dispatch(actions.removeIngredient(ingName)),
    onInitIngredients:()=>dispatch(actions.initIngredients()),
    onInitPurchase:()=>dispatch(actions.purchaseInit())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBuilder,axios));
