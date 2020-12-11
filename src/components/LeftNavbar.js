import React, { Component } from 'react'

class LeftNavbar extends Component {
    render() {
        return (
                <div class="left-content">
      <ul className="action-list">
        <li classN="item">
          <span>Inbox</span>
        </li>
        <li class="item">
          <span> Today</span>
        </li>
        <li class="item">
          <span>Upcoming</span>
        </li>
        <li class="item">
          <span>Important</span>
        </li>
        <li class="item">
          <span>Meetings</span>
        </li>
        <li class="item">
          <span>Trash</span>
        </li>
      </ul>
      <ul class="category-list">
        <li class="item">
          <span>Family</span>
        </li>
        <li class="item">
          <span>Vacation</span>
        </li>
        <li class="item">
          <span>Festival</span>
        </li>
        <li class="item">
          <span>Concerts</span>
        </li>
      </ul>
    </div>
        )
    }
}

export default LeftNavbar;