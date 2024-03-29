import '../../styles/contact.scss'
import '../../styles/animations.scss'

const Contact = () => {
  const contactInfo = [{
    name: 'Github',
    url: 'https://github.com/Erodri6z',
    icon: <i className="bi bi-github"></i> ,
  },{
    name: 'Email',
    url: 'mailto:erikrodriguez2417@gmail.com',
    icon: <i className="bi bi-envelope"></i>,
  },{
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/erik-r-b02085200/',
    icon: <i className="bi bi-linkedin"></i>,
  },{
    name: 'Resume',
    url: 'https://docs.google.com/document/d/1FMWvoCcf3fbe7SIkYS6ZjZof-SOq73A45zsNtsLfDTE/edit?usp=sharing',
    icon: <i className="bi bi-file-earmark-person-fill"></i>,
  }]
  return(
    <div className="contact-page">
      <h1 id="contact-me">Contact Me</h1>
      <div className='contact-links'>
        <>
        {contactInfo.map(icon => 
        <div className="contact-icons" key={icon.name}>
          <a href={icon.url}>
            <h1>{icon.icon}</h1> 
            <h3>{icon.name}</h3>
          </a>
        </div>
          )}
        </>
      </div>
    </div>
  )
}

export default Contact