// contains various plotting functions using d3.js
// with variables to select in which html div to insert the figures & sliders

function write_widget(id_figure, id_parameter, param_data, switch_data, algebraic_eq, plot_type){
	
	document.getElementById(id_parameter).innerHTML='';
	//console.log(param_data);
	
	// write parameter sliders
	var html_txt = '<p>Click on the parameters to change their values</p>'
	html_txt += '<div class="listParam">';
	html_txt += write_sliders(id_figure, id_parameter, param_data, switch_data, algebraic_eq, plot_type);
	html_txt += '</div>';
	document.getElementById(id_parameter).innerHTML= html_txt ;
	

	// initialise figure
	// a for loop to define global variables for each param	
	var algebraic_values = algebraic_equation_f(); // recalculate algebraic equation
	//console.log(algebraic_values);
	
	switch(plot_type){
		case 'waterfall':
			plot_waterfall(id_figure, algebraic_values)
			break;
		default:
			console.log("Plot type not recognised");
	}
}

function write_sliders(id_figure, id_parameter, param_data, switch_data, algebraic_eq, plot_type){
	var html_txt = '';

	// V1: collapsible
	// CSS3 https://codepen.io/markcaron/pen/RVvmaz (see their styling)
	html_txt = '';
	for(i in context[param_data]['name']){
		
		var name = context[param_data]['name'][i]; 
		
		html_txt += ' <section class="accordion"> ' ;
		html_txt += ' <input type="checkbox" name="collapse" id="handle_'+name+'" > ';
		html_txt += ' <h5 class="handle"> <label for="handle_'+name+'"> '+name+'</label></h5>'; // replace by pretty name + tooltip description
		html_txt += ' <div class="content">';
		
		if(context[param_data]['uncertainty type'][i] == 'switch'){
			var nbOptions = context[switch_data][name]['options'].length
			html_txt += ' <select name="select_'+name+'" onchange="updateWidget(this.value, this.name, \''+id_figure+'\', algebraic_equation_f, \''+plot_type+'\', \''+switch_data+'\');" >' ;
			for(let j=0; j < nbOptions; j++){
				html_txt += ' <option value='+j+'>'+context[switch_data][name]['options'][j]+'</option> ';
			}
			html_txt += '</select>' ;						
		}else{
			// html_txt += '  Minimum: '+ context[param_data]['minimum'][i]+' ';
			html_txt += ' <input type="range" name="range_'+name+'" min="'+context[param_data]['minimum'][i]+'" max="'+context[param_data]['maximum'][i]+'" step = "'+(context[param_data]['maximum'][i] - context[param_data]['minimum'][i])/100+'"  ';
			html_txt += ' onchange="updateWidget(this.value, this.name, \''+id_figure+'\', algebraic_equation_f, \''+plot_type+'\', \''+switch_data+'\');" >' ;
			html_txt += ' <input type="text" id="txt_'+name+'" value="'+context[param_data]['amount'][i]+'" maxlength="4" size="4" onchange="updateWidget(this.value, this.id, \''+id_figure+'\', algebraic_equation_f, \''+plot_type+'\', \''+switch_data+'\');" >' ;			
		}
		html_txt += ' </div> </section>';			
	}
	return html_txt
}

