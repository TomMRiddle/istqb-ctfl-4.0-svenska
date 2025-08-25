### Nyckelord
avslutskriterier, felhantering, felrapport, produktrisk, projektrisk, risk, riskanalys, riskbaserad testning, riskbedömning, riskhantering, riskidentifiering, riskkontroll, risknivå, riskövervakning, riskreducering, sammanfattande testrapport, startkriterier, testangreppssätt, testkvadranter, testövervakning, testplan, testplanering, testpyramid, teststatusrapport, teststrategi, teststyrning

### Utbildningsmål för kapitel 5:

**5.1 Testplanering**
*   FL-5.1.1 (K2) Exemplifiera syftet med och innehållet i en testplan
*   FL-5.1.2 (K1) Känna igen hur en testare kan ge mervärde till iterations- och releaseplanering
*   FL-5.1.3 (K2) Jämföra likheter och skillnader mellan start- och avslutskriterier
*   FL-5.1.4 (K3) Använda uppskattningstekniker för att beräkna önskad testarbetsinsats
*   FL-5.1.5 (K3) Tillämpa prioritering av testfall
*   FL-5.1.6 (K1) Komma ihåg testpyramidens egenskaper
*   FL-5.1.7 (K2) Sammanfatta testkvadranterna och deras samband med testnivåer och testtyper

**5.2 Riskhantering**
*   FL-5.2.1 (K1) Identifiera risknivåer genom att använda sannolikhet och påverkan för risker
*   FL-5.2.2 (K2) Skilja mellan projektrisker och produktrisker
*   FL-5.2.3 (K2) Beskriva hur produktriskanalyser kan påverka testningens fullständighet och omfattning
*   FL-5.2.4 (K2) Förklara vilka åtgärder som kan vidtas som svar på analyserade produktrisker

**5.3 Testövervakning, teststyrning och testavslut**
*   FL-5.3.1 (K1) Komma ihåg mätetal som används i testningen
*   FL-5.3.2 (K2) Summera syften med, innehåll och mottagare för testrapporter
*   FL-5.3.3 (K2) Exemplifiera hur man kommunicerar teststatus

**5.4 Konfigurationshantering**
*   FL-5.4.1 (K2) Sammanfatta hur konfigurationshanteringen stödjer testningen

**5.5 Felhantering**
*   FL-5.5.1 (K3) Skriva en felrapport

### 5.1. Testplanering

#### 5.1.1. Syftet med och innehållet i en testplan
En testplan beskriver testmål, resurser och processer för ett testprojekt genom att:
*   Dokumentera medel och tidsplan för att uppnå testmålen
*   Hjälpa till att säkerställa att de utförda testaktiviteterna kommer att uppfylla de fastställda kriterierna
*   Fungera som ett kommunikationsmedel för teammedlemmar och andra intressenter
*   Visa att testningen kommer att följa den befintliga testpolicyn och teststrategin (eller förklarar varför testningen kommer att avvika från dem)

Testplanering vägleder testarna och tvingar dem att möta framtida utmaningar relaterade till risker, tidsplaner, människor, verktyg, kostnader, insats etc. Processen att skriva en testplan är ett sätt att tänka igenom de arbetsinsatser som behövs för att uppnå testningens mål.

Vanligtvis innehåller en testplan följande:
*   Testningens sammanhang (t.ex. testomfattning, testmål, testbas)
*   Testprojektets antaganden och begränsningar
*   Intressenter (t.ex. roller, ansvar, relevans till testningen, rekrytering och utbildningsbehov)
*   Kommunikation (t.ex. former och frekvens för kommunikation, dokumentmallar)
*   Riskregister (t.ex. produktrisker och projektrisker)
*   Testangreppssätt (t.ex. testnivåer, testtyper, testtekniker, testleverabler, startkriterier och avslutskriterier, oberoende testning, mätvärden som ska samlas in, testdatakrav, testmiljökrav, avvikelser från testpolicyn och teststrategin)
*   Budget och tidsplan

