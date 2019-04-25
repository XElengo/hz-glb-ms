import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hz-glb-ms';
  ScrollInfo: any = {};
  scrollType: any;
  showCale = true;

  onScrollRefresh() {
    console.log('---***---');
    this.scrollType = 'scrollBottom';
  }

  onScrollNextPage() {
    console.log('---||||---');
    this.scrollType = 'scrollTop';
  }

  onSlideLeft() {
    console.log('向左边滑动啦...');
    this.scrollType = 'scrollLeft';
  }

  onSlideRight() {
    console.log('向右边滑动..');
    this.scrollType = 'scrollRight';
  }

  showCalender() {
    this.showCale = true;
  }

  showClock() {
    this.showCale = false;
  }
}
