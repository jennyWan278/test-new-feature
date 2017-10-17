/**
 * Created by SamMFFL on 2017/9/23.
 */

import "babel-polyfill";
import 'flexible';
import './assets/styles/index.scss';
// import './assets/styles/test.css';
import _ from 'lodash';
import {Map, List} from 'immutable';

import addressList from './assets/data/addresslist.json';

console.log(addressList);
// let $root = $('#root');
//
// console.log($root);
//
// console.log(123)
// // try{alert([1,2,3].includes(1));}catch(e){
// //     alert(e);
// // }


let obj = addressList.data.attributes;
console.log('test', obj);

let c =  _.cloneDeep(obj);
// let c = deepCopy(obj);
c['default'].isDefault = 1;
c['others'].push(c.default);

console.log('immutable', c);