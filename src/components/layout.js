/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./style.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div>
        <div className="header">
          <p>
            PORTFOLIO
            <svg
              className="dash-thin"
              width="30"
              height="1"
              viewBox="0 0 30 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="2.18557e-08"
                y1="0.75"
                x2="30"
                y2="0.750002"
                stroke="black"
                stroke-width="0.5"
              />
            </svg>
          </p>
        </div>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
