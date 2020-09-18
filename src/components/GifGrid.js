import React from 'react'
import PropTypes from 'prop-types'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';


export const GifGrid = ( { category } ) => {
    
    //en la desestructuracion puedo renombrar data si quiero, en este caso images
    const { data:images, loading } = useFetchGifs( category );
    //recibe una funcion y un arreglo de dependencias
    return (
        <>
        <h3 className='animate__animated animate__fadeInLeft'> { category } </h3>
        {/* si esta cargando aparece, condicional corto con && */}
        {loading && <p>Loading...</p>}
        <div className='card-grid'>
                {
                    images.map( (img) => 
                    <GifGridItem 
                        key={img.id}
                        //de esta forma se envia el paquete completo, es decir el array de objetos
                        //img={img}
                        //de esta otra forma estamos enviando ya cada uno de los objetos fuera del array
                        {...img}
                    />
                    )
                }
        </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}