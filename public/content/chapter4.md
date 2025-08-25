### Nyckelord
acceptanskriterier, acceptanstestdriven utveckling, black-box-testteknik, checklistebaserad testning, ekvivalensklassindelning, erfarenhetsbaserad testteknik, felgissning, gränsvärdesanalys, kodgrenstäckning, kodsatstäckning, samarbetsbaserat testangreppssätt, täckningsobjekt, testning med hjälp av beslutstabeller, testteknik, tillståndsbaserad testning, utforskande testning, white-box-testteknik

### Utbildningsmål för kapitel 4:

**4.1 Översikt över testtekniker**
*   FL-4.1.1 (K2) Skilj mellan black-box-, white-box- och erfarenhetsbaserade testtekniker

**4.2 Black-box-testtekniker**
*   FL-4.2.1 (K3) Använda ekvivalensklassindelning för att härleda testfall
*   FL-4.2.2 (K3) Använda gränsvärdesanalys för att härleda testfall
*   FL-4.2.3 (K3) Använda testning med hjälp av beslutstabeller för att härleda testfall
*   FL-4.2.4 (K3) Använda tillståndsbaserad testning för att härleda testfall

**4.3 White-box-testtekniker**
*   FL-4.3.1 (K2) Förklara kodsatstestning
*   FL-4.3.2 (K2) Förklara kodgrenstestning
*   FL-4.3.3 (K2) Förklara värdet med white-box-testning

**4.4 Erfarenhetsbaserade testtekniker**
*   FL-4.4.1 (K2) Förklara felgissning
*   FL-4.4.2 (K2) Förklara utforskande testning
*   FL-4.4.3 (K2) Förklara checklistebaserad testning

**4.5. Samarbetsbaserade testangreppssätt**
*   FL-4.5.1 (K2) Förklara hur användarberättelser skrivs i samarbete med utvecklare och verksamhetsrepresentanter
*   FL-4.5.2 (K2) Klassificera de olika alternativen för att skriva acceptanskriterier
*   FL-4.5.3 (K3) Använda acceptanstestdriven utveckling (ATDD) för att härleda testfall

### 4.1. Översikt över testtekniker
Testtekniker stödjer testaren i testanalys (vad man ska testa) och i testdesign (hur man testar). Testtekniker hjälper till att utveckla en relativt liten, men tillräcklig, uppsättning testfall på ett systematiskt sätt. Testtekniker hjälper också testaren med att definiera testvillkor, identifiera täckningsobjekt och identifiera testdata under testanalys och design. Ytterligare information om testtekniker finns i ISO/IEC/IEEE 29119-4-standarden och i Beizer 1990, Craig 2002, Copeland 2004, Koomen 2006, Jorgensen 2014, Ammann 2016, Forgács 2019.

I denna kursplan klassificeras testteknikerna som black-box, white-box och erfarenhetsbaserade.

**Black-box-testtekniker** (även kända som specifikationsbaserade tekniker) baseras på en analys av testobjektets specificerat beteende, utan referens till dess interna struktur. Därför är testfallen oberoende av hur programvaran är implementerad. Följaktligen är testfallen fortfarande användbara även om implementeringen ändras men det kravställda beteendet förblir detsamma,.

**White-box-testtekniker** (även kända som strukturbaserade tekniker) baseras på en analys av testobjektets interna struktur och exekvering. Eftersom testfallen är beroende av hur programvaran är designad kan de bara skapas efter design eller implementering av testobjektet.

**Erfarenhetsbaserade testtekniker** använder effektivt testarnas kunskap och erfarenhet för design och implementering av testfall. Effektiviteten hos dessa tekniker beror mycket på testarens förmågor. Erfarenhetsbaserade testtekniker kan upptäcka defekter som kan ha missats med black-box- och white-box-testteknikerna. Följaktligen är erfarenhetsbaserade testtekniker komplementära till dessa.

### 4.2. Black-Box-testtekniker
Vanligt använda black-box-testtekniker som tas upp i följande delkapitel är:
*   Ekvivalensklassindelning
*   Gränsvärdesanalys
*   Testning med hjälp av beslutstabeller
*   Tillståndsbaserad testning

