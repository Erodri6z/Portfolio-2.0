import '../../styles/project.scss'
import campFire from '../../assets/homepage.png'
import skillTree from '../../assets/SkillTree.png'
import ticTacToe from '../../assets/ttt.png'
import strangerDrinks from '../../assets/strangerdrinks.png'
import pocketGeeks from '../../assets/PocketGeeks.png'
import unlimitedMovingAndStorage from '../../assets/unlimitedMoving.png'
import gloomySpirits from './../../assets/gloomyspirits.png'
import saleCounter from './../../assets/Sale-counter.png'

const Projects = () => {
  const projectData = [{
      title: 'Tic-Tac-Toe',
      deployment: 'https://ttt-erodri6z.netlify.app/',
      image: ticTacToe,
      github:'https://github.com/Erodri6z/TicTacToe',
      description: 'Fully coded in javascript, CSS, and HTML. Built a minimal Tic-Tac-Toe browser game. Learned the basics of app logic as well as app deployment'
    },{
      title: "Skill-Tree",
      deployment: 'https://skilltree.fly.dev',
      image: skillTree,
      github: 'https://github.com/Erodri6z/Skill-Tree',
      description: 'This was an app meant to gather your skills and share them with others. Used full MEN stack, HTML, CSS, JavaScript, GoogleAuth, and EJS. This app helped me learn about GoogleAuth, ERDs, and Heroku deployment'
    }, {
      title: "Campfire",
      deployment: 'https://campfire-erodri6z.herokuapp.com/',
      image: campFire,
      github: 'https://github.com/Erodri6z/CampFire',
      description: 'An app that can be used to share and find story ideas. Used Django, Python3, Docker, HTML and CSS. This app helped me learn Python and PostgreSQL'
    }, {
      title: "Stranger Drinks",
      deployment: 'https://stranger-drinks.netlify.app/',
      image: strangerDrinks,
      github: 'https://github.com/psison92/stranger-drinks-front-end/issues',
      description: 'It’s a “Stranger Things”  themed app to be able to share drink ideas and recipies. An MERN stack app built in collaboration with 3 other teammates. Used full MERN stack, HTML, CSS, and Javascript. This app helped me learn React.js, JWT authentication, and Github group workflow'
    },{
      title: "Pocket Geeks",
      deployment: 'https://pocketgeeks.netlify.app',
      image: pocketGeeks,
      github: 'https://github.com/Erodri6z/Tech-Helper',
      description: 'This is a solo MERN stack application designed to function as a forum, providing assistance to individuals who are not well-versed in technology. Its primary purpose is to enable non-tech-savvy users to ask questions about their mobile phones and receive relevant answers.'
    }, {
      title: "Unlimited Moving And Storage",
      deployment: 'https://unlimited-moving-and-storage.netlify.app/',
      image: unlimitedMovingAndStorage,
      github: 'https://github.com/Erodri6z/Unlimited-Moving-And-Storage',
      description: 'A solo freelance web development job done for a moving company. This was an unpaid consulting project where I developed a react static app, focusing on creating a modern and visually appealing design while replicating an existing  design as a refrence, ensuring all features were included.'
    }, {
      title: "Gloomy Spirits",
      deployment: "https://gloomyspirits.netlify.app/",
      image: gloomySpirits,
      github: "https://github.com/Erodri6z/Drink-Assist",
      description: "This Gloomy Spirits app is your ultimate companion for crafting the perfect cocktails. Powered by TypeScript and React, it allows you to effortlessly search for cocktail recipes by name or ingredients. With detailed instructions and a user-friendly design, it's a go-to resource for both novice mixologists and seasoned cocktail enthusiasts, ensuring that you can create impressive drinks for any occasion."
    }, {
      title:"Sale Counter",
      deployment:"https://salecounter.netlify.app",
      image: saleCounter,
      github: "https://github.com/Erodri6z/Sale-Counter-Front-End",
      description: "The Mobile Sales Tracker App, built with React.js, is specifically designed to assist mobile representatives in accurately tracking their sales activities. The application not only enables representatives to input and manage sales data efficiently but also provides visual graphs that accurately depict the number of sales completed in each respective category"
    }
  ]
  return(
    <div className="projects-page">
      <h1>Projects</h1>
      <div className='projects'>
        <>
        {projectData.map(projectData =>
          <div className="card" style={{ width: '18rem' }} key={projectData.title}>
            <a href={projectData.deployment}>
              <img src={projectData.image} className="card-img-top" alt={projectData.title}/>
            </a>
          <div className="card-body">
            <h5 className="card-title">{projectData.title}</h5>
            <p className="card-text">{projectData.description}</p>
            <a href={projectData.github} className="btn btn-danger">Github</a>
            <a href={projectData.deployment} className="btn btn-dark">Deployment</a>
            </div>
          </div>
          )}
        </>
      </div>
    </div>
  )
}

export default Projects