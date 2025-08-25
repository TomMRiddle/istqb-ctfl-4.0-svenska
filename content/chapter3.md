### Nyckelord
avvikelse, dynamisk testning, formell granskning, genomgång, granskning, informell granskning, inspektion, statisk analys, statisk testning, teknisk granskning

### Utbildningsmål för kapitel 3:

**3.1 Grunder för statisk testning**
*   FL-3.1.1 (K1) Identifiera de arbetsprodukter som kan granskas med statisk testning
*   FL-3.1.2 (K2) Beskriva värdet med statisk testning
*   FL-3.1.3 (K2) Jämföra likheter och skillnader mellan statisk och dynamisk testning

**3.2 Granskningsprocess och återkoppling**
*   FL-3.2.1 (K1) Identifiera fördelarna med tidig och frekvent återkoppling från intressenter
*   FL-3.2.2 (K2) Summera aktiviteterna i granskningsprocessen
*   FL-3.2.3 (K1) Känna igen vilka ansvarsområden de viktigaste rollerna har vid granskningar
*   FL-3.2.4 (K2) Jämföra likheter och skillnader mellan de olika granskningstyperna
*   FL-3.2.5 (K1) Känna igen de faktorer som bidrar till en framgångsrik granskning

### 3.1. Grunder för statisk testning
I motsats till dynamisk testning behöver man inte exekvera programvaran vid statisk testning. Kod, processbeskrivning, systemarkitekturspecifikation eller andra arbetsprodukter utvärderas genom manuell kontroll (t.ex. granskning) eller med hjälp av ett verktyg (t.ex. statisk analys).

Testmålsättningen är att förbättra kvaliteten, upptäcka defekter och bedöma egenskaper som läsbarhet, fullständighet, korrekthet, testbarhet och konsistens. Statisk testning kan användas både vid verifiering och validering.

Testare, verksamhetsrepresentanter (produktägare, verksamhetsanalytiker etc.) och utvecklare samarbetar under exempelkartläggningar, kollaborativt skrivande av användarberättelser och förfiningssessioner av backloggen för att säkerställa att användarberättelser och relaterade arbetsprodukter uppfyller definierade kriterier, t.ex. Definition of Ready (se kapitel 5.1.3).

Granskningstekniker kan användas för att säkerställa att användarberättelser är fullständiga och begripliga och att de inkluderar testbara acceptanskriterier. Genom att ställa rätt frågor kan testare utforska, utmana och hjälpa till att förbättra de föreslagna användarberättelserna.

Statisk analys kan identifiera problem tidigare än dynamisk testning och kräver ofta en mindre arbetsinsats eftersom inga testfall behövs och man vanligtvis använder verktyg (se kapitel 6). Statisk analys är ofta en del av ett CI-ramverk (se kapitel 2.1.4). Även om statisk analys till stor del används för att upptäcka specifika defekter i koden, så kan den också användas för att utvärdera underhållbarhet och säkerhet. Stavningskontroll och utvärdering av läsbarheten är andra exempel på statiska analysverktyg.

#### 3.1.1. Arbetsprodukter som kan utvärderas med statisk testning
Nästan alla arbetsprodukter kan utvärderas med statisk testning. Som exempel kan nämnas kravspecifikationsdokument, källkod, testplaner, testfall, produktbacklog, testcharter, projektdokumentation, avtal och modeller.

Varje arbetsprodukt som kan läsas och förstås kan bli föremål för en granskning. Men för statisk analys behöver arbetsprodukterna ha en struktur mot vilken de kan kontrolleras (t.ex. modeller, kod eller text med en formell syntax).

Arbetsprodukter som inte är lämpliga för statisk testning är sådana som är svåra att tolka av människor och som inte bör analyseras med verktyg (t.ex. exekverbar kod från tredje part på grund av juridiska skäl).

