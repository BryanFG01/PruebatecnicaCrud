"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const express_handlebars_1 = require("express-handlebars");
const path_1 = __importDefault(require("path"));
const config_1 = require("./config");
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
        this.app.set("views", path_1.default.join(__dirname, "views")); // Configura la ruta a las vistas reistro
        this.app.engine(".hbs", (0, express_handlebars_1.engine)({
            layoutsDir: path_1.default.join(this.app.get("views"), "layouts"),
            partialsDir: path_1.default.join(this.app.get("views"), "partials"),
            defaultLayout: "main",
            extname: ".hbs",
        }));
        this.app.set("views engine", ".hbs"); // Establece Handlebars como motor de vistas
    }
    middlewares() {
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use(express_1.default.json()); //  para que entienda los formatos jeson
        this.app.use(express_1.default.urlencoded({ extended: false })); // para que el servidor pueda entender la informacion
    }
    routes() {
        this.app.use("/", index_1.default);
        this.app.use("/tasks", tasks_1.default);
        this.app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
    }
    start() {
        this.app.listen(config_1.PORT, () => {
            console.log("Server is running at", config_1.PORT);
        });
    }
}
exports.default = Application;
