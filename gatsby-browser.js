/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

// gatsby-browser.js
import React from "react"

import { ParallaxProvider } from "react-scroll-parallax"

export const wrapRootElement = ({ element }) => {
  return <ParallaxProvider>{element}</ParallaxProvider>
}
