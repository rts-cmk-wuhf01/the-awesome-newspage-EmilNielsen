const mysql = require("../config/mysql");
const date = require("date-and-time");
const body = require("body-parser");

//Functions
async function getCategories() {
   let db = await mysql.connect();
   let [categories] = await db.execute("SELECT * FROM categories");
   db.end();
   return categories;
}

//======================================================================

module.exports = (app) => {

   //Home
   app.get('/', async (req, res, next) => {

      let db = await mysql.connect();
      // let [categories] = await db.execute("SELECT * FROM categories");
      let categories = await getCategories();

      let [latestPosts] = await db.execute(`
      SELECT 
            category_id
         , category_title
         , article_id
         , article_title
         , article_image
         , article_postdate
      FROM categories 
      LEFT OUTER JOIN articles ON fk_category_id = category_id
      WHERE article_id = (
            SELECT article_id 
            FROM articles 
            WHERE fk_category_id = category_id 
            ORDER BY article_postdate DESC 
            LIMIT 1)
      ORDER BY article_postdate DESC`);
      db.end();
      console.log(categories);

      res.render('home', {
         "title": "The News Paper - News & Lifestyle Magazine Template",
         "pageNameList": categories,
         "latestComments": latestPosts
      });
   });
   //======================================================================
   
   //Single category
   app.get('/categories/:category_id', async (req, res, next) => {

      let categories = await getCategories();

      let db = await mysql.connect();
      let [articlesFromDB] = await db.execute(`
      SELECT
         category_id
         , category_title
         , article_id
         , article_title
         , article_text
         , article_image
         , article_likes
         , author_id
         , author_name
         , (SELECT COUNT(comment_id)
            FROM comments
            WHERE fk_article_id = article_id) AS article_comments
      FROM articles
      INNER JOIN categories ON category_id = fk_category_id
      INNER JOIN authors ON author_id = fk_author_id
      WHERE fk_category_id = ?`, [req.params.category_id])
      db.end();

      res.render("single-category", {
         "title": "The News Paper - News & Lifestyle Magazine Template",
         "pageNameList": categories,
         "articles": articlesFromDB
      });

   });
   //======================================================================

   //All categories
   // ==> Needs latest comments from DB instead of js objects <==
   app.get('/categories', (req, res, next) => {

      let latestComments = [{
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

      let pageNames = [{
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
         },
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
   //======================================================================

   //About
   // ==> Needs categories from DB instead of js objects <==
   app.get('/about', (req, res, next) => {

      let pageNames = [{
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
         },
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
   //======================================================================

   //Single article
   // ==> Needs categories from DB instead of js objects <==
   app.get('/single-post', (req, res, next) => {

      let latestComments = [{
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

      let pageNames = [{
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
         },
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
   //======================================================================

   //Contact
   app.get('/contact', (req, res, next) => {

      // let pageNames = await getCategories();

      let pageNames = [{
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
         },
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
   //======================================================================

   //Contact validation
   app.post("/contact", async (req, res, next) => {

      //data from form
      let name = req.body.name;
      let email = req.body.email;
      let subject = req.body.subject;
      let messageText = req.body.text;
      let contactDate = new Date();

      let return_message = [];
      if (name == undefined || name == "") {
         return_message.push("Name is missing");
      }
      if (email == undefined || email == "") {
         return_message.push("Email is missing");
      }
      if (subject == undefined || subject == "") {
         return_message.push("Subject is missing");
      }
      if (messageText == undefined || messageText == "") {
         return_message.push("Message-text is missing");
      }

      if (return_message.length > 0) {
         console.log(messageText);
         res.render("contact", {
            "return_message": return_message.join(", ")
         });
      } else {
         let db = await mysql.connect();
         let result = await db.execute(`
   INSERT INTO messages 
      (message_name, message_email, message_subject, message_text, message_date) 
   VALUES 
      (?,?,?,?,?)`, [name, email, subject, messageText, contactDate]);
         db.end();
      }
      res.render("contact", {
         "return_message": return_message.join(", ")
      });
   });
   //======================================================================

   //Nyt route til /howdy
   app.get("/howdy", (req, res, next) => {
      //res.send() sender det der bliver lagt ind i () til siden og viser det uden noget andet
      res.send("Howdy pardner");
   });

}; //End of module exports