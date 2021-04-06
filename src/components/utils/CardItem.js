import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

function CardItem({children}) {
  return (
    <Card elevation={4} className="CardItem">
      <CardContent>
        {
          children
        }
      </CardContent>
    </Card>
  );
}

export default CardItem;
