var vg_1 = "./line-graph.json";
vegaEmbed("#linedot",vg_1).then(function(results){
}).catch(console.error);  

var vg_2 = "./HomeworkWeek9.json"; 
vegaEmbed("#heat_map", vg_2).then(function(result) {
}).catch(console.error);

var vg_3 = "./HomeworkWeek10.json";
vegaEmbed("#line_chart", vg_3).then(function(result) {
}).catch(console.error);

var vg_4 = "./male-female.json";
vegaEmbed("#stacked_bar", vg_4).then(function(result) {
}).catch(console.error);

var vg_5 = "./slope-graphs.json"; 
vegaEmbed("#slopes", vg_5).then(function(result) {
}).catch(console.error);

var vg_6 = "./comparison.json"; 
vegaEmbed("#pie_comparison", vg_6).then(function(result) {
}).catch(console.error);

var vg_7 = "./side-bars.json";
vegaEmbed("#sidebars",vg_7).then(function(results){
}).catch(console.error);

