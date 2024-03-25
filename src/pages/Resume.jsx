import resumeImage from '../images/Resume.png';
import resumePDF from '../images/SarahResume.pdf';

function Resume() {
  return (
    <div>
      <h2>Resume</h2>
      <div className='resume'>
            <a href={resumePDF} target="_blank" rel="noopener noreferrer">
              <img src={resumeImage} alt= 'Resume' />
            </a>
            <p>Click the image to download PDF</p>
          </div>
    </div>
  );
}

export default Resume;
