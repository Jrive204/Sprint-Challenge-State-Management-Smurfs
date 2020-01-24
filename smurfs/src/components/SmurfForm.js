import React, { useState } from "react";
import { Form, Input, Label, Button, FormGroup } from "@bootstrap-styled/v4";
import { useDispatch } from "react-redux";
import { sendSmurfs } from "./actions/fetchSmurfs";

const SmurfForm = () => {
  const [smurf, setSmurf] = useState({ name: "", age: 0, height: "" });
  const dispatch = useDispatch();

  const handlechange = e => {
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    return (
      e.preventDefault(),
      dispatch(sendSmurfs(smurf)),
      setSmurf({ name: "", age: "", height: "" })
    );
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup classname='mr-2'>
          <Label hidden>
            Smurf name: &nbsp;
            {console.log(smurf, "smurf")}
            <Input
              type='text'
              name='name'
              onChange={handlechange}
              placeholder='Smurf name'
            />
          </Label>
        </FormGroup>
        <FormGroup classname='mr-2'>
          <Label hidden>
            Smurf age: &nbsp; &nbsp; &nbsp;
            <Input
              type='text'
              name='age'
              onChange={handlechange}
              placeholder='Smurf age'
            />
          </Label>
        </FormGroup>
        <FormGroup classname='mr-2'>
          <Label hidden>
            Smurf height: &nbsp;
            <Input
              type='text'
              name='height'
              onChange={handlechange}
              placeholder='Smurf height'
            />
          </Label>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default SmurfForm;
