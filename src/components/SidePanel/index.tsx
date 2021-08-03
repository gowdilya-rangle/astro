import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import { Theme } from "@material-ui/core/styles/createTheme";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import styled from "styled-components";
import space from './../../images/space.png';


const SidePanelDiv = styled.div`
  a {
    text-decoration: none;
  }
  .menu-button {
    color: white !important;
  }
  .MuiButtonBase-root {
    color: rgba(0, 0, 0, 0.87);
  }
`;

const StyledMain = styled.main`

    background-image: url(${space});


    height: 100%; 

    background-position: center;

    background-size: cover;
    z-index: 3;
    background-position: top;

`


const Container = styled.div`

min-height:100%;

`

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

type Props = {
  children: JSX.Element;
};

export default function SidePanel({ children }: Props) {
  const location = useLocation();
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <SidePanelDiv>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon className="menu-button" />
            </IconButton>
            <Typography variant="h4" noWrap>
              Astro - SpaceX Rocket Launch Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />

          <List className="primary-nav">
            <Link to="/">
              <ListItem
                button
                key={"Home"}
                selected={location.pathname === "/"}
              >
                <ListItemIcon>
                  <HomeIcon></HomeIcon>
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItem>
            </Link>

            <Link to="/dashboard">
              <ListItem
                button
                key={"Dashboard"}
                selected={location.pathname === "/dashboard"}
              >
                <ListItemIcon>
                  <AccountTreeIcon></AccountTreeIcon>
                </ListItemIcon>
                <ListItemText primary={"Dashboard"} />
              </ListItem>
            </Link>

            {/* <Link to="/currency">
              <ListItem
                button
                key={"Currency"}
                selected={location.pathname === "/currency"}
              >
                <ListItemIcon>
                  <MonetizationOnIcon></MonetizationOnIcon>
                </ListItemIcon>
                <ListItemText primary={"Currency"} />
              </ListItem>
            </Link> */}
          </List>

          <Divider />
        </Drawer>
        <StyledMain
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <Container>

          <div className={classes.drawerHeader} />
          <div>{children}</div>
          </Container>
        </StyledMain>
      </div>
    </SidePanelDiv>
  );
}
