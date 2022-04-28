import React from "react"
import Icon from "../assets/icons8-globus_-asien-50.png"

export default function NavBar (){
    return(
        <nav className="nav">
            <img src={Icon} alt="globe icon" className="nav--icon"/>
            <p className="nav--title">my travel journal.</p>
        </nav>
    )
}