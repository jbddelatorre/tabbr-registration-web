import React, { Component, Fragment } from 'react';
import isEmpty from '../../validation/isEmpty';

import Home from './Home'
import New from './New'
import Edit from './Edit'

import Container from '../../components/Container'
import { Switch, Route } from 'react-router-dom';

class Dashboard extends Component {
	componentDidMount() {
		if(!sessionStorage.jwtToken) {
			this.props.history.push('/login')
		}
	}

	render(){
		return (
			<Container>
				<Switch>
					<Route 
						path='/dashboard'
						component={Home}
						exact
					/>
					<Route 
						path='/dashboard/new' 
						component={New}/>
					<Route 
						path='/dashboard/edit' 
						component={Edit}/>
				</Switch>
			</Container>
		)
	}
}

export default Dashboard;