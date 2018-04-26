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

    
    handleChangeItem = (event) => {
        console.log('change', event.target.value);
        this.setState({
            item: event.target.value
        })
    }

    handleChangeDescription = (event) => {
        this.setState({
            description: event.target.value
        })
    }

    handleChangeUrl = (event) => {
        this.setState({
            url: event.target.value
        })
    }


    // adds an item on click
    addItem = (event) =>{
        console.log('Click ADD', this.state);
        event.preventDefault();
        this.props.dispatch({
            type: 'ADD_SHELF_ITEM',
            payload: this.state
        })
    }



    render(){
        return(
           <div>
               <h3>Add an Item</h3>
               <form onSubmit={this.addItem}>
                   <input type="text" onChange={this.handleChangeItem} placeholder="Item"></input>
                   <input type="text" onChange={this.handleChangeDescription} placeholder="Description"></input>
                   <input type="text" onChange={this.handleChangeUrl} placeholder="url"></input>
                   <input type="submit" value="Add Item"></input>
               </form>
           </div> 
        )
    }





}

export default connect(mapStateToProps)(AddPage);