import React from "react";

import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp";

describe("Pruebas en GifExpertApp", () => {
  let wrapper;

  test("Debe mostrar la app correctamente", () => {
    wrapper = shallow(<GifExpertApp />);

    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar una lista de categorias', () => {
      
    const categories = ['One Punch', 'Full Metal Alchimist']
    wrapper = shallow(<GifExpertApp defaultCategories={ categories }/>);
    const el = wrapper.find('GifGrid').length

    expect(wrapper).toMatchSnapshot();
    expect( el ).toBe( categories.length )


  })
  


});
