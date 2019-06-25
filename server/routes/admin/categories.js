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
   /* app.post("/admin/categories", async (req, res, next) => {

      let name = req.body.name;

      let return_message = [];
      if (name == undefined || name == "") {
         return_message.push("Name is missing");
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

   }); */

}; //End of module exports