#### 3.1.2. Värdet med statisk testning
Statisk testning kan upptäcka defekter i de tidigaste faserna av SDLC, vilket uppfyller principen om tidig testning (se kapitel 1.3). Statisk testning kan också identifiera defekter som inte kan upptäckas genom dynamisk testning (t.ex. oåtkomlig kod, designmönster som inte implementeras som önskat, defekter i icke exekverbara arbetsprodukter).

Statisk testning möjliggör utvärdering av kvaliteten på arbetsprodukterna och att bygga förtroende för dem. Genom att verifiera de dokumenterade kraven kan intressenterna försäkra sig om att dessa krav beskriver deras faktiska behov. Eftersom statisk testning kan utföras tidigt i SDLC, kan en gemensam förståelse skapas mellan de inblandade intressenterna. Kommunikationen förbättras också mellan dessa. Av den anledningen rekommenderas det att engagera en bred mångfald av intressenter i statisk testning.

Även om granskningar kan vara kostsamma att genomföra är de övergripande projektkostnaderna vanligtvis mycket lägre än när inga granskningar utförs, eftersom mindre tid och arbete behöver läggas på att åtgärda defekter senare i projektet.

Vissa defekter i koden kan upptäckas mer effektivt med statisk analys än vid dynamisk testning, vilket vanligtvis resulterar i både färre defekter i koden och lägre total utvecklingsinsats.

#### 3.1.3. Skillnader mellan statisk och dynamisk testning
Statisk testning och dynamisk testning kompletterar varandra. De har liknande syften, som att stödja upptäckten av defekter i arbetsprodukter (se kapitel 1.1.1), men det finns också vissa skillnader, som:
*   Statisk och dynamisk testning (med analys av felsymptom) kan båda leda till upptäckt av defekter, men det finns vissa defekttyper som endast kan hittas genom antingen statisk eller dynamisk testning.
*   Statisk testning upptäcker defekter direkt, medan dynamisk testning upptäcker felsymptom från vilka de orsakande defekterna härleds genom efterföljande analys
*   Statisk testning kan lättare upptäcka defekter som ligger i kodgrenar som sällan exekveras eller är svåra att nå med dynamisk testning
*   Statisk testning kan tillämpas på icke-exekverbara arbetsprodukter, medan dynamisk testning endast kan tillämpas på exekverbara arbetsprodukter
*   Statisk testning kan användas för att mäta kvalitetsegenskaper som inte är beroende av att exekvera koden (t.ex. underhållbarhet) medan dynamisk testning kan användas för att mäta kvalitetsegenskaper som är beroende av exekvering av kod (t.ex. prestandaeffektivitet)

Typiska defekter som är lättare och/eller billigare att hitta genom statisk testning inkluderar:
*   Defekter i krav (t.ex. inkonsekvenser, tvetydigheter, motsägelser, utelämnanden, felaktigheter, dubbletter)
*   Designfel (t.ex. ineffektiva databasstrukturer, dålig modularisering)
*   Vissa typer av koddefekter (t.ex. variabler med odefinierade värden, odeklarerade variabler, oåtkomlig eller duplicerad kod, överdriven kodkomplexitet)
*   Avvikelser från standarder (t.ex. bristande efterlevnad av namnkonventioner i kodningsstandarder)
*   Felaktiga gränssnittsspecifikationer (t.ex. felaktigt antal, typ eller ordning av parametrar)
*   Specifika typer av säkerhetsbrister (t.ex. buffertöverskridning)
*   Luckor eller felaktigheter i täckning av testbasen (t.ex. saknade testfall för ett acceptanskriterium)

### 3.2. Granskningsprocess och återkoppling

#### 3.2.1. Fördelar med tidiga och frekventa återkopplingar från intressenter
Tidig och frekvent återkoppling möjliggör tidig kommunikation om potentiella kvalitetsproblem. Om det finns lite engagemang från intressenterna under SDLC kanske produkten som utvecklas inte uppfyller intressentens ursprungliga eller nuvarande vision. Ett misslyckande med att leverera vad intressenten önskar kan resultera i kostsamma omarbetningar, missade deadlines, skuldbeläggningar och kan till och med leda till fullständigt projektmisslyckande.

