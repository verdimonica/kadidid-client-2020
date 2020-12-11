import React, { Component } from 'react'

class Dashboard extends Component {
    render() {
        return (
        <div>   
            <div className="task-manager">
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
                <div className="header">The tree house</div>
                <div className="content-categories">
                <div className="label-wrapper">
                    <input className="nav-item" name="nav" type="radio" id="opt-1"/>
                    <label className="category" for="opt-1">Samantha</label>
                </div>
                <div className="label-wrapper">
                    <input className="nav-item" name="nav" type="radio" id="opt-2" checked/>
                    <label className="category" for="opt-2">19 months</label>
                </div>
                <div className="label-wrapper">
                    <input className="nav-item" name="nav" type="radio" id="opt-3"/>
                    <label className="category" for="opt-3">.</label>
                </div>
                <div className="label-wrapper">
                    <input className="nav-item" name="nav" type="radio" id="opt-4"/>
                    <label className="category" for="opt-4">.</label>
                </div>
                </div>
                <div className="tasks-wrapper">
                <div className="task">
                    <input className="task-item" name="task" type="checkbox" id="item-1" checked/>
                    <label for="item-1">
                    <span className="label-text">Poo</span>
                    </label>
                    <span className="tag approved">.</span>
                </div>
                <div className="task">
                    <input className="task-item" name="task" type="checkbox" id="item-2" checked/>
                    <label for="item-2">
                    <span className="label-text">Pipi</span>
                    </label>
                    <span className="tag progress">.</span>
                </div>
                <div className="task">
                    <input className="task-item" name="task" type="checkbox" id="item-3"/>
                    <label for="item-3">
                    <span className="label-text">Nap</span>
                    </label>
                    <span className="tag review">.</span>
                </div>
                <div className="task">
                    <input className="task-item" name="task" type="checkbox" id="item-4"/>
                    <label for="item-4">
                    <span className="label-text">Meal</span>
                    </label>
                    <span className="tag progress">.</span>
                </div>
                <div className="task">
                    <input className="task-item" name="task" type="checkbox" id="item-5"/>
                    <label for="item-5">
                    <input className="task-box yellow" placeholder="leave a comment"/>
                    </label>
                </div>
                <div className="task">
                    <input className="task-item" name="task" type="checkbox" id="item-6"/>
                    <span className="tag review">In Review</span>
                </div>
                <div className="header upcoming">Historic</div>
                <div className="task">
                    <label for="item-7">
                    <div className="label-text">Wednesday 3th</div>
                    </label>
                    <span className="tag waiting">.</span>
                </div>
                <div className="task">
                    <label for="item-8">
                    <div className="label-text">Tuesday 2nd</div>
                    </label>
                    <span className="tag waiting">.</span>
                </div>
                <div className="task">
                    <label for="item-9">
                    <div className="label-text">Monday 1st</div>
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
                    <div className="task-name">Anna</div>
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
                    <div className="task-name">Lucia</div>
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
                    <div className="task-name">Aleix</div>
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
                    <div className="task-name">Leo</div>
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
                    <div className="task-name">Luca</div>
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
                    <div className="task-name">Eva</div>
                    </div>
                    <div className="more-button"></div>
                    <div className="members">
                    <img
                        src=""
                        alt=""/>
                    <img
                        src=""
                        alt=""/>
                    <img
                        src=""
                        alt=""/>
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