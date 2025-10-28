import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <>
    <div id='bg' className='d-flex flex-column align-items-center  min-vh-100'>
    
    <h4 className='mt-3' style={{color:'white'}} >Page not Found</h4>
    <Link className='btn btn-success mt-3' to={'/'} >Go to home</Link>
    </div>
    
    </>
  )
}

export default Pnf