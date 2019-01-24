import React, {Fragment} from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import MediaQuery from 'react-responsive';

export default (props) => {
	return (
		<Fragment>
			<MediaQuery query="(min-device-width: 1280px)">
				<Toolbar style={{width:'66.67%', margin:'0 auto'}}>
					{props.children}
				</Toolbar>
			</MediaQuery>
			<MediaQuery query="(max-device-width: 1280px)">
				<Toolbar style={{width:'90%', margin:'0 auto'}}>
					{props.children}
				</Toolbar>
			</MediaQuery>
		</Fragment>
	)
};
