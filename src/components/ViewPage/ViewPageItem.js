import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
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
        


        return (
            <div className="viewItem">
                <p>{this.props.item.description}</p>
                <img src={this.props.item.image_url} height='200' width='200'/>
                <button onClick={this.handleDeleteClick}>DELETE</button>
            </div>
        )
    }
}





export default connect(mapStateToProps)(ViewPageItem);