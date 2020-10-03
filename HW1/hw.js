const DATA = [
  {x:5, y:2},
  {x:3, y:5},
  {x:7, y:4},
  {x:3, y:2},
  {x:4, y:3},
  {x:8, y:6},
  {x:3, y:9},
  {x:2, y:4},
  {x:5, y:3},
  {x:2, y:8},
  {x:3, y:7},
  {x:7, y:7},
  {x:5, y:2},
  {x:4, y:9},
  {x:2, y:15},
  {x:4, y:3},
]

const container = d3.select("svg")
.classed('container',true);

const width = 500;
const height = 200;

const svg = d3.select("body").append("svg")
.attr("width", width)
.attr("height", height);

const xScale = d3.scaleLinear().range([0, width]).domain([1,10]);
const yScale = d3.scaleLinear().range([height, 0]).domain([0,10]);

const bars = container
.selectAll(".circle")
.data(DATA)
.enter()
.append('circle')
.attr('class', 'circle')
.attr('r', 3)
.attr('cx', data=>xScale(data.x))
.attr('cy', data=>200-yScale(data.y));
