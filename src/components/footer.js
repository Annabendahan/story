import React, { Component } from "react"
import { Link } from "gatsby"

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__right">
          {" "}
          {this.props.first}{" "}
          <svg
            className="dash-thin"
            width="23"
            height="1"
            viewBox="0 0 23 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="2.18557e-08"
              y1="0.75"
              x2="23"
              y2="0.750002"
              stroke="black"
              stroke-width="0.5"
            />
          </svg>{" "}
          {this.props.second}{" "}
          <svg
            className="dash-thin"
            width="23"
            height="1"
            viewBox="0 0 23 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="2.18557e-08"
              y1="0.75"
              x2="23"
              y2="0.750002"
              stroke="black"
              stroke-width="0.5"
            />
          </svg>{" "}
        </div>
      </div>
    )
  }
}

export default Footer
