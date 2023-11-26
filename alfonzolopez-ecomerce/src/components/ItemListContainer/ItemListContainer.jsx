import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

export const Loading = () => {
    return (
        <div className="mx-auto m-5">
            <img src="/public/icons/Loading.gif"/>
            <h2 className="text-info">Cargando, espere...</h2>
        </div> 
    )
}

function ItemListContainer ({greeting}) {
    const [ products, setProducts ] = useState ([])
    const [ load, setload ] = useState (true)
    const { cid } = useParams()

    useEffect(() => {
        const dbFirestore = getFirestore()
        const queryColletion = collection(dbFirestore, 'Products')
        
        const qFilter = cid ? query(queryColletion, where('category', '==', cid )) : queryColletion

        getDocs(qFilter)
        .then(result => {setProducts(result.docs.map(product => ({ id: product.id , ...product.data() })))})
        .catch(error => console.log(error))
        .finally(() => setload(false))
        
    }, [cid])

    return(
        <div className="d-flex">
            {
                load ?
                <Loading />
                :
                <ItemList products={ products } />
            }
        </div>
    ) 
}
export default ItemListContainer