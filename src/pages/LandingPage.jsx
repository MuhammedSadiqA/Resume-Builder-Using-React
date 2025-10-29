import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div>
      {/* Landing Page */}
      <section style={{ width: '100%', height: '100vh', backgroundImage: "url('https://s3-alpha.figma.com/hub/file/1232088816/b81c4192-9945-43c1-bc28-1dc9d6e9ad04-cover.png')", backgroundAttachment: 'fixed', backgroundPosition: 'top', backgroundSize: 'cover' }} className='container-fluid row align-items-center'>
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
            <div className="row ">
              <div className="col-3 mb-3">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcg4Y51XjQ-zSf87X4nUPTQzsF83eFdZswTg&s" alt="Person" className="w-100" style={{height:'150px',objectFit:'cover'}} />
              </div>
              <div className="col-3">
                <img src="https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_hybrid&w=740&q=80" alt="Person" className="w-100" style={{height:'150px',objectFit:'cover'}}/>
              </div>
              <div  className="col-3">     
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000" alt="Person" className="w-100" style={{height:'150px',objectFit:'cover'}} />
              </div>
              <div className="col-3">
                <img src="https://writestylesonline.com/wp-content/uploads/2019/01/What-To-Wear-For-Your-Professional-Profile-Picture-or-Headshot.jpg" alt="Person" className="w-100" style={{height:'150px',objectFit:'cover'}} />
              </div>
              {/* second row */}
              <div className="col-3 mb-3">
                <img src="https://wallpapers.com/images/hd/professional-profile-pictures-1427-x-1920-txfewtw6mcg0y6hk.jpg" alt="Person" className="w-100" style={{height:'150px',objectFit:'cover'}} />
              </div>
              <div className="col-3">
                <img src="https://img.freepik.com/free-photo/portrait-confident-young-businessman-with-his-arms-crossed_23-2148176206.jpg?semt=ais_hybrid&w=740&q=80" alt="Person" className="w-100" style={{height:'150px',objectFit:'cover'}} />
              </div>
              <div className="col-3">
                <img src="https://wallpapers.com/images/hd/professional-profile-pictures-1350-x-1080-sizz773bu8k11plw.jpg" alt="Person" className="w-100" style={{height:'150px',objectFit:'cover'}} />
              </div>
              <div className="col-3 ">
                <img src="https://images.unsplash.com/flagged/photo-1553642618-de0381320ff3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000" alt="Person" className="w-100" style={{height:'150px',objectFit:'cover',}} />
              </div>
              <div className="col-3">
                <img src="https://img.freepik.com/premium-photo/portrait-lawyer-business-man-with-arms-crossed-city-smile-outdoor-urban-street-face-happy-confident-professional-entrepreneur-male-attorney-from-india-with-success-mindset_590464-183438.jpg" alt="Person" className="w-100" style={{height:'150px',objectFit:'cover'}} />
              </div>

              <div className="col-3">
                <img src="https://img.freepik.com/premium-photo/confident-handsome-successful-man-smiling-looking-determined_911620-15278.jpg" alt="Person" className="w-100" style={{height:'150px',objectFit:'cover'}} />
              </div>
              <div className="col-3">
                <img src="https://wallpapers.com/images/hd/professional-profile-pictures-1080-x-1080-460wjhrkbwdcp1ig.jpg" alt="Person" className="w-100" style={{height:'150px',objectFit:'cover'}} />
              </div>
              <div className="col-3">
                <img src="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg=" alt="Person" className="w-100" style={{height:'150px',objectFit:'cover'}} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage