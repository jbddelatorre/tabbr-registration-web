import React, { Component } from 'react';
import Validator from 'validator';
import isEmpty from '../../validation/isEmpty';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Container from '../../components/Container'
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
    width: '45%'
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

		}
	}

	handleChange = field => event => {
		this.setState({
			[field]: event.target.value
		})
	}

	handleSubmit = () => {

	}

	render() {
		const { classes } = this.props;
		return (
			<Container style={{backgroundColor:'#F0F0F0'}}>
				<Paper className={classes.root} elevation={3}>
					<Grid container justify="center">
						<Typography variant="subtitle1">
				          Sign Up for Tournament Organizer Account
				        </Typography>
				        <Typography variant="caption">
				          Some information
				        </Typography>
					</Grid>
			        <TextField
						  error = {""}
						  required
				          label="Full Name"
				          className={classes.textField}
				          value={""}
				          onChange={this.handleChange("")}
				          margin="normal"
				          variant="outlined"
				          fullWidth
				        />
				    <TextField
						  error = {""}
						  required
				          label="Institution"
				          className={classes.textField}
				          value={""}
				          onChange={this.handleChange("")}
				          margin="normal"
				          variant="outlined"
				          fullWidth
				        />
				    <TextField
						  error = {""}
						  required
				          label="Email"
				          className={classes.textField}
				          value={""}
				          onChange={this.handleChange("")}
				          margin="normal"
				          variant="outlined"
				          fullWidth
				        />
				    <TextField
						  error = {""}
						  required
				          label="Password"
				          className={classes.textField}
				          value={""}
				          onChange={this.handleChange("")}
				          margin="normal"
				          variant="outlined"
				          fullWidth
				        />
				    <TextField
						  error = {""}
						  required
				          label="Confirm Password"
				          className={classes.textField}
				          value={""}
				          onChange={this.handleChange("")}
				          margin="normal"
				          variant="outlined"
				          fullWidth
				        />
				    <Grid container justify="center">
				    	<Button className={classes.button} variant="outlined" color="primary" align="center">
					    	Sign Up
					    </Button>
				    </Grid>
				</Paper>
			</Container>
		);
	}
}

export default connect(null)(withStyles(styles)(Signup))



