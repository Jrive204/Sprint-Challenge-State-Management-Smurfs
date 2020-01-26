import React from "react";
import { Card, CardBlock, CardTitle, CardText } from "@bootstrap-styled/v4";
// import { useDispatch } from "react-redux";

const Smurfs = props => {
  // const dispatch = useDispatch();
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}>
      {!props.state.editing ? (
        <Card width='15rem'>
          <CardBlock>
            <CardTitle>{props.smurf.name}</CardTitle>
            <CardText>age: {props.smurf.age}</CardText>
            <CardText>height: {props.smurf.height} </CardText>
          </CardBlock>
        </Card>
      ) : (
        <Card width='15rem'>
          <CardBlock>
            <CardTitle>{props.smurf.name}</CardTitle>
            <CardText>age: {props.smurf.age}</CardText>
            <CardText>height: {props.smurf.height} </CardText>
            <CardText>ID: {props.smurf.id}</CardText>
          </CardBlock>
        </Card>
      )}
    </div>
  );
};

export default Smurfs;
