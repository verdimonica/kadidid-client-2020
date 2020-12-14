import Axios from "axios";
import React, { Component } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

export default class ChildrenList extends Component {
  state = {
    children: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/child", { withCredentials: true })
      .then((response) => {
        const children = response.data;
        this.setState({ children });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className="right-bar">
        <div className="top-part">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-users"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          <div className="count">6</div>
        </div>
        <div className="header">Little Monkeys</div>
        {this.state.children.map((oneChild) => {
          return (
            <div className="task-box yellow">
              <div className="description-task">
                <div className="date">{oneChild.months}</div>
                <div className="child-name">{oneChild.name}</div>
              </div>
              <Link to={`/child/${oneChild._id}`}>
              <div className="more-button">More</div>
              </Link>
            </div>
          );
        })}

      </div>
    );
  }
}
