/**
 * Created by SamMFFL on 2017/10/17.
 */
import React,{Component} from 'react';
import Button from './Button';
export default class Content extends Component{

    componentWillUnmount(){
        console.log('Content')
    }

    render(){
        return(<div>
            {this.props.children}
        </div>)
    }
};