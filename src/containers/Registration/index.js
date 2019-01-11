import React, { Component } from 'react';
// import Validator from 'validator';
import isEmpty from '../../validation/isEmpty';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Register from './Register';
import Success from './Success';
// import { registerRepresentative } from '../../actions/representativeActions';

// import { withStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';

// import Grid from '@material-ui/core/Grid';

// const styles = theme => ({
//   root: {
//     padding: theme.spacing.unit * 4,
//   },
//   button: {
//   	marginTop: theme.spacing.unit * 4
//   }
// });

class Registration extends Component {

	render() {
		const { data } = this.props;

		return isEmpty(data) ? 
			<Register /> : 
			<Success data = {data} />
	}	
}

const mapStateToProps = (state) => {
	return {
		data: state.representative.data
	}
}

export default connect(mapStateToProps)(Registration)



