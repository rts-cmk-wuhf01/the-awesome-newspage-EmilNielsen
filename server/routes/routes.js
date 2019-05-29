module.exports = (app) => {

   app.get('/', (req, res, next) => {

      let pageNames = [
         {
            "name": "Home",
            "link": "/"
         },
         {
            "name": "Categories",
            "link": "/categories"
         },
         {
            "name": "Single Articles",
            "link": "/single-post"
         }
         ,
         {
            "name": "About Us",
            "link": "/about"
         },
         {
            "name": "Contact",
            "link": "/contact"
         }
      ];

      res.render('home', {
         "title": "The News Paper - News & Lifestyle Magazine Template",
         "pageNameList": pageNames
      });
   });

   app.get('/categories', (req, res, next) => {
      res.render('categories', {
         "title": "The News Paper - News & Lifestyle Magazine Template"
      });
   });

   app.get('/about', (req, res, next) => {
      res.render('about', {
         "title": "The News Paper - News & Lifestyle Magazine Template"
      });
   });

   app.get('/contact', (req, res, next) => {
      res.render('contact', {
         "title": "The News Paper - News & Lifestyle Magazine Template"
      });
   });

   app.get('/single-post', (req, res, next) => {
      res.render('single-post', {
         "title": "The News Paper - News & Lifestyle Magazine Template"
      });
   });
   
   // Used to try different ways of putting the different pages together
   /* app.get('/test', (req, res, next) => {
      res.render('test', {
         "title": "The News Paper - News & Lifestyle Magazine Template"
      });
   }); */

};