Mer information om testplanen och dess innehåll finns i standarden ISO/IEC/IEEE 29119-3.

#### 5.1.2. Testarens medverkan i iterations- och releaseplanering
I iterativa SDLC:er förekommer vanligtvis två typer av planering: releaseplanering och iterationsplanering.

**Releaseplanering** planerar för release av en produkt, definierar och omdefinierar produktbackloggen och kan innebära förfining av större användarberättelser till en uppsättning mindre. Den fungerar också som grund för testangreppssätt och testplaner för alla iterationer. Testare som är involverade i releaseplanering deltar genom att skriva testbara användarberättelser och acceptanskriterier (se kapitel 4.5). De deltar också i projekt- och kvalitetsriskanalyser (se kapitel 5.2), uppskattar testarbetsinsatsen för användarberättelser (se kapitel 5.1.4), bestämmer testangreppssättet och planerar testningen inför releasen.

**Iterationsplanering** planerar för slutet av en enstaka iteration och fokuserar på iterationsbackloggen. Testare som är involverade i iterationsplanering deltar i den detaljerade riskanalysen av användarberättelser, bestämmer testbarheten av användarberättelser, bryter ner användarberättelser till uppgifter (speciellt testuppgifter), uppskattar testinsatsen för allt testarbete och identifierar och förfinar funktionella och icke-funktionella aspekter av testobjektet.

#### 5.1.3. Start- och avslutskriterier
Startkriterier definierar förutsättningarna för att bedriva en viss aktivitet. Om startkriterierna inte är uppfyllda är det sannolikt att aktiviteten kommer att bli svårare, mer tidskrävande, kostsammare och mer riskfylld. Avslutskriterierna definierar vad som måste uppnås för att definiera en aktivitet som avslutad. Startkriterier och avslutskriterier ska definieras för varje testnivå och kommer att vara olika beroende på testmålsättningarna.

Typiska **startkriterier** är tillgång till resurser (t.ex. personal, verktyg, miljöer, testdata, budget, tid), tillgång till testvara (t.ex. testbas, testbara krav, användarberättelser, testfall) och initial kvalitetsnivå för ett testobjekt (t.ex. alla smoketester har godkänts).

Typiska **avslutskriterier** är mått på fullständighet (t.ex. uppnådd täckningsnivå, antal olösta defekter, defektdensitet, antal underkända testfall) och "ja/nej"-kriterier (t.ex. planerade tester har utförts, statiska tester har utförts, alla hittade defekter rapporteras, alla regressionstester är automatiserade).

Att tid eller budget tar slut kan också ses som giltiga avslutskriterier. Även om andra avslutskriterier inte är uppfyllda kan det vara acceptabelt att avsluta testning under sådana omständigheter om intressenterna har granskat och accepterat risken att gå i drift utan ytterligare testning.

I agil programvaruutveckling kallas avslutskriterier ofta för **Definition of Done**, som definierar teamets objektiva mätvärden för ett releasebart objekt. Startkriterier som en användarberättelse måste uppfylla för att påbörja utvecklings- och/eller testaktiviteter kallas **Definition of Ready**.

#### 5.1.4. Uppskattningstekniker
Uppskattning av ett testarbete innebär att förutsäga mängden testrelaterat arbete som behövs för att uppfylla testmålen för ett testprojekt. Det är viktigt att göra det klart för intressenterna att testuppskattningen bygger på ett antal antaganden som alltid kan vara föremål för felberäkning. Beräkning av små uppgifter är vanligtvis mer exakt än för stora. När man därför uppskattar en stor uppgift så kan det vara bra att dela upp den i ett antal mindre uppgifter som sedan i sin tur kan beräknas.

I denna kursplan beskrivs följande fyra uppskattningstekniker.

