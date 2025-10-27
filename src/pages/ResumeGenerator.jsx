import React from 'react'
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaDownload } from "react-icons/fa6";
import { Link } from 'react-router-dom';


function ResumeGenerator() {
  return (
    <div>
      <h2 className='text-center my-5'>Create a Job-Winning Resume in minutes</h2>
      <div style={{ height: '60vh' }} className="row justify-content-center align-items center">
        <div className="col-md-1"></div>
        <div className="col-md-4 border rounded shadow p-5 text-center">
          <IoDocumentTextSharp className='text-primary fs-3 mb-3' />
          <h4>Add Your Information</h4>
          <p>Add pre-written examples to each section</p>
          <h5>Step-1</h5>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-4  border rounded shadow p-5 text-center">
          <FaDownload className='text-primary fs-3 mb-3' />
          <h4>Download Your Resume</h4>
          <p>Download and start applying</p>
          <h5>Step-2</h5>
        </div>
        <div className="col-md-1"></div>
        <div className='text-center mb-5 my-5'>
          <Link className='text-center mb-5 btn text-white' style={{ backgroundColor: 'purple' }} to={'/form'}>Let's Start</Link>

        </div>
      </div>
    </div>
  )
}

export default ResumeGenerator