import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../../../validation/isEmpty'
import { convertdate } from './convertdate'

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

export default (props) => {
	let data = []
	if(!isEmpty(props.data)) {
		 data = props.data
	} 

	return (
		!data ? 
			<Typography style={{marginTop: '24px'}} variant="subtitle1" gutterBottom align="center">
				No Tournaments Found
			</Typography>
			:
			<List component="nav">
		        {data.map(d => (
		        	<Fragment key={d["_id"]}>
	        			<ListItem button key={d["_id"]}>
				          <ListItemIcon>
				            {d.format}
				          </ListItemIcon>
				          <ListItemText primary={d.tournamentname} primaryTypographyProps={{variant: 'h6'}} secondary={`${convertdate(d.startdate)} - ${convertdate(d.enddate)}`}/>
				        </ListItem>
						
						<Divider />
	        		</Fragment>
		        	)
		        )}
		    </List>
	)
};
