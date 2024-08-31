import React, { useState } from 'react'
const data = [
    "https://i.ytimg.com/vi/z3iKpCNlWU8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDx1Tbs2-3cwiU-zbwE2Ad0z9JHEA", "https://i.ytimg.com/vi/sHG3Sf6XN9g/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB6SHMSEy-oIJrOtYErQiGODf_DQQ", "https://i.ytimg.com/vi/DQP53RgTWMA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBl4trD9pvxkKrIUvjkGXYoROUAjg"
]


export default function ImageSlider() {
   const  handlePrevious = () => {
    setImg(img -1)
   }
   const  handleNext = () => {
    setImg(img + 1)
   }
    const [img , setImg ] =  useState(0)
  return (
    <div> 

    <button onClick={handlePrevious}> Previous  </button>
    <img  src={data[img] } alt='img'  />
    <button onClick={handleNext}> Next  </button>

    </div>

  )
}
