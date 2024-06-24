import React from "react";
export class EventBindingFromStateProperty extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: "",
    };
  }

  handleButtonClick(e) {
    this.setState({
      msg: `${e.target.name}`,
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="mb-2 mt-2">
            <button
              className="btn btn-danger"
              id="btnLogin"
              name="Login"
              onClick={this.handleButtonClick.bind(this)}
            >
              Login
            </button>
          </div>
          <p>{this.state.msg}</p>
        </div>
      </React.Fragment>
    );
  }
}
