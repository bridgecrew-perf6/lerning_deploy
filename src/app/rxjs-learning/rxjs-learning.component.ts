import { Component, OnInit } from '@angular/core';
import { observable, Observable, of } from 'rxjs';

@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.scss'],
})
export class RxjsLearningComponent implements OnInit {
  agent: Observable<string>;
  sudentList = ['kishan', 'Divya', 'shivansh', 'rivan', 'bhavya'];
  student: Observable<string[]> = of(this.sudentList);
  studentData: string[];
  constructor() {}
  data: string;

  ngOnInit(): void {
    this.agent = new Observable(function (observer: any) {
      try {
        observer.next('ram');
        setInterval(() => {
          observer.next('sita');
        }, 3000);
        setInterval(() => {
          ``;
          observer.next('laxman');
        }, 6000);
      } catch (error) {
        console.log(error);
      }
    });
    this.agent.subscribe((data) => {
      this.data = data;
    });

    this.student.subscribe((data) => {
      this.studentData = data;
    });
  }
}
