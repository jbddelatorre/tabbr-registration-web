import React, { Component } from 'react';
import Validator from 'validator';
import isEmpty from '../../../validation/isEmpty';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestSignup } from '../../../actions/account/signupActions'

import Container from '../../../components/Container'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';



const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    minWidth:'250px',
    width: '45%',
    borderRadius: '10px'
  },
  button: {
  	minWidth: '200px',
  	marginTop: theme.spacing.unit * 2
  }
});

class Signup extends Component {
	constructor(props) {
		super(props)
		this.state = {
			fullname:"",
			institution:"",
			email:"",
			contact:"",
			password:"",
			confirmpassword:"",
			error: {
				fullname:"",
				institution:"",
				email:"",
				contact:"",
				password:"",
				confirmpassword:"",
			},
			
		}
	}

	handleChange = field => event => {
		this.setState({
			[field]: event.target.value
		})
	}

	handleSubmit = async () => {
		const state = { ...this.state }
		delete state.error
		let valid = true;
		const error = { ...this.state.error }

		if(!Validator.isEmail(state.email)) {
			valid = false
			error.email = "This is not a valid email"
		}

		if(state.password !== state.confirmpassword) {
			valid = false
			error.confirmpassword = "Passwords do not match"
			error.password = "Passwords do not match"
		}
			
		for(let key of Object.keys(state)) {
			if(isEmpty(state[key])) {
				valid = false
				error[key] = "Please fill in your details"
			}
		}

		this.setState({ error })

		if(valid) {
			await this.props.requestSignup(state)
			this.props.history.push('/login')
		}
	}

	render() {
		const { classes } = this.props;
		const { error } = this.state

		return (
			<Container style={{backgroundColor:'#F0F0F0'}}>
				<Paper className={classes.root} elevation={3}>
					<Grid container direction="column" alignItems="center">
						<Typography variant="subtitle1">
				          Sign Up for Tournament Organizer Account
				        </Typography>
				        <Typography variant="caption">
				          Some information
				        </Typography>
					</Grid>
					<form>
			        <TextField
			        	InputLabelProps={{ shrink: true }}
			        	  autoComplete={"name"}
			        	  error={!!error.fullname}
						  required
				          label="Full Name"
				          className={classes.textField}
				          value={this.state.fullname}
				          onChange={this.handleChange("fullname")}
				          margin="normal"
				          variant="outlined"
				          fullWidth
				          helperText={error.fullname}
				        />
				    <TextField
				    	InputLabelProps={{ shrink: true }}
				    	  error={!!error.institution}
						  required
				          label="Institution"
				          className={classes.textField}
				          value={this.state.institution}
				          onChange={this.handleChange("institution")}
				          margin="normal"
				          variant="outlined"
				          fullWidth
				          helperText={error.institution}
				        />
				    <TextField
				    	InputLabelProps={{ shrink: true }}
				    	  autoComplete={"email"}
				    	  error={!!error.email}
						  required
				          label="Email"
				          className={classes.textField}
				          value={this.state.email}
				          onChange={this.handleChange("email")}
				          margin="normal"
				          variant="outlined"
				          fullWidth
				          helperText={error.email}
				        />
				    <TextField
				    	  InputLabelProps={{ shrink: true }}
				     	  autoComplete={"tel"}
				    	  error={!!error.contact}
						  required
				          label="Mobile Number / Contact Details"
				          className={classes.textField}
				          value={this.state.contact}
				          onChange={this.handleChange("contact")}
				          margin="normal"
				          variant="outlined"
				          fullWidth
				          helperText={error.contact}
				        />   
				    <TextField
				    InputLabelProps={{ shrink: true }}
				    	  error={!!error.password}
				    	  type="password"
						  required
				          label="Password"
				          className={classes.textField}
				          value={this.state.password}
				          onChange={this.handleChange("password")}
				          margin="normal"
				          variant="outlined"
				          fullWidth
				          helperText={error.password}
				        />
				    <TextField
				    InputLabelProps={{ shrink: true }}
				    	  error={!!error.confirmpassword}
				    	  type="password"
						  required
				          label="Confirm Password"
				          className={classes.textField}
				          value={this.state.confirmpassword}
				          onChange={this.handleChange("confirmpassword")}
				          margin="normal"
				          variant="outlined"
				          fullWidth
				          helperText={error.confirmpassword}
				        />
				    <Grid container justify="center">
				    	<Button className={classes.button} variant="outlined" color="primary" align="center"
				    		onClick={this.handleSubmit}>
					    	Sign Up
					    </Button>
				    </Grid>
				    </form>
				</Paper>
			</Container>
		);
	}
}

export default connect(null, { requestSignup })(withStyles(styles)(Signup))



