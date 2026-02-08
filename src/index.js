import express from 'express';
import routes from './routes.js';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';

const app = express();

//Install handlebars
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    runtimeOptions: { 
        allowProtoPropertiesByDefault: true, 
        allowProtoMethodsByDefault: true }
}));

//Setup Database
try {
    await mongoose.connect('mongodb://localhost:27017',{
    dbName: 'frendlyWrold',
});
console.log('connect to database successfully');    
} catch (err) {
    console.error('Can not connect to DATA-BASE', err.message);
}


app.set('view engine', 'hbs');
app.set('views', './src/views');

// Add static middleware
app.use(express.static('src/public'));
// Add body parser
app.use(express.urlencoded({extended:false}));
// Add routes
app.use(routes);


app.listen(5000, () => console.log('Server is listening on http://localhost:5000.......'))