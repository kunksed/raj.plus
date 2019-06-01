import React, { Component } from 'react'

export default class NewsletterForm extends Component {
  render() {
    return (
      <form
        id="newsletter-form"
        className="newsletter-form"
        action="https://hooks.zapier.com/hooks/catch/5053054/vtq8u1/silent/"
        method="POST"
        acceptCharset="utf-8"
        target="_blank"
      >
        <input type="email" name="email" required className="email" placeholder="Email address" />
        <input type="hidden" name="substack" value="raj" />
        <input type="submit" name="submit" id="submit-sidebar" value="Submit" />
      </form>
    )
  }
}
