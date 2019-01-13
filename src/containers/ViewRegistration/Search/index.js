import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

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
  	marginTop: theme.spacing.unit * 4
  }
});

class ViewRegistration extends Component {
	constructor(props) {
		super(props);
		this.state = {
			registration_code: "",
			email: ""
		}
	}

	handleChange = field => e => {
		this.setState({ [field]: e.target.value })
	}

	render() {
		const { classes } = this.props
		const { registration_code, email } = this.state

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
					          label="Registration Code"
					          value={registration_code}
					          className={classes.textField}
					          helperText="Enter registration code"
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
					          label="Email"
					          defaultValue={email}
					          className={classes.textField}
					          helperText="Enter Email Address"
					          margin="normal"
					          variant="outlined"
					          fullWidth
					          onChange= { this.handleChange('email') }
					        />
						</Grid>
					</Grid>
					
					<Grid container item xs={12} justify="center">
						<Button
							className={classes.button}
							variant="contained"
							onClick={() => console.log('clicked')}
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

export default connect()(withStyles(styles)(ViewRegistration))