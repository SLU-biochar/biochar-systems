---
title: "Biochar systems analysis"
description: "
Here, we present a generic flowchart to describe biochar systems and we link to 8 modules that explain each part of a biochar system.
" # How to analyse biochar production and use in a systematic manner
draft: false
bg_image: "img/lin-field.JPG"
menu:
  main:
    parent: "Systems analysis"
    name: "Overview"
    weight: 1
  footer:
    name: "Systems analysis"
    weight: 2

flowchart:
  enable: false
  image : "img/flowchart.svg"
  pretext : ""
  posttext: ""

portfolio:
  enable: false
  meta_text: true
---
<section class="">
    <div class="container">
        <div class="row center-block">
            {{< svg src="img/flowchart_en.svg" gridclass="col-md-9 col-md-push-1" >}}
        </div>
    </div>
</section>

<div class="row">
  <div class="col-md-9 col-md-push-1">

{{% notice tip %}}
The flowchart is <mark>interactive</mark>! Click on a box to access a dedicated page with definitions, explanations, useful resources, data and references. The goal of this knowledge compilation is not to be a complete textbook on biochar, but specifically to provide key information for assessing biochar systems for environmental purposes or decision-making based on environmental considerations.
<br /><br />
On each page, the information is presented by increasing <mark>level of complexity</mark>: at the top, you will find definitions and overview information. As you scroll down, specialised concepts are explained and other useful resources are provided.
{{% /notice %}}

  </div>
</div>

<div class="row">
  <div class="col-md-9 col-md-push-1">

  ## **Flowchart description** 
The flowchart above describes a biochar system, starting with the <mark>production of biomass</mark> and finishing with the <mark>end-of-life of the biochar product</mark>. Outside of the boundaries, a <mark>reference system</mark> is depicted. 

#### **Biomass production**
It involves the cultivation of land, the application of fertilisers, the use of agricultural or forestry machinery. It can also refer to the collection & preparation of a waste biomass stream.

#### **Biomass pyrolysis**
Once the biomass is produced, harvested and delivered, the next step is the thermochemical conversion step. It may include some pre-treatment, like drying or chipping. The main treatment is the pyrolysis reaction. From there, multiple streams are generated: biochar, pyrolysis gas & pyrolysis oil.

#### **Use of tars and gases**
The pyrolysis gases and oils are usually burnt to produce energy services, like heating or electricity. In some cases, the pyrolysis oil can be condensed, upgraded, and stored for later use.

#### **Biochar product manufacturing** & **Supply of other materials**
Biochar is then combined with other materials to make different biochar products. This may include some post-processing of the biochar like seiving, crushing, or activation. Many biochar products exists: soil blends for urban areas, water filters, or engineered fertilisers for the agricultural sector.

#### **Biochar product use** & **end-of-life**
Like any other product, a biochar product has a use phase and an end-of-life (also known as waste management phase). 

#### **Multi-functionality**
Biochar systems are multi-functional: 
- The biochar product has a function, e.g. tree planted or water filtered
- Another function is provided by the pyrolysis oil and gas, e.g energy services
- Since we are dealing with biomass, we also have either a reference land use or a reference biomass use, e.g. if waste biomass is used, the biochar system has a waste treatment function.

For all these functions, one or several reference situations can be defined.

{{% notice note %}}
The flowchart above results from our experience in performing LCA of various biochar systems. It is further described in our research article about assessing the co-benefits of biochar (<a href="https://doi.org/10.1016/j.jenvman.2021.112154" target="_blank">Azzi et al. 2021</a>) and in the following <a href="https://urn.kb.se/resolve?urn=urn:nbn:se:kth:diva-303912" target="_blank">PhD thesis</a>. 
{{% /notice %}}

  </div>
</div>

<div class="row">
  <div class="col-md-9 col-md-push-1">

## **Using the flowchart**

The flowchart can be helpful for:
- Fostering understanding and knowledge sharing
- Describing a project idea, in a systematic perspective - retrospectively as well as prospective
- Identifying biochar effects and discussing them qualitatively
- Performing quantitative life cycle assessment (LCA) studies - both cradle-to-gate or cradle-to-grave

See some examples below:

<a name="gitnew"></a>

{{% expandcss idLabel="project-idea" title="**Describing the Stockholm Biochar Project in a systems perspective** " %}}

Brief history of the Stockholm Biochar Project (SBP): 

