# Noter til Avanceret Frontend - The Awesome Newspage

* (Q) Hvad bruger vi til at køre serveren?\
(A) Node.js & express

* (Q) Hvordan kommunikerer vi med serveren?\
(A) Vi bruger et *route* til at fortælle serveren hvad den skal gøre.\
En route er en handling serveren udfører

* (Q) Hvordan giver vi et svar fra serveren til browseren?\
(A) med et ```res.send()``` hvor det svar vi giver til browseren bliver skrevet inde i parenteserne.

* (Q) Hvad bruger vi til at generere en side i browseren?\
(A) Til dette bruger vil ```res.render()```
```
res.render("fil", [data])
```

* (Q) Hvordan sender vi et html document til browseren?\
(A) vi bruger en *view engine (EJS)*\
Sammen med vores *view engine* bruger partials der kan linkes til i din primære .ejs fil
```
<%- include(partials/nav) %>
```

* (Q) 