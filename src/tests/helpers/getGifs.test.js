const { getGifs } = require("../../helpers/getGifs")

describe('test with getGifs fetch', () => {
    test('should bring 10 elements', async() => {
        
        const gifs = await getGifs('chavo')
        expect (gifs.length).toBe(10)
    })
    
    test('should bring 10 elements', async() => {
        
        const gifs = await getGifs('')
        expect (gifs.length).toBe(0)
    })

})