*   **Uppskattning baserad på förhållanden.** I denna mätetalsbaserad teknik samlas fakta in från tidigare projekt inom organisationen, vilket gör det möjligt att härleda "standard"-förhållanden från liknande projekt. Förhållanden mellan en organisations egna projekt (t.ex. hämtade från historiska data) är i allmänhet den bästa källan att använda i uppskattningsprocessen. Dessa standardförhållanden kan sedan användas för att uppskatta testinsatsen för det nya projektet. Till exempel, om förhållandet utveckling-till-testinsats i det föregående projektet var 3:2, och i det aktuella projektet förväntas utvecklingsinsatsen vara 600 persondagar, kan testinsatsen uppskattas till 400 persondagar.
*   **Extrapolering.** I denna mätetalsbaserad teknik görs mätningar så tidigt som möjligt i det aktuella projektet för att samla in data. Med tillräckligt många observationer kan arbetsinsatsen som krävs för det återstående arbetet approximeras genom att extrapolera dessa data (vanligtvis genom att tillämpa en matematisk modell). Denna metod är mycket lämplig i iterativa SDLC:er. Till exempel kan teamet extrapolera testarbetsinsatsen i den kommande iterationen som den genomsnittliga arbetsinsatsen från de tre senaste iterationerna.
*   **Wideband Delphi.** I denna iterativa, expertbaserade teknik gör experter erfarenhetsbaserade uppskattningar. Varje expert uppskattar insatsen isolerat. Resultaten samlas in och om det finns avvikelser från en experts uppskattning som ligger utanför de överenskomna gränserna diskuterar experterna sina aktuella uppskattningar. Varje expert uppmanas sedan att göra en ny uppskattning baserat på den återkopplingen, återigen isolerat. Denna process upprepas tills konsensus uppnås. **Planning Poker** är en variant av Wideband Delphi, som vanligen används i agil programvaruutveckling. I Planning Poker görs uppskattningar vanligtvis med kort med siffror som representerar arbetets storlek.
*   **Trepunktsuppskattning.** I denna expertbaserade teknik görs tre uppskattningar av experterna: den mest optimistiska uppskattningen (a), den mest sannolika uppskattningen (m) och den mest pessimistiska uppskattningen (b). Den slutliga skattningen (E) är deras vägda aritmetiska medelvärde. I den mest populära versionen av denna teknik beräknas uppskattningen som E = (a + 4*m + b) / 6. Fördelen med denna teknik är att den tillåter experterna att beräkna mätfelet: SD = (b − a) / 6. Om uppskattningarna (i persontimmar) t.ex. är: a=6, m=9 och b=18, är den slutliga uppskattningen 10±2 persontimmar (dvs. mellan 8 och 12 personer) -timmar), eftersom E = (6 + 4*9 + 18) / 6 = 10 och SD = (18-6) / 6 = 2.

Se (Kan 2003, Koomen 2006, Westfall 2009) för dessa och många andra testuppskattningstekniker.

#### 5.1.5. Prioritering av testfall
När testfallen och testprocedurerna har specificerats och sammanställts i testsviter kan dessa testsviter ordnas i ett testexekveringsschema som definierar i vilken ordning de ska köras. Vid prioritering av testfall kan olika faktorer beaktas. De vanligast använda prioriteringsstrategierna för testfall är följande:
*   **Riskbaserad prioritering**, där testexekveringsordningen baseras på resultaten i en riskanalys (se kapitel 5.2.3). Testfall som täcker de viktigaste riskerna exekveras först.
*   **Täckningsbaserad prioritering**, där testexekveringsordningen baseras på täckning (t.ex. kodsatstäckning). Testfall som uppnår den högsta täckningen exekveras först. I en annan variant, kallad ytterligare täckningsprioritering, exekveras testfallet som uppnår högst täckning först; varje efterföljande testfall är det som sedan uppnår den då högsta täckningen.
*   **Kravbaserad prioritering**, där testexekveringsordningen baseras på kravprioriteringarna som spåras tillbaka till motsvarande testfall. Kravprioriteringar definieras av intressenterna. Testfall relaterade till de viktigaste kraven exekveras först.

