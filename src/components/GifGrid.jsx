import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
  
    // const [images, setImages] = useState([]);

    // const getImages = async() => {
    //     const newImages = await getGifs( category );
    //     setImages( newImages );
    // }

    const { images, isLoading } = useFetchGifs( category );

    /*useEffect 
    Dispara eventos secundarios, los cuales se conocen o entienden por algú proceso
    que se quiera ejecutar cuando algo suceda
    */
    // useEffect( ()  => {
    //     getImages( );
    // }, [] )//arreglo de dependencias, si las dependecias se quedan vacías significa que el hook seolo se deispará cuando se crea el componente


    return (
    <>
        <h3>{ category }</h3>

        {
            isLoading && (<h2> Cargando... </h2>)
        }

        <div className='card-grid'>
            { 
                images.map(( image ) => (
                    <GifItem  
                        key={ image.id } 
                        { ...image }//esparcir propiedades
                    />
                ))
            }
        </div>
    </>
  )
}
