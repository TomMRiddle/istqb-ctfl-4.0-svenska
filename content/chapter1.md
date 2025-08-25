### Nyckelord
debugging, defekt, felsymptom, grundorsak, kvalitet, kvalitetssäkring, misstag, spårbarhet, testanalys, testavslut, testbas, testdata, testdesign, testexekvering, testfall, testimplementation, testmålsättning, testning, testobjekt, testövervakning, testplanering, testprocedur, testprocess, testresultat, teststyrning, testvara, testvillkor, validering, verifiering

### Utbildningsmål för kapitel 1:

**1.1 Vad är testning?**
*   FL-1.1.1 (K1) Identifiera typiska målsättningar för testningen
*   FL-1.1.2 (K2) Skilja på testning och debugging

**1.2 Varför är testning nödvändigt?**
*   FL-1.2.1 (K2) Ge exempel på varför testning är nödvändigt
*   FL-1.2.2 (K1) Komma ihåg relationen mellan testning och kvalitetssäkring
*   FL-1.2.3 (K2) Skilja mellan grundorsak, misstag, defekt och felsymptom

**1.3 Testprinciper**
*   FL-1.3.1 (K2) Förklara de sju testprinciperna

**1.4 Testaktiviteter, testvara och testroller**
*   FL-1.4.1 (K2) Förklara de olika testaktiviteterna och relaterade uppgifter
*   FL-1.4.2 (K2) Förklara sammanhangets inverkan på testprocessen
*   FL-1.4.3 (K2) Skilja på testvara som ger stöd åt testprocessen
*   FL-1.4.4 (K2) Förklara värdet av att bibehålla spårbarheten
*   FL-1.4.5 (K2) Jämföra de olika rollerna i testningen

**1.5 Viktiga färdigheter och god praxis vid testning**
*   FL-1.5.1 (K2) Ge exempel på de generiska färdigheter som krävs för att testa
*   FL-1.5.2 (K1) Komma ihåg fördelarna med hela teamets ansvar (whole team approach)
*   FL-1.5.3 (K2) Särskilja för- och nackdelar med oberoende testning

### 1.1. Vad är testning?
Programvarusystem är en viktig del av vardagen. De flesta av oss har upplevt att programvaran inte har fungerat som förväntat. Om den inte fungerar på rätt sätt kan det leda till många problem, inklusive förlust av pengar, tid, affärsrykte och värsta fall personskador eller dödsfall. Programvarutestning utvärderar programvarans kvalitet och hjälper till att minska risken för felsymptom i drift.

Programvarutestning är en uppsättning aktiviteter för att upptäcka defekter och utvärdera kvaliteten hos programvarans arbetsprodukter. Dessa arbetsprodukter benämns testobjekt när de testas. En vanlig missuppfattning om testning är att den bara består av att exekvera tester (dvs köra programvaran och kontrollera testresultaten). Men programvarutestning omfattar också andra aktiviteter och måste därför anpassas till programvarans utvecklingslivscykel (se kapitel 2).

En annan vanlig missuppfattning om testning är att den enbart fokuserar på att verifiera testobjektet. Även om testning innebär verifiering, det vill säga att kontrollera om systemet uppfyller specificerade krav, omfattar den också validering, dvs. kontroll om systemet uppfyller användarnas och andra intressenters behov i sin operativa miljö.

Testning kan vara dynamisk eller statisk. Dynamisk testning innebär exekvering av programvaran, medan statisk testning inte gör det. Statisk testning inkluderar granskningar (se kapitel 3) och statisk analys. Dynamisk testning använder olika typer av testtekniker och testangreppssättför att härleda testfall (se kapitel 4).

Testning är inte bara en teknisk aktivitet. Den måste också planeras, hanteras, uppskattas, övervakas och styras på rätt sätt (se kapitel 5).

Testare använder verktyg (se kapitel 6), men det är viktigt att komma ihåg att testning till stor del är en intellektuell aktivitet, vilket kräver att testarna har specialiserade kunskaper, använder analytiska färdigheter, tillämpar kritiskt tänkande och systemtänkande (Myers 2011, Roman 2018).

ISO/IEC/IEEE 29119-1-standarden ger ytterligare information om koncept avseende programvarutestning.

