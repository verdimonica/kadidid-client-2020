import React, { Component } from 'react'
import axios from 'axios';



class ChildEvents extends Component {
    state = {
        events: [],
    }

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_API_URL}/api/child/5fd27255dfbdc96ef6f67429/event`)
        .then( (response) => {
            const events = response.data;
            this.setState({events:events})
        })
        .catch( (err) => {
            console.error(err)
        });
        
    }
    
    deleteEvent = (id) =>{
        
    }

    render() {

        return (
         <div>

         {
         //this.state.events.map((event)=>{  
               
         this.props.events.map((childEvent)=>{
             return(
                <div className="upcoming" key={childEvent._id}>
                    <h2 className="task task-header"><i class="far fa-calendar-alt"></i>{childEvent.date}</h2>
                    <div className="task">
                        <input className="task-item" name="task" type="checkbox" id="item" checked={childEvent.pampersBrown}/>
                        <label for="item">
                        <span className="action label-text">Poo<i className="fas fa-poo"></i></span>
                        </label>
                        <span className="hour">10:00 AM<i class="fas fa-clock"></i></span>
                    </div>
                    <div className="task">
                        <input className="task-item" name="task" type="checkbox" id="item-2" checked={childEvent.pampersBlue} />
                        <label for="item-2">
                        <span className="action label-text">Pipi<i class="fas fa-tint"></i></span>
                        
                        </label>
                        <span className="hour">12:10 AM<i class="fas fa-clock"></i></span>
                    </div>
                    <div className="task">
                        <input className="task-item" name="task" type="checkbox" id="item-3" checked={childEvent.nap}/>
                        <label for="item-3">
                        <span className="action label-text">Nap<i class="fas fa-bed"></i></span>
                        
                        </label>
                        <span className="hour">12:40 - 13:45 PM<i class="fas fa-clock"></i></span>
                    </div>
                    <div className="task">
                        <input className="task-item" name="task" type="checkbox" id="item-4" checked={childEvent.meal}/>
                        <label for="item-4">
                        <span className="action label-text">Meal<i class="fas fa-carrot"></i></span>
                        
                        </label>
                        <span className="hour">12:00 AM<i class="fas fa-clock"></i></span>
                    </div>
                    <div className="task">
                        <label for="item-5">
                        <p>{childEvent.comment}<i class="fas fa-comment"></i></p>
                        </label>
                    </div>

                    <button className="btn" onClick={() => this.props.deleteEvent(childEvent._id)}>
                        <i class="far fa-trash-alt"></i>
                    </button>
                </div>
             )
         })}
        </div>
        );
    }
}

export default ChildEvents;




