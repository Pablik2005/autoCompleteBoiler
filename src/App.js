import './App.css';
import React, { useEffect } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { useSelector,useDispatch } from 'react-redux';
import { setData } from './reducer/namesActions';



function  App () {

  const dispatch = useDispatch();
  const data = useSelector(state =>state.data)

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then( post => {
      dispatch(setData(post));
    })
  });

    return (
      <div className="App">

      <Grid container direction="row" justify="center" alignItems="center">

        <div style={{width: 300}}>
          <Autocomplete
            options={data.map((option) => option.name)}
            renderInput={(params) => (
              <TextField  {...params} label="Name" variant="outlined"  />
            )}
          />
        </div>

        <Button variant="contained" color="primary" style={{height: 56}}> Submit </Button>      

      </Grid>
      </div>
    );
  
}

export default App;