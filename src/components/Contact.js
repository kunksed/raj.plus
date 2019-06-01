import React, { Component } from 'react'
import { Link } from 'gatsby'
import NewsletterForm from './NewsletterForm'

export default class Contact extends Component {
  render() {
    return (
      <>
        <h1>Get in Touch.</h1>

        <p>To be honest, I am not excited by the thought of phone calls, especially unscheduled ones. 😶</p>
        <p>I am a digital native, and it isn't hard to get in touch with me over the internet.</p>
        <p>For a quick response, DM me on Twitter : I'm always around. If I do not reply, @ me to get my attention.</p>

          Other ways of reaching to me include...
        <ul>
          <li> <strong> Twitter </strong> : <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/kunksed">kunksed</a></li>
          <li> <strong> Email </strong> : hi [at] raj [dot] plus / raj [at] novasemita [dot] com</li>
          <li> <strong> GitHub </strong> : <a target="_blank" rel="noopener noreferrer" href="https://github.com/kunksed">kunksed</a></li>
          <li> <strong> LinkedIn </strong> : <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/raj-kunkolienkar">raj-kunkolienkar</a></li>
          <li> <strong> Facebook </strong> : <a target="_blank" rel="noopener noreferrer" href="https://facebook.com/rajkunkolienkar">rajkunkolienkar</a></li>
        </ul>

        <h3> My Newsletter! 😬 </h3>
        <p>
          I am trying to regularly write down thoughts on mental models and frameworks, adventures of life as a founder, 
          web development, suggestions for new apps and products, the future of learning +
          what I am reading and listening to as of late. Expect me to pass occasional updates on my life as well.
          Subscribe, maybe? 😄
        </p>
        <NewsletterForm />
      </>
    )
  }
}
