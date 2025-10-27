import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div>
      {/* Landing Page */}
      <section style={{ width: '100%', height: '100vh', backgroundImage: "url('https://wallpapercat.com/w/full/2/1/c/172040-2880x1800-desktop-hd-the-office-tv-series-wallpaper.jpg')", backgroundAttachment: 'fixed', backgroundPosition: 'top', backgroundSize: 'cover' }} className='container-fluid row align-items-center'>
        <div className='row'>
          <div className="col-md-4"></div>
          <div className="col-md-4 text-center shadow border py-5 rounded mt-5" style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}>
            <h3>Designed to get hired.
              Your skills, your Story, Your next Job - all in one.</h3>
            <Link to={'/resume'} className='btn btn-primary' >Make Your Resume</Link>
          </div>
          <div className="col-md-4"></div>
        </div>
      </section>
      {/* Tools */}
      <section className='m-5'>
        <h1 className='text-center'>Tools</h1>
        <div className='row'>
          <div className="col-md-6">
            <div className='my-3'>
              <h4>Resume</h4>
              <p>Create Unlimited new resumes and easily edit them afterwards</p>
            </div>
            <div className='my-3'>
              <h4>Cover letters</h4>
              <p>Easily write proffessional cover letters</p>
            </div>
            <div className='my-3'>
              <h4>Job</h4>
              <p>Automatically receive new and relevant job postings</p>
            </div>
            <div className='my-3'>
              <h4>Applications</h4>
              <p>Effortlesly manage and track your job applications in an organized manner.</p>
            </div>
          </div>
          <div className="col-md-6 justify-content-center">
            <img className='img-fluid' src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@3x.png " alt="resume" />
          </div>
        </div>
      </section>
      {/* image */}
      <section style={{ height: '500px', backgroundImage: 'url("https://www.icu.ac.jp/en/assets/img/academics/ph_gs_ma_01.jpg")', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'top' }} >
      </section>
      {/* Testimony */}
      <section className='m-5'>
        <h1 className='text-center my-5'>Testimonial</h1>
        <div className="row container">
          <div className="col-md-5">
            <h3 className='my-5' style={{ textAlign: 'justify' }}>Trusted by Proffessionals</h3>
            <p className='fs-5' style={{ textAlign: 'justify' }}>At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.
              In fact, users who used LiveCareer reported getting hired an average of 48 days faster.
              Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.</p>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-3">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcg4Y51XjQ-zSf87X4nUPTQzsF83eFdZswTg&s" alt="Person" className="w-100" />
              </div>
              <div className="col-3">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcg4Y51XjQ-zSf87X4nUPTQzsF83eFdZswTg&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThZ-y7tqraAZTrNPoHXbFVdvlTmdeC93OwqtaP5bGOjtZv2FZ4Zmz73dh-chtPcDTBcyI&usqp=CAU" alt="Person" className="w-100" />
              </div>
              <div className="col-3">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcg4Y51XjQ-zSf87X4nUPTQzsF83eFdZswTg&s" alt="Person" className="w-100" />
              </div>
              <div className="col-3">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcg4Y51XjQ-zSf87X4nUPTQzsF83eFdZswTg&s" alt="Person" className="w-100" />
              </div>
              <div className="col-3">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcg4Y51XjQ-zSf87X4nUPTQzsF83eFdZswTg&s" alt="Person" className="w-100" />
              </div>
              <div className="col-3">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcg4Y51XjQ-zSf87X4nUPTQzsF83eFdZswTg&s" alt="Person" className="w-100" />
              </div>
              <div className="col-3">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcg4Y51XjQ-zSf87X4nUPTQzsF83eFdZswTg&s" alt="Person" className="w-100" />
              </div>
              <div className="col-3">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcg4Y51XjQ-zSf87X4nUPTQzsF83eFdZswTg&s" alt="Person" className="w-100" />
              </div>
              <div className="col-3">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcg4Y51XjQ-zSf87X4nUPTQzsF83eFdZswTg&s" alt="Person" className="w-100" />
              </div>

              <div className="col-3">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcg4Y51XjQ-zSf87X4nUPTQzsF83eFdZswTg&s" alt="Person" className="w-100" />
              </div>
              <div className="col-3">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcg4Y51XjQ-zSf87X4nUPTQzsF83eFdZswTg&s" alt="Person" className="w-100" />
              </div>
              <div className="col-3">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcg4Y51XjQ-zSf87X4nUPTQzsF83eFdZswTg&s" alt="Person" className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage