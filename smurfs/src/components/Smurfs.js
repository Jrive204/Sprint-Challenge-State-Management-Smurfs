import React from "react";
import { Card, CardBlock, CardTitle, CardText } from "@bootstrap-styled/v4";

const Smurfs = props => {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}>
      <Card width='15rem'>
        <CardBlock>
          <CardTitle>{props.smurf.name}</CardTitle>
          <CardText>{props.smurf.age}</CardText>
          <CardText>{props.smurf.height} </CardText>
        </CardBlock>
      </Card>
    </div>
  );
};

export default Smurfs;
