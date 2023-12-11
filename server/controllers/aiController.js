import OpenAI from "openai"


const aiController = {
  // parseBody: (req,res,next) => {
    
  // },
  sendAI: async (req,res,next) => {

    console.log(process.env.OPEN_API_KEY)
    const openai = new OpenAI({
      apiKey: process.env.OPEN_API_KEY
    });
    try {
      const res = await await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        // messages:[{role:"user", content: `You want to apply to a job with the following job description: ${req.body.jobDescription} and have the following resume: ${req.body.resume}. Please readjust the resume to match the job description and increase the change of a response`}]
        messages: [{role:"user", content:"hello"}]
      })
      
    } catch (error) {
      console.error("Issue with interacting with OpenAI:", error)
    }
  },
  convertPDF: (req,res,next) => {

  }
}

export default aiController;