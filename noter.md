# Noter til Avanceret Frontend - The Awesome Newspage

* (**Q**) Hvad bruger vi til at køre serveren?\
(**A**) Node.js & express

* (**Q**) Hvordan kommunikerer vi med serveren?\
(**A**) Vi bruger et *route* til at fortælle serveren hvad den skal gøre.\
En route er en handling serveren udfører

* (**Q**) Hvordan giver vi et svar fra serveren til browseren?\
(**A**) med et ```res.send()``` hvor det svar vi giver til browseren bliver skrevet inde i parenteserne.

* (**Q**) Hvad bruger vi til at generere en side i browseren?\
(**A**) Til dette bruger vil ```res.render()```
```js
res.render("fil", [data])
```

* (**Q**) Hvordan sender vi et html document til browseren?\
(**A**) vi bruger en *view engine (EJS)*\
Sammen med vores *view engine* bruger partials der kan linkes til i din primære .ejs fil
```js
<%- include(partials/nav) %>
```
`<%  %>` Er et eksempel på et server-tag som vi kan bruge til at udføre JS på serveren uden at det kan ses af brugeren

* (**Q**) Hvor kan du se et ```console.log("hejsa")``` hvis det bliver udført i din routes.js?\
(**A**) I din terminal, hvor du også start din server

* (**Q**) Hvordan får vi data der ikke ligger på serveren?\
Vi har brugt en *database* der indeholder vores data

* (**Q**) Hvilken slags database bruger vi?\
(**A**) MySQL

* (**Q**) Hvilket sprog bruger vi når vi interagerer med databasen?\
(**A**) SQL (Structured Querry Language)
```sql
SELECT * FROM articles
```

* (**Q**) Hvad har vi brugt til at tage fat i data'en fra vores kontakt form?\
(**A**) BodyParser modulet. Uden dette bliver vi selv nødt til at parse vores data
```js
req.body.email
```
Det der står efter `req.body.` er bestemt af et elements name-attribut\
Så for at få fat i data'en fra vores email felt kommer feltet til at se sådan ud:
```html
<input type="email" name="email" id="email">
```

* (**Q**) Hvad er forskellen på `<%-  %>` & `<%=  %>`?\
(**A**) `<%=  %>` udskriver data på siden

* (**Q**) Hvad betyder `?` i javascript?\
`?` er en *ternary operator*; vi har brugt den til at forkorte en if-sætning
```js
typeof articles != "undefined" ? articles : "it don't exist boss";
```

* (**Q**) Hvis vi skal udskrive noget fra databasen og vi allerede har fat i en specifik tabel, hvordan tager vi fat i data'en?\
(**A**) Vi skal skrive vores tabel-navn fx. `articles` og derefter skrive kolonne-navnet på den kolonne vi vil have fat i fx. `articles.article_title`

