import React, { Component } from 'react';
import { connect  } from 'react-redux';

const mapStateToProps = reduxState =>({
    reduxState
});

class AddPage extends Component {
    constructor(props){
        super(props); 
        this.state = {
            item: '',
            description: '',
            url: ''
        }
    }



    handleChange = (event) => {
        this.setState
    }

    // adds an item on click
    addItem = (event) =>{
        console.log('Click ADD', this.state);
        event.preventDefault();
        this.props.dispatch({
            type: 'ADD_ITEM',
            payload: this.state
        })
    }



    render(){
        return(
           <div>
               <h3>Add an Item</h3>
               <form onSubmit={this.addItem}>
                   <input onChange={this.handleChange}>Item:</input>
                   <input onChange={this.handleChange}>Description:</input>
                   <input onChange={this.handleChange}>URL:</input>
                   <input type="submit" value="Add Item"></input>
               </form>
           </div> 
        )
    }





}

export default connect(mapStateToProps)(AddPage);