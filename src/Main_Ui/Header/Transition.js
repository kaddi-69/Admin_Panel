import * as React from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import "./Header.css";
import Capture from "./Capture.PNG";

export default function MenuListComposition() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={2}>

      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <img src={Capture} id="s" />
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper sx={{ outline: "none" }}>
                <ClickAwayListener
                  onClickAway={handleClose}
                  sx={{ outline: "none" }}
                >
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                    sx={{ outline: "none" }}
                  >
                    <MenuItem onClick={handleClose}>
                      <div id="example-fade-textttt">
                        <div className="Showw">
                          <div className="show1222">
                            <div
                              style={{ fontSize: "20px", fontWeight: "500" }}
                            >
                              ALi Akram
                            </div>
                            <div style={{ marginBottom: "10px" }}>
                              info@aliakram.com
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            margin: "10px",
                            fontWeight: "700",
                            fontSize: "13px",
                          }}
                        >
                          NEW
                        </div>
                        <div className="Showww">
                          <div className="Show">
                            <div className="show1">
                              <HomeSharpIcon />
                              <span>Home</span>
                            </div>
                          </div>
                          <div className="Show">
                            <div className="show1">
                              <SettingsIcon />
                              <span>Profile</span>
                            </div>
                          </div>

                          <div className="Show">
                            <div className="show1">
                              <PersonIcon />
                              <span>Setting</span>
                            </div>
                          </div>
                          <Button variant="outlined" id="outline">
                            Outlined
                          </Button>
                        </div>
                      </div>
                    </MenuItem>
                    {/* <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem> */}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}
