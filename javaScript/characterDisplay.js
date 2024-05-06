
// Function to render charracter page based on the carracter that was clicked
async function renderCharracterPage(charracter) {

    let charracterText;
    let characterMovie;
    let characterTraits;
    let characterAttribute;
    let className;
    let charracterTimeAndPlace;
    let charracterAction;
    let charracterSaw;
    let charracterConnectionToWalt;
    let charracterHint;

    //Define carracter text based on charracter selected
    switch (charracter) {
        case "Kapten Krok":
            charracterTimeAndPlace = "HA HA, Jag var och hade sällskap på mitt skepp den natten. Detta får du hålla hemligt -  men jag gjorde sällskap med <span>Hjärter Dam</span> den kvällen. Så jag vet inte vad som hände i slottet.";
            charracterAction = "Jag var på det förbaskade tråkiga morgonmötet, jag hängde sedan med till <span>Chef Skinners</span> restaurang tillsammans med <span>Hattmakaren</span> och <span>Skinner</span>. Efter den utsökta maten som Chef Skinner gjorde åt oss, sedan hjälpte vi <span>Hattmakaren</span> att förbereda inför kvällens fest! Vi tog en runda in till Systembolaget och köpte det berusande elixiret. Fattar du att man endast kan köpa elixir från EN BUTIK?!?!?! vilket skit land HA HA HA! Men jaa fan va vi ska festa. Efter festen mötte jag upp <span>Hjärter Dam</span> vid slottet och avslutade natten på skeppet.";
            charracterSaw = "Menar du på festen? hmm såg att alla hade roligt och att jag tömde några flaskor elixir hehehe. Jag märkte att det blev lite tunt på folk inne hos <span>Hattmakaren</span>, jag såg att <span>Musse</span> och <span>Chef Skinner</span> försvinna en stund under kvällen.";
            charracterConnectionToWalt = " Men jag är ändå glad att jag fick den rollen jag fick och att jag blev jag. Jag önskade dock att jag fick min hämnd på den förbannade Peter Pan.";
            characterMovie = "Peter Pan";
            characterTraits = "Stolt, listig, besatt av Peter Pan";
            characterAttribute = "Lila Sjörövarhatt, röd kappa, en krok till hand";
            className = "kaptenKrok";
            break;
        case "Cruella de Vil":
            charracterTimeAndPlace = "Träff med tjejgänget efter mötet, sedan på middag med <span>Walt</span> och några andra på slottet.  Hade svårt att sova så jag var uppe sent och stirrade ut genom fönstrete och såg <span>Kapten Krok</span> och <span>Hjärter Dam</span> lämna slottet.";
            charracterAction = "Ja, jag tog mig till det förbaskade mötet som jag tycker Walt satte onödigt tidigt… MEN MEN.. efter det blev övertalades jag av tjejgruppen att ses innan middagen som Walt bjöd in oss på. Vad jag och tjejerna gjorde? nej, men vi bara gick runt i parken och utforskade Malmö. Jag visste inte att de kunde babbla på så där mycket så jag sa “vi ses senare på middagen” och drog tillbaka till slottet jag passade på att röka nu när den störiga <span>lilla flickan</span> inte konstant tjata och drog i mig. Jag vilade i mitt rum tills middagen där jag återigen träffade tjejgänget och <span>Walt</span>. Maten var ok, har ätit bättre.  När jag såg <span>Hjärter Dam</span> vid middagsbordet kunde jag inte släppa tanken på vad hon berättade tidigare vid lunchtid, att <span>hon</span> och <span>Kapten Krok</span> skulle träffas på natten!";
            charracterSaw = "<span>Hjärter Dam</span> och <sapn>Kapten Krok</span> gjorde sällskap till kroks skepp den natten.";
            charracterConnectionToWalt = "Känt <span>Walt</span> i många år men hatar att han gör så många karaktärer som djur … SPECIELLT NEMO och vad det dumma lejonet nu heter, man kan ju inte göra en rock av den dumma lilla fisken..";
            characterMovie = "De 101 dalmatinerna";
            characterTraits = "Extravagant, empatilös, hänsynslös och skoningslös";
            characterAttribute = "Vit pälsjacka och cigarettmunstycke";
            className = "cruellaDeVil";
            break;
        case "Musse":
            charracterTimeAndPlace = "Jag var på <span>hattmakarens</span> fest på kvällen till mordet för att sedan somna i slottet under natten. Jag befann mig i slottet under natten när <span>Walt</span> dog. Jag uppfattade inget speciellt och när jag fick informationen om Walts död så gick mitt hjärta itu.";
            charracterAction = "Jag var på mötet precis som alla andra, gick på lunchen som <span>Walt</span> bjöd in till och sen gick jag och handlade med <span>Hades</span>. Mot kvällen, mötte jag sedan upp <span>Snövit, Hades</span> och <span>Törnrosa</span> och på slottet och var hos <span>Hattmakaren</span> resten av kvällen.";
            charracterSaw = "Såg massor av personal på morgondagen rusande mot Walts våning. Jag sprang upp i min morgonrock och befann mig i stor chock och panik.  Jag sprang emot hans rum och såg bara massa sjukvårdspersonal och poliser runt om på hela våningsplanet. Jag kände mig så hjälplös. Så förkrossad. Jag trodde aldrig att något sådant skulle kunna hända.";
            charracterConnectionToWalt = "Bästa vän.".
            characterMovie = "Disneys fronfigur";
            characterTraits = "Positiv, intelligent, modig";
            characterAttribute = "Vita handskar, röda byxor och gula skor";
            className = "musse";
            break;
        case "Ursulla":
            charracterTimeAndPlace = "Blubb Blubb, efter middagen på slottet så var jag i min bassäng på slottet hela natten.";
            charracterAction = "Jag var först på mötet som tog en väldans tid, sedan ville den störiga <span>Törnrosa</span> ta med oss på en runda i parken … Det finns inget annat att göra här på den här bedrövliga platsen. Hon släpade runt oss på nån tjejträff men när <span>Cruella</span> stack så tänkte jag att jag sticker också snart. Senare så var jag på middagen som <span>Walt</span> bjöd på, vi drack en massa berusande elixir <span>jag, Walt</span> och <span>Cruella</span>, mest jag och <span>Cruella</span> hehehe det var ju gratis. Varför var jag inte på festen? pfft… med töntarna… det tänker jag inte slösa tid på.";
            charracterSaw = "Jag såg en <span>kort silhouette</span> springande i korridoren utanför mig. Nu i efterhand så kan jag koppla att <span>Walts</span> rum ligger bara tre dörrar ifrån min! Detta skedde sent på natten, men det var bara en reflektion och jag visste inte vad det innebar förrän vi hade denna diskussion.";
            charracterConnectionToWalt = "Han har ändå haft en god konversation. Men jag skulle väl säga att jag blev besviken när jag inte fick Prins Erik. Jag har varit med om så mycket och tycker ändå att jag också kunde få ett lyckligt slut som Ariel?";
            characterMovie = "Lilla sjöjungfrun";
            characterTraits = "Manipulativ, bedräglig, själviskt";
            characterAttribute = "Svart lila klänning, blå lila hud, och ett snäckskal till halsband";
            className = "ursulla";
            break;
        case "Hades":
            charracterTimeAndPlace = "Ja, som många andra var jag också på <span>Hattmakarens</span> fest. Jag tillsammans med <span>Snövit</span> och <span>Musse</span> gick tillbaka till slottet på natten och därefter träffade jag ingen mer, vi alla gick åt skilda vägar inne på slottet och jag la mig.";
            charracterAction = "Ja, jag var på det tråkiga morgonmötet, efter det så stannade jag på slottet tillsammans med <span>Musse, Walt, Prins John</span> och <span>Snövit</span>. Walt bjöd alla på mat men vissa ville sticka till andra ställen men det orkade inte jag. Vi satt där i flera timmar och sen drog jag till mitt rum och lämnade inte rummet ALLS förrän jag mötte upp de övriga som skulle till festen som <span>Hattmakaren</span> bjöd in mig på. <span>Jag, Musse, Törnrosa</span> och <span>Snövit</span> bestämde oss för att vi alla drar tillsammans till festen. Vi skulle träffas 17:45 nere på slottet men Törnrosa kom såklart sent och hade någon dålig ursäkt, hon försov sig säkert. Man skulle vilja tro att efter man har sovit i 100 år att man faktiskt vill göra något med dagen men men…  Vi kom fram vid 18:00 tror jag och <span>Hattmakaren</span> hade skaffat otroliga mängder berusande elixir så jag köttade på hela natten!  Och oj jävlar vad herr <span>Krok</span> kan dricka… Måste varit vilt på hans skepp hehehe.";
            charracterSaw = "Hmm… sett någonting? Det jag har såg var att vi som var på festen hällde i oss elixir. Mitt minne är ganska blurrigt men jag minns att jag drog tillbaka till slottet på natten med <span>Musse</span> och <span>Snövit</span>.";
            charracterConnectionToWalt = "WALT? Den gamla gubben, HAH han förtjänade det efter vad han gjorde mot mig i Herkules …";
            characterMovie = "Hercules";
            characterTraits = "Självsäker, Hämndlysten, Härskare";
            characterAttribute = "Stor, lång och mörkklädd, Brinnande hår, och dödens gud";
            className = "hades";
            break;
        case "Darla":
            charracterTimeAndPlace = "Efter middagen på slottet blev jag hemkörd av <span>Walts</span> personal.";
            charracterAction = "Blööö … var på det tråkiga mötet på morgonen.. fattade ingenting men det var över efter några timmar. Jag fick inte hänga med till lunchen med <span>Chef Skinner</span> så jag satt utanför slottet och letade efter några fiskar i vattnet som går runt slottet. Det fanns inga… <span>Cruella</span> gick förbi mig och frågade om jag ville hänga med på en liten sväng runt parken så jag hängde med. När vi kom tillbaka så visade Walt runt mig i slottet innan middagen. <span>Walts</span> middag var sååå god! Men det blev sent och <span>Walt</span> fixade så att en bil kom och körde hem mig till mina föräldrar för att jag skulle ha extra mycket energi när nöjesfältet öppnar imorgon!";
            charracterSaw = "Inga fiskar 🙁 WÄÄÄHHH";
            charracterConnectionToWalt = "Jag ser Walt lite som en cool pappa.";
            characterMovie = "Hitta nemo";
            characterTraits = "Obekymrad, bortskämd, och ovarsam";
            characterAttribute = "Tandställning, lila tröja med text “rock n roll, girl";
            className = "darla";
            break;
        case "Törnrosa":
            charracterTimeAndPlace = "Jag var på festen hos <span>Hattmakaren</span> och sedan tog jag mig hem lite tidigare för att jag hade planerat en frukost tillsammans med <span>Walt</span>.";
            charracterAction = "Jag var på mötet tillsammans med alla andra, mötet var långt men det var kul att träffa alla igen! Jag blev inbjuden till <span>Hattmakarens</span> fest senare på kvällen så jag passade på att träffa de som inte skulle dit. <span>Hattmakaren</span> sa att det kommer bli riktigt roligt och att flera från mötet skulle komma. Jag passade därför på att träffa <span>Cruella, Darla ,Ursula</span> och <span>Hjärter Dam</span> för att de berättade att de inte kunde komma på festen och att de skulle äta middag med <span>Walt</span> istället. Jag var sugen på en rolig fest så jag skippade middagen som <span>Walt</span> bjöd oss på. Efter några timmar gick jag tillbaka för att träffa på snövit och göra oss iordning till <span>Hattmakarens</span> fest. Jag kom till <span>Hattmakaren</span> runt 18:00 eller något och gick dit tillsammans med <span>Musse, Törnrosa, Snövit</span> och <span>Hades</span> för vi alla bor på slottet. Utanför Hattmakaren stötte vi på <span>Kapten Krok</span> som kom från ett annat håll. Efter några timmar så gick jag tillbaka ensam för jag hade planerat min frukost med <span>Walt</span> på morgonen. <span>Walt</span> dök aldrig upp och det var då jag gick till hans rum och fann honom på golvet.";
            charracterSaw = "Såg ingenting på kvällen eller natten eftersom hon la sig tidigt. Men hittade <span>Walt</span> i hans rum på morgonen och kallade på hjälp. Spillror av porslin och vätska utspritt på det blöta golvet. Jag slog larm och gjorde hjärt- och lungräddning tills polis och ambulans kom. Personalen hann inte i tid men de kunde utesluta att WALT hade blivit förgiftad!";
            charracterConnectionToWalt = "Positiv inställning mot <span>Walt</span>, hon gillar att <span>Walt</span> förvandlade henne till en prinsessa där hon fick leva lyckligt i alla sina dagar.";
            characterMovie = "Törnrosa";
            characterTraits = "Ödmjuk, optimistisk, och romantisk";
            characterAttribute = "Rosa/Blå klänning, Blond/ljushårig prinsessa, Tiara eller diadem på huvudet";
            className = "törnrosa";
            break;
        case "Snövit":
            charracterTimeAndPlace = "Självaste mordnatten så var jag i slottet men jag sov en av flyglarna. Jag var i slottet från typ 00.00 och vaknade cirka 09.00 för att väckas av den hemska nyheten.";
            charracterAction = "Jadu, jag var ju på mötet på morgonen den 18:e som alla andra var på… Jaha, du vet inte vad det handlade om? Jo, det var så att under dagen innan <span>Walt</span> dog så utspelade sig det det viktigaste mötet för oss karaktärer. Vi fick veta vilka som fick delta och inte i nöjesfältet detta år. Stämningen var ändå bra. Jag fick en plats vilket jag är oerhört tacksam för hihi. Vissa var väl upprörda och andra väldigt glada, men inget jag reagerade på. Det var många som lämnade redan direkt efter mötet för att det inte var någon mening att stanna kvar.  Men under den hemska natten så sov jag. Efter mötet så gick jag på lunch med <span>Hades</span>, <span>Prins John</span>, <span>Walt</span> och <span>Musse</span> som <span>Walt</span> bjöd på. Jag träffade sen <span>Törnrosa</span> för att göra oss redo inför festen. Han ville göra något roligt för att lära känna varandra efter uttagningen. <span>Hattmakaren</span> menade att det var inte ofta man får lära känna <span>skurkarna</span> som är med i <span>Walts</span> värld. <span>Jag</span> och <span>Törnrosa</span> var som sagt med på Hattmakarens fest och det var trevligt. Men jag kände efter ett tag att det var dags att röra sig hem och då var klockan cirka 23.30, och jag gick och la mig så fort jag kom hem till slottet.";
            charracterSaw = "Nja, när jag på festen uppfattade jag <span>två personer som bråka</span>. Men jag vet inte vilka det var… Jag hörde att en <span>röst</span> var <span>pipig</span> och<span> en annan</span> var <span>mörkare</span>, men inget mer… Det var det som var konstigt antar jag.";
            charracterConnectionToWalt = "Jag har en viss koppling till Walt, jag var en av hans första historier och jag fick den äran att överleva det förfärliga som den elaka drottningen utsatte mig för.";
            characterMovie = "Snövit och de sju dvärgarna";
            characterTraits = "Godtrogen, oskyldig, vänlig, god";
            characterAttribute = "Blå och guldig klänning och sjunger och kvittrar ofta"
            className = "snövit";
            break;
        case "Hattmakaren":
            charracterTimeAndPlace = "Jag arrangerade en fest hos mig där några kom och festade hela natten. På natten var det bara jag och <span>Skinner</span> kvar som hjälpte mig att städa, han stack hem när vi var klara och jag somnade strax efter.";
            charracterAction = "Jag var på morgonmötet tillsammans med alla andra. Jag ville göra någonting unikt och annorlunda till skillnad från andra nöjesfält vi genomfört, så jag bestämde mig för att bjuda in allihopa till en fest hemma hos mig. Några kunde och andra inte men det handlar om människorna, inte mängden personer! Efter mötet åt jag lunch hos <span>Chef Skinner</span> med <span>Kapten Krok och Skinner</span> han själv. Vi satt där en stund och sedan hjälpte de mig att handla grejer inför festen. Så vi tog en runda till Gustav Adolfs torg och köpte muggar, pynt och “berusande elixir”. Därefter begav jag mig hem för att preppa huset med pynt och liknande. Gästerna började komma runt 18:00 om jag minns rätt, och vi festade tills himlen såg svart. När alla begav sig hem så la jag mig och somnade på minuten. <span>Chef Skinner</span> var snäll nog och <span>hjälpte</span> mig att <span>städa</span> och sedan begav han sig hem.";
            charracterSaw = "Jag såg inget särskilt, för jag var här hela kvällen och gick aldrig tillbaka till slottet innan jag fick höra om nyheterna på morgonen. Om jag såg något annorlunda? Njaa inte riktigt, vet bara att <span>Törnrosa</span> stack hem tidigare än de andra som bor på slottet, hon kanske bara var trött eller något, hon gillar ju att sova hehe.";
            charracterConnectionToWalt = "Blandad åsikt om Walt, gillar att han gjorde honom till en stor ikon och världskänd men att han projiceras som en “galen” person är något han egentligen inte föredrar.";
            characterMovie = "Alice i Underlandet";
            characterTraits = "Galen, excentrisk, lekfull";
            characterAttribute = "Hatt, Kaffepanna, färgglad";
            className = "hattmakaren";
            break;
        case "Prins John":
            charracterTimeAndPlace = "Vid mord tillfället var jag och sov i slottet.";
            charracterAction = "Jag var på mötet, sen gick jag och surade på mitt rum och sov. Några timmar senare så var det plötsligt ingen som var med på slottet… Jag gick runt och alla hade gått utan att bjuda mig. Jag blev först arg och kände mig utanför men det förtjänar ändå inte min tid. Jag fattar inte HUR KAN DE VÄLJA ATT GÅ UTAN MIG?!?!?! Hur många gånger hade jag inte försökt att skaffa vänner och så vill jag ändå inte vara med mig? Jag vet ju att jag är den bästa på denna jord? Så varför vill ingen hänga med mig? Det är deras förlust, jag har försökt.";
            charracterSaw = "Såg? Nej, jag såg inget. Men jag var vaken någon timme där runt 03:00 tiden för jag trodde jag hörde något. Men det var bara Sir Väs som hade ramlat ur sin vagga.";
            charracterConnectionToWalt = "Han var en jävel. Han gjorde så att Robin Hood tog alla MINA pengar utan att ens fråga mig först. Disney har alltid varit problematisk i alla våra karaktärers historier då Walt har det stora mandatet, och kan alltid göra om våra historier som han så behagar.";
            characterMovie = "Robin Hood";
            characterTraits = "Girig, snål, arrogant, feg, manipulativ";
            characterAttribute = "Röd kunglig kappa och krona"
            className = "prinsJohn";
            break;
        case "Hjärter Dam":
            charracterTimeAndPlace = "JAG?!?! Vad jag gjorde!! URSÄKTA VILKEN FRÄCKHET. Jag var inte på plats i slottet den natten. Om du undrar så jag sov på annan plats under tiden som allt utspelade sig och hade ingen inblick i vad som hände på slottet den natten.“Ahha man få verkligen inte ha något privat nuförtiden";
            charracterAction = "Jag var med på den fördärvade mötet. Jag blev förstås vald till detta års nöjesfält, men det var många luspudlar som gjorde upplevelsen till ett fjasko. Personalen som skulle hålla i mötet var klädda i vitt när jag bestämt hade påpekat att jag inte ville vara med om det inte var klädd utifrån min klädkod. Jag sa att jag skulle gör mig av med deras huvuden men så ville inte <span>Walt</span>. Han sa att det skulle vara 'en fristad för alla som kom till nöjesparken'. Fy vad trist, men vad ska man säga till den mäktigaste mannen i denna värld? Så jag fick tiga, det var det värsta jag fått utstå i mitt liv. Men, för att återgå till din fråga. Jag var i alla fall med på mötet, och efter det så tog jag mig hem i min droska och mina undersåtar.  Där befann jag mig tills det var dags för den årliga middagen. Tanken var först att alla karaktärer i Disneyvärlden var inbjudna för att ha något att säga till om angående varje persons berättelse. Det är inte varje dag som man får tillfälle att diskutera med Walt, men det var inte så många som ville delta (som det brukar bli). Därmed så blev det den vanliga skaran av skurkar som deltog. Jag var med <span>Walt</span> och de andra hedervärda kvinnorna av samfundet, 'De kvinnliga skurkarna av Disney'. <span>Walt</span> var givetvis deltagande i middagen, det är ju bara en gång om året. Mötet ger oss kvinnliga skurkar ett utrymme för att tala om det som vi inte annars kan. Det är som en gruppterapi där vi får feedback och nya avtal sluts om huruvida vi som skurkar skall vara kvar i Disney eller ej. Det var ett mer diskutions-artat i år men det gick ändå som planerat. Efter middagen så gick vi skilda vägar hem till vardera person. Jag var väldigt förvånad när en av mina vakter kom dagen efter och berättade nyheten om Walts död.";
            charracterSaw = "Eftersom jag var på annan plats vid tillfället så kunde jag omöjligt sett något. Men det var flera konstiga samtal som jag överhörde under dagen. Alla hade små konstiga saker när de förde sig men jag kan inte sätta fingret på det. Som jag sa tidigare hade jag överhört saker. Det var att <span>Törnrosa</span> imorse sa att det var ett hemsk sätt att dö på och att det var svårt att tro att någon kunde dödat honom med gift? Jag tror att du kan få mer information hos <span>Törnrosa</span>.";
            charracterConnectionToWalt = "Min koppling till <span>Walt</span> är som den alltid varit, en hat kärlek. Jag fick mitt palats men jag fick inte döda Alice när jag väl hade chansen vilket alltid har stört mig. Men annars så har jag inga dåliga saker att säga om honom.";
            characterMovie = "Alice i underlandet";
            characterTraits = "Temperamentsfull, oberäknelig, och masochist.";
            characterAttribute = "Krona, röd och svart klänning, och rosor."
            className = "hjärterDam";
            break;
        case "Skinner":
            charracterTimeAndPlace = "Var på festen hos <span>hattmakaren</span>, hjälpte honom att städa och sedan gick jag hem själv på kvällen. ";
            charracterAction = "Såklart jag var på mötet, aaallåååå. <span>Walt</span> älskar min mat, vem gör inte hehehe. “Va vad jag gjorde efter mötet? <span>Hattmakaren</span> fråga om jag ville komma till festen ikväll och om jag kunde hjälpa honom att handla grejer inför det, såklart, och ville äta på mina restaurang så jag tog med honom och <span>Kapten Krok</span> till “le restaurant” (restaurangen (franska))  och sedan gick vi in till stan för att handla muggar och det bästa och finaste röda berusande elixiret som de smakade på min restaurang. Efter vi handlade gick jag hem och förberedde mig inför festen. Jag kom dit lite tidigare för att hjälpa <span>Hattmakaren</span> att sätta upp pynt, maten och elixiret och en stund senare kom alla gäster och vi hade den bästa 'fété' (fest på franska). Alla älskade min mat, såklart och vinet … ola la ma chérie, det var en hektisk kväll med dans, sång och skrik.";
            charracterSaw = " Vad jag såg? hahaha jag såg till så att alla smakade min mat hehehe! Ah, du menar om jag sett någonting angående <span>Walt</span>? nej nej nej jag har inte sett honom sen morgonmötet.";
            charracterConnectionToWalt = "Brukar äta middag med <span>Walt</span> när han är i Frankrike eller i Malmö. Men jag gillar inte att <span>Walt</span> lät Råttan Remy vara huvudkaraktären istället för min spektakulära restaurang.";
            characterMovie = "Ratatouille";
            characterTraits = "Hård, oförsonlig, förakt, och stolt";
            characterAttribute = "Liten man, elakt flin, kockkläder, och svart hår"
            className = "headChef";
            break;
    }

    // Get charracter class name
    let words = charracter.split(' ');

    // Convert the first word to lowercase
    let characterClass = words[0].toLowerCase();

    // For the remaining words, capitalize the first letter and concatenate
    for (let i = 1; i < words.length; i++) {
        let word = words[i];
        // Capitalize the first letter of the word and concatenate it
        characterClass += word.charAt(0).toUpperCase() + word.slice(1);
    }

    main.classList.remove("controlQuestion");
    main.classList.remove("mainMap");
    main.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="btnBack">
        <mask id="mask0_248_1065" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_248_1065)">
            <path d="M7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11H20V13H7.825Z" fill="white"/>
        </g>
    </svg>

    <div class="characterTopWrapper">
        <div class="charracterImage ${characterClass}"></div>
        <h2>${charracter}</h2>
    </div>

    <div class="characterShortDescription">
        <div class="characterMovie">
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                <mask id="mask0_259_1236" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="34" height="34">
                    <rect width="34" height="34" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_259_1236)">
                    <path d="M13.458 21.9583L23.3747 15.5833L13.458 9.20833V21.9583ZM11.333 29.75V26.9167H5.66634C4.88717 26.9167 4.22016 26.6392 3.6653 26.0844C3.11044 25.5295 2.83301 24.8625 2.83301 24.0833V7.08333C2.83301 6.30417 3.11044 5.63715 3.6653 5.08229C4.22016 4.52743 4.88717 4.25 5.66634 4.25H28.333C29.1122 4.25 29.7792 4.52743 30.3341 5.08229C30.8889 5.63715 31.1663 6.30417 31.1663 7.08333V24.0833C31.1663 24.8625 30.8889 25.5295 30.3341 26.0844C29.7792 26.6392 29.1122 26.9167 28.333 26.9167H22.6663V29.75H11.333Z" fill="white"/>
                </g>
            </svg>
            <p>${characterMovie}</p>
        </div>
        <div class="charactrTraits">
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
        <mask id="mask0_385_82" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="34" height="34">
        <rect width="33.2609" height="34" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_385_82)">
        <path d="M16.63 15.5C15.1504 15.5 13.8837 14.9125 12.8301 13.7375C11.7764 12.5625 11.2496 11.15 11.2496 9.5C11.2496 7.85 11.7764 6.4375 12.8301 5.2625C13.8837 4.0875 15.1504 3.5 16.63 3.5C18.1096 3.5 19.3763 4.0875 20.4299 5.2625C21.4836 6.4375 22.0104 7.85 22.0104 9.5C22.0104 11.15 21.4836 12.5625 20.4299 13.7375C19.3763 14.9125 18.1096 15.5 16.63 15.5ZM5.86914 27.5V23.3C5.86914 22.45 6.0653 21.6687 6.45763 20.9562C6.84995 20.2437 7.37118 19.7 8.02131 19.325C9.41126 18.55 10.8236 17.9688 12.2584 17.5812C13.6932 17.1937 15.1504 17 16.63 17C18.1096 17 19.5668 17.1937 21.0016 17.5812C22.4364 17.9688 23.8488 18.55 25.2387 19.325C25.8888 19.7 26.4101 20.2437 26.8024 20.9562C27.1947 21.6687 27.3909 22.45 27.3909 23.3V27.5H5.86914Z" fill="white"/>
        </g>
        </svg>
            <p>${characterTraits}</p>
        </div>
        <div class="characterAttribute">
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                <mask id="mask0_259_1254" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="34" height="34">
                    <rect width="34" height="34" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_259_1254)">
                    <path d="M27.7667 29.75L18.8417 20.825C18.1333 21.3917 17.3187 21.8403 16.3979 22.1708C15.4771 22.5014 14.4972 22.6667 13.4583 22.6667C10.8847 22.6667 8.7066 21.7753 6.92396 19.9927C5.14132 18.2101 4.25 16.0319 4.25 13.4583C4.25 10.8847 5.14132 8.7066 6.92396 6.92396C8.7066 5.14132 10.8847 4.25 13.4583 4.25C16.0319 4.25 18.2101 5.14132 19.9927 6.92396C21.7753 8.7066 22.6667 10.8847 22.6667 13.4583C22.6667 14.4972 22.5014 15.4771 22.1708 16.3979C21.8403 17.3187 21.3917 18.1333 20.825 18.8417L29.75 27.7667L27.7667 29.75ZM13.4583 19.8333C15.2292 19.8333 16.7344 19.2135 17.974 17.974C19.2135 16.7344 19.8333 15.2292 19.8333 13.4583C19.8333 11.6875 19.2135 10.1823 17.974 8.94271C16.7344 7.70312 15.2292 7.08333 13.4583 7.08333C11.6875 7.08333 10.1823 7.70312 8.94271 8.94271C7.70312 10.1823 7.08333 11.6875 7.08333 13.4583C7.08333 15.2292 7.70312 16.7344 8.94271 17.974C10.1823 19.2135 11.6875 19.8333 13.4583 19.8333Z" fill="white"/>
                </g>
            </svg>
            <p>${characterAttribute}</p>
        </div>
    </div>

    <div class="buttons">
        <button class="notSuspect">Ej Misstänkt</button>
        <button class="suspect">Misstänkt</button>
    </div>

    <h3>Tid och Plats</h3>
    <p>${charracterTimeAndPlace}</p>
    <h3>Gjorde</h3>
    <p>${charracterAction}</p>
    <h3>Såg</h3>
    <p>${charracterSaw}</p>
    <h3>Koppling till Walt</h3>
    <p>${charracterConnectionToWalt}</p>
    <h3>Spekulationer om någon misstänkt</h3>
    <p>${charracterHint}</p>

    <div class="playBtnBackground">
        <svg xmlns="http://www.w3.org/2000/svg" width="71" height="71" viewBox="0 0 71 71" fill="none" class="btnPlayAudio">
            <circle cx="35.1191" cy="35.1191" r="35.1191" fill="#D9D9D9"/>
            <path d="M44.2295 32.7816C45.5628 33.5514 45.5628 35.4759 44.2295 36.2457L31.1562 43.7936C29.8228 44.5634 28.1562 43.6011 28.1562 42.0615L28.1562 26.9658C28.1562 25.4262 29.8228 24.4639 31.1562 25.2337L44.2295 32.7816Z" fill="#001937"/>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="71" height="71" viewBox="0 0 71 71" fill="none" class="btnPauseAudio hidden">
            <circle cx="35.1191" cy="35.1191" r="34.1191" fill="#000E1E" stroke="#D9D9D9" stroke-width="2"/>
            <mask id="mask0_385_154" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="21" y="21" width="29" height="29">
                <rect x="21" y="21" width="29" height="29" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_385_154)">
                <path d="M37.9167 43.9584V27.0417H42.75V43.9584H37.9167ZM28.25 43.9584V27.0417H33.0833V43.9584H28.25Z" fill="#D9D9D9"/>
            </g>
        </svg>
    </div>
    `;

    main.querySelector(".btnBack").addEventListener("click", renderMap);

    let userID = Number(window.localStorage.getItem("userId"));
    let userPassword = window.localStorage.getItem("userPassword");

    // Get info of already suspect or not suspect
    try {
        let request = new Request(`php/api.php?userID=${userID}&userPassword=${userPassword}&action=getUserInfo`);
        let response = await fetch(request);
        let resource = await response.json();

        if (!response.ok) {
            let message = "Något gick fel, försök igen senare";
            informUser(message);
            return;
        } else {
            let suspectCharacters = resource.suspectCharacters;
            let notSuspectCharacters = resource.notSuspectCharacters;

            suspectCharacters.forEach(arrayCharacter => {
                if (arrayCharacter === className) {
                    main.querySelector(".suspect").classList.add("selected");
                }
            })

            notSuspectCharacters.forEach(arrayCharacter => {
                if (arrayCharacter === className) {
                    main.querySelector(".notSuspect").classList.add("selected");
                }
            })
        }
    } catch (error) {
        let message = "Något gick fel, försök igen senare";
        informUser(message);
        return;
    }

    // Mark as not suspect
    main.querySelector(".notSuspect").addEventListener("click", async e => {

        let element = main.querySelector(".notSuspect");
        if (element.classList.contains("selected")) {
            element.classList.remove("selected");
        } else {
            // Save character as not suspect
            let requestOptions = {
                method: "POST",
                headers: { "Content-type": "application/json; charset=UTF-8" },
                body: JSON.stringify({
                    userId: userID,
                    password: userPassword,
                    action: "updateSuspect",
                    notSuspectCharacter: characterClass
                })
            };

            try {
                let request = new Request("php/api.php", requestOptions);
                const response = await fetch(request);
                let resource = await response.json();

                if (!response.ok) {
                    let message = "Något gick fel, försök igen senare";
                    informUser(message);
                    return;
                } else {
                    // Render character board
                    renderCharracterboard();
                }

            } catch (error) {
                let message = "Något gick fel, försök igen senare";
                informUser(message);
                return;
            };
        }

    });

    // Mark as suspect
    main.querySelector(".suspect").addEventListener("click", async e => {

        let element = main.querySelector(".suspect");
        if (element.classList.contains("selected")) {
            element.classList.remove("selected");
        } else {
            // Save character as suspect
            let requestOptions = {
                method: "POST",
                headers: { "Content-type": "application/json; charset=UTF-8" },
                body: JSON.stringify({
                    userId: userID,
                    password: userPassword,
                    action: "updateSuspect",
                    suspectCharacter: characterClass
                })
            };

            try {
                let request = new Request("php/api.php", requestOptions);
                const response = await fetch(request);
                let resource = await response.json();

                if (!response.ok) {
                    let message = "Något gick fel, försök igen senare";
                    informUser(message);
                    return;
                } else {
                    // Render character board
                    renderCharracterboard();
                }

            } catch (error) {
                let message = "Något gick fel, försök igen senare";
                informUser(message);
                return;
            }
        }
    });

    let audio;
    switch (characterClass) {
        case "kaptenKrok":
            audio = new Audio("../media/testMusic.mp3"); //placeholder audio
            break;
        case "cruellaDeVil":
            audio = new Audio("../media/testMusic.mp3"); //placeholder audio
            break;
        case "musse":
            audio = new Audio("../media/testMusic.mp3"); //placeholder audio
            break;
        case "ursulla":
            audio = new Audio("../media/testMusic.mp3"); //placeholder audio
            break;
        case "hades":
            audio = new Audio("../media/testMusic.mp3"); //placeholder audio
            break;
        case "darla":
            audio = new Audio("../media/testMusic.mp3"); //placeholder audio
            break;
        case "törnrosa":
            audio = new Audio("../media/testMusic.mp3"); //placeholder audio
            break;
        case "snövit":
            audio = new Audio("../media/testMusic.mp3"); //placeholder audio
            break;
        case "headChef":
            audio = new Audio("../media/testMusic.mp3"); //placeholder audio
            break;
        case "hattmakaren":
            audio = new Audio("../media/testMusic.mp3"); //placeholder audio
            break;
        case "hjärterDam":
            audio = new Audio("../media/testMusic.mp3"); //placeholder audio
            break;
        case "prinsJohn":
            audio = new Audio("../media/testMusic.mp3"); //placeholder audio
            break;
    }

    main.querySelector(".btnPlayAudio").addEventListener("click", e => {
        main.querySelector(".btnPlayAudio").classList.add("hidden");
        main.querySelector(".btnPauseAudio").classList.remove("hidden");
        audio.play();

    })

    main.querySelector(".btnPauseAudio").addEventListener("click", e => {
        main.querySelector(".btnPlayAudio").classList.remove("hidden");
        main.querySelector(".btnPauseAudio").classList.add("hidden");
        audio.pause()
    })
}