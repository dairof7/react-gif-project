import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
            data: [],
            loading: true
    }) 

     //los efectos no pueden ser asyncs
        useEffect(() => {
            //como getGifts es una promesa entonces ....            
            getGifs( category )
                .then( imgs => {
                        setState({
                            data: imgs,
                            loading: false
                        })
            } )
        }, [ category ])


    return state;
}
