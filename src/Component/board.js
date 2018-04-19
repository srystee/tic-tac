import React,{ Component } from 'react';
import './board.css';
import Box from './box';
import './box.css';

class board extends Component{
    constructor(props){
        super(props);
        this.state={
            currentPlayer:"X"
        }
    }

    render(){
        return(
            <div className="board">
            {
                [...Array(9)].map((v,index)=>{
                    return <Box value={""}
                       key={index}
                       changePlayer={() => this.changeCurrentPlayer()}
                       currentPlayer={this.state.currentPlayer}
                       />
                })
            }
               
            </div>
        )
    }

    changeCurrentPlayer(){
        let nextPlayer;
        nextPlayer=this.state.currentPlayer==="X"?'O':'X';

        this.setState({
            currentPlayer:nextPlayer
        })
        console.log(this.state.currentPlayer)
    }


}

export default board;
