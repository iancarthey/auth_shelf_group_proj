import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import { fetchUser } from '../../redux/actions/userActions';
// import ShelfItem from 

const mapStateToProps = state => ({
    state
  });


class ViewPageItem extends Component {



    render() {
        


        return (
            <div>
                <p>{this.props.item.description}</p>
                <img src={this.props.item.image_url} height='200' width='200'/>
            </div>
        )
    }
}





export default connect(mapStateToProps)(ViewPageItem);