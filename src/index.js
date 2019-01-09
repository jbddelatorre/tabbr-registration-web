import React from 'react';
import ReactDOM from 'react-dom';
import Container from './containers';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { BrowserRouter as Router } from 'react-router-dom';

import blue from '@material-ui/core/colors/blue';

import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
	palette: {
		primary: blue,
	}
});

ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<Router>
			<Container />
		</Router>
	</MuiThemeProvider>
	, 
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
