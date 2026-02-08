import express from 'express';
import routes from './routes.js';
import handlebars from 'express-handlebars';

const app = express();

//Install handlebars
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', '/src/views');

// Add static middleware
app.use(express.static('src/public'));
// Add body parser
app.use(express.urlencoded({extended:false}));
// Add routes
app.use(routes);


app.listen(5000, () => console.log('Server is listening on http://localhost:5000.......'))