import { Router } from 'express';
import ProductsRouter from './Products.router';
import BannerRouter from './Banner.router';
import DiaryProductsRouter from './DiaryProducts.router';

const routes = Router();

routes.use('/products',ProductsRouter);
routes.use('/banner', BannerRouter);
routes.use('/diary', DiaryProductsRouter);

export default routes;