import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {timer} from "rxjs";

import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html'
})
export class PlayComponent implements OnInit {
  index: number = 0
  score: number = 0
  correctAnswers: any[] = []
  time: number = 0

  constructor(public apiService: ApiService, private router: Router) {
  }

  ngOnInit() {
    this.apiService.getQuestion()
    this.index = 0
    this.startTimer(60)
  };

  verifyAnswer($event: MouseEvent, answer: string) {
    if (answer === this.apiService.questionsList[this.index]?.correct_answer) {
      this.score = this.score + 10;
      this.correctAnswers.push(this.apiService.questionsList[this.index].question)
      this.apiService.questionsList[this.index].question
      localStorage.setItem('correctAnswers', JSON.stringify(this.correctAnswers));
    }
    if (this.index === this.apiService?.questionsList.length - 1) {
      localStorage.setItem('score', this.score.toString());
      localStorage.setItem('time', this.time.toString());
      this.router.navigate(['/finish']);
    } else {
      this.index = this.index === this.apiService.questionsList.length ? this.index : this.index + 1
    }
  };

  startTimer(seconds: number) {
    const sub = timer(0, 1000)
      .subscribe(n => {
        this.time = n
        if (n === seconds || this.index === this.apiService?.questionsList?.length) {
          this.router.navigate(['/finish']);
          sub.unsubscribe();
        }
      })
  };

}
