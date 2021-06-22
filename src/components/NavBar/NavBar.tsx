import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import {
  Link,
  Toolbar,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import booking from "../NavBar/images/booking.svg";
import contract from "../NavBar/images/contract.svg";
import doctor from "../NavBar/images/doctor.svg";
import dashboard from "../NavBar/images/dashboard.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "#F8F9F9",
    boxShadow: "none",
  },
  menuButton: {
    marginRight: theme.spacing(1),
    color: "#364A61",
  },
  title: {
    display: "block",
    color: "#364A61",
    fontSize: "16px",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  appbar: {
    backgroundColor: "#F8F9F9",
    boxShadow: "none",
  },
  drawerPaper: {
    width: "100%",
    backgroundColor: "#042444",
  },
  closeMenuButton: {
    justifyContent: "end",
    color: "#7C8C9C",
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
    padding: "65px 10px 20px",
  },
  close: {
    paddingLeft: "10px",
    color: "#D1DAE6",
  },
  icon: {
    paddingRight: "10px",
  },
}));

const LINKS = [
  { label: "Dashboard", href: "", icon: dashboard },
  { label: "Treatments", href: "", icon: doctor },
  { label: "Bookings", href: "", icon: booking },
  { label: "Contract", href: "", icon: contract },
];
export default function NavBar(): JSX.Element {
  const [mobileOpen, setMobileOpen] = useState(false);
  const classes = useStyles();

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
    <div>
      <List className={classes.list}>
        {LINKS.map(({ label, href, icon }) => (
          <ListItem button key={label}>
            <img src={icon} alt="" className={classes.icon} />
            <Link href={href} target="_blank" className={classes.navLink}>
              <ListItemText primary={label} />
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color={"primary"}
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Menu
          </Typography>
        </Toolbar>
      </AppBar>
      <nav>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            // Better open performance on mobile. >
            ModalProps={{ keepMounted: true }}
          >
            <IconButton
              onClick={handleDrawerToggle}
              className={classes.closeMenuButton}
            >
              <CloseIcon />
              <Typography className={classes.close}>Close</Typography>
            </IconButton>
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}
