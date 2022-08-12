$( document ).ready(function() {
  socket = io();
  socket.connect();

  socket.on('connect', function(){
    console.log("Connected");
  })

  socket.on('message', function(msg){
    console.log(msg);
  })

  socket.on('tempreadings', function(data){
    console.log(data)
    const temparray = data.split(',');
    var tablehtml = '<tr><td id="row">Sensor</td><td id="row">Temp</td></tr>';

    for(i=0; i<temparray.length-1; i++){
      tablehtml += '<tr><td>'+i+'</td>'+'<td>'+ temparray[i]+'</td></tr>';
    }
    document.getElementById("temp").innerHTML = tablehtml
  })
});



/*
const config = {
  type: "line",
  data: {
    labels: [],
    datasets: [{
      data: [], // Set initially to empty data
      label: "Temperature",
      borderColor: "#3e95cd",
      fill: false
    }]
  },
  options: {
    scales: {
      xAxes: [{
        type: "time",
        distribution: "linear"
      }],
      title: {
        display: false
      }
    }
  }
};

const ctx = document.querySelector("#line-chart").getContext("2d");
const temperatureChart = new Chart(ctx, config);

const csvToChartData = csv => {
  const lines = csv.trim().split("\n");
  lines.shift(); // remove titles (first line)
  return lines.map(line => {
    const [date, temperature] = line.split(",");
    return {
      x: date,
      y: temperature
    };
  });
};

const fetchCSV = () => fetch("temperature.csv")
  .then(data => data.text())
  .then(csv => {
    temperatureChart.data.datasets[0].data = csvToChartData(csv);
    temperatureChart.update();
    setTimeout(fetchCSV, 5000); // Repeat every 5 sec
  });

fetchCSV(); // First fetch!
*/
