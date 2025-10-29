import { Box, Paper } from '@mui/material'
import React from 'react'
import { Link, } from 'react-router-dom'
import { MdDelete } from "react-icons/md";


function History() {
  return (
    <div>
      <h1 className='text-center my-5'>Downloaded Resume History</h1>
      <Link className='float-end me-5' to={'/resume'} style={{ marginTop: '-80px' }} >Back</Link>
      <Box component="section" className='container-fluid' >
        <div className="row">
          <div className="col-md-4">
            {/* paper for shadow effect from material ui */}
            <Paper elevation={3} sx={{ my: 5, p: 5, textAlign: 'center' }} >
              <div className="d-flex justify-content-centers align-items-center">
                <h6>Review At:Date/Time</h6>
                <button className='btn text-danger fs-4 ' ><MdDelete /></button>
              </div>
              <div className="border rounded p-3">
                <img width={'200px'} height={'250px'} src="https://resumaker.ai/s3/en-US/resume-examples/Layout-Designer-Resume-Example.png" alt="resume" />
              </div>
            </Paper>
          </div>
        </div>
      </Box>
    </div>
  )
}

export default History