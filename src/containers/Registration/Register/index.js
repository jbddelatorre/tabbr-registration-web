import React, { Component } from 'react';
import Validator from 'validator';
import isEmpty from '../../../validation/isEmpty';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerRepresentative } from '../../../actions/representativeActions';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4,
  },
  button: {
  	marginTop: theme.spacing.unit * 4
  }
});

class Registration extends Component {
	state = {
		institution: '',
		representative: '',
		email: '',
		contact: '',
		num_teams: '',
		num_adj: '',
		num_obs: '',
		error: {
			institution: false,
			representative: false,
			email: false,
			contact: false,
			num_teams: false,
			num_adj: false,
			num_obs: false,
		}
	};

	handleChange = field => event => {
		this.setState({
			[field]: event.target.value
		})
	}

	handleChangeNum = field => event => {
		if(!isNaN(event.target.value)) {
			this.setState({
				[field]: event.target.value
			})
		}
	}

	handleSubmit = () => {
		const s = { ...this.state };
		let valid = true;

		for(let key of Object.keys(s)) {
			if(isEmpty(s[key])) {
				valid = false;
				s.error[key] = true;
				this.setState({s})
			}
			if(!Validator.isEmail(s.email)) {
				valid = false;
				s.error.email = true;
				this.setState({s})
			}
		}
		if(valid) {
			delete s.error
			this.props.registerRepresentative(s)
		}
	}

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<Grid container spacing={32} justify="center">
					<Grid item xs={12} lg={8}>
						<Grid container justify="center">
							<Grid item xs={12}>
								<Typography variant="h2" gutterBottom>
						        	Tournament Name
						    	</Typography>
							</Grid>
							<Grid item xs={11}>
								<Typography variant="subtitle1" gutterBottom>
						        	Informative text
						    	</Typography>
							</Grid>
						</Grid>
						<Grid container spacing={16}>
							<Grid item xs={12}>
								<TextField
								  error = {this.state.error.institution}
								  required
						          label="Institution"
						          className={classes.textField}
						          value={this.state.institution}
						          onChange={this.handleChange('institution')}
						          margin="normal"
						          variant="outlined"
						          helperText="Some important text"
						          fullWidth
						        />
							</Grid>
						</Grid>
						<Grid container>
							<Grid item xs={12}>
								<TextField
								  error = {this.state.error.representative}
								  required
						          label="Institutional Representative"
						          className={classes.textField}
						          value={this.state.representative}
						          onChange={this.handleChange('representative')}
						          margin="normal"
						          variant="outlined"
						          fullWidth
						        />
							</Grid>
						</Grid>
						<Grid container>
							<Grid item xs={12}>
								<TextField
								  error = {this.state.error.email}
								  required
						          label="Email Address"
						          className={classes.textField}
						          value={this.state.email}
						          onChange={this.handleChange('email')}
						          margin="normal"
						          variant="outlined"
						          fullWidth
						        />
							</Grid>
						</Grid>
						<Grid container>
							<Grid item xs={12}>
								<TextField
								  error = {this.state.error.contact}
								  required
						          label="Contact Number"
						          className={classes.textField}
						          value={this.state.contact}
						          onChange={this.handleChange('contact')}
						          margin="normal"
						          variant="outlined"
						          fullWidth
						        />
							</Grid>
						</Grid>
						<Grid container spacing={8}>
							<Grid item xs={6}>
								<TextField
								  error = {this.state.error.num_teams}
								  required
						          label="Number of Teams"
						          className={classes.textField}
						          value={this.state.num_teams}
						          onChange={this.handleChangeNum('num_teams')}
						          margin="normal"
						          variant="outlined"
						          fullWidth
						        />
							</Grid>
							<Grid item xs={6}>
								<TextField
								  error = {this.state.error.num_adj}
								  required
						          label="Number of Adjudicators"
						          className={classes.textField}
						          value={this.state.num_adj}
						          onChange={this.handleChangeNum('num_adj')}
						          margin="normal"
						          variant="outlined"
						          fullWidth
						        />
							</Grid>
							<Grid item xs={6}>
								<TextField
								  error = {this.state.error.num_obs}
								  required
						          label="Number of Observers"
						          className={classes.textField}
						          value={this.state.num_obs}
						          onChange={this.handleChangeNum('num_obs')}
						          margin="normal"
						          variant="outlined"
						          fullWidth
						        />
							</Grid>
						</Grid>
						<Grid container justify="center">
							<Button 
								variant="contained" 
								className={classes.button}
								color="primary"
								onClick={this.handleSubmit}>
	        					Submit Registration
	     					</Button>
						</Grid>
					</Grid>
				</Grid>
			</div>
		);
	}
}

Registration.propTypes = {
	registerRepresentative: PropTypes.func.isRequired,
};

export default connect(null, { registerRepresentative })(withStyles(styles)(Registration))



