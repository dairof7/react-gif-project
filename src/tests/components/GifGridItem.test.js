const { shallow } = require("enzyme")
const { GifGridItem } = require("../../components/GifGridItem")
import React from 'react'


describe('Pruebas en <GifGridItem />', () => {
    
    const title = 'titulo'
    const url = 'https://localhost/hola.jpg'
    const wrapper = shallow ( <GifGridItem title={ title } url={ url }/> )
    
    test('should show correctly the component', () => {
        expect ( wrapper ).toMatchSnapshot();
    })

    test('should show a <p> with the title', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );

    })

    test('should show the image same tnah url', () => {
        const img = wrapper.find('img');
        //imprime el html de la img completo, en un string
        //console.log(img.html())
        //con props puedo analizar mas facilmente las propiedades
        
        expect( img.props().src ).toBe(url);
        expect( img.props().alt ).toBe(title);
    })
    
    test('should have animate_backInDown className', () => {
        const div = wrapper.find('div')
        const class_Name = div.props().className
        expect( class_Name.includes( 'animate__backInDown' ) ).toBe(true);
        
    })
    

})
