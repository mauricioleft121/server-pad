"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var routes_1 = __importDefault(require("./routes"));
require("./database");
var whitelist = ['https://panificadoraubaense.com.br', 'http://138.59.217.17'];
var corsOptions = {
    origin: whitelist,
};
var app = (0, express_1.default)();
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use(routes_1.default);
dotenv_1.default.config();
app.listen(process.env.PORT || 3333, function () {
    console.log('Server started on port 3333!');
});
