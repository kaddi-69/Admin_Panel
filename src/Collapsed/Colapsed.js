import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Ahgjvdg from "./Ahgjvdg";
import Ratting from './Ratting'
import './SAD.css'
import ClearAllIcon from '@mui/icons-material/ClearAll';


const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Ahgjvdg />
      </List>
      <Divider />
      <List>
      <Ratting/>
      </List>
    <Button variant="outlined" sx={{marginLeft:"50px"}} size="large" color="success"><ClearAllIcon/>Clear All</Button>
    </Box>

  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}  color="success">
          <Button onClick={toggleDrawer(anchor, true)}  color="success">{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
