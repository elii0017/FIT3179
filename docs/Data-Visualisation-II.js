// Embed the choropleth map
var vg_1 = "./HomeworkWeek9.json";
vegaEmbed("#choropleth_map", vg_1).then(function(result) {
  // Access the Vega view instance if needed
}).catch(console.error);

// Embed the line chart for week 9
var vg_2 = "./proportion-indigenous.json";
vegaEmbed("#line_chart_week9", vg_2).then(function(result) {
  // Access the Vega view instance if needed
}).catch(console.error);

// Embed the Pie Charts
var vg_3 = "./proportion-non-indigenous.json";
vegaEmbed("#bar_chart_non_indigenous", vg_3).then(function(result) {
  // Access the Vega view instance if needed
}).catch(console.error);

var vg_4 = "./comparison.json";
vegaEmbed("#bar_chart_comparison", vg_4).then(function(result) {
  // Access the Vega view instance if needed
}).catch(console.error);

// Embed the Stacked Bar Chart
var vg_5 = "./male-female.json"; 
vegaEmbed("#stacked_bar_chart", vg_5).then(function(result) {
  // Access the Vega view instance if needed
}).catch(console.error);

// Embed the line chart for week 10
var vg_6 = "./HomeworkWeek10.json"; // Ensure this file is correct and exists
vegaEmbed("#line_chart_week10", vg_6).then(function(result) {
  // Access the Vega view instance if needed
}).catch(console.error);
