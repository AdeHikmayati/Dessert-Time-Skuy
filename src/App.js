
import Header from './header/header';
import React, {Component} from 'react';
import './App.css';
import Content from './content/Content';

class App extends Component{
  render() {
    return(
      <div className="App">
        <Header />

      <Content />
        </div>
    );
  }
}
export default App;