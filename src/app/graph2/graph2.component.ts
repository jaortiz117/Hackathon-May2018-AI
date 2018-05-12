import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-graph2',
  templateUrl: './graph2.component.html',
  styleUrls: ['./graph2.component.css']
})
export class Graph2Component implements OnInit {

  constructor() { }

  ngOnInit() {

    let chart2 = [];


    //to be replaced when we have real data
    let tags = [];
    let x = [];
    let y = [];

    for(var i=0; i<10; i++){
      tags.push(i);
      x.push(i*10);
      y.push(i*5+2);
    }

    chart2 = new Chart('canvas2', {
      type: 'line',
      data: {
        labels: tags,
        datasets: [
          {
            data: x,
            borderColor: "#3cba9f",
            fill: false
          },
          {
            data: y,
            borderColor: "#ffcc00",
            fill: false
          },
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }

}
