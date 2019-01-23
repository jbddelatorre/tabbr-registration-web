import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import isEmpty from '../../../validation/isEmpty'
import { requestUserTournaments } from '../../../actions/account/fetchTournamentsActions'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

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
  },
  progress: {
  	marginTop: '36px',
  }
});

class Home extends Component {
	createNewTournament = () => {
		this.props.history.push('/dashboard/new')
	}

	componentDidUpdate(prevProps) {
		if (this.props.data !== prevProps.data) {
		    this.props.requestUserTournaments(this.props.data.id)
		}
	}

	render() {
		const { data, tournaments, classes } = this.props

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
						
				    	{
							tournaments.isFetching ?
								<Grid container justify="center">
									<CircularProgress
							        	className={classes.progress}
										color="primary"
							        />
								</Grid>
								:
								<ListTournament data={tournaments.data} />
				    	}

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
	data: state.account.login.data,
	tournaments: state.account.tournaments,
})


export default connect(mapStateToProps, { requestUserTournaments })(withStyles(styles)(Home))