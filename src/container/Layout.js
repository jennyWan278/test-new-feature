/**
 * Created by SamMFFL on 2017/10/16.
 */
import React, {
    PropTypes,
    Component,
    cloneElement
} from 'react';

class CoreLayout extends Component {
    // static propTypes = {
    //     children: PropTypes.element,
    // };

    render() {

        // const children = cloneElement(this.props.children, {
        //   // setHeader: (header) => this.setTitle(header),
        //   showDialog: (txt) => this.onDialog(txt),
        // });
        return (
            <div className="page-container">
                <div className="view-container">{this.props.children}</div>
            </div>
        );
    }

}

export default CoreLayout;

