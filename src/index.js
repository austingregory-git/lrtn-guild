import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {names} from './backend/GuildRosterInfo.js'
import {onames} from './backend/GuildRosterInfo.js'

export {names, onames};

//var index = require ('./template.html');
//const header = <h1>Test</h1>;

//getData(response.data)

class Header extends React.Component {
  render() {
    return (
	  <div>
      <h1 style={{color: "cyan"}}> Lemme Run The Numbers</h1>
	  </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));


/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
