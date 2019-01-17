import React, { Component, Fragment } from 'react';

import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import MenuIcon from '../MenuButton';

export default class NavigationMenu extends Component {
	state = {
	    anchorEl: null,
	};

	handleClick = event => {
	    this.setState({ anchorEl: event.currentTarget });
	};

	handleClose = () => {
	    this.setState({ anchorEl: null });
	};

	render() {
		const { anchorEl } = this.state

		return (
			<Fragment>
				<MenuIcon anchorEl={this.state.anchorEl} handleClick={this.handleClick} />
				<Menu
		          anchorEl={anchorEl}
		          open={Boolean(anchorEl)}
		          onClose={this.handleClose}
		        >
		          <MenuItem 
		          	onClick={this.handleClose}
		          	component={Link}
                  	to="/register"
		          	>
		          	Register
		          </MenuItem>
		          <MenuItem 
		          	onClick={this.handleClose}
		          	component={Link}
                  	to="/view"
		          	>
		          	Search Registration
		          </MenuItem>
		          <MenuItem 
		          	onClick={this.handleClose}
		          	component={Link}
                  	to="/signup">
		          	Sign Up
		          </MenuItem>
		        </Menu>
			</Fragment>
		);
	}
}
