let ProductDao;
let CartDao;

switch (process.env.DATABASETYPE) {
    case 'mongo':
        const { default: ProductDaoMongo} = await import('./products/ProductDaoMongo');
        const { default: CartDaoMongo } = await import('./carts/CartDaoMongo');

        ProductDao = new ProductDaoMongo();
        CartDao = new CartDaoMongo();

        break;

    case 'firebase':
        break;
    default:
        break;
}

export {ProductDao, CartDao};