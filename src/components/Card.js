import React from "react"


export default function Card (props){
    return(
        <div className="card">
            <img src={props.item.imageUrl} alt="location image" className="card--image"/>
            <div className="card--details">
                <span className="capitalize">{props.item.location}</span>
                <a href={props.item.googleMapsUrl} className="card--link"/>
                <h1>{props.item.title}</h1>
                <span className="bold">{props.item.startDate} - {props.item.endDate}</span>
                <p className="card--description">{props.item.description}</p>
            </div>
            <hr className="gray"/>
        </div>
    )
}