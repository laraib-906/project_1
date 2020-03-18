import React from 'react'
import './gear.css'


export default class Gear extends React.Component{
render(){
    return(
        <div>
      <div className="Move-gear">
      <img src={process.env.PUBLIC_URL + "imagegear.svg"} className="gear-image" alt="logo" width="300px"/> 
      <img src={process.env.PUBLIC_URL + "gear-world.svg"} className="gear-image" alt="logo" width="160px"/> 
        
      </div>
        </div>
    )
}
}