import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import { fetchUser } from '../../redux/actions/userActions';
import ShelfItem from "./ViewPageItem"

const mapStateToProps = state => ({
    state
  });


class ViewPage extends Component {

    componentDidMount() {
        this.props.dispatch(fetchUser());
        this.props.dispatch({
            type: 'FETCH_SHELF'
        }); 
      }
    
      componentDidUpdate() {
        if (!this.props.state.user.isLoading && this.props.state.user.userName === null) {
          this.props.history.push('home');
        }
      }

    render() {
        console.log(this.props.state.shelfReducer);
        let shelfItems = this.props.state.shelfReducer.map((item)=>{
            return (<ShelfItem item={item}/>)
        })


        return (
            <div>
                <Nav />
                <h1>ViewPage</h1>
                {shelfItems}
            </div>
        )
    }
}





export default connect(mapStateToProps)(ViewPage);