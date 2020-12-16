import React, { Component } from 'react';
import axios from 'axios';


class CreateEvent extends Component {
    state = {
        events: [],
        c: {
            item1: false,
            item2: false,
            item3: false,
            item4: false,
        }
    }

    /*componentDidMount() {
        axios.get(`${process.env.REACT_APP_API_URL}/api/child/${id}/event`, { withCredentials: true })
        .then( (response) => {
            const events = response.data;
            this.setState({events:events})
        })
        .catch( (err) => {
            console.error(err)
        });
        
    }*/

    handelFromSubmit =() =>{}
    handleInputChange(event) {
        const c = event.c;
        this.setState({[c]:value})
        const value = c.type === 'checkbox' ? target.checked : target.value;
        const task = c.task;
      
           this.setState({
           [task]: value
           });
        }

    
    createEvent = () =>{
        const c = this.state.values;
        axios.post("", c).then( (response) => {
            const events = response.data;
            this.setState({events:events})
        }).catch( (err) => {
            console.error(err)
        });
        axios.post(`${process.env.REACT_APP_API_URL}/api/child/${id}/event`, { c }, { withCredentials: true })
        .then( (response) => {
            this.getChild(childId)
            this.setState({events:events})
        })
        .catch( (err) => {
            console.error(err)
        });    
    }

    render(){

        return (
         <div>

         {this.props.events.map((event)=>{
             return(
                <div className="upcoming">
                <form onSubmit={this.handleFormSubmit}>
                    <h2 className="task task-header"><i class="far fa-calendar-alt"></i>{event.date}</h2>
                    <div className="task">
                        <input className="task-item" name="task" type="checkbox" id="item" onChange={this.handleInputChange} value={this.state.c}/>
                        <label for="item">
                        <span className="action label-text">Poo<i className="fas fa-poo"></i></span>
                        </label>
                        <span className="hour">10:00 AM<i class="fas fa-clock"></i></span>
                    </div>
                    <div className="task">
                        <input className="task-item" name="task" type="checkbox" id="item-2" onChange={this.handleInputChange} value={this.state.c}/>
                        <label for="item-2">
                        <span className="action label-text">Pipi<i class="fas fa-tint"></i></span>
                        
                        </label>
                        <span className="hour">12:10 AM<i class="fas fa-clock"></i></span>
                    </div>
                    <div className="task">
                        <input className="task-item" name="task" type="checkbox" id="item-3" onChange={this.handleInputChange} value={this.state.c}/>
                        <label for="item-3">
                        <span className="action label-text">Nap<i class="fas fa-bed"></i></span>
                        
                        </label>
                        <span className="hour">12:40 - 13:45 PM<i class="fas fa-clock"></i></span>
                    </div>
                    <div className="task">
                        <input className="task-item" name="task" type="checkbox" id="item-4" onChange={this.handleInputChange} value={this.state.c}/>
                        <label for="item-4">
                        <span className="action label-text">Meal<i class="fas fa-carrot"></i></span>
                        
                        </label>
                        <span className="hour">12:00 AM<i class="fas fa-clock"></i></span>
                    </div>
                    <div className="task">
                    <input className="task-item" name="task" type="checkbox" id="item-5"/>
                    <label for="item-5">
                    <input className="task-box yellow" placeholder="leave a comment"/>
                    </label>
                </div>
                    {/*<button className="btn" onClick={() => this.props.deleteEvent(event._id)}>
                        <i class="far fa-trash-alt"></i></button><button>
                    </button>*/}
                </form>
                </div>
             )
         })}
        </div>
        );
    }
}

export default CreateEvent;




