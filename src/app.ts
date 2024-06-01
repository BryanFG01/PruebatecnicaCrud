import express from "express";
import morgan from 'morgan';
import {create} from 'express-handlebars';
import path from 'path';
//rauter
import indexRautes from './routes/index';
import taskRoutes from "./routes/taskRoutes";

class Application {

    app: express.Application;

    constructor(){
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
      
    }
    settings(){
      this.app.set("port", 3000); //firme para conectar el proyecto
      this.app.set("views", path.join(__dirname, "views")); // Configura la ruta a las vistas EJS
      this.app.engine(
        ".hbs",
        create({
          layoutsDir: path.join(this.app.get("views"), "layouts"),
          partialsDir: path.join(this.app.get("views"), "partials"),
          defaultLayout: "main",
          extname: ".hbs",
        }).engine
      );
      this.app.set("views engine", ".hbs");
    }
    middlewares(){
        this.app.use(morgan('dev'));
        this.app.use(express.json()); //  para que entienda los formatos jeson
        this.app.use(express.urlencoded({ extended: false})); // para que el servidor pueda entenderlo
  
    }
    routes(){
        this.app.use('/', indexRautes);
        this.app.use('/task', taskRoutes);

        this.app.use(express.static(path.join (__dirname, 'public')));
    }

    start(){
        this.app.listen(this.app.get('port'), () =>{
            console.log('server on port', this.app.get('port'));
            
        });
    }
}

export default Application