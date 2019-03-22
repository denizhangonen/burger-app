import React from "react";
import classes from "./Order.css";

const order = props => {
  //   console.log(props.ingredients);
  const ingredients = [];

  for (const ingredient in props.ingredients) {
    ingredients.push({
      name: ingredient,
      amount: props.ingredients[ingredient]
    });
  }

  const ingredientsOutput = ingredients.map(ig => {
    //   console.log(ing.amount);
    return (
      <span
        key={ig.name}
        style={{
          textTransform: "capitalize",
          display: "inlinie-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px"
        }}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });

  //   console.log(ingredientsOutput);

  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientsOutput}</p>
      <p>
        Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default order;
