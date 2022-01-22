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
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from "@mui/icons-material/Settings";
import "./Header.css";
import Capture from "./Capture.PNG";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

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
        <NotificationsActiveIcon  sx={{color:"black"}}/>
         
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
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={handleClose}>
                      <div id="example-fade-textt">
                        <div className="Showw">
                          <div className="show12">
                            <div
                              style={{ fontSize: "20px", fontWeight: "500" }}
                            >
                              Notifications
                            </div>
                            <div style={{ marginBottom: "10px" }}>
                              You have 2 unread messages
                            </div>
                          </div>
                        </div>
                        <div className="Showww">
                          <div
                            style={{
                              margin: "10px",
                              fontWeight: "700",
                              fontSize: "13px",
                            }}
                          >
                            NEW
                          </div>

                          <div className="show123">
                            <div className="an_other">
                              <img
                                src="https://minimal-kit-react.vercel.app/static/icons/ic_notification_package.svg"
                                id="pkk"
                              />
                            </div>
                            <div className="other">
                              <span
                                style={{ fontWeight: "700", fontSize: "13px" }}
                              >
                                Your order Is placed
                              </span>
                              &nbsp;waiting for your shiping <br />
                              <AccessTimeIcon sx={{ fontSize: "13px" }} /> about
                              8hours
                            </div>
                          </div>

                          <div className="show123">
                            <div className="an_other">
                              <img
                                src={Capture}
                                id="pkk"
                                style={{ borderRadius: "100px" }}
                              />
                            </div>
                            <div className="other">
                              <span
                                style={{ fontWeight: "700", fontSize: "13px" }}
                              >
                                You have new mail
                              </span>
                              &nbsp;sent from Kawish <br />
                              <AccessTimeIcon sx={{ fontSize: "13px" }} /> about
                              2 days
                            </div>
                          </div>
                        </div>

                        <div className="Showww">
                          <h3
                            style={{
                              margin: "10px",
                              fontWeight: "700",
                              fontSize: "13px",
                            }}
                          >
                            BEFORE THAT
                          </h3>
                          <div className="show123">
                            <div className="an_other">
                              <img
                                src="https://minimal-kit-react.vercel.app/static/icons/ic_notification_shipping.svg"
                                id="pkk"
                              />
                            </div>
                            <div className="other">
                              <span
                                style={{ fontWeight: "700", fontSize: "13px" }}
                              >
                                Dilivery processing
                              </span>
                              &nbsp;your order is being processing <br />
                              <AccessTimeIcon sx={{ fontSize: "13px" }} /> about
                              2 days
                            </div>
                          </div>

                          <div className="show123">
                            <div className="an_other">
                              <img
                                src="https://minimal-kit-react.vercel.app/static/icons/ic_notification_mail.svg"
                                id="pkk"
                                style={{ borderRadius: "100px" }}
                              />
                            </div>
                            <div className="other">
                              <span
                                style={{ fontWeight: "700", fontSize: "13px" }}
                              >
                                You have new mail
                              </span>
                              &nbsp;sent from Kawish <br />
                              <AccessTimeIcon sx={{ fontSize: "13px" }} /> about
                              2 days
                            </div>
                          </div>
                          <div className="show123">
                            <div className="an_other">
                              <img
                                src="https://minimal-kit-react.vercel.app/static/icons/ic_notification_chat.svg"
                                id="pkk"
                              />
                            </div>
                            <div className="other">
                              <span
                                style={{ fontWeight: "700", fontSize: "13px" }}
                              >
                                You have new message
                              </span>
                              &nbsp;5 unread messages <br />
                              <AccessTimeIcon sx={{ fontSize: "13px" }} /> about
                              1 day ago
                            </div>
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
