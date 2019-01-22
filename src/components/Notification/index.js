import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import Snackbar from '@material-ui/core/Snackbar';

import { withStyles } from '@material-ui/core/styles';

import MySnackbarContentWrapper from './SnackbarContent'

const styles2 = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
});

class CustomizedSnackbars extends Component {
  constructor(props) {
  	super(props)
  	this.state = {
	    open: this.props.open,
	};
  }

  // componentDidMount = () => {
  // 	this.setState({ open: this.props.open })
  // }

  handleClose = (event, reason) => {
  	console.log(reason)
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes, variant, message } = this.props;

    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          open={this.state.open}
          
          onClose={this.handleClose}
        >
          <MySnackbarContentWrapper
            onClose={this.handleClose}
            variant={variant}
            message={message}
          />
        </Snackbar>
      </div>
    );
  }
}

CustomizedSnackbars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles2)(CustomizedSnackbars);