import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { FaNodeJs } from "react-icons/fa6";
import { duration } from '@mui/material';


const steps = ['Basic Informations', 'Contact Details', 'Educational Details', 'Work Experience', 'Skills & Certifications', 'Review & Submit'];

function UserInput() {
    const skillSuggestionArray = ['NODE.JS', 'MONGO DB', 'EXPRESS JS', 'REACT', 'ANGULAR', 'JAVASCRIPT', 'LEADERSHIP', 'COMMUNICATION', 'COACHING', 'POWER BI', 'MS EXCEL']
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    //create state for storing resume details
    const [resumeDetails, setResumeDetails] = React.useState({
        username: "",
        jobTitle: "",
        location: "",
        email: "",
        mobile: "",
        github: "",
        linkedin: "",
        portfolio: "",
        course: "",
        collage: "",
        university: "",
        passoutYear: "",
        jobType: "",
        company: "",
        clocation: "",
        duration: "",
        userSkills: [],
        summary: "",
    })
    console.log(resumeDetails);
    

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
                    <TextField value={resumeDetails.username} onChange={e=>setResumeDetails({...resumeDetails,username:e.target.value})} id="standard-basic-name"  label="Full Name" variant="standard" />
                    <TextField value={resumeDetails.jobTitle} onChange={e=>setResumeDetails({...resumeDetails,jobTitle:e.target.value})} id="standard-basic-job" label="Job Title" variant="standard" />
                    <TextField value={resumeDetails.location} onChange={e=>setResumeDetails({...resumeDetails,location:e.target.value})} id="standard-basic-location" label="Location" variant="standard" />
                </div>
            )
            case 1: return (
                <div className='row p-3'>
                    <h3>Contact Details:</h3>
                    <TextField value={resumeDetails.email} onChange={e=>setResumeDetails({...resumeDetails,email:e.target.value})} id="standard-basic-Email" label="Email" variant="standard" />
                    <TextField value={resumeDetails.mobile} onChange={e=>setResumeDetails({...resumeDetails,mobile:e.target.value})} id="standard-basic-number" label="Phone number" variant="standard" />
                    <TextField value={resumeDetails.github} onChange={e=>setResumeDetails({...resumeDetails,github:e.target.value})} id="standard-basic-Github" label="Github Profile Link" variant="standard" />
                    <TextField value={resumeDetails.linkedin} onChange={e=>setResumeDetails({...resumeDetails,linkedin:e.target.value})} id="standard-basic-LinkedIn" label="LinkedIn Profile Link" variant="standard" />
                    <TextField value={resumeDetails.portfolio} onChange={e=>setResumeDetails({...resumeDetails,portfolio:e.target.value})} id="standard-basic-portfolio" label="Portfolio Link" variant="standard" />
                </div>
            )
            case 2: return (
                <div className='row p-3'>
                    <h3>Educational Details:</h3>
                    <TextField value={resumeDetails.course} onChange={e=>setResumeDetails({...resumeDetails,course:e.target.value})} id="standard-basic-Course" label="Course Name" variant="standard" />
                    <TextField value={resumeDetails.collage} onChange={e=>setResumeDetails({...resumeDetails,collage:e.target.value})} id="standard-basic-Collage" label="Collage Name" variant="standard" />
                    <TextField value={resumeDetails.university} onChange={e=>setResumeDetails({...resumeDetails,university:e.target.value})} id="standard-basic-University" label="University" variant="standard" />
                    <TextField value={resumeDetails.passoutYear} onChange={e=>setResumeDetails({...resumeDetails,passoutYear:e.target.value})} id="standard-basic-Passout" label="Year of Passout" variant="standard" />
                </div>
            )
            case 3: return (
                <div className='row p-3'>
                    <h3>Proffessional Details:</h3>
                    <TextField value={resumeDetails.jobType} onChange={e=>setResumeDetails({...resumeDetails,jobType:e.target.value})} id="standard-basic-Job" label="Job  or Interview" variant="standard" />
                    <TextField value={resumeDetails.company} onChange={e=>setResumeDetails({...resumeDetails,company:e.target.value})} id="standard-basic-Company" label="Company Name" variant="standard" />
                    <TextField value={resumeDetails.clocation} onChange={e=>setResumeDetails({...resumeDetails,clocation:e.target.value})} id="standard-basic-company-Location" label="Company Location" variant="standard" />
                    <TextField value={resumeDetails.duration} onChange={e=>setResumeDetails({...resumeDetails,duration:e.target.value})} id="standard-basic-Duration" label="Duration" variant="standard" />

                </div>
            )
            case 4: return (
                <div>
                    <h3>Skills</h3>
                    <div className='d-flex align-items-center justify-content-between'>
                        <input className='w-100' placeholder='Add skill' type="text" />
                        <Button variant='text'>ADD</Button>
                    </div>
                    <h5>Suggestions :</h5>
                    {/* skill buttons*/}
                    <div>
                        {
                            skillSuggestionArray.map((item, index) => (
                                <Button className='m-1' key={index} variant="outlined">{item}</Button>
                            ))
                        }
                    </div>
                    <h5>Added Skills</h5>
                    <div className='d-flex align-items-center justify-content-between'>
                        <Button variant="contained" className='m-1' >Node <FaNodeJs className='ms-2' /></Button>

                    </div>
                </div >
            )
            case 5: return (
                <div>
                    <h3>Summary</h3>
                    <div className="p-3 row">
                        <TextField onChange={e=>setResumeDetails({...resumeDetails,summary:e.target.value})} id="standard-basic-summary" label="write a short summary of yourself" variant="standard" multiline rows={4}
                            defaultValue={'MERN Stack Developer skilled in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Experienced in designing responsive front-ends, developing RESTful APIs, and managing databases. Passionate about clean code, performance optimization, and delivering scalable, user-friendly solutions.'} />

                    </div>
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