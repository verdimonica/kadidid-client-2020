import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';


import ChildToday from './ChildToday';
import ChildEvents from './ChildEvents';
import Navbar from './Navbar'
import ChildrenList from './ChildrenList';

class Dashboard extends Component {
    state = {
        name:"",
        image:"",
        events: []
    }
    componentDidMount() {
        const childId = this.props.match.params.id;
        this.getChild(childId);
    }

    getChild =(id) => {
        axios.get(`http://localhost:5000/api/child/${id}`, { withCredentials: true })
        .then( (response) => {

            const child = response.data;
            axios.get(`http://localhost:5000/api/child/${id}/event`)
                .then( (response) => {
                    const events = response.data;
                    this.setState( {image: child.image, name: child.name, events:events } )
                })

        })
        .catch( (err) => {
            this.setState( { } )
        });
    }

    componentDidUpdate(prevprops){
        const previousChildId = prevprops.match.params.id
        const currentChildId = this.props.match.params.id

        if (previousChildId !== currentChildId){
            this.getChild(currentChildId)
        }
    }

    deleteEvent = (id) =>{
        // make axios request to delete event
        axios.delete(`http://localhost:5000/api/event/${id}`)
            .then ((response) => {
                this.props.history.push('/child/:id')
                // then when deleted successfuly call again method this.getChild() to refresh the child data
                this.setState(this.getChild())
            })
            .catch( (err) => {
                this.setState( { } )
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
                    <input className="nav-item" name="nav" type="radio" id="opt-1"/>
                    <label className="category" for="opt-1">{this.state.name}'s diary</label>
                </div>
                <div className="label-wrapper">
                    <input className="nav-item" name="nav" type="radio" id="opt-2" checked/>
                    <label className="category" for="opt-2"><Link to='./ChildEvents'>Last days</Link></label>
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
                <div className="task">
                    <label for="">
                    <span className="action label-text">Poo</span>
                    <i class="fas fa-poo"></i>
                    </label>
                    <span className="hour">10:00 AM</span>
                </div>
                <div className="task">
                    <input className="task-item" name="task" type="checkbox" id="item-2" checked/>
                    <label for="item-2">
                    <span className="action label-text">Pipi</span>
                    <i class="fas fa-tint"></i>
                    </label>
                    <span className="hour">12:10 AM</span>
                </div>
                <div className="task">
                    <label for="item-3">
                    <span className="action label-text">Nap</span>
                    <i class="fas fa-bed"></i>
                    </label>
                    <span className="hour">12:40 - 13:45 PM</span>
                </div>
                <div className="task">
                    <input className="task-item" name="task" type="checkbox" id="item-4"/>
                    <label for="item-4">
                    <span className="action label-text">Meal</span>
                    <i class="fas fa-carrot"></i>
                    </label>
                    <span className="hour">12:00 AM</span>
                </div>
                <div className="task">
                    <input className="task-item" name="task" type="checkbox" id="item-5"/>
                    <label for="item-5">
                    <input className="task-box yellow" placeholder="leave a comment"/>
                    </label>
                </div>
                <div>
                <h2 className="header upcoming">This week</h2>
                    <ChildEvents events={this.state.events} />
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