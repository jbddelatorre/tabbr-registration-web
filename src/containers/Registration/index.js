import React, { Component, Fragment } from 'react';
// import Validator from 'validator';
import isEmpty from '../../validation/isEmpty';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LinearProgress from '@material-ui/core/LinearProgress';

import Register from './Register';
import Success from './Success';


class Registration extends Component {

	render() {
		const { data, isFetching } = this.props;

		return (
			<Fragment>
				{isFetching ? <LinearProgress variant="query" color="secondary" /> : null}
				{isEmpty(data) ? <Register /> : <Success data = {data} />}
			</Fragment>
		)
		
	}	
}

const mapStateToProps = (state) => {
	return {
		isFetching: state.registration.isFetching,
		data: state.registration.data
	}
}

Registration.propTypes = {
	isFetching: PropTypes.bool.isRequired,
	data: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(Registration)



