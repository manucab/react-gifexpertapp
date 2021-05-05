import { getGifs } from "../../helpers/getGifs"


describe('Pruebas en GetGif fetch', () => {
    
    test('debe de traer 10 elementos', async() => {
        
        const gifs = await getGifs('One Punch')

        expect( gifs.length ).toBe(10)

    })

    test('debe de traer undefined', async() => {
        
        const gifs = await getGifs('')

        expect( gifs.length ).toBe( 0 )

    })
    
    

})
