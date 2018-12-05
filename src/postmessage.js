import React from "react";
import service from "./service";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default class PostMessage extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			userText: "",
		}
		this.getText = this.getText.bind(this);
		this.sendMessage = this.sendMessage.bind(this);
	}

	getText({target:{value:userText}}){
		this.setState({userText});
	}


	sendMessage(){
		if(this.state.userText){
			let msgObj = {
				text: this.state.userText,
				userId: 12345,
				roomId: this.props.currentRoom,
			};

			service.postData("http://localhost:6060/api/addmessage", JSON.stringify(msgObj))
			.then( () => {
				this.setState({userText: ""});
				this.props.setRoom(this.props.currentRoom, true);
			} );
		}
	}

	render(){
		return (
			<div>
					<div className="input-group">
						<TextField
							label="Enter message text"
							value={this.state.userText}
							onChange={this.getText}
							fullWidth
						 />
						 <Button color="primary" onClick={this.sendMessage}>
						 	Add message
						 </Button>
							{/*<span className="input-group-btn">
								<button 
								className="btn btn-default"
								onClick={this.sendMessage}
								>Add Message</button>
							</span>*/}
					</div>	
				</div>)
	}
}