Helst skulle exekvering av testfallen baseras på deras prioritetsnivåer genom att t.ex. använda en av de ovannämnda prioriteringsstrategierna. Denna praxis kanske dock inte fungerar om testfallen eller funktionerna som testas har beroenden. Om ett testfall med högre prioritet är beroende av ett testfall med lägre prioritet, måste testfallet med lägre prioritet exekveras först.

Ordningen för testkörning måste också ta hänsyn till tillgången på resurser. Exempel kan vara testverktyg som krävs, testmiljöer eller personer som kanske bara är tillgängliga under en viss tidsperiod.

#### 5.1.6. Testpyramid
Testpyramiden är en modell som visar att olika tester kan ha olika detaljeringsgrad.

Testpyramidmodellen stödjer teamet i testautomatisering och i fördelning av testarbetsmängden genom att visa att olika testmål stöds av olika nivåer av testautomatisering. Lagren i pyramiden representerar grupper av tester. Ju högre upp lagret befinner sig, desto mindre testdetaljeringsgrad, ju lägre desto mindre testisolering (dvs. graden av beroende från andra element i systemet) plus längre testexekveringstid. Tester i det undre lagret är små, isolerade, snabba och kontrollerar en liten del av funktionaliteten, så vanligtvis behövs det många av dem för att uppnå en rimlig täckning. Det översta lagret representerar komplexa end-to-end-tester på hög nivå. Dessa högnivåtester är i allmänhet långsammare än testerna från de lägre lagren, och de kontrollerar vanligtvis en stor del av funktionaliteten, så oftast behövs bara ett fåtal av dem för att uppnå en rimlig nivå på täckningen.

Antal och namn på lagren kan skilja sig åt. Till exempel definierar den ursprungliga testpyramidmodellen (Cohn 2009) tre lager: "enhetstester", "servicetester" och "Ul-tester". En annan populär modell definierar enhets(komponent)-tester, integrations (komponent integration)-tester och end-to-end-tester. Andra testnivåer (se kapitel 2.2.1) kan också användas.

#### 5.1.7. Testkvadranter
Testkvadranterna, definierade av Brian Marick (Marick 2003, Crispin 2008), grupperar testnivåerna med lämpliga testtyper, aktiviteter, testtekniker och arbetsprodukter i agil programvaruutveckling. Modellen stödjer testhanteringen genom att visualisera dessa och säkerställa att alla lämpliga testtyper och testnivåer ingår i SDLC och för att förstå att vissa testtyper är mer relevanta för vissa testnivåer än andra. Den här modellen ger också ett sätt att särskilja och beskriva testtyperna för alla intressenter, inklusive utvecklare, testare och verksamhetsrepresentanter.

I modellen kan tester vara affärsinriktade eller teknikinriktade. Tester kan också stödja teamet (dvs vägleda utvecklingen) eller kritisera produkten (dvs mäta dess beteende mot förväntningarna). Kombinationen av dessa två synpunkter bestämmer de fyra kvadranterna:
*   **Kvadrant Q1 (teknikinriktade, stöder teamet).** Denna kvadrant innehåller komponenttester och komponentintegrationstester. Dessa tester bör automatiseras och inkluderas i CI-processen.
*   **Kvadrant Q2 (affärsinriktade, stöder teamet).** Denna kvadrant innehåller funktionella tester, till exempel tester av användarberättelser, prototyper för användarupplevelser, API-tester och simuleringar. Dessa tester kontrollerar acceptanskriterierna och kan vara manuella eller automatiserade.
*   **Kvadrant Q3 (affärsinriktade, kritiserar produkten).** Denna kvadrant innehåller utforskande testning, användbarhetstestning, användaracceptanstestning. Dessa tester är användarorienterade och ofta manuella.
*   **Kvadrant Q4 (teknikinriktade, kritiserar produkten).** Denna kvadrant innehåller smoketester och icke-funktionella tester (förutom användbarhetstester). Dessa tester är ofta automatiserade.

### 5.2. Riskhantering
Organisationer står inför många interna och externa faktorer som gör det osäkert om och när de kommer att uppnå sina mål (ISO 31000). Riskhantering tillåter organisationerna att öka sannolikheten för att uppnå målen, förbättra kvaliteten på sina produkter och öka intressenternas förtroende och tillit.

