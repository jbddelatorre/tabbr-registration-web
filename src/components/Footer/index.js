import React from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default (props) => {
	return (
		<Grid container justify="center" style={{backgroundColor: '#2196f3', minHeight:'2vh', width:'100%', minHeight:'32px'}} alignItems="center">
			<Typography align="center" style={{color:'white'}}>
				Registration {`\u00A9`} 2019
			</Typography>
		</Grid>
		
	)
};
