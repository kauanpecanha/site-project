import React from 'react'

const Card2 = props => {
    const background = {
        backgroundImage: props.background
    }
    return(
        <div className="card2">
            <div className="card-title">
                <p>{props.title}</p>
            </div>

            <div className="card-description">
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Card2;