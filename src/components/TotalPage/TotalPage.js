import React, { Component } from 'react';
import { connect  } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import TotalItem from './TotalItem/TotalItem.js'

class TotalPage extends Component{

    componentDidMount(){
        this.props.dispatch({
            type:'FETCH_COUNT'
    })
}
    
    render( ){
        let CountItem = this.props.reduxState.shelfReducer.countReducer.map((item)=>{
            return (<TotalItem  key={item.id} item={item} />)
        })
        return(<div>
            <Nav/>
        <ul>{CountItem}</ul>
        </div>) 
    }
}


const mapStateToProps = reduxState =>({
    reduxState
});

export default connect(mapStateToProps)(TotalPage);