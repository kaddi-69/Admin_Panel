import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import './SAD.css'

export default function RadioButtonsGroup() {
  return (
    <FormControl id="jyyfjb" color="success" >
      <FormLabel id="demo-radio-buttons-group-label">Filters</FormLabel>

      <RadioGroup
        defaultValue="female"
        name="radio-buttons-group"
        id="jyydffjb"
        color="success"
      >
      <FormLabel id="demo">Gender</FormLabel>
        <FormControlLabel value="female" control={<Radio />} label="Female" color="success"/>
        <FormControlLabel value="male" control={<Radio />} label="Male" color="success"/>
        <FormControlLabel value="other" control={<Radio />} label="Other" color="success"/>
        <FormLabel id="demffo">Category</FormLabel>
        <FormControlLabel value="female" control={<Radio />} label="All" color="success"/>
        <FormControlLabel value="male" control={<Radio />} label="Shose" color="success"/>
        <FormControlLabel value="other" control={<Radio />} label="Apparel" color="success"/>
        <FormControlLabel value="other" control={<Radio />} label="Accessories" color="success"/>
      </RadioGroup>
      
    </FormControl>
  );
}
