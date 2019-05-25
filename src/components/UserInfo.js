import React, { Component } from 'react'
import tania from '../../content/images/taniawarm.jpg'

export default class UserInfo extends Component {
  render() {
    return (
      <aside className="note">
        <div className="container note-container">
          <div className="flex-author">
            <div className="flex-avatar">
              <img className="avatar" src={tania} alt="Tania Rascia" />
            </div>
            <div>
              <p>
                {`I'm Tania, a full-stack software developer specializing in modern JavaScript. I make
              open source coding projects and write free, quality articles and tutorials that help
              thousands of people daily. No ads, no sponsored posts, no bullshit.`}
              </p>
            </div>
          </div>
        </div>
      </aside>
    )
  }
}
