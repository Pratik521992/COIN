import React from "react";
import Card from "@material-ui/core/Card";

function CardItem({ children, className }) {
  return (
    <Card elevation={4} className= {className ? className : `CardItem`}>
      {children}
    </Card>
  );
}

export default CardItem;
