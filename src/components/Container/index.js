import React from 'react';

import Grid from '@material-ui/core/Grid';

export default (props) => {
	const style = {
		...props.style,
		paddingLeft: '36px',
		paddingRight: '36px',
	}

	return (
		<Grid container justify="center" style={style} alignItems="center" wrap="nowrap">
			<Grid container item xs={12} md={10} lg={8}>
				{props.children}
			</Grid>
		</Grid>
	)
};
