// var parameter_data & var switch_parameter_data contains the data describing the parameters of the MEFA model 
var parameter_data = {'name': {0: 'LHV_bio_dry',
                                 1: 'w', 
                                 2: 'w_d', 
                                 3: 'h_d', 
                                 4: 'r_d', 
                                 5: 'eta_h', 
                                 6: 'alpha', 
                                 7: 'LHV_bc_dry', 
                                 8: 'y_bc',
                                 9: 'pyr_enthalpy',
                                 10: 'i_el'},
'amount': {0: 18.4,
          1: 0.5,
          2: 0.1,
          3: 2.58,
          4: 0,
          5: 0.80,
          6: 0,
          7: 30,
          8: 0.25,
          9: 2,
          10: 0},
'group': {0: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '',10: '', },
'label': {0: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '',10: '',},
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
                10:'Electricity used for heating pyrolysis reactor'},
                
'uncertainty type': {0: 4, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1, 8: 1, 9: 1, 10:1},
'minimum': {0: 17, 1: 0, 2: 0.0, 3: 2.5, 4: 0, 5: 0.5, 6: 0.0, 7: 25.0, 8: 0.01, 9: 0.0,  10:0},
'maximum': {0: 21, 1: 1, 2: 1.0, 3: 3.5, 4: 1, 5: 1.0, 6: 0.4, 7: 35.0, 8: 0.35, 9: 5.0, 10:0.5},
'loc': {0: 0.816, 1: 18.4, 2: 0.5, 3: 0.1, 4: 2.85, 5: 0.05, 6: 0.0, 7: 29.6, 8: 0.25, 9: 0.0, 10:'0'},
'prettyName': {0: 'Biomass LHV (dry)', 
                1: 'Biomass moisture content, as received', 
                2: 'Biomass moisture content, after drying',
                3: 'Specific heat for drying equipment', 
                4: 'Fraction of drying heat recovered as district heat', 
                5: 'Syngas combustion energy efficiency', 
                6: 'Power to syngas heat ratio', 
                7: 'Biochar LHV (dry)', 
                8: 'Biochar yield, dry to dry mass', 
                9: 'Pyrolysis reaction enthalpy', 
                10: 'Pyrolysis electric heating'},
'unit': {0: 'MJ/kg', 1: '%', 2: '%', 3: 'MJ/kg water', 4: '%', 5: '%', 6: '%', 7: 'MJ/kg', 8: '%', 9: 'MJ/kg dry biomass', 10:'kWh/kg biochar'}
}; 

var switch_parameter_data = {'mrg_fuel': {'options': ['biofuel-diesel', 'diesel'], 'values': [[0, 1], [1, 0]]}, 'mrg_el': {'options': ['SE average', 'SE csq', 'natural gas'], 'values': [[0, 1, 1], [1, 0, 1], [1, 1, 0]]}, 'mrg_heat': {'options': ['forest', 'fuel oil', 'natural gas'], 'values': [[0, 1, 1], [1, 0, 1], [1, 1, 0]]}}; 
// Definition of the javacsript parameters, and set to default values 

// Energy Flow Analysis - Variables
var LHV_bio_dry = 18.4,
        w = 0.30,
        w_d = 0.10,
        h_d = 2.85,
        e_d = 0.05,
        r_d = 0,
        LHV_bc_dry = 29.6,
        y_bc = 0.25,
        i_el = 0,
        eta_h = 0.85,
        alpha = 0,
        i_elp = 0.182,
        pyr_enthalpy = 2

// Algebraic function for updating figure 
function algebraic_equation_f(){ 
        m_bc_dry = 1
        o_bc = LHV_bc_dry * m_bc_dry
    
        H_syngas = (LHV_bio_dry/y_bc + i_el*3.6 - LHV_bc_dry)
        o_h = eta_h*H_syngas
        D_drying = h_d/y_bc * ( (1/(1-w)) - (1/(1-w_d)) )
    
        o_e = alpha*eta_h*H_syngas /3.6
        if(o_h > D_drying){
                o_dh = o_h - D_drying
                D_e = 0
                D_p = D_drying
        }else{
            o_dh = 0
            D_p = o_h
            D_e = D_drying-D_p
        }  
        o_dhd = r_d*D_drying
       
        m_bio_dry = 1/y_bc
        i_e = i_el*3.6
        i_ep = i_elp
        i_ed = e_d/y_bc * ( (1/(1-w)) - (1/(1-w_d)) )
    
        L_fg = H_syngas*(1-alpha*eta_h-eta_h)
        L_d = (1-r_d)*D_drying

        E_in = LHV_bio_dry*m_bio_dry + D_e + i_el*3.6
        E_out = o_e*3.6+o_dh+o_dhd+o_bc+L_fg+L_d
        console.log("E_in: ", E_in)
        console.log("E_out: ", E_out)

    return {
        nodes: [
        {"id": "bio", "title": "Biomass\nas received"},
        {"id": "ext_dry", "title": "External\ndrying"},
        {"id": "ext_el", "title": "External\npower"},
        {"id": "bc", "title": "Biochar"},
        {"id": "ht", "title": "Excess\nheat"},
        {"id": "el", "title": "Generated\npower"},
        {"id": "dry", "title": "Drying"},
        {"id": "pyr", "title": "Pyrolysis"},
        {"id": "comb", "title": "Combustion"},
        {"id": "loss", "title": "Thermal\nlosses"}
        ],
        links: [
        {"source": "bio", "target": "dry", "type": "b", "value": LHV_bio_dry*m_bio_dry},
        {"source": "dry", "target": "pyr", "type": "b", "value": LHV_bio_dry*m_bio_dry},
        {"source": "dry", "target": "loss", "type": "l", "value": L_d},
        {"source": "pyr", "target": "loss", "type": "l", "value": 0},
        {"source": "pyr", "target": "bc", "type": "c", "value": LHV_bc_dry*m_bc_dry},
        {"source": "pyr", "target": "comb", "type": "s", "value": H_syngas+pyr_enthalpy*m_bio_dry},
        {"source": "comb", "target": "pyr", "type": "t", "value": pyr_enthalpy*m_bio_dry},
        {"source": "comb", "target": "dry", "type": "t", "value": D_p},
        {"source": "ext_dry", "target": "dry", "type": "t", "value": D_e},
        {"source": "ext_el", "target": "pyr", "type": "t", "value": i_e},
        {"source": "comb", "target": "ht", "type": "t", "value":  o_dh},
        {"source": "comb", "target": "el", "type": "t", "value": o_e*3.6},
        {"source": "dry", "target": "ht", "type": "t", "value": o_dhd},
        {"source": "comb", "target": "loss", "type": "l", "value": L_fg},
       
        ],
        "alignLinkTypes": true
}
   } 

   
