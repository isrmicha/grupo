import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-esforco-salario',
  templateUrl: './esforco-salario.component.html',
  styleUrls: ['./esforco-salario.component.scss'],
  providers: []
})
export class EsforcoSalarioComponent implements OnInit {
  constructor(public http: HttpClient) { }
  public bubbleChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [
        {
          ticks: {
            min: 0,
            max: 100,
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 100,
          }
        }
      ]
    }
  };
  public bubbleChartType: ChartType = 'bubble';
  public bubbleChartLegend = true;

  public bubbleChartData: ChartDataSets[] = [];

  public bubbleChartColors: Color[] = [
    {
      backgroundColor: [
        'red',
        'green',
        'blue',
        'purple',
        'yellow',
        'brown',
        'magenta',
        'cyan',
        'orange',
        'pink'
      ]
    }
  ];
  async ngOnInit() {
    let rows: any = await this.http.get('https://grupogado.herokuapp.com/esforcoSalario').toPromise()
    console.log(rows)
    rows.map((row, index) => {
      console.log(row)
      this.bubbleChartData[index] =
        {
          data: [
            { x: row[0], y: row[1], r: 5 }
          ],
          label: row[index],
          backgroundColor: 'green',
          borderColor: 'blue',
          hoverBackgroundColor: 'purple',
          hoverBorderColor: 'red',
        }
    })
    console.log(this.bubbleChartData)
  }
}