import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { useEthers } from "@usedapp/core";
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "None",
    color: "black",
  },
  burger: {
    color: "white",
  }
}));

const Navbar = (props) => {

  const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };
  const { account, activateBrowserWallet, deactivate } = useEthers()
    const isConnected = account !== undefined
  const classes = useStyles();

  return (
  <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            
              
            <Button className={classes.burger} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <MenuIcon />
          </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          
          <Link className={classes.link} to="/">
          <MenuItem onClick={handleClose}>Home</MenuItem>
          </Link>
          <Link className={classes.link} to="/create-items">
          <MenuItem onClick={handleClose}>Create</MenuItem>
          </Link>
          <Link className={classes.link} to="/purchased">
          <MenuItem onClick={handleClose}>Purchased NFTs</MenuItem>
          </Link>
          <Link className={classes.link} to="/dashboard">
          <MenuItem onClick={handleClose}>Dashboard</MenuItem>
          </Link>
          
        </Menu>
            
            <Typography variant="h6" className={classes.title}>
              N.F.M
            </Typography>
            {isConnected ? (
                <Button color="inherit" onClick={deactivate}>
                    Disconnect
                </Button>
            ) : (
                <Button
                  color="inherit"
                    onClick={activateBrowserWallet}
                >
                    Connect
                </Button>
            )}
          </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar;