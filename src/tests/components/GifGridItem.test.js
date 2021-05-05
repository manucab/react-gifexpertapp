
import React from 'react';
import {GifGridItem} from '../../components/GifGridItem'
import {shallow} from 'enzyme'

describe('Pruebas en GifGridItem', () => {

    const title = 'Un título';
    const url = 'https://www.google.es';

    let wrapper = shallow(<GifGridItem title={title} url={url}/>);

    beforeEach(() => {
        wrapper = shallow(<GifGridItem title={title} url={url} />)
    })

    
    test('debe mostrar el componente correctamente', () => {
        
      expect( wrapper ).toMatchSnapshot();

    });

    test('debe de tener un parrafo con el title', () => {
        
        const p = wrapper.find('p');
        expect( p.text().trim()).toBe( title );

    });

    test('debe de tener la imagen igual al url y alt de los props', () => {
      
        const img = wrapper.find('img');

        expect( img.prop('src')).toBe( url );
        expect( img.prop('alt')).toBe( title );

    });

    test('debe de tener animate__fadeIn', () => {
        
        const div = wrapper.find('div');
        const className = div.prop('className');

        expect( className ).toContain( 'animate__fadeIn' )

    });


    
    
    
    

})
