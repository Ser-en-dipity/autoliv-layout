import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { ProductsService } from 'src/openapi';
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.less'
})
export class LineChartComponent implements OnInit {
  public productId: string = '39873b47-695f-4ac4-818f-7d8ccc3164af';
  public machineCode: string = '';
  public svg:any;
  public aapl = [{idx: 0, inspectVal: 0}];
  
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    const machineCode = localStorage.getItem('machineCode');
    if (machineCode) {
      this.machineCode = machineCode;
    }
    this.fetchInspectorReport();
  }
  public fetchInspectorReport(): void {
    // const cmd: GetInspectorReportCommand = {
    //   product_id: this.productId,
    //   machine_code: this.machineCode,
    // };
    // this.productsService.apiProductsFetchInspectorReportPost(cmd).subscribe(
    //   (data) => {
    //     data = data.filter((x) => x != 'None');
    //     for(var i=0; i<data.length; i++) {
    //       this.aapl.push({ idx: i, inspectVal: Number(data[i]) });
    //     }
    //     this.lineChart();
    //   },
    //   (error) => {
    //     console.error(error);
    //   }
    // );
    this.lineChart();
  }

  public lineChart(): void {
    const width = 928;
    const height = 500;
    const marginTop = 20;
    const marginRight = 30;
    const marginBottom = 30;
    const marginLeft = 40;

    // Declare the x (horizontal position) scale.
    const x = d3.scaleLinear([0, 60], [marginLeft, width - marginRight]);

    // Declare the y (vertical position) scale.
    const y = d3.scaleLinear([0, 200], [height - marginBottom, marginTop]);

    // Declare the line generator.
    const line = d3.line()
        .x(d => x(d[0]))
        .y(d => y(d[1]));

    // Create the SVG container.
    this.svg = d3.select("figure#line")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [0, 0, width, height])
        .attr("style", "max-width: 80%; height: auto; height: intrinsic;");

    // Add the x-axis.
    this.svg.append("g")
        .attr("transform", `translate(0,${height - marginBottom})`)
        .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0));

    // Add the y-axis, remove the domain line, add grid lines and a label.
    this.svg.append("g")
        .attr("transform", `translate(${marginLeft},0)`)
        .call(d3.axisLeft(y).ticks(height / 40))
        .call((g:any) => g.select(".domain").remove())
        .call((g:any) => g.selectAll(".tick line").clone()
            .attr("x2", width - marginLeft - marginRight)
            .attr("stroke-opacity", 0.1))
        .call((g:any) => g.append("text")
            .attr("x", -marginLeft)
            .attr("y", 10)
            .attr("fill", "currentColor")
            .attr("text-anchor", "start")
            .text("↑ 检测数据"));

    // Append a path for the line.
    this.svg.append("path")
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr("d", line(this.aapl.map(d => [d.idx, d.inspectVal])));

    // this.drawLine();    
  }

  public drawLine(): void {
    this.svg.append("line")
      .attr("x1", 40)
      .attr("y2", 20)
      .attr("x2", 600)
      .attr("y2", 20)
      .attr("stroke", "black")
      .attr("stroke-width", "2px");
  }

    
}
