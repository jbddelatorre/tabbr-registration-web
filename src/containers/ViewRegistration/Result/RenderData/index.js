import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { transform_field } from './transform_field';
import isEmpty from '../../../../validation/isEmpty'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ChangeMessage from './ChangeMessage'
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
		const {  data, classes, status, message, isFetching, changedField, error, didRequestChange } = this.props
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
						{ 
							isFetching && field === changedField ? 
								<ChangeMessage type={'loading'} /> 
								: didRequestChange && field === changedField ? 
									isEmpty(error) ? 
										<ChangeMessage key={field} type={'success'} message={"Successfully Changed!"}/> 
										: <ChangeMessage key={field} type={'error'} message={"Something went wrong."} /> 
									: null
						}

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

const mapStateToProps = state => ({
	isFetching: state.viewregistration.isFetching,
	changedField: state.viewregistration.changedField,
	error: state.viewregistration.error,
	didRequestChange: state.viewregistration.didRequestChange
})

export default connect(mapStateToProps)(withStyles(styles)(RenderData))

