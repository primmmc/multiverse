// d3-graph.js
const data = [10, 20, 30, 40, 50]; // Sample data

const svg = d3.select("#d3-graph-container").append("svg");

svg
  .selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i * 40)
  .attr("y", (d) => 100 - d)
  .attr("width", 30)
  .attr("height", (d) => d)
  .attr("fill", "blue");
