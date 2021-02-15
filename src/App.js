import React from 'react';
import './App.css';
import Menu from './components/Menu'
import Slider from "./components/Slider";
import SliderItems from "./components/SliderItems";


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
     
     
    }
  }

  render(){
    return (
      <div className="App">
        <Menu/>
        <Slider />
        
      </div>
    );
  };
}

export default App;
