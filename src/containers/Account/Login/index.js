import React, { Component } from 'react';
import Validator from 'validator';
import isEmpty from '../../../validation/isEmpty';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { requestLogin } from '../../../actions/account/loginActions';
import Container from '../../../components/Container'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Snackbar from '../../../components/Notification';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    minWidth:'250px',
    width: '45%',
    borderRadius: '10px',
    marginTop: '7vh'
  },
  button: {
  	minWidth: '200px',
  	marginTop: theme.spacing.unit * 2,
  	marginLeft: theme.spacing.unit,
  	marginRight: theme.spacing.unit,
  }
});

class Signup extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email:"",
			password:"",
			error: {
				email:"",
				password:"",
			},
			snackbar: {
				status: false,
				message: "",
				variant: "error"
			}
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
		delete state.snackbar
		let valid = true;
		const error = { ...this.state.error }

		if(!Validator.isEmail(state.email)) {
			valid = false
			error.email = "This is not a valid email"
		}
			
		await this.setState({ error })
		
		this.props.requestLogin(state)
		console.log(state)
	}

	componentDidMount = () => {
		const { data, errors } = this.props;

		if(!isEmpty(data) || !isEmpty(errors)) {
			const message = data.success || errors.error
			const variant = data.success ? "success" : "error"

			this.setState({
				snackbar: {
					status: true,
					message,
					variant 
				}
			})
		}
	}

	render() {
		const { classes } = this.props;
		const { error, snackbar } = this.state

		return (
			<Container style={{backgroundColor:'#F0F0F0'}}>
				<Paper className={classes.root} elevation={3}>
					<Grid container direction="column" alignItems="center">
						<Typography variant="subtitle1">
				          Sign In
				        </Typography>
					</Grid>
				    <TextField
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
				    <Grid container justify="center">
				    	<Button className={classes.button} variant="outlined" color="primary" align="center"
				    		onClick={this.handleSubmit}
				    		disabled={!this.state.email || !this.state.password}>
					    	Sign In
					    </Button>
					    <Button className={classes.button} variant="outlined" color="primary" align="center"
				    		onClick={this.handleSubmit}>
					    	Forgot password
					    </Button>
				    </Grid>
				</Paper>
				<Snackbar variant={snackbar.variant} message={snackbar.message} open={snackbar.status}/>
			</Container>
		);
	}
}

const mapDispatchToProps = state => ({
	data: state.account.signup.data,
	errors: state.app.errors,
})

export default connect(mapDispatchToProps, { requestLogin })(withStyles(styles)(Signup))



