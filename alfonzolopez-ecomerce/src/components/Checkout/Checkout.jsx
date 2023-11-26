import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { Link } from "react-router-dom"
import './checkout.css'

const checkout = () => {

    const { cartList, total, deleteCart } = useCartContext()
    const [ form, setForm ] = useState({ name:'', phone:'', email:''})
    const [ okId, setOkId ] = useState('')

    const createOrder = ( event ) => { 
        event.preventDefault()

            const order = {}
            order.buyer = form
            order.items = cartList.map(product => ({ id: product.id, price: product.price, name: product.name, cant: product.cant }))
            order.total = total()

        const db = getFirestore()

        const queryCollection = collection(db, 'orders')

        addDoc(queryCollection, order)
        .then(({ id }) => setOkId(id))
        .catch(error => console.log(error))
        .finally(() => {setForm({ name:'', phone:'', email:'' }), deleteCart()} )
    }

    const change = (event) => {
        setForm({ ...form, [event.target.name] : event.target.value })
    }

    return (
            <div className="mx-auto checkBody mt-5">
                {okId === '' ?
(                    <>
                        <h2 className="mt-3 text-success"> Complete el siguiente formulario para finalizar con la compra </h2>
                        <form className="d-inline-block w-50" onSubmit={createOrder} >
                            <div className="mt-3">
                            <label>Nombre</label>
                            <input className="form-control m-2" type="text" name="name"  required onChange={ change } value={form.name}/>
                            </div>
                            <div>
                            <label>telefono</label>
                            <input className="form-control m-2" type="number" name="phone" required onChange={ change } value={form.phone}/>
                            </div>
                            <div>
                            <label>Email</label>
                            <input className="form-control m-2" type="email" name="email" required onChange={ change } value={form.email}/>
                            </div>
                            <div className="m-3">
                            <button className="btn btn-outline-success">Confirmar compra</button>
                            </div>
                        </form>
                    </>)
                    :
                    (                    
                        <div>
                            <h2 className="m-3 text-info"> El ID de su compra es : {okId} </h2>
                            <Link to='/'>
                                <button className="btn btn-success m-3">Volver al inicio</button>
                            </Link>
                        </div>
                    )
                }
            </div>
    )
}

export default checkout