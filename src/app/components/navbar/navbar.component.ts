import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  actualDate: string;

  constructor() { }

  ngOnInit() {
    this.startTime();
  }

  startTime() {
    this.runningDateTime();
    const timer = Observable.timer(1000, 1000);
    timer.subscribe(t => {
      this.runningDateTime();
    });
  }

  runningDateTime() {
    this.actualDate = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
  }
}
