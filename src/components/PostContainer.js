import React, {useState} from 'react';
import Posts from './Posts';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/Add';
import PostModal from './PostModal';
import shortid from 'shortid';

export default function PostContainer( props ) {
  const newPostStyle = {
    position: 'fixed',
    top: '135px',
    right: '20px',
    zIndex: '999'
  };
  const emptyPost = {
    id: shortid.generate(),
    title: '',
    shortDescription: '',
    description: '',
    category: 'all',
    image: '',
    comments: []
  };
  const [ modalState, setModalState ] = useState(false);
  const [ formInput, setFormInput] = useState(emptyPost);
  const [ editing, setEditing ] = useState( false );
  
  const openPostModal = ( ) => setModalState(true);
  const closePostModal = ( ) => setModalState(false);


  return (
    <div>
      <Fab color="secondary"  aria-label="Edit" style={newPostStyle} onClick={openPostModal} >
        <AddIcon></AddIcon>
      </Fab>
      <Grid container direction="row" > 
        <Posts posts={props.posts} />
      </Grid>
      <PostModal modalOpen={modalState} 
                  modalClose={closePostModal} 
                  handleAddPost={props.handleAddPost} 
                  formInput={formInput} 
                  setFormInput={setFormInput}
                  emptyPost={emptyPost}
                  editing={editing}
                  handleEditing={setEditing}
      />
    </div>
  );
}