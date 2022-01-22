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
          <img
            src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/62308/pakistan-flag-emoji-clipart-xl.png"
            id="sss"
          />
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
              <Paper>
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
                      <div className="Showww">
                        <div className="Show">
                          <div className="show1">
                            <img src="https://minimal-kit-react.vercel.app/static/icons/ic_flag_en.svg" />
                            <span style={{ marginLeft: "20px" }}>English</span>
                          </div>
                        </div>
                        <div className="Show">
                          <div className="show1">
                            <img src="https://minimal-kit-react.vercel.app/static/icons/ic_flag_fr.svg" />

                            <span style={{ marginLeft: "20px" }}>French</span>
                          </div>
                        </div>

                        <div className="Show">
                          <div className="show1">
                            <img src="https://minimal-kit-react.vercel.app/static/icons/ic_flag_de.svg" />

                            <span style={{ marginLeft: "20px" }}>German</span>
                          </div>
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
