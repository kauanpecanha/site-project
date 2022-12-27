import React from 'react'
import "./Card1.css"

const Card1 = props => {
    if(props.descriptionGray){
        return(
            <div className="card1">
                <div className="card-title">
                    <p>{props.title}</p>
                </div>
                <div className="card-description-red">
                    <p>{props.descriptionRed}</p>
                </div>
                <div className="card-description-gray">
                    <p>{props.descriptionGray}</p>
                </div>
            </div>
        )
    }
    else
    {
        return(
            <div className="card1">
                <div className="card-title">
                    <p>{props.title}</p>
                </div>
                <div className="card-description-red">
                    <p>{props.descriptionRed}</p>
                </div>
            </div>
        )
    }
}

export default Card1;