#### 1.1.1. Målsättning med testningen
Typiska målsättningar med testningen:
*   Utvärdera arbetsprodukter, till exempel krav, användarberättelser, design och kod
*   Provocera fram felsymptom och upptäcka defekter
*   Säkerställa erforderlig täckning av ett testobjekt
*   Minska risknivån för bristfällig programvarukvalitet
*   Verifiera om specificerade krav har uppfyllts
*   Verifiera att ett testobjekt följer avtalsmässiga, juridiska och lagstadgade krav
*   Tillhandahålla information till intressenter så att de kan fatta välgrundade beslut
*   Bygga förtroende för testobjektets kvalitet
*   Validera om testobjektet är komplett och fungerar som förväntat enligt intressenterna

Målsättningen med testningen kan variera beroende på sammanhanget, vilket inkluderar arbetsprodukten som testas, testnivån, risker, programvaruutvecklingslivscykeln (SDLC) som följs och faktorer relaterade till affärskontexten, t.ex. företagsstruktur, konkurrensavvägande eller tid till marknaden.

#### 1.1.2. Testning och debugging
Testning och debugging är olika aktiviteter. Testning kan ge upphov till felsymptom som förorsakats av defekter (fel) i programvaran (dynamisk testning) eller kan hitta defekter direkt i testobjektet (statisk testning).

När dynamisk testning (se kapitel 4) utlöser ett felsymptom innebär debugging att hitta orsakerna till felsymptomet (dvs. defekter), analysera orsakerna och eliminera dem. Den typiska felsökningsprocessen i detta fall innefattar:
*   Återskapande av felsymptomet
*   Diagnos (att hitta defekten)
*   Åtgärda defekten

Efterföljande omtestning kontrollerar om åtgärderna löste problemet. Helst ska omtestning göras av samma person som utförde det första testet. Efterföljande regressionstestning kan också utföras för att kontrollera om åtgärderna orsakat felsymptom i andra delar av testobjektet (se avsnitt 2.2.3 för mer information om omtestning och regressionstestning).

När statisk testning identifierar en defekt handlar debugging om att eliminera den. Det finns inget behov av återskapande eller diagnos, eftersom statisk testning hittar defekter direkt och inte kan orsaka felsymptom (se kapitel 3).

### 1.2. Varför är testning nödvändigt?
Testning, som en form av kvalitetskontroll, hjälper till att uppnå de överenskomna testmålen gällande omfattning, tid, kvalitet och budgetbegränsningar. Testningens bidrag till framgång ska inte begränsas till testteamets aktiviteter. Alla intressenter kan använda sina testkunskaper för att föra projektet framåt. Att testa komponenter, system och tillhörande arbetsprodukter (t.ex. dokumentation) hjälper till att hitta defekter i programvaran.

#### 1.2.1. Testningens bidrag till ett lyckat resultat
Testning är ett kostnadseffektivt sätt att upptäcka defekter. Dessa defekter kan sedan elimineras (genom debugging - en icke-testande aktivitet), så testning bidrar indirekt till högre kvalitet hos testobjekten.

Testning är ett sätt att direkt utvärdera kvaliteten på ett testobjekt i olika faser i programvaruutvecklingslivscykeln. Dessa åtgärder ingår som en del av en större projektledningsaktivitet och bidrar till beslut om att gå vidare till nästa fas i programvaruutvecklingslivscykeln, som t.ex. releasebeslut.

Via testningen blir användarna indirekt representerade i utvecklingsprojektet. Testare säkerställer att deras förståelse av användarnas behov beaktas under hela utvecklingslivscykeln. Alternativet är att involvera en representativ uppsättning användare som en del av utvecklingsprojektet, vilket vanligtvis inte är möjligt på grund av de höga kostnaderna och bristen på lämpliga och tillgängliga användare.

Testning kan också krävas för att uppfylla avtalsenliga eller juridiska krav, eller för att följa lagstadgade standarder.

#### 1.2.2. Testning och kvalitetssäkring (QA)
Även om många ofta använder termerna "testning" och "kvalitetssäkring" (QA) omväxlande, är testning och QA inte samma sak.

