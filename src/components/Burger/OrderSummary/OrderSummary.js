import React,{ Component }  from "react";

import AuxW from "../../../hoc/AuxW/AuxW";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  render(){
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
          {this.props.ingredients[igKey]}
        </li>
      );
    });
    return(
      <AuxW>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Total Price: £{this.props.totalPrice.toFixed(2)} </p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
      <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
    </AuxW>
    );
  }

}

export default OrderSummary;
