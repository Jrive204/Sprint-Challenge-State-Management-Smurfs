import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSmurfs } from "./actions/fetchSmurfs";
import Loader from "react-loader-spinner";
import Smurfs from "./Smurfs";

const SmurfGrid = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSmurfs());
  }, [dispatch]);

  return (
    <div>
      {!state.smurfs && !state.isloading && <h2>Waiting on the Smurfs ... </h2>}

      {state.isloading && (
        <Loader
          type='BallTriangle'
          color='#00BFFF'
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      )}

      {state.smurfs && !state.isloading && (
        <div className='smurfs'>
          {state.smurfs.map(smurf => (
            <Smurfs key={smurf.id} smurf={smurf} />
          ))}
        </div>
      )}
      {console.log(state, "smurf")}
    </div>
  );
};

export default SmurfGrid;
