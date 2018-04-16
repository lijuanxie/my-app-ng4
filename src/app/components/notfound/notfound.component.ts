import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  constructor(
    private router: Router
  ) { }
  time = 5;
  ngOnInit() {
    Observable.interval(1000)
      .take(5)
      .map(x => 4 - x)
      .do(x => {
        this.time = x - 1;
      })
      .filter(x => x === 0)
      .subscribe(x => {
        this.jump();
      });
  }
  jump() {
    this.router.navigate(['/'])
  }

}
