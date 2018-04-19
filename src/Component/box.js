import React,{ Component } from 'react';
import './board.css';

class Box extends Component{
    constructor(props){
        super(props);
        this.state={
            value:props.value
        }
    }
    clickEventHandler=this.handleClick.bind(this);
    render(){
        return(
               <div className="box"
                onClick={this.clickEventHandler}>
               {this.state.value}
               </div>
        )
    }

    handleClick(){
        if(!this.state.value) {
            this.setState(({
                value: this.props.currentPlayer
            }));
            this.props.changePlayer();
        }
    }

    
}

export default Box;