De huvudsakliga riskhanteringsaktiviteterna är:
*   **Riskanalys** (bestående av riskidentifiering och riskbedömning; se avsnitt 5.2.3)
*   **Riskkontroll** (bestående av riskreducering och riskövervakning; se avsnitt 5.2.4)

Testangreppssättet där testaktiviteter väljs, prioriteras och hanteras utifrån riskanalys och riskkontroll, kallas **riskbaserad testning**.

#### 5.2.1. Riskdefinition och riskattribut
Risk är en potentiell händelse, fara, hot eller situation vars inträffande orsakar en negativ effekt. En risk kan karakteriseras av två faktorer:
*   **Risksannolikhet** – sannolikheten för att risken inträffar (större än noll och mindre än ett)
*   **Riskkonsekvens (skada)** – konsekvenserna av denna händelse

Dessa två faktorer uttrycker risknivån, som är ett mått på risken. Ju högre risknivå, desto viktigare är hanteringen.

#### 5.2.2. Projekt- och produktrisker
Vid programvarutestning är man generellt intresserad över två typer av risker: projektrisker och produktrisker.

**Projektrisker** är relaterade till projekthantering och kontroll. Projektrisker avser:
*   Organisatoriska frågor (t.ex. förseningar i leveranser av arbetsprodukter, felaktiga uppskattningar och kostnadsbesparingar)
*   Personalfrågor (t.ex. otillräckliga kunskaper, konflikter, kommunikationsproblem, brist på personal)
*   Tekniska frågor (t.ex. okontrollerade ändringar, dåligt verktygsstöd)
*   Leverantörsfrågor (t.ex. fel i leverans från tredje part, konkurs hos det stödjande företaget)

Projektrisker kan, när de uppstår, ha en inverkan på projektets tidsplan, budget eller omfattning, vilket påverkar projektets förmåga att uppnå sina mål.

**Produktriskerna** är relaterade till produktens kvalitetsegenskaper (t.ex. beskrivna i kvalitetsmodellen ISO 25010). Exempel på produktrisker är saknad eller felaktig funktionalitet, felaktiga beräkningar, run-time-fel, dålig arkitektur, ineffektiva algoritmer, otillräckliga svarstider, dålig användarupplevelse, säkerhetssårbarheter. Produktrisker kan, när de uppstår, resultera i olika negativa konsekvenser, som:
*   Missnöjda användare
*   Förlust av intäkter, förtroende, rykte
*   Skador på tredje part
*   Höga underhållskostnader, överbelastning av helpdesk
*   Straffrättsliga påföljder
*   I extrema fall, fysisk skada, personskador eller till och med dödsfall

#### 5.2.3. Produktriskanalys
Ur ett testperspektiv är målet med en produktriskanalys att ge en medvetenhet om produktrisker för att fokusera testinsatserna på ett sätt som minimerar den kvarvarande nivån av produktrisk. Helst börjar man med en produktriskanalys tidigt i SDLC.

Produktriskanalysen består av **riskidentifiering** och **riskbedömning**. Riskidentifiering handlar om att skapa en omfattande lista över risker. Intressenter kan identifiera risker genom att använda olika tekniker och verktyg, t.ex. brainstorming, workshops, intervjuer eller orsak-verkan-diagram.

Riskbedömning innefattar kategorisering av identifierade risker, fastställande av deras risksannolikhet, riskpåverkan och risknivå, prioritering samt förslag till sätt att hantera dem. Att kategorisera dem underlättar tilldelning av reducerande åtgärder, eftersom risker som faller i samma kategori vanligtvis kan begränsas med ett liknande angreppssätt.

Riskbedömning kan använda en kvantitativ eller kvalitativ metod, eller en blandning av dem. I den kvantitativa metoden beräknas risknivån som multiplikationen av risksannolikhet och riskpåverkan. I den kvalitativa metoden kan risknivån bestämmas med hjälp av en riskmatris.

