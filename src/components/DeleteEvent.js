import React, { Component } from 'react'
import axios from 'axios'

class DeleteEvent extends Component {
    state = {
        event:[]
    }

    getEvent = (events) => {
        this.setState({event: events})
    }

    deleteEvent = (eventId) =>{

        const updatedEvent = this.state.events.filter((event) =>{
            if (event.id !==eventId){
                return true;
            }
            else{
                return false;
            }
        })
        this.setState({events:updatedEvent})
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/child/5fd27255dfbdc96ef6f67429/event')
        .then( (response) => {
            const events = response.data;
            this.setState({events:events})
        })
        .catch( (err) => {
            console.error(err)
        });
    }

    render() {
      

        return (
            <div>

            </div>
        )
    }
}

export default new DeleteEvent;