import React from 'react';
import { Alert } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Mycarousel from './mycarousel.js';



class PortfolioGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };

    this.onDismiss = this.onDismiss.bind(this);
  }
 

  onDismiss() {
    this.setState({ visible: false });
  }

  render() {
    
    
    return (
      this.props.portfolios.map(portfolio=>{
        return(
          <React.Fragment>
            <Row>
            <Col md="7">
                <Mycarousel />
            </Col>
            <Col md="5">
                <h3>{portfolio.title}</h3> 
                <p>
                    {portfolio.body}
                </p>
                <a className="btn btn-primary" href="#">前往</a>
            </Col>
            </Row>
            <hr />
          </React.Fragment>
        );
      })     
    );
  }
}

export default PortfolioGrid;