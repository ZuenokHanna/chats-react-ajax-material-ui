import React from "react";
import Messages from "./messages";
import PostMessage from "./postmessage";
import Rooms from "./rooms";
import Grid from "@material-ui/core/Grid";
import SnackBar from "@material-ui/core/SnackBar";



export default class Main extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			currentRoom: null,
			open: false,
		}

		this.setRoom = this.setRoom.bind(this);
		this.closeSnack = this.closeSnack.bind(this);
	
	}

	setRoom(currentRoom, openSnack){
		if(openSnack){
			this.setState({currentRoom, open: openSnack});
		}
		this.setState({currentRoom});
		
	}

	closeSnack(){
		this.setState({open: false});
	}

	render(){

			
		return (
			<Grid container justify="center" spacing={24}>
				<Grid item xs={12} md={3}>
					<Rooms setRoom={this.setRoom} />
				</Grid>
				<Grid item xs={12} md={3}>
					<Messages currentRoom={this.state.currentRoom} />
					<PostMessage setRoom={this.setRoom} currentRoom={this.state.currentRoom} />
				</Grid>
				<SnackBar 
					open={this.state.open}
					message={"Message was sent"} 
					autoHideDuration={3000} 
					onClose={this.closeSnack}
					anchorOrigin={{vertical: "bottom", horizontal: "center"}} 
				/>
			</Grid>
			)
		
	}
};



