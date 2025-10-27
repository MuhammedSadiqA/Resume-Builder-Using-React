import React from 'react'
import UserInput from '../components/UserInput'
import Preview from '../components/Preview'

function UserForm() {
  return (
<div className="container"> 
  <div className="col-lg-6">
    <UserInput/>
  </div>
  <div className="col-lg-6">
    <Preview/>
  </div>
</div>  )
}

export default UserForm