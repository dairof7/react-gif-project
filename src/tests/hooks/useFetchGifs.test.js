const { useFetchGifs } = require("../../hooks/useFetchGifs");
import { renderHook } from '@testing-library/react-hooks'

describe('test in useFetchGifs hook', () => {
    test('should return initial state', async() => {
        //const { data:images, loading } = useFetchGifs( category );
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'chavo' ) )
        const { data, loading } = result.current;
        await waitForNextUpdate();
        expect( data ).toEqual([])
        expect( loading ).toEqual(true)

    })

    test('should return img array and loading = false', async() => {
        
        const { result, waitForNextUpdate} = renderHook( () => useFetchGifs( 'category' ) )
        await waitForNextUpdate();
        const { data, loading } = result.current;
        
        expect( data.length ).toEqual(10)
        expect( loading ).toEqual(false)
    })
    

})
