# Noter til *Date and Time* modulet

For at kunne skrive en dato ud på siden skal vi bruge følgende kode:

```javascript
dateAndTime.format(now, "hh:mm A, MMMM dd YYYY");
```
*Now* delen af koden overfor er en dato man selv definerer \
Dette gøres således:

```javascript
let now = new Date("2019-04-01");
```

Den sidste del af koden, *"hh:mm A, MMMM dd YYYY"* fortæller **dateAndTime modulet** at det skal formatere datoen på en specifik måde. For mere info om hvordan man formaterer datoer med dette modul klik [Her](https://www.npmjs.com/package/date-and-time) og rul ned til *API* delen af siden.