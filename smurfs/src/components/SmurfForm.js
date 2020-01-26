import React from "react";
import { Form, Input, Label, Button, FormGroup } from "@bootstrap-styled/v4";
import { useDispatch, useSelector } from "react-redux";
import { sendSmurfs, editSmurfs, killSmurfs } from "./actions/fetchSmurfs";
import { EDITING_STATE, FORM_STATE } from "./reducers";

const SmurfForm = () => {
  const smurf = useSelector(state => state.smurf);
  //   const [smurf, setSmurf] = useState({
  //     name: "",
  //     age: 0,
  //     height: "",
  //     id: 0
  //   });

  const checkname = useSelector(state => state.smurfs);
  const editing = useSelector(state => state.editing);
  const dispatch = useDispatch();
  let doesIdExist = checkname.map(ele => ele.id);
  let doesnameExist = checkname.map(ele => ele.name);

  const handlechange = e => {
    // setSmurf({ ...smurf, [e.target.name]: e.target.value });
    dispatch({ type: FORM_STATE, name: e.target.name, value: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (doesnameExist.includes(smurf.name)) {
      return alert("Name already exist");
    } else {
      return (
        dispatch(sendSmurfs(smurf)) &
        // setSmurf({ name: "", age: "", height: "" }) &
        document.getElementById("bigForm").reset()
      );
    }
  };

  const handleformEdit = e => {
    e.preventDefault();

    console.log(doesIdExist.includes(Number(smurf.id)), "INCLUDES TEST ID");

    if (doesIdExist.includes(Number(smurf.id)) === true) {
      return (
        dispatch(editSmurfs(smurf, smurf.id)) &
        document.getElementById("editForm").reset() &
        dispatch({ type: EDITING_STATE })
      );
    } else {
      return alert("ID Doesnt exist, please try again");
    }
  };

  const handleformDelete = e => {
    e.preventDefault();

    console.log(doesIdExist.includes(Number(smurf.id)), "INCLUDES TEST ID");

    if (doesIdExist.includes(Number(smurf.id)) === true) {
      return (
        dispatch(killSmurfs(smurf, smurf.id)) &
        document.getElementById("editForm").reset() &
        dispatch({ type: EDITING_STATE })
      );
    } else {
      return alert("ID Doesnt exist, please try again");
    }
  };

  return (
    <div>
      {!editing ? (
        <Form id='bigForm' onSubmit={handleSubmit}>
          <FormGroup className='mr-2'>
            <Label hidden>
              Smurf name: &nbsp;
              {console.log(smurf, "smurf")}
              {/* {console.log(testsmurf, "testSmurf")} */}
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
                required
                minLength='1'
                type='number'
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
                required
                minLength='1'
                type='text'
                name='height'
                onChange={handlechange}
                placeholder='Smurf height'
              />
            </Label>
          </FormGroup>
          <Button type='submit'>Submit</Button>
          <Button
            color='warning'
            onClick={() => dispatch({ type: EDITING_STATE })}>
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
                type='number'
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
                style={{ width: "25%" }}
                required
                minLength='1'
                type='number'
                name='id'
                onChange={handlechange}
                placeholder='ID'
              />
            </Label>
          </FormGroup>
          <Button color='danger' onClick={handleformDelete}>
            Delete
          </Button>
          <Button type='submit' onClick={handleformEdit}>
            Submit
          </Button>
          <Button
            color='warning'
            onClick={() => dispatch({ type: EDITING_STATE })}>
            Cancel
          </Button>
        </Form>
      )}
    </div>
  );
};

export default SmurfForm;
