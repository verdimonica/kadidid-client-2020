import Axios from "axios";
import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
          <div>
            <img className="daily-pic" src="" alt="" />
          </div>
          <div className="count">6</div>
        </div>
        <h2 className="header">Little Monkeys</h2>
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
