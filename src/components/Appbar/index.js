import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MediaQuery from 'react-responsive';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ResponsiveToolbar from '../Container/Toolbar'
import NavigationMenu from './NavigationMenu'
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
        { this.props.isLoading ? <LinearProgress variant="query" color="secondary" /> : <LinearProgress variant="query" color="white" /> }
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