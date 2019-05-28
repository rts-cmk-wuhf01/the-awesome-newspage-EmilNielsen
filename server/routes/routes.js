module.exports = (app) => {

   app.get('/', (req, res, next) => {
      res.render('home', {
         "title": "The News Paper - News & Lifestyle Magazine Template"
      });
   });

   app.get('/categories', (req, res, next) => {
      res.render('categories', {
         "title": "The News Paper - News &amp; Lifestyle Magazine Template"
      });
   });

};