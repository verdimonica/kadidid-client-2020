import React, { Component } from 'react'
import axios from 'axios';

class Dashboard extends Component {
    state = {
        name:"",
        image:""
    }
    componentDidMount() {
        axios.get('http://localhost:5000/api/child/5fd53abd4eba5412945d5937')
        .then( (response) => {
            const child = response.data;
            console.log(child)
            this.setState( {image: child.image, name: child.name } )
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
                    <li className="item">
                    <span>Home</span>
                    </li>
                    <li className="item">
                    <span>Sign out</span>
                    </li>
                    <li className="item">
                    <span>Sign in</span>
                    </li>
                    <li className="item">
                    <span>Sign up</span>
                    </li>
                    <li className="item">
                    <span>Children</span>
                    </li>
                    <li className="item">
                    <span>My profile</span>
                    </li>
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
                    <label className="category" for="opt-2">Last days</label>
                </div>
                <div className="label-wrapper">
                    <input className="nav-item" name="nav" type="radio" id="opt-3"/>
                    <label className="category" for="opt-3">Samantha's profile</label>
                </div>
                <div className="label-wrapper">
                    <input className="nav-item" name="nav" type="radio" id="opt-4"/>
                    <label className="category" for="opt-4">Chat with parents</label>
                </div>
                </div>
                <div className="tasks-wrapper">
                <div className="header upcoming">
                    <h2>{this.state.image} Today</h2>
                    <div>
                        <img className="daily-pic" src={this.state.image}
                        alt=""/>
                    </div>
                </div>
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
                <h2 className="header upcoming">Historic</h2>
                <div className="task">
                    <label for="item-7">
                    <div className="action">Wednesday 3th</div>
                    </label>
                    <span className="tag waiting">.</span>
                </div>
                <div className="task">
                    <label for="item-8">
                    <div className="action">Tuesday 2nd</div>
                    </label>
                    <span className="tag waiting">.</span>
                </div>
                <div className="task">
                    <label for="item-9">
                    <div className="action">Monday 1st</div>
                    </label>
                    <span className="tag waiting">.</span>
                </div>
                <div className="task">
                </div>
                </div>
            </div>
            <div className="right-bar">
                <div className="top-part">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    className="feather feather-users">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                <div className="count">6</div>
                </div>
                <div className="header">Little Monkeys</div>
                <div className="right-content">
                <div className="task-box yellow">
                    <div className="description-task">
                    <div className="date">January 4th</div>
                    <div className="child-name">Anna</div>
                    </div>
                    <div className="more-button"></div>
                    <div className="members">
                    <img
                        src=""
                        alt=""/>
                    </div>
                </div>
                <div className="task-box blue">
                    <div className="description-task">
                    <div className="date">January</div>
                    <div className="child-name">Lucia</div>
                    </div>
                    <div className="more-button"></div>
                    <div className="members">
                    <img
                        src=""
                        alt=""/>
                    </div>
                </div>
                <div className="task-box red">
                    <div className="description-task">
                    <div className="date">January</div>
                    <div className="child-name">Aleix</div>
                    </div>
                    <div className="more-button"></div>
                    <div className="members">
                    <img
                        src=""
                        alt=""/>
                    </div>
                </div>
                <div className="task-box green">
                    <div className="description-task">
                    <div className="date">January</div>
                    <div className="child-name">Leo</div>
                    </div>
                    <div className="more-button"></div>
                    <div className="members">
                    <img
                        src=""
                        alt=""/>
                    </div>
                </div>
                <div className="task-box blue">
                    <div className="description-task">
                    <div className="date">January</div>
                    <div className="child-name">Luca</div>
                    </div>
                    <div className="more-button"></div>
                    <div className="members">
                    <img
                        src=""
                        alt=""/>
                    </div>
                </div>
                <div className="task-box yellow">
                    <div className="description-task">
                    <div className="date">January</div>
                    <div className="child-name">Eva</div>
                    </div>
                    <div className="more-button"></div>
                    <div className="members">
                    <img
                        src=""
                        alt=""/>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        )
    }
}


export default Dashboard;