import '../../styles/landing.scss'

import React, { useEffect, useState} from 'react'



const Landing = () => {
  
  const titles = [ "Development Tester", "Software Engineer", "Front-End Engineer", "Back-end Engineer", "Full-Stack Developer", "Web Developer", "Web Designer", "Technical Analyst", "Integration Developer", ]
  const [currentIndex, setcurrentIndex] = useState(0)
  const [shouldAnimate, setShouldAnimate] = useState(false)

  const cycleTitles = () => {
    setcurrentIndex(prevIndex => (prevIndex + 1) % titles.length)
    setShouldAnimate(true)
    setTimeout(() => {
      setShouldAnimate(false)
    }, 6000)
  }
  
  useEffect(() => {
    const interval = setInterval(cycleTitles, 6005)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return(
    <div className="landing-page">
      <div>
        <h1 id='landing-title'>Hi,<br /> I'm Erik Rodriguez,</h1>
        <div className='text-container'>
          <span className={`title-role ${shouldAnimate? `title-animation` : ``}`}>{titles[currentIndex]}</span>
        </div>
        <p id='landing-text'>Technology is always evolving, let's perfect it!</p>
      </div>
    </div>
  )
}

export default Landing