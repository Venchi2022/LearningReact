import React from 'react'
import "./card.css"
import Button from '../Button/Button'

const card = (props) => {
  return (
    <div className='cardContainer'>
        <img className = "cardImage" src = {props.image} />
        <div>
            <div className = "cardTitle">{props.title}</div>
            <div className = "cardMainText">{props.mainText}</div>
            <div className = "cardSmallText">{props.smallText}</div>
            <Button className = "Button" text={props.buttonText} />
        </div>
    </div>
  )
}

export default card