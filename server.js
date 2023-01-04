import express from 'express';
import { mangaPlural } from './data/manga-data';
// Create Express app

const app = express();

// Configure the app (app.set)
app.set('view engine', 'ejs');

// Mount Middleware (app.use)



// Mount routes
app.get('/home', function(req,res){
  res.render('home/index');
})

// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000');
})