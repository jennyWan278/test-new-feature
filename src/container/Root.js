/**
 * Created by SamMFFL on 2017/10/16.
 */
import React, { PropTypes,Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

export default class Root extends Component {
    // static propTypes = {
    //     history: PropTypes.object.isRequired,
    //     store: PropTypes.object.isRequired,
    //     routes: PropTypes.element.isRequired,
    // };

    render() {
        return (
            <Provider store={this.props.store}>
                <div>
                    <Router history={this.props.history}>
                        {this.props.routes}
                    </Router>
                </div>
            </Provider>
        );
    }
}

