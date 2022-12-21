import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState(['Dragon Ball']);

  const onAddCategory = (newCategory) => {
    
    if (categories.includes(newCategory)) return;
    
    setCategories([newCategory, ...categories]);
  }

  return (
    <>
      {/* Título */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory
        // setCategories={ setCategories }
        onNewCtegory={ (value) => onAddCategory(value) } 
      />
      
      {/* Listado de Gif */}
      {/* { categories.map( category => {
          return (
            <div key={ category }>
              <h3>{ category }</h3>
              <li>{ category }</li>
            </div>
          )
          
        }) } 
        Esto anterior es lo mismo a lo siguiente
        */}

        { categories.map( ( category ) => (
            <GifGrid 
              key={ category } 
              category={ category } 
            />
          ))
        }


    </>    
  )
}