function updateWidget(val, NameOrId, id_figure, algebraic_eq, plot_type, switch_data){
	console.log("triggered")
	document.getElementById(id_figure).innerHTML=''; // reset figure div
	// update text input area with updated value (if update was made by range slider)
	paramType = NameOrId.split(/_(.+)/)[0];
	console.log(paramType);
	paramName = NameOrId.split(/_(.+)/)[1];
	console.log(context[switch_data]);
	// update global variable global, depending on if it is a switch or not
	if(paramType == 'select'){ // it's a switch param, update multiple values
		var nbOptions = context[switch_data][paramName]['options'].length
		for(let j = 0; j<nbOptions; j++){
			console.log(paramName+'_'+j.toString());
			console.log(context[switch_data][paramName]['values'][val][j]);
			window[paramName+'_'+(j+1).toString()]= context[switch_data][paramName]['values'][val][j];
		}
		
	}else{
		document.getElementById('txt_'+paramName).value=val;
		window[paramName]=val;
	}
	// recalculate algebraic equation
	var algebraic_values = context['algebraic_equation_f'].apply(); // dynamic call to function - to pass as argument to the update function
	
	// plotting, according to type
	switch(plot_type){
		case 'waterfall':
			plot_waterfall(id_figure, algebraic_values);
			plot_stackedbar(id_figure, algebraic_values);
			break;
		default:
			console.log("Plot type not recognised");
	}	
}

function plot_stackedbar(id_figure, algebraic_values){
	// https://www.d3-graph-gallery.com/graph/barplot_stacked_highlight.html
	// https://www.d3-graph-gallery.com/graph/custom_legend.html 
	
	// set the dimensions and margins of the graph
	var margin = {top: 10, right: 30, bottom: 20, left: 50},
		width = 460 - margin.left - margin.right,
		height = 400 - margin.top - margin.bottom;

	// append the svg object to the body of the page
	var svg = d3.select("#"+id_figure)
	  .append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
	  .append("g")
		.attr("transform",
			  "translate(" + margin.left + "," + margin.top + ")");
	
	// from 'waterfall' processing data
		function process_data(data){
			// previously, data format: [ {'name':'', 'value':0}, {'name':'', 'value':0}, ]
			// currently, data format: { 'categorie_1': [0], 'categorie_2': [0] }
			var prev_end = 0;
			var new_data = [];
			var stages = [];
			for(d in data){
				name = d; //data[d].name;
				value =  data[d][0] // data[d].value;
				start = prev_end;
				end = prev_end + value;
				left = Math.min(start, end);
				right = Math.max(start, end)
				this_line = {name: name, value: value, start:start, end: end, left:left, right:right}
				prev_end += value
				new_data.push(this_line);
				stages.push(name)
			};
			return [new_data, stages];
		}
		var data = process_data(algebraic_values);	
		console.log(data);
}

