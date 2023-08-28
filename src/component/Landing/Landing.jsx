import '../../styles/landing.scss'

import React, { useEffect, useState} from 'react'



const Landing = () => {
  
  const titles = [ "Software Engineer", "Front-End Engineer", "Back-end Engineer", "Full-Stack Developer", "Web Developer", "Web Designer", "Technical Analyst", "Integration Developer", "Development Tester"]
  const [currentIndex, setcurrentIndex] = useState(0)
  const [shouldAnimate, setShouldAnimate] = useState(false)

  const cycleTitles = () => {
    setcurrentIndex(prevIndex => (prevIndex + 1) % titles.length)
    setShouldAnimate(true)
    setTimeout(() => {
      setShouldAnimate(false)
    }, 1000)
  }
  
  useEffect(() => {
    const interval = setInterval(cycleTitles, 2000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return(
    <div className="landing-page">
      <div>
        <h1 id='landing-title'>Hi,<br /> I'm Erik Rodriguez,</h1>
        <h2 className={`title-role ${shouldAnimate? `title-animation` : ``}`}>{titles[currentIndex]}</h2>
        <p id='landing-text'>Technology is always evolving, let's perfect it!</p>
      </div>
    </div>
  )
}

export default Landing