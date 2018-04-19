import React,{ Component } from 'react';
class User extends Component{
	constructor (props){
		super (props)
		this.state={
			fullName: props.firstname + ' '+ props.lastname,
			userName: 'userName'
		}
	}
	render(){
		return (
			<div>
				<h1 onClick={()=>this.handleClick()}>
			 		This is {this.state.fullName}.
				</h1> 
				<p>{this.state.userName}</p>
				<input name="Username" type="text" value={this.state.userName} onChange={(event) => this.handleChange(event)} />
			</div>
			
		)
	}

 handleClick=function(name){
	alert( this.state.fullName + "clicked")
}

handleChange=function(event){
	this.setState({
		userName: event.target.value
	})
}

export default User;