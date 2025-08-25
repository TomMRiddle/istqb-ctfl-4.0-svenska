### Nyckelord
acceptanstestning, black-box-testning, funktionstestning, icke-funktionell testning, integrationstestning, komponentintegrationstestning, komponenttestning, omtestning, regressionstestning, shift-left, systemintegrationstestning, systemtestning, testnivå, testobjekt, testtyp, underhållstestning, white-box-testning

### Utbildningsmål för Kapitel 2:

**2.1 Testning inom ramen för en programvaruutvecklingslivscykel**
*   FL-2.1.1 (K2) Förklara vilken inverkan den valda utvecklingslivscykeln för programvara har på testningen
*   FL-2.1.2 (K1) Komma ihåg bra testpraxis som gäller för alla utvecklingslivscykler för programvara
*   FL-2.1.3 (K1) Komma ihåg exempel på angreppssättet för test-first i utvecklingen
*   FL-2.1.4 (K2) Summera hur DevOps kan ha en påverkan på testningen
*   FL-2.1.5 (K2) Förklara shift-left
*   FL-2.1.6 (K2) Förklara hur retrospektiv kan användas som en mekanism för processförbättringar

**2.2 Testnivåer och testtyper**
*   FL-2.2.1 (K2) Särskilja de olika testnivåerna
*   FL-2.2.2 (K2) Särskilja de olika testtyperna
*   FL-2.2.3 (K2) Skilja på omtestning och regressionstestning

**2.3 Underhållstestning**
*   FL-2.3.1 (K2) Sammanfatta underhållstestning och dess utlösande faktorer

### 2.1. Testning inom ramen för en programvaruutvecklingslivscykel (SDLC)
En SDLC-modell är en abstrakt högnivå-representation av programvaruutvecklingsprocessen. Den definierar hur olika utvecklingsfaser och typer av aktiviteter som utförs inom denna process relaterar till varandra både logiskt och kronologiskt. Exempel på SDLC-modeller inkluderar sekventiella utvecklingsmodeller (t.ex. vattenfallsmodell, V-modell), iterativa utvecklingsmodeller (t.ex. spiralmodell, prototyping) och inkrementella utvecklingsmodeller (t.ex. Unified Process).

Vissa aktiviteter inom programvaruutvecklingsprocesser kan också beskrivas med mer detaljerade programvaruutvecklingsmetoder och agila praxis. Exempel är acceptanstestdriven utveckling (ATDD), beteendedriven utveckling (BDD), domändriven design (DDD), extreme programming (XP), funktionsdriven utveckling (FDD), Kanban, Lean IT, Scrum och testdriven utveckling (TDD).

#### 2.1.1. Programvaruutvecklingslivscykelns påverkan på testningen
Testning måste anpassas till SDLC för att lyckas. Valet av SDLC påverkar:
*   Omfattning och samordning av testaktiviteter (t.ex. testnivåer och testtyper)
*   Detaljnivå på testdokumentationen
*   Val av testteknik och testangreppssätt
*   Omfattning av testautomatisering
*   En testares roll och ansvar

I de inledande faserna i sekventiella utvecklingsmodeller deltar testare vanligtvis i kravgenomgångar, testanalys och testdesign. Den exekverbara koden skapas vanligtvis i de senare faserna, så därför kan dynamisk testning normalt inte utföras tidigt i SDLC.

I vissa iterativa och inkrementella utvecklingsmodeller antas det att varje iteration resulterar i en fungerande prototyp eller ett produktinkrement. Detta innebär att både statisk och dynamisk testning i varje iteration kan utföras på alla testnivåer. Frekventa leveranser av inkrement kräver snabb återkoppling och omfattande regressionstestning.

Agil programvaruutveckling förutsätter att förändringar kan ske under hela projektet. Därför föredras lättviktsdokumentation för arbetsprodukter och omfattande testautomatisering, detta för att göra regressionstestning enklare. Dessutom tenderar de flesta manuella tester att utföras med erfarenhetsbaserade testtekniker (se kapitel 4.4) som inte kräver att omfattande testanalys och design genomförts innan.

