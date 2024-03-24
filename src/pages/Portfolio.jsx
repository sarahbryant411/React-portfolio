import passwordGenerator from '../images/PasswordGenerator.png'
import weatherDashboard from '../images/WeatherDashboard.png'
import workDayScheduler from '../images/WorkdayScheduler.png'
import webQuiz from '../images/WebQuiz.png'

const projects = [
  {
    title: 'Password Generator',
    description: 'A password generator',
    image: passwordGenerator,
    github: 'https://github.com/sarahbryant411/password-generator',
    deployed: 'https://sarahbryant411.github.io/password-generator/'

  },
  {
    title: 'Weather Dashboard',
    description: 'A weather dashboard',
    image: weatherDashboard,
    github: 'https://github.com/sarahbryant411/weather-dashboard-dandelion',
    deployed: 'https://sarahbryant411.github.io/weather-dashboard-dandelion/'
  },
  {
    title: 'Work Day Scheduler',
    description: 'A work day scheduler',
    image: workDayScheduler,
    github: 'https://github.com/sarahbryant411/api-workday-scheduler',
    deployed: 'https://sarahbryant411.github.io/api-workday-scheduler/'
  },
  {
    title: 'Web Quiz',
    description: 'A web quiz',
    image: webQuiz,
    github: 'https://github.com/sarahbryant411/web-quiz-wizard',
    deployed: 'https://sarahbryant411.github.io/web-quiz-wizard/'
  }
]

function Portfolio () {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className='projects'>
        {projects.map((project, index) => (
          <div className='projectTile' key={index}> 
            <h2>{project.title}</h2>
            <img src={project.image} alt={project.title} />
            <p>{project.description}</p>
            <a href={project.github}>GitHub</a>
            <a href={project.deployed}>Deployed</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio

