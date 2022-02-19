import {AddCategory} from './Components/AddCategory'
import { useState } from 'react';
import { GifGrid } from './Components/GifGrid';

export const GiftExpertApp = ()=>{

     const [categories, setCategories] = useState(['one punch man']);

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />  

            <ol>
                {
                    categories.map(category=>(
                    <GifGrid 
                    key = {category}
                    category={category}/>
                        ))           
                }
            </ol>
        </>
    )

}