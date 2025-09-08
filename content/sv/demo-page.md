---
title: "Demo page"
description: "Where to exemplify the use of plugins, shortcodes, etc, for memory. Page set as draft: does not render for live website."
bg_image: "images/feature-bg.jpg"
draft: true

menu:
  main:
    parent: "Mer"
    name: "Demo"
    weight: 10


# Page-specific JavaScript & CSS #ESA
js : ["bw2widgets/d3.v7.min", "bw2widgets/d3-scale-chromatic.v1.min", "bw2widgets/d3-sankey-diagram.min", "bw2widgets/widget_plot_types", "js/mermaid.min"]
css : ["bw2widgets/widget"]
mathjax : true

---	
<!-- Add style to links or they won't appear properly-->
<style>
.link {
  fill: none;
  stroke: #000;
  stroke-opacity: .0;
}
.link:hover {
  stroke-opacity: .5;
}
</style>

## Expandcss shortcode

## Comparative review of biochar C trading platforms

{{% expandcss idLabel="puro" title=" **Puro.Earth** " %}}
  Inner content that will be **markdownified** and blablabla
{{% /expandcss %}}

{{% expandcss idLabel="carbonfuture" title="**Carbon Futures**" %}}
  Inner content that will be **markdownified** and blablabla
{{% /expandcss %}}


## Tabs

{{< tabs name="MEB_pyrolysis">}}
  {{% tab name="Model 1"%}}
  This model applies to the simple, yet most common, case where pyrolysis oil & gas are directly combusted after pyrolysis to generate heat. It was developped and used in the case studies of this paper.

  {{% /tab %}}

{{< /tabs >}}

## Notice shortcode
{{% notice note %}}
A notice disclaimer, as a note
{{% /notice %}}

{{% notice warning %}}
A notice disclaimer, as a warning
{{% /notice %}}

Can take the values: warning, note, info, tip

## Insert scientific equations in Latex

  $$ Y_{BC} = 0.1261 + 0.5391 e^{-0.004T} + 0.002733L $$

  $ F_C = (1 - \frac{F_{a,bm}}{F_{a,bm} + Y_{BC}} ) * (0.93 - 0.92 e^{-0.0042T}) $


## Insert a sankey 

  **Sankey diagram**
  {{< bw2widget widgetName="X5" widgetJS="bw2widgets/widget_sankey-model1-energy" widgetTitle="Scaled to 1 tonne of biochar" plotType="sankey" >}} 

Export as svg/png button. 
Random markdown text after the widget

## Insert a bw2widget via in its own section
Random markdown text before the widget
{{< bw2widget widgetName="X2" widgetJS="bw2widgets/widget_demo_2" widgetTitle="Biochar production from willow" plotType="stackedbar">}} 
Random markdown text after the widget

## Insert a second bw2widget via in its own section
Random markdown text before the widget
<!-- Shortcode for bw2widget inclusion: widgetName should not have any underscore '_'. plotType available: 'waterfall', 'stackedbar' -->
{{< bw2widget widgetName="X3" widgetJS="bw2widgets/widget_demo_22" widgetTitle="Biochar production from Other" plotType="waterfall">}} 

Random markdown text after the widget

## Another shortcode: youtube video
{{< youtube id="PfIGIUWJnkw" title="2nd Green Carbon webinar" autoplay="false" class="col-lg" >}}

## Another shortcode: reference to another page
This is a link to the [Overview]({{< ref "modules/_index.md" >}})


## Another shortcode: highlight python code
{{< highlight python "linenos=table" >}}
import brightway2 as bw2
bw2.projects.set_current("MyProject")
## Check https://gohugo.io/content-management/syntax-highlighting/ for other styling
{{< /highlight >}}

## A figure: image with caption
{{< figure src="../esmeralda.jpg" title="Fig. Esmeralda" width="20%">}}

## Tooltip with glossary
https://kubernetes.io/docs/contribute/style/hugo-shortcodes/#glossary
https://github.com/kubernetes/website/tree/main/layouts/shortcodes

Par exemple, le snippet suivant est rendu à {{< tooltip_glossary text="LCA" term_id="LCA" tooltip_text="some text" >}} avec une infobulle. But this {{< tooltip_glossary text="tooltip" term_id="" tooltip_text="It is just a local explanation." >}} is now just an explanation without entry in the glossary

