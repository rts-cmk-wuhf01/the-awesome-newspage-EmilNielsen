# Code examples

* **Using arrays in routes and .ejs**

```
app.get('/', (req, res, next) => {

      let products = [
         {
            "name": "product 1",
            "price": 100
         },
         {
            "name": "product 2",
            "price": 100
         },
         {
            "name": "product 3",
            "price": 100
         }
      ];

      res.render('home', {
         "title": "The News Paper - News & Lifestyle Magazine Template",
         "latestProducts": products
      });
   });
```

Once you've created the array and sent it with the render() you can use it in the .ejs file, in this case it would be the file home.ejs

```javascript
<% latestProducts.forEach(product => { %>
        <div>
            <h2><%= product.name %></h2>
            <p><%= product.price %></p>
        </div>
    <% }) %>
```