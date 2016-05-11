var Tree = function() {
	// set default values for parameters
	var margin = {top: 40, right: 10, bottom: 10, left: 10},
		    width = 960 - margin.left - margin.right,
		    height = 500 - margin.top - margin.bottom,
			color = d3.scale.category10(),
			measure = '1990',
			grouping = 'AGE_GROUP',
			selectedDisplay = 'LEADING_CAUSES_OF_DEATH'

	// internal function being returned
	function my(selection) {
		// for each selected element, execute the function
		selection.each(function(data) {

		// wrapper div for treemap
		var div = d3.select(this);

		// arranges divs
		var position = function() {
			this.style("left", function(d,i) {return d.x + "px"; })
					.style("top", function(d) { return d.y + "px"; })
					.style('width', function(d){return d.dx + 'px'})
					.style("height", function(d) { return d.dy + "px"; })
					.style("background", function(d) {return !d.values ? color(d[grouping]) : null; })
		}

		// nests data with 'd3.nest'
		var nest = d3.nest()
					.key(function(d){return d[grouping];})

		// variable containing nested data
		var nestedData = nest.entries(data);

		// constructs treemap and determines size of elements based on 'measure'
		var treemap = d3.layout.treemap() 
		 		.size([width, height]) 
		 		.sticky(true) 
		 		.value(function(d) {return +d[measure];}) 
		 		.children(function(d){return d.values;});

		// displays the treemap by binding the data
		var draw = function() {
			treemap.value(function(d) {return +d[measure];});
			var nodes = div.selectAll(".node").data(treemap.nodes({values:nestedData}), function(d,i) {return i});
			nodes.enter()
					 .append("div")
					 .attr('class', 'node')
					 .text(function(d){return d[selectedDisplay]})

				   .call(position);
			// update the nodes
			nodes.transition().duration(500).call(position);
		}

		// call the draw function
		draw();

		// constructs and displays legend for the treemap
		var legend = div.append("svg")
			.style("margin-left", (width + 20) + 'px')
			.style("margin-top", ((height / 2) + 20) + 'px')

		legend.selectAll('rect')
			.data(color.domain())
			.enter()
			.append('rect')
			.attr('width', 10)
			.attr('height', 10)
			.style('fill', function(d, i){return color(d)})
			.attr('x', function(d, i){return i})
		 	.attr('y', function(d, i){return i * 19})

		legend.selectAll('text')
			.data(color.domain())
			.enter()
			.append('text')
			.text(function(d, i){return d})
			.attr('x', function(d, i){return i + 15})
			.attr('y', function(d, i){return (i * 19) + 11})
		})
	}

	// margin getter/setter
	my.margin = function(value) {
		if (!arguments.length) return margin;
		margin = value;
		return my;
	};

	// width getter/setter
	my.width = function(value) {
		if (!arguments.length) return width;
		width = value;
		return my;
	};

	// height getter/setter
	my.height = function(value) {
		if (!arguments.length) return height;
		height = value;
		return my;
	};

	// measure getter/setter
	my.measure = function(value) {
		if (!arguments.length) return measure;
		measure = value;
		return my;
	};

	// grouping getter/setter
	my.grouping = function(value) {
		if (!arguments.length) return grouping;
		grouping = value;
		return my;
	};

	// selectedDisplay getter/setter
	my.selectedDisplay = function(value) {
		if (!arguments.length) return selectedDisplay;
		selectedDisplay = value;
		return my;
	};

	return my;
}