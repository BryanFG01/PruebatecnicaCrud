import express from "express";
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import path from 'path';
import { PORT } from "./config";

//rauter
import indexRautes from './routes/index';
import taskRoutes from "./routes/tasks";




class Application {
  app: express.Application;

  constructor() {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  }
  settings() {//firme para conectar el proyecto
    this.app.set("views", path.join(__dirname, "views"));// Configura la ruta a las vistas reistro
    this.app.engine(
      ".hbs",
      engine({
        layoutsDir: path.join(this.app.get("views"), "layouts"),
        partialsDir: path.join(this.app.get("views"), "partials"),
        defaultLayout: "main",
        extname: ".hbs",
      })
    );
    this.app.set("views engine", ".hbs"); // Establece Handlebars como motor de vistas
  }
  middlewares() {
    this.app.use(morgan('dev'));
    this.app.use(express.json()); //  para que entienda los formatos jeson
    this.app.use(express.urlencoded({ extended: false })); // para que el servidor pueda entender la informacion
  }
  routes() {
    this.app.use("/", indexRautes);
    this.app.use("/tasks", taskRoutes);
    this.app.use(express.static(path.join(__dirname, "public")));
    
  }

  start(): void {
    this.app.listen(PORT, () => {
      console.log("Server is running at", PORT);
    });
  }
}

export default Application