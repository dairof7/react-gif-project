const { shallow } = require("enzyme")
const { AddCategory } = require("../../components/AddCategory")
import '@testing-library/jest-dom'
import React from 'react'

describe('test <AddCategory />', () => {
    //es una funcion vacia
    //const setCategories = () => {};
    //sigue siendo una funcion pero esta vez nos permite mirar parametros de uso
    const setCategories = jest.fn();
    //aqui ponemos lo que queremos que se reinicialice antes de cada test
    let wrapper;
    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />)
    });
    

    test('should show correctly', () => {
        expect ( wrapper ).toMatchSnapshot();
    })

    test('should change the textbox', () => {
        const input = wrapper.find('input')
        const value = 'hola';
        //simulamos que algo cambio en el input, y le enviamos el evento con el valor esperado
        //input.simulate('change', { target: {value} });
        //expect (input.props().value).toBe(value)
        
    })

    test('should not post the information on submit', () => {
        //enviamos la funcion vacia preventDefacult
        wrapper.find('form').simulate('submit', { preventDefault: ()=>{}})
        expect( setCategories ).not.toHaveBeenCalled();
    })
    

    test('should call setCategories and clear the textbox', () => {
        const value = 'hola'
        //simulamos cambio en el input change
        wrapper.find('input').simulate('change', { target: {value} });
        //simulamos u summit enviando la funcion preventDefault
        wrapper.find('form').simulate('submit', { preventDefault: ()=>{}});
        //verificamos que se halla llamado
        expect( setCategories ).toHaveBeenCalled();
        //verificamos que se halla llamado un vez
        expect( setCategories ).toHaveBeenCalledTimes(1);
        //verificamos que se halla llamado con una funcion
        expect( setCategories ).toHaveBeenCalledWith( expect.any( Function ) );

        //verificamos que el value del input este vacio
        expect( wrapper.find('input').prop('value') ).toBe('');
    })


})