Frekventa återkopplingar från intressenter genom hela SDLC kan förhindra missförstånd om krav och säkerställa att kravändringar förstås och implementeras tidigare. Detta hjälper utvecklingsteamet att förbättra förståelsen för vad de bygger. Det låter dem fokusera på de funktioner som ger störst värde för intressenterna och som har den mest positiva inverkan på identifierade risker.

#### 3.2.2. Aktiviteter i granskningsprocessen
ISO/IEC 20246-standarden definierar en generisk granskningsprocess som ger ett strukturerat men flexibelt ramverk från vilket en specifik granskningsprocess kan skräddarsys för en viss situation. Om den begärda granskningen är mer formell, kommer fler av de beskrivna arbetsuppgifterna för de olika aktiviteterna att behövas.

Storleken på många arbetsprodukter kan göra dem för stora för att genomföras i en granskning. Granskningsprocessen kan då upprepas flera gånger för att slutföra granskningen för hela arbetsprodukten.

Aktiviteterna i granskningsprocessen är:
*   **Planering.** Under planeringsfasen ska omfattningen av granskningen definieras. Det gäller syftet, arbetsprodukten som ska granskas, kvalitetsegenskaper som ska utvärderas, områden att fokusera på, avslutskriterier, stödjande information som standarder, arbetsinsats och tidsramar för granskningen.
*   **Initiera granskningen.** Vid granskningsinitieringen är målet att se till att allt och alla inblandade är förberedda för att påbörja granskningen. Det innebär att se till att varje deltagare har tillgång till arbetsprodukten som granskas, förstår sin roll och sitt ansvar och har fått allt som behövs för att utföra granskningen.
*   **Individuell granskning.** Varje granskare genomför en individuell granskning för att bedöma kvaliteten på arbetsprodukten och för att identifiera avvikelser, rekommendationer och frågor genom att tillämpa en eller flera granskningstekniker (t.ex. checklistebaserad granskning, scenariobaserad granskning). ISO/IEC 20246-standarden ger mer djupgående information om olika granskningstekniker. Granskarna loggar alla sina identifierade avvikelser, rekommendationer och frågor.
*   **Kommunikation och analys.** Eftersom de avvikelser som identifierats under en granskning inte nödvändigtvis är defekter måste alla dessa avvikelser analyseras och diskuteras. För varje avvikelse ska beslut fattas om dess status, ägande och nödvändiga åtgärder. Detta görs vanligtvis i ett granskningsmöte, där deltagarna också beslutar om kvalitetsnivån på granskad arbetsprodukt och vilka uppföljningsåtgärder som krävs. En uppföljande granskning kan krävas för att slutföra åtgärderna.
*   **Åtgärda och rapportera.** För varje defekt ska en felrapport skrivas så att korrigerande åtgärder kan följas upp. När avslutskriterierna har uppnåtts kan arbetsprodukten accepteras. Granskningsresultaten redovisas.

#### 3.2.3. Roller och ansvar i granskningar
Granskningar involverar olika intressenter, som kan ta på sig flera roller. De huvudsakliga rollerna och deras ansvarsområden är:
*   **Chef** - bestämmer vad som ska granskas och tillhandahåller resurser, såsom personal och tid för granskning
*   **Författare** - skapar och ordnar arbetsprodukten som granskas
*   **Moderator** (även känd som facilitator) – säkerställer effektivt genomförande av granskningsmöten, inklusive medling, tidshantering och en säker granskningsmiljö där alla kan tala fritt
*   **Sekreterare** - sammanställer avvikelser från granskarna och dokumenterar granskningsinformation, såsom beslut och nya avvikelser som upptäcktes under granskningsmötet
*   **Granskare** - utför granskningar. En granskare kan vara någon som arbetar i projektet, en ämnesexpert eller någon annan intressent
*   **Granskningsledare** – tar ett övergripande ansvar för granskningen som att bestämma vem som ska delta i mötet och organisera när och var granskningen ska ske

