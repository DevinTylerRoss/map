import React from 'react'
import './place.css'

class Place extends React.Component{
    handleClick=()=>{
        this.props.handleClick(this.props.place)
    };
    render(){
        const title= this.props.place.name;
       
        return(
            <div role='navigation' tabIndex='0' className="place" onClick={this.handleClick}>
                
                <div className="place-title">
                    {title}
                </div>
                
            </div>
        );
    }
}
export default Place;