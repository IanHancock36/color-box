import React, {Component} from "react";
import './Box.css'
//constructors are used when you are declaring state. 

class Box extends Component {
    static defaultProps ={
        allColors: ["purple","magenta","lilac","pink"]
    };
constructor(props){
super(props);
this.state ={ color: 'purple'};
this.handleClick = this.handleClick.bind(this);
}
//below there are the double curly braces that is when you put an object inline I am using a "background object"
//set the backgroundColor to the state listed above in constructor. this.state.color
//put the handleCLick above the render function.
// put handle click in the constructor and bind it so when referring to "this" in this.handleClick it knows "this" is handleCLicks "this" not a state. 
//Now make random color pop up now going to add a helpers js file to make that happen. 

handleClick(){

}
render(){
    return(
        <div className= "Box" style={{backgroundColor: this.state.color}} onClick={this.handleClick}> 

        </div>
    )
}

}

export default Box; 
