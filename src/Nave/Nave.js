import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Search from './Search'
import './Nave.css'
import { Grid } from '@mui/material';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      width={200}
      sm={6}
      md={6}
      lg={6}
     
      onKeyDown={toggleDrawer(anchor, false)}
      id='ggggggg'
    >

      <List>
      
          <ListItem>
            <ListItemIcon>
          <Search />
            </ListItemIcon>
          </ListItem>

      </List>
    </Box>
  );

  return (
    <div >
      {['top'].map((anchor) => (
        <React.Fragment key={anchor} id='ggggggg' >
          <Button onClick={toggleDrawer(anchor, true)} >{anchor}</Button>
          <Grid container spacing={2}>
          <Grid item sm={6} md={6} lg={6}>


          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          
          
          >
            {list(anchor)}
          </Drawer>
          </Grid>
          </Grid>
        </React.Fragment>
      ))}
    </div>
  );
}
