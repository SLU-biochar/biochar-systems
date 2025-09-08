
 ---
title: "Biochar stability - old page"
description: ""
subtitle : "Biochar is well known as an option to mitigate climate change. Here, we want to give the big picture & revisit some of the basic science behind it."
bg_image: "img/lin-field.JPG"
layout: "faq"
lastmod: 2022-01-19T00:00:00
draft: true

---


 - why it is a carbon removal?
  - make it clear there are different stabilities because there are different biochars & applications
  - mostly studied in soils, what about other uses?
  - why is it a challenge: - measuring a very small flux over short period is technically difficult; - extrapolating a curve on 1-5 years to 500 years is scientifically not very valid


#### What can we say with certainty today?

##### The initial amount of carbon sequestred

Freshly produced biochar has a carbon content. ...
Lab determination of the carbon content. 

## The remaining amount over time.

Biochar in the environment... exposed to ...

## Existing methodologies (in text)

### Published by institutions
- IBI H:C method
- EBC C-sink method
- IPCC Temperature method
- Spokas O:C method

- Dynamic decay models: e.g. Wang + others in literature, what exists
#### Limitations of existing methods
Different data, different calibration, different methodologies, different outcomes - no work made open-source - little transparency

### Applied in C credit systems
- [Carbonfuture](https://www.carbonfuture.earth/) version x.x.x
- [puro.earth](https://puro.earth/) version x.x.x
- [Verra.org](https://verra.org/methodology-for-biochar-utilization-in-soil-and-non-soil-applications-open-for-public-comment/)


## Compare the methodologies with your own biochar data:
What you will need: biochar C content, H, C contents, pyrolysis temperature, biomass type

{{< stabilitytable >}}

{{< button href="../biochar-stability-calculator.xlsx" icon="download" >}} Download as Excel {{< /button >}}
{{< button href="../biochar-stability-calculator.py" icon="download" >}} Download as Python script {{< /button >}}


## Comparative review of biochar C trading platforms

{{% expandcss idLabel="puro" title=" **Puro.Earth** " %}}
  Inner content that will be **markdownified** and blablabla
{{% /expandcss %}}

{{% expandcss idLabel="carbonfuture" title="**Carbon Futures**" %}}
  Inner content that will be **markdownified** and blablabla
{{% /expandcss %}}

{{% expandcss idLabel="vera" title="**Vera**" %}}
  Inner content that will be **markdownified** and blablabla.
 
{{% /expandcss %}}

## Demo Tooltip with custom text or bibliography

The text is enriched with tooltips. For instance, if you don't know what a {{< tooltip_glossary text="LCA" term_id="LCA" >}} is, you should hover the word.

## Comparision of voluntary biochar C sink credit systems

This comparison is limited to how the biochar carbon sink term is defined and estimated by different methodologies. In other words, what assumptions are made on biochar carbon stability during its use phase, whether in soil or non-soil applications. The certification further differ in their purpose, scope of emissions included, etc 

{{< tabs name="tab_with_md" >}}
  {{% tab name="Puro.Earth" %}}
The document reviewed is:
- Title: Puro.Earth CO_2 Removal Marketplace - General Rules
- Version: 2.0
- Released: 2020-06
- Available at: [puro.earth](https://puro.earth/methodologies/)

They state "The Long-Term CO2 Removal is achieved by the stability of carbonisated biochar, which is measured with the Oxygen-to-Carbon ratio".

They have a list of requirements:
- H:C_org below 0.7 (otherwise not considered biochar)
- O:C_org below 0.4 (as O:C_org is an indicator of stability, correlates better than production temperature)
- The "stable fixed carbon content" shall be over 50% (what do they mean by stable fixed carbon content?)
- refers to EBC for sampling method
- Buffer for C sink based on Spokas...

Slightly different from the others...

  {{% /tab %}}

  {{% tab name="Carbon Futures" %}}
The document reviewed is:
- Title: Supplier Onboarding Manual - Guidelines for biochar producer and wholesaler
- Version: 0
- Released: 2021-02-28
- Available at: [carbonfuture.earth](https://www.carbonfuture.earth/resources)

Basically, they refer to EBI Whitepaper 2020 and the EBC C-sink.

  {{% /tab %}}

  {{% tab name="Verra" %}}
The document reviewed is:
- Title: Methodology for biochar utilization in soil and non soil applications
- Version: 1.0
- Released: 2021-08-04
- Available at: [Vera.org](https://verra.org/methodology/methodology-for-biochar-utilization-in-soil-and-non-soil-applications/)

In short, the methodology claims to quantify the GHG benefits from improved Waste Handling and Disposal to make biochar, with a baseline that biomass feedstocks would either be left to decay or be combusted. The accounting framework considers CH4, N2O, CO2, across sourcing (actually not, in later stage), production and application stages, for both baseline and project emissions.

Has a set of text definitions (Chapter 3). Applicability conditions (Chapter 4) (e.g. cannot apply if project leads to a decrease in C stocks either a biomass sourcing stage). Has some additionality criterias (Chapter 7). Chapter 8 covers how to calculate each term form the project & baseline. 

But I am interested only here in the biochar C sink value: how is it defined, and quantified?
- if "high-tech" reactor, they use the IBI method (H:C ratio, and its decay rates), like the EBC C-sink 
- if "low-tech" reactor, they use the default IPCC values for non-measured temperature




  and more text 

  The text could be imported from a separate md file.

  {{% /tab %}}
{{< /tabs >}}
