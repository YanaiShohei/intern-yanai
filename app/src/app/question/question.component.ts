import { Component, OnInit } from '@angular/core';
import { UrlHandlingStrategy } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  isDisplayHint: boolean = false;
  constructor() { }

  ngOnInit(): void { 

  }
  clickHint():void{
    this.isDisplayHint = !this.isDisplayHint;
  }

}
