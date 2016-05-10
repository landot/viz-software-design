$(function() {
	var myChart = Tree().height(500).width(700).grouping('Gender').selectedDisplay('Animals').measure('Total')
					

// var chartWrapper = d3.select('#vis')
// 						.append("div")
// 						.attr('height', 600)
// 						.attr('width', 600)
						// .style("left", margin.left + "px")
						// .style("top", margin.top + "px");

	d3.csv("data/test.csv", function(data) {
		d3.select("#vis")
			.datum(data)
			.call(myChart);
	});	

})
