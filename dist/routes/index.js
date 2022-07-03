"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Products_routes_1 = __importDefault(require("./Products.routes"));
var Banner_routes_1 = __importDefault(require("./Banner.routes"));
var DiaryProducts_routes_1 = __importDefault(require("./DiaryProducts.routes"));
var Gallery_routes_1 = __importDefault(require("./Gallery.routes"));
var routes = (0, express_1.Router)();
routes.use('/products', Products_routes_1.default);
routes.use('/banner', Banner_routes_1.default);
routes.use('/diary', DiaryProducts_routes_1.default);
routes.use('/gallery', Gallery_routes_1.default);
exports.default = routes;
