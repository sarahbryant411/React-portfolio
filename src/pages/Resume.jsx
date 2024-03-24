import resumeImage from '../images/Resume.png'

const resumeData = [
  {
    title: 'Resume',
    description: 'A resume',
    image: resumeImage,
  }
]

function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <div className='resume'>
                {resumeData.map((resume, index) => (
                  <div className='resumeTile' key={index}> 
                    <h2>{resume.title}</h2>
                    <img src={resume.image} alt={resume.title} />
                    <p>{resume.description}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        }

export default Resume;
