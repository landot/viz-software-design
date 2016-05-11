$(function() {
	var myChart = Tree().height(500).width(500).grouping('Gender').selectedDisplay('Animals').measure('Total')

	// load the data, bind the data, and render the treemap
	d3.csv("data/test.csv", function(data) {
		d3.select("#vis")
			.datum(data)
			.call(myChart);
	});	
})
