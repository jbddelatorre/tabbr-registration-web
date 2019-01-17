import React from 'react';

import Grid from '@material-ui/core/Grid';

export default (props) => {
	// const style = {
	// 	...props.style,
	// 	paddingLeft: '36px',
	// 	paddingRight: '36px',
	// }
	const style = {minHeight:'85.5vh', padding: '32px', ...props.style }

	return (
		<div className={props.className} style={style}>
			<Grid container justify="center" alignItems="center" wrap="nowrap">
				<Grid container item xs={12} md={10} lg={8} justify="center">
					{props.children}
				</Grid>
			</Grid>
		</div>
	)
};
