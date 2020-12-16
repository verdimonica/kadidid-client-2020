import React, { Component } from 'react'
import axios from 'axios';

 class ChildToday extends Component {
    state = {
        name:"",
        image:""
    }
    componentDidMount() {
        axios.get(`${process.env.REACT_APP_API_URL}/api/child/5fd27255dfbdc96ef6f67429`)
        .then( (response) => {
            const child = response.data;

            this.setState( {image: child.image, name: child.name } )
        })
        .catch( (err) => {
            this.setState( { } )
        });
    }
    render() {
        return (
            <div>
                <div className="header upcoming">
                    <h2>{this.props.name} Today</h2>
                    <div>
                        <img className="daily-pic" src={this.props.image}
                        alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}
export default ChildToday;