import React from "react";
import service from "./service";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";


class Rooms extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			rooms: null
		}
	}

	componentDidMount(){
		service.getData("http://localhost:6060/api")
		.then( response => {
			this.setState({rooms: response.chats}, () => {
				console.log(this.state);
			})
		});
		
	}

	render(){

		let rooms;
		if(this.state.rooms){
			rooms = this.state.rooms.map( (room, index) => {
				return (<ListItem
							button 
							key={index} 
							onClick={ () => {
								this.props.setRoom(room.id);
								// room.id
							} }
							>
							<ListItemText>
							{room.name}
							</ListItemText>
						</ListItem>)
			} )
		}

		return (
				<List // style={{border: "1px solid grey"}}
				>
					<ListItem>
						<ListItemText>Chat Rooms</ListItemText>
					</ListItem>
					{rooms}		
				</List>
			)
	}
}

export default Rooms;