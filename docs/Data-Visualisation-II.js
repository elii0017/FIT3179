// Embed the choropleth map
var vg_1 = "./HomeworkWeek9.json"; // Adjust path to go up one directory
vegaEmbed("#choropleth_map", vg_1).then(function(result) {
  // Access the Vega view instance if needed
}).catch(console.error);

// Embed the line chart for week 9
var vg_2 = "../Visualisation Codes/proportion-indigenous.json"; // Adjust path
vegaEmbed("#line_chart_week9", vg_2).then(function(result) {
  // Access the Vega view instance if needed
}).catch(console.error);

// Embed the Pie Charts
var vg_3 = "../Visualisation Codes/proportion-non-indigenous.json"; // Adjust path
vegaEmbed("#bar_chart_non_indigenous", vg_3).then(function(result) {
  // Access the Vega view instance if needed
}).catch(console.error);

var vg_4 = "../Visualisation Codes/comparison.json"; // Adjust path
vegaEmbed("#bar_chart_comparison", vg_4).then(function(result) {
  // Access the Vega view instance if needed
}).catch(console.error);

// Embed the Stacked Bar Chart
var vg_5 = "../Visualisation Codes/male.json"; // Adjust path
vegaEmbed("#stacked_bar_chart", vg_5).then(function(result) {
  // Access the Vega view instance if needed
}).catch(console.error);

// Embed the line chart for week 10
var vg_6 = "./HomeworkWeek10.json"; // Adjust path to go up one directory
vegaEmbed("#line_chart_week10", vg_6).then(function(result) {
  // Access the Vega view instance if needed
}).catch(console.error);