Testning är ett produktorienterat, avhjälpande arbetssätt som fokuserar på de aktiviteter som stödjer uppnåendet av lämpliga kvalitetsnivåer. Testning är en viktig del av kvalitetskontroll, men inkluderar även formella metoder (modellkontroll och bevis på korrekthet), simulering och prototyper.

QA är ett processorienterat, förebyggande arbetssätt som fokuserar på implementering och förbättring av processer. Det utgår från att om en bra process följs korrekt, så kommer den att generera en bra produkt. QA gäller både utvecklings- och testprocesserna och är allas ansvar i ett projekt.

Testresultaten används av QA och testning. I testningen används de för att åtgärda defekter, medan de i QA ger återkoppling om hur väl utvecklings- och testprocesserna fungerar.

#### 1.2.3. Misstag, defekter, felsymptom och grundorsaker
Människor gör fel (misstag), som kan leda till defekter (fel, buggar), som i sin tur kan resultera i felsymptom. Människor gör fel av olika anledningar, som tidspress, komplexitet i arbetsprodukter, processer, infrastruktur eller interaktioner, eller helt enkelt för att de är trötta eller saknar adekvat utbildning.

Defekter kan hittas i dokumentation, till exempel en kravspecifikation eller ett testskript, i källkod eller i en stödjande arbetsprodukt som en byggfil. Defekter i arbetsprodukter som producerats tidigare i SDLC leder, om de inte upptäcks, ofta till defekta arbetsprodukter senare i livscykeln. Om en defekt kod exekveras kan systemet misslyckas med att göra vad det borde göra, eller göra något det inte borde, vilket orsakar ett felsymptom. Vissa defekter kommer alltid att resultera i ett felsymptom om de exekveras, medan andra endast kommer att resultera i ett felsymptom under specifika omständigheter, medan vissa defekter kanske aldrig resulterar i ett felsymptom.

Misstag och defekter är inte den enda orsaken till felsymptom. Felsymptom kan också orsakas av miljömässiga skäl, till exempel när strålning eller elektromagnetiska fält orsakar defekter i firmware.

En grundorsak är ett grundläggande skäl till att ett problem uppstår (t.ex. en situation som leder till ett misstag). Grundorsaker identifieras genom grundorsaksanalys, som vanligtvis utförs när ett felsymptom upptäcks eller en defekt identifieras. Detta bygger på kunskapen att ytterligare liknande felsymptom eller defekter kan förebyggas eller deras frekvens minskas genom att åtgärda grundorsaken, till exempel genom att eliminera den.

### 1.3. Testprinciper
Ett antal testprinciper innehållande allmänna riktlinjer som är tillämpliga på all testning har föreslagits genom åren. Denna kursplan beskriver sju sådana principer.

1.  **Testning visar närvaron, inte frånvaron, av defekter.** Testning kan visa att det finns defekter i testobjektet, men kan inte bevisa att det inte finns några defekter (Buxton 1970). Testning minskar sannolikheten för att defekter förblir oupptäckta i testobjektet, men även om inga defekter hittas kan testning inte bevisa att testobjektet är korrekt.
2.  **Uttömmande testning är omöjligt.** Att testa allt är inte möjligt utom i triviala fall (Manna 1978). I stället för att försöka testa uttömmande bör testtekniker (se kapitel 4), prioritering av testfall (se avsnitt 5.1.5) och riskbaserad testning (se avsnitt 5.2) användas för att fokusera på testinsatserna.
3.  **Tidig testning sparar tid och pengar.** Defekter som elimineras tidigt i processen kommer inte ge upphov till efterföljande defekter i senare arbetsprodukter. Kostnaden för kvalitet kommer att minska eftersom färre fel kommer att inträffa senare i SDLC (Boehm 1981). För att hitta defekter tidigt bör både statisk testning (se kapitel 3) och dynamisk testning (se kapitel 4) påbörjas så tidigt som möjligt.
4.  **Ansamling av fel.** Ett litet antal systemkomponenter innehåller vanligtvis de flesta av de upptäckta defekterna eller är ansvariga för de flesta driftstörningarna (Enders 1975). Detta fenomen är exempel på Pareto-principen. Förväntade defektkluster och faktiska defektkluster som observerats under testning eller i drift, är en viktig input för riskbaserad testning (se kapitel 5.2).
5.  **Tester slits ut.** Om samma tester upprepas många gånger blir de allt mindre effektiva vad gäller att upptäcka nya defekter (Beizer 1990). För att övervinna denna effekt kan befintliga tester och testdata behöva modifieras och nya tester kan behöva skrivas. Men i vissa fall kan upprepning av samma tester ge ett fördelaktigt resultat, t.ex. vid automatiserad regressionstestning (se avsnitt 2.2.3).
6.  **Testning beror på sammanhang.** Det finns ingen enskild universellt tillämplig metod för testning. Testning görs på olika sätt i olika sammanhang (Kaner 2011).
7.  **Frånvaro-av-fel-fallgropen.** Det är felaktigt (dvs en missuppfattning) att förvänta sig att verifiering av programvaran räcker för att säkerställa ett framgångsrikt system. Att noggrant testa alla specificerade krav och åtgärda alla defekter som hittats kan ändå producera ett system som inte uppfyller användarnas behov och förväntningar, som inte hjälper till att uppnå kundens affärsmål och som är sämre jämfört med andra konkurrerande system. Därför ska, utöver verifiering, även validering genomföras (Boehm 1981).

