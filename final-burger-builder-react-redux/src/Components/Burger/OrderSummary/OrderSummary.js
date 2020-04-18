import React ,{Component}from "react";
import Aux from "../../hoc/Aux";
import Button from "../../UI/Button/Button";
import '../../UI/Button/Button.css'
class OrderSummary extends Component{
    componentWillUpdate()
    {
      console.log('updated')
    }
    render()
    {
      const ingredientSummary = Object.keys(this.props.ingredients).map((igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
            {this.props.ingredients[igKey]}
          </li>)
      })
      
    
      return(
        <Aux>
      <h3>Order</h3>
      <p>A delecious burger with following ingredients</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total price:{this.props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button  className="Danger"clicked={this.props.purchaseCancelled}>Cancel</Button>
      <Button  className="Success"clicked={this.props.purchaseContinued}>Continue</Button>
    </Aux>
      )
    }
}
export default OrderSummary;
