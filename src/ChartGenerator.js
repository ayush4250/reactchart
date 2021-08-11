import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import CustomText from "./CustomText";

import ColorPicker from "./ColorPicker";
import SettingsListing from "./SettingsListing";
import ChartDisplay from "./ChartDisplay";
import sDetails from "./jsondata.json";

export class ChartGenerator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartTitle: "",
      chartDescription: "",
      currentLabel: "",
      currentNumber: "",
      currentColor: "",
      settingsListing: [],
      colors: [],
      labels: [],
      numbers: [],
      displayChart: false,
    };

    this.inputHandler = this.inputHandler.bind(this);
    this.addSettings = this.addSettings.bind(this);
    this.displayChart = this.displayChart.bind(this);
  }

  inputHandler(event) {
    if (event.target.name === "chartTitle") {
      //uploading the text
      this.setState({
        chartTitle: event.target.value,
      });
    }

    if (event.target.name === "chartDescription") {
      //uploading the text
      this.setState(
        {
          chartDescription: event.target.value,
        },
        () => {
          console.log("the current chart description");
        }
      );
    }
    if (event.target.name === "currentLabel") {
      //uploading the text
      this.setState({
        currentLabel: event.target.value,
      });
    }
    if (event.target.name === "currentNumber") {
      //uploading the text
      this.setState({
        currentNumber: event.target.value,
      });
    }
    if (event.target.name === "currentColor") {
      //uploading the text
      this.setState({
        currentColor: event.target.value,
      },
      ()=>{
        console.log(this.state.currentColor);
        console.log("currnt ");
      });
    }
  }

  addSettings(event) {
    let copySettings = this.state.settingsListing;

    copySettings.push({
      label: this.state.currentLabel,
      number: this.state.currentNumber,
      color: this.state.currentColor,
    });
    this.setState({
      settingsListing: copySettings,
    });

    let copyLabels = this.state.labels;

    copyLabels.push(this.state.currentLabel);

    this.setState({
      labels: copyLabels,
    });

    let copyNumbers = this.state.numbers;

    copyNumbers.push(this.state.currentNumber);

    this.setState({
      numbers: copyNumbers,
    });
  }

  displayChart() {
    this.setState(
      {
        displayChart: true,
      },
      () => {
        console.log("dispaly chart");
      }
    );
  }

 

  render() {
    {console.log(sDetails[0].country)}
    return (
      <Jumbotron>
        <Card bg="success" text="white">
          <Card.Header as="h1">Chart Generator</Card.Header>
          
          <Card.Body>
            <Container>
              <Row>
                <Col>
                  <CustomText
                    customId="chartTitle"
                    label="Title"
                    name="chartTitle"
                    placeholder="Enter Chart Title"
                    val={this.state.chartTitle}
                    inputHandler={this.inputHandler}
                    text="Chart title"
                  />
                </Col>
                <Col>
                  <CustomText
                    customId="chartDescription"
                    label="Description"
                    name="chartDescription"
                    placeholder="Type in a descripton"
                    val={this.state.chartDescription}
                    inputHandler={this.inputHandler}
                    text="Chart Description"
                  />
                </Col>
              </Row>
            </Container>

            {/* <Card bg="light" style={{ color: "black", marginTop: "1.5rem" }}>
              <Card.Header as="h1"> Title and description </Card.Header>
              <Card.Body></Card.Body>
            </Card> */}

            <Card bg="success" text="white">
              <Card.Header as="h1">Numeric value and label </Card.Header>
              <Card.Body>
                <Container>
                  <Row>
                    <Col>
                      <CustomText
                        customId="currentLabel"
                        label="label"
                        name="currentLabel"
                        placeholder="Label"
                        val={this.state.currentLabel}
                        inputHandler={this.inputHandler}
                        text="Label"
                      />
                    </Col>
                    <Col>
                      <CustomText
                        customId="currentNumber"
                        label="Numeric value"
                        name="currentNumber"
                        placeholder="Type in a descripton"
                        val={this.state.currentNumber}
                        inputHandler={this.inputHandler}
                        text="Numeric value"
                      />
                    </Col>
                    <Col>
                      <ColorPicker
                        val={this.state.currentColor}
                        name="currentColor"
                        inputHandler={this.inputHandler}
                      />
                    </Col>
                    <Col>
                      <Button
                        type="button"
                        size="lg"
                        variant="info"
                        style={{ marginTop: "2em" }}
                        onClick={this.addSettings}
                      >
                        Add Setings
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </Card.Body>
            </Card>

            <Card bg="success" text="white">
              <Card.Header as="h1"> Settings Listing </Card.Header>
              <Card.Body>
                <SettingsListing settings={this.state.settingsListing} />
              </Card.Body>
            </Card>

            <Card bg="info" text="white">
              <Card.Header as="h1"> Chart </Card.Header>
              <Card.Body>
                {this.state.displayChart === false ? (
                  <div style={{ textAlign: "center" }}>
                    <Button
                      type="button"
                      variant="danger"
                      size="lg"
                      onClick={this.displayChart}
                    >
                      Create Chart
                    </Button>
                  </div>
                ) : (
                  //this.state.displayChart === true
                  <ChartDisplay
                    title={this.state.chartTitle}
                    description={this.state.chartDescription}
                    numbers={this.state.numbers}
                    labels={this.state.labels}
                    colors={this.state.colors}
                  />
                )}
              </Card.Body>
            </Card>
            {
              // ternary operator format
              //  ()
              //  ?()
              //  :()
              this.state.displayChart === true ? (
                <Card style={{ color: "black", marginTop: "1rem" }}>
                  <Card.Body>
                    <Button variant="success" size="lg" type="button">
                      Save Chart
                    </Button>
                  </Card.Body>
                </Card>
              ) : null
            }
          </Card.Body>
        </Card>
       
      </Jumbotron>
    );
  }
}
