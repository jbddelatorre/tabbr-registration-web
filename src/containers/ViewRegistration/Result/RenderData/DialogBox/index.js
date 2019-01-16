import React from 'react';
import { connect } from 'react-redux';
import isEmpty from '../../../../../validation/isEmpty'
import { requestChangeRegistration } from '../../../../../actions/viewregistration/viewregistrationChangeAction'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { transform_field } from '../transform_field';

const styles = theme => ({
    link: {
      '&:hover': {
        cursor:'pointer',
        textDecoration: 'underline'
      },
    },
    root: {
      paddingBottom: '12px'
    }
});

export default connect(null, { requestChangeRegistration })(withStyles(styles)(class FormDialog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      value: ""
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = (title, isNumber) => {
    this.handleClose()
    const state = { ...this.state }

    if(isEmpty(state.value)) {
      console.log('Cannot be empty')
    } else if (isNumber && (state.value < 1 || isNaN(state.value) )) {
      console.log('Invalid Input')
    } else {
      this.props.requestChangeRegistration({ 
        field: title,
        value: state.value 
      })
    }
   
  }

  render() {
    const { title, data, classes } = this.props
    const { value } = this.state
    const isNumber = title === "num_teams" || title === "num_adj" || title === "num_obs" ? true : false

    return (
      <div>
        <Typography 
              variant="body2" 
              gutterBottom 
              align="left"
              color="primary"
              onClick={this.handleClickOpen}
              className={classes.link}
            >
                  Change..
        </Typography>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          maxWidth="xs"
        >
          <DialogTitle id="form-dialog-title" classes={{root:classes.root}}>{transform_field(title)}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Current: { data }
            </DialogContentText>
            <TextField
              autoFocus
              value={value}
              margin="dense"
              id={title}
              type={isNumber ? 'number' : 'text'}
              onChange = {(e) => this.setState({ value: e.target.value })}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={() => this.handleSubmit(title, isNumber)} color="primary">
              Update
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}));