import React, { Component } from "react"
import Footer from "./footer"
import { useState, useEffect } from "react"

import { Link, navigate } from "gatsby"

import Layout from "../components/layout"

class ProjectLayout extends Component {
  state = {
    mounted: false,
    away: false,
  }

  componentDidMount() {
    setTimeout(
      function() {
        this.setState({ mounted: true })
      }.bind(this),
      500
    )
  }
  handleScroll = e => {
    // this.setState({ project: this.setState.project + 1 })
    // console.log(this.state.project)
    this.setState({ away: true })
    console.log("scrolling")
  }

  render() {
    return (
      <div>
        <div>{this.props.line}</div>

        <div
          className="project-layout"
          onWheel={() => this.handleScroll()}
          style={{
            transform: this.state.away
              ? "translateX(-100vw)"
              : "translateX(0vh)",
            transition: "transform 1s cubic-bezier(0.82, 0.0, 0.18, 1.0)",
          }}
        >
          <div className="project-layout__content">{this.props.content}</div>
        </div>
      </div>
    )
  }
}

export default ProjectLayout
