import React, { Component } from "react";
import { getRandom } from "../services/beers-api";
import NavBar from "./Navbar";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

export default class RandomBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: []
    };
  }

  componentDidMount() {
    getRandom()
      .then(beer => {
        this.setState({
          beer
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    console.log(this.state.beer);
    return (
      <div>
        <Container>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              className="px-5"
              variant="top"
              src={this.state.beer.image_url}
            />
            <Card.Body>
              <Card.Title>{this.state.beer.name}</Card.Title>
              <Card.Text>{this.state.beer.tagline}</Card.Text>
              <Card.Text>{this.state.beer.first_brewed}</Card.Text>
              <Card.Text>{this.state.beer.description}</Card.Text>
              <Card.Text>{this.state.beer.contributed_by}</Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}
