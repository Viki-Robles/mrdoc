import React, { useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemText, IconButton } from "@material-ui/core";
import booking from "../NavBar/images/booking.svg";
import contract from "../NavBar/images/contract.svg";
import doctor from "../NavBar/images/doctor.svg";
import dashboard from "../NavBar/images/dashboard.svg";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  menubutton: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  nav: {
    backgroundColor: "#042444",
    height: "100vh",
    [theme.breakpoints.down("xs")]: {
      width: "50%",
      position: "absolute",
    },
  },
  navLink: {
    color: "#D1DAE6",
    padding: "0 8px",
    lineHeight: "25px",
    fontSize: "16px",
    textDecoration: "none",
    display: "inline-block",
    margin: "0px 0px 0px 15px",
  },
  list: {
    padding: "220px 20px 20px",
  },
  icon: {
    paddingRight: "10px",
  },
}));

const LINKS = [
  { label: "Dashboard", href: "/dashboard", icon: dashboard },
  { label: "Treatments", href: "/treatments", icon: doctor },
  { label: "Bookings", href: "/bookings", icon: booking },
  { label: "Contract", href: "", icon: contract },
];
export default function NavBar(): JSX.Element {
  const [mobileOpen, setMobileOpen] = useState(false);
  const classes = useStyles();

  return (
    <Fragment>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        className={classes.menubutton}
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <MenuIcon />
      </IconButton>
      {!mobileOpen && (
        <nav className={classes.nav}>
          <List className={classes.list}>
            {LINKS.map(({ label, href, icon }) => (
              <ListItem button key={label}>
                <img src={icon} alt="" className={classes.icon} />
                <Link to={href} className={classes.navLink}>
                  <ListItemText primary={label} />
                </Link>
              </ListItem>
            ))}
          </List>
        </nav>
      )}
    </Fragment>
  );
}