#### 2.1.2. Programvaruutvecklingslivscykeln och bra testpraxis
Bra testpraxis, oberoende av den valda SDLC-modellen, inkluderar följande:
*   För varje programvaruutvecklingsaktivitet finns en motsvarande testaktivitet, så att alla utvecklingsaktiviteter är föremål för kvalitetskontroll
*   Olika testnivåer (se kapitel 2.2.1) har specifika och olika testmål, vilket gör att testningen blir tillräckligt omfattande samtidigt som man undviker redundans
*   Testanalys och design för en given testnivå påbörjas under motsvarande utvecklingsfas av SDLC, så att testning kan följa principen om tidig testning (se kapitel 1.3)
*   Testare är involverade i att granska arbetsprodukter så snart utkast finns tillgängligt, så att tidig testning och felupptäckt kan stödja strategin för shift-left (se kapitel 2.1.5)

#### 2.1.3. Testning som en drivkraft för programvaruutveckling
TDD, ATDD och BDD är liknande angreppssätt för utvecklingen, där tester definieras som ett sätt att styra utvecklingen. Dessa angreppssätt realiserar principen om tidig testning (se kapitel 1.3) och följer shift-left (se kapitel 2.1.5), eftersom testerna definieras innan koden skrivs. De stöder en iterativ utvecklingsmodell. Dessa angreppssätt kännetecknas enligt följande:

**Testdriven utveckling (TDD):**
*   Styr kodningen genom testfall (istället för omfattande programvarudesign) (Beck 2003)
*   Tester skrivs först, sedan skrivs koden för att uppfylla testerna, och sedan omstruktureras testerna och koden

**Acceptanstestdriven utveckling (ATDD) (se kapitel 4.5.3):**
*   Tester härleds från acceptanskriterier som en del av systemdesignprocessen (Gärtner 2011)
*   Tester skrivs innan den del av applikationen som ska uppfylla testerna utvecklas

**Beteendedriven utveckling (BDD):**
*   Uttrycker det önskade beteendet hos en applikation med hjälp av testfall skrivna i en enkel form av naturligt språk som är lätt att förstå av intressenter – vanligtvis enligt formatet Given/When/Then. (Chelimsky 2010)
*   Testfall ska sedan automatiskt översättas till exekverbara tester

För alla ovanstående angreppssätt gäller att testfallen kan bibehållas som automatiserade testfall för att säkerställa kodkvaliteten vid framtida anpassningar/omstruktureringar.

#### 2.1.4. DevOps och testning
DevOps är ett organisatoriskt angreppssätt som syftar till att skapa synergi genom att få utveckling (inklusive testning) och drift att samverka för att uppnå gemensamma mål. DevOps kräver en kulturell förändring inom en organisation för att överbrygga klyftorna mellan utveckling (inklusive testning) och drift samtidigt som deras funktioner behandlas lika. DevOps främjar teamautonomi, snabb återkoppling, integrerade verktygskedjor och teknisk praxis som kontinuerlig integration (CI) och kontinuerlig leverans (CD). Detta gör det möjligt för teamen att bygga, testa och releasa högkvalitativ kod snabbare genom en DevOps-leveranspipeline (Kim 2016).

Ur ett testperspektiv är några av fördelarna med DevOps enligt följande:
*   Snabb återkoppling på kodens kvalitet och om ändringar påverkar befintlig kod negativt
*   CI främjar shift-left vid testningen (se kapitel 2.1.5) genom att uppmuntra utvecklare att tillgängliggöra sin högkvalitativa kod tillsammans med komponenttester och statisk analys
*   Automatiserade processer, som de i CI/CD, främjar etableringen av stabila testmiljöer
*   Förståelsen för icke-funktionella kvalitetsegenskaper, såsom prestanda, effektivitet och tillförlitlighet, ökar
*   Automatisering genom en leveranspipeline minskar behovet av upprepade manuella tester
*   Risken vid regression minimeras på grund av omfattningen av automatiserade regressionstester

DevOps är inte utan sina risker och utmaningar, som omfattar:
*   DevOps leveranspipeline måste definieras och upprättas
*   CI/CD-verktyg måste introduceras och underhållas
*   Testautomatisering kräver ytterligare resurser och kan vara svår att etablera och underhålla

