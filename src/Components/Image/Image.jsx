import React from 'react'

function gifImage(props){
  return (
    <div className ='gif-box'>
        <img src={props.gifURL} alt=""></img>
    </div>
  )
  }

export default gifImage