Produktriskanalysen kan påverka testningens grundlighet och omfattning. Dess resultat används för att:
*   Bestämma omfattningen av testningen som ska göras
*   Bestämma de specifika testnivåer och föreslå testtyper som ska användas
*   Bestämma vilka testtekniker som ska användas och vilken täckning som ska uppnås
*   Uppskatta den testinsats som krävs för varje uppgift
*   Prioritera testningen i ett försök att hitta de kritiska defekterna så tidigt som möjligt
*   Bestämma om några andra aktiviteter utöver testning ska göras för att minska risken

#### 5.2.4. Produktriskkontroll
En produktriskkontroll omfattar alla åtgärder som vidtas som svar på identifierade och bedömda produktrisker. Produktriskkontrollen består av **riskreducering** och **riskövervakning**. Riskreducering innebär att de åtgärder som föreslås i riskbedömningen genomförs för att minska risknivån. Syftet med riskövervakning är att säkerställa att åtgärderna är effektiva för att reducera risken, att få ytterligare information för att förbättra riskbedömningen och att identifiera nya risker.

Under produktriskkontrollen kan, när en risk har analyserats, flera alternativ vara möjliga, t. ex. riskreducering genom testning, riskacceptans, risköverföring eller åtgärdsplan (Veenendaal 2012). Åtgärder som kan vidtas för att minska produktriskerna genom testning är följande:
*   Välja testare med rätt erfarenhet och kompetens, lämpade för en given risktyp
*   Använda en lämplig nivå av oberoende testning
*   Genomföra granskningar och statisk analys
*   Tillämpa lämpliga testtekniker och täckningsnivåer
*   Tillämpa lämpliga testtyper för att ta itu med de påverkade kvalitetsegenskaperna
*   Genomföra dynamisk testning, inklusive regressionstestning

### 5.3. Testövervakning, teststyrning och testavslut
**Testövervakning** handlar om att samla in information om testningen. Informationen används för att bedöma testningens framsteg och för att mäta om avslutskriterierna eller testarbetet som är förknippade med avslutskriterierna är uppfyllda. Exempel på uppfyllda kriterier kan vara målen för täckning av produktrisker, krav eller acceptanskriterier.

**Teststyrning** använder informationen från testövervakningen för att, i form av styrdirektiv, ge vägledning och nödvändiga korrigerande åtgärder för att uppnå den mest effektiva och ändamålsenliga testningen. Exempel på styrdirektiv inkluderar:
*   Omprioritering av testerna när en identifierad risk behöver hanteras
*   Omvärdera om ett testobjekt uppfyller startkriterier eller avslutskriterier på grund av omarbetning
*   Justera testschemat för att åtgärda en försening i leveransen av testmiljön
*   Utöka med nya resurser när och där det behövs

**Testavslut** samlar in data från genomförda testaktiviteter för att ta vara på erfarenheter, testvara och annan relevant information. Testavslutsaktiviteter sker vid projektmilstolpar t.ex. när en testnivå är klar, en agil iteration är klar, ett testprojekt har slutförts (eller avbrutits), ett programvarusystem releasas eller en underhållsrelease slutförs.

#### 5.3.1. Mätetal som används i testning
Mätresultat från testningen samlas in för att visa framsteg mot den planerade testtidsplanen och budgeten, den aktuella kvaliteten på testobjektet och effektiviteten hos testaktiviteterna med avseende på testmålsättningen eller ett iterationsmål. Testövervakning samlar in en mängd olika mätvärden för att stödja teststyrningen och testavslutet.

Vanliga testmätetal kan vara:
*   Mätetal för projektframsteg (t.ex. slutförande av uppgift, resursanvändning, testinsats)
*   Mätetal för testframsteg (t.ex. framsteg för implementering av testfall, framsteg för förberedelse av testmiljö, antal körda/inte körda testfall, godkända/misslyckade testfall, testexekveringstid)
*   Mätetal för produktkvalitet (t.ex. tillgänglighet, svarstider, medeltid till fel)
*   Mätetal för defekter (t.ex. antal och prioriteringar för defekter som hittats/åtgärdats, defektdensitet, defect detection percentage, DDP)
*   Mätetal för risker (t.ex. kvarstående risknivå)
*   Mätetal för täckningar (t.ex. kravtäckning, kodsatstäckning)
*   Mätetal för kostnader (t.ex. kostnad för testning, organisationskostnad för kvalitet)