Andra, mer detaljerade roller är möjliga, som beskrivs i ISO/IEC 20246-standarden.

#### 3.2.4. Granskningstyper
Det finns många granskningstyper, allt från informella till formella granskningar. Den önskade formalitetsnivån beror på faktorer, till exempel vilken SDLC som följs, utvecklingsprocessens mognad, den kritiska och komplexa egenskapen hos den arbetsprodukt som granskas, juridiska eller reglerade krav och behovet av en revisionslogg. Samma arbetsprodukt kan granskas med olika granskningstyper, t.ex. först en informell och senare en mer formell.

Att välja rätt granskningstyp är nyckeln till att uppnå de önskade granskningsmålen (se kapitel 3.2.5). Urvalet baseras inte bara på målen utan också på faktorer som projektbehov, tillgängliga resurser, typ av arbetsprodukt, risker, affärsdomän och företagskultur.

Några vanliga granskningstyper är:
*   **Informell granskning.** Informella granskningar följer inte en definierad process och kräver inte något formellt dokumenterade utdata. Huvudsyftet är att upptäcka avvikelser.
*   **Genomgång.** En genomgång, som leds av författaren, kan tjäna många syften, som att utvärdera kvaliteten och bygga förtroende för arbetsprodukten, utbilda granskare, uppnå konsensus, generera nya idéer, motivera och göra det möjligt för författare att förbättra sig samt upptäcka avvikelser. Granskare kan utföra en individuell granskning innan genomgången, men detta är inget krav.
*   **Teknisk granskning.** En teknisk granskning utförs av tekniskt kvalificerade granskare och leds av en moderator. Syftet med en teknisk granskning är att uppnå konsensus och fatta beslut angående ett tekniskt problem, men också att upptäcka avvikelser, utvärdera kvalitet och bygga förtroende för arbetsprodukten, generera nya idéer och att motivera och möjliggöra för författare att förbättra sig.
*   **Inspektion.** Eftersom inspektioner är den mest formella typen av granskning följer den kompletta generiska processen (se kapitel 3.2.2). Huvudsyftet är att hitta maximalt antal avvikelser. Andra målsättningar är att utvärdera kvalitet, bygga förtroende för arbetsprodukten och att motivera och göra det möjligt för författarna att förbättra sig. Mätvärden samlas in och används för att förbättra SDLC, inklusive inspektionsprocessen. Vid en inspektion kan författaren inte fungera som granskningsledare eller sekreterare.

#### 3.2.5. Framgångsfaktorer för granskningar
Det finns flera faktorer som avgör om granskningar är framgångsrika:
*   Att definiera tydliga mål och mätbara avslutskriterier. Utvärdering av deltagare ska aldrig vara ett mål
*   Att välja lämplig granskningstyp för att uppnå de satta målen och för att anpassa till arbetsprodukttyp, granskningsdeltagare, projektets behov och till sammanhanget
*   Att genomföra granskningar i små bitar, så att granskarna inte tappar koncentrationen under en individuell granskning och/eller granskningsmötet (när det hålls)
*   Att ge återkoppling från granskningar till intressenter och författare så att de kan förbättra produkten och sina aktiviteter (se kapitel 3.2.1)
*   Att ge deltagarna tillräckligt med tid för att förbereda sig för granskningen
*   Att få stöd från ledningen under granskningsprocessen
*   Att göra granskningar till en del av organisationens kultur för att främja lärande och processförbättringar
*   Att ge tillräcklig utbildning till alla deltagare så att de vet hur de ska uppfylla sin roll
*   Att moderera eller facilitera möten
