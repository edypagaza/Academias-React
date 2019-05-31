import React, { useState, useEffect } from 'react';
import PostContainer from './PostContainer';
import Form from './Form';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import '../styles/style.css';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import LinkIcon from '@material-ui/icons/Link';

import Header from  '../components/Header';

function App() {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  const [ postArray, setPostArray ] = useState( [] ); 

  useEffect( () => {
    axios.get('https://private-c3edb-postsmock.apiary-mock.com/posts').
    then( response => setPostArray( response.data ) )
  }, []);

    const filterButton = { borderRadius: 2,
      borderWidth: 0,
      color: "#FFF"
    };
    const categories = [
      {
        value: 'travel',
        label: 'Travel',
      },
      {
        value: 'lifestyle',
        label: 'lifestyle',
      },
      {
        value: 'business',
        label: 'Business',
      },
      {
        value: 'food',
        label: 'Dood',
      },
      {
        value: 'work',
        label: 'Work',
      },
    ];
    function TextFields() {
      const [values, setValues] = React.useState({
        category: 'All',
      });
    }
  return (
    <div className="App">
      <Grid container spacing={1}>
        <Header />

        <PostContainer posts={postArray}/>
        
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" style={{textAlign: "center"}}>Create Post</DialogTitle>
        <DialogContent>
          <TextField
          required
          id="title"
          label="Title"
          defaultValue=""
          type="text"
          margin="normal"
          fullWidth
          />
          <TextField
          required
          id="shortDescription"
          label="Short Description"
          defaultValue=""
          type="text"
          margin="normal"
          fullWidth
          />
          <TextField
          required
          id="description"
          label="Description"
          defaultValue=""
          type="text"
          margin="normal"
          fullWidth
          multiline
          rowsMax="4"
          />
        <Grid container spacing={1} alignItems="flex-end">
          
          <Grid item xs={11}>
            <TextField id="input-with-icon-grid" label="With a grid" fullWidth required/>
          </Grid>
          <Grid item xs={1}>
            <LinkIcon />
          </Grid>
        </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>




      </Grid>
    </div>
  );
}

export default App;