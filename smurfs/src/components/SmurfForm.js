import React, { useState } from "react";
import { Form, Input, Label, Button, FormGroup } from "@bootstrap-styled/v4";
import { useDispatch, useSelector } from "react-redux";
import { sendSmurfs, editSmurfs } from "./actions/fetchSmurfs";

const SmurfForm = () => {
  const [smurf, setSmurf] = useState({
    name: "",
    age: 0,
    height: "",
    id: 0
  });
  const [editing, setEditing] = useState(false);

  const checkname = useSelector(state => state.smurfs);
  const dispatch = useDispatch();

  const handlechange = e => {
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    let doesnameExist = checkname.map(ele => ele.name);
    console.log(doesnameExist, "name");
    console.log(smurf.name, "the check");

    if (doesnameExist.includes(smurf.name)) {
      return alert("Name already exist");
    } else {
      return (
        dispatch(sendSmurfs(smurf)) &
        setSmurf({ name: "", age: "", height: "" }) &
        document.getElementById("bigForm").reset()
      );
    }
  };

  const handleformEdit = e => {
    return (
      e.preventDefault() &
      dispatch(editSmurfs(smurf, smurf.id)) &
      document.getElementById("editForm").reset() &
      setEditing(false)
    );
  };

  return (
    <div>
      {!editing ? (
        <Form id='bigForm' onSubmit={handleSubmit}>
          <FormGroup className='mr-2'>
            <Label hidden>
              Smurf name: &nbsp;
              {console.log(smurf, "smurf")}
              <Input
                required
                minLength='2'
                type='text'
                name='name'
                onChange={handlechange}
                placeholder='Smurf name'
              />
            </Label>
          </FormGroup>
          <FormGroup className='mr-2'>
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
          <FormGroup className='mr-2'>
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
          <Button type='submit'>Submit</Button>
          <Button color='warning' onClick={() => setEditing(true)}>
            EDIT
          </Button>
        </Form>
      ) : (
        <Form id='editForm'>
          <FormGroup className='mr-2'>
            <Label hidden>
              Smurf name: &nbsp;
              {console.log(smurf, "smurf")}
              <Input
                required
                minLength='2'
                type='text'
                name='name'
                onChange={handlechange}
                placeholder='Smurf name'
              />
            </Label>
          </FormGroup>
          <FormGroup className='mr-2'>
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
          <FormGroup className='mr-2'>
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
          <FormGroup className='mr-2'>
            <Label hidden>
              Smurf ID: &nbsp;
              <Input
                required
                minLength='1'
                type='number'
                name='id'
                onChange={handlechange}
                placeholder='Smurf ID'
              />
            </Label>
          </FormGroup>
          <Button type='submit' onClick={handleformEdit}>
            Submit
          </Button>
          <Button color='warning' onClick={() => setEditing(false)}>
            Cancel
          </Button>
        </Form>
      )}
    </div>
  );
};
//         <Button color='warning' onClick={() => dispatch(editSmurfs(smurf, smurf.id))}>

export default SmurfForm;
