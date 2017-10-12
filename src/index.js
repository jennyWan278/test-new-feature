/**
 * Created by SamMFFL on 2017/9/23.
 */
import _ from 'lodash';
import './assets/styles/index.scss';
// import data from './assets/data/person.xml';
import printMe from './print';

import {cube} from './utils/math.js';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development model');
    console.log(process.env.NODE_ENV);
}

function component() {
    // let element = document.createElement('div');
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // element.classList.add('hello');
    //
    // let btn = document.createElement('button');
    // btn.innerHTML = 'Click me and check the console!';
    // btn.onclick = printMe;
    // element.appendChild(btn);

    let element = document.createElement('pre');
    element.innerHTML = [
        'Hello webpack!',
        `5 cubed is equal to ${cube(6)}`,
    ].join('\n\n');

    return element;
}

// console.log(data);


// document.body.appendChild(component());
let element = component();
document.body.appendChild(element);

if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updated printMe module!');
        // printMe()
        document.body.removeChild(element);
        element = component();
        document.body.appendChild(element);
    })
}