Biochar use in Stockholm was initiated in 2013 by the city's tree officer to remediate tree growth problems in compacted urban soils and improve storm water management. For this purpose, trees had already started to be replanted in constructed soils, an arrangement of crushed rocks of various sizes filled with conventional peat-clay-sand soil. Biochar was introduced in the constructed soils to replace peat, and to further increase soil water retention and tree health. Biochar was initially imported from other European countries, mainly Germany.

In 2014, the SBP led by an independent consultant received a grant from the Mayors' Challenge to buy and operate a pyrolysis unit. The pyrolysis unit would convert the woody fraction of garden waste to biochar and district heat. Before installing the pyrolysis unit, the garden waste was sent to an incineration plant for combined heat and power production. Today, this project is being replicated in other cities across the world.

  <div class="row center-block">
    {{< svg src="img/stockholm-biochar-project.svg" gridclass="col-md-12" >}} 
  </div>

**Functions**

The biochar project here has several functions:
- Treatment of garden waste;
- District heating production;
- Trees planted in constructed soil & related effects (like stormwater management in constructed soil)

**Reference situations**

For each function, a reference situation is defined:
- The alternative to pyrolysis of the garden waste was incineration for combined heat and power production. This is the historic alternative, i.e. what was being done before the pyrolysis plant was introduced. Other alternatives could be: landfilling of the garden waste or chipping for use as mulch.
- The alternative to district heat produced from pyrolysis oil and gas was set here to production of district heat in another facility using biomass. Here, a large range of alternative fuels could be selected. Woodchips were selected because they are the major fuel used in Stockholm for district heating.
- The alternative to tree planting in biochar-macadam was assumed to be tree planting in a macadam with conventional soil. 

With this picture set, one can start analysing environmental effects, benefits and trade-offs, from the Stockholm Biochar Project.

{{% /expandcss %}}


{{% expandcss idLabel="biochar-effects" title="**Biochar effects are relative: what does it mean?** " %}}
  
Biochar is often described as a carbon dioxide removal (CDR) technology with <mark>positive side effects</mark>. Here, we would like to stress that biochar side effects, or simply biochar effects, are always relative to a reference situation. This is made explicit in environmental systems analysis or life cycle assessment (LCA) by defining one or several reference situations.

<div class="row center-block">
  {{< svg src="img/biochar-effects.svg" gridclass="col-md-10" >}} 
</div>

Three types of environmental effects can be distinguished: 
- Change in technosphere inputs: biochar entails a change in consumption of another product in the studied system
- Change in biosphere exchange: biochar modifies the environmental emissions from an activity
- Change in technosphere ouputs: biochar leads to an increase in production of something 

More details are available in the article <a href="https://doi.org/10.1016/j.jenvman.2021.112154" target="_blank">*Assessing the diverse environmental effects of biochar systems: An evaluation framework*</a>.

{{% /expandcss %}}

{{% expandcss idLabel="lca-ctg" title="**Cradle-to-gate LCA of biochar** " %}}
 
Many stakeholders who use biochar in some product want to calculate the climate impact of their product. Like for other products they use, they would like to have an emission factor for biochar, i.e. an amount of kg CO<sub>2</sub>-eq per kilogram of biochar or per cubic meter of biochar.

However, such an emission factor for biochar may be difficult to find in LCA research studies for several reasons: 
- most of research studies assess a complete biochar production and use system
- biochar production is multi-functional and determining an impact for biochar requires to consider the pyrolysis co-products, the reference land or biomass use, and the carbon sink, if considered as a product in itself;
- there is not one unique value as it depends on the biomass used, the reactor used, and the energy context

Here, we would like to stress that to determine a biochar emission factor, there is a need to make subjective choices:
- delimiting the system boundaries (what is excluded from the modelling)
- deciding upon a reference land or biomass fate
- deciding how to handle co-products from pyrolysis, e.g. via allocation (which one?) or substition (which substituted product?)

In LCA theory, there is no unique & objective way of making these choices. Burden attribution and references are subjective. However, in practice, guidelines like the EU Product Environmental Footprints or EPDs PCR are set of rules where these subjectives choices have been made for specific categories of products.

More to read about this in our article about [urban uses of biochar in Uppsala]({{< ref "case-studies/4-uppsala.md" >}}).

{{% /expandcss %}}


  </div>
</div>




