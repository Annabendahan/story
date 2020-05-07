import React, { Component } from "react"
import { Link } from "gatsby"
import { navigate } from "@reach/router"

class IndexPage extends Component {
  state = {
    count: 1,
    mount: true,
    show: true,
  }

  componentDidMount() {
    setTimeout(
      function() {
        this.setState({
          show: false,
        })
      }.bind(this),
      200
    )

    setTimeout(
      function() {
        this.setState({
          count: Math.floor(Math.random() * (30 - 10 + 1) + 10),
        })
      }.bind(this),
      600
    )
    setTimeout(
      function() {
        this.setState({
          count: Math.floor(Math.random() * (60 - 31 + 1) + 31),
        })
      }.bind(this),
      900
    )
    setTimeout(
      function() {
        this.setState({
          count: Math.floor(Math.random() * (95 - 61 + 1) + 61),
        })
      }.bind(this),
      1200
    )
    setTimeout(
      function() {
        this.setState({ count: 100 })
      }.bind(this),
      1400
    )
    setTimeout(
      function() {
        this.handleGo()
      }.bind(this),
      1700
    )
  }

  handleGo = () => {
    this.setState({ mount: false })
    setTimeout(
      function() {
        navigate("/start/")
      }.bind(this),
      1000
    )
  }

  render() {
    return (
      <div>
        {" "}
        <div
          className="landingg"
          style={{
            transform: this.state.mount
              ? "translateY(0vh)"
              : "translateY(-100vh)",
            transition: "transform 1s cubic-bezier(0.82, 0.0, 0.18, 1.0)",
          }}
        >
          <div
            className="hide"
            style={{
              transform: this.state.show
                ? "translateY(0vh)"
                : "translateY(-100vh)",
              transition: "transform .4s cubic-bezier(0.82, 0.0, 0.18, 1.0)",
            }}
          ></div>
          <p>{this.state.count} %</p>
        </div>
      </div>
    )
  }
}

export default IndexPage
