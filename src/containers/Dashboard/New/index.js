import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import TextField from '@material-ui/core/TextField';

import TournamentDetails from './TournamentDetails' 

const formats = [
  {format: 'Asian Parliament', key: 'ap'}, 
  {format: 'British Parliament', key: 'bp'}, 
  {format: 'Public Forum', key: 'pf'}, 
]

const styles = theme => ({
  root: {
    width: '70%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
});

function getSteps() {
  return ['Tournament Details', 'Registration Details', 'Messages'];
}

function getStepContent(step, handleChange, values) {
  switch (step) {
    case 0:
      return <TournamentDetails handleChange={handleChange} values={values}/>;
    case 1:
      return 'List down required registration details [Phase 1 and Phase 3]';
    case 2:
      return `What messages to place inside registration page`;
    default:
      return 'Unknown step';
  }
}

class VerticalLinearStepper extends React.Component {
  state = {
    activeStep: 0,
    values: {
      tournamentname: "",
      venue: "",
      startdate: "",
      enddate: "",
      format: "ap"
    },
    error:""
  };

  handleNext = () => {
    let next = true;

    const state = { ...this.state }

    const checkDate = Number(new Date(state.values.enddate)) - Number(new Date(state.values.startdate));

    const checkCurrent = Number(new Date(state.values.startdate)) - Number(new Date());

    if(checkDate < 0 || checkCurrent < 0) {
      next = false 
      state.error = "Invalid tournament dates"
    }

    for(let i of Object.keys(state.values)) {
      if(state.values[i].length === 0) {
        next = false 
        state.error = "Please complete details"
      } 
    }

    this.setState(state)

    if(next) {
      this.setState(state => ({
      activeStep: state.activeStep + 1,
      error: ""
      }))
    } 

  };

  handleChange = (field) => async (event) => {
    const state = { ...this.state } 

    state.values[field] = event.target.value

    await this.setState({
      ...state
    })
  }

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  handleSubmit = () => {
    const { values } = this.state
    console.log(values)
  }

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">

          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>

                <div>{getStepContent(index, this.handleChange, this.state.values)}</div>

                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={this.handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick= {activeStep === steps.length - 1 ? this.handleSubmit : this.handleNext }
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>


                    <span style={{color:'red', fontFamily:'roboto'}}>{this.state.error}</span>
                  </div>
                </div>

              </StepContent>
            </Step>
          ))}

        </Stepper>

        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={this.handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
    );
  }
}

VerticalLinearStepper.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(VerticalLinearStepper);