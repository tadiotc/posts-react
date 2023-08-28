import logo from './logo.png';
import './App.css';
import { Component } from 'react';

function teste(){
  alert('clicou outro')
}

class App extends Component{

  state = {
      name:'tadio caramaschi',
      out: 'outra coisa',
      counter: 0
    };


  handleClick(){
    this.setState( { name: 'Junior' } )
  }

  handleAClick = (event) => {
    event.preventDefault();
    const {counter} = this.state;
    this.setState( { counter: counter + 1 } )    
  }

  render(){

    const {name, counter} = this.state;

    return (
      <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <div className='out' onClick={ this.handleClick }> { name } { counter } </div>

          <div className='out' onClick={()=>{  teste() }}> { this.state.out } </div>

          <a 
          href='deguste.online' 
          onClick={ this.handleAClick } 
          className='App-link'
          >
           o valor de counter é: { counter }

          </a>

        </header>
      </div>
      </>
    );


  }
}


export default App;
