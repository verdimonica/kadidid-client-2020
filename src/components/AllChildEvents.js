import React, { Component } from 'react'
import axios from 'axios';


class AllChildEvents extends Component {
    state = {
        pampersBrown:"",
        pampersBlue:"",
        nap:"",
        meal:"", 
        comment:""
    }
    componentDidMount() {
        axios.get('http://localhost:5000/api/event')
        .then( (response) => {
            const event = response.data;
            console.log(event)
            this.setState( {pampersBrown:event.pampersBrown, pampersBlue:event.pampersBlue, nap:event.nap, meal:event.meal, comment:event.comment} )
        })
        .catch( (err) => {
            this.setState( { } )
        });
    }
    render() {
        return (
         <div>
            <h2 className="header upcoming">My week</h2>
            <div>
                <div className="task">
                    <label for="item-7">
                    <div className="action">{this.events.date}</div>
                    </label>
                </div>
                <div className="task">
                    <label for="item-8">
                    <div className="action">{this.events.date}</div>
                    </label>
                </div>
                <div className="task">
                    <label for="item-9">
                    <div className="action">{this.events.date}</div>
                    </label>
                </div>
            </div>
        </div>
        );
    }
}

export default AllChildEvents;

