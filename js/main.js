$(function() {
	var myChart = Tree().height(500).width(500).grouping('AGE_GROUP').selectedDisplay('LEADING_CAUSES_OF_DEATH').measure('1990')
					

// var chartWrapper = d3.select('#vis')
// 						.append("div")
// 						.attr('height', 600)
// 						.attr('width', 600)
						// .style("left", margin.left + "px")
						// .style("top", margin.top + "px");

	// load the data, bind the data, and render the treemap
	d3.csv("data/formatted.csv", function(data) {
		d3.select("#vis")
			.datum(data)
			.call(myChart);
	});	

})
