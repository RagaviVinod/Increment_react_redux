import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as incrementActions from './incrementAction';
import * as decrementActions from './decrementAction';

class App extends React.Component{
    constructor(props){
        super(props);
        
    }
    increment=()=>{
        this.props.actions.incrementValue(this.props.value);
    }
    decrement=()=>{
        if(this.props.value!=0){
        this.props.action1.decrementValue(this.props.value);}
    }
    
    render(){
        return(
            <div >
                <input type="button" value="increment" onClick={this.increment}/>
                <input type="button" value="decrement" onClick={this.decrement}/>
                <h1>{this.props.value}</h1>
            </div>
        );
    }
}
function mapStateToProps(state, ownProps) {
    return ({ value: state.values.value});
}
function mapDispatchToProps(dispatch){
    return({
      actions :bindActionCreators(incrementActions, dispatch),
      action1:bindActionCreators(decrementActions,dispatch)
       
    });
}


export default connect(mapStateToProps,mapDispatchToProps)(App);