#### 5.3.2. Syften, innehåll och målgrupper för testrapporter
Testrapportering sammanfattar och kommunicerar testinformation under och efter testning. Teststatusrapporter stödjer den pågående teststyrningen och måste ge tillräckligt med information för att kunna göra ändringar (om de behövs) i testschemat, resurserna eller testplanen. Behovet kan vara att planen inte kunde följas eller andra ändrade förhållanden.. Sammanfattande testrapporter för e specifik testaktivitet(t.ex. testnivå, testcykel, iteration) kan ge information för kommande testningar.

Under testövervakning och teststyrning producerar testteamet **teststatusrapporter** till intressenterna för att hålla dem informerade. Dessa rapporter produceras vanligtvis regelbundet (t.ex. dagligen, veckovis, etc.) och inkluderar:
*   Testperiod
*   Testframsteg (t.ex. före eller efter planerade tiden), inklusive eventuella noterbara avvikelser
*   Hinder för testning och deras tillfälliga lösningar (workarounds)
*   Testmätetal (se kapitel 5.3.1 för exempel)
*   Nya och förändrade risker inom testperioden
*   Planerad testning för nästa period

En **sammanfattande testrapport** förbereds under testningens slutförande, när ett projekt, testnivå eller testtyp är klar och när (idealiskt) dess avslutskriterier har uppfyllts. Rapporten använder teststatusrapporter och annat data. En typisk sammanfattande testrapport inkluderar:
*   Testsammanfattning
*   Utvärdering av testningen och produktkvaliteten baserat på den ursprungliga testplanen (d.v.s. testmål och avslutskriterier)
*   Avvikelser från testplanen (t.ex. skillnader från det planerade tidsplanen, varaktighet och arbete).
*   Testhinder och tillfälliga lösningar (workarounds)
*   Testmätningar baserat på teststatusrapporter
*   Risker som inte reducerats, defekter som inte åtgärdats
*   Lärdomar som är relevanta för testningen

Olika målgrupper kräver olika information i rapporterna och detta kan påverka graden av formalitet och testrapporteringsfrekvens. Teststatusrapportering till andra i teamet är ofta frekvent och informell, medan en sammanfattande testrapport följer en mall och sker endast en gång.

ISO/IEC/IEEE 29119-3-standarden innehåller mallar och exempel för teststatusrapporter och sammanfattande testrapporter (test status reports, test completion reports).

#### 5.3.3. Teststatuskommunikation
Det bästa sättet att kommunicera teststatus varierar beroende på testhanteringsfrågor, organisationens teststrategier, regulatoriska standarder eller, i fallet med självorganiserande team (se kapitel 1.5.2), på själva teamet. Alternativen inkluderar:
*   Verbal kommunikation med teammedlemmar och andra intressenter
*   Dashboards (t.ex. CI/CD-dashboards, aktivitetstavlor och burn-down charts)
*   Elektroniska kommunikationskanaler (t.ex. e-post, chatt)
*   Onlinedokumentation
*   Formella testrapporter (se kapitel 5.3.2)

Ett eller flera av dessa alternativ kan användas. Mer formell kommunikation kan vara mer lämplig för distribuerade team där direkt kommunikation öga mot öga inte alltid är möjlig på grund av geografiskt avstånd eller tidsskillnader. Vanligtvis är olika intressenter intresserade av olika typer av information, så kommunikationen bör anpassas efter det.

### 5.4. Konfigurationshantering
Konfigurationshantering (configuration management, CM) är en disciplin som hjälper testningen att identifiera, kontrollera och spåra arbetsprodukter som testplaner, teststrategier, testvillkor, testfall, testskript, testresultat, testloggar och testrapporter som konfigurationsobjekt.

