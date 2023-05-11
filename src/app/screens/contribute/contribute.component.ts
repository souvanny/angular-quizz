import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.css']
})
export class ContributeComponent implements OnInit {

  answers:  { index: number, isCorrect: number, title: String }[] = [

  ];

  question: String = "";
  newAnswer: String = "";
  typeChoice: String = "1";

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {


  }

  public validateQuizz() {

    console.log("validateQuizz...");
    console.log(this.question);
    console.log(this.answers);
    console.log("typeChoice : ", this.typeChoice);

    this.http.post<any>('http://localhost:8080/api/quizz',
      {
          question: this.question,
          typeChoice: this.typeChoice,
          answers: this.answers,
        }).subscribe(data => {
        console.log("Post done");

        this.question = "";
        this.typeChoice = "1";
        this.answers = [];
    })

  }

  public addAnswer() {

    console.log("addAnswer...");

    if (this.newAnswer.trim() == "") {
      return;
    }

    console.log(this.newAnswer);
    this.answers.push({ index: this.answers.length, isCorrect: 0, title: this.newAnswer });
    this.newAnswer = "";

  }

  public upAnswer(index: number) {
    if (index == 0) {
      return;
    }

    let currentIndex: number = this.answers[index].index;
    let otherIndex: number = this.answers[index - 1].index;

    this.answers[index].index = otherIndex;
    this.answers[index - 1].index = currentIndex;;

    this.answers.sort((a, b) => {
      return a.index - b.index < 0 ? -1 : 1;
    });
  }

  public downAnswer(index: number) {
    if (index == this.answers.length - 1) {
      return;
    }

    let currentIndex: number = this.answers[index].index;
    let otherIndex: number = this.answers[index + 1].index;

    this.answers[index].index = otherIndex;
    this.answers[index + 1].index = currentIndex;;


    this.answers.sort((a, b) => {
      return a.index - b.index < 0 ? -1 : 1;
    });
  }

  public deleteAnswer(index: number) {

    this.answers = this.answers.filter(item => item['index'] !== index);
  }

  public changeIsCorrect(indexOfArray: number) {

    console.log("changeIsCorrect ===", indexOfArray);
    console.log(this.answers[indexOfArray]);

    this.answers[indexOfArray]["isCorrect"] = this.answers[indexOfArray]["isCorrect"] == 1 ? 0 : 1;

  }

}
