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
        axios.get(`${process.env.REACT_APP_API_URL}/api/child/5fd27255dfbdc96ef6f67429/event`, {withCredentials:true})
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
            <>
{this.state.events.map((event)=>{

console.log(event, "elevent")
return(
   <div className="upcoming">
       <h2 className="task task-header"><i class="far fa-calendar-alt"></i>{event.date}</h2>
       <div className="task">
           <input className="task-item" name="task" type="checkbox" id="item" checked={event.pampersBrown}/>
           <label for="item">
           <span className="action label-text">Poo<i className="fas fa-poo"></i></span>
           </label>
           <span className="hour">10:00 AM<i class="fas fa-clock"></i></span>
       </div>
       <div className="task">
           <input className="task-item" name="task" type="checkbox" id="item-2" checked={event.pampersBlue} />
           <label for="item-2">
           <span className="action label-text">Pipi<i class="fas fa-tint"></i></span>
           
           </label>
           <span className="hour">12:10 AM<i class="fas fa-clock"></i></span>
       </div>
       <div className="task">
           <input className="task-item" name="task" type="checkbox" id="item-3" checked={event.nap}/>
           <label for="item-3">
           <span className="action label-text">Nap<i class="fas fa-bed"></i></span>
           
           </label>
           <span className="hour">12:40 - 13:45 PM<i class="fas fa-clock"></i></span>
       </div>
       <div className="task">
           <input className="task-item" name="task" type="checkbox" id="item-4" checked={event.meal}/>
           <label for="item-4">
           <span className="action label-text">Meal<i class="fas fa-carrot"></i></span>
           
           </label>
           <span className="hour">12:00 AM<i class="fas fa-clock"></i></span>
       </div>
       <div className="task">
           <label for="item-5">
           <p>{event.comment}<i class="fas fa-comment"></i></p>
           </label>
       </div>
       <button className="btn" onClick={() => this.deleteEvent(event._id)}><i class="far fa-trash-alt"></i></button><button><i class="fas fa-edit"></i></button>
   </div>


)

})}
            </>
        )
    }
}

export default new DeleteEvent;