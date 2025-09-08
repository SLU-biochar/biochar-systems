---
name: "Knowledge level 0"
styling:
    sectionClass: "section-sm section-light"
    containerClass: " "
    rowClass: ""
# in one row, nb of boostrap columns can be defined directly below in HTML

---
<div class="col-md-12 text-left">

## **Systems analysis insights**

This section describes two concepts commonly encountered when studying biochar systems in various case studies.

</div>

<div class="col-md-6 text-left">

### **Biochar production constrained by energy demand**

Whenever biochar production is integrated to an energy system, the amount of biochar produced is constrained by the energy demand. In other words, the energy demand sets the potential for biochar production. This can have several implications on the biochar production levels, annual dynamics and future trends.

- Annual biochar production levels can be lower than the theoretical production capacity of the installed reactor.
- Biochar production dynamics follow the energy demand, with daily or seasonal variations.
- Future biochar production potential is affected by changes in future energy demand, e.g. lower heating demand in a warming climate.
  
An important distinction should be made between small & large energy systems. A small energy system here describes a system where the main energy source is the pyrolysis (e.g. a farm) as opposed to large systems where dozens of plants are connected to supply the load (e.g. Stockholm district heating network): 
- Large energy system: introducing pyrolysis can be seen by energy utilities as a way to increase flexibility in the day-to-day operation of units, producing certain commodities at various rates following demand and prices. Also, in large system, pyrolysis plants can operate as base load plants with high operating times (e.g. 80% annual uptime).
- Small energy system: there is less flexibility, as the pyrolysis may be the main source of energy, and its maximum production capacity is thereby often larger than the average annual load [unclear]

**Case: a pioneer biochar project at Lindeborg's farm**

At the Lindeborg farm, back in 2017, a pyrolysis plant was installed for heating of premises and co-producing biochar. As back-up heating, the farm can rely on electrical heaters and a smaller air-to-water heat pump.

The farm heating demand varies daily with the weather. Over the service life of the pyrolysis unit (ca 25 years), heat demand will also be affected by changing climate patterns & possible developments at the farm (new buildings, greenhouses, grain drying).

Here, we estimated an average annual biochar production of 7 tonnes in current climate & heat demand conditions, while the pyrolysis plant had a maximum capacity of 25 tonnes per year (if operated continuously). This is typical for the dimensioning of small-scale heating systems where the heat load (in kW) shows high seasonal variations.

Alongside with our [Lindeborgs case]({{< ref "case-studies/2-lindeborgs.md" >}}), we provided code to dimension a pyrolysis plant for farm heating in a given climate, so as to maximise pyrolysis uptime and biochar production. The [code is available here](https://github.com/ntropy-esa/P2_farm_biochar/blob/03a4692f352ae175c615b5b4e7c3db7e19967829/ex1_Lindeborg/3_bonus_dimensioning%20analysis.ipynb).

{{< figure src="lindeborg-sizing-optimisation.jpg" title="*Fig. Optimal sizing of pyrolysis plant in Nyköping's climate*" width="100%">}}

</div>

<div class="col-md-5 text-left">

### **A relative energy penalty**

Pyrolysis is sometimes defined as a partial combustion of the biomass. In other words, during pyrolysis a large part of the chemical energy contained in the biomass remains in the biochar. But during combustion, all the biomass energy is released. Therefore, pyrolysis systems generate less energy than combustion. This is the concept of energy penalty relative to conventional bioenergy technologies.


**Case: garden waste in urban context**

In several cities in Sweden, including Stockholm and Helsingborg, a fraction of the urban garden waste and industrial wood waste is valorised via incineration with energy recovery. Landfilling is forbidden by law 2001:1063.

In that context, diverting woody waste biomass from combustion plants to pyrolysis plants to produce biochar reduces the overall energy produced. If energy demand remains constant, additional fuel will be used. This additional fuel could well be non-waste biomass, i.e. primary biomass sourced from forests, and the overall biomass consumption would increase. 

However, as noted in the [Stockholm case]({{< ref "case-studies/1-stockholm.md" >}}), a newer plant may be more energy efficient than older units, partly mitigating the increase in biomass use.

The point is that, at the *system* level, there is little difference between: a) diverting woody waste from combustion to pyrolysis, and b) sourcing primary biomass for pyrolysis, in the context of woody waste already valorised via combustion.

{{% notice note %}}
Read more about biochar energy penalty & trade-off optimisation in the work of [Woolf and colleagues (2014)](https://pubs.acs.org/doi/10.1021/es500474q) or in our [Stockholm case]({{< ref "case-studies/1-stockholm.md" >}}). 

{{% /notice %}}


</div>
