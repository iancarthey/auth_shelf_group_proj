import React, { Component } from 'react';
import { connect  } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import TotalItem from './TotalItem/TotalItem.js'

class TotalPage extends Component{

    componentDidMount(){
        type:'FETCH_COUNT'
    }
    
    render( ){
        let CountItem = this.props.state.shelfReducer.countReducer.map((item)=>{
            return (<TotalItem  key={item.id} item={item} />)
        })
        return (<ul>{CountItem}</ul>) 
    }
}


const mapStateToProps = reduxState =>({
    reduxState
});

export default connect(mapStateToProps)(TotalPage);