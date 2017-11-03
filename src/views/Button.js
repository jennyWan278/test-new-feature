/**
 * Created by SamMFFL on 2017/10/17.
 */
import React,{Component} from 'react';

export default class Button extends Component{
    componentWillUnmount(){
        console.log('Button');
    }

    render(){
        return(<div>button</div>)
    }
};