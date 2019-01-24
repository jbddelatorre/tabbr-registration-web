import React, { Component, Fragment } from 'react';
// import Validator from 'validator';
import isEmpty from '../../validation/isEmpty';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Register from './Register';
import Success from './Success';


class Registration extends Component {

	render() {
		const { data } = this.props;
		return (
			isEmpty(data) ? <Register /> : <Success data = {data} />
		)
		
	}	
}

const mapStateToProps = (state) => {
	return {
		data: state.registration.data
	}
}

Registration.propTypes = {
	data: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(Registration)