### 1.4. Testaktiviteter, testvara och testroller
Testning är beroende av sitt sammanhang, men på en hög nivå finns det generella uppsättningar av testaktiviteter utan vilka det är mindre sannolikt att testning skulle uppnå testmålen. Dessa uppsättningar av testaktiviteter utgör en testprocess. Testprocessen kan skräddarsys till en given situation utifrån olika faktorer. Vilka testaktiviteter som ingår i denna testprocess, hur och när de genomförs är normalt en del av testplaneringen för den specifika situationen (se avsnitt 5.1).

Följande kapitel beskriver de allmänna aspekterna av denna testprocess i termer av testaktiviteter och testuppgifter, påverkan av sammanhanget, testvaran, spårbarhet mellan testbas och testvaran samt roller i testningen.

ISO/IEC/IEEE 29119-2-standarden ger ytterligare information om testprocesser.

#### 1.4.1. Testaktiviteter och uppgifter
En testprocess består vanligtvis av de huvudgrupper av aktiviteter som beskrivs nedan. Även om många av dessa aktiviteter kan tyckas följa en logisk sekvens, genomförs de ofta iterativt eller parallellt. Dessa testaktiviteter behöver vanligtvis anpassas till systemet och projektet.

**Testplanering** består av att definiera testmålen och sedan välja ett angreppssätt som bäst uppnår målen inom de begränsningar som det övergripande sammanhanget ställer. Testplanering förklaras ytterligare i kapitel 5.1.

**Testövervakning och teststyrning.** Testövervakning innebär löpande kontroll av alla testaktiviteter och jämförelse av faktiska framsteg mot planen. Teststyrning innebär att vidta de åtgärder som är nödvändiga för att uppnå testmålen. Testövervakning och teststyrning förklaras ytterligare i kapitel 5.3.

**Testanalys** omfattar analys av testbasen för att identifiera testbara funktionaliteter. Relevanta testvillkor definieras och prioriteras med relaterade risker och risknivåer. (se kapitel 5.2). Testbasen och testobjektet utvärderas också för att bedöma deras testbarhet och för att identifiera defekter som skulle kunna hittas. Testanalys stöds ofta genom användning av testtekniker (se kapitel 4). Testanalys svarar på frågan "vad ska man testa?" i termer av mätbara täckningskriterier.

**Testdesign** omfattar utveckling av testvillkoren till testfall och annan testvara (t.ex. testcharter). Denna aktivitet omfattar ofta en identifiering av täckningsobjekt, som fungerar som en guide för att specificera indata för testfall. Testtekniker (se kapitel 4) kan användas för att stödja denna aktivitet. Testdesign inkluderar också att definiera krav på testdata, designa testmiljön och identifiera nödvändig infrastruktur och verktyg. Testdesign svarar på frågan "hur testar man?".

**Testimplementation** omfattar skapande eller inskaffande av den testvara som krävs för testexekvering (t.ex. testdata). Testfall kan organiseras i testprocedurer som ofta sätts ihop till testsviter. Manuella och automatiserade testskript skapas. Testprocedurer prioriteras och ordnas inom ett testexekveringsschema för effektiv testexekvering (se kapitel 5.1.5). Testmiljön byggs och verifieras så att den är korrekt.

