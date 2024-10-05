// Embed the choropleth map
var vg_1 = "HomeworkWeek9.json";
vegaEmbed("#choropleth_map", vg_1).then(function(result) {
  // Access the Vega view instance if needed
}).catch(console.error);

// Embed the line chart
var vg_2 = "HomeworkWeek10.json";
vegaEmbed("#line_chart", vg_2).then(function(result) {
  // Access the Vega view instance if needed
}).catch(console.error);
