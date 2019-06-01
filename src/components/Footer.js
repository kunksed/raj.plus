import React, { Component } from 'react'
import { Link } from 'gatsby'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer container">
        <a href="https://twitter.com/kunksed" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a
          href="https://github.com/kunksed/raj.plus"
          target="_blank"
          rel="noopener noreferrer"
        >
          Site Repo
        </a>
        <a
          href="https://github.com/taniarascia/taniarascia.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          OG source
        </a>
      </footer>
    )
  }
}
