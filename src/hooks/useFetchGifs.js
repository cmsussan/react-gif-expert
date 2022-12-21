import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

//un hook no es más que una función que regresa algo
export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages( newImages );
        setIsLoading( false );
    }

    
    useEffect( ()  => {
        getImages( );
    }, [] )//arreglo de dependencias, si las dependecias se quedan vacías significa que el hook seolo se deispará cuando se crea el componente
    
    

    return {
        images: images,
        isLoading // si tanto la key como el valor tienen el mismo nombre se puede simplificar de esta manera a diferencia de la linea anterior
    }
}
