import React from 'react'
import { MdOutgoingMail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { BiLogoWhatsapp } from "react-icons/bi";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

function Footer() {
  return (
    <div style={{height:'300px',backgroundColor:'purple',color:'white',}} className='d-flex justify-content-center align-items-center p-5 flex-column'>
      <h3>Contact Us</h3>
      <h5 className='fw-bolder'><MdOutgoingMail />resumeBuilder@gmail.com</h5>
      <h5 className='fw-bolder'><FaPhoneVolume />9898674539</h5>
      <h5>Connect With Us</h5>
      <div className='d-flex justify-content-center align-items-center fs-4 my-3'>
      <BiLogoWhatsapp className='me-3' />
      <FaInstagramSquare className='me-3' />
      <FaFacebookSquare />
      </div>
      <p>Designed & Build with ❤️ using React</p>
    </div>
  )
}

export default Footer