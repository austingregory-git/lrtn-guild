import React, {Component} from 'react';
import './App.css';
import './components/HomeImage';
import * as rosterinfo from './index.js';
import fetchRosterInfo from './backend/GuildRosterInfo';

var gri = require('./backend/GuildRosterInfo.js');

/*class App extends Component {
		render() {
			return (
				<div className="App">
					<h1>Hello World!</h1>
				</div>
			);
		}
}*/
console.log(rosterinfo.onames);
var onames = rosterinfo.onames;

class Connect extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  callApi = async () => {
    const response = await fetch('http://localhost:5000/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };
  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/hello', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    this.setState({ responseToPost: body });
  };
render() {
    return (
      <div>
        <p>{this.state.response}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseToPost}</p>
      </div>
    );
  }
}

class NavBar extends React.Component {
	render() {
		return(	
			<div>
              <ul id="nav2">
                <li><a href="#Home">Home</a></li>
                <li><a href="#Roster">Roster</a></li>
                <li><a href="#Achievements">Achievements</a></li>
                <li><a href="#Gallery">Gallery</a></li>
				<li style={{float: 'right'}}><a href="#about">About</a></li>
              </ul>
            </div>
		);
	}
}

class Roster extends React.Component {
	render() {
		//fetchRosterInfo();
		return(
			
			<div>
				<div>{this.names}</div>
			</div>
		);
	}
}

class App extends Component {
		render() {
			return (
				<div>
					<NavBar/>
					<div>
						<h1 style={{color: "cyan", textAlign: 'center', fontSize: '64px'}}> Lemme Run The Numbers</h1>
					</div>
					<Roster/>
					<Connect/>
				</div>
			);
		}
}

export default App;
