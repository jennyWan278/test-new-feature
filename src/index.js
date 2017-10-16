/**
 * Created by SamMFFL on 2017/9/23.
 */

import "babel-polyfill";
import 'flexible';
import './assets/styles/index.scss';
// import './assets/styles/test.css';
import _ from 'lodash';
import react from 'react';

console.log(_);
console.log(react);
let $root = $('#root');

console.log($root);

console.log(123)
try{alert([1,2,3].includes(1));}catch(e){
    alert(e);
}


import './another-module'