Även om DevOps kommer med en hög nivå av automatiserad testning, så kommer manuell testning – särskilt ur användarens perspektiv – fortfarande att behövas.

#### 2.1.5. Shift-left
Principen för tidig testning (se kapitel 1.3) benämns ibland som shift-left eftersom det är ett angreppssätt där testning genomförs tidigare i SDLC. Shift-left föreslår som bas att testning ska göras tidigare (dvs. inte vänta på att kod ska implementeras eller på att komponenter ska integreras), men det betyder inte att testning senare i SDLC ska negligeras.

Det finns några bra metoder som illustrerar hur man uppnår "shift-left" i testningen:
*   Granska specifikationer från testarnas perspektiv. Dessa granskningsaktiviteter hittar ofta potentiella defekter som oklarheter, ofullständigheter och inkonsekvenser
*   Skriva testfall innan koden skrivs och exekvera koden på en testexekveringsplattform under kodimplementeringen
*   Använda kontinuerlig integration (CI), eller ännu bättre kontinuerlig leverans (CD), eftersom de levererar snabb återkoppling och automatiserade komponenttester som följer med källkoden när den skickas till en koddatabas
*   Slutföra statisk analys av källkoden innan dynamisk testning, eller som en del av en automatiserad process
*   Genomföra icke-funktionella tester med början på komponenttestnivå, där så är möjligt. Detta är en form av shift-left eftersom dessa icke-funktionella testtyper tenderar att utföras senare i SDLC när ett komplett system och en representativ testmiljö är tillgänglig

Shift-left kan resultera i mer utbildning, arbetsinsats och/eller kostnader tidigare i processen men förväntas spara insatser och/eller kostnader senare i processen.

För att genomföra shift-left är det viktigt att intressenterna övertygas och tror på detta koncept.

#### 2.1.6. Retrospektiver och processförbättringar
Retrospektiver hålls ofta i slutet av ett projekt eller en iteration, vid en release-milstolpe men kan också hållas vid behov. Timing och organisation av retrospektiverna beror på den SDLC-modell som följs. I dessa möten diskuterar deltagarna (inte bara testare, utan även t.ex. utvecklare, arkitekter, produktägare, företagsanalytiker) följande:
*   Vad var framgångsrikt och bör bibehållas?
*   Vad var inte framgångsrikt och vad kan förbättras?
*   Hur införlivar vi förbättringarna och bibehåller effekten av dem framöver?

Resultaten ska dokumenteras och är normalt en del av den sammanfattande testrapporten (se kapitel 5.3.2). Retrospektiver är avgörande för ett framgångsrikt genomförande av ständiga förbättringar och det är viktigt att alla rekommenderade förbättringar följs upp.

Typiska fördelar med retrospektiv för testningen inkluderar:
*   Ökad testeffektivitet (t.ex. genom att implementera processförbättringsförslag)
*   Ökad kvalitet på testvaran (t.ex. genom att gemensamt granska testprocesserna)
*   Förstärkta relationerna i teamet och lärande (t.ex. som ett resultat av möjligheten att ta upp frågor och föreslå förbättringspunkter)
*   Förbättrad kvalitet på testbasen (eftersom brister i t.ex. kravens omfattning och kvalitet skulle kunna åtgärdas och lösas)
*   Bättre samarbete mellan utveckling och testning (bland annat genom att samarbetet regelbundet ses över och optimeras)

### 2.2. Testnivåer och testtyper
Testnivåer är grupper av testaktiviteter som organiseras och hanteras tillsammans. Varje testnivå är en instans av testprocessen, som utförs i relation till programvaran i en given utvecklingsfas, från enskilda komponenter till kompletta system eller, i förekommande fall, system av system.

Testnivåer är relaterade till andra aktiviteter inom SDLC. I sekventiella SDLC-modeller är testnivåerna ofta definierade så att avslutskriterierna för en nivå är del av startkriterierna för nästa nivå. I vissa iterativa modeller kanske detta inte gäller. Utvecklingsaktiviteter kan sträcka sig över flera testnivåer. Testnivåer kan tidsmässigt överlappa varandra.

Testtyper är grupper av testaktiviteter relaterade till specifika kvalitetsegenskaper och de flesta av dessa testaktiviteter kan utföras på varje testnivå.

