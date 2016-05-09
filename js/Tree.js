var Tree = function() {
	var margin = {top: 40, right: 10, bottom: 10, left: 10},
		    width = 960 - margin.left - margin.right,
		    height = 500 - margin.top - margin.bottom,
			color = d3.scale.category10(),
			measure = '1990'

	function my(selection) {
		selection.each(function(data) {





		
		//var measure = '1990';
		//var color = d3.scale.category10();

		//Wrapper div for treemap
		var div = d3.select('#vis')
								.append("div")
								.attr('height', 600)
								.attr('width', 600)
								.style("left", margin.left + "px")
								.style("top", margin.top + "px");

		var position = function() {
			this.style("left", function(d,i) {return d.x + "px"; })
					.style("top", function(d) { return d.y + "px"; })
					.style('width', function(d){return d.dx + 'px'})
					.style("height", function(d) { return d.dy + "px"; })
					.style("background", function(d) {return !d.values ? color(d.AGE_GROUP) : null; })
		}

		//var nestedData;
		//var year = '1990';
		//var year_selection = function() {

		var nest = d3.nest()
					.key(function(d){return d.AGE_GROUP;})
		var nestedData = nest.entries(data);
		//}

		var treemap = d3.layout.treemap() 
		 		.size([width, height]) 
		 		.sticky(true) 
		 		.value(function(d) {return +d[measure];}) 
		 		.children(function(d){return d.values;});

		var draw = function() {
			//year_selection();
			treemap.value(function(d) {return +d[measure];});
			var nodes = div.selectAll(".node").data(treemap.nodes({values:nestedData}), function(d,i) {return i});
			nodes.enter()
					 .append("div")
					 .attr('class', 'node')
					 .text(function(d){return d.LEADING_CAUSES_OF_DEATH})
				   .call(position);
			// Update the nodes
			nodes.transition().duration(500).call(position);
		}

		draw();

		})
	}

	my.margin = function(value) {
		if (!arguments.length) return margin;
		margin = value;
		return my;

	};

	my.width = function(value) {
		if (!arguments.length) return width;
		width = value;
		return my;

	};

	my.height = function(value) {
		if (!arguments.length) return height;
		height = value;
		return my;

	};

	my.measure = function(value) {
		if (!arguments.length) return measure;
		measure = value;
		return my;

	};

	return my;

}