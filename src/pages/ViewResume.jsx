import React, { useState, useEffect } from 'react'
import Preview from '../components/Preview.jsx'
import { useParams } from 'react-router-dom'
import { addHistoryAPI, getResumeAPI } from '../services/allAPI.js'
import { FaDownload } from "react-icons/fa";
import { BsSkipBackwardCircle } from "react-icons/bs";
import { RiRefreshFill } from "react-icons/ri";
import Edit from '../components/Edit.jsx';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';


function ViewResume() {
  const { id } = useParams() //predifined hook to get param values or dynamic changing id from url
  console.log(id);
  const [resume, setResume] = useState({})

  // function for pdf download
  const handleDownloadResume= async()=>{
    // create pdf document
    const doc = new jsPDF();
    const preview=document.getElementById("preview")
    // screenshot of preview - html2canvas
    const canvas=await html2canvas(preview)
    // console.log(canvas);
    // canvas to image
    const resumeImg = canvas.toDataURL('image/png')
    console.log(resumeImg);
    // add screenshot to pdf
    const imgWidth=doc.internal.pageSize.getWidth()
    const imgHieght=doc.internal.pageSize.getHeight()
    doc.addImage(resumeImg,'PNG',0,0,imgWidth,imgHieght)
    // Download pdf
    doc.save('resume.pdf')
    // local time data = new data
    const localTimeData=new Date()
    console.log(localTimeData);
    const timeStamp=`${localTimeData.toLocalDataSTring()},${localTimeData.toLocaleTimeString()}`
    console.log(timeStamp);

    try{
      await addHistoryAPI({timeStamp,resumeImg})
    }catch(err){
      console.log(err);
    }
  }

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
                <button onClick={handleDownloadResume} className='btn fs-4 text-primary'><FaDownload /></button>
                <Edit resumeDetails={resume} setResumeDetails={setResume} />
                <button className='btn fs-4 text-primary'><RiRefreshFill /></button>
                <button className='btn fs-4 text-success'><BsSkipBackwardCircle /></button>
              </div>
            </div>
            <div id='preview'><Preview resumeDetails={resume} /></div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </>
  )

}
export default ViewResume