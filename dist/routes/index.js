"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Products_router_1 = __importDefault(require("./Products.router"));
var Banner_router_1 = __importDefault(require("./Banner.router"));
var DiaryProducts_router_1 = __importDefault(require("./DiaryProducts.router"));
var Gallery_router_1 = __importDefault(require("./Gallery.router"));
var routes = express_1.Router();
routes.use('/products', Products_router_1.default);
routes.use('/banner', Banner_router_1.default);
routes.use('/diary', DiaryProducts_router_1.default);
routes.use('/gallery', Gallery_router_1.default);
exports.default = routes;
