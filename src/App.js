import React from "react"

import NavBar from "./components/NavBar"
import Card from "./components/Card"
import data from "./data"

export default function App (){
    console.log(data)
    const dataItems = data.map((item)=>{
        return <Card
            key={item.title}
            item={item}
        />
    })
    return(
        <div>
            <NavBar/>
            <section className="cards-list">
                {dataItems}

            </section>

        </div>
    )
}