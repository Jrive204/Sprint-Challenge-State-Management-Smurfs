import React from "react";
// import "./App.css";
// import { useSelector } from "react-redux";
import SmurfGrid from "./SmurfGrid";
import SmurfForm from "./SmurfForm";

const App = () => {
  // const smurf = useSelector(state => state.smurf);

  return (
    <div className='App'>
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <SmurfForm />

      <SmurfGrid />
    </div>
  );
};

export default App;
