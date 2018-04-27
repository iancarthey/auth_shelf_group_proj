import React, { Component } from 'react';
import { connect  } from 'react-redux';
import Nav from '../../../components/Nav/Nav';

class TotalItem extends Component{
    render(){
        return(
            <div>
                <li>
                {this.props.item.username}
                </li>
                <li>
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