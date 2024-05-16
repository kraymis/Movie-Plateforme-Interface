import React from 'react'
import backgroundVideo from '../assets/onepiece.mp4'
import style from "../BackgroundVideo/Background.module.css"
import moviesArray from "../data"


export const Background = ({num}) => {
  console.log(num)
  return (
    <div className={style.backgroundvideo}>
    <video autoPlay loop muted>
      <source src={moviesArray[num].video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    {/* Add other content on top of the video if needed */}
  </div>
  )
}
