import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { transform_field } from './transform_field';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ChangeButton from './ChangeButton'
import DialogBox from './DialogBox'

const styles = theme => ({
  link: {
  	'&:hover': {
  		cursor:'pointer',
  		textDecoration: 'underline'
  	}
  },
});

class RenderData extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dialog: null
		}
	}

	render() {
		const {  data, classes, status, message } = this.props
		const fields = [];

		for(let field of Object.keys(data)) {
			if(field === '_id' || field === '__v' || field === 'registration_code' || field === 'email') continue
			fields.push(
				<Grid key={field} item xs={12} container justify="center">
					<Grid item xs={3}>
						<Typography paragraph variant="body2" gutterBottom align="center">
				        	{
				        		transform_field(field)
				        	}
				    	</Typography>
					</Grid>					
					<Grid item xs={4}>
						<Typography variant="body1" gutterBottom align="center" style={{fontWeight: '500'}}>
				        	{ data[field] }
				    	</Typography>
					</Grid>
					<Grid item xs={1}>
						<DialogBox 
							title={field}
							data={data[field]}
						/>
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
	}
}


export default connect()(withStyles(styles)(RenderData))

