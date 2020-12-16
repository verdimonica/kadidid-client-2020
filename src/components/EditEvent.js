import React, { Component } from 'react';
import axios from 'axios';

//bring event id values in a form to be edited
class EditEvent extends Component {
    state = {
        pampersBrown: false,
        pampersBlue: false,
        nap: false,
        meal: false,
        comment: "",
    }

    handleFormSubmit =(event) =>{
        event.preventDefault()
        const { pampersBlue, pampersBrown, nap, meal, comment} = this.state;
        const newEvent = { 
            pampersBlue, 
            pampersBrown, 
            nap, 
            meal, 
            comment, 
            date:new Date(), 
            childId:this.props.childId
        };

        axios.post(
            `${process.env.REACT_APP_API_URL}/api/child/${this.props.childId}/events`, 
            newEvent, 
            {withCredentials: true}
        )
        .then((response) => {
            this.setState({
                    pampersBrown: false,
                    pampersBlue: false,
                    nap: false,
                    meal: false,
                    comment: "",
                }
            )
            this.props.getData(); // refresh the Dashboard state
        }).catch((err) => {
            
        });
    }

    handleChange=(event) =>{
        const { value, name } = event.target;
      
        this.setState({ [name]: value});
    }

    handleCheckboxChange=(event) =>{
        const { name, checked } = event.target;
       
      
        this.setState({ [name]: checked});
    }


    render(){

        return (
         <div>
            <div className="upcoming">
                <form onSubmit={this.handleFormSubmit}>
                    <h2 className="task task-header"><i class="far fa-calendar-alt"></i></h2>
                    <div className="task">
                        <input
                            onChange={this.handleCheckboxChange} 
                            checked={this.state.pampersBrown}
                            className="task-item" 
                            name="papmersBrown" 
                            type="checkbox" 
                            id="item"
                        />
                        <label for="item">
                        <span className="action label-text">Poo<i className="fas fa-poo"></i></span>
                        </label>
                        <span className="hour">10:00 AM<i class="fas fa-clock"></i></span>
                    </div>
                    <div className="task">
                        <input
                            onChange={this.handleCheckboxChange} 
                             checked={this.state.pampersBlue} 
                             className="task-item" 
                             name="pampersBlue" 
                             type="checkbox" 
                             id="item-2"
                        />
                        <label for="item-2">
                        <span className="action label-text">Pipi<i class="fas fa-tint"></i></span>
                        
                        </label>
                        <span className="hour">12:10 AM<i class="fas fa-clock"></i></span>
                    </div>
                    <div className="task">
                        <input
                            onChange={this.handleCheckboxChange} 
                            checked={this.state.nap}
                            className="task-item" 
                            name="nap" 
                            type="checkbox" 
                            id="item-3"
                        />
                        <label for="item-3">
                        <span className="action label-text">Nap<i class="fas fa-bed"></i></span>
                        
                        </label>
                        <span className="hour">12:40 - 13:45 PM<i class="fas fa-clock"></i></span>
                    </div>
                    <div className="task">
                        <input
                            onChange={this.handleCheckboxChange} 
                             checked={this.state.meal} 
                             className="task-item" 
                             name="meal" 
                             type="checkbox" 
                             id="item-4"

                             />
                        <label for="item-4">
                        <span className="action label-text">Meal<i class="fas fa-carrot"></i></span>
                        
                        </label>
                        <span className="hour">12:00 AM<i class="fas fa-clock"></i></span>
                    </div>
                    <div className="task">
                        <label for="item-5">
                        <input
                            onChange={this.handleChange} 
                            value={this.state.comment} 
                            name="comment"
                            type="text"
                            className="task-box yellow" 
                            placeholder="leave a comment"
                        />
                        </label>
                    </div>
                    
                    <button className="btn">
                        <i class="far fa-calendar-check"></i></button>Update Event<button>
                    </button>
                </form>
                </div>
        </div>
        );
    }
}

export default EditEvent;




