$(function() {
	var myChart = Tree()

// var chartWrapper = d3.select('#vis')
// 						.append("div")
// 						.attr('height', 600)
// 						.attr('width', 600)
						// .style("left", margin.left + "px")
						// .style("top", margin.top + "px");

	d3.csv("data/formatted.csv", function(data) {
		d3.select("#vis")
			.datum(data)
			.call(myChart);
	});	

})
