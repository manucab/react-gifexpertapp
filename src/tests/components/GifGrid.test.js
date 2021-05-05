import React from 'react'
import '@testing-library/jest-dom'

import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from '../../Hooks/useFetchGifs';
jest.mock('../../Hooks/useFetchGifs')

describe("Pruebas en GifGrid", () => {
  
    const category = "Goku";


  test("debe devolver el componente correctamente", () => {

    useFetchGifs.mockReturnValue({
        data:[],
        loading:true
    })
    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {

    const gifs = [{
        id: 'ABC',
        url:'https://www.google.es',
        title:'Cualquier cosa'
    }]

    useFetchGifs.mockReturnValue({
        data: gifs,
        loading:false
    });

    const wrapper = shallow(<GifGrid category={category} />);

    expect( wrapper ).toMatchSnapshot()
    expect( wrapper.find('p').exists() ).toBe(false)
    //Buscamos por nombre del elemento
    expect( wrapper.find('GifGridItem').length ).toBe( gifs.length )

  })
  


});
