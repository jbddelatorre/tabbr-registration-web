import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4,
  },
  button: {
  	marginTop: theme.spacing.unit * 4
  },
  content: {
  	paddingTop: theme.spacing.unit * 4
  },
  spacing: {
  	paddingBottom: theme.spacing.unit * 2
  },
  info: {
  	paddingTop: theme.spacing.unit,
  }
});

export default withStyles(styles)((props) => {
	const { data, classes } = props;

	return (
		<div className={classes.root}>
			<Grid container item spacing={32} justify="center">
				<Grid container item xs={12} lg={8} justify="center">
					<Grid item xs={12}>
						<Typography variant="h4" gutterBottom>
				        	Tournament Name
				    	</Typography>
					</Grid>
					<Grid item xs={11} className={classes.spacing}>
						<Typography variant="body1" gutterBottom>
				        	You have successfully registered for this tournament.
				    	</Typography>
					</Grid>

					<Grid className={classes.content} container direction="column" item xs={12}>

						<Grid container justify="center" className={classes.spacing}>
							<Grid item xs={12} md={4}>
								<Typography variant="body1" gutterBottom align="center">
						        	Institution Name:
						    	</Typography>
						    	<Typography variant="h5" gutterBottom align="center">
						        	{ data.institution }
						    	</Typography>
							</Grid>
							<Grid item xs={12} md={4}>
								<Typography variant="body1" gutterBottom align="center">
						        	Institution Representative:
						    	</Typography>
						    	<Typography variant="h5" gutterBottom align="center">
						        	{ data.representative }
						    	</Typography>
							</Grid>
						</Grid>
						

						<Typography variant="body1" gutterBottom align="center">
				        	Your institution registration code:
				    	</Typography>
				    	<Typography variant="h4" gutterBottom align="center">
				        	{ data.registration_code }
				    	</Typography>

				    	<Typography variant="body1" gutterBottom align="center">
				        	Registered Email Address:
				    	</Typography>
				    	<Typography variant="h6" gutterBottom align="center">
				        	{ data.email }
				    	</Typography>
				    	
				    	<Typography className={classes.info} variant="body1" gutterBottom align="center">
				        	{ "We have sent an email for more details" }
				    	</Typography>
				    	<Typography className={classes.info} variant="body1" gutterBottom align="center">
				        	{ "You may verify your registration by clicking view registration on the upper right hand portion of the page." }
				    	</Typography>
				    	<Typography className={classes.info} variant="body1" gutterBottom align="center">
				        	{ "Please make sure to upload deposit slip." }
				    	</Typography>
					</Grid>
					
				</Grid>
			</Grid>
		</div>
	)
});
