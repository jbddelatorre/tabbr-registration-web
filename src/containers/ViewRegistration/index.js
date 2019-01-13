import React, { Component, Fragment } from 'react';
// import Validator from 'validator';
import isEmpty from '../../validation/isEmpty';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Result from './Result';
import Search from './Search';

import LinearProgress from '@material-ui/core/LinearProgress';


class ViewRegistration extends Component {
	render() {
		const data  = this.props.data || {};
		const { isFetching } = this.props
		console.log('hello')


		return (
			<Fragment>
				{isFetching ? <LinearProgress variant="query" color="secondary" /> : null}
				{isEmpty(data) ? <Search /> : <Result data = {data} />}
			</Fragment>
		)
		
	}	
}

const mapStateToProps = (state) => {
	return {
		isFetching: state.viewregistration.isFetching,
		data: state.viewregistration.data
	}
}

ViewRegistration.propTypes = {
	isFetching: PropTypes.bool.isRequired,
	data: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(ViewRegistration)
