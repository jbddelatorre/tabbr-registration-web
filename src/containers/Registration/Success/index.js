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
  }
});

export default withStyles(styles)((props) => {
	const { data } = props;

	return (
		<div className={props.classes.root}>
			<Grid container spacing={32} justify="center">
				<Grid item xs={12} lg={8}>
					<Grid container justify="center">
						<Grid item xs={12}>
							<Typography variant="h2" gutterBottom>
					        	Tournament Name
					    	</Typography>
						</Grid>
					</Grid>
					<Grid container justify="center">
						<Grid item xs={12}>
							<Typography variant="h6" gutterBottom>
					        	You have successfully registered for this tournament.
					    	</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography variant="h6" gutterBottom>
					        	{ data.institution }
					    	</Typography>
					    	<Typography variant="h6" gutterBottom>
					        	{ data.registration_code }
					    	</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	)
});
