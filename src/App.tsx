import { useState } from 'react'

function App() {
  const [jobDetail, setJobDetails] = useState<string>('');
  const [resume, setResume] = useState<string>('');
  const sendApplicationData = async (e) => {
    e.preventDefault();
    // const resumeElement: HTMLInputElement = document.getElementById('resume');
    // const resumeInfo = resumeElement.files[0];

    const body = {
      resume: resume,
      jobDescription: jobDetail
    }
    try {
      const res = await fetch('/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      // const data = res.json();
    } catch (error) {
      throw("error occurred when uploading info:" + error)
    }
    
  }
  return (
    <form className="flex flex-col m-auto w-[500px]"
    onSubmit={(e) => sendApplicationData(e)}>
      <label htmlFor="resume">Resume</label>
      {/* <input type="file" id="resume" className="file-input file-input-bordered w-full max-w-xs" /> */}
      <textarea id="Resume" className="textarea textarea-bordered" 
      onChange={(e) => {setResume(e.target.value)}} placeholder="" required></textarea>
      <label htmlFor="jobDescription">Job Info</label>
      <textarea id="jobDescription" className="textarea textarea-bordered" 
      onChange={(e) => {setJobDetails(e.target.value)}} placeholder="" required></textarea>
      <input type="submit" value="tailor my resume"/>
    </form>
  )
}

export default App