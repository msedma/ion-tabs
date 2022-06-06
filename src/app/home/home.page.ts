import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  segments: string[] = [];

  constructor() {

  }

  ngAfterViewInit() {

    setTimeout(()=>{
      this.segments = ["Segment 1", "Segment 2", "Segment 3"];

    },1000);
  }
}
