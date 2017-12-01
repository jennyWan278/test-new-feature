/**
 * Created by SamMFFL on 2017/9/23.
 */

import "babel-polyfill";
import 'flexible';
// import './assets/styles/index.scss';
import './assets/styles/example.scss';
// import './assets/styles/test.css';
import _ from 'lodash';

// import 'jquery.facedetection';


$('#picture').faceDetection({
    complete: function (faces) {
        console.log(faces);
    }
});


// function testable(isTestable) {
//     return function (target) {
//         target.isTestable = isTestable;
//     }
// }
//
// @testable(true)
// class MyTestableClass {
// }
//
// console.log(MyTestableClass);