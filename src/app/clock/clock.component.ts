import { Component, OnInit, OnChanges, AfterViewInit } from '@angular/core';
// import * as $ from 'jquery';
declare var $: any;
@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent implements OnInit, AfterViewInit, OnChanges {

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.initClock();
  }

  ngOnChanges(): void {
    this.initClock();
  }

  initClock() {
    var oLi='';
    var sCss='#wrap div#list li{width:3px;  height:3px; background:#000; position:absolute; left:146px; top: 2px;transform-origin:center 145px;}#wrap div#list li:nth-of-type(5n + 1) { height: 12px; border-radius: 0; top:0px; }';
    for (var i=0;i<60;i++) { // 一个表盘总共是60个刻度
      sCss+='#wrap div#list li:nth-of-type('+(i+1)+'){transform: rotate('+i*6+'deg);}';
      oLi+='<li></li>';
    };
    $('#wrap #list').append(oLi);
    $('style:nth-of-type(5)').append(sCss);// 表盘刻度渲染完成
    toTime();
    setInterval(toTime,1000);
    function toTime(){
      var oDate=new Date();// 获取当前时间
      var iSec=oDate.getSeconds();// 获取当前秒
      var iMin=oDate.getMinutes()+iSec/60;// 获取当前分
      var iHour=oDate.getHours()+iMin/60;// 获取当前时
      // $("#sec").style.transform="rotate("+iSec*6+"deg)";//秒针转动角度1秒6度 (表盘一圈360度一圈60秒所以一秒6度)
      // $("#min").style.transform="rotate("+iMin*6+"deg)";//分钟转动角度1分6度 (表盘一圈360度一圈60分所以一分6度)
      // $("#sec").style.transform="rotate("+iHour*30+"deg)";//时针转动角度一小时30度(表盘一圈360度一圈12小时所以一小时30度)
      $('#sec').css({
        'transform': 'rotate(' + iSec*6 + 'deg)',
        '-webkit-transform': 'rotate(' + iSec*6 + 'deg)'
      });
      $('#sec2').css({
        'transform': 'rotate(' + iSec*6 + 'deg)',
        '-webkit-transform': 'rotate(' + iSec*6 + 'deg)'
      });
      $('#min').css({
        'transform': 'rotate(' + iMin*6 + 'deg)',
        '-webkit-transform': 'rotate(' + iMin*6 + 'deg)'
      });
      $('#hour').css({
        'transform': 'rotate(' + iHour*30 + 'deg)',
        '-webkit-transform': 'rotate(' + iHour*30 + 'deg)'
      });

    }
  }



}