## Flowcharts
<script>mermaid.initialize({ startOnLoad: true, securityLevel: 'loose'});</script>
{{< mermaid align="left" >}}
graph LR;
    A(Biomass production) -->|biomass| B(Pyrolysis)
    B -->|oil and tars| C(Co-product use)
    B -->|biochar| D(Biochar product manufacturing)
    E(Supply of other materials) -->|other materials| D
    D -->|biochar product| F(Biochar product use)
    F -->|biochar product waste| G(Biochar product end-of-life)
{{< /mermaid >}}
https://mermaid-js.github.io/mermaid/#/
https://mermaid-js.github.io/mermaid/#/flowchart?id=styling-and-classes
https://github.com/kubernetes/website/blob/main/layouts/shortcodes/mermaid.html


    C -->|One| D[ {{< ref "modules/_index.md" >}} ]
    C -->|Two| E[<a href=""> Result two </a> ]

https://it.knightnet.org.uk/kb/hugo/embed-diagram/

## Chart dev 


<!-- Create a div where the graph will take place -->
<div id="my_dataviz"></div>
<div id="my_dataviz_legend"></div>

<script>

// set the dimensions and margins of the graph & the lend
var margin = {top: 10, right: 30, bottom: 20, left: 50},
    legend_width = 50,
    width = 500 - margin.left - margin.right - legend_width,
    height = 400 - margin.top - margin.bottom;
    legend_height = height;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right + legend_width)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Parse the Data
// behavior change in v4 compared to v5,6,7 >> returns all rows at once in v4; while just first row in v7
d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_stackedXL.csv").then(function(data) {

  // List of subgroups = header of the csv files = soil condition here
  var subgroups = data.columns.slice(1);

  // List of groups = species here = value of the first column called group -> I show them on the X axis
  var groups = data.map(d => d.group)

  // Add X axis
  var x = d3.scaleBand()
      .domain(groups)
      .range([0, width])
      .padding([0.2])
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).tickSizeOuter(0));

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 120])
    .range([ height, 0 ]);
  svg.append("g")
    .call(d3.axisLeft(y));

  // color palette = one color per subgroup
  var color = d3.scaleOrdinal()
    .domain(subgroups)
    .range(d3.schemeSet2);

  //stack the data? --> stack per subgroup
  var stackedData = d3.stack()
    .keys(subgroups)
    (data)

  console.log('StackedData', stackedData);

  // Show the bars
svg.append("g")
    .selectAll("g")
    // Enter in the stack data = loop key per key = group per group
    .data(stackedData)
    .join("g")
      .attr("fill", d => color(d.key))
      .attr("class", d => "myRect " + d.key ) // Add a class to each subgroup: their name
      .selectAll("rect")
      // enter a second time = loop subgroup per subgroup to add all rectangles
      .data(d => d)
      .join("rect")
        .attr("x", d => x(d.data.group))
        .attr("y", d => y(d[1]))
        .attr("height", d => y(d[0]) - y(d[1]))
        .attr("width",x.bandwidth())
        .attr("stroke", "grey")
        .on("mouseover", function (event,d) { // What happens when user hover a bar

          // what subgroup are we hovering?
          const subGroupName = d3.select(this.parentNode).datum().key 
          
          // Reduce opacity of all rect to 0.2
           d3.selectAll(".myRect").style("opacity", 0.2)  
          
          // Highlight all rects of this subgroup with opacity 1. It is possible to select them since they have a specific class = their name.
           d3.selectAll("."+subGroupName).style("opacity",1) 
        })
        .on("mouseleave", function (event,d) { // When user do not hover anymore
          
          // Back to normal opacity: 1
          d3.selectAll(".myRect")
          .style("opacity",1) 
      })

// adding legend in its own div
// https://observablehq.com/@d3/color-legend (fancy stuff, need extra code)

/* Append in new svg in same div
var legendHolder = d3.select("#my_dataviz")
  .append("svg")

*/
var offset_legend = width-margin.left-margin.right;
var legendHolder = svg.append('g')
    .attr("width", legend_width)
    .attr("height", legend_height + margin.top + margin.bottom)
  // translate the holder to the right side of the graph
    .attr('transform', "translate("+ offset_legend + ", 0)")
// Add one dot in the legend for each name.

var reversedSubgroups = subgroups.reverse();

var legend = legendHolder.selectAll("mydots")
  .data(reversedSubgroups) // name of categories, in reverse order for stacked legend
  .enter()
  .append("circle")
    .attr("cx", 100)
    .attr("cy", function(d,i){ return 100 + i*25}) // 100 is where the first dot appears. 25 is the distance between dots
    .attr("r", 7)
    .style("fill", function(d){ return color(d)})


// Add one dot in the legend for each name.
  legend = legendHolder.selectAll("mylabels")
      .data(reversedSubgroups)
      .enter()
      .append("text")
        .attr("x", 120)
        .attr("y", function(d,i){ return 100 + i*25}) // 100 is where the first dot appears. 25 is the distance between dots
        .style("fill", function(d){ return color(d)})
        .text(function(d){ return d})
        .attr("text-anchor", "left")
        .style("alignment-baseline", "middle")


}) // end of data csv callback

</script>