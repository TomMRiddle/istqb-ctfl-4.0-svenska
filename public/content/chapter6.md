### Nyckelord
testautomatisering

### Utbildningsmål för kapitel 6:

**6.1 Verktygsstöd för testning**
*   FL-6.1.1 (K2) Förklara hur olika typer av testverktyg stödjer testning

**6.2 Fördelar och risker med testautomatisering**
*   FL-6.2.1 (K1) Komma ihåg fördelar och risker med testautomatisering

### 6.1. Verktygsstöd för testning
Testverktyg stödjer och underlättar många testaktiviteter. Exempel inkluderar, men är inte begränsade till:
*   **Testhanteringsverktyg** - ökar testprocessens effektivitet genom att underlätta hanteringen av SDLC, krav, tester, defekter och konfiguration
*   **Verktyg för statisk testning** - stödjer testaren i att utföra granskningar och i statisk analys
*   **Testdesign- och testimplementationsverktyg** – underlättar generering av testfall, testdata och testprocedurer
*   **Testexekverings- och testtäckningsverktyg** - underlättar automatiserad testexekvering och täckningsmätning
*   **Verktyg för icke-funktionell testning** – tillåter testaren att genomföra icke-funktionella tester som är svåra eller omöjliga att utföra manuellt
*   **DevOps-verktyg** – stödjer DevOps leveranspipeline, uppföljning av aktiviteter i ett arbetsflöde, automatiserade byggprocesser, CI/CD
*   **Samarbetsverktyg** – underlätta kommunikation
*   **Verktyg som stöder skalbarhet och standardisering av driftsättning** (t.ex. virtuella maskiner, verktyg för att kapsla in kod i containers)
*   **Alla andra verktyg som stödjer vid testning** (ett kalkylblad är t.ex. ett testverktyg i testsammanhang)

### 6.2. Fördelar och risker med testautomatisering
Att bara skaffa ett verktyg garanterar inte framgång. Varje nytt verktyg kommer att kräva ansträngningar för att uppnå verkliga och varaktiga fördelar (t.ex. verktygsintroduktion, underhåll och utbildning). Det finns också vissa risker som behöver analyseras och hanteras.

Potentiella fördelar med att använda testautomatisering inkluderar:
*   Tidsbesparing genom att minska manuellt repetitivt arbete (t.ex. exekvera regressionstester, mata in samma testdata igen, jämföra förväntade resultat med faktiska resultat och jämföra med kodningsstandarder)
*   Förebyggande av enkla mänskliga misstag genom större konsistens och repeterbarhet (t.ex. att testfall härleds konsekvent från krav, testdata skapas på ett systematiskt sätt och tester exekveras av ett verktyg i samma ordning med samma frekvens)
*   Mer objektiv bedömning (t.ex. täckning) och tillhandahållande av åtgärder som är för komplicerade för människor att avgöra
*   Enklare åtkomst till information om testning för att stödja testhantering och testrapportering (t.ex. statistik, grafer och aggregerat data om teststatus, felfrekvens och exekveringstid)
*   Reducerade testexekveringstider för att möjliggöra tidigare defektdetektering, snabbare återkoppling och snabbare tid för att nå ut till marknaden
*   Mer tid för testare att designa nya, djupare och mer effektiva tester

Potentiella risker med att använda testautomatisering inkluderar:
*   Orealistiska förväntningar om fördelarna med ett verktyg (inklusive funktionalitet och användarvänlighet)
*   Felaktiga uppskattningar av tid, kostnader, arbete som krävs för att introducera ett verktyg, underhålla testskript och ändra den befintliga manuella testprocessen
*   Att använda ett testverktyg när manuell testning är lämpligare
*   Att förlita sig för mycket på ett verktyg, t.ex. ignorera behovet av mänskligt kritiskt tänkande
*   Beroendet av verktygsleverantören som kan gå i konkurs, kan avveckla verktyget, sälja verktyget till en annan leverantör eller ge dålig support (t.ex. svar på frågor, uppgraderingar och felkorrigeringar)
*   Att använda en öppen källkodsprogramvara som kan överges vilket innebär att inga ytterligare uppdateringar blir tillgängliga, eller att dess interna komponenter kan kräva relativt frekventa uppdateringar som vid en vidareutveckling
*   Automatiseringsverktyget är inte kompatibelt med utvecklingsplattformen
*   Att välja ett olämpligt verktyg som inte överensstämde med regulatoriska krav och/eller standarder för funktionssäkerhet
