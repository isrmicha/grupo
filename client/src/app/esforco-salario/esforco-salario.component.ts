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
  async ngOnInit() {
    console.log`requisitando`
    let dados: any = await this.http.get('https://grupogado.herokuapp.com/esforcoSalario').toPromise()
    console.log(dados)
    dados.map(rows => {
      rows.map(row => {
        row.map(cell => {
          // this.bubbleChartData.push({
          //   label: 
          // })
        })
      })
    })
    // {
    //   data: [
    //     { x: 10, y: 10, r: 5 },
    //     { x: 15, y: 5, r: 5 },
    //     { x: 26, y: 12, r: 5 },
    //     { x: 7, y: 8, r: 5 },
    //   ],
    //     label: 'Series A',
    //       backgroundColor: 'green',
    //         borderColor: 'blue',
    //           hoverBackgroundColor: 'purple',
    //             hoverBorderColor: 'red',
    // },
    // {
    //   data: [
    //     { x: 10, y: 10, r: 5 },
    //     { x: 15, y: 5, r: 5 },
    //     { x: 26, y: 12, r: 5 },
    //     { x: 7, y: 8, r: 5 },
    //   ],
    //     label: 'Series B',
    //       backgroundColor: 'green',
    //         borderColor: 'blue',
    //           hoverBackgroundColor: 'purple',
    //             hoverBorderColor: 'red',
    // },
  }
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

  public bubbleChartData: ChartDataSets[] = [
    // {
    //   data: [
    //     { x: 10, y: 10, r: 5 },
    //     { x: 15, y: 5, r: 5 },
    //     { x: 26, y: 12, r: 5 },
    //     { x: 7, y: 8, r: 5 },
    //   ],
    //   label: 'Series A',
    //   backgroundColor: 'green',
    //   borderColor: 'blue',
    //   hoverBackgroundColor: 'purple',
    //   hoverBorderColor: 'red',
    // },
    // {
    //   data: [
    //     { x: 10, y: 10, r: 5 },
    //     { x: 15, y: 5, r: 5 },
    //     { x: 26, y: 12, r: 5 },
    //     { x: 7, y: 8, r: 5 },
    //   ],
    //   label: 'Series B',
    //   backgroundColor: 'green',
    //   borderColor: 'blue',
    //   hoverBackgroundColor: 'purple',
    //   hoverBorderColor: 'red',
    // },
  ];

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
}
