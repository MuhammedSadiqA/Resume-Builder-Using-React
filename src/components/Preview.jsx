import { Divider, Button } from '@mui/material'
import React from 'react'
import { FaNodeJs } from "react-icons/fa6";


function Preview() {
  return (
    <div className='shadow p-5 w-100 rounded-3 text-center' style={{ marginTop: '40px', marginLeft: '20px' }} >
      <h3>Name</h3>
      <h4>Job title</h4>
      <p><span className='mx-2' >Location</span>/ <span className='mx-2'>E-mail</span> / <span className='mx-2'>Mobile</span></p>
      <p><a href="" target='_blank'>GitHub</a>|<a href="" target='_blank'>LinkedIn</a>|<a href="" target='_blank'>PortFolio</a></p>
      <Divider sx={{ fontSize: '25px' }}>Summary</Divider>
      <p style={{ textAlign: 'justify' }} >'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat ducimus, incidunt deleniti quibusdam vero error, placeat sint assumenda tenetur aspernatur odio quis id earum? Sapiente facilis repudiandae est ex saepe!</p>

      <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Education</Divider>
      <h5>Course Name</h5>
      <p><span className='mx-2'>Collage</span>|<span className='mx-2'>University</span>|<span className='mx-2'>Passout Year</span></p>

      <Divider sx={{ fontSize: '25px' }}>Proffessional Experience</Divider>
      <h5 className='my-1'>Job/Internship</h5>
      <p><span className='mx-2'>Company Name</span>|<span className='mx-2'>Company Location</span>|<span className='mx-2'> Duration</span></p>

      <Divider sx={{ fontSize: '25px' }}>Proffessional Experience</Divider>
      <div className='d-flex align-items-center justify-content-between'>
        {/* importing button from userInput case 4 and import statements of icon*/}
        <Button variant="contained" className='m-1' >Node <FaNodeJs className='ms-2' /></Button>

      </div>

    </div>

  )
}

export default Preview