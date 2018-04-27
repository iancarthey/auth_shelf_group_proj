import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ViewPage.css'

const mapStateToProps = state => ({
    state
  });


class ViewPageItem extends Component {
    
    handleDeleteClick = (event) => {
        console.log('handleDeleteClicked');
        this.props.deleteItem(this.props.item); 
    }


    render() {
        //show or hide delete button based on this.props.loggedIn 
        let deleteButton; 
        if(this.props.loggedIn) {
            deleteButton = <button onClick={this.handleDeleteClick}>DELETE</button>
        }

        return (
            <div className="viewItem">
                <p>{this.props.item.description}</p>
                <img src={this.props.item.image_url} height='200' width='200' alt={this.props.item.description}/>
                {deleteButton}
            </div>
        )
    }
}





export default connect(mapStateToProps)(ViewPageItem);