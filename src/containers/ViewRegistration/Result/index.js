import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Container from '../../../components/Container'
import { connect } from 'react-redux'
import { clearViewRegistration } from '../../../actions/viewregistration' 
import { withStyles } from '@material-ui/core/styles';
import Fields from './RenderData'

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4,
  },
  button: {
  	marginTop: theme.spacing.unit * 4
  },
  link: {
  	marginTop: theme.spacing.unit * 4,
  	'&:hover': {
  		cursor:'pointer',
  		textDecoration: 'underline',
  	}
  },
  spacing: {
  	paddingBottom: theme.spacing.unit * 2
  },
  marginTop: {
  	marginTop: theme.spacing.unit * 4
  }
});

export default connect(null, { clearViewRegistration })(withStyles(styles)((props) => {
	const { classes } = props;
	return (
		<Container>
			<Grid item xs={12}>
				<Typography variant="h4" gutterBottom>
		        	{"Tournament Name"}
		    	</Typography>
			</Grid>
			<Grid item xs={11} className={classes.spacing}>
				<Typography variant="body1" gutterBottom>
		        	You are currently registered in this tournament.
		    	</Typography>
			</Grid>
			
			<Fields />

			<Grid item container xs={12} justify="center" className={classes.foot}>
				<Typography
					className={classes.link}
					onClick={props.clearViewRegistration}
					color="primary"
					variant="body1"
				>
					Find another registration
				</Typography>
			</Grid>
		</Container>
	)
}));
