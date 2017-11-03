/**
 * Created by SamMFFL on 2017/10/16.
 */
import React, {Component} from 'react';
import Content from './Content';
import Button from './Button';

export default class HelloWorld extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true
        }

    }

    render() {
        const {show} = this.state;

        return (<div>
            <div>Hello World!</div>
            {show && <Content >
                <Button />
                <Button />
            </Content>}
        </div>)
    }

    componentDidMount() {


        setTimeout(() => {
            this.setState({
                show: false,
            })
        }, 3000)
    }
};