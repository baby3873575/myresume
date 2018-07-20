import React, { Component } from 'react';
import './App.css';
import MyNavbar from './navbar.js'
import { Alert } from 'reactstrap';
import AlertExample from './alert.js'
import { Container, Row, Col } from 'reactstrap';
import PortfolioGrid from './portfolio_grid.js';
import logo from './logo.svg';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      portfolios: []
    };
    this.getPortFolios = this.getPortFolios.bind(this);
  }
  getPortFolios(){

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            portfolios: result
          });
          
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: false,
            error
          });
        }
      )
   
    
  }
  componentDidMount(){
    this.getPortFolios()
  }

  render() {
    return (
      <div className="App">
        <MyNavbar />
        <Container style={{textAlign:'left'}} >
          <h1 className="my-4">Also check
            <a href="https://www.cakeresume.com/b2a020" ><small>my CV</small></a>
          </h1>
          <br />
          <PortfolioGrid portfolios={this.state.portfolios}/>


        </Container>        	  
      </div>
    );
  }
}

export default App;
