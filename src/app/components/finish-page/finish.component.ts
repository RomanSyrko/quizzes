import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html'
})
export class FinishComponent implements OnInit {

  finalScore: any
  correctAnswers: any[] = []
  time: any

  ngOnInit() {
    this.finalScore = localStorage.getItem('score')
    this.time = localStorage.getItem('time')
    // @ts-ignore
    this.correctAnswers = JSON.parse(localStorage.getItem('correctAnswers'))
  }
}
