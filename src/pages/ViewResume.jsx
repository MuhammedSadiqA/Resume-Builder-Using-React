import React, { useState, useEffect } from 'react'
import Preview from '../components/Preview.jsx'
import { useParams } from 'react-router-dom'
import { getResumeAPI } from '../services/allAPI.js'


function ViewResume() {
  const {id}=useParams() //predifined hook to get param values or dynamic changing id from url
  console.log(id);
  const [resume,setResume]=useState({})
  
  useEffect(()=>{
    getResumeDetails()
  },[])
  
  const getResumeDetails=async()=>{
  const result=await getResumeAPI(id)
  console.log(result);
  if(result.status===200){
    setResume(result.data)
  }}

  return (
    <>
    <div className="container my-5">
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-6">
                <Preview resumeDetails={resume} />
            </div>
            <div className="col-md-2"></div>
        </div>
    </div>
    </>
  )

}
export default ViewResume