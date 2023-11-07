const products = [
    {
        id: '1', 
        name: 'Rueda BSS', 
        category: 'Ruedas', 
        price: 22000, stock: 5, 
        description: 'Rueda 25" BBS', 
        img:'https://www.tunershop.es/media/catalog/product/f/e/felgen-bbs-bbs-ch-r-nuerburgring-edition-0.jpg.mst.webp?width=90&height=90&store=es&image-type=thumbnail'
    },

    {id: '2', name: 'Aleron Universal', category: 'Alerones', price: 12000, stock: 10, description: 'Aleron trasero universal', img:'https://m.media-amazon.com/images/I/51I19rNEp-L.jpg'},
    {id: '3', name: 'Freno Brembo', category: 'Frenos', price: 15000, stock: 2, description: 'Conjunto de freno Brembo', img:'https://www.brembo.com/it/PublishingImages/company/news/freni-stock-vs-brembo-upgrade/380%20TYPE%203%20+%20GTS6.jpg'},
    {id: '4', name: 'Faro Chevrolet Corsa', category: 'Faros ', price: 30000, stock: 1, description: 'Opticas delanteras Chevrolet', img:'https://acdn.mitiendanube.com/stores/001/440/707/products/optica-corsa-2-08-11-der11-ff7828372b87e84fc516255975849331-1024-1024.jpg'},
    {id: '5', name: 'Rueda Testarossa', category: 'Ruedas', price: 25000, stock: 8, description: 'Ruedas Ferrari Testarossa', img:'https://i.ebayimg.com/thumbs/images/g/ZkkAAOSw45FiPypF/s-l640.jpg'},
]

export const mFetch = (id) => {
    return new Promise ((res, rej) => {
        setTimeout(()=>{
            res(id ? products.find(prod => prod.id === id) : products)
        }, 2000)
    })
};



















// export const getProducts = () => {
//     return new Promise((resolve) => {  
//         setTimeout(() => {
//             resolve(products)
//         }, 500)
//     })
// }

// export const getProductById = (productId) => {
//     return new Promise((resolve) => {  
//         setTimeout(() => {
//             resolve(products.find(prod => prod.id === productId))
//         }, 500)
//     })
// }

// export const getProductByCategory = (productId) => {
//     return new Promise((resolve) => {  
//         setTimeout(() => {
//             resolve(products.find(prod => prod.id === productId))
//         }, 500)
//     })
// }