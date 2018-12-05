export default {
	getYoutubeData: function(term){
		return new Promise((resolve, reject) => {
			let req = new XMLHttpRequest();
			req.onload = () => {
				resolve(req.response);
			}
			req.onerror = () => {
				reject(req.statusText);
			}
			req.open("GET", `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBoPX3J0F_VGyr4SgTx-RKBMY6lOXvF37M&q=${term}&type=video`, true);
			req.responseType = "json";
			req.send();
		});

	},
	getData: function(url){
		return new Promise((resolve, reject) => {
			let req = new XMLHttpRequest();
			req.onload = () => {
				resolve(req.response);
			}
			req.onerror = () => {
				reject(req.statusText);
			}
			req.open("GET", url, true);
			req.responseType = "json";
			req.send();
		});
	},
	postData: function(url, data){
		return new Promise((resolve, reject) => {
			let req = new XMLHttpRequest();
			req.onload = () => {
				resolve(req.response);
			}
			req.onerror = () => {
				reject(req.statusText);
			}
			req.open("POST", url, true);
			req.responseType = "json";
			req.setRequestHeader("Content-Type","application/json");
			req.send(data);
		});
	}
}