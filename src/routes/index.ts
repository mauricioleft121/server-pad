import { Router } from 'express';
import ProductsRouter from './Products.router';
import BannerRouter from './Banner.router';
import DiaryProductsRouter from './DiaryProducts.router';
import GalleryRouter from './Gallery.router';

const routes = Router();

routes.use('/products',ProductsRouter);
routes.use('/banner', BannerRouter);
routes.use('/diary', DiaryProductsRouter);
routes.use('/gallery', GalleryRouter);

export default routes;