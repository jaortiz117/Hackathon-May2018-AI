import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-graph-cmp',
  templateUrl: './graph-cmp.component.html',
  styleUrls: ['./graph-cmp.component.css']
})
export class GraphCmpComponent implements OnInit {

  constructor() { }

  ngOnInit() {


    let chart = [];


    //to be replaced when we have real data
    let tags = [];
    let x = [];
    let y = [];
    for(var i=0; i<10; i++){
      tags.push(i);
      x.push(i*10);
      y.push(i*5+2);
    }

    chart = new Chart('canvas', {
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
