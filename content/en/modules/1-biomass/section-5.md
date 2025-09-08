---
name: "Knowledge level 0"
styling:
    sectionClass: "section-sm section-light"
    containerClass: " "
    rowClass: ""
# in one row, nb of boostrap columns can be defined directly below in HTML

---

<div class="col-md-8 text-left">

## **LCA of biomass production and supply**

Environmental impacts arise from consumption of products and services, the use of natural resources, and their effects on the environment. Assessing the environmental impacts of biomass production is a dedicated field of research because of its many specifities (e.g. biogenic carbon flows and stocks, direct and indirect land use effects, timing of emissions, crop rotations, stand and lanscape perspectives). 

The cradle-to-gate LCA of biomass production and supply should include (but not limited to) the following items:

</div>

<div class="col-md-4 text-left">
</div>


<div class="col-md-5 text-left">

#### 1. Supply-chain activities

**For crop cultivation or forestry operations** (e.g. willow cultivation on cropland):

- Machinery and fuel use for e.g. land preparation, harvesting, irriguation
- Manufacturing and disposal of machinery and infrastructure
- Production of fertilisers, other agrochemicals and consumables
- Emissions arising from fertilisers use
- Transportation of the biomass, including fuel emissions and road infrastructure emissions 
  
**For waste or secondary biomass** (e.g. municipal garden waste):

In this case, it is common to apply a "cut-off" approach. This implies that the no environmental burdens are attributed to the waste biomass for its creation. All upstream burdens are attributed to the main product. However, any operations taking place downstream of the waste creation are considered.

This typically includes:
- Collection of the waste biomass
- Storage & handling at the waste collection site
- Emissions arising during storage

**Remark: The case of multi-product biomass production:** 

When an activity produces several biomass products, the LCA practionner is facing an issue of attributing the production burdens between the products. Two main approaches can be followed, both being a subjective choice:

- If one product is considered as the main product, and the others have little value: all production burdens are attributed to the main product. The co-products are considered burden free (so called cut-off approach for by-products).
  
- If all products are deemed having some value, an allocation of the burdens based on some physical property can be performed.

Both approaches are valid and have been applied to the same feedstocks in different studies. 

For instance, in a study by Hammar & al (2015) logging residues are considered a side-product from conventional forestry operation for timber production. Only impacts from harvesting, chipping and transportation are considered (alongside direct land use change). However, in the ecoinvent life cycle database, forestry operations are considered as a multi-functional activity delivering multiple products: timber, bundle energy wood, and woodchips. An allocation of burdens from forestry operation is applied between the three products (dry mass allocation?).

**Remark: Biomass production involving use of another biomass**

What if to produce wood, we use biofuels made from wood via a fischer-trop process? That's what we call a loop in LCA. It can be solved but makes calculations sometimes more complicated than if we assume that fossil fuels are used in the supply-chain. 

{{% notice tip%}}
Read more about biomass supply chains in the work of[ Wolf et al. (2016)](https://doi.org/10.1111/jiec.12321).
{{% /notice %}} 

</div>

<div class="col-md-5 text-left col-md-push-1">

#### 2. Reference land or biomass uses

As explained above, there is no unique or objective choice of reference fate. 

A reference *land* use is most often used for dedicated crop cultivation or forestry operations. A reference *biomass* use is considered for waste or secondary biomass. 

The choice of a reference land use allows to quantify direct land use changes, which often contribute largely to the climate change impact of biomass production. Direct land use changes represent emissions arising at the site of cultivation of the biomass related to a change in land cover or land management. This can represent the emissions of carbon dioxide and other greenhouse gases from reforestation but also the loss of carbon in aboveground and belowground stocks when increasing the intensity of residues harvesting.

Examples of reference *land* uses:
- land set-aside or in fallow 
- land cultivated for another crop
- land reforested 

Examples of reference *biomass* uses:
- forest residues left in the forest
- forest residues combusted for heat production
- garden waste sent to landfill 
- garden waste valorised for heat and power in an incinierator
- garden waste chipped and used as mulch

{{% notice tip%}}
Read more about reference land and biomass use in the work of [Bernes et al. (2012)](https://doi.org/10.1002/wene.41) & [Koponen et al. (2017)](https://doi.org/10.1016/j.rser.2017.05.292).
{{% /notice %}} 

</div>



