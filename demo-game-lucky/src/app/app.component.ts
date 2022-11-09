import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  from: any;
  to: any
  arr: any = [];
  result: any;
  showLoading: any = false;
  showResult: any = false;
  constructor(
  ) {

  }
  ngOnInit() {
  }

  onSubmit(from: any, to: any) {
    this.arr = [];
    this.showResult = false;
    for (let i: any = from; i <= to; i++) {
      this.arr.push(i);
    }
    this.showLoading = true;
    timer(5000).subscribe(x => {
      this.showLoading = false;
      this.showResult = true;
      const random = Math.floor(Math.random() * this.arr.length);
      this.result = this.arr[random];
    })
  }

}
