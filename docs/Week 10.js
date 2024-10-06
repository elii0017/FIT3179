// Vega-Embed for the choropleth map
vegaEmbed('#choropleth_map', {
  "width": 500,  // Adjust the canvas width for the choropleth map
  "height": 400, // Adjust the canvas height for the choropleth map
  "spec": {
    // Your Vega-Lite or Vega specification for the choropleth map
    "data": { "url": "choropleth_data.json" }, // Replace with your data source
    "mark": "geoshape",
    "encoding": {
      "color": { "field": "value", "type": "quantitative" }
    }
  }
});

// Vega-Embed for the line chart
vegaEmbed('#line_chart', {
  "width": 500,  // Adjust the canvas width for the line chart
  "height": 400, // Adjust the canvas height for the line chart
  "spec": {
    // Your Vega-Lite or Vega specification for the line chart
    "data": { "url": "line_chart_data.json" }, // Replace with your data source
    "mark": "line",
    "encoding": {
      "x": { "field": "date", "type": "temporal" },
      "y": { "field": "value", "type": "quantitative" }
    }
  }
});