#### 4.2.1. Ekvivalensklassindelning
Ekvivalensklassindelning (equivalence partition, EP) delar in data i klasser (kallas även ekvivalensklasser) baserat på förväntningen att alla element i en given klass ska behandlas på samma sätt av testobjektet. Teorin bakom denna teknik är att om ett testfall, som testar ett värde från en ekvivalensklass, upptäcker en defekt, bör denna defekt också upptäckas av testfall som testar något annat värde från samma klass. Därför räcker det med ett testfall för varje klass.

Ekvivalensklasser kan identifieras för alla dataelement som är relaterade till testobjektet, inklusive indata, utdata, konfigurationsobjekt, interna värden, tidsrelaterade värden och gränssnittsparametrar. Klasserna kan vara kontinuerliga eller diskreta, ordnade eller oordnade, ändliga eller oändliga. Klasserna får inte överlappa varandra och får inte vara tomma.

För enkla testelement kan ekvivalensklassindelningen vara enkel, men i praktiken är det ofta komplicerat att förstå hur testobjektet kommer att behandla olika värden. Därför måste klassindelningen göras med eftertanke.

En klass som innehåller giltiga värden kallas en giltig klass och en klass som innehåller ogiltiga värden kallas en ogiltig klass. Definitionerna av giltiga och ogiltiga värden kan variera mellan team och organisationer. Till exempel kan giltiga värden tolkas som de som ska bearbetas av testobjektet eller som de för vilka specifikationen definierar deras bearbetning. Ogiltiga värden kan tolkas som de som ska ignoreras eller avvisas av testobjektet eller som de för vilka ingen bearbetning är definierad i testobjektspecifikationen.

I ekvivalensklassindelning är täckningsobjekten ekvivalensklasserna. För att uppnå 100% täckning med denna testteknik måste testfall innehålla alla identifierade klasser (inklusive ogiltiga klasser) genom att täcka varje klass minst en gång. Täckningsgraden mäts som antalet klasser som testats av minst ett testfall, dividerat med det totala antalet identifierade klasser, och uttrycks i procent.

Många testelement inkluderar flera uppsättningar av klasser (t.ex. testelement med mer än en indataparameter), vilket innebär att ett testfall kommer att täcka klasser från olika uppsättningar av klasser. Det enklaste täckningskriteriet i fallet med flera uppsättningar av klasser kallas Each Choice-täckning (Ammann 2016). Each Choice-täckning kräver att testfall testar varje klass från varje uppsättning klasser minst en gång. Each Choice-täckning tar inte hänsyn till kombinationer av klasser.

#### 4.2.2. Gränsvärdesanslys
Gränsvärdesanslys (Boundary Value Analysis, BVA) är en testteknik som bygger på att testa gränserna för ekvivalensklasser. Därför kan BVA endast användas för ordnade klasser. Lägsta och högsta värdena i en klass utgör dess gränsvärden. För BVA gäller att om två element tillhör samma klass så måste alla element mellan dem också tillhöra den klassen.

BVA fokuserar på klassernas gränsvärden för klasserna eftersom utvecklare är mer benägna att göra fel vid hantering av dessa gränsvärden. Typiska defekter som hittas av BVA är gränser som är felplacerade till positioner över eller under deras avsedda positioner, eller är helt utelämnade.

Denna kursplan omfattar två versioner av BVA: 2-värdes och 3-värdes BVA. De skiljer sig åt vad gäller täckningsobjekt per gräns som måste testas för att uppnå 100% täckning.

I 2-värdes BVA (Craig 2002, Myers 2011) krävs det två täckningsobjekt för varje gränsvärde: detta gränsvärde och dess närmaste granne som tillhör den intilliggande klassen. För att uppnå 100% täckning med 2-värdes BVA måste testfall testa alla täckningsobjekt, d.v.s. alla identifierade gränsvärden. Täckningen mäts som antalet testade gränsvärden dividerat med det totala antalet identifierade gränsvärden, och uttrycks i procent.

