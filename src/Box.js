import React, {Component} from "react";
import {choice} from './Helpers'
import './Box.css'
//constructors are used when you are declaring state. 

class Box extends Component {
    static defaultProps ={
        allColors: ["purple","magenta","violet","pink"]
    };
//this why you use super(props) because we are using props in the constructor.
    //below adding a props to the state of color  this.props.allColors is the prop listed above. 
    constructor(props){
super(props);
this.state ={ color: choice(this.props.colors) };
this.handleClick = this.handleClick.bind(this);
}
//below there are the double curly braces that is when you put an object inline I am using a "background object"
//set the backgroundColor to the state listed above in constructor. this.state.color
//put the handleCLick above the render function.
// put handle click in the constructor and bind it so when referring to "this" in this.handleClick it knows "this" is handleCLicks "this" not a state. 
//Now make random color pop up now going to add a helpers js file to make that happen. 
pickColor(){
    //using a do while loop below alows you to pick a new color and not same one picks twice. 
    let newColor;
    do{
        newColor = choice(this.props.colors);
    }
    while (newColor === this.state.color)
    this.setState({color: newColor}); 
}
handleClick(){
    this.pickColor()

}
render(){
    return(
        <div className= "Box" style={{backgroundColor: this.state.color}} onClick={this.handleClick}> 

        </div>
    )
}

}

export default Box; 
