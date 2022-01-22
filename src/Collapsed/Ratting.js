import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import './SAD.css'

export default function BasicRating() {
  const [value, setValue] = React.useState(2);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
      id="hfbinic"
    >
      <Typography component="legend">Rating</Typography>
      <div className="nnn"><Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />&nbsp;<span>& Up</span></div>
     <div className="nnn"> <Rating name="read-only" value={value} readOnly />&nbsp;<span>& Up</span></div>
     <div className="nnn"> <Rating name="disabled" value={value} disabled />&nbsp;<span>& Up</span></div>
     <div className="nnn"> <Rating name="no-value" value={null} />&nbsp;<span>& Up</span></div>
     
     <RadioGroup
        defaultValue="female"
        name="radio-buttons-group"
        id="dsfd"
        color="success"
      >
     <FormLabel id="demffo">Category</FormLabel>
        <FormControlLabel value="female" control={<Radio />} label="All" color="success"/>
        <FormControlLabel value="male" control={<Radio />} label="Shose" color="success"/>
        <FormControlLabel value="other" control={<Radio />} label="Apparel" color="success"/>
        <FormControlLabel value="other" control={<Radio />} label="Accessories" color="success"/>
        </RadioGroup>
      
    </Box>
  );
}
