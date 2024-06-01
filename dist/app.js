"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const express_handlebars_1 = require("express-handlebars");
const path_1 = __importDefault(require("path"));
//rauter
const index_1 = __importDefault(require("./routes/index"));
const tasks_1 = __importDefault(require("./routes/tasks"));
class Application {
    constructor() {
        this.app = (0, express_1.default)();
        this.settings();
        this.middlewares();
        this.routes();
    }
    settings() {
        this.app.set("port", 3000); //firme para conectar el proyecto
        this.app.set("views", path_1.default.join(__dirname, "views")); // Configura la ruta a las vistas EJS
        this.app.engine(".hbs", (0, express_handlebars_1.create)({
            layoutsDir: path_1.default.join(this.app.get("views"), "layouts"),
            partialsDir: path_1.default.join(this.app.get("views"), "partials"),
            defaultLayout: "main",
            extname: ".hbs",
        }).engine);
        this.app.set("views engine", ".hbs");
    }
    middlewares() {
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use(express_1.default.json()); //  para que entienda los formatos jeson
        this.app.use(express_1.default.urlencoded({ extended: false })); // para que el servidor pueda entenderlo
    }
    routes() {
        this.app.use('/', index_1.default);
        this.app.use('/task', tasks_1.default);
        this.app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('server on port', this.app.get('port'));
        });
    }
}
exports.default = Application;
