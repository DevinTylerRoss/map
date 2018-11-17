import React from "react"
import "./Marker.css"
import IceCreamIcon from "./ice-cream.png";


class Marker extends React.Component{
    handleClick=()=>{
        this.props.handleClick(this.props.place)
    };
    render(){
        let classes='marker';
        if(this.props.selected){
            classes = '';
            classes+= ' selected';
           
        }
        return (<div tabIndex='0'className={classes} onClick={this.handleClick}>
            <img  alt="ice cream marker" src={IceCreamIcon}/>
            <div className="infoWindow">
                <p className="name">{this.props.name}</p>
                <p>{this.props.review}</p>
            </div>
        
        </div>)
    }
}
export default Marker;