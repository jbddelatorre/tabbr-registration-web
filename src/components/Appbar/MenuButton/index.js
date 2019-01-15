import React from 'react';

import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';

import IconButton from '@material-ui/core/IconButton';

export default (props) => {
	return (
		<IconButton
		  aria-owns={props.anchorEl ? 'simple-menu' : undefined}
          aria-label="More"
          aria-haspopup="true"
          onClick={props.handleClick}
          color="inherit"
        >
			<SvgIcon>
				<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
			</SvgIcon>
		</IconButton>
	)
};
