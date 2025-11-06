import React, { useState, useEffect } from 'react'
import Preview from '../components/Preview.jsx'
import { useParams } from 'react-router-dom'
import { getResumeAPI } from '../services/allAPI.js'
import { FaDownload } from "react-icons/fa";
import { BsSkipBackwardCircle } from "react-icons/bs";
import { RiRefreshFill } from "react-icons/ri";
import Edit from '../components/Edit.jsx';


function ViewResume() {
  const { id } = useParams() //predifined hook to get param values or dynamic changing id from url
  console.log(id);
  const [resume, setResume] = useState({})

  useEffect(() => {
    getResumeDetails()
  }, [])

  const getResumeDetails = async () => {
    const result = await getResumeAPI(id)
    console.log(result);
    if (result.status === 200) {
      setResume(result.data)
    }
  }

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-6 col-12">
            <div className='col-md-8 col-12'>
              <div className="d-flex justify-content-center align-items-center mt-5">
                <button className='btn fs-4 text-primary'><FaDownload /></button>
                <Edit resumeDetails={resume} setResumeDetails={setResume} />
                <button className='btn fs-4 text-primary'><RiRefreshFill /></button>
                <button className='btn fs-4 text-success'><BsSkipBackwardCircle /></button>
              </div>
            </div>
            <Preview resumeDetails={resume} />
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </>
  )

}
export default ViewResume