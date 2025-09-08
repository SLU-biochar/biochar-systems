// var parameter_data & var switch_parameter_data contains the data describing the parameters of the MEFA model 
var parameter_data = {'name': {0: 'LHV_bio_dry',
                                 1: 'bio_moisture_in', 
                                 2: 'bio_moisture_out', 
                                 3: 'dryer_spec_heat', 
                                 4: 'dryer_heat_recovery', 
                                 5: 'comb_efficiency', 
                                 6: 'comb_power2heat', 
                                 7: 'LHV_bc_dry', 
                                 8: 'pyr_yield',
                                 9: 'pyr_enthalpy',
                                 10: 'pyr_reactor_losses'},
'amount': {0: 18.4,
         1: 0.5, 2: 0.1, 3: 2.58, 4: 0, 5: 0.80, 6: 0, 7: 30, 8: 0.25, 9: 2, 10: 0.02,},
'group': {0: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '', 10: '',},
'label': {0: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '', 10: '',},
'description': {0: 'Biomass LHV (dry)', 
                1: 'Moisture content of the biomass as received', 
                2: 'Target moisture content after drying',
                3: 'Specific heat for drying machine', 
                4: 'Fraction of drying heat recovered as district heat', 
                5: 'Combustion energy efficiency', 
                6: 'Power to heat ratio, in combustion', 
                7: 'Lower heating value of the biochar, dry', 
                8: 'Biochar yield, dry to dry mass', 
                9: 'Pyrolysis reaction enthalpy', 
                10 : 'Pyrolysis reactor losses'},
                
'uncertainty type': {0: 4, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1, 8: 1, 9: 1, 10: 1,},
'minimum': {0: 17, 1: 0, 2: 0.0, 3: 2.5, 4: 0, 5: 0.5, 6: 0.0, 7: 25.0, 8: 0.01, 9: 0.0, 10: 0.0, },
'maximum': {0: 21, 1: 1, 2: 1.0, 3: 3.5, 4: 1, 5: 1.0, 6: 0.4, 7: 35.0, 8: 0.35, 9: 5.0, 10: 0.1,},
'loc': {0: 0.816, 1: 18.4, 2: 0.5, 3: 0.1, 4: 2.85, 5: 0.05, 6: 0.0, 7: 29.6, 8: 0.25, 9: 0.0, 10: 0.85,},
'prettyName': {0: 'Biomass LHV (dry)', 
                1: 'Moisture content of the biomass as received', 
                2: 'Target moisture content after drying',
                3: 'Specific heat for drying machine', 
                4: 'Fraction of drying heat recovered as district heat', 
                5: 'Combustion energy efficiency', 
                6: 'Power to heat ratio, in combustion', 
                7: 'Lower heating value of the biochar, dry', 
                8: 'Biochar yield, dry to dry mass', 
                9: 'Pyrolysis reaction enthalpy', 
                10 : 'Pyrolysis reactor losses'},
'unit': {0: 'MJ/kg', 1: '%', 2: '%', 3: 'MJ/kg water', 4: '%', 5: '%', 6: '%', 7: 'MJ/kg', 8: '%', 9: 'MJ/kg dry biomass', 10: '%', }
}; 

var switch_parameter_data = {'mrg_fuel': {'options': ['biofuel-diesel', 'diesel'], 'values': [[0, 1], [1, 0]]}, 'mrg_el': {'options': ['SE average', 'SE csq', 'natural gas'], 'values': [[0, 1, 1], [1, 0, 1], [1, 1, 0]]}, 'mrg_heat': {'options': ['forest', 'fuel oil', 'natural gas'], 'values': [[0, 1, 1], [1, 0, 1], [1, 1, 0]]}}; 
// Definition of the javacsript parameters, and set to default values 

// Energy Flow Analysis - Variables
var LHV_bio_dry = 18.4, bio_moisture_in = 0.50, bio_moisture_out = 0.1, 
        dryer_spec_heat = 2.58, dryer_heat_recovery = 0, 
        comb_efficiency = 0.80, comb_power2heat = 0,
        LHV_bc_dry = 30, pyr_yield = 0.25,
        pyr_enthalpy = 2, pyr_reactor_losses = 0.02;

