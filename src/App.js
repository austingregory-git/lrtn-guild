import React, {Component} from 'react';
import './App.css';
import './components/HomeImage';

/*class App extends Component {
		render() {
			return (
				<div className="App">
					<h1>Hello World!</h1>
				</div>
			);
		}
}*/

class App extends Component {
		render() {
			return (
				<form>
					<h1> Hello </h1>
					<p> Enter Your Character Name </p>
					<input
						type="text"
					/>
				</form>
			);
		}
}

export default App;
