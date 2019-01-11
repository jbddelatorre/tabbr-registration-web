import React from 'react';
import ReactDOM from 'react-dom';
import Container from './containers';
import { Provider } from 'react-redux';
import store from './store';
import axios from 'axios';
import { apiBaseUrl } from './config';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { BrowserRouter as Router } from 'react-router-dom';

import blue from '@material-ui/core/colors/blue';

import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
	palette: {
		primary: blue,
	},
	typography: {
	    useNextVariants: true,
	},
});

axios.defaults.baseURL = apiBaseUrl;
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<Provider store={store}>
				<Router>
					<Container />
				</Router>	
		</Provider>
	</MuiThemeProvider>
	, 
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
