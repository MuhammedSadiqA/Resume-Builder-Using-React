import { Divider, Button } from '@mui/material'
import React from 'react'

// passing props from UserForm.jsx
function Preview({resumeDetails}) {
  return (
    <div className='shadow p-5 w-100 rounded-3 text-center' style={{ marginTop: '40px', marginLeft: '20px' }} >
      <h3>{resumeDetails?.username}</h3>
      <h4>{resumeDetails?.jobTitle}</h4>
      <p><span className='mx-2' >{resumeDetails?.location}</span>/ <span className='mx-2'>{resumeDetails?.email}</span> / <span className='mx-2'>{resumeDetails?.mobile}</span></p>
      <p><a href={resumeDetails?.github} target='_blank'>GitHub</a>|
      <a href={resumeDetails?.linkedin} target='_blank'>LinkedIn</a>|
      <a href={resumeDetails?.portfolio} target='_blank'>PortFolio</a></p>
      <Divider sx={{ fontSize: '25px' }}>Summary</Divider>
      <p style={{ textAlign: 'justify' }} >{resumeDetails?.summary}</p>

      <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Education</Divider>
      <h5>{resumeDetails?.course}</h5>
      <p><span className='mx-2'>{resumeDetails?.collage}</span>|<span className='mx-2'>{resumeDetails?.university}</span>|<span className='mx-2'> {resumeDetails?.passoutYear}</span></p>

      <Divider sx={{ fontSize: '25px' }}>Proffessional Experience</Divider>
      <h5 className='my-1'>{resumeDetails?.jobType}</h5>
      <p><span className='mx-2'>{resumeDetails?.company}</span>|<span className='mx-2'>{resumeDetails?.clocation}</span>|<span className='mx-2'> {resumeDetails?.duration}</span></p>

      <Divider sx={{ fontSize: '25px'  }}>Skill's</Divider>
      <div className='d-flex flex-wrap justify-content-between'>
        {/* importing button from userInput case 4 and import statements of icon */}
        {
        resumeDetails?.userSkills?.map((item, index) =>(
        <Button key={index} variant="contained" className='m-1' >{item} </Button>
      ))}

      </div>

    </div>

  )
}

export default Preview