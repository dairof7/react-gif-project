const { shallow } = require("enzyme")
import React from 'react'
import { GifExpertApp } from '../GifExpertApp'

describe('test <GifExpertApp />', () => {
    test('should show correctly', () => {
        const wrapper = shallow(<GifExpertApp />)
        expect( wrapper ).toMatchSnapshot()
    })
    
    test('should show a list of categories', () => {
        
        const categories = ['hola', 'chavo']

        const wrapper = shallow(<GifExpertApp defaultCategories={ categories } />)

        expect( wrapper ).toMatchSnapshot()
        expect ( wrapper.find('GifGrid').length ).toBe( categories.length )

    })
    
})
