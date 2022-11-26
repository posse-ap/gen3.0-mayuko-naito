"use strict";

// Register the plugin to all charts:
Chart.register(ChartDataLabels);

function createLanguageChart() {
  let language = document.querySelector("#language_circle").getContext('2d')
  new Chart(language, {
    type: 'doughnut',
    data: {
      labels: ["JavaScript", "CSS", "PHP", "HTML", "Laravel", "SQL", "SHELL", "情報システム基礎知識(その他)"],
      datasets: [{
        backgroundColor: ["#0345ec", "#0f71bd", "#20bdde", "#3ccefe", "#b29ef3", "#6d46ec", "#4a17ef", "#3105c0"],
        data: [42, 18, 10, 10, 8, 6, 4, 4 ]
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        tooltip:{
          enabled: false
        },
        datalabels:{
          font:{
            size: 13
          },
          formatter: function(value, context){
            return value.toString() + "％";
          },
        },
        legend: {
          display: false,
        },
      },
    },
  });
}
createLanguageChart();



function createContentChart() {
  let language = document.querySelector("#content_circle").getContext('2d')
  new Chart(language, {
    type: 'doughnut',
    data: {
      labels: ["ドットインストール", "N予備校", "POSSE課題",],
      datasets: [{
        backgroundColor: ["#0345ec", "#0f71bd", "#20bdde",],
        data: [60, 20, 15,]
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        tooltip:{
          enabled: false
        },
        datalabels:{
          font:{
            size: 13
          },
          formatter: function(value, context){
            return value.toString() + "％";
          },
        },
        legend: {
          display: false,
        },
      },
    },
  });
}

createContentChart();

var ctx = document.getElementById('bar_graph');

var data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8" , "9" , "10" , "11" , "12" , "13", "14" , "15" , "16" ,"17", "18", "19", "20", "21", "22", "23", "24" , "25" , "26" , "27" , "28" , "29" , "30",],
    datasets: [{
        label: '時間',
        data: [3, 4, 5, 0, 0, 4, 2, 2, 8, 8, 2, 2, 1, 7, 4, 4, 3, 3, 3, 2, 2, 6, 2, 2, 1, 1, 7, 8],
        backgroundColor: '#1e90ff	'
    }]
};

var options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: false,
        //borderを消す
      },
      ticks: {
        maxRotation: 0,
        minRotation: 0,
        //回転させない
        min: 1,
        max: 30,
        color: "#97b9d1",
        autoSkip: false,
        //画面を小さくしても、非表示させない
        callback: function (value, index) {
          return index % 2 === 1 ? this.getLabelForValue(value) : "";
        },
      },
    },
    y: {
      grid: {
        display: false,
        drawBorder: false,
        //borderを消す
      },
      max: 8,
      min: 0,
      ticks: {
        stepSize: 2,
        callback: function (value) {
          return value + "h";
        },
        color: "#97b9d1",
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      display: false,
    },
  },
};

var ex_chart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});
