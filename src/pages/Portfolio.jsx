import passwordGenerator from "../images/PasswordGenerator.png";
import weatherDashboard from "../images/WeatherDashboard.png";
import workDayScheduler from "../images/WorkdayScheduler.png";
import webQuiz from "../images/WebQuiz.png";

const projects = [
  {
    title: "Password Generator",
    description:
      "Developed a Password Generator tool capable of creating secure passwords based on user-defined criteria, demonstrating proficiency in JavaScript and randomization algorithms.",
    image: passwordGenerator,
    github: "https://github.com/sarahbryant411/password-generator",
    deployed: "https://sarahbryant411.github.io/password-generator/",
  },
  {
    title: "Weather Dashboard",
    description:
      "Designed and implemented a Weather Dashboard application that provides real-time weather updates and forecasts for user-specified locations, showcasing API integration skills and user interface design.",
    image: weatherDashboard,
    github: "https://github.com/sarahbryant411/weather-dashboard-dandelion",
    deployed: "https://sarahbryant411.github.io/weather-dashboard-dandelion/",
  },
  {
    title: "Work Day Scheduler",
    description:
      "Created a Work Day Scheduler application allowing users to plan and organize their daily tasks, showcasing proficiency in JavaScript, DOM manipulation, and local storage usage.",
    image: workDayScheduler,
    github: "https://github.com/sarahbryant411/api-workday-scheduler",
    deployed: "https://sarahbryant411.github.io/api-workday-scheduler/",
  },
  {
    title: "Web Quiz",
    description:
      "Developed a Web Quiz application featuring interactive quizzes with dynamic content generation and instant feedback, demonstrating knowledge of front-end development techniques and user interaction design.",
    image: webQuiz,
    github: "https://github.com/sarahbryant411/web-quiz-wizard",
    deployed: "https://sarahbryant411.github.io/web-quiz-wizard/",
  },
];

function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div className="projectTile" key={index}>
            <h3>{project.title}</h3>
            <img src={project.image} alt={project.title} />
            <p>{project.description}</p>
            <div className="projectLinks">
              <a href={project.github}>GitHub</a>
              <a href={project.deployed}>Deployed</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
