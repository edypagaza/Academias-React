import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import LinkIcon from '@material-ui/icons/Link';

export default function CardGenerator( props ) {

  const [openEditPost, setOpenEditPost] = React.useState(false);

  const cardStyle = { borderRadius: 0,
                      borderWidth: 0,
                      color: "#FFF"
                    };
  const cardContentStyle = {
                            position: "absolute", 
                            padding: "30px", 
                            bottom: "0"
                           };

  function handleClickOpenEditPost(index) {

    setOpenEditPost(true);
  }

  function handleCloseEditPost() {
    // const [ postArray, setPostArray ] = useState( [] ); 
    setOpenEditPost(false);
  }
  return props.posts.map( (post, index) => (
    <Grid item xs={6}> 
      <Card style={cardStyle}>
        <CardActionArea>
          <CardMedia component="img" height="340" src={post.image}/>
            <CardContent style={cardContentStyle} className="shadowText">
              <Typography variant="h4">{post.title}</Typography>
              <Typography >{`${post.comments.length} comments`}</Typography>
              <Typography paragraph>{post.shortDescription}</Typography>
              <Typography style={{textTransform: 'uppercase', fontWeight: 'bold'}}>{post.category}</Typography>
              <Button size="small" color="primary" style={{borderRadius: "50%"}} ><DeleteIcon style={{color: "#FFF"}} /></Button>
              <Button size="small" color="primary"><EditIcon style={{color: "#FFF"}} onClick={ () => handleClickOpenEditPost(index)}/></Button>
            </CardContent>
          </CardActionArea>
      </Card>
      
      <Dialog open={openEditPost} onCloseEditPost={handleCloseEditPost} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" style={{textAlign: "center"}}>Edit Post</DialogTitle>
        <DialogContent>
          <TextField
          required
          id="title"
          label="Title"
          defaultValue={post.title}
          type="text"
          margin="normal"
          fullWidth
          />
          <TextField
          required
          id="shortDescription"
          label="Short Description"
          defaultValue={post.shortDescription}
          type="text"
          margin="normal"
          fullWidth
          />
          <TextField
          required
          id="description"
          label="Description"
          defaultValue={post.description}
          type="text"
          margin="normal"
          fullWidth
          multiline
          rowsMax="4"
          />
        <Grid container spacing={1} alignItems="flex-end">
          
          <Grid item xs={11}>
            <TextField id="input-with-icon-grid" label="With a grid" fullWidth required defaultValue={post.image}/>
          </Grid>
          <Grid item xs={1}>
            <LinkIcon />
          </Grid>
        </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditPost} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCloseEditPost} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
    
  ));
}