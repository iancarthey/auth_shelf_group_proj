import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import { fetchUser } from '../../redux/actions/userActions';
import ViewPageItem from "./ViewPageItem"

const mapStateToProps = state => ({
    state
  });


class ViewPage extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            loggedIn: false
        }
    }

    deleteItem = (item) => {
        console.log('reached deleteItem', item, this.props.state.user);
        this.props.dispatch({
            type: 'DELETE_SHELF_ITEM',
            payload: {
                item: item,
                user: this.props.state.user.id
            }
        });
      
    }

    componentDidMount() {
        if (!this.props.state.user.isLoading && this.props.state.user.userName === null) {
            this.setState({
                loggedIn: false
            });
          }
          else {
              this.setState({
                  loggedIn: true
              })
          }
        this.props.dispatch(fetchUser());
        this.props.dispatch({
            type: 'FETCH_SHELF'
        }); 
      }
    

    render() {
        console.log(this.props.state.shelfReducer);
        let shelfItems = this.props.state.shelfReducer.shelfReducer.map((item)=>{
            return (<ViewPageItem  key={item.id} 
                                item={item}
                                deleteItem={this.deleteItem}
                                loggedIn={this.state.loggedIn}/>)
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