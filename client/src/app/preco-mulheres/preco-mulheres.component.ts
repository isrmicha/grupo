import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Color } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-preco-mulheres',
  templateUrl: './preco-mulheres.component.html',
  styleUrls: ['./preco-mulheres.component.scss']
})
export class PrecoMulheresComponent implements OnInit {
  constructor(public http: HttpClient) { }
  public bubbleChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [
        {
          ticks: {
            min: 0,
            max: 10,
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 10,
          }
        }
      ]
    }
  };
  public bubbleChartType: ChartType = 'bubble';
  public bubbleChartLegend = true;

  public bubbleChartData = [];

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
    let rows: any = await this.http.get('https://grupogado.herokuapp.com/precoMulheres').toPromise()
    rows.map((row, index) => {
      console.log(row)
      this.bubbleChartData[index] =
        {
          data: [
            { x: row[1], y: row[2], r: 5 }
          ],
          label: row[0],
          backgroundColor: 'green',
          borderColor: 'blue',
          hoverBackgroundColor: 'purple',
          hoverBorderColor: 'red',
        }
    })
    console.log(this.bubbleChartData)
  }
}
