import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import { fetchUser } from '../../redux/actions/userActions';

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
        console.log(this.props.state.user);
        


        return (
            <div>
                <Nav />
                <h1>ViewPage</h1>

            </div>
        )
    }
}





export default connect(mapStateToProps) (ViewPage);