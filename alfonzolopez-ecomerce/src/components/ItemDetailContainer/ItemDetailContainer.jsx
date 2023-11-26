import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { Loading } from "../ItemListContainer/ItemListContainer"
import { doc, getDoc, getFirestore } from "firebase/firestore"

const ItemDetailContainer = () => {
    const [ load, setload ] = useState (true)
    const [ product, setProduct ] = useState({})
    const { pid } = useParams()
    
    useEffect(() => {
        const dbFirestore = getFirestore()
        const queryDoc = doc(dbFirestore, 'Products', pid)

        getDoc(queryDoc)
        .then(result => setProduct({ id: result.id , ...result.data()})) 
        .finally(() => setload(false))
    },[pid])

    return (
        <div className="d-flex">
            {
                load ? 
                <Loading />
                :
                <ItemDetail product={product}/>
            }
        </div>
    ) 
}

export default ItemDetailContainer