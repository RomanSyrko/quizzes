import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {IQuestions} from "../interfaces/IQuestions";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL: string = 'https://opentdb.com/api.php?amount=10&type=boolean'
  questionsList: IQuestions[] = []

  constructor(private http: HttpClient) {
  }

  getQuestion() {
    return this.http.get<any>(this.apiURL).subscribe(resp => {
      this.questionsList = resp.results
    })
  }

}
