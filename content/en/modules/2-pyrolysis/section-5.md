---
name: "Knowledge level 0"
styling:
    sectionClass: "section-sm section-light"
    containerClass: " "
    rowClass: ""
# in one row, nb of boostrap columns can be defined directly below in HTML

---

<div class="col-md-12 text-left">

## **Cradle-to-gate climate impact of several biochar supply-chains**
<br />

</div>

<div class="col-md-6 text-left">


In our [Uppsala case study]({{< ref "case-studies/4-uppsala.md" >}}), we presented cradle-to-gate emission factors for biochar products with different properties (carbon content, bulk densities), pyrolysis reactors (E: electricity-heated, S: syngas-heated, M: mobile-syngas heated), and different biomass (WP: wood pellet, GW: garden waste, LR: logging residues). 

The figures below present the climate change impact, from biochar production and the initial carbon sink (i.e. the amount of carbon contained in the biochar, without any assumption regarding its long-term stability). Some parameter values can be changed to see how results are affected.

{{% notice warning %}}
The values presented are not to be used as LCA data for product footprinting without further analysis & verification of our underlying modelling assumptions, which are numerous. 
{{% /notice %}}

</div>
<div class="col-md-6 text-left">

Meaning of contributions (colors):
- Biochar C-sink: initial amount of C sequestred (100% stability assumed here)
- Reactor: manufacturing and disposal of reactor
- RLBU: reference land or biomass use (what would have happened to the biomass, if not used for biochar)
- Transport: all transport from biomass supply to biochar handling
- Pyrolysis: energy inputs for pyrolysis & direct air emissions
- Biomass production: energy, machinery, fertilser use
- Energy substitution: displacement of heat from alternative source, by combustion of pyrolysis co-products


</div>

<div class="col-md-12 text-left">

{{< bw2widget widgetName="BSCtonne"  widgetJS="bw2widgets/widget_biochar-supply-chain" widgetTitle="For 1 tonne of biochar:" plotType="stackedbar" ylabel="tonne CO₂-eq per tonne biochar" >}} 

Results in mass units can be converted to volume units by multiplying by the bulk density of biochar. This is done below: 

{{< bw2widget widgetName="BSCvol"  widgetJS="bw2widgets/widget_biochar-supply-chain-volume" widgetTitle="For 1 cubic meter of biochar:" plotType="stackedbar" ylabel="tonne CO₂-eq per m³ biochar">}} 

</div>

