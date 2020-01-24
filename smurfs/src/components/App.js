import React from "react";
import "./App.css";
// import { useSelector } from "react-redux";
import SmurfGrid from "./SmurfGrid";

const App = () => {
  // const smurf = useSelector(state => state.smurf);

  return (
    <div className='App'>
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>

      <SmurfGrid />
    </div>
  );
};

export default App;
