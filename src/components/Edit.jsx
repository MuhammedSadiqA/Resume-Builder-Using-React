import React, { useState, useRef } from 'react'
import { FaFileAlt } from "react-icons/fa";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { IoMdClose } from "react-icons/io";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    maxHeight: '80vh',
    overflowY: 'auto',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


export default function Edit({ resumeDetails, setResumeDetails }) {


    const [open, setOpen] = useState(false)
    const skillRef = useRef()
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const addSkill = (skill) => {
        if (resumeDetails.userSkills.includes(skill)) {
            alert("Skill already added")
        } else {
            setResumeDetails({ ...resumeDetails, userSkills: [...resumeDetails.userSkills, skill] })
            skillRef.current.value = ""
        }
    }

    const removeSkill = (skill) => {
        setResumeDetails({ ...resumeDetails, userSkills: resumeDetails.userSkills.filter(item => item != skill) })
    }

    return (
        <div>
            <button onClick={handleOpen} className='btn fs-4 text-warning'><FaFileAlt /></button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        EDIT RESUME DETAILS
                    </Typography>
                    <Box id="modal-modal-description" sx={{ mt: 2 }}>
                        {/* Personal data */}
                        <div className='row p-3'>
                            <h3>Personal Details:</h3>
                            <TextField value={resumeDetails.username} onChange={e => setResumeDetails({ ...resumeDetails, username: e.target.value })} id="standard-basic-name" label="Full Name" variant="standard" />
                            <TextField value={resumeDetails.jobTitle} onChange={e => setResumeDetails({ ...resumeDetails, jobTitle: e.target.value })} id="standard-basic-job" label="Job Title" variant="standard" />
                            <TextField value={resumeDetails.location} onChange={e => setResumeDetails({ ...resumeDetails, location: e.target.value })} id="standard-basic-location" label="Location" variant="standard" />
                        </div>
                        {/* contact details */}
                        <div className='row p-3'>
                            <h3>Contact Details:</h3>
                            <TextField value={resumeDetails.email} onChange={e => setResumeDetails({ ...resumeDetails, email: e.target.value })} id="standard-basic-Email" label="Email" variant="standard" />
                            <TextField value={resumeDetails.mobile} onChange={e => setResumeDetails({ ...resumeDetails, mobile: e.target.value })} id="standard-basic-number" label="Phone number" variant="standard" />
                            <TextField value={resumeDetails.github} onChange={e => setResumeDetails({ ...resumeDetails, github: e.target.value })} id="standard-basic-Github" label="Github Profile Link" variant="standard" />
                            <TextField value={resumeDetails.linkedin} onChange={e => setResumeDetails({ ...resumeDetails, linkedin: e.target.value })} id="standard-basic-LinkedIn" label="LinkedIn Profile Link" variant="standard" />
                            <TextField value={resumeDetails.portfolio} onChange={e => setResumeDetails({ ...resumeDetails, portfolio: e.target.value })} id="standard-basic-portfolio" label="Portfolio Link" variant="standard" />
                        </div>
                        {/* Educational Details */}
                        <div className='row p-3'>
                            <h3>Educational Details:</h3>
                            <TextField value={resumeDetails.course} onChange={e => setResumeDetails({ ...resumeDetails, course: e.target.value })} id="standard-basic-Course" label="Course Name" variant="standard" />
                            <TextField value={resumeDetails.collage} onChange={e => setResumeDetails({ ...resumeDetails, collage: e.target.value })} id="standard-basic-Collage" label="Collage Name" variant="standard" />
                            <TextField value={resumeDetails.university} onChange={e => setResumeDetails({ ...resumeDetails, university: e.target.value })} id="standard-basic-University" label="University" variant="standard" />
                            <TextField value={resumeDetails.passoutYear} onChange={e => setResumeDetails({ ...resumeDetails, passoutYear: e.target.value })} id="standard-basic-Passout" label="Year of Passout" variant="standard" />
                        </div>
                        {/* Proffessional Details: */}
                        <div className='row p-3'>
                            <h3>Proffessional Details:</h3>
                            <TextField value={resumeDetails.jobType} onChange={e => setResumeDetails({ ...resumeDetails, jobType: e.target.value })} id="standard-basic-Job" label="Job  or Interview" variant="standard" />
                            <TextField value={resumeDetails.company} onChange={e => setResumeDetails({ ...resumeDetails, company: e.target.value })} id="standard-basic-Company" label="Company Name" variant="standard" />
                            <TextField value={resumeDetails.clocation} onChange={e => setResumeDetails({ ...resumeDetails, clocation: e.target.value })} id="standard-basic-company-Location" label="Company Location" variant="standard" />
                            <TextField value={resumeDetails.duration} onChange={e => setResumeDetails({ ...resumeDetails, duration: e.target.value })} id="standard-basic-Duration" label="Duration" variant="standard" />
                        </div>
                        {/* skills */}
                        <div>
                            <h3>Skills</h3>
                            <div className='d-flex align-items-center justify-content-between'>
                                <input ref={skillRef} className='w-100' placeholder='Add skill' type="text" />
                                {/* inside this style background we used color token in app.css for blue which means i am created a variable for a specific color code in universal tag and applying here */}
                                <Button className='m-3' style={{ backgroundColor: 'var(--main-blue)', color: 'white' }} onClick={() => addSkill(skillRef.current.value)} variant='text'>ADD</Button>
                            </div>
                            <h5>Added Skills</h5>
                            <div className='d-flex flex-wrap align-items-center justify-content-between'>
                                {
                                    resumeDetails.userSkills?.length > 0 ?
                                        resumeDetails.userSkills.map((skill, index) => (


                                            <Button key={index} variant="contained" className='m-1' >{skill} <IoMdClose onClick={() => removeSkill(skill)} /> </Button>
                                        ))
                                        :
                                        <p className='fw-bolder'>No Skills are added yet!!!</p>
                                }
                            </div>
                        </div >

                        {/* Summary */}
                        <div>
                            <h3>Summary</h3>
                            <div className="p-3 row">
                                <TextField onChange={e => setResumeDetails({ ...resumeDetails, summary: e.target.value })} id="standard-basic-summary" label="write a short summary of yourself" variant="standard" multiline rows={4}
                                    defaultValue={'MERN Stack Developer skilled in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Experienced in designing responsive front-ends, developing RESTful APIs, and managing databases. Passionate about clean code, performance optimization, and delivering scalable, user-friendly solutions.'} />
                            </div>
                        </div>
                                {/* Button */}
                                <div className="text-center d-flex justify-content-end ">
                                    <div className="btn btn-warning">Update</div>
                                </div>
                    </Box>
                </Box>
            </Modal>

        </div>
    )
}