**Testexekvering** innebär att köra testerna i enlighet med testexekveringsschemat. Testexekvering kan vara manuell eller automatiserad. Testexekvering kan ta många former, inklusive kontinuerlig testning eller sessioner med partestning. Faktiska testresultat jämförs med de förväntade resultaten. Testresultaten loggas. Avvikelserna analyseras för att identifiera deras troliga orsaker. Denna analys gör det möjligt för oss att rapportera avvikelserna baserat på de observerade felsymptomen (se kapitel 5.5).

**Testavslut** inträffar vanligtvis vid projektmilstolpar (t.ex. release, slut på en iteration eller en testnivå). För eventuella olösta defekter, ändringsbegäran eller produktbackloggar skapas åtgärdsplan. All testvara som kan vara användbar i framtiden identifieras och arkiveras eller lämnas över till lämpliga team. Testmiljön stängs av till ett överenskommet tillstånd. Testaktiviteterna analyseras för att identifiera lärdomar och förbättringar för framtida iterationer, releaser eller projekt (se kapitel 2.1.6). En sammanfattande testrapport skapas och kommuniceras till intressenterna.

#### 1.4.2. Testprocess i sitt sammanhang
Testning utförs inte isolerat. Testaktiviteterna är en integrerad del av de utvecklingsprocesser som genomförs i en organisation. Testning finansieras också av intressenter och dess slutmål är att hjälpa till att uppfylla intressenternas affärsbehov. Därför kommer behovet av hur testningen utförs att bero på ett antal kontextuella faktorer, inklusive:
*   Intressenter (behov, förväntningar, krav, vilja att samarbeta, etc.)
*   Teammedlemmar (färdigheter, kunskap, erfarenhetsnivå, tillgänglighet, utbildningsbehov etc.)
*   Företagsdomän (testobjektets allvarighetsgrad, identifierade risker, marknadsbehov, specifika juridiska regler, etc.)
*   Tekniska faktorer (typ av programvara, produktarkitektur, använd teknik, etc.)
*   Projektbegränsningar (omfattning, tid, budget, resurser, etc.)
*   Organisatoriska faktorer (organisationsstruktur, befintliga policyer, praxis som används, etc.)
*   Livscykeln för programvaruutveckling (teknikpraxis, utvecklingsmetoder, etc.)
*   Verktyg (tillgänglighet, användbarhet, efterlevnad, etc.)

Dessa faktorer kommer att ha en inverkan på många testrelaterade frågor, inklusive teststrategi, använda testtekniker, grad av testautomatisering, erforderlig täckningsnivå, detaljnivå i testvara, testrapportering, etc.

#### 1.4.3. Testvara
Testvara är arbetsprodukter som resultat av de testaktiviteter som beskrivs i kapitel 1.4.1. Det finns en betydande variation i hur olika organisationer producerar, utformar, namnger, organiserar och hanterar sina arbetsprodukter. Korrekt konfigurationshantering (se kapitel 5.4) säkerställer konsistens och integritet för arbetsprodukterna. Se följande lista över arbetsprodukter som resultat av testaktiviteter, den är inte komplett:
*   **Testplanering**: Testplan, testschema, riskregister, start- och avslutskriterier (se kapitel 5.1). Riskregister är en lista över risker tillsammans med risksannolikhet, riskpåverkan och information om riskreducering (se kapitel 5.2). Testschema, riskregister, start- och avslutskriterier är ofta en del av testplanen.
*   **Testövervakning och teststyrning**: Teststatusrapporter (se kapitel 5.3.2), dokumentation av styrdirektiv (se kapitel 5.3) och information om risker (se kapitel 5.2).
*   **Testanalys**: Prioriterade testvillkor (t.ex. acceptanskriterier, se kapitel 4.5.2) och felrapporter om defekter i testbasen (om de inte åtgärdats direkt).
*   **Testdesign.**: Prioriterade testfall, testcharter, täckningsobjekt, testdatakrav och testmiljökrav.
*   **Testimplementation**: Testprocedurer, testskript för manuell och automatiserad testning, testsviter, testdata, testexekveringsschema och testmiljöelement. Exempel på testmiljöelement är stubbar, drivrutiner, simulatorer och tjänstevirtualiseringar.
*   **Testexekvering**: Testloggar och felrapporter (se kapitel 5.5).
*   **Testavslut**: Sammanfattande testrapport (se kapitel 5.3.2), åtgärdspunkter för förbättring av efterföljande projekt eller iterationer, dokumenterade lärdomar och ändringsbegäran (t.ex. som produktbackloggobjekt).

