import { Router } from 'express';
import ProductsRouter from './Products.routes';
import BannerRouter from './Banner.routes';
import DiaryProductsRouter from './DiaryProducts.routes';
import GalleryRouter from './Gallery.routes';

const routes = Router();

routes.use('/products',ProductsRouter);
routes.use('/banner', BannerRouter);
routes.use('/diary', DiaryProductsRouter);
routes.use('/gallery', GalleryRouter);

export default routes;