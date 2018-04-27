import React, { Component } from 'react';
import { connect  } from 'react-redux';
import Nav from '../../../components/Nav/Nav';
import './TotalItemview.css';

class TotalItem extends Component{
    render(){
        return(
            <div className='viewItem'>
                <li>
                {this.props.item.username}
                {this.props.item.count}
                </li>
            </div>
        )
    }
}

const mapStateToProps = reduxState =>({
    reduxState
});

export default connect(mapStateToProps)(TotalItem);