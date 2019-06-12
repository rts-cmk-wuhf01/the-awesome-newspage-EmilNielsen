const mysql = require("../config/mysql");
const date = require("date-and-time");

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

      let latestComments = [
         {
            "name": "The beginning",
            "date": "1970-01-01 0:00:00"
         },
         {
            "name": "2nd Comment",
            "date": "2019-04-14 9:10:00"
         },
         {
            "name": "a 3rd Comment",
            "date": "2019-04-14 8:05:00"
         },
         {
            "name": "May the 4th be with me",
            "date": "2019-04-14 7:25:00"
         },
         {
            "name": "Comment the 5th?",
            "date": "2019-04-14 6:58:00"
         },
         {
            "name": "End of the line buddy... 6th comment",
            "date": "2019-04-13 7:35:00"
         },
      ];


      res.render('home', {
         "title": "The News Paper - News & Lifestyle Magazine Template",
         "pageNameList": pageNames,
         "latestComments": latestComments
      });
   });

   app.get('/categories', (req, res, next) => {

      let latestComments = [
         {
            "name": "The beginning of the End",
            "date": "1970-01-01 0:00:00"
         },
         {
            "name": "2nd Comment",
            "date": "2019-04-14 9:10:00"
         },
         {
            "name": "a 3rd Comment",
            "date": "2019-04-14 8:05:00"
         },
         {
            "name": "May the 4th be with me",
            "date": "2019-04-14 7:25:00"
         },
         {
            "name": "Comment the 5th?",
            "date": "2019-04-14 6:58:00"
         },
         {
            "name": "The End of the... End?",
            "date": "2019-04-13 7:35:00"
         },
      ];

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

      res.render('categories', {
         "title": "The News Paper - News & Lifestyle Magazine Template",
         "pageNameList": pageNames,
         "latestComments": latestComments
      });
   });

   app.get('/about', (req, res, next) => {

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
      
      res.render('about', {
         "title": "The News Paper - News & Lifestyle Magazine Template",
         "pageNameList": pageNames
      });
   });

   app.get('/contact', (req, res, next) => {

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

      res.render('contact', {
         "title": "The News Paper - News & Lifestyle Magazine Template",
         "pageNameList": pageNames
      });
   });

   app.get('/single-post', (req, res, next) => {

      let latestComments = [
         {
            "name": "Comment the 1st",
            "date": "2019-04-14 7:45:00"
         },
         {
            "name": "2nd Comment",
            "date": "2019-04-14 9:10:00"
         },
         {
            "name": "a 3rd Comment",
            "date": "2019-04-14 8:05:00"
         },
         {
            "name": "May the 4th be with me",
            "date": "2019-04-14 7:25:00"
         },
         {
            "name": "Comment the 5th?",
            "date": "2019-04-14 6:58:00"
         },
         {
            "name": "End of the line buddy... 6th comment",
            "date": "2019-04-13 7:35:00"
         },
      ];

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

      res.render('single-post', {
         "title": "The News Paper - News & Lifestyle Magazine Template",
         "latestComments": latestComments,
         "pageNameList": pageNames
      });
   });
   
   // Used to try different ways of putting the different pages together
   app.get('/test', async (req, res, next) => {

      let db = await mysql.connect();
      let [categories] = await db.execute("SELECT * FROM categories");
      // let [articles] = await db.execute("SELECT * FROM articles WHERE fk_category_id = ?", [req.params.test_id]);
      db.end();

      res.render('test', {
         "title": "The Amazing Test Page",
         "categories": categories/* ,
         "articles": articles */
      });
   });

   // Now testing with urlParams
   app.get('/test/:test_id', async (req, res, next) => {

      // let db = await mysql.connect();
      // let [articles] = await db.execute("SELECT * FROM articles WHERE fk_category_id = ?", req.params.test_id);
      // db.end();

      // res.render('test', {
      //    "title": "The News Paper - News & Lifestyle Magazine Template"
      // });

      res.send(req.params.test_id);

   });

};