#### 2.2.1. Testnivåer
I denna kursplan beskrivs följande fem testnivåer:
*   **Komponenttestning** (även känd som enhetstestning) fokuserar på att testa isolerade komponenter. Den kräver ofta specifikt stöd, som testexekveringsplattform eller enhetstestramverk. Komponenttestning utförs normalt av utvecklare i sina utvecklingsmiljöer.
*   **Komponentintegrationstestning** (även känd som enhetsintegrationstestning) fokuserar på att testa gränssnitt och interaktioner mellan komponenter. Komponentintegrationstestning är starkt beroende av integrationsstrategin som bottom-up, top-down eller big bang.
*   **Systemtestning** fokuserar på det övergripande beteendet och förmågan hos ett helt system eller produkt, ofta med testning av end-to-end-funktionalitet och icke-funktionell testning av kvalitetsegenskaper. För vissa icke-funktionella kvalitetsegenskaper är det att föredra att testa dem i ett komplett system i en representativ testmiljö (t.ex. användbarhet). Det är också möjligt att använda simuleringar av delsystem. Systemtestning kan genomföras av ett oberoende testteam och är relaterat till specifikationer för systemet.
*   **Systemintegrationstestning** fokuserar på att testa gränssnitten mellan det system som testas och andra system eller externa tjänster. Systemintegrationstestning kräver lämpliga testmiljöer som helst liknar den operativa miljön.
*   **Acceptanstestning** fokuserar på validering och på att påvisa att systemet är redo för driftsättning, vilket innebär att systemet uppfyller användarens affärsbehov. Helst bör acceptanstestning utföras av de kommande användarna. De huvudsakliga formerna av acceptanstestning är användaracceptanstestning (UAT), driftsacceptanstestning, kontraktsacceptanstestning, acceptanstestning av förordningar samt alfa- och betatestning.

Testnivåer utmärks av följande (inte kompletta) lista över attribut, i syfte att undvika överlappning av testaktiviteter:
*   Testobjekt
*   Testmål
*   Testbas
*   Defekter och felsymptom
*   Angreppssätt och ansvar

#### 2.2.2. Testtyper
Det finns många testtyper som kan användas i projekt. I denna kursplan tas följande fyra testtyper upp:

**Funktionstestning** utvärderar de funktioner som en komponent eller ett system ska utföra. Funktionerna är "vad" testobjektet ska göra. Huvudsyftet med funktionstestningen är att kontrollera funktionell kompletthet, funktionell korrekthet och funktionell ändamålsenlighet.

**Icke-funktionell testning** utvärderar andra attribut än funktionella egenskaper hos en komponent eller ett system. Icke-funktionell testning är testning av "hur väl systemet beter sig". Huvudsyftet med icke-funktionell testning är att kontrollera icke-funktionella kvalitetsegenskaper. ISO/IEC 25010-standarden tillhandahåller följande klassificering av icke-funktionella kvalitetsegenskaper:
*   Prestandaeffektivitet
*   Kompatibilitet
*   Användbarhet (interaktionsförmåga)
*   Tillförlitlighet
*   Säkerhet
*   Underhållbarhet
*   Portabilitet (flexibilitet)
*   Funktionssäkerhet

Det är ibland lämpligt att börja med icke-funktionell testning tidigt i SDLC (t.ex. som en del av granskningar eller komponenttestning). Många icke-funktionella tester härleds från funktionstesterna eftersom de testar samma funktion, men fokuserar då på icke-funktionella egenskaper när funktionen exekveras (t.ex. att kontrollera att en funktion utförs inom en angiven tid, eller att en funktion kan överföras till en ny plattform). En sen upptäckt av icke-funktionella defekter kan utgöra ett allvarligt hot mot ett projekts framgång. Icke-funktionell testning behöver ibland en mycket specifik testmiljö, till exempel ett användbarhetslabb för användbarhetstestning.

**Black-box-testning** (se kapitel 4.2) är specifikationsbaserad och härleder tester från dokumentation som inte är relaterat till testobjektets interna struktur. Huvudsyftet med black-box-testning är att utvärdera systemets beteende mot dess specifikationer.

