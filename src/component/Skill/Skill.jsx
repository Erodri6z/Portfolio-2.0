import '../../styles/skill.scss'

const Skill = () => {

  const skills = [
    {
      name: "html",
      icon: "https://img.icons8.com/color/48/html-5--v1.png",
      id: "html"
    }, {
      name: "css",
      icon: "https://img.icons8.com/color/48/css3.png",
      id: "css"
    }, {
      name: "javascript",
      icon: "https://img.icons8.com/color/48/javascript--v1.png",
      id: "javascript"
    }, {
      name: "react",
      icon: "https://img.icons8.com/plasticine/48/react.png",
      id: "react"
    }, {
      name: "python",
      icon: "https://img.icons8.com/color/48/python--v1.png",
      id: "python"
    }, {
      name: "express",
      icon: "https://img.icons8.com/fluency/48/express-js.png",
      id: "express"
    }, {
      name: "mongodb",
      icon: "https://img.icons8.com/color/48/mongodb.png",
      id: "mongo"
    }, {
      name: "github",
      icon: "https://img.icons8.com/fluency/48/github.png",
      id: "github"
    }, {
      name: "node",
      icon: "https://img.icons8.com/fluency/48/node-js.png",
      id: "node"
    }, {
      name: "postgreSQL",
      icon: "https://img.icons8.com/color/48/postgreesql.png",
      id: "postgreSQL"
    }, {
      name: "django",
      icon: "https://img.icons8.com/color/48/django.png",
      id: "django"
    }, {
      name: "docker",
      icon: "https://img.icons8.com/fluency/48/docker.png",
      id: "docker"
    }, {
      name: "netlify",
      icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png",
      id: "netlify"
    }, {
      name: "heroku",
      icon: "https://img.icons8.com/color/48/heroku.png",
      id: "heroku"
    }, {
      name: "bootstrap",
      icon: "https://img.icons8.com/color/48/bootstrap--v2.png",
      id: "bootsrap"
    }, {
      name: "git",
      icon: "https://img.icons8.com/color/48/git.png",
      id: "git"
    }, {
      name: "sass",
      icon: "https://img.icons8.com/color/48/sass.png",
      id: "sass"
    }, {
      name: "mySQL",
      icon: "https://img.icons8.com/ios-filled/50/mysql-logo.png",
      id: "mySQL"
    }, {
      name: "ruby",
      icon: "https://img.icons8.com/color/48/ruby-programming-language.png",
      id: "ruby"
    }, {
      name: "redux",
      icon: "https://img.icons8.com/color/48/redux.png",
      id: "redux"
    }, {
      name: "next",
      icon: "https://img.icons8.com/color/48/nextjs.png",
      id: "next"
    }, {
      name: "azure",
      icon: "https://img.icons8.com/fluency/48/azure-1.png",
      id: "azure"
    }, {
      name: "aws",
      icon: "https://img.icons8.com/color/48/amazon-web-services.png",
      id: "aws"
    }, {
      name: "typescript",
      icon: "https://img.icons8.com/color/48/typescript.png",
      id: "typescript"
    }
  ]

  return(
    <div className="skill-page">
      <div id='skill-container'>
        <h1>Technical Skills</h1>
        <div className="icons">
          {skills.map((s) => 
            <div key={s.name}>
              <img src={s.icon} alt="skill" id={s.id} className='skillz'/>
            </div>
          )}
      </div>
      </div>
    </div>
  )
}

export default Skill