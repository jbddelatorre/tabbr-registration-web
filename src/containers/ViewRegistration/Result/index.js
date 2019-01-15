import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux'
import { clearViewRegistration } from '../../../actions/viewregistration' 
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4,
  },
  button: {
  	marginTop: theme.spacing.unit * 4
  },
  link: {
  	'&:hover': {
  		cursor:'pointer',
  		textDecoration: 'underline'
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
	const { data, classes } = props;
	const fields = [];

	for(let field of Object.keys(data)) {
		if(field === '_id' || field === '__v' || field === 'registration_code' || field === 'email') continue
		fields.push(
			<Grid item xs={12} container justify="center">
				<Grid item xs={3}>
					<Typography variant="body2" gutterBottom align="center" style={{textTransform: 'capitalize'}}>
			        	{
			        		(function(){
			        			switch(field) {
				        			case "num_teams":
				        				return "Number of Teams"
				        			case "num_adj":
				        				return "Number of Adjudicators"
				        			case "num_obs":
				        				return "Number of Observers"
				        			case "registration_code":
				        				return "Registration Code"
				        			default:
				        				return `${field} Name`
			        			}
			        		})()
			        	}
			    	</Typography>
				</Grid>					
				<Grid item xs={5}>
					<Typography variant="body1" gutterBottom align="center">
			        	{ data[field] }
			    	</Typography>
				</Grid>
				<Grid item xs={3}>
					<Typography variant="body2" gutterBottom align="left">
			        	Change..
			    	</Typography>
				</Grid>
			</Grid>
		)
	}

	return (
		<div className={classes.root}>
			<Grid container spacing={32} justify="center">
				<Grid container item xs={12} lg={8} justify="center">
					
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
					
					{fields}

					<Grid item container xs={12} justify="center" className={classes.foot}>
						<Typography
							className={classes.button, classes.link}
							onClick={props.clearViewRegistration}
							color="primary"
							variant="body1"
						>
							Find another registration
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</div>
	)
}));
