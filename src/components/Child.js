import React, { Component } from 'react'

 class ChildCard extends Component {
     state ={
         
     }
    render() {
        return (
            <div className="page-content">
                <h2 id="header">The tree house</h2>
                <div className="content-categories">
                <div className="label-wrapper">
                    <input className="nav-item" name="nav" type="radio" id="opt-1"/>
                    <label className="category" for="opt-1">Samantha's diary</label>
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
                    <h2>Samantha Today</h2>
                    <div>
                        <img className="daily-pic" src="https://i.pinimg.com/564x/24/71/e1/2471e15307bff2f3ebb702fa93c804cc.jpg"
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
        )
    }
}
export default ChildCard;