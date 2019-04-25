import {Component, OnInit, Input, Output, OnChanges, AfterContentInit, EventEmitter,
  ElementRef, ViewChild,} from '@angular/core';
// trigger, state, style, transition, animate

@Component({
  selector: 'xtn-scroll',
  templateUrl: 'xtn-scroll.component.html',
  styleUrls: ['xtn-scroll.component.scss']
})
export class XtnScrollComponent implements OnInit {

  Info: any;
  // @Input('Percentage') _Percentage: number;
  // @Input('IsRefreshFinish') _IsRefreshFinish: boolean;
  // @Input('IsNextPageFinish') _IsNextPageFinish: boolean;
  // @Input('IsSlideLeftFinish') _IsSlideLeftFinish: boolean;
  // @Input('IsSlideRightFinish') _IsSlideRightFinish: boolean;
  @Output('onRefresh') _onRefresh: EventEmitter<any> = new EventEmitter();
  @Output('onNextPage') _onNextPage: EventEmitter<any> = new EventEmitter();
  @Output('onSlideLeft') _onSlideLeft: EventEmitter<any> = new EventEmitter();
  @Output('onSlideRight') _onSlideRight: EventEmitter<any> = new EventEmitter();
  @ViewChild('divContent') divContent: ElementRef;

  // Top50Name: any;

  constructor() {
    this.Info = {
      Start: { X: 0, Y: 0 },
      Move: { X: 0, Y: 0 },
      End: { X: 0, Y: 0 },
      // TitleTop: '下拉刷新',
      // TitleBottom: '上拉获取下面数据',
    };
  }

  ngOnInit() {
  }

  OnTouchStart(event) {
    this.__UpdateLocation('Start', event);
  }

  OnTouchMove(event) {
    this.__UpdateLocation('Move', event);
  }

  OnTouchEnd(event) {
    this.__UpdateLocation('End', event);
    const { Start, End, } = this.Info;

    const xes = End.X - Start.X;
    const yes = End.Y - Start.Y;

    const absXes = Math.abs(xes);
    const absYes = Math.abs(yes);

    if (absXes < 10 && absYes < 20) {
      return;
    }
    if (xes > 0) {
      // 右
      if (yes > 0) {
        // 向下
        // 判断主向
        if (absXes > absYes) {
          // 向右。
          this.SlideRight();
        } else {
          // 向下。
          this.SlideRefresh();
        }
      } else {
        // 向上
        if (absXes > absYes) {
          // 向右。
          this.SlideRight();
        } else {
          // 向上。
          this.SlideNextPage();
        }
      }
    } else {
      // 左边
      if (yes > 0) {
        // 向下
        if (absXes > absYes) {
          // 向左。
          this.SlideLeft();
        } else {
          // 向下。
          this.SlideRefresh();
        }
      } else {
        // 向上
        if (absXes > absYes) {
          this.SlideLeft();
        } else {
          this.SlideNextPage();
        }
      }
    }
  }

  __UpdateLocation(type, event) {
    const { changedTouches } = event;
    const { clientX, clientY } = changedTouches[0];
    this.Info[type].X = clientX;
    this.Info[type].Y = clientY;
  }

  SlideLeft() {
    const { _onSlideLeft } = this;
    if (_onSlideLeft) {
      _onSlideLeft.emit();
    }
  }

  SlideRight() {
    const { _onSlideRight } = this;
    if (!_onSlideRight) {
      return;
    }
    _onSlideRight.emit();
  }

  SlideNextPage() {
    const { _onNextPage } = this;
    if (!_onNextPage) {
      return;
    }
    _onNextPage.emit();
  }

  SlideRefresh() {
    const { _onRefresh } = this;
    if (!_onRefresh) {
      return;
    }
    _onRefresh.emit();
  }







}
