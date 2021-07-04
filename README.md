# Testprojekt med Vite och Preact

### Komponenter och verktyg
* Yarn
* Vite
  * esbuild
* Preact
* Node.js 14.* LTS

## Varför?
Kul att testa men också bra att ha lite nya verktyga att använda om det blir något nytt projekt snart. Kanske t.ex. ett rapportverktyg.

### Varför Yarn?
Känns snabbare, stabilare och modernare än npm. Jag gjorde också ett försök med [pnpm](https://pnpm.io/) som också verkade prestera bra men sedan blev det yarn i alla fall.

### Varför Vite?
[Vite](https://vitejs.dev/) verkar snabbt och det var sjukt enkelt att sätta upp. Det fanns [scaffolding för Preact](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) så det hela gick på några minuter. Ett definitivt lyft jämfört med webpack och sånt. Dessutom känns watch/reload funktionen _mycket_ snabbare än det mesta jag testat.

### Varför Preact?
[Preact](https://preactjs.com/) har nästan allt man vill ha från React men det är kompakt och snabbt. Enkelt att komma igång med om man har reactvana.
Jag tittade på [Solid.js](https://www.solidjs.com/) också men vågade inte. Det verkar vara väldigt performance-orienterat. Kanske inte något jag behöver.