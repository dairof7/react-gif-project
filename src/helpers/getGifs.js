
    export const getGifs = async( category ) => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=Tx8dUbO49O3dDMbWR3RwxslRcD87h7tN`
        const respuesta = await fetch( url )
        //extraemos solo la data
        const { data } = await respuesta.json()

        const gifs = data.map( img => {
            return{
                id: img.id,
                title: img.title,
                //preguntamos si existe la img.images
                url: img.images?.downsized_medium.url
            }

        })
        return( gifs );
    }