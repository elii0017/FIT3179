// Embed the choropleth map
var vg_1 = "./HomeworkWeek9.json"; // Adjust path to go up one directory
vegaEmbed("#heat_map", vg_1).then(function(result) {
  // Access the Vega view instance if needed
}).catch(console.error);

// Embed the pie charts
var vg_2 = "./slope-graphs.json"; // Adjust path
vegaEmbed("#slopes", vg_2).then(function(result) {
  // Access the Vega view instance if needed
}).catch(console.error);

// Embed the Indigenous vs Non-Indigenous pie comparison
var vg_3 = "./comparison.json"; // Adjust path
vegaEmbed("#pie_comparison", vg_3).then(function(result) {
  // Access the Vega view instance if needed
}).catch(console.error);

// Embed the Stacked Bar Chart
var vg_4 = "./male-female.json"; // Adjust path
vegaEmbed("#stacked_bar", vg_4).then(function(result) {
  // Access the Vega view instance if needed
}).catch(console.error);

// Embed the line chart for week 10
var vg_5 = "./HomeworkWeek10.json"; // Adjust path to go up one directory
vegaEmbed("#line_chart", vg_5).then(function(result) {
  // Access the Vega view instance if needed
}).catch(console.error);
