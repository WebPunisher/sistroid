import React from 'react';
// import {Switch,Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import Avatar from '@material-ui/core/Avatar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ColorizeIcon from '@material-ui/icons/Colorize';
import ClassIcon from '@material-ui/icons/Class';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import EqualizerIcon from '@material-ui/icons/Equalizer';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  // a:{

  // },
  avatar: {
    // marginTop: 10,
    width: 26,
    height:26,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    paddingLeft:7
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
    paddingLeft:7
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Drawere = ()  => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const logout = () => {
    sessionStorage.setItem('token', 0)
    sessionStorage.setItem('id', 0)
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
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
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
              Sistroid Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        

        <Divider />
        <List>
        
          <Link to="/dashboard/profile" >
            <ListItem button>
                <ListItemIcon><AccountBoxIcon /></ListItemIcon>
                <ListItemText primary="Profile" />
            </ListItem>
          </Link>
          <Link to="/dashboard/ranking" >
            <ListItem button>
                <ListItemIcon><ColorizeIcon /></ListItemIcon>
                <ListItemText primary="Rankings" />
            </ListItem>
          </Link>
          <Link to="/dashboard/myclasses" >
            <ListItem button>
                <ListItemIcon><ClassIcon /></ListItemIcon>
                <ListItemText primary="My Classes(" />
            </ListItem>
          </Link>
          <Link to="/dashboard/gpa_mentor" >
            <ListItem button>
                <ListItemIcon><AssignmentTurnedInIcon/></ListItemIcon>
                <ListItemText primary="GPA Mentor" />
            </ListItem>
          </Link>
          <Link to="/dashboard/add_drop" >
            <ListItem button>
                <ListItemIcon><AddCircleIcon/></ListItemIcon>
                <ListItemText primary="Add / Drop" />
            </ListItem>
          </Link>
          <Link to="/dashboard/histogram" >
            <ListItem button>
                <ListItemIcon><EqualizerIcon/></ListItemIcon>
                <ListItemText primary="Histogram" />
            </ListItem>
          </Link>
          
        </List>
        <Divider />
        <Link to="/" >
            <ListItem button onClick={logout}>
                <ListItemIcon><ExitToAppIcon/></ListItemIcon>
                <ListItemText primary="Sign Out" />
            </ListItem>
          </Link>
      </Drawer>
      
    </div>
  );
}

export default Drawere;