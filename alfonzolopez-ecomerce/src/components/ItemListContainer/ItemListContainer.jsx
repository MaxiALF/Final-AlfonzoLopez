import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { mFetch } from "../Tools/mFetch"
import { ItemList } from "../ItemList/ItemList"

function ItemListContainer () {
    const [ products, setProducts ] = useState ([])
    const [ load, setload ] = useState (true)
    const { cid } = useParams()

    useEffect(() => {
        if (cid){
            mFetch()
            .then (result => setProducts(result.filter(products => products.category === cid)))
            .catch(error => console.log(error))
            .finally(() => setload(false))
        }
        else{
            mFetch()
            .then (result => setProducts(result))
            .catch(error => console.log(error))
            .finally(() => setload(false))
        }
    }, [cid])

    return(
        <>
            {
                load ? <h2>Cargando, espere......</h2> :
                <ItemList products={ products } />
            }
        </>
    ) 
}
export default ItemListContainer