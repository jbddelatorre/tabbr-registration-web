import React, { Component } from 'react';
// import Validator from 'validator';
import isEmpty from '../../validation/isEmpty';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Result from './Result';
import Search from './Search';


class ViewRegistration extends Component {

	render() {
		const data  = this.props.data || {};

		return isEmpty(data) ? 
			<Search /> : 
			<Result data = {data} />
	}	
}

const mapStateToProps = (state) => {
	return {
		data: state.representative.data
	}
}

// ViewRegistration.propTypes = {
// 	data: PropTypes.object.isRequired
// }

export default connect()(ViewRegistration)