I 3-värdes BVA (Koomen 2006, O'Regan 2019) krävs det tre täckningsobjekt för varje gränsvärde: detta gränsvärde och båda dess grannar. Därför kan vissa av täckningsobjekten här inte vara gränsvärden. För att uppnå 100 % täckning med 3-värdes BVA måste testfall testa alla täckningsobjekt, d.v.s. identifierade gränsvärden och deras grannar. Täckningsgraden mäts som antalet testade gränsvärden och deras grannar, dividerat med det totala antalet identifierade gränsvärden och deras grannar, och uttrycks i procent.

3-värdes BVA är mer rigoröst än 2-värdes BVA eftersom det kan upptäcka defekter som förbises av 2-värdes BVA. Till exempel, om beslutspunkten "if (x ≤ 10) ..." är felaktigt implementerat som "if (x = 10) ...", kan inga testdata härledda från 2-värdes BVA (x = 10, x = 11) detektera defekten. Men x = 9, härledd från 3-värdes BVA, kommer sannolikt att upptäcka det.

#### 4.2.3. Testning med hjälp av beslutstabeller
Beslutstabeller används för att testa implementeringen av krav som anger hur olika kombinationer av villkor ger olika utfall. Beslutstabeller är ett effektivt sätt att registrera komplex logik, såsom verksamhetsregler.

När beslutstabeller skapas så definieras villkoren och de resulterande åtgärderna som ska utföras i systemet. Dessa bildar raderna i tabellen. Varje kolumn motsvarar en beslutsregel som definierar en unik kombination av villkor, tillsammans med tillhörande åtgärder. I beslutstabeller med begränsat indata visas alla värden för villkoren och åtgärderna (förutom irrelevanta eller omöjliga, se nedan) som booleska värden (sant eller falskt). I beslutstabeller med utökat indata kan alternativt vissa eller alla villkor och åtgärder också anta flera värden (t.ex. numeriska intervall, ekvivalensklasser, diskreta värden).

Beteckningen för villkor är följande: "T" (true/sant) betyder att villkoret är uppfyllt. "F" (falskt) betyder att villkoret inte är uppfyllt. "-" betyder att värdet av villkoret är irrelevant för åtgärdsresultatet. "N/A" betyder att villkoret är omöjligt för en given regel. För åtgärder: "X" betyder det att åtgärden ska ske, Blank betyder att åtgärden inte ska ske. Andra notationer kan också användas.

En fullständig beslutstabell har tillräckligt med kolumner för att täcka varje kombination av villkor. Tabellen kan förenklas genom att ta bort kolumner som innehåller omöjliga kombinationer av villkor. Tabellen kan också minimeras genom att slå samman kolumner till en enda kolumn, där vissa förhållanden inte påverkar resultatet. Algoritmer för minimering av beslutstabeller ligger utanför denna kursplan.

Vid testning med hjälp av beslutstabeller är täckningsobjekten de kolumner som innehåller möjliga kombinationer av villkor. För att uppnå 100% täckning med denna teknik måste testfall testa alla dessa kolumner. Täckningen mäts som antalet testade kolumner, dividerat med det totala antalet möjliga kolumner, och uttrycks i procent.

Styrkan med testning med hjälp av beslutstabeller är att det ger ett systematiskt angreppssätt för att identifiera alla kombinationer av villkor, av vilka några annars skulle kunna förbises. Det hjälper också till att hitta eventuella luckor eller motsägelser i kraven. Om det finns många villkor kan det vara tidskrävande att testa alla beslutsregler eftersom antalet regler växer exponentiellt med antalet villkor. I ett sådant fall kan en minimerad beslutstabell eller ett riskbaserat angreppssätt användas för att minska antalet regler som behöver testas.

#### 4.2.4. Tillståndsbaserad testning
Ett tillståndsdiagram modellerar beteendet hos ett system genom att visa dess möjliga tillstånd och giltiga tillståndsövergångar. En övergång initieras av en händelse, som dessutom kan vara styrd av ett logiskt villkor (vaktvillkor). Övergångarna antas vara omedelbara och kan ibland leda till att programvaran vidtar åtgärder. Den vanliga syntaxen för övergångar är: "händelse [vaktvillkor] / åtgärd". Vaktvillkor och åtgärder kan utelämnas om de inte finns eller är irrelevanta för testaren.

En tillståndstabell är en modell som motsvarar ett tillståndsdiagram. Dess rader representerar tillstånd och dess kolumner representerar händelser (tillsammans med vaktvillkor om de finns). Tabellposter (celler) representerar övergångar och innehåller måltillståndet och resulterande åtgärder, om de är definierade. I motsats till tillståndsdiagrammet visar tillståndstabellen uttryckligen ogiltiga övergångar, som representeras av tomma celler.

Ett testfall baserat på ett tillståndsdiagram eller tillståndstabell representeras vanligtvis i form av en sekvens av händelser, vilket resulterar i en sekvens av tillståndsändringar (och åtgärder, om det behövs). Ett testfall kan, och kommer vanligtvis att, täcka flera övergångar mellan tillstånd.

Det finns många täckningskriterier för tillståndsbaserad testning. Denna kursplan tar upp tre av dem.

I **täckning av alla tillstånd** är täckningsobjekten tillstånden. För att uppnå 100 % täckning för alla tillstånd måste testfallen säkerställa att alla tillstånd är exekverade. Täckningen mäts som antalet exekverade tillstånd dividerat med det totala antalet tillstånd, och uttrycks i procent.

I **täckningar av giltiga övergångar** (även kallad 0-switch-täckning) är täckningsobjekten enskilda giltiga övergångar. För att uppnå 100% giltig övergångstäckning måste testfall testa alla giltiga övergångar. Täckningen mäts som antalet exekverade giltiga övergångar dividerat med det totala antalet giltiga övergångar, och uttrycks i procent.

I **täckning av alla övergångar** är täckningsobjekten alla övergångar som visas i en tillståndstabell. För att uppnå 100% täckning av alla övergångar måste testfallen exekvera alla giltiga övergångar och försöka exekvera ogiltiga övergångar. Att testa endast en ogiltig övergång i ett enda testfall hjälper till att undvika felmaskering, dvs en situation där en defekt förhindrar upptäckten av en annan.

Täckning mäts som antalet giltiga och ogiltiga övergångar som exekverats eller försökt täckas av genomförda testfall, dividerat med det totala antalet giltiga och ogiltiga övergångar, och uttrycks i procent.

Täckningen av alla tillstånd är svagare än täckning av giltiga övergångar, eftersom den vanligtvis kan uppnås utan att exekvera alla övergångar. Giltig övergångstäckning är det mest använda täckningskriteriet. Att uppnå full giltig övergångstäckning garanterar full täckning av alla tillstånd. Att uppnå full täckning av alla övergångar garanterar både full täckning av alla tillstånd och full giltig täckning av övergångar och bör vara ett minimikrav för verksamhets- och säkerhetskritisk programvara.

### 4.3. White-Box-testtekniker
På grund av deras popularitet och enkelhet fokuserar det här delkapitlet på två kodrelaterade white-box-testtekniker:
*   Kodsatstestning (statement testing)
*   Kodgrenstestning (branch testing)

Det finns mer noggranna white-box-testtekniker som används i vissa säkerhetskritiska, verksamhetskritiska eller högintegritetsmiljöer för att uppnå en mer grundlig kodtäckning. Det finns också white-box-testtekniker som används på högre testnivåer (t.ex. API-testning) eller använder täckning som inte är relaterad till kod (t.ex. neurontäckning vid testning av neurala nätverk). Dessa tekniker tas inte upp i denna kursplan.

#### 4.3.1. Kodsatstestning och kodsatstäckning
Vid kodsatstestning är täckningsobjekten exekverbara kodsatser. Syftet är att designa testfall som exekverar kodsatser tills en acceptabel täckningsgrad uppnås. Täckning mäts som antalet kodsatser som exekverats av testfallen dividerat med det totala antalet exekverbara kodsatserna och uttrycks i procent.

När 100% kodsatstäckning uppnås säkerställer det att alla exekverbara kodsatser i koden har testats minst en gång. Detta innebär alltså att varje kodsats med en defekt kommer att exekveras, vilken kan resultera i ett felsymptom som visar närvaron av defekten. Men att exekvera en kodsats med ett testfall kommer inte att upptäcka defekter i alla situationer. Defekter som är databeroende (t.ex. en division med noll som bara misslyckas när en nämnare är noll) kanske inte upptäcks. Dessutom säkerställer inte 100% kodsatstäckning att all beslutslogik har testats eftersom den kanske inte har exekverat alla grenar (se kapitel 4.3.2) i koden.

#### 4.3.2. Kodgrenstestning och kodgrenstäckning
En kodgren är en överföring av kontrollen mellan två noder i ett kontrollflödesdiagram, som visar de möjliga sekvenserna i vilka källkodssatserna exekveras i testobjektet. Varje kontrollöverföring kan vara antingen ovillkorad (dvs. linjär kod) eller villkorad (d.v.s. ett beslutsutfall).

Vid kodgrentestning är täckningsobjekten kodgrenar och syftet är att designa testfall för att exekvera kodgrenar tills en acceptabel täckningsnivå uppnås. Täckningen mäts som antalet kodgrenar som exekverats av testfallen dividerat med det totala antalet kodgrenarna, och uttrycks i procent.

När 100% kodgrenstäckning har uppnåtts så har alla kodgrenar, ovillkorade och villkorade, exekverats av testfall. Villkorade kodgrenar motsvarar vanligtvis ett sant eller falskt utfall från ett "if...then"-beslut, ett resultat från en switch/case-sats eller ett beslut att avsluta eller fortsätta i en loop. Men att exekvera en kodgren med ett testfall kommer inte att upptäcka defekter i samtliga fall. Det kanske inte upptäcker defekter som kräver exekvering av en specifik väg i en kod.

Kodgrentäckning inbegriper kodsatstäckning. Detta innebär att varje uppsättning testfall som uppnår 100% kodgrenstäckning också uppnår 100% kodsatstäckning (men inte vice versa).

#### 4.3.3. Värdet med white-box-testning
En grundläggande styrka som alla white-box-testtekniker delar är att hela programvaruimplementeringen beaktas under testning, vilket underlättar felupptäckt även när programvaruspecifikationen är vag, förådrad eller ofullständig. En motsvarande svaghet är att om programvaran inte implementerar ett eller flera krav så kan white-box-testningen inte upptäcka de resulterande felen på grund av utelämnandet (Watson 1996).

White-box-testtekniker kan användas vid statisk testning (t.ex. under torrexekvering av kod). De lämpar sig väl för att granska kod som ännu inte är klar för exekvering (Hetzel 1988), pseudokod och annan högnivå- eller top-down logik som kan modelleras med ett kontrollflödesdiagram.

Att endast utföra black-box-testning kan inte ge ett mått på faktisk kodtäckning. White-box-täckningsmätning ger ett objektivt mått på täckningen och nödvändig information för att skapa ytterligare tester för att öka täckningen, och därefter öka förtroendet för koden.

### 4.4. Erfarenhetsbaserade testtekniker
Vanligt använda erfarenhetsbaserade testtekniker som tas upp i följande avsnitt är:
*   Felgissning
*   Utforskande testning
*   Checklistebaserad testning

#### 4.4.1. Felgissning
Felgissning är en testteknik som används för att förutse förekomsten av misstag, defekter och felsymptom, baserat på testarens kunskap, inklusive:
*   Hur applikationen har fungerat tidigare
*   Vilka typer av misstag utvecklarna tenderar att göra och vilka typer av defekter som är resultatet av dessa misstag
*   Vilka typer av felsymptom som har inträffat i andra liknande applikationer

I allmänhet kan misstag, defekter och felsymptom vara relaterade till indata: (t.ex. korrekt indata accepteras inte, felaktiga eller saknade parametrar), utdata (t.ex. fel format, fel resultat), logik (t.ex. saknade fall, fel operator), beräkning (t.ex. felaktig operand, felaktig beräkning), gränssnitt (t.ex. icke matchade parametrar, inkompatibla typer) eller data (t.ex. felaktig initiering, fel typ).

Felattacker är ett sätt att implementera felgissning. Denna testteknik kräver att testaren skapar eller skaffar en lista över möjliga misstag, defekter och felsymptom och designar tester för att identifiera defekter som är förknippade med misstagen, och sedan avslöja defekterna eller orsakerna till felsymptomen. Skapandet av dessa listor kan baseras på erfarenhet, defekt- och felsymptomdata eller från allmän kunskap om varför programvaran misslyckas.

Se (Whittaker 2002, Whittaker 2003, Andrews 2006) för mer information om felgissning och felattacker.

#### 4.4.2. Utforskande testning
I utforskande testning designas, exekveras och utvärderas testerna samtidigt som testaren lär sig om testobjektet. Testningen används också för att lära sig mer om testobjektet, att utforska testobjektet djupare med fokuserade tester och för att skapa tester för otestade områden.

Utforskande testning genomförs ibland som sessionsbaserad testning för att strukturera testningen. I ett sessionsbaserat arbetssätt genomförs utforskande testning inom en definierad tidsram (time-box). Testaren använder en testcharter som innehåller testmålen för att styra testningen. Efter testsessionen genomförs vanligtvis en debriefing med en diskussion mellan testaren och intressenter som är intresserade av testresultaten från testsessionen. Med detta arbetssätt kan testmålen hanteras som högnivå-testvillkor. Täckningsobjekten identifieras och exekveras under testsessionen. Testaren kan använda testsessionsblad för att dokumentera de steg som följs och de upptäckter som gjorts.

Utforskande testning är användbar när det finns få eller otillräckliga specifikationer eller vid en betydande tidspress på testningen. Utforskande testning är också användbart för att komplettera andra mer formella testtekniker. Den kommer att bli effektivare om testaren är erfaren, har domänkunskaper och har en hög grad av väsentliga färdigheter, som analytiskt tänkande, nyfikenhet och kreativitet (se kapitel 1.5.1).

Utforskande testning kan innefatta användning av andra testtekniker (t.ex. ekvivalensklassindelning). Mer information om utforskande testning finns i (Kaner 1999, Whittaker 2009, Hendrickson 2013).

#### 4.4.3. Checklistebaserad testning
I checklistebaserad testning designar, implementerar och exekverar en testare tester för att täcka testvillkoren utgående från en checklista. Checklistor kan byggas utifrån erfarenhet, kunskap om vad som är viktigt för användaren, eller en förståelse för varför och hur programvara fallerar. Checklistor ska inte innehålla objekt som kan kontrolleras automatiskt, objekt som är bättre lämpade som start- eller avslutskriterier eller objekt som är för generella (Brykczynski 1999).

Poster i en checklista är ofta formulerade som en fråga. Det ska vara möjligt att kontrollera varje post separat och direkt. Posterna kan hänvisa till krav, egenskaper för grafiskt gränssnitt, kvalitetsegenskaper eller andra former av testvillkor. Checklistor kan skapas för att stödja olika testtyper, inklusive funktionell och icke-funktionell testning (t.ex. 10 heuristics for usability testing (Nielsen 1994)).

Vissa checklisteposter kan gradvis bli mindre effektiva med tiden eftersom utvecklarna lär sig att undvika att göra samma misstag. Nya poster kan också behöva läggas till för att återspegla nyfunna defekter med hög allvarlighetsgrad. Därför bör checklistor uppdateras regelbundet baserat på defektanalyser. Man bör dock undvika att checklistan blir för lång (Gwande 2009).

I avsaknad av detaljerade testfall kan checklistebaserad testning ge riktlinjer och en viss grad av enhetlighet i testningen. Om checklistorna är på hög nivå kommer sannolikt viss variation i själva testningen att uppstå, vilket kan resultera i potentiellt större täckning men mindre repeterbarhet.

### 4.5. Samarbetsbaserade testangreppssätt
Var och en av de ovan nämnda testteknikerna (se kapitel 4.2, 4.3, 4.4) har ett särskilt syfte med avseende på defektdetektering. Samarbetsbaserade angreppssätt, å andra sidan, fokuserar också på att undvika defekter genom samarbete och kommunikation.

#### 4.5.1. Skriva användarberättelser i samarbete
En användarberättelse representerar en funktion som kommer att vara värdefull för antingen en användare eller köpare av ett system eller programvara. Användarberättelser har tre kritiska aspekter (Jeffries 2000), som tillsammans kallas för "3 C:na":
*   **Kort (Card)** – mediet som beskriver en användarberättelse (t.ex. ett registerkort, en post på en elektronisk tavla)
*   **Konversation (Conversation)** – förklarar hur programvaran kommer att användas (kan dokumenteras eller verbalt)
*   **Bekräftelse (Confirmation)** – acceptanskriterierna (se kapitel 4.5.2)

Det vanligaste formatet för en användarberättelse är "Som en [roll] vill jag att [målet ska uppnås], så att jag kan [resulterande affärsvärde för rollen]", följt av acceptanskriterierna.

Vid samarbetande författarskap av användarberättelser kan tekniker som brainstorming och mindmapping användas. Samarbetet gör att teamet får en gemensam vision om vad som ska levereras, genom att ta hänsyn till tre perspektiv: verksamhet, utveckling och testning.

Bra användarberättelser bör vara Oberoende, Förhandlingsbara, Värdefulla, Uppskattningsbara, Små och Testbara (INVEST: Independent, Negotiable, Valuable, Estimable, Small and Testable). Om en intressent inte vet hur man testar en användarberättelse kan det tyda på att användarberättelsen inte är tillräckligt tydlig, eller att den inte speglar något värdefullt för denne, eller att intressenten bara behöver hjälp med att testa (Wake 2003).

#### 4.5.2. Acceptanskriterier
Acceptanskriterier för en användarberättelse är de villkor som en implementering av användarberättelsen måste uppfylla för att accepteras av intressenter. Ur detta perspektiv kan acceptanskriterier ses som de testvillkor som bör exekveras av testerna. Acceptanskriterier är vanligtvis ett resultat av Konversationen (se kapitel 4.5.1).

Acceptanskriterier används för att:
*   Definiera omfattningen av användarberättelsen
*   Uppnå konsensus bland intressenterna
*   Beskriva både positiva och negativa scenarier
*   Fungera som bas för acceptanstestning av användarberättelser (se kapitel 4.5.3)
*   Möjliggöra rätt planering och uppskattning

Det finns flera sätt att skriva acceptanskriterier för en användarberättelse. De två vanligaste formaten är:
*   Scenarioorienterat (t.ex. formatet Given/When/Then som används i BDD, se kapitel 2.1.3)
*   Regelorienterat (t.ex. verifieringslista med punkter, eller tabellform med input-output-mappning)

De flesta acceptanskriterier kan dokumenteras i något av dessa två format. Teamet kan dock använda ett annat anpassat format, så länge acceptanskriterierna är väldefinierade och entydiga.

#### 4.5.3. Acceptanstestdriven utveckling (ATDD)
ATDD är en test-first-metod (se kapitel 2.1.3). Testfall skapas innan användarberättelsen implementeras. Testfallen skapas av teammedlemmar med olika perspektiv, t.ex. kunder, utvecklare och testare (Adzic 2009). Testfallen kan exekveras manuellt eller automatiserat.

Det första steget är en specifikationsworkshop där användarberättelsen och (om inte ännu definierad) dess acceptanskriterier analyseras, diskuteras och skrivs av teammedlemmarna. Ofullständigheter, oklarheter eller defekter i användarberättelsen löses under denna process. Nästa steg är att skapa testfallen. Detta kan göras av teamet som helhet eller av testaren individuellt. Testfallen baseras på acceptanskriterierna och kan ses som exempel på hur programvaran fungerar. Detta kommer att hjälpa teamet att implementera användarberättelsen korrekt.

Eftersom exempel och tester är detsamma används dessa termer ofta omväxlande. Under testdesign kan de testtekniker som beskrivs i kapitel 4.2, 4.3 och 4.4 tillämpas.

Vanligtvis är de första testfallen positiva, och bekräftar det korrekta beteendet utan undantag (exception) eller feltillstånd, och omfattar sekvensen av aktiviteter som utförs om allt går som förväntat. Efter att de positiva testfallen är genomförda ska teamet utföra negativa tester. Slutligen bör teamet täcka icke-funktionella kvalitetsegenskaper (t.ex. prestandaeffektivitet och användbarhet).

Testfall ska skrivas på ett sätt som är förståeligt för intressenterna. Vanligtvis innehåller testfallen meningar på naturligt språk som inkluderar de nödvändiga förutsättningarna (om några), indata och sluttillstånd.

Testfallen måste täcka alla egenskaper hos användarberättelsen och ska inte gå utanför berättelsen. Acceptanskriterierna kan dock beskriva några av de problem som beskrivs i användarberättelsen. Dessutom ska inte fler testfall beskriva samma egenskaper hos användarberättelsen.

När utvecklarna vägleds av ett format som stöds av ett ramverk för testautomatisering kan de automatisera testfallen genom att använda vägledningen vid implementationen av funktionen som beskrivs av en användarberättelse. Acceptanstesterna blir då exekverbara krav.