**White-box-testning** (se kapitel 4.3) är strukturbaserad och härleder tester från systemets implementering eller interna struktur (t.ex. kod, arkitektur, arbetsflöden och dataflöden). Huvudsyftet med white-box-testning är att med tester täcka den underliggande strukturen till en acceptabel nivå.

Alla de fyra ovannämnda testtyperna kan tillämpas på alla testnivåer, även om fokus kommer att skilja sig mellan nivåerna. Olika testtekniker kan användas för att härleda testvillkoren och testfall för alla nämnda testtyper.

#### 2.2.3. Omtestning och regressionstestning
Ändringar görs vanligtvis i en komponent eller i ett system för att förbättra det genom att lägga till en ny funktion eller genom att åtgärda en defekt. Testning bör då också omfatta omtestning och regressionstestning.

**Omtestning** bekräftar att ett ursprungligt fel har åtgärdats. Beroende på risken kan man testa den korrigerade versionen av programvaran på flera sätt, inklusive:
*   exekvera tester som tidigare har misslyckats på grund av defekten, men även
*   lägga till nya testfall för att täcka eventuella ändringar som behövdes för att åtgärda defekten

Men när tiden eller pengarna är knappa för att åtgärda defekter kan omtestning begränsas till att helt enkelt utföra de teststeg som ska återskapa felsymptomen som orsakades av defekten för att kontrollera att felet inte längre finns.

**Regressionstestning** bekräftar att inga negativa konsekvenser har orsakats av en förändring, inklusive den rättning som redan har omtestats. Dessa negativa konsekvenser kan påverka samma komponent där ändringen gjordes, andra komponenter i samma system eller till och med andra anslutna system. Regressionstestning behöver inte vara begränsad till själva testobjektet utan kan också relateras till miljön. Det är lämpligt att först göra en påverkansanalys för att visa vilka delar av programvaran som påverkats och för att förstå omfattningen av regressionstestningen.

Regressionstestsviter körs många gånger och i allmänhet kommer antalet regressionstestfall att öka med varje iteration eller release. Regressionstestning är därför en stark kandidat för automatisering. Testautomatisering bör starta tidigt i projektet. Där CI används, som i DevOps (se kapitel 2.1.4), är det också god praxis att inkludera automatiserade regressionstester. Beroende på situationen kan regressionstesterna vara på olika testnivåer.

Omtestning och/eller regressionstestning av testobjektet behövs på alla testnivåer när defekter har åtgärdats och/eller ändringar gjorts på dessa testnivåer.

### 2.3. Underhållstestning
Det finns olika kategorier av underhåll, det kan vara korrigeringar, anpassningar till förändringar i miljön och förbättringar av prestanda eller underhållbarhet (se ISO/IEC 14764 för detaljer). Därför kan underhåll omfatta planerade releaser/driftsättning och oplanerade releaser/driftsättningar (hot fixes).

En påverkansanalys kan göras först för att avgöra om förändringen ska genomföras, baserat på de potentiella konsekvenserna i andra delar av systemet. Att testa ändringar i ett driftsatt system innefattar både att utvärdera resultatet av implementeringen av förändringen och att kontrollera eventuella regressioner i de delar av systemet som är oförändrade (vilket vanligtvis är större delen av systemet).

Omfattningen av underhållstestning beror vanligtvis på:
*   Graden av risk vid förändringen
*   Storleken på det befintliga systemet
*   Storleken på förändringen

Utlösande faktorer för underhåll och underhållstestning kan klassificeras enligt följande:
*   **Ändringar**, såsom planerade förbättringar (d.v.s. releasebaserade), korrigerande ändringar eller snabbkorrigeringar (hot fixes).
*   **Uppgradering eller migrering** av den operativa miljön, till exempel från en plattform till en annan, kan kräva testning kopplat till den nya miljön såväl som av den ändrade programvaran, eller testning av datakonvertering när data från en annan applikation migreras in i systemet som ska underhållas.
*   **Avveckling**, till exempel när en applikation når slutet av sin livslängd. När ett system är avvecklat kan detta kräva testning av dataarkivering om långa datalagringsperioder krävs. Testning av återställnings- och hämtningsprocedurer efter arkivering kan också behövas om vissa data senare skulle behövas under arkiveringsperioden.
