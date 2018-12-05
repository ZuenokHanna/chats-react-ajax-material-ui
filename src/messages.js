import React from "react";
import service from "./service";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export default class Messages extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			messages: [],
		}

	}

	componentDidMount(){
		//this.setState({userText: this.props.text})
	}

	componentWillReceiveProps(nextProps){
		service.getData(`http://localhost:6060/api/${nextProps.currentRoom}/messages`)
		.then( messages => {
			if(messages){
				this.setState({messages});
				}
			}, () => {
			console.log(this.state);
		});
	}


	render(){
		let messages;
		if(this.state.messages.length){
			messages = this.state.messages.map( (message, index) => {
				return (<ListItem key={index}><ListItemText>{message.text}</ListItemText></ListItem>)
			} )
		}
		return (
					<List>
						<ListItem>
							<ListItemText>
								Messages
							</ListItemText>
						</ListItem>
						{messages}		
					</List>
			)
	}
}
