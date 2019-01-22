import React, { Component, Fragment } from 'react';
import Registration from './Registration';
import ViewRegistration from './ViewRegistration';
import Signup from './Account/Signup';
import Login from './Account/Login';

import { Switch, Route } from 'react-router-dom';

import Appbar from '../components/Appbar';

class Container extends Component {
	render() {
		return (
			<Fragment>
				<Appbar />
				<Switch>
					<Route 
						path='/'
						exact
					/>
					<Route 
						path='/signup' 
						component={Signup}/>
					<Route 
						path='/login' 
						component={Login}/>
					<Route 
						path='/register'
						component={Registration} />
					<Route 
						path='/view' 
						component={ViewRegistration}/>
				</Switch>
			</Fragment>
		);
	}
}


export default Container;


