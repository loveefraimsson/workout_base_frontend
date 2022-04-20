# WorkoutBase - Examensarbete

Detta är ett projekt som jag har gjort som mitt examensarbete. Som användare loggar man in på sin egen sida, där kan man välja att bläddra i en övningsdatabas, spara sina favoritövningar eller göra sitt eget träningsprogram. Dessa kanman sedan se från sin profilsida. Webbsidan har också en webshop där man kan lägga sina varor man vill köpa i varukorgen.

## Bakgrund

Jag fick denna idé då jag själv är väldigt intresserad av träning och när jag var nybörjare var detta en sida jag gärna själv hade besökt.

## Live-version och backend

[Här kan du se webbsidan live](https://workout-base-frontend.vercel.app/)

[Här är backend-repot för projektet](https://github.com/loveefraimsson/workout_base_backend)


## Inloggningsuppgifter

För att logga in på sidan finns i nuläget två stycken användare som visar på att sidan är dynamisk. Man kan alltså i framtiden, om man skulle vilja, lägga till fler användare eller skapa en funktion för att lägga till nya användare.

```bash
Användare 1 användarnamn: Sanna
Användare 1 lösenord: kattenbus
```

```bash
Användare 2 användarnamn: Peter
Användare 2 lösenord: hundenbus
```

## För att köra projektet lokalt:

Klona ner repot för att få frontenden av applikationen. Kör följande kommandon i terminalen:

```bash
 npm install
 npm start
```
Backenden ligger live så den behöver inte göras något med för att köra projektet lokalt.

## Ramverk bibliotek och paket
Jag har använt mig av React.js, Express.js, MongoDB som databas och Node.js. Jag har även använt Sass för CSS.
Andra paket som jag har använt är nodemon, cors och html-react-parser.

## API
API:et som används i projektet är: https://type.fit/api/quotes

## Media queries
```bash
400px --> Mobil
700px --> Surfplatta
960px --> Laptop
1200 --> Stor skärm
```
