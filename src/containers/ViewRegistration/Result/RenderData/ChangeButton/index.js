import React from 'react';
import CheckCircle from '@material-ui/icons/CheckCircleOutline'
import ErrorCircle from '@material-ui/icons/ErrorOutline'

import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

export default ({ type, message }) => {
	let icon = [];

	switch(type) {
		case 'success':
			icon.push(<CheckCircle style={{color: "#10b710"}} />)
			break
		case 'error':
			icon.push(<ErrorCircle style={{color: "#ff0000"}} />)
			break
		case 'loading':
			icon.push(<CircularProgress color="secondary" size={18}/>)
			break
		default: 
			return icon;
	}

	return (
		<div style={{display:'flex'}}>
			{icon}
			<Typography paragraph variant="body2" gutterBottom align="center" style={{marginLeft: '16px'}}>
				{message}
			</Typography>
		</div>
	)
};
