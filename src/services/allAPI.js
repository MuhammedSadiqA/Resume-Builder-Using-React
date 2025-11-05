import commonAPI from "./commonAPI";
import serverURL from "./serverURL";


// resume add api - called by userInputs, when finish btn clicked
export const addResumeAPI=async (resume)=>{
  return await commonAPI(`${serverURL}/resume`,"POST",resume)
}

// get resume api - called by resumeView, when page loads
export const getResumeAPI=async (id)=>{
  return await commonAPI(`${serverURL}/resume/${id}`,"GET",null)
}
// update resume api
// add history api
// get history api
// remove history api