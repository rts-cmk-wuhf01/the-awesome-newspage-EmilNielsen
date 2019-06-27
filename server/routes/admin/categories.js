const mysql = require("../../config/mysql");
const date = require("date-and-time");
const body = require("body-parser");

//======================================================================

//Functions
async function getCategories() {
   let db = await mysql.connect();
   let [categories] = await db.execute("SELECT * FROM categories ORDER BY category_id ASC");
   db.end();
   return categories;
}

//======================================================================

module.exports = (app) => {

   
   // Shows the categories on the page
   app.get("/admin/categories", async (req, res, next) => {
      
      let categories = await getCategories();

      res.render("admin/categories", {
         "categories": categories
      });

   });
   //======================================================================

   // adds a new category to the list
   app.post("/admin/categories", async (req, res, next) => {

      
      let name = req.body.category_title;
      
      let return_message = [];
      if (name == undefined || name == "") {
         return_message.push("Name is missing");
      }
      
      if (return_message.length > 0) {
         console.log(messageText);
         res.render("admin/categories", {
            "return_message": return_message.join(", ")
         });
      } else {
         let db = await mysql.connect();
         let result = await db.execute(`
         INSERT INTO categories 
         (category_title) 
         VALUES 
         (?)`, [name]);
         db.end();
      }

      let categories = await getCategories();

      res.render("admin/categories", {
         "return_message": return_message.join(", "),
         "categories": categories
      });

   });

   app.get("/admin/categories/edit/:category_id", async (req, res, next) => {

      let categories = await getCategories();

      let db = await mysql.connect();
      let [selectedCategory] = await db.execute(`SELECT * FROM categories WHERE category_id = ?`, [req.params.category_id]);
      db.end();

      res.render("admin/categories", {
         "categories": categories,
         "selectedCategory": selectedCategory[0]
      });

   });

}; //End of module exports