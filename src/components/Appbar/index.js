import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import ResponsiveToolbar from '../Container/Toolbar'

import Container from '../Container';
import NavigationMenu from './NavigationMenu'

import MediaQuery from 'react-responsive';

import { connect } from 'react-redux';

import LinearProgress from '@material-ui/core/LinearProgress';

const styles = {
  root: {
    flexGrow: 1,
    textDecoration:'none'
  },
  appbarButton: {
    marginLeft: 6,
    marginRight: 6,
    paddingLeft: 6,
    paddingRight: 6
  },
  toolbar: {
    width:'100%',
    ['@media (min-width:780px)']: { // eslint-disable-line no-useless-computed-key
      width: '66.67%',
    }
  }
};

class ButtonAppBar extends Component {

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <AppBar position="static"
         >
          <ResponsiveToolbar>
              <Typography 
                component={Link}
                to="/"
                variant="h6" 
                color="inherit" 
                className={classes.root}>
                Registration
              </Typography>

              <MediaQuery query="(min-device-width: 700px)">
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
              </MediaQuery>

              <MediaQuery query="(max-device-width: 700px)">
                <NavigationMenu />  
              </MediaQuery>

          </ResponsiveToolbar>
          
        </AppBar>
        { this.props.isLoading ? <LinearProgress variant="query" color="secondary" /> : null }
      </Fragment>
    );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isLoading: state.app.isLoading
})

export default connect(mapStateToProps)(withStyles(styles)(ButtonAppBar));