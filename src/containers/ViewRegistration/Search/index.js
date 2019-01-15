import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import Validator from 'validator';

import { requestViewRegistration } from '../../../actions/viewregistration'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4,
  },
  button: {
  	marginTop: theme.spacing.unit * 2
  },
  message: {
  	marginTop: theme.spacing.unit * 2
  }
});

const clearError = () => {
	return {
		type: "CLEAR EERRRROOR"
	}
}

class ViewRegistration extends Component {
	constructor(props) {
		super(props);
		this.state = {
			registration_code: "",
			email: "",
			error: {
				registration_code: false,
				email: false
			}
		}
	}

	handleChange = field => e => {
		this.setState({ [field]: e.target.value })
	}

	handleSubmit = () => {
		const state = { ...this.state }
		let valid = true;

		if(state.registration_code.length !== 6) {
			state.error.registration_code = "This is not a valid registration code."
			valid = false;
		}

		if(!Validator.isEmail(state.email)) {
			state.error.email = "This is not a valid email."
			valid = false;
		}

		if(valid) {
			delete state.error
			this.props.requestViewRegistration(state)
		} else {
			this.setState({state})
		}
	}

	componentWillUnmount() {
		this.props.clearError()
	}

	render() {
		const { classes, viewregistration_error } = this.props
		const { registration_code, email, error } = this.state

		return (
			<div className={classes.root}>
				<Grid container justify="center">
					<Grid container item xs={12} md={10} lg={8} justify="center">
						<Grid container item xs = {12} md={4} lg={4} direction="column" justify="center">
							<Typography variant="subtitle1" gutterBottom>
						        Registration Code
						    </Typography>
						</Grid>		
						<Grid item xs={12} md={8}>
							<TextField
							  required
							  error={!!error.registration_code}
					          label="Registration Code"
					          value={registration_code}
					          className={classes.textField}
					          helperText={error.registration_code ? error.registration_code : "Enter Registration Code"}
					          margin="normal"
					          variant="outlined"
					          fullWidth
					          onChange= { this.handleChange('registration_code') }
					        />
						</Grid>
						<Grid container item xs = {12} md={4} lg={4} direction="column" justify="center">
							<Typography variant="subtitle1" gutterBottom>
						        Email
						    </Typography>
						</Grid>		
						<Grid item xs={12} md={8}>
							<TextField
							  required
							  error={!!error.email}
					          label="Email"
					          value={email}
					          className={classes.textField}
					          helperText={error.email ? error.email: "Enter Email Address"}
					          margin="normal"
					          variant="outlined"
					          fullWidth
					          onChange= { this.handleChange('email') }
					        />
						</Grid>
					</Grid>
					
					{viewregistration_error.viewregistration ? 
					<Grid container item xs={12} justify="center" className={classes.message}>
						<Typography variant="subtitle1" color="secondary" gutterBottom>
						        Registration not found.
						</Typography>
					</Grid> : null
					}

					<Grid container item xs={12} justify="center">
						<Button
							className={classes.button}
							variant="contained"
							onClick={this.handleSubmit}
							color="primary"
						>
						Find Registration
						</Button>
					</Grid>
				</Grid>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	viewregistration_error: state.viewregistration.error
})

ViewRegistration.propTypes = {
	requestViewRegistration: PropTypes.func.isRequired,
	viewregistration_error: PropTypes.object.isRequired
}

export default connect(mapStateToProps, { clearError, requestViewRegistration })(withStyles(styles)(ViewRegistration))