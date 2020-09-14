import React from 'react'
import './cards.css'

const Card = props => (
    <div className="Card">
        <img src={props.image} />
        <div className="Card_text">
            <h3>{props.date}</h3>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>     
    </div>
)

export default Card