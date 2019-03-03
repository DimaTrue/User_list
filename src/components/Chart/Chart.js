import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import React, { Component } from 'react';
import './Chart.css';

am4core.useTheme(am4themes_animated);

class Chart extends Component {

  constructor(props) {
    super();
  }
  componentDidMount() {
    let chart = am4core.create("chartdiv", am4charts.PieChart);
    let male = this.props.props.users.filter(i => i.gender === 'male');
    let female = this.props.props.users.filter(i => i.gender === 'female');

    chart.data = [{
      "gender": "Male",
      "users": male.length
    }, {
      "gender": "Female",
      "users": female.length
    }];

    let pieSeries = chart.series.push(new am4charts.PieSeries());

    pieSeries.dataFields.value = "users";
    pieSeries.dataFields.category = "gender";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;

    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
    this.chart = chart;

    pieSeries.colors.list = [
      am4core.color("#7cb5ec"),
      am4core.color("#434348"),
    ];
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <div>
        <h1 className="chart_title">Gender users</h1>
        <div id='chartdiv'>
        </div>
      </div>
    )
  }
}
export default Chart;