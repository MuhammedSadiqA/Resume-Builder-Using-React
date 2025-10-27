import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


const steps = ['Basic Informations', 'Contact Details', 'Educational Details', 'Work Experience', 'Skills & Certifications', 'Review & Submit'];

function UserInput() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const renderStep = (stepCount) => {
        switch (stepCount) {
            case 0: return (
                <div className='row p-3'>
                    <h3>Personal Details:</h3>
                    <TextField id="standard-basic-name" label="Full Name" variant="standard" />
                    <TextField id="standard-basic-job" label="Job Title" variant="standard" />
                    <TextField id="standard-basic-location" label="Location" variant="standard" />
                </div>
            )
            case 1: return (
                <div className='row p-3'>
                    <h3>Contact Details:</h3>
                    <TextField id="standard-basic-Email" label="Email" variant="standard" />
                    <TextField id="standard-basic-number" label="Phone number" variant="standard" />
                    <TextField id="standard-basic-Github" label="Github Profile Link" variant="standard" />
                    <TextField id="standard-basic-LinkedIn" label="LinkedIn Profile Link" variant="standard" />
                    <TextField id="standard-basic-portfolio" label="Portfolio Link" variant="standard" />
                </div>
            )
            case 2: return (
                <div className='row p-3'>
                    <h3>Educational Details:</h3>
                    <TextField id="standard-basic-Course" label="Course Name" variant="standard" />
                    <TextField id="standard-basic-Collage" label="Collage Name" variant="standard" />
                    <TextField id="standard-basic-University" label="University" variant="standard" />
                    <TextField id="standard-basic-Passout" label="Year of Passout" variant="standard" />
                </div>
            )
            case 3: return (
                <div className='row p-3'>
                    <h3>Proffessional Details:</h3>
                    <TextField id="standard-basic-Job" label="Job  or Interview" variant="standard" />
                    <TextField id="standard-basic-Company" label="Company Name" variant="standard" />
                    <TextField id="standard-basic-company-Location" label="Company Location" variant="standard" />
                    <TextField id="standard-basic-Duration" label="Duration" variant="standard" />

                </div>
            )
            case 4: return (
                <div>
                    <h3>Skills</h3>
                </div>
            )
            case 5: return (
                <div>
                    <h3>Summary</h3>
                </div>
            )
            default: return


        }
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if (isStepOptional(index)) {
                        labelProps.optional = (
                            <Typography variant="caption">Optional</Typography>
                        );
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                    <Box>
                        {renderStep(activeStep)}
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        {isStepOptional(activeStep) && (
                            <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                Skip
                            </Button>
                        )}
                        <Button onClick={handleNext}>
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}

export default UserInput