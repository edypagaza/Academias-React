import React from 'react';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LinkIcon from '@material-ui/icons/Link';
import shortid from 'shortid';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import { Typography } from '@material-ui/core';

export default function PostModal( props ){  
  function updateFormInput ( e ){
    let newId = props.formInput.Id || shortid.generate();
    props.setFormInput({...props.formInput, [e.target.id]: e.target.value, id: newId});
    
  }
  const [values, setValues] = React.useState({
    category: 'All',
  });
  const handleChange = props => e => {
    setValues({ ...props.formInput, [e.target.id]: e.target.value });
  };
  // function createPost(){
  //   props.handleAddPost(props.formInput);
  //   props.setFormInput(props.emptyPost);
  //   props.modalClose();
  //   props.handleEditing(false);
  // }
  function cancelEdit(){
    // if (props.editing) {
    //   props.handleEditing(false);   
    //   createPost();
    // } else {
      props.modalClose()
    }
  // }
  const categories = [
    {
      value: 'all',
      label: 'All',
    },
    {
      value: 'travel',
      label: 'Travel',
    },
    {
      value: 'lifestyle',
      label: 'Lifestyle',
    },
    {
      value: 'business',
      label: 'business',
    },
    {
      value: 'food',
      label: 'Food',
    },
    {
      value: 'work',
      label: 'Work',
    },
  ];
  return (
    <Modal open={props.modalOpen}>
      <Grid   container
              direction="row"
              justify="center"
              alignItems="center" 
              style={{position: 'absolute',
              top: '100px'}}>
      <form style={{backgroundColor: 'white', textAlign: 'left', width: '600px', padding: '25px', borderRadius: '5px'}}>
        <Typography variant='h6' style ={{textAlign: 'center'}}>Create Post</Typography>
        <TextField
          id="title"
          label="Title"
          value={props.formInput.title}
          // onChange={(e) => updateFormInput(e)} 
          fullWidth
          required
        />
        <TextField
          id="shortDescription"
          label="Short Description"
          value={props.formInput.shortDescription}
          // onChange={(e) => updateFormInput(e)}
          fullWidth
          required
        />
        <TextField
          id="description"
          label="Description"
          value={props.formInput.description}
          // onChange={(e) => updateFormInput(e)}
          fullWidth
          required
        />
          <TextField
            id="category"
            select
            label="Category"
            style={{marginTop: '15px'}}
            value={props.formInput.category}
            onChange={handleChange('category')}
            // onChange={ (e) => updateFormInput(e) }
            fullWidth
            required
        >
        {categories.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
        </TextField>
        <Grid item xs={12}>
        <TextField
          id="image"
          label="Image URL"
          value={props.formInput.image}
          onChange={(e) => updateFormInput(e)}
          fullWidth
          required
        />
        <LinkIcon />
        </Grid>
        <div style={{textAlign: 'right', padding: '15px'}}>
          <Button onClick={cancelEdit} color="primary" > Cancel </ Button>
          <Button /*onClick={createPost}*/ variant="contained" color="primary"> Add </ Button>
        </div>
      </form>
      </ Grid>
    </Modal>
  )
}