function plot_waterfall(id_figure, algebraic_values){
	
		function process_data(data){
			// previously, data format: [ {'name':'', 'value':0}, {'name':'', 'value':0}, ]
			// currently, data format: { 'categorie_1': [0], 'categorie_2': [0] }
			var prev_end = 0;
			var new_data = [];
			var stages = [];
			for(d in data){
				name = d; //data[d].name;
				value =  data[d][0] // data[d].value;
				start = prev_end;
				end = prev_end + value;
				left = Math.min(start, end);
				right = Math.max(start, end)
				this_line = {name: name, value: value, start:start, end: end, left:left, right:right}
				prev_end += value
				new_data.push(this_line);
				stages.push(name)
			};
			return [new_data, stages];
		}
		
		var processed = process_data(algebraic_values);
		
		var segments = processed[0],
			stages = processed[1];
		var margin = {left:20, right:70, top:20, bottom:20},
			yAxisWidth = 110,
			xAxisHeight = 21,
			chartWidth = 500,
			xScale = d3.scale.linear(),
			yScale = d3.scale.ordinal(),
			segmentHeight = 44,
			segmentPadding = segmentHeight/3,
			svg = null,
			colour_plus = 'pink'//'#f0f8ff',
			colour_minus = 'lightgreen',
			labelFormat = d3.format(",.3r"), //d3.format("^.2g")
			unit="kgCO2-eq";
		var chartHeight = (segmentHeight + segmentPadding) * segments.length;
		var minVal = d3.min(segments, function (d) {
				return d.left;
			}),
			maxVal = d3.max(segments, function (d) {
				return d.right;
			});
		xScale.range([0, chartWidth]).nice();
		xScale.domain([minVal, maxVal]);
		//console.log(stages);
		yScale.domain(stages);
		yScale.rangeRoundBands([0, chartHeight], 0.1);
		//yScale.range([0, chartHeight]);
		function setGraphicAttributes(seg, index) {
			seg.x = xScale(seg.left); //Math.min(seg.startVal, seg.endVal)
			seg.y = (segmentPadding + segmentHeight) * index;
			seg.width = Math.abs(xScale(seg.value) - xScale(0));
			seg.endX = xScale(seg.end);
			if (Math.abs(seg.value)/Math.abs(maxVal-minVal) > 0.15){
				seg.labelX = xScale(seg.right - Math.abs(seg.value/2));
				seg.labelAnchor = "middle";
			}else{
				seg.labelX = xScale(seg.right) + 5;
				seg.labelAnchor = "right";
			}
			
		}
		for(i=0; i<segments.length; i++){
		  setGraphicAttributes(segments[i], i)
		}
		//console.log(segments)
		function createSvg(parentElement) {
			svg = d3.select(parentElement).append("svg");
			svg.append("g")
				.attr("class", "chart-group")
				.attr("transform", "translate(" + (margin.left + yAxisWidth) + "," + margin.top + ")");
			// setSvgSize
			svg.attr("width", chartWidth + yAxisWidth + margin.left + margin.right);
			svg.attr("height", xAxisHeight + chartHeight + margin.top + margin.bottom);
		}
		function wrap(text, width) {
			text.each(function() {
				var text = d3.select(this),
					words = text.text().split(/\s+/).reverse(),
					word,
					line = [],
					lineNumber = 0,
					lineHeight = 1.1, // ems
					x = text.attr("x"),
					y = text.attr("y"),
					dy = parseFloat(text.attr("dy")),
					tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");
				while (word = words.pop()) {
					line.push(word);
					tspan.text(line.join(" "));
					if (tspan.node().getComputedTextLength() > width) {
						line.pop();
						tspan.text(line.join(" "));
						line = [word];
						tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
					}
				}
			});
		}
		function drawXAxis() {
			var tickValues = [], maxTickVal;
			svg.select(".x.axis").remove();
			if (chartHeight > 0 && segments && segments.length > 0) {
				var xAxis = d3.svg.axis()
						.scale(xScale)
						.orient("bottom"),
					minVal = d3.min(segments, function (d) {
						return d.end;
					}),
					maxVal = d3.max(segments, function (d) {
						return d.end;
					});
				var lastVal = segments[segments.length-1].end;
				if (minVal > 0) {
					minVal = 0;
				}
				else if (maxVal < 0) {
					maxVal = 0;
				}
				tickValues = [lastVal];
				if (lastVal !== 0 ) {
					addTick(0, tickValues);
				}
				if (maxVal !== 0) {
					addTick(maxVal, tickValues);
				}
				if (minVal !== 0) {
					addTick(minVal, tickValues);
				}
				maxTickVal = d3.max(tickValues);
				xAxis.tickValues(tickValues)
					.tickFormat(function (d) {
						var formatted;
						switch(d) {
							case maxTickVal :
								formatted =  labelFormat(d) + " " + unit;
								break;
							case 0 :
								formatted = "0";
								break;
							default :
								formatted = labelFormat(d);
						}
						return formatted;
					});
				svg.select(".chart-group")
					.append("g")
					.attr("class", "x axis")
					.attr("transform", "translate(0," + chartHeight + ")")
					.call(xAxis);
			}
		}
		// checks to see if the tick values are too close together - very smart!
		function addTick( val, tickValues) {
			if ( tickValues.every( function (tv) {
				return (Math.abs(xScale(tv) - xScale(val)) > 50 );
			}) ) {
				tickValues.push(val);
			}
		}
		function drawYAxis() {
			var padding = -15;
			svg.select(".y.axis").remove();
			if ( chartHeight > 0 ) {
				var yAxis = d3.svg.axis()
						.scale(yScale)
						.orient("left")
						.tickSize(1);
				svg.select(".chart-group")
					.append("g")
					.attr("class", "y axis")
					.attr("transform", "translate(" + padding + ",0)")
					.call(yAxis)
					.selectAll(".tick text")
					.call(wrap, yAxisWidth - 10);
			}
		}
		function defineEndMarker() {
			// Define marker as red triangle
			svg.append("defs").append("marker")
				.attr("id", "arrowhead")
				.attr("viewBox", "0 0 10 10")
				.attr("refX", 10)
				.attr("refY", 5)
				.attr("markerWidth", 6)
				.attr("markerHeight", 6)
				.attr("orient", "auto")
				.append("path")
				.attr("d", "M 0 0 L 10 5 L 0 10 z")
				.style("fill", d3.rgb(colour_plus).darker(2));
		}
		function drawStartingLine() {
			svg.select(".top.axis").remove();
			svg.select(".starting-line").remove();
			if (chartHeight > 0) {
				var xAxis = d3.svg.axis()
					.scale(xScale)
					.orient("top")
					.tickValues([0])
					.tickFormat(d3.format("d")),
					x0 = xScale(0),
					chartGroup = svg.select(".chart-group");
				chartGroup.append("g")
					.attr("class", "top axis")
					.call(xAxis);
				chartGroup.append("line")
					.attr("class", "starting-line")
					.attr("x1", x0)
					.attr("y1", 0)
					.attr("x2", x0)
					.attr("y2", chartHeight);
			}
		}
		function drawWaterfall() {
			var chartGroup, barGroup,
				lineColor = d3.rgb(colour_plus).darker(2);
			chartGroup = svg.select(".chart-group");
			if (segments && segments.length > 0) {
				// Draw bars
				barGroup = chartGroup.selectAll(".bar.g")
					.data(segments);
				barGroup.enter().append("g")
					.attr("class", "bar g");
				barGroup.exit().remove();
				barGroup.append("rect")
					.attr("class", "bar rect")
					.attr("height", segmentHeight)
					.attr("x", function (d) {
						return d.x;
					})
					.attr("y", function (d) {
						return d.y;
					})
					.attr("width", function (d) {
						return d.width > 0 ? d.width : 0.1;
					})
					.style("fill", function(d){return d.value>0 ? colour_plus : colour_minus})//color)
					.style("stroke", function(d){return d.value>0 ? d3.rgb(colour_plus).darker(2) : d3.rgb(colour_minus).darker(2)});//lineColor);
				// Label bars
				barGroup.append("text")
					.attr("class", "bar text")
					.attr("x", function (d) {
						return d.labelX;
					})
					.style("text-anchor", function (d) {
						return d.labelAnchor;
					})
					.attr("y", function (d) {
						return d.y + (segmentHeight / 2);
					})
					.attr("dy", ".5em")
					.text(function (d) {
						return labelFormat(d.value);
					});
				// Connect bars
				barGroup.append("line")
					.attr("class", "bar line")
					.attr("x1", function (d) {
						return d.endX;
					})
					.attr("y1", function (d) {
						return d.y + segmentHeight;
					})
					.attr("x2", function (d) {
						return d.endX;
					})
					.attr("y2", function (d) {
						return d.y + segmentHeight + segmentPadding;
					})
					.style("stroke", lineColor);
			}
		}
		function drawEndMarker() {
			var connectors = svg.selectAll(".bar.line");
			if (connectors.size() > 0) {
				var lastIndex = connectors.size() - 1;
				//console.log(connectors);
				connectors.filter(function(d, i) { return i === lastIndex; })
							.attr("marker-end", "url(#arrowhead)");
			}
		}

	createSvg("#"+id_figure);
	drawXAxis();
	drawYAxis();
	drawStartingLine();
	drawWaterfall();
	defineEndMarker();
	drawEndMarker();	
}