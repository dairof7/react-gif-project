import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    //puedo usar las categorias de esta forma si nunca se van a modificar
    //de lo contraria es mejor usar hooks
    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState([''])
    console.log('la app')
    return (
        <>
            <h2>Gif Search</h2>
            {/* enviamos la funcion setcategories al argumento con el mismo nombre */}
            <AddCategory setCategories={ setCategories } />
            <hr/>
            <ol>
                {
                    categories.map( category => (
                    //react necesita que cada lista se asocie a un key
                    //en este caso la key va a ser cada uno de los elementos
                    //el key normalmente es el id proveniente de una base de datos
                    //return <li key= { category }> { category }</li> 
                    //ahora reemplazamos por otro componente
                    <GifGrid 
                        key={category}
                        category= {category} />
                    ))
                }
            </ol>
        </>
    )
}
