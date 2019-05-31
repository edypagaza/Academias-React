import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FilterMenu from  '../components/FilterMenu';

export default function Header(props){

  return(
    <div style={{margin: "0 auto"}}>
      <Grid item xs={12} align="center">
        <Typography style={{color: 'coral', padding: '35px 0 15px 0', margin: "8px"}}><font size="+2" >[</font>Making your Life Easier<font size="+2" >]</font></ Typography>
        <Typography variant="h1" style={{fontSize: '40px', margin: "16px"}}>Discovering the World</ Typography>
        <FilterMenu style={{margin: "24px"}}/>
      </Grid>
    </div>
  );
}