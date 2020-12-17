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
      .get(`${process.env.REACT_APP_API_URL}/api/child`, { withCredentials: true })
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
         
          <div className="count">
          </div>
        </div>
        <h2 className="header">Little Monkeys</h2>
        {this.state.children.map((oneChild) => {
          return (
            <div className="task-box yellow">
              <div className="description-task">
                <div className="age">{oneChild.months} Months old</div>
                <Link to={`/child/${oneChild._id}`} className="child-name">
                <div >{oneChild.name}</div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

    );
  }
}
