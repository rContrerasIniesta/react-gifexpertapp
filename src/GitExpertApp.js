import React, { useState } from 'react'
import { AddCategory } from './components/addCategory';
import { GifGrid } from './components/GifGrid';


export const GitExpertApp = () => {
    
    // const categrorias = ['One pouch', 'Samurai X' , 'Dragon Ball'];
     const [categories, setCategories] = useState(['Dragon Ball'])
    
    // const handlerAdd = () =>{
    //     // setCategories([...categories, 'Boku no hero']);
    //     setCategories(cats => [...cats, 'Boku no hero']);
    // }

    return (
        <div>              
            <h2>GitExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            <ol>
                { categories.map(categoria=>
                    <GifGrid 
                        key= {categoria}
                        category={categoria} />
                )
                }
            </ol>
        </div>
    )
}
