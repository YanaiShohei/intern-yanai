import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Router } from '@angular/router';
import { QuizService } from '../services/quiz.service';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})

export class ResultComponent implements OnInit, AfterViewInit {

  quizList?: any = this.quizService.quizList;

  trueAnswerCount: number = this.quizService.trueAnswerCount;

  @ViewChild('canvas')
  ref?: ElementRef;

  // @Input()
  // data: ChartOptions ;

  context?: CanvasRenderingContext2D;
  chart?: Chart;

  constructor(
    private _elementRef: ElementRef,
    private router: Router,
    private quizService: QuizService,
  ){
    Chart.register(...registerables);
  }

  ngAfterViewInit(){
    this.context = this.ref?.nativeElement.getContext('2d');
    // this.chart = new Chart(this.context!,{
    //   type: 'doughnut',
    //   data: this.data,
    // })
  }

  ngOnInit(): void {
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [
          {
            data: [20, 35, 40, 30, 45, 35, 40],
            borderColor: '#3e95cd',
            fill: false,
            label: 'Coin Price',
            backgroundColor: 'rgba(93, 175, 89, 0.1)',
            borderWidth: 3,
          },
        ],
      },
    })
  }

  backTitle(){
    this.router.navigate(['title'])
  }

}
