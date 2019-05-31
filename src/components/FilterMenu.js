import React from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Grid from '@material-ui/core/Grid';

export default function FilterMenu ( props ) {
  const handleChange = (event, newFilter) => {
    //props.handleFilterChange(newFilter);
  };
  const children = [
    <ToggleButton key={1} value="All">
      All
    </ToggleButton>,
    <ToggleButton key={2} value="travel">
      Travel
    </ToggleButton>,
    <ToggleButton key={3} value="lifestyle">
      Lifestyle
    </ToggleButton>,
    <ToggleButton key={4} value="business">
      Business
    </ToggleButton>,
    <ToggleButton key={5} value="food">
      Food
    </ToggleButton>,
    <ToggleButton key={6} value="work">
      Work
    </ToggleButton>,
  ];
  return(
    <div>
    <Grid item xs={12}>
      <ToggleButtonGroup value={props.currentFilter} exclusive onChange={handleChange}>
        {children}
      </ToggleButtonGroup>
    </Grid>
    </div>
  );
}