import '../../styles/landing.scss'

const Landing = () => {
  
  const chooseATitle = () => {
    const titles = ["Software Engineer", "Front-End Engineer", "Back-end Engineer", "Full-Stack Developer", "Web Developer"]
    let x = Math.floor((Math.random() * 4) + 1)
    let titleChosen = titles[x]
    return titleChosen
  }


  return(
    <div className="landing-page">
      <div>
        <h1 id='landing-title'>Hi,<br /> I'm Erik Rodriguez,<br /> {chooseATitle()}</h1>
        <p id='landing-text'>Technology is always evolving, let's perfect it!</p>
      </div>
    </div>
  )
}

export default Landing