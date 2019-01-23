import React, { Fragment } from 'react';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const formats = [
  {format: 'Asian Parliament', key: 'ap'}, 
  {format: 'British Parliament', key: 'bp'}, 
  {format: 'Public Forum', key: 'pf'}, 
]

export default (props) => {
	const { handleChange, values } = props
	return (
		<Fragment>
			<TextField
	          id="tournamentname"
	          label="Tournament Name"
	          margin="normal"
	          variant="outlined"
	          value={values.tournamentname}
	          onChange={handleChange('tournamentname')}
	          fullWidth
	        />
	        <TextField
	          id="venue"
	          label="Venue"
	          margin="normal"
	          variant="outlined"
	          value={values.venue}
	          onChange={handleChange('venue')}
	          fullWidth
	        />
	        <TextField
	          id="startdate"
	          type="date"
	          margin="normal"
	          variant="outlined"
	          value={values.startdate}
	          onChange={handleChange('startdate')}
	          fullWidth
	          helperText="Start Date"
	        />
	        <TextField
	          id="enddate"
	          type="date"
	          margin="normal"
	          variant="outlined"
	          value={values.enddate}
	          onChange={handleChange('enddate')}
	          fullWidth
	          helperText="End Date"
	        />
	        <TextField
	          select
	          id="formate"
	          label="Format"
	          margin="normal"
	          variant="outlined"
	          value={values.format}
	          onChange={handleChange('format')}
	          fullWidth
	        >
				{formats.map(f => (
					<MenuItem key={f.key} value={f.key}>
		              {f.format}
		            </MenuItem>
				))}
	        </TextField>
		</Fragment>
	)
};
