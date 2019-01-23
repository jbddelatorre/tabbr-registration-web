import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

export default (props) => {
	/*const { isLoading, data } = props*/
	const isLoading = false;
	const data = [];
	let empty = false;

	if(!isLoading && (data.length === 0)) {
		empty = true
	}

	return (
		empty ? 
			<Typography style={{marginTop: '24px'}} variant="subtitle1" gutterBottom align="center">
				No Tournaments Found
			</Typography>
			:
			<List component="nav">

		        <ListItem button>
		          <ListItemIcon>
		            {/*<InboxIcon />*/}
		          </ListItemIcon>
		          <ListItemText primary="Inbox" secondary="support"/>
		        </ListItem>
				
				<Divider />

		        <ListItem button>
		          <ListItemIcon>
		            {/*<DraftsIcon />*/}
		          </ListItemIcon>
		          <ListItemText primary="Drafts" secondary="support"/>
		        </ListItem>

		        <Divider />
		    </List>
	)
};
