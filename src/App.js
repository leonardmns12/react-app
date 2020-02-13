import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class Timer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      second : props.second,
      minute : props.minute,
      hour   : props.hour
    }
    

  }

  componentDidMount(){
   this.addInterval =  setInterval( () => this.increase() , 1000);
  }

  componentWillUnmount(){
    clearInterval(this.addInterval)
  }

  setZero = (state,props) => {
    let temp = this.state.second;
    console.log('masuk');
    if(parseInt(this.state.second) > 5){
      this.setState({second:0})
    }
  }
 
  
  increase(){
    this.setState((state,props) => ({
     second: parseInt(state.second) +1,
     hour : parseInt(state.hour) +1,
     minute : parseInt(state.minute) +1
    }));
  }


  render(){
    return(
      <div> {this.state.second} : {this.state.minute} : {this.state.hour} 
      <br></br>
      <button onClick={this.setZero}>Klik me</button>
      </div>
    )
  }
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Timer second="6" minute="0" hour="0" />
      </header>
    </div>
  );
}

export default App;
