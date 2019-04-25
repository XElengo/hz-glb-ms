import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-calender-main',
  templateUrl: './calender-main.component.html',
  styleUrls: ['./calender-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalenderMainComponent implements OnInit, OnChanges {

  timelist = []; // 本周的日期数组
  dayList = []; // 本月的日期数组
  Info: any;
  showWeek = true;
  showMounth = false;
  scrollType: any;
  currentMounth = 0;
  currentWeek = 0;
  showMounthNUm = new Date().getMonth();

  remindList = [
    {remindTitle: 'test', remindContent: '测试', remondJob: '经办人', remindTime: '17:51'},
    {remindTitle: 'test', remindContent: '测试', remondJob: '交办人', remindTime: '17:51'},
    {remindTitle: 'test', remindContent: '测试测试测试测试测试测试测试测试测试测试测试测试测试', remondJob: '经办人', remindTime: '17:51'},
    {remindTitle: 'test', remindContent: '测试', remondJob: '经办人', remindTime: '17:51'},
    {remindTitle: 'test', remindContent: '测试', remondJob: '经办人', remindTime: '17:51'},
    {remindTitle: 'test', remindContent: '测试', remondJob: '经办人', remindTime: '17:51'},
    {remindTitle: 'test', remindContent: '测试', remondJob: '经办人', remindTime: '17:51'},
    {remindTitle: 'test', remindContent: '测试', remondJob: '经办人', remindTime: '17:51'},
  ];

  bottomButtonList = [
    {name: '工作', selected: false},
    {name: '角色', selected: false},
    {name: '事项圈', selected: false},
    {name: '同事', selected: false},
    {name: '日历', selected: true},
  ];

  toolbarList = [
    {name: '已设置提醒', selected: true},
    {name: '创建时间', selected: false},
    {name: '最后发言时间', selected: false},
  ];

  // @Output('onRefresh') _onRefresh: EventEmitter<any> = new EventEmitter();
  @Input('scrollType') _scrollType: string;


  constructor() { }

  ngOnInit() {
    this.initWeekList(0);
    this.initMounthDay(0);
  }

  ngOnChanges(): void {
    if (this._scrollType === 'scrollBottom') {
      // console.log('ddd');
      this.showWeek = false;
      this.showMounth = true;
    } else if (this._scrollType === 'scrollTop') {
      this.showWeek = true;
      this.showMounth = false;
    }
  }

  toggleMenu(item) {
    this.bottomButtonList.forEach(element => {
      if (element.name === item.name) {
        element.selected = true;
      } else {
        element.selected = false;
      }
    });
  }

  toggleToolbar(item) {
    this.toolbarList.forEach(element => {
      if (element.name === item.name) {
        element.selected = true;
      } else {
        element.selected = false;
      }
    });
  }

  selectDay(item) {
    this.timelist.forEach( ele => {
      if (item.day === ele.day) {
        ele.status = true;
      } else {
        ele.status = false;
      }
    });
  }

  selectMounthDay(item) {
    this.dayList.forEach( ele => {
      if (item.day === ele.day) {
        ele.status = true;
      } else {
        ele.status = false;
      }
    });
  }

  initWeekList(num) {
    // 获取当天0点date
    const currentDate = new Date(new Date(new Date().toLocaleDateString()).getTime());
    // 返回date是一周中的某一天
    const week = currentDate.getDay();
    // 一天的毫秒数
    const millisecond = 1000 * 60 * 60 * 24;
    // 减去的天数
    let minusDay = week;
    if(num) {
      minusDay = minusDay + (num * 7);
    }
    this.timelist = [];
    // 上周日
    const monday = new Date(currentDate.getTime() - (minusDay * millisecond));
    if(monday.getMonth() !== this.showMounthNUm) {
      // console.log("变月了");
      // monday.setMonth(this.showMounthNUm);
      // const tempNum = monday.getMonth() - this.showMounthNUm;
      const tempNum = monday.getMonth() - new Date().getMonth();
      this.initMounthDay(tempNum);
    }
    // 将一周的时间插入到数组中
    for (let index = 0; index < 7; index++) {
        const date = new Date(monday.setDate(monday.getDate() + 1));
        // const mdd = (date.getMonth() + 1) + '/' + (date.getDate() - 1);
        const mdd = (date.getDate() - 1);
        this.timelist.push({
            day: mdd,
            date,
            persionNum: 0,
            data: null,
            status: false,
            isToday: false,
        });
    }
    if(num === 0) {
      // 默认选中当天的日期
      this.timelist[minusDay].status = true;
      this.timelist[minusDay].isToday = true;
      // 假装周二有日程安排
      this.timelist[1].mark = true;
    }
  }


  /**
   * 初始化月份
   * @param num 正数或者负数，向前或者向后几个月
   */
  initMounthDay(num: number) {
    let firstDate = new Date();
    // console.log(num);
    if (num) {
      // this.currentMounth = this.currentMounth + num;
      firstDate.setMonth(firstDate.getMonth() + num);
    }
    this.showMounthNUm = firstDate.getMonth();
    // console.log("这是" + firstDate.getMonth() + "月");
    // console.log("这是" + this.showMounthNUm + "月");
    firstDate.setDate(1); // 第一天
    const endDate = new Date(firstDate);
    endDate.setMonth(firstDate.getMonth() + 1);
    endDate.setDate(0);
    // 返回date是一周中的某一天,需要给日历填空格
    const week = firstDate.getDay();
    // 最后一天
    const lastDay = new Date(endDate).getDate();
    // 今天
    const today = new Date().getDate();
    this.dayList = [];
    // console.log('第一天：' + new Date(firstDate).getDate() );
    for (let index = 0; index < week; index ++) {
      this.dayList.push({
        day: '',
        status: false,
        isToday: false,
      });
    }
    firstDate.setDate(0);
    for (let index = 0; index < lastDay; index++) {
      const date = new Date(firstDate.setDate(firstDate.getDate() + 1));
      this.dayList.push({
        day: index + 1,
        date,
        status: false,
        isToday: false,
      });
    }
    if(num  === 0) {
      // 假装周二有日程安排
      this.dayList[2].mark = true;
      this.dayList[today].status = true;
      this.dayList[today].isToday = true;
    }
    // console.log(this.dayList);
  }

  toToday() {
    this.initWeekList(0);
    this.initMounthDay(0);
  }

  onSlideLeft() {
    // console.log('向左边滑动啦...');
    this.scrollType = 'scrollLeft';
    if (this.showWeek) {
      this.currentWeek--;
      this.initWeekList(this.currentWeek);
    } else if (this.showMounth) {
      this.currentMounth = this.currentMounth + 1;
      this.initMounthDay(this.currentMounth);
    }
  }

  onSlideRight() {
    // console.log('向右边滑动..');
    this.scrollType = 'scrollRight';
    if (this.showWeek) {
      this.currentWeek++;
      this.initWeekList(this.currentWeek);
    } else if (this.showMounth) {
      this.currentMounth = this.currentMounth - 1;
      this.initMounthDay(this.currentMounth);
    }
  }




}
