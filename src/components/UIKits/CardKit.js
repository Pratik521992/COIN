import React from "react";
import Card from "@material-ui/core/Card";

function CardKit({children}) {
    return (
        <div className="CardWrapper">
            <h2 className="ActiveHeader">
                Statistics
            </h2>
            <Card className="CardKit">
                {children}
            </Card>
        </div>
    )
}

export default CardKit;
