const { shallow } = require("enzyme")
import '@testing-library/jest-dom'
import React from 'react'
import { GifGrid } from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs'
jest.mock('../../hooks/useFetchGifs')
describe('test <GifGrid />', () => {
  const category = 'samurai'

  test('should show correctly snapshot', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    })
    const wrapper = shallow(<GifGrid category={ category }/>)
    expect ( wrapper ).toMatchSnapshot();
  })

  test('should show items when images are uploaded with useFectchGifts', () => {
  
    const gifs = [{
      id: 'ABC',
      url: 'https://localhost/lo/qie/sea.jpg',
      title: 'lo que sea'
    },
    {
      id: 'ABCDE',
      url: 'https://localhost/lo/qie/sea.jpg',
      title: 'lo que sea'
    }]
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    })
    const wrapper = shallow(<GifGrid category={ category }/>);
    //se verifica si el parrafo desaparecio (loading)
    expect( wrapper ) .toMatchSnapshot()
    expect( wrapper.find('p').exists() ).toBe(false);
    expect( wrapper.find('GifGridItem').length ).toBe( gifs.length )
  })
})