import { useState } from 'react'

function App() {
  const [jobDetail, setJobDetails] = useState<string>('');

  const sendApplicationData = async (e) => {
    e.preventDefault();
    console.log(jobDetail)
    const resumeElement: HTMLInputElement = document.getElementById('resume');
    const resumeInfo = resumeElement.files[0];
    if (resumeInfo) {
      const formData = new FormData();
      formData.append('pdfFile', resumeInfo);
      try {
        const res = await fetch('/api', {
          method: 'POST',
          body: JSON.stringify({
            resume: formData,
            jobDescription: jobDetail
          })
        })
        // const data = res.json();
      } catch (error) {
        throw("error occurred when uploading info:" + error)
      }
    }
  }
  return (
    <form className="flex flex-col m-auto w-[500px]"
    onSubmit={(e) => sendApplicationData(e)}>
      <label htmlFor="resume">Resume</label>
      <input type="file" id="resume" className="file-input file-input-bordered w-full max-w-xs" />
      <label htmlFor="jobDescription">Job Info</label>
      <textarea id="jobDescription" className="textarea textarea-bordered" 
      onChange={(e) => {setJobDetails(e.target.value)}}placeholder="Bio"></textarea>
      <input type="submit" value="tailor my resume"/>
    </form>
  )
}

export default App