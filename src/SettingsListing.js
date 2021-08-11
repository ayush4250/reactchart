import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export class SettingsListing extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {

    if(this.props.settings.length === 0){
        //
        return (
            <h3 style={{textAlign: 'center'}}>No items availabel</h3>
        )
    }
    //saving settings of settings
    const settings = this.props.settings;

    let htmlMarkup = [];

    settings.map((settingsObject, index) => {
      htmlMarkup.push(
        <Row key={"index" + index}>
          <Col>{settingsObject.label}</Col>
          <Col>{settingsObject.number}</Col>
          <Col>{settingsObject.color}</Col>
        </Row>
      );
    });

    return (
      <Container>
        <Row>
          <Col>
            <h4>Labels</h4>
          </Col>
          <Col>
            <h4>Numbers</h4>
          </Col>
          <Col>
            <h4>Colors</h4>
          </Col>
        </Row>
        {htmlMarkup}
      </Container>
    );
  }
}

export default SettingsListing;
