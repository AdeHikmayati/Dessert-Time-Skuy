
import Header from './header/header';
import React, {Component} from 'react';
import './App.css';
import Content from './content/Content';
import MyForm from './contact-form/MyForm'


class App extends Component{
  render() {
    return(
      <div className="App">
      <Header />
        <Content />
        <MyForm />
          
      </div>
    );
  }
}
export default App;