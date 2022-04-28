import React from "react"
import locationIcon from "../assets/icons8-location-48.png"


export default function Card (props){
    return(
        <>
            <div className="card">
                <img src={props.item.imageUrl} alt="location image" className="card--image"/>
                <div className="card--details">
                    <img src={locationIcon} className="card--icon"/>
                    <span className="uppercase">{props.item.location}</span>
                    <a href={props.item.googleMapsUrl} className="card--link">View on Google Maps</a>
                    <h1>{props.item.title}</h1>
                    <span className="bold">{props.item.startDate} - {props.item.endDate}</span>
                    <p className="card--description">{props.item.description}</p>
                </div>

            </div>
            <hr className="card--line"/>
        </>
    )
}