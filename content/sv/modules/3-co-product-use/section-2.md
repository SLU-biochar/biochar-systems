---
name: "Knowledge level 0"
styling:
    sectionClass: "section-sm section-dark"
    containerClass: " "
    rowClass: ""
# in one row, nb of boostrap columns can be defined directly below in HTML

---


<div class="col-md-10 text-left">

## **Modelling pyrolysis co-product properties and usage**
</div>
<div class="col-md-2">
</div>

<div class="col-md-4 text-left">
<br />
Predicting the exact composition and the qualities of pyrolysis oil and gases is not straightforward, and often requires actual experimentation or advanced chemistry models (e.g. Aspen).


However, simpler <mark>mass and energy balances</mark> have been developped for special cases. Here, we present two of these:

- Model 1: heat production only

- Model 2: pyrolysis gas and oil composition

</div>

<div class="col-md-8 text-left">
{{< tabs name="MEB_pyrolysis">}}
  {{% tab name="Model 1"%}}
  This model applies to the simple, yet most common, case where pyrolysis oil & gas are directly combusted after pyrolysis to generate heat. It was developped and used in the case studies of this research project.

  **Description**:
  
  The model applies to slow pyrolysis of biomass, with direct combustion of pyrolysis gas and oil. It is based on mass and energy balances. It can either represent a pyrolysis reactor sustained by electrical heating or by heat from the flue gases. Biomass drying and excess use as district heat is considered. An electrical efficiency can be assumed as well.
  
  Disclaimer: the model has many input parameters, some of which are not independent (e.g. biochar yield and biochar energy content are correlated). Thus, the user must make consistent choices of parameter data for realistic results. 

  **Model inputs**:
  - Biomass properties: lower heating value, as received moisture content
  - Drying step: target biomass moisture content, specific heat for dryer, electricity consumption of drying fans, assumed fraction of drying heat recovered as district heat
  - Pyrolysis step: biochar yield, lower heating value of biochar, electricity input for pyrolysis heating (if electricity heated reactor), boiler heat efficiency, power-to-heat ratio (if a turbine is installed)
  

  **Model outputs**: 
  - Biochar output
  - District heat output
  - District heat recovered from drying
  - Electricity output
  - Drying requirement
  
  {{< button href="3-coproduct-use-model-heat-production.xlsx" icon="download" >}} Download as Excel {{< /button >}}
  {{< button href="3-coproduct-use-model-heat-production.py" icon="download" >}} Download as Python script {{< /button >}}


  {{% /tab %}}


  {{% tab name="Model 2"%}}
  This second model is derived from the research article by [Woolf and colleagues (2014)](https://pubs.acs.org/doi/10.1021/es500474q) and further re-used by [Tisserant and colleagues (2021)](https://doi.org/10.1016/j.resconrec.2021.106030). The model allows to calculate the biochar, bio-oil and gas composition from a slow pyrolysis process, based on statistic regression from various experiments. 

  In the original article from Woolf (2014), the authors then refine the pyrolysis products via several conversion pathways (e.g. Gas pathways: water-gas shift reaction to produce hydrogen; catalytic methanation of pyrolysis gas. Liquid fuel pathways: catalytic methanol synthesis, Ljungdahl-Wood pathway, Fischer-Tropsch synthesis.). 
  
  Here, only the pyrolysis part is descrbied. 
  
  <!-- The authors described it as "an  accurate-yet-simple empirical model for predicting yields, product compositions, and energy balances from biomass slow pyrolysis" helping to "quantify the trade-offs between energy and biochar yields in bioenergy–biochar systems". -->

**Description**:

- Model limited to pyrolysis, in particular slow-pyrolysis. It excludes gasification.
- Based on statistic regressions from literature data
- Calculates yields and composition of biochar, pyrolysis gas and oil


**Model inputs**:
- Pyrolysis temperature (e.g. 500°C)
- Biomass lignin, ash, C, H, and O contents

  <!-- 
  for Aspen part, for biomass, biochar and tar (oil+water)
  - Proximate analysis (i.e., composition in moisture content, fixed matter, volatile matter and ash content)
  - Ultimate analysis (i.e., content in C, H, O, N, S, Cl)
  - Sulfate analysis (i.e., content in different forms of sulfur pyritic, sulfate and organic)  

  - Biochar yield is determined as function of pyrolysis temperature and feedstock lignin content [cf. Woolf equation]
  - And the yield of CH4, CO, H2 and C2H2 are estimated from regressions based on pyrolysis temperature [cf. Woolf]
  - Then, via elemental mass balance: Tar, CO2 and water yields are determined
  - Then N can volatilize as HCN and NH3 during pyrolysis, S as H2S and Cl as HCl, CH3Cl or KCl >> regression analysis

  - Ultimate analysis of biochar and tar, C, H, and O compositions are estimated from pyrolysis temperature and C, H, O content of the feedstock, using regressions from (Woolf et al., 2014). N content of biochar is assumed to be 0.1% (Morales et al., 2015). S and Cl content in biochar are determined from regressions in Figures S1-S3 in the SI. Tar is used to balance N, S and Cl elements.
    -->

**Model outputs**: 

- Mass yields of biochar, tar (oil and water) and syngas (as CO, H<sub>2</sub>, CH<sub>4</sub>, C<sub>2</sub>H<sub>x</sub>, and CO<sub>2</sub>) 
- Composition of biohcar (C, H, O)
- Composition of tar (C, H, O)

{{< button href="3-coproduct-use-model-yields-composition.xlsx" icon="download" >}} Download as Excel {{< /button >}}


  {{% /tab %}}

  
{{< /tabs >}}

</div>
