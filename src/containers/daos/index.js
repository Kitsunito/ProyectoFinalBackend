let ProductDao;
let CartDao;

switch (process.env.DATABASETYPE) {
    case 'mongo':
        const { default: ProductDaoMongo} = await import('./products/ProductDaoMongo.js');
        const { default: CartDaoMongo } = await import('./carts/CartDaoMongo.js');

        ProductDao = new ProductDaoMongo();
        CartDao = new CartDaoMongo();
        break;

    case 'firebase':
        const { default: ProductDaoFB} = await import('./products/ProductDaoFB.js');
        const { default: CartDaoFB } = await import('./carts/CartDaoFB.js');

        ProductDao = new ProductDaoFB();
        CartDao = new CartDaoFB();
        break;
    default:
        break;
}

export {ProductDao, CartDao};