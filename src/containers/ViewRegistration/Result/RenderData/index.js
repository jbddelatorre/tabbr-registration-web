import React, { Fragment } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';

import ChangeButton from './ChangeButton'

const styles = theme => ({
  link: {
  	'&:hover': {
  		cursor:'pointer',
  		textDecoration: 'underline'
  	}
  },
});

export default withStyles(styles)(({ data, classes, status, message }) => {
	const fields = [];

	for(let field of Object.keys(data)) {
		if(field === '_id' || field === '__v' || field === 'registration_code' || field === 'email') continue
		fields.push(
			<Grid item xs={12} container justify="center">
				<Grid item xs={3}>
					<Typography paragraph variant="body2" gutterBottom align="center" style={{textTransform: 'capitalize'}}>
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
				<Grid item xs={4}>
					<Typography variant="body1" gutterBottom align="center">
			        	{ data[field] }
			    	</Typography>
				</Grid>
				<Grid item xs={1}>
					<Typography 
						variant="body2" 
						gutterBottom 
						align="left"
						color="primary"
						className={classes.link}
					>
			        	Change..
			    	</Typography>
				</Grid>
				<Grid container item xs={3} align="left">
					<ChangeButton type={status} message={message}/>
				</Grid>
			</Grid>
		)
	}

	return (
		<Fragment>
			{fields}
		</Fragment>
	)
});
