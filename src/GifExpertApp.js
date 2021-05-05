import React, {useState} from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
//rafc + tab

export const GifExpertApp = ( {defaultCategories = []} ) => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball']
    const [categories, setCategories] = useState( defaultCategories )

    // const handleAdd = () => {

    //     //setCategories([...categories,'Death Note'])
    //     setCategories( cats => [...cats, 'Death Note'])

    // }

    return (

        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>

            <ol>
                {
                    categories.map( (c) => ( 
                        <GifGrid 
                            key={c}
                            category={ c } 
                        />
                    ))
                }
            </ol>

        </>

    )


}