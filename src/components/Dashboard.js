import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';


import ChildToday from './ChildToday';
import ChildEvents from './ChildEvents';
import Navbar from './Navbar';
import ChildrenList from './ChildrenList';
import CreateEvent from './CreateEvent';

class Dashboard extends Component {
    state = {
        name:"",
        image:"",
        events: []
    }
    componentDidMount() {
        this.getChild();
    }

    getChild =() => {
        const childId = this.props.match.params.id;
        axios.get(`${process.env.REACT_APP_API_URL}/api/child/${childId}`, { withCredentials: true })
        .then( (response) => {

            const child = response.data;
            axios.get(`${process.env.REACT_APP_API_URL}/api/child/${childId}/event`)
                .then( (response) => {
                    const events = response.data;
                    this.setState( {image: child.image, name: child.name, events:events } )
                })

        })
        .catch( (err) => {
        });
    }

    componentDidUpdate(prevprops){
        const previousChildId = prevprops.match.params.id
        const currentChildId = this.props.match.params.id

        if (previousChildId !== currentChildId){
            this.getChild(currentChildId)
        }
    }

    deleteEvent = (eventId) =>{
        console.log("THIS IS EVENT ID", eventId)
        // make axios request to delete event
        axios.delete(`${process.env.REACT_APP_API_URL}/api/event/${eventId}`)
            .then ((response) => {
                if (response.data != null){
                    console.log("Event deleted succesfully")
                }
                // then when deleted successfuly call again method this.getChild() to refresh the child data
                
                this.getChild();
            })
            .catch( (err) => {
 
            });
    }

    //create axios.put to edit event taking eventId
    editEvent = (eventId) =>{
        axios.put(`${process.env.REACT_APP_API_URL}/api/event/${eventId}`)
            .then ((response) => {
            
            })
            .catch( (err) => {
            });
    }

    render() {
        return (
        <div>   
            <div className="events-manager">
            <div className="left-bar">
                <div className="upper-part">
                <div className="actions">
                    <div className="circle-2"></div>
                </div>
                </div>
                <div className="left-content">
                <ul className="action-list">
                    <Navbar/>
                </ul>
                </div>
            </div>
            <div className="page-content">
                <h2 id="header">The tree house</h2>
                <div className="content-categories">
                <div className="label-wrapper">
                    <input className="nav-item" name="nav" type="radio" id="opt-1" checked/>
                    <label className="category" for="opt-1">{this.state.name}'s diary</label>
                </div>
                <div className="label-wrapper">
                    <input className="nav-item" name="nav" type="radio" id="opt-2"/>
                    <label className="category" for="opt-2">Billing & Invoicing</label>
                </div>
                <div className="label-wrapper">
                    <input className="nav-item" name="nav" type="radio" id="opt-3"/>
                    <label className="category" for="opt-3">{this.state.name}'s profile</label>
                </div>
                <div className="label-wrapper">
                    <input className="nav-item" name="nav" type="radio" id="opt-4"/>
                    <label className="category" for="opt-4">Chat with parents</label>
                </div>
                </div>
                <div className="tasks-wrapper">
                    <ChildToday 
                        name= {this.state.name}
                        image= {this.state.image}
                    />

                    <CreateEvent
                        childId={this.props.match.params.id}
                        getData={this.getChild}
                    />
                
                <div>
                {/*<div>
                <button className="btn" onClick={() => this.deleteEvent(event._id)}><i class="far fa-trash-alt"></i></button>
                <button><i class="fas fa-edit"></i></button>
                </div>*/}
                <h2 className="header upcoming">Last Events</h2>
                    <ChildEvents events={this.state.events} deleteEvent={this.deleteEvent} />
                </div>
                   
                </div>
                
            </div>
            <ChildrenList/>
        </div>
        </div>
        )
    }
}


export default Dashboard;