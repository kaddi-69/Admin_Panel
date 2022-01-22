import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import SearchIcon from "@mui/icons-material/Search";
import Button from "mui-button";
import Transition from "./Transition";
import TransitionTwo from "./TransitionTwo";
import TransitionThree from "./TransitionThree";
import "./Header.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Collapse } from '@mui/material';

export default function Example() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="iod">
      <div className="open__bar1">
      <SearchIcon
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        sx={{color:"rgba(56, 58, 58, 800)"}}
      />
        <div className="sufbi">
          <TransitionThree />
          <Transition />
          <TransitionTwo />
        </div>
      </div>
      <Collapse in={open}>
      <div className="open__bar">
        <SearchIcon />
        <input type="text" id="test"/>
        <Button variant="contained" id="btn">
          Search
        </Button>
      </div>
      </Collapse>
    </div>
  );
}