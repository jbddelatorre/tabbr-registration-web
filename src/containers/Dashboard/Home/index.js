import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import isEmpty from '../../../validation/isEmpty'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import ListTournament from './ListTournament'

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

class Home extends Component {

	createNewTournament = () => {
		this.props.history.push('/dashboard/new')
	}

	render() {
		const { data } = this.props

		return (
			<Grid container justify="center">
				<Grid container item xs={12} md={8}>
					<Grid item xs={10}>
						<Typography variant="h4" gutterBottom>
			        	My Tournaments
				    	</Typography>
				    	<hr style={{opacity: '.5'}}/>
				    	<Button variant="outlined" color="primary" onClick={this.createNewTournament}> 
				    		Setup new tournament 
				    	</Button>
				    	<ListTournament />
					</Grid>
				</Grid>
				<Grid item xs={11} md={4}>
					<Typography variant="subtitle1" gutterBottom>
			        	Informative text
			    	</Typography>
				</Grid>
			</Grid>
		);
	}
}

const mapStateToProps = state => ({
	data: state.account.login.data
})


export default connect(mapStateToProps)(withStyles(styles)(Home))