#### 1.4.4. Spårbarhet mellan testbas och testvara
För att implementera effektiv testövervakning och teststyrning är det viktigt att etablera och upprätthålla spårbarhet genom hela testprocessen mellan testbaselementen, testvara associerad med dessa element (t.ex. testvillkor, risker, testfall), testresultat och defekter.

En korrekt spårbarhet stödjer täckningsutvärdering, så det är mycket användbart om mätbara täckningskriterier har definierats i testbasen. Täckningskriterierna kan fungera som nyckeltal för att användas i de aktiviteter som visar i vilken utsträckning testmålen har uppnåtts (se kapitel 1.1.1). Till exempel:
*   Spårbarhet av testfall till krav kan verifiera att kraven är täckta av testfall.
*   Spårbarhet av testresultat till risker kan användas för att utvärdera nivån på kvarvarande risker i ett testobjekt.

Förutom att utvärdera täckningen, gör god spårbarhet det möjligt att avgöra påverkan av förändringar, underlättar audit och hjälper till att uppfylla IT-styrningskriterier. God spårbarhet gör också teststatusrapporter och sammanfattande testrapporter lättare att förstå genom att inkludera status för testbaselementen. Detta kan också hjälpa till att kommunicera de tekniska aspekterna av testning till intressenter på ett begripligt sätt. Spårbarhet ger information för att bedöma produktkvalitet, processkapacitet och projektframsteg mot företagets mål.

#### 1.4.5. Roller i testningen
I denna kursplan tas två huvudroller inom testning upp: en testledningsroll och en testroll. De aktiviteter och uppgifter som tilldelas dessa två roller beror på faktorer som projekt- och produktkontext och kompetensen hos personerna i rollerna och organisationen.

Testledningsrollen tar ett övergripande ansvar för testprocessen, testteamet och ledarskapet för testaktiviteterna. Testledningsrollen är huvudsakligen inriktad på aktiviteterna testplanering, testövervakning och teststyrning samt testavslut. Sättet på vilket testledningsrollen utförs varierar beroende på sammanhanget. Till exempel kan i agil programvaruutveckling vissa av testhanteringsuppgifterna hanteras av det agila teamet. Uppgifter som spänner över flera team eller hela organisationen kan utföras av en testledingsroll utanför utvecklingsteamet.

Testrollen tar ett övergripande ansvar för den tekniska aspekten av testning. Testrollen är främst inriktad på aktiviteterna testanalys, testdesign, testimplementation och testexekvering.

Olika personer kan ta på sig dessa roller vid olika tidpunkter. Till exempel kan testledningsrollen utföras av en teamledare, en testledare eller testchef, en utvecklingschef etc. Det är också möjligt för en person att samtidigt ta rollen som testare och testledning.

### 1.5. Viktiga färdigheter och god praxis vid testning
Färdighet är förmågan att göra något bra som kommer från egen kunskap, praktik och begåvning. Bra testare bör ha vissa nödvändiga färdigheter för att göra sitt jobb bra. Bra testare ska vara effektiva lagspelare och ska kunna utföra testning på olika nivåer av testoberoende.

#### 1.5.1. Generiska färdigheter som krävs för testning
Även om de är generiska så är följande färdigheter särskilt relevanta för testare:
*   Testkunskap (för att öka effektiviteten i testningen, t.ex. genom att använda testtekniker)
*   Grundlighet, noggrannhet, nyfikenhet, uppmärksam på detaljer, metodisk (för att identifiera defekter, särskilt de som är svåra att hitta)
*   Bra kommunikationsförmåga, aktivt lyssnande, att vara en lagspelare (att interagera effektivt med alla intressenter, att förmedla information till andra, att bli förstådd och att rapportera och diskutera defekter)
*   Analytiskt tänkande, kritiskt tänkande, kreativitet (för att öka effektiviteten i testningen)
*   Teknisk kunskap (för att öka effektiviteten i testningen, t.ex. genom att använda lämpliga testverktyg)
*   Domänkunskap (för att kunna förstå och kommunicera med slutanvändare eller företagsrepresentanter)

