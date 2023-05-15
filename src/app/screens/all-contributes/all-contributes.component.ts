import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all-contributes',
  templateUrl: './all-contributes.component.html',
  styleUrls: ['./all-contributes.component.css']
})
export class AllContributesComponent {

  questions:  { id: number, typeChoice: number, title: String }[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    console.log("AllContributesComponent ngOnInit...");

        this.http.get<any>('http://localhost:8080/api/quizz').subscribe(data => {
            console.log("Get done");
            console.log(data);
            this.questions = data;
        })


  }

}
