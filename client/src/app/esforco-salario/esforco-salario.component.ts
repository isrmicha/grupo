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
  data = []
  constructor(public http: HttpClient) { }
  async ngOnInit() {
    let rows: any = await this.http.get('https://grupogado.herokuapp.com/esforcoSalario').toPromise()
    rows.map((row, index) => {
      console.log(row)
      this.data[index] =
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
  console.log(this.data)
}
  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
}
//   constructor(public http: HttpClient) { }
//   public bubbleChartOptions: ChartOptions = {
//     responsive: true,
//     scales: {
//       xAxes: [
//         {
//           ticks: {
//             min: 0,
//             max: 10,
//           }
//         }
//       ],
//       yAxes: [
//         {
//           ticks: {
//             min: 0,
//             max: 10,
//           }
//         }
//       ]
//     }
//   };
//   public bubbleChartType: ChartType = 'bubble';
//   public bubbleChartLegend = true;

//   public bubbleChartData = [];

//   public bubbleChartColors: Color[] = [
//     {
//       backgroundColor: [
//         'red',
//         'green',
//         'blue',
//         'purple',
//         'yellow',
//         'brown',
//         'magenta',
//         'cyan',
//         'orange',
//         'pink'
//       ]
//     }
//   ];
  // async ngOnInit() {
  //   let rows: any = await this.http.get('https://grupogado.herokuapp.com/esforcoSalario').toPromise()
  //   rows.map((row, index) => {
  //     console.log(row)
  //     this.bubbleChartData[index] =
  //       {
  //         data: [
  //           { x: row[1], y: row[2], r: 5 }
  //         ],
  //         label: row[0],
  //         backgroundColor: 'green',
  //         borderColor: 'blue',
  //         hoverBackgroundColor: 'purple',
  //         hoverBorderColor: 'red',
  //       }
  // })
  // console.log(this.bubbleChartData)
// }
