import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Greeting from "./components/greeting";
import ImageAlbum from "./components/imageAlbum";
import logo from "./assets/logos/confederate_p.jpg";
import Button from "./components/button";

function Info() {
  return (
    <div className="App" id="App">
      <Greeting name="bagus suryadi" /> {/* ini adalah komponen */}
      <ImageAlbum imageSrc={logo} /> {/* ini adalah komponen */}
    </div>
  );
}

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrementCount = () => {
    this.setState({
      count: (this.state.count = 0)
    });
  };

  render() {
    let { count } = this.state;
    return (
      <div>
        <Info />
        <h2>Count: {count} </h2>
        <Button title={"+"} task={() => this.incrementCount()} />
        <Button title={"-"} task={() => this.decrementCount()} />
      </div>
    );
  }
}
