import {useState} from'react';

import { AddCategory,GifGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['naruto'])
    const onAddCategory = ( newCategory) => {
            console.log(newCategory)
            if(categories.includes(newCategory)) return;
            setcategories([newCategory, ...categories])
    }
  return (
    <>
    <h1>GifExpert</h1>  
    {/* input*/}

    <AddCategory 
    onNewCategory={onAddCategory}
    //setcategories={setcategories}
    />

    {/*listado de Gif */}
  
        {
            categories.map((category) =>(
                    <GifGrid key={category}  category={category} />
                ))
        }
  
    </>
  )
}
