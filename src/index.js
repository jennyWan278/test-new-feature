/**
 * Created by SamMFFL on 2017/9/23.
 */

import 'flexible';
import './assets/styles/index.scss';
window.onload=function () {
    //绑定事件
    var line1=document.getElementsByClassName('line1')[0];
    var line2=document.getElementsByClassName('line2')[0];
    var line3=document.getElementsByClassName('line3')[0];
    var spanArr= line1.children;
    var spanH = line1.children[0].offsetHeight;
    var big_btn = document.getElementsByClassName('btn-big')[0];

    //复制第一个奖品span,添加到line1最后面
    var newSpan1 = line1.children[0].cloneNode(true);
    line1.appendChild(newSpan1);

    //复制第一个奖品span,添加到line2最后面
    var newSpan2 = line2.children[0].cloneNode(true);
    line2.appendChild(newSpan2);

    //复制第一个奖品span,添加到line3最后面
    var newSpan3 = line3.children[0].cloneNode(true);
    line3.appendChild(newSpan3);


    //第一栏动画效果
    var key1 = 0;
    function autoplay1() {
        key1++;
        if (key1 > spanArr.length-1) {
            line1.style.top = 0;
            key1= 1;
        }
        animate(line1, -key1 * spanH);  
    }

    //第二栏动画效果
    var key2=1;
    function autoplay2() {
        key2++;
        if (key2 > spanArr.length-1) {
            line2.style.top = 0;
            key2 = 1;
        }
        animate(line2, -key2* spanH);
    }

    //第三栏动画效果
    var key3=2;
    function autoplay3() {
        key3++;
        if (key3 > spanArr.length-1) {
            line3.style.top = 0;
            key3 = 1;
        }
        animate(line3, -key3 * spanH);
    }

    big_btn.onclick =function () {
        //传入数据
        var ajax=new XMLHttpRequest();
        ajax.open('get',' https://easy-mock.com/mock/5a5ffa0d4a073a3a0e0e9ed5/end/detail');
        ajax.send();
        ajax.onreadystatechange=function () {
            if(ajax.readyState==4&&ajax.status==200) {
                var data = JSON.parse(ajax.responseText);
                var dLine1 = data.data.line1;
                var dLine2 = data.data.line2;
                var dLine3 = data.data.line3;
                // console.log(data);
                console.log(dLine1);
                console.log(dLine2);
                console.log(dLine3); 

                //控制第一栏滚动
                var times1 = 0;
                var timer1 = setInterval(function () {
                    times1 += 1;
                    var end1 = 24 + dLine1;
                    if (times1 === end1) {
                        clearInterval(timer1);
                    }
                    autoplay1();
                }, 120);

                //控制第二栏滚动
                var times2 = 0;
                var timer2 = setInterval(function () {
                    times2 += 1;
                    var end2 = 24 + dLine2;
                    if (times2 === end2) {
                        clearInterval(timer2);
                    }
                    autoplay2();
                }, 120);

                //控制第三栏滚动
                var times3 = 0;
                var timer3 = setInterval(function () {
                    times3 += 1;
                    var end3 = 24 + dLine3;
                    if (times3 === end3) {
                        clearInterval(timer3);
                    }
                    autoplay3();
                }, 120);

            }
        }
    }

    //动画封装
    function animate(ele, target) {
        clearInterval(ele.timer);
        var speed = target > ele.offsetTop ? 100 : -100;
        ele.timer = setInterval(function () {
            var val = target - ele.offsetTop;
            ele.style.top = ele.offsetTop + speed + 'px';
            if (Math.abs(val) < Math.abs(speed)) {
                ele.style.top = target + 'px';
                clearInterval(ele.timer);
            }
        }, 60)
    }
}