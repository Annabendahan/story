import React, { Component } from "react"
import { Link } from "gatsby"

import Backdrop from "./backdrop"

class Header extends Component {
  state = {
    show: false,
    show2: false,
    show3: false,
  }

  menuAppearsHandler = () => {
    this.setState({ show: true })
    setTimeout(
      function() {
        this.setState({ show2: true })
      }.bind(this),
      200
    )
    setTimeout(
      function() {
        this.setState({ show3: true })
      }.bind(this),
      600
    )
  }

  iconeAppearsHandler = () => {
    this.setState({ show2: false })
    setTimeout(
      function() {
        this.setState({ show: false })
      }.bind(this),
      200
    )
    setTimeout(
      function() {
        this.setState({ show3: false })
      }.bind(this),
      400
    )
  }

  render() {
    return (
      <div>
        <Backdrop
          show3={this.state.show3}
          show2={this.state.show2}
          clicked={this.iconeAppearsHandler}
        />
        <div
          className="footer
          "
        >
          {" "}
          <Link to="/">
            <p>
              <svg
                className="arrowl"
                width="10"
                height="10"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 7L14.25 13.9282L14.25 0.0717969L0 7Z"
                  fill="black"
                />
              </svg>{" "}
              Recommencer
            </p>
          </Link>
          <h3> WELCOME</h3>
          <div className="menuSmall" onClick={this.menuAppearsHandler}>
            <div className="menu-svg">
              <svg
                width="23"
                height="18"
                viewBox="0 0 23 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  y1="1"
                  x2="22.0935"
                  y2="1"
                  stroke="#072656"
                  stroke-width="2"
                />
                <line
                  y1="8.92944"
                  x2="22.0935"
                  y2="8.92944"
                  stroke="#072656"
                  stroke-width="2"
                />
                <line
                  y1="17"
                  x2="22.0935"
                  y2="17"
                  stroke="#072656"
                  stroke-width="2"
                />
              </svg>
            </div>
          </div>
          {/* </Link> */}
        </div>

        <div
          className="leftbar leftbar__mobile"
          style={{
            right: this.state.show2 ? "-10px" : "-300px",
            display: this.state.show ? "block" : "none",
          }}
        >
          {" "}
          <div className="leftbar__blackdiv"></div>
          <div className="contact-div">
            <h5> Laisse un mot 💜 </h5>
            <form>
              <input
                type="text"
                name={this.state.name}
                placeholder="Nom Prénom"
                onChange={this.handleChangeName}
              />
            </form>
            <form>
              <textarea
                type="textarea"
                rows="4"
                name={this.state.name}
                placeholder="Nom Prénom"
                onChange={this.handleChangeName}
              />
            </form>
          </div>
        </div>

        <div className="leftbar leftbar__desktop">
          <div className="leftbar__blackdiv"></div>
          <div className="contact-div">
            <h5> Laisse un mot 💜 </h5>
            <form>
              <input
                type="text"
                name={this.state.name}
                placeholder="Nom Prénom"
                onChange={this.handleChangeName}
              />
            </form>
            <form>
              <textarea
                type="textarea"
                rows="4"
                name={this.state.name}
                placeholder="Nom Prénom"
                onChange={this.handleChangeName}
              />
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
