/* 
 * Copyright (C) 2016 Arthur Gregorio, AG.Software
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * 
 * @param {type} data
 * @returns {undefined}
 */
function createClosingChart(data) {

    // pega o canvas do grafico
    var chart = new Chart($("#closingsChart").get(0).getContext("2d"));

    var chartOptions = {
        showScale: true,
        scaleShowGridLines: false,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        scaleShowHorizontalLines: true,
        scaleShowVerticalLines: true,
        bezierCurve: true,
        bezierCurveTension: 0.3,
        pointDot: true,
        pointDotRadius: 4,
        pointDotStrokeWidth: 1,
        pointHitDetectionRadius: 20,
        datasetStroke: true,
        datasetStrokeWidth: 2,
        datasetFill: true,
        multiTooltipTemplate: "<%= addCommas(value) %>",
        legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for \n\(var i=0; i<datasets.length; i++){%><li><span style=\"background-color:\n\<%=datasets[i].lineColor%>\"></span><%=datasets[i].label%></li><%}%></ul>",
        maintainAspectRatio: true,
        responsive: true
    };

    //Create the line chart
    chart.Line(data, chartOptions);
};

/**
 * 
 * @param {type} data
 * @returns {undefined}
 */
function createDailySummaryChart(data) {

    // pega o canvas do grafico
    var chart = new Chart($("#dailySummaryChart").get(0).getContext("2d"));

    var chartOptions = {
        showScale: true,
        scaleShowGridLines: false,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        scaleShowHorizontalLines: true,
        scaleShowVerticalLines: true,
        bezierCurve: true,
        bezierCurveTension: 0.3,
        pointDot: true,
        pointDotRadius: 4,
        pointDotStrokeWidth: 1,
        pointHitDetectionRadius: 20,
        datasetStroke: true,
        datasetStrokeWidth: 2,
        datasetFill: true,
        multiTooltipTemplate: "<%= addCommas(value) %>",
        legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for \n\(var i=0; i<datasets.length; i++){%><li><span style=\"background-color:\n\<%=datasets[i].lineColor%>\"></span><%=datasets[i].label%></li><%}%></ul>",
        maintainAspectRatio: true,
        responsive: true
    };

    //Create the line chart
    chart.Line(data, chartOptions);
};

/**
 * 
 * @param {type} number
 * @returns {x1|x|x2|String}
 */
function addCommas(number) {
    number += '';
    x = number.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? ',' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + '.' + '$2');
    }
    return "R$ " + x1 + x2;
};