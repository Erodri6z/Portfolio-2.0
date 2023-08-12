import '../../styles/landing.scss'

import React, { useEffect, useState} from 'react'



const Landing = () => {
  
  const titles = [ "Software Engineer", "Front-End Engineer", "Back-end Engineer", "Full-Stack Developer", "Web Developer"]
  const [currentIndex, setcurrentIndex] = useState(0)

  const cycleTitles = () => {
    setcurrentIndex(prevIndex => (prevIndex + 1) % titles.length)
  }
  
  useEffect(() => {
    const interval = setInterval(cycleTitles, 2000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  // const chooseATitle = (titles) => {
  //   let i = 0

  //   let n = titles.length
  //   const func = () => {
  //     if (i === n) {
  //       i = 0 
  //     }
  //   }
  //   setInterval(func, 5000)
  //   document.querySelector('.title-role').textContent = titles[i]
  //   i++
  //   // return( function update() {
  //   //   document.querySelector("title-role").textContent = titles[(i++ % titles.length)]
  //   //   setTimeout(update, 5000)
  //   // })()
  //   // let x = Math.floor((Math.random() * 4) + 1)
  //   // letsetInterval(x, 2000)
  //   // let titleChosen = titles[x]
  //   // console.log(x)
  //   // console.log(titleChosen)
  //   // return titleChosen
  // }
  // chooseATitle(titles)

  // setInterval(chooseATitle(titles), 3000)

  // const test = () => {
  //   console.log(chooseATitle(titles))
  // }

  // setInterval(chooseATitle(titles), 1000)

  return(
    <div className="landing-page">
      <div>
        <h1 id='landing-title'>Hi,<br /> I'm Erik Rodriguez,</h1>
        <h2 className='title-role'>{titles[currentIndex]}</h2>
        <p id='landing-text'>Technology is always evolving, let's perfect it!</p>
      </div>
    </div>
  )
}

export default Landing