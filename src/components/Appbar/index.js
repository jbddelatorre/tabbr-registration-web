import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1,
    textDecoration:'none'
  },
  appbarButton: {
    marginLeft: 12,
    marginRight: 12,
    paddingLeft: 12,
    paddingRight: 12
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <AppBar position="static"
       >
      <Toolbar>
        <Typography 
          component={Link}
          to="/"
          variant="h6" 
          color="inherit" 
          className={classes.root}>
          Registration
        </Typography>
        <Button
          component={Link}
          to="/register"
          color="inherit" 
          className={classes.appbarButton}>
            Register Team
        </Button>
        <Button
          component={Link}
          to="/view" 
          color="inherit" 
          className={classes.appbarButton}>
            View Registration
        </Button>
      </Toolbar>
    </AppBar>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);