För ett komplext konfigurationsobjekt (t.ex. en testmiljö), registrerar CM de objekt som den består av, deras relationer och versioner. Om konfigurationsobjektet godkänns för testning blir det en baslinje och kan endast ändras genom en formell ändringskontrollprocess.

Konfigurationshanteringen håller ett register över ändrade konfigurationsobjekt när en ny baslinje skapas. Det är möjligt att återgå till en tidigare baslinje för att återskapa tidigare testresultat.

För att korrekt stödja testning säkerställer CM följande:
*   Alla konfigurationsobjekt, inklusive testelement (enskilda delar av testobjektet), är unikt identifierade, versionshanterade, spårbara för ändringar och relaterade till andra konfigurationsobjekt så att spårbarheten kan bibehållas genom hela testprocessen
*   All identifierad dokumentation och programelement är entydigt refererade i testvaran

Kontinuerlig integration (CI), kontinuerlig leverans (CD), kontinuerlig driftsättning och tillhörande testning implementeras vanligtvis som en del av en automatiserad DevOps-pipeline (se kapitel 2.1.4), i vilken automatiserad CM normalt ingår.

### 5.5. Felhantering
Eftersom ett av de viktigaste testmålen är att hitta defekter, är en etablerad felhanteringsprocess väsentlig. Även om vi hänvisar till "defekter" här, kan de rapporterade avvikelserna visa sig vara verkliga defekter eller något annat (t.ex. falskt-positivt resultat, ändringsbegäran) - detta löses under felhanteringsprocessen. Avvikelser kan rapporteras under vilken fas som helst i SDLC och formen beror på SDLC. Felhanteringsprocessen innehåller, som ett minimum, ett arbetsflöde för hantering av enskilda defekter eller avvikelser (från upptäckt till stängning) och regler för deras klassificering. Arbetsflödet omfattar vanligtvis aktiviteter för att logga de rapporterade avvikelserna, analysera och klassificera dem, besluta om ett lämpligt svar som att åtgärda eller behålla som det är och slutligen att stänga felrapporten. Det är tillrådligt att hantera defekter från statisk testning (speciellt statisk analys) på liknande sätt.

Typiska felrapporter har följande syften:
*   Att förse de ansvariga för hantering och lösning av rapporterade defekter med tillräcklig information för att lösa problemet
*   Att tillhandahålla ett sätt att spåra kvaliteten på arbetsprodukten
*   Att ge idéer till förbättring av utvecklings- och testprocessen

En felrapport som loggas under dynamisk testning inkluderar vanligtvis:
*   Unik identifierare
*   Titel med en kort sammanfattning av den avvikelse som rapporteras
*   Datum när avvikelsen observerades, utfärdande organisation och författare, inklusive deras roll
*   Identifiering av testobjekt och testmiljö
*   Defektens sammanhang (t.ex. testfall som kördes, testaktivitet som utfördes, SDLC-fas och annan relevant information som testteknik, checklista eller testdata som används)
*   Beskrivning av felsymptomet, för att kunna reproducera och lösa det, inklusive teststegen som upptäckte avvikelsen och eventuella relevanta testloggar, databasdumpar, skärmdumpar eller inspelningar
*   Förväntade resultat och faktiska resultat
*   Defektens allvarlighetsgrad (grad av påverkan) enligt intressenterna eller kraven
*   Åtgärdsprioritet
*   Status för defekten (t.ex. öppen, uppskjuten, dubblett, väntar på att åtgärdas, väntar på omtestning, återöppnad, stängd, avvisad)
*   Referenser (t.ex. till testfallet)

En del av dessa data kan inkluderas automatiskt när felhanteringsverktyg används (t.ex. identifierare, datum, författare och initial status). Dokumentmallar för en felrapport och exempel på felrapporter finns i standarden ISO/IEC/IEEE 29119-3 där felrapporter beskrivs som incident reports.
