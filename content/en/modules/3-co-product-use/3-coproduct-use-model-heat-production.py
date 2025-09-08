# -*- coding: utf-8 -*-
"""
Pyrolysis mass and energy balance for district heat production

Created on Mon Jun 30 17:21:28 2014

@author: Elias Azzi, eazzi@kth.se 

dependencies:
    none 
    

description:
The model applies to slow pyrolysis of biomass, with direct combustion of pyrolysis gas and oil.
It is based on mass and energy balances. It can either represent a pyrolysis reactor sustained by
electrical heating or by heat from the flue gases. Biomass drying and excess use as district heat
is considered. An electrical efficiency can be assumed as well.


input parameters
Name	Symbol	Unit
Lower heating value of the biomass, dry	LHV_bio_dry	MJ/kg
Moisture content of the biomass as received	w	%
Target moisture content after drying	w_d	%
Specific heat for drying machine	h_d	MJ/kg w
Electricity during drying, for fans and co	e_d	kWh/kg w
Fraction of drying heat recovered as district heat	r_d	%
Lower heating value of the biochar, dry	LHV_bc_dry	MJ/kg
Biochar yield, dry to dry mass	y_bc	%
Electricity input to for pyrolysis heating	i_el	kWh/kg bc
Boiler heat efficiency, as percent enthalpy of syngas	eta_h	%
Power to heat ratio	alpha	%
Total boiler-turbine efficiency (calculated)	eta_T	%
Electricity input for pyrolysis operation	i_elp	kWh/kg bc

Output parameters
Name	Symbol	Unit
Biochar produced, dry	m_bc_dry	kg
Electricity produced	o_e	kWh
District heat produced	o_dh	MJ
Biomass consumed, dry	m_bio_dry	kg
Process electricity, heating	i_e	kWh
Process electricity, operation	i_e,p	kWh
Drying electricity, drying	i_e,d	kWh


"""

LHV_bio_dry = 18.4
w = 0.30
w_d = 0.10
h_d = 2.85
e_d = 0.05
r_d = 0
LHV_bc_dry = 29.6
y_bc = 0.25
i_el = 0
eta_h = 0.85
alpha = 0
i_elp = 0.182

def pyrolysis_output(LHV_bio_dry = 18.4, w = 0.30, 
                     w_d = 0.10, h_d = 2.85, e_d = 0.05, r_d = 0.8,
                     LHV_bc_dry = 29.6, y_bc = 0.25,
                     i_el = 0, eta_h = 0.85, alpha = 0.15, i_elp = 0.182):
    '''Output of pyrolysis reactor, scaled to 1 tonne of biochar'''

    m_bc_dry = 1
    o_bc = LHV_bc_dry * m_bc_dry

    H_syngas = (LHV_bio_dry/y_bc + i_el*3.6 - LHV_bc_dry)
    o_h = eta_h*H_syngas
    D_drying = h_d/y_bc * ( (1/(1-w)) - (1/(1-w_d)) )

    o_e = alpha*eta_h*H_syngas /3.6
    if o_h > D_drying:
        o_dh = o_h - D_drying
        D_e = 0
        D_p = D_drying
    else:
        o_dh = 0
        D_p = o_h
        D_e = D_drying-D_p
        
    o_dhd = r_d*D_drying
   
    m_bio_dry = 1/y_bc
    i_e = i_el
    i_ep = i_elp
    i_ed = e_d/y_bc * ( (1/(1-w)) - (1/(1-w_d)) )

    L_fg = H_syngas*(1-alpha*eta_h-eta_h)
    L_d = (1-r_d)*D_drying

    # energy balance check
    E_in = LHV_bio_dry*m_bio_dry + D_e + i_el
    E_out = o_e*3.6+o_dh+o_dhd+o_bc+L_fg+L_d
    print("Energy in: ", E_in)
    print("Energy out: ", E_out)
    if E_in == E_out:
        print("Energy balance is ok")
    else:
        print("Warning: energy not balanced!")

    return {'input_parameters':{'LHV_bio_dry':LHV_bio_dry, 'w':w,'w_d':w_d, 'h_d':h_d, 'e_d':e_d, 'r_d':r_d, 
                                'LHV_bc_dry':LHV_bc_dry, 'y_bc':y_bc, 'i_el':i_el, 'eta_h':eta_h, 'alpha':alpha, 'i_elp':i_elp},
            'energy inflow': {'E_bio':LHV_bio_dry*m_bio_dry,
                              'D_e': D_e,
                              'i_el': i_el},
            'energy outflow':{'o_e':o_e,
                              'o_dh':o_dh,
                              'o_dhd':o_dhd,
                              'o_bc':o_bc,
                              'L_fg':L_fg,
                              'L_d':L_d,},           
            'mass flows':{'m_bio_dry':m_bc_dry,
                          'm_bc_dry':m_bio_dry}
            }

result = pyrolysis_output()
print(result)
