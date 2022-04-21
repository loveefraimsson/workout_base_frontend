# WorkoutBase - Examensarbete

Detta är ett projekt som jag har gjort som mitt examensarbete. Som användare loggar man in på sin egen sida, där kan man välja att bläddra i en övningsdatabas, spara sina favoritövningar eller göra sitt eget träningsprogram. Dessa kan man sedan se från sin profilsida. Webbsidan har också en webshop där man kan lägga sina varor man vill köpa i varukorgen.

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

Backenden ligger live så den behöver inte göras något med för att köra projektet lokalt. Dock, väljer man att köra mot lokal backend så behöver man ändra så att alla fetch-länkar pekar lokalt. 

## TeknikStack (Ramverk, bibliotek och paket)
Jag har valt att arbeta med Node.js och då React.js och Express.js. Som CSS-ramverk valde jag att arbeta med Sass. 

Jag valde React för det känns modernt och bra att öva mer på då det används så pass mycket i arbetslivet idag. Jag kände inte att funktionaliteten i React begränsade mig på något sätt utan att det var ett lämligt val av ramverk för projektet. det är version 17.0.2 av React som används. Jag valde Express för att jag tycker att det var lämpligt som backend och uppfyllde dom kraven som jag hade på backenden. Sass har jag arbetat med en del innan, men jag har inte gjort det så mycket och det var något jag ville öva på och lära mig bättre inför framtiden, så därför valde jag att göra CSS:en i det.

Andra paket som jag har använt är Nodemon, Cors, CryptoJS och Html-react-parser.

Som databas använde jag MongoDB, också det för att jag tyckte att det passade bra med vad jag ville ha ut av en databas.

## API
API:et som används i projektet är: https://type.fit/api/quotes

## Media queries
```bash
400px --> Mobil
700px --> Surfplatta
960px --> Laptop
1200 --> Stor skärm
```
