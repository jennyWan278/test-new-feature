/**
 * Created by SamMFFL on 2017/9/23.
 */
import _ from 'lodash';
import './assets/styles/index.css';
import data from './assets/data/person.xml';
import printMe from './print';


function component() {
    let element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    let btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);

    return element;
}

console.log(data);


document.body.appendChild(component());