Testare är ofta de som kommer med dåliga nyheter. Det är tyvärr ett vanligt mänskligt drag att skylla på den som kommer med dåliga nyheter. Detta gör kommunikationsförmågan avgörande för testare. Att kommunicera testresultat kan uppfattas som kritik mot produkten och dess författare. Bekräftelsebias kan göra det svårt att acceptera information som inte stämmer överens med nuvarande uppfattningar. Vissa människor kan uppfatta testning som en destruktiv aktivitet, även om den i hög grad bidrar till projektframgång och produktkvalitet. För att försöka förbättra denna syn bör information om defekter och fel kommuniceras på ett konstruktivt sätt.

#### 1.5.2. Hela teamets ansvar (Whole Team Approach)
En av de viktiga färdigheterna för en testare är förmågan att arbeta effektivt i ett teamsammanhang och att bidra positivt till teamets mål. Hela teamets ansvar – en praxis som kommer från Extreme Programming (se kapitel 2.1) – bygger på denna färdighet.

I hela teamets ansvar kan varje teammedlem med nödvändiga kunskaper och färdigheter utföra vilken uppgift som helst, och alla är ansvariga för kvaliteten. Teammedlemmarna delar samma arbetsplats (fysisk eller virtuell), eftersom samlokalisering underlättar kommunikation och interaktion. Hela teamets ansvar förbättrar dynamiken, kommunikationen och samarbetet inom teamet och skapar synergi genom att tillåta de olika kompetenserna inom teamet att utnyttjas till förmån för projektet.

Testare arbetar nära andra teammedlemmar för att säkerställa att de önskade kvalitetsnivåerna uppnås. Detta innebär samarbete med företagsrepresentanter för att hjälpa dem att skapa lämpliga acceptanstester och att arbeta med utvecklare för att komma överens om teststrategin och besluta om metoder för testautomatisering. Testare kan därmed överföra testkunskaper till andra teammedlemmar och påverka utvecklingen av produkten.

Beroende på sammanhanget kanske hela teamets ansvar inte alltid är lämpligt. Det kan exempel i vissa situationer, som säkerhetskritiska, behövas en hög nivå av testoberoende.

#### 1.5.3. Oberoende testning
En viss grad av oberoende gör testaren mer effektiv i att hitta defekter på grund av skillnader mellan författarens och testarens kognitiva synsätt (jfr Salman 1995). Oberoende är dock inte en ersättning för förtrogenhet, t.ex. kan utvecklare på ett effektivt sätt hitta många defekter i sin egen kod.

Arbetsprodukter kan testas av deras författare (inget oberoende), av författarens kollegor från samma team (viss oberoende), av testare från andra team men inom organisationen (högt oberoende), eller av testare utanför organisationen (mycket hög oberoende). I de flesta projekt är det fördelaktigt att kombinera flera nivåer av oberoende. Exempelvis kan utvecklare utföra komponenttestning och komponentintegrationstestning, testteam ansvara för system- och systemintegrationstestning och verksamhetsrepresentanter genomföra acceptanstester.

Den största fördelen med oberoende av testning är att oberoende testare sannolikt känner igen olika typer av felsymptom och defekter jämfört med utvecklare på grund av deras olika bakgrund, tekniska perspektiv och synsätt. Dessutom kan en oberoende testare verifiera, ifrågasätta eller motbevisa antaganden som gjorts av intressenter under specificering och implementering av systemet.

Men det finns också några nackdelar. Oberoende testare kan vara isolerade från utvecklingsteamet, vilket kan leda till bristande samarbete, kommunikationsproblem eller en fientlig relation med utvecklingsteamet. Utvecklare kan tappa känslan av ansvar för kvaliteten. Oberoende testare kan ses som en flaskhals eller skyllas på vid förseningar i releasen.