// Algebraic function for updating figure 
function algebraic_equation_f(){ 
    return {
        nodes: [
        {"id": "bio", "title": "Biomass\nas received"},
        {"id": "bc", "title": "Biochar"},
        {"id": "ht", "title": "Excess\nheat"},
        {"id": "dry", "title": "Drying"},
        {"id": "pyr", "title": "Pyrolysis"},
        {"id": "comb", "title": "Combustion"},
        {"id": "loss", "title": "Thermal\nlosses"}
        ],
        links: [
        {"source": "bio", "target": "dry", "type": "b", "value": LHV_bio_dry*(1-bio_moisture_in)},
        {"source": "dry", "target": "pyr", "type": "b", "value": LHV_bio_dry*(1-bio_moisture_in)},
        {"source": "dry", "target": "loss", "type": "l", "value": dryer_spec_heat*(1/(1-bio_moisture_in) - 1/(1-bio_moisture_out) ) },
        {"source": "pyr", "target": "loss", "type": "l", "value": pyr_reactor_losses*LHV_bio_dry*(1-bio_moisture_in)},
        {"source": "pyr", "target": "bc", "type": "c", "value": LHV_bc_dry*pyr_yield*(1-bio_moisture_in)},
        {"source": "pyr", "target": "comb", "type": "s", "value": (LHV_bio_dry*(1-bio_moisture_in) - LHV_bc_dry*pyr_yield*(1-bio_moisture_in)) + pyr_enthalpy*(1-bio_moisture_in) - pyr_reactor_losses*LHV_bio_dry*(1-bio_moisture_in)},
        {"source": "comb", "target": "pyr", "type": "t", "value": pyr_enthalpy*(1-bio_moisture_in)},
        {"source": "comb", "target": "dry", "type": "t", "value": dryer_spec_heat*(1/(1-bio_moisture_in) - 1/(1-bio_moisture_out) )},
        {"source": "comb", "target": "ht", "type": "t", "value": comb_efficiency*(LHV_bio_dry*(1-bio_moisture_in) - LHV_bc_dry*pyr_yield*(1-bio_moisture_in) - pyr_enthalpy*(1-bio_moisture_in) ) - (1-dryer_heat_recovery) * dryer_spec_heat*(1/(1-bio_moisture_in) - 1/(1-bio_moisture_out) )  },
        {"source": "comb", "target": "loss", "type": "l", "value": (1-comb_efficiency)*(LHV_bio_dry*(1-bio_moisture_in) - LHV_bc_dry*pyr_yield*(1-bio_moisture_in) - pyr_enthalpy*(1-bio_moisture_in) ) },
       
        ],
        "alignLinkTypes": true
}
   } 

function algebraic_equation_f2(){ 
        return {
                "nodes": [
                        {"id": "a", "title": "a"},
                        { "id": "b", "title": "b"},
                        { "id": "c", "title": "c" }, 
                        { "id": "x", "title": "d"}, 
                        { "id": "y", "title": "e" }
                ],
                 "links": [ { "source": "a", "target": "x", "value": 1, "type": "x" }, 
                        { "source": "a", "target": "y", "value": 0.7, "type": "y" }, 
                        { "source": "a", "target": "y", "value": 0.3, "type": "z" },
                        { "source": "b", "target": "x", "value": 2, "type": "x" },
                        { "source": "b", "target": "y", "value": 0.3, "type": "y" },
                        { "source": "b", "target": "y", "value": 0.9, "type": "z" },
                        { "source": "x", "target": "c", "value": 3, "type": "x" },
                        { "source": "y", "target": "c", "value": 1, "type": "y" },
                        { "source": "y", "target": "c", "value": 1.2, "type": "z" }
                ],
                "alignLinkTypes": true
              }
} 
   
