const products = [
    {id: '1', name: 'Rueda BSS', category: 'ruedas', price: 22000, stock: 5, description: 'Rueda 25" BBS', imageUrl: 'https://www.tunershop.es/media/catalog/product/f/e/felgen-bbs-bbs-ch-r-nuerburgring-edition-0.jpg.mst.webp?width=90&height=90&store=es&image-type=thumbnail'},
    {id: '2', name: 'Aleron Universal', category: 'Alerones', price: 12000, stock: 10, description: 'Aleron trasero universal', imageUrl: 'https://m.media-amazon.com/images/I/51I19rNEp-L.jpg'},
    {id: '3', name: 'Freno Brembo', category: 'frenos', price: 15000, stock: 2, description: 'Conjunto de freno Brembo', imageUrl: 'https://www.brembo.com/it/PublishingImages/company/news/freni-stock-vs-brembo-upgrade/380%20TYPE%203%20+%20GTS6.jpg'},
    {id: '4', name: 'Faros Chevrolet Corsa', category: 'Faros ', price: 30000, stock: 1, description: 'Opticas delanteras Chevrolet', imageUrl: 'https://refaccionariamario.info/31727/4817.jpg'},
    {id: '5', name: 'Rueda Testarossa', category: 'Faros', price: 25000, stock: 8, description: 'Ruedas Ferrari Testarossa', imageUrl: 'https://i.ebayimg.com/thumbs/images/g/ZkkAAOSw45FiPypF/s-l640.jpg'}
]

export const getProducts = () => {
    return new Promise((resolve) => {  
        setTimeout(() => {
            resolve(products)
        }, 2000)
    
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {  
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 1000)
    
    })
}