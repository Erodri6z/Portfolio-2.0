import '../../styles/skill.scss'

const Skill = () => {

  const skills = [
    {
      name: "html",
      icon: "https://img.shields.io/badge/-HTML5-000000?style=for-the-badge&logo=HTML5",
      id: "html"
    }, {
      name: "css",
      icon: "https://img.shields.io/badge/-CSS-000000?style=for-the-badge&logo=CSS3&logoColor=1572B6",
      id: "css"
    }, {
      name: "javascript",
      icon: "https://img.shields.io/badge/-JavaScript-000000?style=for-the-badge&logo=Javascript&logoColor=)",
      id: "javascript"
    }, {
      name: "react",
      icon: "https://img.shields.io/badge/-React.js-000000?style=for-the-badge&logo=react",
      id: "react"
    }, {
      name: "python",
      icon: "https://img.shields.io/badge/-Python3-000000?style=for-the-badge&logo=python",
      id: "python"
    }, {
      name: "express",
      icon: "https://img.shields.io/badge/-Express.js-000000?style=for-the-badge&logo=express",
      id: "express"
    }, {
      name: "mongodb",
      icon: "https://img.shields.io/badge/-MongoDB-000000?style=for-the-badge&logo=mongodb",
      id: "mongo"
    }, {
      name: "github",
      icon: "https://img.shields.io/badge/-Github-000000?style=for-the-badge&logo=github",
      id: "github"
    }, {
      name: "node",
      icon: "https://img.shields.io/badge/-Node.js-000000?style=for-the-badge&logo=node.js",
      id: "node"
    }, {
      name: "postgreSQL",
      icon: "https://img.shields.io/badge/-postgreSQL-000000?style=for-the-badge&logo=postgreSQL",
      id: "postgreSQL"
    }, {
      name: "django",
      icon: "https://img.shields.io/badge/-django-000000?style=for-the-badge&logo=django",
      id: "django"
    }, {
      name: "docker",
      icon: "https://img.shields.io/badge/-docker-000000?style=for-the-badge&logo=docker",
      id: "docker"
    }, {
      name: "netlify",
      icon: "https://img.shields.io/badge/-Netlify-000000?style=for-the-badge&logo=netlify",
      id: "netlify"
    }, {
      name: "heroku",
      icon: "https://img.shields.io/badge/-heroku-000000?style=for-the-badge&logo=heroku",
      id: "heroku"
    }, {
      name: "bootstrap",
      icon: "https://img.shields.io/badge/-bootstap-000000?style=for-the-badge&logo=bootstrap",
      id: "bootsrap"
    }, {
      name: "git",
      icon: "https://img.shields.io/badge/-git-000000?style=for-the-badge&logo=git",
      id: "git"
    }, {
      name: "sass",
      icon: "https://img.shields.io/badge/-sass-000000?style=for-the-badge&logo=sass",
      id: "sass"
    }, {
      name: "mySQL",
      icon: "https://img.shields.io/badge/-mysql-000000?style=for-the-badge&logo=mysql",
      id: "mySQL"
    }, {
      name: "ruby",
      icon: "https://img.shields.io/badge/-ruby-000000?style=for-the-badge&logo=ruby",
      id: "ruby"
    }, {
      name: "sequelize",
      icon: "https://img.shields.io/badge/-sequelize-000000?style=for-the-badge&logo=sequelize",
      id: "sequelize"
    }, {
      name: "next",
      icon: "https://img.shields.io/badge/-Next.js-000000?style=for-the-badge&logo=next.js",
      id: "next"
    }, {
      name: "azure",
      icon: "https://img.shields.io/badge/-azure-000000?style=for-the-badge&logo=microsoftazure",
      id: "azure"
    }, {
      name: "aws",
      icon: "https://img.shields.io/badge/-aws-000000?style=for-the-badge&logo=amazon",
      id: "aws"
    }, {
      name: "typescript",
      icon: "https://img.shields.io/badge/-typescript-000000?style=for-the-badge&logo=typescript",
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
              <img src={s.icon} alt="skill" id={s.id} />
            </div>
          )}
      </div>
      </div>
    </div>
  )
}

export default Skill