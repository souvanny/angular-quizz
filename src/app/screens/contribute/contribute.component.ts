import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.css']
})
export class ContributeComponent implements OnInit {

  answers:  { index: number, title: String }[] = [

  ];

  newAnswer: String = "koko";

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {


  }

  public validate() {

    console.log("validate...");
    console.log(this.newAnswer);
    this.answers.push({ index: this.answers.length, title: this.newAnswer })

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

}
