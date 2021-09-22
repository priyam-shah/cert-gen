import React, { Component } from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import "./styles.css";

class Home extends Component {
  certificateWrapper = React.createRef();
  state = {
    Name: "",
  };
  render() {
    return (
      <div>
        <div className="App">
          <div className="Meta">
            <p>enter your name.</p>
            <input
              type="text"
              placeholder="name"
              value={this.state.Name}
              onChange={(e) => {
                this.setState({ Name: e.target.value });
              }}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                exportComponentAsPNG(this.certificateWrapper, {
                  html2CanvasOptions: { backgroundColor: null },
                });
              }}
            >
              Download
            </button>
          </div>

          <div id="downloadWrapper" ref={this.certificateWrapper}>
            <div id="certificateWrapper">
              <p>{this.state.Name}</p>
              <img
                src="https://imgurupload.org/files/Certi-gen.png"
                alt="Certificate"
                width="1024"
                height="768"
              />
            </div>
          </div>
        </div>
        <form>
          To do
          <br />
          <input type="checkbox" name="1"></input>
          <label for="1">fix download</label>
          <br />
          <input type="checkbox" name="2"></input>
          <label for="1"> implement csv name input</label>
          <br />
          <input type="checkbox" name="3"></input>
          <label for="1">implement certi distribution via name/id input</label>
        </form>
      </div>
    );
  }
}

export default Home;
