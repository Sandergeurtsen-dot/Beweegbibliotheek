const GROUP_34 = "groep-3-4";
const GROUP_56 = "groep-5-6";
const GROUP_78 = "groep-7-8";
const CLASS_SIZE = 25;
const CLASS_GROUP_COUNT = 5;
const CLASS_GROUP_SIZE = 5;

const byGroup = (groep34, groep56, groep78) => ({
  [GROUP_34]: groep34,
  [GROUP_56]: groep56,
  [GROUP_78]: groep78
});

const same = (value) => byGroup(value, value, value);

const groups = [
  {
    id: GROUP_34,
    label: "Groep 3/4",
    shortLabel: "3/4",
    description:
      "Korte, concrete opdrachten met veel voordoen, veel herhalen en duidelijk taalgebruik.",
    focus:
      "Focus op letters, klanken, eenvoudige sommen, veel herhaling en snel starten."
  },
  {
    id: GROUP_56,
    label: "Groep 5/6",
    shortLabel: "5/6",
    description:
      "Actieve werkvormen waarin leerlingen al meer kunnen samenwerken, kiezen en uitleggen.",
    focus:
      "Focus op strategie, samenwerken, tempo houden en taal of rekenen verwoorden."
  },
  {
    id: GROUP_78,
    label: "Groep 7/8",
    shortLabel: "7/8",
    description:
      "Werkvormen met meer zelfstandigheid, verdieping, reflectie en inhoudelijke keuzes.",
    focus:
      "Focus op uitleggen, redeneren, complexere opdrachten en transfer naar andere vakken."
  }
];

const subjects = [
  {
    id: "taal",
    label: "Taal",
    marker: "Aa",
    accent: "#143b86",
    description:
      "Werk aan woordenschat, mondelinge taal, zinsbouw, navertellen en begrijpend luisteren."
  },
  {
    id: "spelling",
    label: "Spelling",
    marker: "Sp",
    accent: "#f28f27",
    description:
      "Oefen spellingregels, klanken, woordbeelden, werkwoorden en foutenanalyse."
  },
  {
    id: "rekenen",
    label: "Rekenen",
    marker: "12",
    accent: "#2d8f5a",
    description:
      "Gebruik beweging bij automatiseren, getalbegrip, meten, verhoudingen en probleemoplossen."
  }
];

const moments = [
  {
    id: "energizers",
    label: "Tussen het leren",
    subtitle: "Energizers bij het wisselen van een vak",
    accent: "#f28f27",
    description:
      "Korte opdrachten om energie te richten, de aandacht te pakken en soepel over te stappen naar de volgende les."
  },
  {
    id: "tijdens",
    label: "Tijdens het leren",
    subtitle: "Actieve werkvormen in de les",
    accent: "#143b86",
    description:
      "Werkvormen die midden in de les passen en waarbij leerlingen de leerstof verwerken terwijl ze bewegen."
  },
  {
    id: "bewegend",
    label: "Bewegen om te leren",
    subtitle: "Leren door het bewegen zelf",
    accent: "#2d8f5a",
    description:
      "Werkvormen waarbij de beweging niet alleen motiveert, maar echt helpt om te begrijpen, oefenen en onthouden."
  }
];

const taskBlueprints = {
  taal: {
    energizers: [
      {
        key: "letterestafette",
        visual: "relay",
        visualHint:
          "Een estafettevorm met kaartjes op afstand en een verzamelplek waar taal samen wordt gebouwd.",
        title: byGroup("Letterestafette", "Woordsoorten-estafette", "Zinsbouw-estafette"),
        summary: byGroup(
          "Leerlingen halen letters op en bouwen samen een doelwoord voordat de volgende les start.",
          "Leerlingen rennen naar woordkaartjes en sorteren ze actief op woordsoort.",
          "Teams verzamelen zinsdelen en bouwen onder tempo een kloppende zin."
        ),
        duration: byGroup("7 min", "8 min", "10 min"),
        setup:
          "Maak een startlijn en leg kaartjes aan de overkant van het lokaal of plein. Gebruik een bord, magneetstrip of vloerplek als verzamelpunt.",
        goal: byGroup(
          "Letters herkennen, klank koppelen en eenvoudige woorden lezen.",
          "Woordsoorten herhalen en kort uitleggen waarom een woord ergens hoort.",
          "Zinsbouw bewust maken met onderwerp, persoonsvorm en zinsdelen."
        ),
        movementFocus: "Korte sprintjes, ophalen, teruglopen en samen hardop verwoorden.",
        materials: [
          "Letter-, woord- of zinsdeelkaartjes",
          "Pionnen of een zichtbare startlijn",
          "Bord, vloerplek of magneetstrip"
        ],
        steps: [
          "Leg de kaartjes aan de overkant van de ruimte en maak teams van twee tot vier leerlingen.",
          "Noem het doel van de ronde: een woord bouwen, woordsoorten sorteren of een zin maken.",
          "Leerlingen halen om de beurt één kaartje en leggen dat op de verzamelplek.",
          "Na iedere ronde leest of bespreekt het team hardop wat er al ligt en wat nog ontbreekt."
        ],
        differentiation: byGroup(
          "Gebruik woorden met plaatjes of laat kinderen eerst de klank hakken en plakken.",
          "Werk met twee woordsoorten voor extra rust of voeg verwijswoorden toe voor uitdaging.",
          "Voeg bijzinnen of signaalwoorden toe voor verdieping."
        ),
        teacherTip: byGroup(
          "Kies woorden uit de komende les zodat de overgang logisch voelt.",
          "Houd de rondes kort en laat steeds één leerling de uitleg geven.",
          "Vraag regelmatig welke kaart de persoonsvorm of kern van de zin is."
        ),
        keywords: ["taal", "estafette", "letters", "woordsoorten", "zinnen"]
      },
      {
        key: "rijmren",
        visual: "jump",
        visualHint:
          "Een snelle keuzevorm met kaartjes op de grond waarbij leerlingen springen of rennen naar het goede antwoord.",
        title: byGroup("Rijm-ren", "Synoniemen-sprint", "Betekenis-battle"),
        summary: byGroup(
          "Leerlingen rennen naar het rijmwoord en springen terug naar hun plek.",
          "Leerlingen zoeken al bewegend het best passende synoniem.",
          "Leerlingen kiezen tussen woorden met nuanceverschil en verdedigen kort hun keuze."
        ),
        duration: byGroup("5 min", "7 min", "8 min"),
        setup:
          "Leg drie tot vier keuzevakken of kaartjes op de vloer. Houd tussen de vakken loopruimte vrij.",
        goal: byGroup(
          "Rijmwoorden auditief herkennen en snel koppelen aan schrift.",
          "Woordenschat vergroten en betekenis verwant maken.",
          "Nadenken over nuance, context en precieze woordkeuze."
        ),
        movementFocus: "Snel kiezen, springen naar een antwoord en weer terugkomen naar de groep.",
        materials: ["Woordkaartjes", "Hoepels of vloervakken", "Timer of belsignaal"],
        steps: [
          "Noem een woord of lees een contextzin voor.",
          "Leerlingen bewegen naar het juiste kaartje of juiste vak.",
          "Laat na elke ronde één leerling verwoorden waarom deze keuze past.",
          "Herhaal met nieuwe woorden en houd het tempo hoog."
        ],
        differentiation: byGroup(
          "Werk met plaatjes en woorden die in de klas al bekend zijn.",
          "Voeg één afleider toe die lijkt maar net niet past.",
          "Laat leerlingen ook uitleggen waarom de andere keuzes minder passend zijn."
        ),
        teacherTip: byGroup(
          "Zeg woorden langzaam en duidelijk voor auditieve steun.",
          "Gebruik woorden uit het thema van de week voor extra transfer.",
          "Kies contextzinnen uit actualiteit of klassenteksten voor meer betekenis."
        ),
        keywords: ["rijm", "synoniemen", "betekenis", "woordenschat", "energizer"]
      },
      {
        key: "vertelbal",
        visual: "circle",
        visualHint:
          "Een kringvorm met een zachte bal; wie vangt, vult de zin of het verhaal mondeling aan.",
        title: byGroup("Vertelbal", "Woordkettingbal", "Vertel- en betoogbal"),
        summary: byGroup(
          "In de kring vangen leerlingen een bal en noemen een passend woord of een volgende zin.",
          "Leerlingen bouwen met een overgooi-bal een woordketting of korte uitleg op.",
          "Leerlingen vullen al bewegend een betoog, standpunt of samenvatting aan."
        ),
        duration: byGroup("6 min", "7 min", "8 min"),
        setup:
          "Maak een ruime kring of halve kring. Gebruik één zachte bal en een startzin, themawoord of stelling.",
        goal: byGroup(
          "Spreekdurf vergroten en woorden actief ophalen.",
          "Mondelinge taal verbinden aan samenwerken en logisch aanvullen.",
          "Redeneren, samenvatten en standpunten mondeling aanscherpen."
        ),
        movementFocus: "Overgooien, vangen, snel reageren en eventueel van plek wisselen.",
        materials: ["Zachte bal", "Themawoorden of praatkaartjes"],
        steps: [
          "Start met een woord, zin of vraag die past bij het lesthema.",
          "Gooi de bal naar een leerling; die vult aan met één woord, zin of argument.",
          "Na het antwoord gooit de leerling door naar iemand anders.",
          "Na een ronde vat de groep samen wat er samen is opgebouwd."
        ],
        differentiation: byGroup(
          "Werk met vaste zinsstarters zoals Ik zie of Eerst gebeurt.",
          "Laat leerlingen kiezen uit twee soorten aanvullingen: woord of uitleg.",
          "Laat leerlingen verplicht een voorbeeld of tegenargument toevoegen."
        ),
        teacherTip: byGroup(
          "Gebruik een zachte bal en spreek duidelijke beurtritmes af.",
          "Zet kernwoorden zichtbaar op het bord voor extra steun.",
          "Gebruik deze vorm ook kort als activerende start van een spreekopdracht."
        ),
        keywords: ["kring", "vertellen", "mondeling", "bal", "spreken"]
      },
      {
        key: "themawoordtikkertje",
        visual: "mission",
        visualHint:
          "Leerlingen bewegen tussen themaplekken en tikken het juiste woord of beeld aan.",
        title: byGroup("Themawoord-tikkertje", "Woordveld-tikspel", "Taalroute met kernwoorden"),
        summary: byGroup(
          "Kinderen tikken het plaatje of woord aan dat bij het thema hoort.",
          "Leerlingen zoeken bewegend de juiste woorden in een woordveld.",
          "Leerlingen lopen een route langs kernwoorden en koppelen die aan betekenis of context."
        ),
        duration: byGroup("6 min", "7 min", "8 min"),
        setup:
          "Hang themawoorden of afbeeldingen verspreid op. Maak een vrije route zodat leerlingen veilig kunnen bewegen.",
        goal: byGroup(
          "Woorden herkennen binnen een vertrouwd thema.",
          "Woordvelden activeren en begrippen snel terughalen.",
          "Kernwoorden koppelen aan een tekst, onderwerp of argument."
        ),
        movementFocus: "Zoeken, tikken, teruglopen en woorden hardop benoemen.",
        materials: ["Themawoorden of afbeeldingen", "Pionnen of routepijlen", "Eventueel een tikkerkaart"],
        steps: [
          "Verspreid de woorden of afbeeldingen over de ruimte.",
          "Noem een categorie, kenmerk of omschrijving.",
          "Leerlingen bewegen naar het woord of beeld dat volgens hen past en tikken dit aan.",
          "Bespreek kort waarom dit woord past en geef direct een nieuwe opdracht."
        ],
        differentiation: byGroup(
          "Werk met minder woorden en veel visuele steun.",
          "Laat leerlingen ook een eigen voorbeeld noemen uit hetzelfde woordveld.",
          "Vraag om contextzinnen of laat leerlingen verbanden tussen twee kernwoorden leggen."
        ),
        teacherTip: byGroup(
          "Gebruik bekende themawoorden om succeservaringen te creëren.",
          "Maak clusters in kleur voor extra overzicht.",
          "Koppel de route aan de kernwoorden van begrijpend lezen of wereldoriëntatie."
        ),
        keywords: ["thema", "woordenschat", "tikspel", "kernwoorden", "taalroute"]
      }
    ],
    tijdens: [
      {
        key: "prentenloopdictee",
        visual: "dictation",
        visualHint:
          "Een duo-opstelling met tekst of prenten aan de wand en een schrijfplek verderop.",
        title: byGroup("Prenten-loopdictee", "Taal-loopdictee", "Signaalwoorden-loopdictee"),
        summary: byGroup(
          "Een leerling haalt een korte zin met beeldsteun op en dicteert die aan de schrijver.",
          "Duo's halen zinnen of antwoorden op en schrijven die samen terug.",
          "Leerlingen verwerken al lopend kernzinnen en signaalwoorden uit een tekst."
        ),
        duration: byGroup("12 min", "14 min", "15 min"),
        setup:
          "Hang de tekstkaartjes of prenten op afstand van de tafels. Werk in duo's met een schrijver en een loper.",
        goal: byGroup(
          "Lezen, onthouden en nazeggen in korte zinnen.",
          "Taalinhoud actief verwerken door te lezen, dicteren en schrijven.",
          "Signaalwoorden en kernzinnen gericht herkennen en toepassen."
        ),
        movementFocus: "Heen en weer lopen, tekst onthouden en samen terugkoppelen.",
        materials: ["Tekst- of prentkaartjes", "Schrijfblad of wisbord", "Potlood of stift"],
        steps: [
          "Laat de loper één kaartje bekijken en alleen onthouden wat nodig is voor de eerste ronde.",
          "De loper komt terug en dicteert aan de schrijver.",
          "Samen controleren ze of het klopt en wat nog ontbreekt.",
          "Na enkele rondes wisselen de rollen."
        ],
        differentiation: byGroup(
          "Gebruik korte zinnen of losse woorden met plaatjes.",
          "Laat sterke duo's ook een verbindingszin toevoegen.",
          "Laat leerlingen na afloop hun tekst samenvatten in één kernzin."
        ),
        teacherTip: byGroup(
          "Houd de loopafstand kort genoeg om succes te houden.",
          "Werk met duidelijke rollenkaartjes voor rust in de klas.",
          "Benadruk eerst inhoud en pas daarna netheid of formulering."
        ),
        keywords: ["loopdictee", "duo", "schrijven", "dictee", "taal"]
      },
      {
        key: "luisterhoeken",
        visual: "corners",
        visualHint:
          "Vier herkenbare hoeken in het lokaal waar leerlingen op basis van een vraag of stelling naartoe bewegen.",
        title: byGroup("Luister-en-kies hoeken", "Taalkeuze-hoeken", "Standpunt-hoeken"),
        summary: byGroup(
          "Kinderen bewegen naar de hoek met de juiste klank, letter of betekenis.",
          "Leerlingen kiezen actief de beste taaloptie en lichten die kort toe.",
          "Leerlingen positioneren zich bij een standpunt en oefenen mondelinge argumentatie."
        ),
        duration: byGroup("10 min", "12 min", "12 min"),
        setup:
          "Richt vier hoeken in met een kaart of keuzeoptie. Zorg dat de looproutes vrij blijven.",
        goal: byGroup(
          "Actief luisteren en een betekenisvolle keuze maken.",
          "Taalinhoud combineren met kiezen en uitleggen.",
          "Standpunten formuleren en van elkaar leren."
        ),
        movementFocus: "Naar een hoek bewegen, overleggen en indien nodig van plek wisselen.",
        materials: ["Hoekkaarten", "Vragen of stellingen", "Eventueel mini-whiteboards"],
        steps: [
          "Lees een taalvraag, woord of stelling voor.",
          "Leerlingen bewegen naar de hoek die volgens hen past.",
          "In de hoek bespreken ze kort waarom ze daar staan.",
          "Laat één leerling per hoek de keuze toelichten voordat je doorgaat."
        ],
        differentiation: byGroup(
          "Werk met twee hoeken als vier keuzes nog te veel is.",
          "Laat leerlingen eerst kort in tweetallen overleggen.",
          "Vraag om bewijs uit een tekst of lesonderdeel."
        ),
        teacherTip: byGroup(
          "Gebruik vaste hoekkleuren voor herkenning.",
          "Wissel letterlijke en denkvragen af zodat het tempo hoog blijft.",
          "Vraag soms bewust of iemand van hoek wil wisselen na de argumenten."
        ),
        keywords: ["hoeken", "kiezen", "stelling", "luisteren", "taal"]
      },
      {
        key: "praatcarrousel",
        visual: "circle",
        visualHint:
          "Twee rijen of een binnen- en buitenkring waarbij leerlingen na korte gesprekjes doorschuiven.",
        title: byGroup("Praatcarrousel", "Praatcarrousel met kernwoorden", "Spreekcarrousel"),
        summary: byGroup(
          "Leerlingen praten in korte beurten over een woord, afbeelding of verhaal.",
          "Leerlingen wisselen snel van partner en verwerken kernwoorden in een gesprek.",
          "Leerlingen oefenen spreken, samenvatten en argumenteren met steeds nieuwe gesprekspartners."
        ),
        duration: byGroup("10 min", "12 min", "12 min"),
        setup:
          "Zet een binnen- en buitenkring of twee tegenover elkaar staande rijen klaar met voldoende loopruimte.",
        goal: byGroup(
          "Spreekdurf en woordgebruik vergroten in korte veilige rondes.",
          "Kernwoorden actief gebruiken in gesprek.",
          "Vlot formuleren, luisteren en samenvatten."
        ),
        movementFocus: "Kort spreken, doorschuiven en opnieuw starten met een nieuwe partner.",
        materials: ["Praatkaartjes", "Eventueel timer of muzieksignaal"],
        steps: [
          "Geef een vraag, afbeelding of kernwoord passend bij de les.",
          "Laat leerlingen dertig tot zestig seconden met hun partner praten.",
          "Na het signaal schuift één kring of rij door.",
          "Herhaal met een nieuwe vraag of laat dezelfde vraag verdiepen."
        ],
        differentiation: byGroup(
          "Gebruik vaste zinsstarters en praatplaatjes.",
          "Laat leerlingen ook een voorbeeld geven uit hun eigen ervaring.",
          "Voeg de opdracht toe om de vorige spreker eerst samen te vatten."
        ),
        teacherTip: byGroup(
          "Oefen het doorschuiven eerst droog.",
          "Gebruik zichtbare kernwoorden op het bord.",
          "Kies een duidelijke tijdsduur per ronde om tempo te houden."
        ),
        keywords: ["carrousel", "spreken", "partners", "kernwoorden", "taal"]
      },
      {
        key: "kernwoordstations",
        visual: "stations",
        visualHint:
          "Een reeks kleine stations waar leerlingen steeds een nieuw taalonderdeel actief verwerken.",
        title: byGroup("Kernwoord-stations", "Taalstations", "Argumentenstations"),
        summary: byGroup(
          "Leerlingen bewegen langs stations met woorden, plaatjes en korte taalopdrachten.",
          "Leerlingen verwerken kernwoorden en taalstrategieën in korte actieve blokken.",
          "Leerlingen bouwen langs verschillende stations aan uitleg, tekstbegrip of argumentatie."
        ),
        duration: byGroup("12 min", "14 min", "15 min"),
        setup:
          "Richt drie tot vier stations in met elk een korte opdracht en laat groepjes om de paar minuten doorwisselen.",
        goal: byGroup(
          "Nieuwe woorden en zinnen herhalen met veel afwisseling.",
          "Kernwoorden en strategieën actief toepassen.",
          "Complexere taalverwerking opdelen in overzichtelijke stappen."
        ),
        movementFocus: "Van station naar station bewegen en bij elk punt kort actief werken.",
        materials: ["Opdrachtkaartjes", "Eventueel wisborden", "Pionnen of stationborden"],
        steps: [
          "Leg per station één duidelijke opdracht klaar.",
          "Laat leerlingen in kleine groepjes starten bij verschillende stations.",
          "Werk met een tijdsignaal waarna iedereen doorschuift.",
          "Sluit af met een korte terugblik: welk station hielp het meest?"
        ],
        differentiation: byGroup(
          "Werk met twee eenvoudige stations en veel visuele steun.",
          "Geef keuze-opdrachten met basis en extra.",
          "Laat leerlingen per station één kernzin of argument formuleren."
        ),
        teacherTip: byGroup(
          "Houd de opdrachten klein en concreet.",
          "Gebruik vaste stationnummers en kleuren.",
          "Kies stations die echt aansluiten bij je lesdoel, niet alleen bij beweging."
        ),
        keywords: ["stations", "kernwoorden", "taal", "actieve les", "doorschuiven"]
      }
    ],
    bewegend: [
      {
        key: "levendezinnen",
        visual: "line",
        visualHint:
          "Leerlingen staan zelf op een lijn of plek in de ruimte en vormen samen letters, woorden of zinsdelen.",
        title: byGroup("Levende letters", "Levende zinnen", "Tekststructuur in beweging"),
        summary: byGroup(
          "Kinderen vormen letters of korte woorden met hun lichaam en hardop lezen wat er staat.",
          "Leerlingen bouwen fysieke zinnen en voelen zo de volgorde van de zin.",
          "Leerlingen zetten tekstonderdelen in een fysieke volgorde en bespreken de structuur."
        ),
        duration: byGroup("12 min", "15 min", "15 min"),
        setup:
          "Gebruik tape of een vloerlijn als opstelplek. Deel letters, woorden of tekstonderdelen uit aan leerlingen.",
        goal: byGroup(
          "Lettervorm en klank koppelen.",
          "Zinsvolgorde en grammaticale functies begrijpen.",
          "Tekststructuur en samenhang bewust maken."
        ),
        movementFocus: "Lopen naar een positie, herschikken en de taalstructuur letterlijk neerzetten.",
        materials: ["Letter-, woord- of tekstkaarten", "Tape of vloerlijn", "Eventueel hesjes"],
        steps: [
          "Deel de kaartjes uit en laat leerlingen eerst lezen wat zij hebben.",
          "Vraag de groep om zich in de juiste volgorde op te stellen.",
          "Lees samen hardop wat er nu staat en bespreek of het klopt.",
          "Laat leerlingen wisselen, verbeteren of uitbreiden voor een nieuwe ronde."
        ],
        differentiation: byGroup(
          "Start met korte woorden of vaste klankcombinaties.",
          "Voeg leestekens of bijzinnen toe voor uitdaging.",
          "Gebruik echte tekstfragmenten uit een thema of bron."
        ),
        teacherTip: byGroup(
          "Fotografeer geslaagde voorbeelden als geheugensteun.",
          "Vraag steeds welk woord de zin laat kloppen.",
          "Bespreek expliciet waarom de volgorde van de onderdelen ertoe doet."
        ),
        keywords: ["levende letters", "levende zinnen", "lichaam", "volgorde", "structuur"]
      },
      {
        key: "verhaalpad",
        visual: "path",
        visualHint:
          "Een uitgezette route met prenten, tekststroken of argumentkaarten die in volgorde worden afgelegd.",
        title: byGroup("Verhaalpad met plaatjes", "Verhaalroute", "Argumentenpad"),
        summary: byGroup(
          "Leerlingen lopen langs prenten en vertellen al bewegend wat eerst, daarna en tenslotte gebeurt.",
          "Duo's bouwen tijdens het lopen stap voor stap een verhaal of uitleg op.",
          "Leerlingen verzamelen al bewegend argumenten en ordenen ze tot een betoog."
        ),
        duration: byGroup("10 min", "14 min", "14 min"),
        setup:
          "Leg een route uit met pijlen of stations. Plaats prenten, tekststroken of argumentkaarten in de juiste volgorde.",
        goal: byGroup(
          "Volgordewoorden en navertellen oefenen.",
          "Verhaallijn of uitleg logisch opbouwen.",
          "Argumenten ordenen en opbouw van een tekst voelen."
        ),
        movementFocus: "Rustig door een route bewegen en per station kort mondeling of schriftelijk reageren.",
        materials: ["Prenten of tekstkaartjes", "Routepijlen", "Eventueel opnamekaartjes"],
        steps: [
          "Laat leerlingen de hele route eerst bekijken zonder te reageren.",
          "Loop daarna de route nogmaals en laat leerlingen per station iets benoemen of aanvullen.",
          "Aan het einde vertellen zij de hele lijn terug.",
          "Herhaal met nieuwe kaartjes of laat leerlingen de route zelf opnieuw leggen."
        ],
        differentiation: byGroup(
          "Gebruik drie eenvoudige stations met veel visuele steun.",
          "Laat leerlingen een extra verbindingszin toevoegen per station.",
          "Voeg een tegenargument of conclusie toe aan het eind van de route."
        ),
        teacherTip: byGroup(
          "Gebruik bekende prentenboeken of klassenthema's.",
          "Werk met vaste signaalwoorden die zichtbaar in de ruimte hangen.",
          "Gebruik de route ook als voorbereiding op schrijfonderwijs."
        ),
        keywords: ["verhaalpad", "route", "navertellen", "argumenten", "taal"]
      },
      {
        key: "spreekspoor",
        visual: "path",
        visualHint:
          "Een spoor met korte stopplekken waar leerlingen steeds een mondelinge stap zetten.",
        title: byGroup("Spreekspoor", "Spreekspoor met zinsstarters", "Presentatiespoor"),
        summary: byGroup(
          "Leerlingen lopen een spoor met zinsstarters en spreken bij iedere stop een stukje uit.",
          "Leerlingen bouwen al bewegend een uitleg op met hulp van kernzinnen.",
          "Leerlingen oefenen een mini-presentatie via een route met vaste onderdelen."
        ),
        duration: byGroup("10 min", "12 min", "14 min"),
        setup:
          "Leg een spoor met vier tot vijf stopplekken neer. Zet bij iedere plek een zinsstarter of opdrachtkaart.",
        goal: byGroup(
          "Mondelinge taal structureren met steun.",
          "Samenhangende uitleg opbouwen.",
          "Presenteren met opbouw en zelfvertrouwen."
        ),
        movementFocus: "Lopen, stoppen, hardop formuleren en doorgaan naar een volgende stap.",
        materials: ["Zinsstarters", "Stopkaarten", "Eventueel microfoonkaart of pratensymbool"],
        steps: [
          "Leerlingen starten bij een eerste stopplek en lezen de zinsstarter.",
          "Ze spreken de opdracht hardop uit of vullen de zin aan.",
          "Daarna lopen ze door naar de volgende plek in het spoor.",
          "Aan het eind spreken ze de hele uitleg of presentatie in één keer uit."
        ],
        differentiation: byGroup(
          "Gebruik vaste woorden zoals Ik zie, Eerst en Daarna.",
          "Laat duo's elkaar helpen met het afmaken van zinnen.",
          "Voeg een reflectievraag toe zoals Waarom is dit overtuigend?"
        ),
        teacherTip: byGroup(
          "Werk met pictogrammen naast de zinsstarters.",
          "Laat leerlingen eerst fluisteren en daarna harder spreken.",
          "Gebruik het spreekspoor als voorbereiding op een echte presentatie."
        ),
        keywords: ["spreekspoor", "presenteren", "mondeling", "zinnen", "route"]
      },
      {
        key: "argumentencircuit",
        visual: "stations",
        visualHint:
          "Verschillende actieve stations waar leerlingen stukjes informatie of argumenten verzamelen en verwerken.",
        title: byGroup("Praatcircuit", "Kernwoordcircuit", "Argumentencircuit"),
        summary: byGroup(
          "Leerlingen bewegen langs praatstations en benoemen steeds een passend woord of zin.",
          "Leerlingen koppelen kernwoorden aan voorbeelden in een actief circuit.",
          "Leerlingen bouwen bij elk station een deel van een overtuigend betoog."
        ),
        duration: byGroup("12 min", "14 min", "15 min"),
        setup:
          "Zet drie tot vier stations klaar met ieder een korte taalopdracht. Laat leerlingen in kleine groepen rouleren.",
        goal: byGroup(
          "Woorden en zinnen mondeling herhalen in meerdere contexten.",
          "Kernwoorden aan inhoud verbinden.",
          "Argumenteren opdelen in overzichtelijke beweegstappen."
        ),
        movementFocus: "Stations doorlopen, kort uitvoeren en weer doorbewegen.",
        materials: ["Stationkaarten", "Eventueel wisbordjes", "Pionnen of routekaart"],
        steps: [
          "Introduceer kort alle stations en laat zien wat de verwachte output is.",
          "Laat groepjes starten bij verschillende punten in het circuit.",
          "Na iedere ronde schuift het groepje door naar het volgende station.",
          "Bespreek aan het einde welke inzichten of woorden overal terugkwamen."
        ],
        differentiation: byGroup(
          "Houd elk station bij één vraag of één beeld.",
          "Laat leerlingen een antwoord eerst spreken en daarna eventueel noteren.",
          "Voeg bronverwijzing of weerlegging toe voor meer diepgang."
        ),
        teacherTip: byGroup(
          "Laat de groep eerst één oefenstation samen doen.",
          "Zet de kernwoorden groot zichtbaar neer.",
          "Gebruik inhoud uit wereldoriëntatie voor rijke taal."
        ),
        keywords: ["circuit", "argumenten", "kernwoorden", "stations", "spreken"]
      }
    ]
  },
  spelling: {
    energizers: [
      {
        key: "klankklapren",
        visual: "relay",
        visualHint:
          "Een korte renvorm met woordkaartjes en een centrale plek om klanken of regels snel te koppelen.",
        title: byGroup("Klank-klap-ren", "Regel-ren", "Werkwoordensprint"),
        summary: byGroup(
          "Leerlingen klappen de klanken en rennen naar het juiste woord.",
          "Leerlingen rennen naar de spellingregel die bij een woord past.",
          "Leerlingen kiezen onder tempo de juiste werkwoordsvorm."
        ),
        duration: byGroup("6 min", "7 min", "8 min"),
        setup:
          "Leg of hang woordkaartjes en regelkaarten aan de overkant. Houd een duidelijke startlijn vrij.",
        goal: byGroup(
          "Klank en woordbeeld snel koppelen.",
          "Spellingregels herhalen in een energieke vorm.",
          "Werkwoordspelling automatiseren in zinscontext."
        ),
        movementFocus: "Klappen, sprinten, kiezen en direct terugkoppelen.",
        materials: ["Woordkaartjes", "Regelkaarten", "Pionnen of startlijn"],
        steps: [
          "Noem een woord of lees een zin voor.",
          "Leerlingen bepalen kort waar zij naartoe moeten.",
          "Zij rennen naar het juiste kaartje en tikken het aan.",
          "Bespreek kort waarom het kaartje of de regel klopt."
        ],
        differentiation: byGroup(
          "Werk eerst met klankzuivere woorden.",
          "Gebruik twee regels tegelijk of voeg een afleider toe.",
          "Werk met sterke en zwakke werkwoorden door elkaar."
        ),
        teacherTip: byGroup(
          "Laat kinderen eerst samen de klank horen voor ze gaan rennen.",
          "Herhaal dezelfde regel meerdere keren voor automatiseren.",
          "Zet zinnen in alledaagse context zodat regels betekenis houden."
        ),
        keywords: ["spelling", "regels", "werkwoorden", "klanken", "rennen"]
      },
      {
        key: "goedoffout",
        visual: "jump",
        visualHint:
          "Een snelle goed-of-fout keuzevorm met hoepels of vakken op de vloer.",
        title: byGroup("Goed of fout-hoepels", "Spelling-check sprint", "Redactie-race"),
        summary: byGroup(
          "Leerlingen springen in de juiste hoepel bij een goed of fout geschreven woord.",
          "Leerlingen zoeken actief naar de fout en verbeteren die samen.",
          "Leerlingen reageren als redacteur en herstellen woorden of zinnen."
        ),
        duration: byGroup("5 min", "7 min", "8 min"),
        setup:
          "Leg twee of drie hoepels neer: goed, fout en eventueel twijfel. Zorg voor voldoende springruimte.",
        goal: byGroup(
          "Goed en fout woordbeeld onderscheiden.",
          "Spellingfouten herkennen en benoemen.",
          "Fouten analyseren en gericht verbeteren."
        ),
        movementFocus: "Springen of lopen naar een keuzevak en terugkomen naar de klas.",
        materials: ["Hoepels of vloervakken", "Woorden of korte zinnen", "Eventueel stiften"],
        steps: [
          "Toon kort een woord of lees een zin voor.",
          "Leerlingen bewegen naar goed, fout of twijfel.",
          "Vraag één leerling om de keuze uit te leggen.",
          "Laat de groep eventueel het woord verbeteren."
        ],
        differentiation: byGroup(
          "Gebruik maar twee keuzes en veel hardop herhalen.",
          "Laat leerlingen ook de regel erbij noemen.",
          "Werk met zinnen waarin meerdere fouten kunnen zitten."
        ),
        teacherTip: byGroup(
          "Spreek het woord en toon het woordbeeld kort achter elkaar.",
          "Gebruik woorden uit de actuele spellingles.",
          "Laat leerlingen niet alleen verbeteren, maar ook verantwoorden."
        ),
        keywords: ["goed of fout", "woordbeeld", "redactie", "fouten", "spelling"]
      },
      {
        key: "letterflitsestafette",
        visual: "relay",
        visualHint:
          "Een estafette met losse letters of lettergroepen die snel op de juiste plek moeten belanden.",
        title: byGroup("Letterflits-estafette", "Woordbeeld-estafette", "Spellingflits-estafette"),
        summary: byGroup(
          "Kinderen halen letters op om samen een woord uit het woordpakket te bouwen.",
          "Leerlingen vullen snel ontbrekende lettergroepen in een woord aan.",
          "Leerlingen reconstrueren woorden met lastige spellingpatronen."
        ),
        duration: byGroup("7 min", "8 min", "9 min"),
        setup:
          "Maak per team een bouwplek en leg letters of lettergroepen op afstand in bakken of op kaartjes.",
        goal: byGroup(
          "Klanken en letters koppelen tijdens het bouwen van woorden.",
          "Woordbeeld versterken door actieve herhaling.",
          "Spellingpatronen herkennen en bewust reconstrueren."
        ),
        movementFocus: "Letters ophalen, terugrennen en snel samenleggen.",
        materials: ["Losse letterkaartjes of lettergroepen", "Bakken of pionnen", "Voorbeeldwoorden"],
        steps: [
          "Geef per ronde één doelwoord of woordcategorie.",
          "Leerlingen halen om de beurt letters of lettergroepen op.",
          "Het team bouwt het woord en controleert of het compleet is.",
          "Na een goede ronde volgt direct een nieuw woord."
        ],
        differentiation: byGroup(
          "Gebruik korte woorden van drie of vier letters.",
          "Werk met categorieën als au/ou of ei/ij.",
          "Voeg werkwoorduitgangen of leenwoorddelen toe."
        ),
        teacherTip: byGroup(
          "Laat leerlingen het doelwoord eerst hardop verklanken.",
          "Gebruik kleur voor lastige lettergroepen.",
          "Bespreek na afloop welke lettergroep vaak voor verwarring zorgde."
        ),
        keywords: ["letterflits", "woordbeeld", "lettergroepen", "estafette", "woordpakket"]
      },
      {
        key: "woordmuurtikspel",
        visual: "mission",
        visualHint:
          "Verspreide woordkaartjes in de ruimte die leerlingen moeten aantikken en categoriseren.",
        title: byGroup("Woordmuur-tikspel", "Regelmuur-tikspel", "Werkwoordmuur-race"),
        summary: byGroup(
          "Leerlingen tikken het juiste woord op de woordmuur aan.",
          "Leerlingen zoeken al bewegend woorden die bij dezelfde regel horen.",
          "Leerlingen tikken de juiste werkwoordsvorm of uitgang aan."
        ),
        duration: byGroup("6 min", "7 min", "8 min"),
        setup:
          "Maak een woordmuur of plak kaartjes verspreid op ramen, wanden of borden. Laat voldoende loopruimte.",
        goal: byGroup(
          "Bekende spellingwoorden snel herkennen.",
          "Regels koppelen aan concrete voorbeelden.",
          "Werkwoorduitgangen en vormen sneller onderscheiden."
        ),
        movementFocus: "Zoeken, aantikken, teruglopen en kort verwoorden.",
        materials: ["Woordkaartjes", "Plakgum of tape", "Eventueel categoriekaartjes"],
        steps: [
          "Verspreid de kaartjes zichtbaar in de ruimte.",
          "Noem een regel, klank of categorie.",
          "Leerlingen zoeken het passende woord en tikken het aan.",
          "Bespreek welke kenmerken in het woord de keuze verklaren."
        ],
        differentiation: byGroup(
          "Gebruik minder kaartjes en duidelijke visuele verschillen.",
          "Laat leerlingen na het tikken ook een extra woord uit dezelfde categorie noemen.",
          "Voeg twijfelwoorden toe die om uitleg vragen."
        ),
        teacherTip: byGroup(
          "Hang de woorden op ooghoogte van de leerlingen.",
          "Werk met kleurcodes voor categorieën.",
          "Gebruik deze vorm ook als snelle herhaling aan het begin van een les."
        ),
        keywords: ["woordmuur", "tikspel", "regels", "werkwoorden", "spelling"]
      }
    ],
    tijdens: [
      {
        key: "woordpakketloopdictee",
        visual: "dictation",
        visualHint:
          "Duo's halen woorden of zinnen op uit de ruimte en schrijven die terug op hun eigen plek.",
        title: byGroup("Woordpakket-loopdictee", "Regel-loopdictee", "Werkwoord-loopdictee"),
        summary: byGroup(
          "Leerlingen halen woorden uit het woordpakket op en schrijven die samen na.",
          "Duo's halen woorden met verschillende spellingregels op en benoemen de aanpak.",
          "Leerlingen verwerken zinnen waarin werkwoordspelling bewust toegepast moet worden."
        ),
        duration: byGroup("12 min", "15 min", "15 min"),
        setup:
          "Hang woorden of zinnen verspreid op. Werk in duo's met een loper en een schrijver.",
        goal: byGroup(
          "Woordbeeld versterken en woorden actief opschrijven.",
          "Spellingregels toepassen tijdens het schrijven.",
          "Werkwoordspelling koppelen aan zinscontext."
        ),
        movementFocus: "Lopen, onthouden, terugdicteren en direct controleren.",
        materials: ["Woord- of zinkaarten", "Schrijfbladen of wisborden", "Potloden"],
        steps: [
          "De loper bekijkt één woord of zin en onthoudt een haalbaar deel.",
          "Terug aan tafel dicteert de loper het woord of de zin aan de schrijver.",
          "Samen controleren ze spelling en regelgebruik.",
          "Na een paar rondes wisselen de rollen."
        ],
        differentiation: byGroup(
          "Laat kinderen woorden eventueel eerst met letterkaartjes leggen.",
          "Vraag steeds welke regel of aanpak is gebruikt.",
          "Laat leerlingen de grammaticale uitleg in één korte zin noteren."
        ),
        teacherTip: byGroup(
          "Gebruik woorden uit de les van die week.",
          "Houd de loopafstand overzichtelijk zodat de focus op spelling blijft.",
          "Kies zinnen met inhoud uit andere vakken voor meer betekenis."
        ),
        keywords: ["loopdictee", "woordpakket", "regel", "werkwoorden", "spelling"]
      },
      {
        key: "lettergrepenspringen",
        visual: "jump",
        visualHint:
          "Springvakken of hoepels helpen leerlingen het woord in delen of categorieën te verdelen.",
        title: byGroup("Lettergrepen springen", "Woordpakket-sprongen", "Spellingstrategie-circuit"),
        summary: byGroup(
          "Kinderen springen per lettergreep en bouwen daarna het woord na.",
          "Leerlingen koppelen springvakken aan spellingcategorieën.",
          "Leerlingen kiezen in beweging een passende spellingstrategie."
        ),
        duration: byGroup("10 min", "12 min", "14 min"),
        setup:
          "Leg springvakken of hoepels klaar. Combineer deze met kaartjes voor woorden of strategieën.",
        goal: byGroup(
          "Lettergrepen horen en koppelen aan woordopbouw.",
          "Patronen in woordpakketten herkennen.",
          "Bewust kiezen welke spellingstrategie helpt."
        ),
        movementFocus: "Springen, hardop verdelen en woorden indelen of uitleggen.",
        materials: ["Hoepels of vakken", "Woordkaartjes", "Strategie- of categoriekaarten"],
        steps: [
          "Noem of toon een woord en laat leerlingen kort denken.",
          "Leerlingen springen de lettergrepen, categorie of strategie.",
          "Na het springen benoemen ze waarom deze indeling klopt.",
          "Werk daarna met een nieuw woord of nieuwe categorie."
        ],
        differentiation: byGroup(
          "Werk met woorden van twee lettergrepen.",
          "Laat leerlingen een extra woord uit dezelfde categorie bedenken.",
          "Gebruik twijfelwoorden waar meerdere strategieën mogelijk lijken."
        ),
        teacherTip: byGroup(
          "Gebruik een vast ritme in de sprongen.",
          "Laat leerlingen eerst voorspellen en daarna controleren.",
          "Benadruk dat uitleg belangrijker is dan alleen snel springen."
        ),
        keywords: ["lettergrepen", "springen", "strategie", "woordpakket", "spelling"]
      },
      {
        key: "regelhoeken",
        visual: "corners",
        visualHint:
          "Vier hoeken staan voor verschillende spellingregels of aanpakken waar leerlingen bewust voor kiezen.",
        title: byGroup("Klankhoeken", "Regelhoeken", "Werkwoordhoeken"),
        summary: byGroup(
          "Leerlingen kiezen de hoek met de juiste klank of lettergroep.",
          "Leerlingen bewegen naar de spellingregel die past bij het woord.",
          "Leerlingen kiezen de juiste werkwoordsaanpak in een hoek."
        ),
        duration: byGroup("10 min", "12 min", "12 min"),
        setup:
          "Label vier hoeken met spellingcategorieën of strategieën. Zorg dat de hoeken duidelijk zichtbaar zijn.",
        goal: byGroup(
          "Klanken en letters sorteren.",
          "Spellingregels actief herkennen.",
          "Werkwoordaanpak koppelen aan concrete zinnen."
        ),
        movementFocus: "Naar een hoek bewegen, overleggen en samen controleren.",
        materials: ["Hoekkaarten", "Woordkaartjes of zinnen", "Eventueel whiteboards"],
        steps: [
          "Lees een woord of zin voor of toon deze kort op het bord.",
          "Leerlingen kiezen individueel of in duo's een hoek.",
          "In de hoek bespreken zij waarom de keuze past.",
          "Vraag één leerling per hoek om de regel of aanpak te verwoorden."
        ],
        differentiation: byGroup(
          "Gebruik twee hoeken en sterk contrasterende klanken.",
          "Laat leerlingen een tweede passend woord noemen.",
          "Voeg twijfelgevallen toe die om grammaticale uitleg vragen."
        ),
        teacherTip: byGroup(
          "Werk met vaste kleuren per regel.",
          "Wissel makkelijke en lastige voorbeelden af.",
          "Laat leerlingen soms van hoek wisselen als een ander argument sterker is."
        ),
        keywords: ["hoeken", "regels", "werkwoord", "klanken", "spelling"]
      },
      {
        key: "foutenjachtduo",
        visual: "dictation",
        visualHint:
          "Duo's zoeken foutieve woorden of zinnen op in de ruimte en verbeteren die op hun eigen werkplek.",
        title: byGroup("Foutenjacht duo", "Spelfout-speurtocht", "Redactie-duo"),
        summary: byGroup(
          "Duo's zoeken woorden met een fout en verbeteren die samen.",
          "Leerlingen speuren naar spellingfouten in kaartjes of zinnen.",
          "Leerlingen redigeren korte teksten in duo's door fouten actief op te halen."
        ),
        duration: byGroup("12 min", "14 min", "15 min"),
        setup:
          "Hang foutieve woord- of zinkaarten op. Laat duo's bij een schrijfplek werken en om de beurt op speurtocht gaan.",
        goal: byGroup(
          "Fouten zien en corrigeren in bekende woorden.",
          "Spellingbewustzijn gebruiken tijdens het redigeren.",
          "Systematisch fouten opsporen en verantwoorden."
        ),
        movementFocus: "Zoeken, onthouden, teruglopen en samen verbeteren.",
        materials: ["Foutieve woord- of zinkaarten", "Schrijfmateriaal", "Eventueel vergrootkaarten"],
        steps: [
          "Laat één leerling een foutkaart opzoeken en onthouden of noteren.",
          "Terug aan tafel verbeteren de leerlingen samen het woord of de zin.",
          "Ze koppelen de correctie aan een regel of aanpak.",
          "Daarna vertrekt de andere leerling voor de volgende fout."
        ],
        differentiation: byGroup(
          "Werk met losse woorden in plaats van zinnen.",
          "Voeg meerdere foutsoorten toe voor meer uitdaging.",
          "Laat leerlingen ook benoemen welk type fout het was."
        ),
        teacherTip: byGroup(
          "Gebruik een vaste structuur: zoek, herstel, verklaar.",
          "Kies eerst maar één foutsoort per ronde.",
          "Werk met korte teksten uit andere lessen voor rijke toepassing."
        ),
        keywords: ["foutenjacht", "redactie", "speurtocht", "spelfouten", "duo"]
      }
    ],
    bewegend: [
      {
        key: "letterparcours",
        visual: "mission",
        visualHint:
          "Een beweegroute met meerdere punten waar letters, woorden of werkwoorddelen verzameld worden.",
        title: byGroup("Letterparcours", "Spellingparcours", "Werkwoordenparcours"),
        summary: byGroup(
          "Kinderen doorlopen een route en verzamelen letters voor een woord.",
          "Leerlingen koppelen hindernissen aan spellingkeuzes en woordbeelden.",
          "Leerlingen werken via beweegposten naar de juiste werkwoordsvorm toe."
        ),
        duration: byGroup("15 min", "18 min", "18 min"),
        setup:
          "Richt een klein parcours in met drie tot vier beweegpunten. Koppel bij ieder punt een letter, woorddeel of regelvraag.",
        goal: byGroup(
          "Woordvorming koppelen aan concreet bewegen.",
          "Spellingregels in een actieve context toepassen.",
          "Werkwoordspelling automatiseren in een doorlopende route."
        ),
        movementFocus: "Springen, klimmen of slalommen en daarna direct taal verwerken.",
        materials: ["Pionnen, banken of springvakken", "Letter- of woordkaartjes", "Opdrachtkaarten"],
        steps: [
          "Leg bij elk onderdeel van het parcours een taalopdracht klaar.",
          "Leerlingen voltooien eerst de beweegactie en pakken daarna het kaartje of antwoord.",
          "Aan het eind van de route bouwen of controleren zij het woord of de zin.",
          "Herhaal het parcours met nieuwe woorden of regels."
        ],
        differentiation: byGroup(
          "Werk met korte woorden en weinig beweegpunten.",
          "Voeg jokerkaarten toe voor steun of bonuswoorden voor uitdaging.",
          "Gebruik zinnen met tijdsprongen of samengestelde werkwoorden."
        ),
        teacherTip: byGroup(
          "Oefen het parcours eerst zonder taalopdracht.",
          "Laat leerlingen pas praten op de verzamelplek; dat houdt de route veilig.",
          "Kies woorden die echt aansluiten bij de instructie van die dag."
        ),
        keywords: ["parcours", "letterparcours", "werkwoorden", "bewegen", "spelling"]
      },
      {
        key: "woordbouwcircuit",
        visual: "stations",
        visualHint:
          "Verschillende stations richten zich elk op een deel van het woordbeeld of een spellingaanpak.",
        title: byGroup("Woordbouw-circuit", "Spellingmix-circuit", "Redactie-circuit"),
        summary: byGroup(
          "Kinderen werken langs stations aan begin-, midden- en eindklank.",
          "Leerlingen oefenen verschillende spellingproblemen in een gevarieerd circuit.",
          "Leerlingen verbeteren en verantwoorden schrijfkeuzes in een redactiecircuit."
        ),
        duration: byGroup("12 min", "16 min", "16 min"),
        setup:
          "Zet drie tot vier stations klaar met elk een eigen focus. Laat groepjes op signaal doorwisselen.",
        goal: byGroup(
          "Woordopbouw ervaren via meerdere klankdelen.",
          "Meerdere spellingcategorieën herhalen binnen één les.",
          "Teksten systematisch nalopen op fouten en regels."
        ),
        movementFocus: "Kort werken, doorschuiven en opnieuw actief starten.",
        materials: ["Stations met kaarten", "Schrijf- of legmateriaal", "Tijdsignaal"],
        steps: [
          "Introduceer ieder station kort en doe één voorbeeld samen.",
          "Groepjes werken twee tot vier minuten per station.",
          "Na het signaal schuiven zij door naar het volgende onderdeel.",
          "Aan het einde kiest ieder groepje één inzicht of lastig woord om te delen."
        ],
        differentiation: byGroup(
          "Gebruik vaste lettersets of geluidsondersteuning.",
          "Geef keuze-opdrachten met basis en extra.",
          "Laat leerlingen fouttypes vergelijken en rubriceren."
        ),
        teacherTip: byGroup(
          "Zorg voor rustige, herkenbare stations.",
          "Laat leerlingen eerst ontdekken en daarna pas opschrijven.",
          "Zet de meest foutgevoelige categorieën op aparte stations."
        ),
        keywords: ["circuit", "woordbouw", "redactie", "stations", "spelling"]
      },
      {
        key: "werkwoordlijn",
        visual: "line",
        visualHint:
          "Een lijn op de vloer helpt leerlingen werkwoordsvormen en functies letterlijk van elkaar te scheiden.",
        title: byGroup("Woordenlijn", "Werkwoordlijn", "Werkwoordlijn met uitleg"),
        summary: byGroup(
          "Leerlingen zetten woorden op een lijn van klank naar schrift.",
          "Leerlingen plaatsen werkwoorden of uitgangen op de juiste plek.",
          "Leerlingen ordenen werkwoordsvormen en leggen de grammaticale keuze uit."
        ),
        duration: byGroup("10 min", "12 min", "14 min"),
        setup:
          "Maak een vloerlijn met meerdere vakken of labels. Gebruik kaartjes met woorden, uitgangen of vormen.",
        goal: byGroup(
          "Woorddelen en volgorde bewust ervaren.",
          "Werkwoorduitgangen en functies onderscheiden.",
          "Werkwoordspelling koppelen aan onderwerp, tijd en functie."
        ),
        movementFocus: "Naar een plek lopen, verschuiven en samen controleren.",
        materials: ["Vloerlijn of tape", "Kaartjes met woorden of vormen", "Eventueel markeerkaarten"],
        steps: [
          "Leg de lijn uit en benoem de betekenis van de verschillende plekken.",
          "Leerlingen leggen of dragen een kaartje naar de juiste positie.",
          "De groep controleert samen of de plaatsing klopt en waarom.",
          "Laat leerlingen daarna een nieuwe kaart of een hele zin toevoegen."
        ],
        differentiation: byGroup(
          "Gebruik alleen begin en eind van een woord of eenvoudige werkwoorden.",
          "Werk met tegenstellingen zoals stam, persoonsvorm en voltooid deelwoord.",
          "Voeg tijdsprongen of samengestelde vormen toe."
        ),
        teacherTip: byGroup(
          "Gebruik duidelijke pictogrammen bij de lijn.",
          "Laat leerlingen hardop denken voor ze verschuiven.",
          "Koppel de lijn aan zinnen die al in de les zijn besproken."
        ),
        keywords: ["werkwoordlijn", "vloerlijn", "uitgangen", "persoonsvorm", "spelling"]
      },
      {
        key: "spellingbingo",
        visual: "bingo",
        visualHint:
          "Een bingokaart met beweegopdrachten en spellingcategorieën laat leerlingen actief zoeken, leggen en afvinken.",
        title: byGroup("Spellingbingo in beweging", "Spellingmix-bingo", "Redactie-bingo"),
        summary: byGroup(
          "Kinderen vullen een bingokaart door goede woorden te vinden en te bewegen.",
          "Leerlingen combineren spellingcategorieën met korte beweegopdrachten.",
          "Leerlingen vinken categorieën, foutsoorten of werkwoordvormen af in een actieve bingo."
        ),
        duration: byGroup("12 min", "14 min", "14 min"),
        setup:
          "Geef groepjes een bingokaart. Verspreid woorden, zinnen of categoriekaartjes in de ruimte.",
        goal: byGroup(
          "Veel woorden op een speelse manier herhalen.",
          "Spellingcategorieën breed en actief herhalen.",
          "Foutsoorten of werkwoordvormen gericht onderscheiden."
        ),
        movementFocus: "Zoeken, lopen, kiezen en terugkomen om af te vinken.",
        materials: ["Bingokaarten", "Woord- of zinkaarten", "Stiften of fiches"],
        steps: [
          "Leg uit wat er op de bingokaart gezocht of opgelost moet worden.",
          "Leerlingen bewegen door de ruimte en halen telkens één passend voorbeeld op.",
          "Terug bij de tafel vinken ze het vak af of leggen een fiche.",
          "Het eerste groepje met een rij legt uit waarom hun woorden of zinnen passen."
        ],
        differentiation: byGroup(
          "Werk met kleinere bingokaarten en bekende woorden.",
          "Laat leerlingen per vak ook de regel benoemen.",
          "Gebruik bingo met fouttypes, werkwoordsvormen of taalredactie."
        ),
        teacherTip: byGroup(
          "Maak de bingokaart rustig en goed leesbaar.",
          "Kies niet te veel categorieën tegelijk.",
          "Laat de uitleg na een bingo altijd deel van het spel zijn."
        ),
        keywords: ["bingo", "spellingmix", "redactie", "werkwoorden", "bewegen"]
      }
    ]
  },
  rekenen: {
    energizers: [
      {
        key: "springnaarantwoord",
        visual: "jump",
        visualHint:
          "Een snelle rekensprint met antwoorden op de vloer waar leerlingen naartoe springen.",
        title: byGroup("Spring naar het antwoord", "Strategie-sprong", "Rekenkeuze-run"),
        summary: byGroup(
          "Leerlingen springen naar het juiste antwoord bij een korte som.",
          "Leerlingen kiezen al bewegend de handigste strategie bij een som.",
          "Leerlingen rennen naar de oplossing of aanpak die het best past."
        ),
        duration: byGroup("6 min", "8 min", "8 min"),
        setup:
          "Leg antwoorden of strategiekaarten verspreid op de vloer. Zorg dat de vakken voldoende uit elkaar liggen.",
        goal: byGroup(
          "Optellen en aftrekken automatiseren.",
          "Rekenstrategieën bewust kiezen.",
          "Aanpakken vergelijken en verantwoorden."
        ),
        movementFocus: "Springen, tikken, terugkomen en opnieuw reageren.",
        materials: ["Getalkaarten of antwoordvakken", "Somkaartjes", "Timer"],
        steps: [
          "Noem een som, strategie of contextvraag.",
          "Leerlingen bewegen naar het antwoord of de aanpak die volgens hen past.",
          "Laat één leerling uitleggen waarom die keuze slim is.",
          "Ga direct door met de volgende vraag."
        ],
        differentiation: byGroup(
          "Werk met sommen tot 10 of 20.",
          "Gebruik strategiekaarten zoals rijgen, splitsen of compenseren.",
          "Voeg contextopgaven toe met meerdere denkwegen."
        ),
        teacherTip: byGroup(
          "Houd de rondes heel kort.",
          "Vraag niet alleen het antwoord, maar ook hoe iemand dacht.",
          "Gebruik deze vorm als actieve herhaling na een instructie."
        ),
        keywords: ["springen", "antwoord", "strategie", "energizer", "rekenen"]
      },
      {
        key: "sommenflitsestafette",
        visual: "relay",
        visualHint:
          "Somkaartjes liggen op afstand en worden in estafettevorm opgehaald en opgelost.",
        title: byGroup("Sommenflits-estafette", "Tafels-estafette", "Breuken-estafette"),
        summary: byGroup(
          "Teams halen somkaartjes op en lossen ze snel samen op.",
          "Leerlingen automatiseren tafels en deelsommen in een estafette.",
          "Leerlingen oefenen breuken, procenten of verhoudingen in een beweegvorm."
        ),
        duration: byGroup("7 min", "8 min", "10 min"),
        setup:
          "Maak teams, leg kaartjes aan de overkant en geef elk team een wisbord of antwoordblad.",
        goal: byGroup(
          "Sommen vlot terughalen.",
          "Tafels automatiseren met tempo en samenwerking.",
          "Verschillende getalrepresentaties sneller herkennen."
        ),
        movementFocus: "Ophalen, terugrennen, oplossen en doorgeven aan de volgende.",
        materials: ["Somkaartjes", "Wisborden", "Stiften of potloden"],
        steps: [
          "Een leerling haalt een kaartje op en brengt dit terug naar het team.",
          "Samen zeggen of schrijven ze het antwoord op.",
          "Pas na controle vertrekt de volgende leerling.",
          "Bespreek aan het einde welke sommen direct gingen en welke denkstappen nodig hadden."
        ],
        differentiation: byGroup(
          "Werk met sommen tot 20 en telmateriaal op tafel.",
          "Kies per ronde één tafel of bewerking.",
          "Werk met breuken, procenten en verhoudingen door elkaar."
        ),
        teacherTip: byGroup(
          "Maak de estafette kort maar krachtig.",
          "Gebruik verschillende kleuren kaartjes per categorie.",
          "Laat leerlingen na elke ronde hun strategie kort benoemen."
        ),
        keywords: ["estafette", "tafels", "breuken", "automatiseren", "rekenen"]
      },
      {
        key: "dobbelren",
        visual: "relay",
        visualHint:
          "Dobbelstenen en loopopdrachten zorgen voor snelle rekenrondes met veel actie.",
        title: byGroup("Dobbel-ren", "Rekendobbel-race", "Strategiedobbel-run"),
        summary: byGroup(
          "Leerlingen gooien, rennen en lossen direct een som op.",
          "Leerlingen combineren dobbelsteenuitkomsten met een gekozen strategie.",
          "Leerlingen maken op basis van gegooide getallen een passende rekenopgave en lossen die op."
        ),
        duration: byGroup("6 min", "8 min", "8 min"),
        setup:
          "Leg een gooi- en een rekenzone klaar. Gebruik grote dobbelstenen of cijferkaarten.",
        goal: byGroup(
          "Getallen snel combineren tot een som.",
          "Strategisch rekenen met gegooide getallen.",
          "Flexibel omgaan met getallen en bewerkingen."
        ),
        movementFocus: "Gooien, naar de rekenplek rennen en terugkomen voor een nieuwe ronde.",
        materials: ["Grote dobbelstenen", "Wisborden of kaartjes", "Eventueel bewerkingskaarten"],
        steps: [
          "Leerlingen gooien één of twee dobbelstenen.",
          "Ze rennen naar de rekenplek en maken of kiezen een som met die getallen.",
          "Samen of individueel lossen ze de som op.",
          "Na controle start direct de volgende leerling of het volgende duo."
        ],
        differentiation: byGroup(
          "Gebruik één dobbelsteen en laat optellen met een vast getal.",
          "Werk met twee dobbelstenen en meerdere strategieën.",
          "Laat leerlingen zelf kiezen welke bewerking het slimst is."
        ),
        teacherTip: byGroup(
          "Gebruik zachte dobbelstenen op een vaste plek.",
          "Zorg voor duidelijke afspraken over wanneer iemand mag vertrekken.",
          "Laat leerlingen na afloop één slimme strategie delen."
        ),
        keywords: ["dobbel", "race", "som", "strategie", "rekenen"]
      },
      {
        key: "rekenhoekenspel",
        visual: "corners",
        visualHint:
          "Hoeken staan voor antwoorden of aanpakken zodat leerlingen door de ruimte bewegen om hun keuze te laten zien.",
        title: byGroup("Rekenhoekenspel", "Strategie-hoeken", "Oploshoeken"),
        summary: byGroup(
          "Leerlingen kiezen een hoek met het goede antwoord.",
          "Leerlingen bewegen naar de strategie die het best past.",
          "Leerlingen kiezen tussen meerdere oplosroutes voor een complexere som."
        ),
        duration: byGroup("6 min", "8 min", "9 min"),
        setup:
          "Label vier hoeken met antwoorden, strategieën of modellen. Houd de hoeken duidelijk zichtbaar.",
        goal: byGroup(
          "Getallen en antwoorden sneller herkennen.",
          "Aanpakken bewust vergelijken.",
          "Oplosroutes verantwoorden."
        ),
        movementFocus: "Naar een hoek bewegen, kort overleggen en uitleggen.",
        materials: ["Hoekkaarten", "Sommen of contextopgaven", "Eventueel modelkaarten"],
        steps: [
          "Lees een som of opgave voor.",
          "Leerlingen kiezen een hoek en bewegen daarheen.",
          "In de hoek bespreken zij kort waarom dit antwoord of deze aanpak past.",
          "Laat één leerling per hoek de keuze toelichten."
        ],
        differentiation: byGroup(
          "Gebruik antwoorden die duidelijk uit elkaar liggen.",
          "Werk met strategiehoeken zoals rijgen of splitsen.",
          "Gebruik contextproblemen met meerdere denkwegen."
        ),
        teacherTip: byGroup(
          "Wissel makkelijke en uitdagende sommen af.",
          "Laat leerlingen soms eerst individueel kiezen en daarna pas overleggen.",
          "Gebruik modellen zichtbaar op het bord als geheugensteun."
        ),
        keywords: ["hoeken", "strategie", "antwoorden", "modellen", "rekenen"]
      }
    ],
    tijdens: [
      {
        key: "getallencircuit",
        visual: "stations",
        visualHint:
          "Een stationencircuit waarbij leerlingen meerdere rekenvormen in korte actieve blokken verwerken.",
        title: byGroup("Getallen-circuit", "Strategiecircuit", "Rekenroute met modellen"),
        summary: byGroup(
          "Leerlingen draaien langs stations voor tellen, splitsen en vergelijken.",
          "Leerlingen oefenen meerdere rekenstrategieën in een actief circuit.",
          "Leerlingen gebruiken modellen zoals tabel of getallenlijn terwijl ze door een route bewegen."
        ),
        duration: byGroup("14 min", "16 min", "18 min"),
        setup:
          "Maak drie tot vier stations met elk één rekendoel. Geef per station een duidelijke instructiekaart.",
        goal: byGroup(
          "Basisgetalbegrip in verschillende vormen versterken.",
          "Flexibel leren schakelen tussen rekenstrategieën.",
          "Passende modellen gebruiken bij een opgave."
        ),
        movementFocus: "Van station naar station bewegen en bij ieder punt opnieuw starten.",
        materials: ["Stationkaarten", "Getalkaarten of modelkaarten", "Eventueel blokjes of fiches"],
        steps: [
          "Introduceer ieder station kort en laat zien wat het product van de ronde is.",
          "Groepjes starten bij verschillende stations.",
          "Na het tijdsignaal schuiven ze door naar het volgende punt.",
          "Sluit af met een korte terugkoppeling op welke strategie of welk model hielp."
        ],
        differentiation: byGroup(
          "Gebruik concreet materiaal en kleine getallen.",
          "Laat sterke leerlingen ook een tweede strategie noteren.",
          "Voeg open opdrachten toe waarin meerdere modellen mogelijk zijn."
        ),
        teacherTip: byGroup(
          "Houd ieder station overzichtelijk en rustig.",
          "Gebruik vaste kleuren of nummers voor de stations.",
          "Laat leerlingen eerst voorspellen welk model ze nodig hebben."
        ),
        keywords: ["circuit", "getallen", "strategieën", "modellen", "rekenen"]
      },
      {
        key: "meetrondje",
        visual: "measure",
        visualHint:
          "Leerlingen lopen rond met meetmateriaal en verwerken onderweg directe meetopdrachten.",
        title: byGroup("Meetrondje", "Rekenwandeling", "Datawandeling"),
        summary: byGroup(
          "Leerlingen meten, tellen en vergelijken objecten in de klas.",
          "Leerlingen verzamelen al wandelend lengtes, aantallen of gegevens.",
          "Leerlingen lopen langs meet- en datapunten en analyseren hun uitkomsten."
        ),
        duration: byGroup("12 min", "14 min", "16 min"),
        setup:
          "Geef duo's een meetblad en laat hen via een route verschillende objecten of meetpunten bezoeken.",
        goal: byGroup(
          "Meten en vergelijken concreet ervaren.",
          "Meetgegevens verzamelen en gebruiken in berekeningen.",
          "Gegevens analyseren en conclusies trekken."
        ),
        movementFocus: "Wandelen, meten, noteren en door naar een nieuw meetpunt.",
        materials: ["Meetlinten of stapkaarten", "Klemboards", "Opdrachtbladen"],
        steps: [
          "Geef ieder duo een route of lijst met meetopdrachten.",
          "Laat leerlingen per meetpunt kort meten of tellen.",
          "Terug op de werkplek verwerken zij de uitkomst in een som, vergelijking of conclusie.",
          "Bespreek klassikaal één opvallend verschil of inzicht."
        ],
        differentiation: byGroup(
          "Werk met stappen tellen en vergelijken groot of klein.",
          "Laat leerlingen verschil, totaal of schatting uitrekenen.",
          "Voeg percentages, gemiddelden of meetnauwkeurigheid toe."
        ),
        teacherTip: byGroup(
          "Kies herkenbare objecten uit de ruimte.",
          "Werk met een routeblad met vaste kolommen.",
          "Laat leerlingen ook nadenken over meetfouten of onnauwkeurigheid."
        ),
        keywords: ["meten", "wandeling", "data", "tellen", "rekenen"]
      },
      {
        key: "tafelslooproute",
        visual: "path",
        visualHint:
          "Een uitgezette looproute met tafelsommen of rekenstappen die onderweg hardop of schriftelijk verwerkt worden.",
        title: byGroup("Sommenroute", "Tafels-looproute", "Rekenroute met stappen"),
        summary: byGroup(
          "Leerlingen lopen een route en lossen onderweg korte sommen op.",
          "Leerlingen automatiseren tafels en deelsommen in een vaste looproute.",
          "Leerlingen verwerken tussenstappen van complexere bewerkingen via een route."
        ),
        duration: byGroup("12 min", "14 min", "15 min"),
        setup:
          "Leg een route met kaartjes neer. Werk individueel of in duo's en gebruik een controleplek.",
        goal: byGroup(
          "Sommen tot een vast bereik herhalen met tempo.",
          "Tafels en delen automatiseren.",
          "Tussenstappen van grotere bewerkingen zichtbaar maken."
        ),
        movementFocus: "Door een route lopen, kort oplossen en doorgaan naar de volgende stop.",
        materials: ["Somkaartjes", "Routepijlen", "Controleblad of wisbord"],
        steps: [
          "Laat leerlingen de route in volgorde volgen.",
          "Bij ieder kaartje lossen zij de som op of noemen het antwoord hardop.",
          "Na meerdere stops controleren zij hun antwoorden bij een controlepunt.",
          "Werk daarna met een tweede ronde of een andere route."
        ],
        differentiation: byGroup(
          "Gebruik sommen met vaste getallen en visuele steun.",
          "Werk per ronde aan één tafel of bewerking.",
          "Gebruik routekaarten met meerdere tussenstappen of context."
        ),
        teacherTip: byGroup(
          "Maak de route visueel heel duidelijk op de vloer.",
          "Kies eerst één tempo: rustig en nauwkeurig of snel automatiseren.",
          "Gebruik deze vorm goed na een korte instructie of opfrisronde."
        ),
        keywords: ["tafels", "looproute", "automatiseren", "sommen", "rekenen"]
      },
      {
        key: "rekenschattocht",
        visual: "mission",
        visualHint:
          "Leerlingen volgen een schatroute waarbij iedere juiste rekenstap naar een volgende aanwijzing leidt.",
        title: byGroup("Rekenschattocht", "Strategische schattocht", "Probleemoplos-schattocht"),
        summary: byGroup(
          "Leerlingen lossen al bewegend rekenopdrachten op om een schat te vinden.",
          "Leerlingen combineren meerdere sommen en aanwijzingen in een schatroute.",
          "Leerlingen werken via rekenstappen naar een groter oplossingsprobleem toe."
        ),
        duration: byGroup("14 min", "16 min", "18 min"),
        setup:
          "Verstop aanwijzingen op verschillende plekken. Iedere juiste som of berekening leidt naar het volgende station.",
        goal: byGroup(
          "Rekenopdrachten betekenis geven in een spelvorm.",
          "Strategisch werken en uitkomsten koppelen aan een route.",
          "Probleemoplossend denken in een grotere context."
        ),
        movementFocus: "Zoeken, rekenen, controleren en door naar de volgende aanwijzing.",
        materials: ["Aanwijzingen", "Somkaartjes", "Eventueel slotkaart of schatkist"],
        steps: [
          "Geef leerlingen de eerste aanwijzing en leg uit hoe een goede uitkomst naar de volgende stap leidt.",
          "Leerlingen lossen de som of opdracht op en zoeken daarna de nieuwe plek.",
          "Onderweg noteren of onthouden zij hun uitkomsten.",
          "Aan het einde gebruiken zij alle uitkomsten voor de eindopdracht of schat."
        ],
        differentiation: byGroup(
          "Werk met korte aanwijzingen en eenvoudige sommen.",
          "Voeg keuze-opgaven toe voor verschillende strategieën.",
          "Gebruik een grotere context zoals budget, planning of score."
        ),
        teacherTip: byGroup(
          "Test de route van tevoren even zelf.",
          "Maak de eindopdracht zichtbaar aantrekkelijk.",
          "Laat leerlingen achteraf uitleggen welke aanwijzing het lastigst was."
        ),
        keywords: ["schattocht", "probleemoplossen", "aanwijzingen", "strategieën", "rekenen"]
      }
    ],
    bewegend: [
      {
        key: "levendegetallenlijn",
        visual: "line",
        visualHint:
          "Een grote getallenlijn op de vloer waarop leerlingen zelf gaan staan en bewegen.",
        title: byGroup("Levende getallenlijn", "Rekenlijn in beweging", "Getallenlijn met breuken en procenten"),
        summary: byGroup(
          "Kinderen stappen op een grote getallenlijn en zien waar een getal hoort.",
          "Leerlingen bewegen over een getallenlijn om sprongen en afronden te ervaren.",
          "Leerlingen positioneren zichzelf op een lijn met breuken, decimalen en procenten."
        ),
        duration: byGroup("12 min", "14 min", "15 min"),
        setup:
          "Maak met tape of stoepkrijt een grote getallenlijn. Kies ankerpunten passend bij het niveau.",
        goal: byGroup(
          "Getalpositie en sprongen concreet ervaren.",
          "De getallenlijn als denkmodel gebruiken.",
          "Verschillende notaties aan dezelfde plek koppelen."
        ),
        movementFocus: "Stappen, springen, verschuiven en met het lichaam afstand voelen.",
        materials: ["Tape of stoepkrijt", "Getalkaarten", "Eventueel kaarten met breuken en procenten"],
        steps: [
          "Introduceer de ankerpunten en laat leerlingen eerst rustig de lijn verkennen.",
          "Geef daarna een getal of notatie en laat leerlingen de juiste plek zoeken.",
          "Laat leerlingen sprongen maken zoals plus twee, afronden of halveren.",
          "Bespreek waarom een plek klopt en wat dichtbij of ver weg ligt."
        ],
        differentiation: byGroup(
          "Werk met een korte lijn tot 20.",
          "Gebruik grotere intervallen, schatten of afronden.",
          "Werk met 0 tot 1 of 0 tot 100 voor breuken, decimalen en procenten."
        ),
        teacherTip: byGroup(
          "Gebruik vaste startpunten voor rust.",
          "Vraag altijd waarom een leerling op die plek gaat staan.",
          "Laat leerlingen soms hun eigen ankerpunt toevoegen."
        ),
        keywords: ["getallenlijn", "breuken", "procenten", "springen", "rekenen"]
      },
      {
        key: "rekenmissie",
        visual: "mission",
        visualHint:
          "Een missiekaart en verschillende posten helpen leerlingen al bewegend meerdere rekenstappen te doorlopen.",
        title: byGroup("Rekenmissie", "Rekenexpeditie", "Probleemoplosmissie"),
        summary: byGroup(
          "Een speelse route met rekenstappen die naar een einddoel leidt.",
          "Groepjes volgen een expeditiekaart en lossen onderweg verschillende rekenproblemen op.",
          "Leerlingen verzamelen via beweegstations de tussenstappen voor een groter probleem."
        ),
        duration: byGroup("15 min", "18 min", "18 min"),
        setup:
          "Maak een missiekaart met meerdere posten. Iedere post levert een deeloplossing, code of aanwijzing op.",
        goal: byGroup(
          "Rekenvaardigheden inzetten binnen een verhaal of opdracht.",
          "Meerdere strategieën combineren in een doorlopende opdracht.",
          "Tussenstappen plannen en probleemoplossend denken zichtbaar maken."
        ),
        movementFocus: "Van post naar post bewegen, informatie ophalen en doorwerken naar een einddoel.",
        materials: ["Missiekaarten", "Stations met opgaven", "Klemboards of wisborden"],
        steps: [
          "Introduceer het missieprobleem en de routekaart.",
          "Leerlingen werken per station een deelstap uit.",
          "De uitkomst bepaalt de volgende aanwijzing of code.",
          "Aan het einde presenteren zij hun volledige route en oplossing."
        ],
        differentiation: byGroup(
          "Maak de missie kort en visueel.",
          "Voeg bonusstations toe voor snelle groepen.",
          "Werk met open contextproblemen waarin meerdere antwoorden mogelijk zijn."
        ),
        teacherTip: byGroup(
          "Kies een verhaallijn die motiveert maar niet afleidt.",
          "Geef ieder groepje één routeblad.",
          "Bespreek achteraf niet alleen de uitkomst, maar ook de gekozen aanpak."
        ),
        keywords: ["missie", "expeditie", "probleemoplossen", "rekenroute", "rekenen"]
      },
      {
        key: "meetenbouw",
        visual: "measure",
        visualHint:
          "Leerlingen meten, bouwen en vergelijken door materiaal actief te verplaatsen en neer te zetten.",
        title: byGroup("Meet-en-bouw", "Meet-en-bouw challenge", "Ontwerp-en-meet challenge"),
        summary: byGroup(
          "Kinderen meten blokken of voorwerpen en bouwen iets op maat.",
          "Leerlingen combineren meten en construeren in een actieve challenge.",
          "Leerlingen ontwerpen een oplossing en toetsen die aan maat, schaal of verhouding."
        ),
        duration: byGroup("14 min", "16 min", "18 min"),
        setup:
          "Leg bouwmateriaal, meetlinten en voorbeeldopdrachten klaar. Werk bij voorkeur in kleine teams.",
        goal: byGroup(
          "Lengte, hoogte en vergelijken concreet maken.",
          "Meten direct toepassen in bouwen.",
          "Rekenkundig ontwerpen en controleren."
        ),
        movementFocus: "Materiaal halen, neerzetten, meten, aanpassen en opnieuw proberen.",
        materials: ["Blokken, pionnen of losse materialen", "Meetlinten", "Opdrachtkaarten"],
        steps: [
          "Geef een bouwopdracht met een maat of eis, bijvoorbeeld precies 60 cm hoog.",
          "Leerlingen halen materiaal en bouwen een eerste versie.",
          "Daarna meten en vergelijken zij het resultaat en passen het ontwerp aan.",
          "Laat hen kort presenteren hoe zij tot hun maat kwamen."
        ],
        differentiation: byGroup(
          "Werk met directe vergelijkingen als hoger, lager of even lang.",
          "Voeg omtrek, verschil of totale lengte toe.",
          "Werk met schaal, verhouding of meerdere eisen tegelijk."
        ),
        teacherTip: byGroup(
          "Gebruik materiaal dat snel neer te zetten en weer op te ruimen is.",
          "Laat leerlingen eerst schatten en daarna meten.",
          "Koppel de challenge aan samenwerken en uitleggen."
        ),
        keywords: ["meten", "bouwen", "challenge", "ontwerpen", "rekenen"]
      },
      {
        key: "grafiekspel",
        visual: "bingo",
        visualHint:
          "Gegevens worden verzameld in beweging en daarna zichtbaar gemaakt in een grafiek of tabel.",
        title: byGroup("Grafiekspel", "Gegevensspel in beweging", "Grafiekspel met analyse"),
        summary: byGroup(
          "Kinderen verzamelen al bewegend gegevens en maken daar een eenvoudige grafiek van.",
          "Leerlingen turven, lopen en zetten hun gegevens om in een tabel of staafgrafiek.",
          "Leerlingen analyseren bewegend verzamelde data en trekken conclusies."
        ),
        duration: byGroup("12 min", "14 min", "16 min"),
        setup:
          "Maak een korte verzamelopdracht waarbij leerlingen in beweging data ophalen. Zorg daarna voor een verwerkingsplek.",
        goal: byGroup(
          "Tellen en vergelijken koppelen aan een eenvoudige grafiek.",
          "Gegevens verzamelen, structureren en aflezen.",
          "Data interpreteren en verklaren."
        ),
        movementFocus: "Tellen, turven, verzamelen en daarna gegevens verwerken.",
        materials: ["Turfbladen", "Stickervellen of fiches", "Grafiekpapier of bord"],
        steps: [
          "Laat leerlingen tijdens een route of spel gegevens verzamelen, zoals aantallen, keuzes of scores.",
          "Terug op de werkplek zetten zij de gegevens in een tabel of grafiek.",
          "Daarna vergelijken zij de uitkomsten en beantwoorden korte vragen.",
          "Sluit af met een conclusie in één zin."
        ],
        differentiation: byGroup(
          "Werk met eenvoudige turfstreepjes en pictogrammen.",
          "Gebruik staafgrafieken en vergelijkvragen.",
          "Voeg gemiddelden, trends of verklaringen toe."
        ),
        teacherTip: byGroup(
          "Kies data die leerlingen direct begrijpen.",
          "Gebruik grote visuele grafieken voor het digibord.",
          "Laat de verwerking altijd volgen op de beweging zodat de link helder blijft."
        ),
        keywords: ["grafiek", "data", "tellen", "analyseren", "rekenen"]
      }
    ]
  }
};

const library = buildLibrary();
const allTasks = flattenTasks();

const initialState = {
  groupId: null,
  subjectId: null,
  momentId: null,
  taskId: null,
  search: "",
  detailView: "task",
  mobileFiltersOpen: false
};

const state = {
  ...initialState
};

let historyIndex = 0;

const orderMaps = {
  groups: new Map(groups.map((item, index) => [item.id, index])),
  subjects: new Map(subjects.map((item, index) => [item.id, index])),
  moments: new Map(moments.map((item, index) => [item.id, index]))
};

const ui = {
  totalTaskCount: document.querySelector("#totalTaskCount"),
  finderPanel: document.querySelector("#finderPanel"),
  mobileFilterToggle: document.querySelector("#mobileFilterToggle"),
  searchInput: document.querySelector("#searchInput"),
  clearSearchButton: document.querySelector("#clearSearchButton"),
  groupFilters: document.querySelector("#groupFilters"),
  subjectFilters: document.querySelector("#subjectFilters"),
  momentFilters: document.querySelector("#momentFilters"),
  contentEyebrow: document.querySelector("#contentEyebrow"),
  contentTitle: document.querySelector("#contentTitle"),
  contentDescription: document.querySelector("#contentDescription"),
  selectionChips: document.querySelector("#selectionChips"),
  backButton: document.querySelector("#backButton"),
  resetButton: document.querySelector("#resetButton"),
  stepSection: document.querySelector("#stepSection"),
  stepSectionTitle: document.querySelector("#stepSectionTitle"),
  stepSectionDescription: document.querySelector("#stepSectionDescription"),
  stepCards: document.querySelector("#stepCards"),
  resultsSection: document.querySelector("#resultsSection"),
  resultsTitle: document.querySelector("#resultsTitle"),
  resultsMeta: document.querySelector("#resultsMeta"),
  taskDetail: document.querySelector("#taskDetail"),
  taskGrid: document.querySelector("#taskGrid")
};

bindIfPresent(ui.searchInput, "input", handleSearchInput);
bindIfPresent(ui.mobileFilterToggle, "click", toggleMobileFilters);
bindIfPresent(ui.clearSearchButton, "click", clearSearch);
bindIfPresent(ui.backButton, "click", handleBack);
bindIfPresent(ui.resetButton, "click", resetState);
bindIfPresent(ui.groupFilters, "click", handleFilterClick);
bindIfPresent(ui.subjectFilters, "click", handleFilterClick);
bindIfPresent(ui.momentFilters, "click", handleFilterClick);
bindIfPresent(ui.selectionChips, "click", handleChipClick);
bindIfPresent(ui.stepCards, "click", handleStepCardClick);
bindIfPresent(ui.taskDetail, "click", handleTaskDetailClick);
bindIfPresent(ui.taskGrid, "click", handleTaskGridClick);
window.addEventListener("popstate", handlePopState);

initializeHistory();
commitState("replace");

function bindIfPresent(element, eventName, handler) {
  if (element) {
    element.addEventListener(eventName, handler);
  }
}

function buildLibrary() {
  return groups.map((group) => ({
    ...group,
    subjects: subjects.map((subject) => ({
      ...subject,
      moments: moments.map((moment) => ({
        ...moment,
        tasks: taskBlueprints[subject.id][moment.id].map((blueprint) =>
          materializeTask(group, subject, moment, blueprint)
        )
      }))
    }))
  }));
}

function materializeTask(group, subject, moment, blueprint) {
  const title = readGroupValue(blueprint.title, group.id);
  const summary = readGroupValue(blueprint.summary, group.id);
  const goal = readGroupValue(blueprint.goal, group.id);
  const usesCards = true;
  const cardPack = buildCardPack(group, subject, moment, blueprint, title);

  return {
    id: `${group.id}-${subject.id}-${moment.id}-${blueprint.key}`,
    key: blueprint.key,
    groupId: group.id,
    subjectId: subject.id,
    momentId: moment.id,
    groupLabel: group.label,
    subjectLabel: subject.label,
    momentLabel: moment.label,
    momentSubtitle: moment.subtitle,
    title,
    summary,
    duration: readGroupValue(blueprint.duration, group.id),
    setup: blueprint.setup,
    goal,
    movementFocus: blueprint.movementFocus,
    materials: blueprint.materials,
    steps: blueprint.steps,
    differentiation: readGroupValue(blueprint.differentiation, group.id),
    teacherTip: readGroupValue(blueprint.teacherTip, group.id),
    visual: blueprint.visual,
    visualHint: blueprint.visualHint,
    usesCards,
    cardPack,
    keywords: blueprint.keywords,
    searchText: normalize(
      [
        group.label,
        subject.label,
        moment.label,
        moment.subtitle,
        title,
        summary,
        goal,
        blueprint.setup,
        blueprint.movementFocus,
        blueprint.keywords.join(" "),
        blueprint.materials.join(" ")
      ].join(" ")
    )
  };
}

function readGroupValue(value, groupId) {
  if (typeof value === "object" && value !== null && value[groupId] !== undefined) {
    return value[groupId];
  }

  return value;
}

function taskNeedsCards(blueprint) {
  const haystack = normalize(
    [blueprint.setup, blueprint.materials.join(" "), blueprint.keywords.join(" "), blueprint.visualHint].join(" ")
  );

  return haystack.includes("kaart");
}

function buildCardPack(group, subject, moment, blueprint, title) {
  const cards = getStarterCards(subject.id, group.id, blueprint.visual, blueprint.key, title);
  const supportCards = getSupportCards(group, subject, moment, blueprint, title);
  const teacherSheets = getTeacherSheets(group, subject, moment, blueprint, title);

  return {
    title: `Printset voor ${title}`,
    intro: buildCardIntro(subject, moment, group, title, cards.length),
    note: buildCardNote(subject.id, group.id, blueprint.visual, blueprint.key),
    cards,
    supportCards,
    teacherSheets,
    printChecklist: buildPrintChecklist(subject, cards, supportCards, teacherSheets)
  };
}

function buildCardIntro(subject, moment, group, title, cardCount) {
  const methodLine =
    subject.id === "spelling"
      ? "De inhoud volgt de lijn van Staal 2 met herkenbare categorieen, klankgroepen en waar nodig het werkwoordschema."
      : subject.id === "rekenen"
        ? "De inhoud sluit aan bij Getal & Ruimte Junior met automatiseren, rekentaal, vaste strategieen en duidelijke modellen."
        : "De inhoud sluit aan bij de taaldoelen van deze werkvorm.";

  return `Deze printset sluit direct aan bij ${title} voor ${group.label}. Je krijgt ${cardCount} werkkaartjes, uitgewerkt voor een klas van ${CLASS_SIZE} leerlingen. Verdeel ze los of in ${CLASS_GROUP_COUNT} setjes van ${CLASS_GROUP_SIZE} voor ${moment.label.toLowerCase()} binnen ${subject.label.toLowerCase()}. ${methodLine}`;
}

function buildCardNote(subjectId, groupId, visual, taskKey) {
  if (taskKey === "praatcarrousel" || taskKey === "spreekspoor") {
    return [
      "Leg de gesprekskaartjes op tafel of op de route zodat leerlingen steeds met een nieuwe startzin beginnen.",
      "Laat eerst kort voordoen hoe een volledig antwoord klinkt.",
      "Gebruik een timer van 20 tot 40 seconden per kaart voor tempo en rust."
    ];
  }

  if (taskKey === "argumentencircuit") {
    return [
      "Gebruik de argumentkaarten in vaste volgorde: stelling, bewijs, tegenargument, conclusie.",
      "Print voor elk tweetal een eigen set zodat iedereen hardop oefent.",
      "Laat leerlingen na elke ronde terugkijken welke kaart nog extra uitleg nodig had."
    ];
  }

  if (taskKey === "spellingbingo") {
    return [
      "Print een set als trekkaarten en leg de kaartjes zichtbaar op een stapel.",
      "Gebruik daarnaast wisbordjes of lege bingovakken om antwoorden te noteren.",
      "Bespreek na bingo altijd welke woorden lastig waren en welke regel erbij hoort."
    ];
  }

  if (taskKey === "rekenhoekenspel") {
    return [
      "Hang de strategie- of antwoordkaarten groot in de vier hoeken.",
      "Laat leerlingen eerst kiezen en daarna pas verwoorden waarom die hoek past.",
      "Gebruik bij twijfel een vijfde middenvak voor klassikale bespreking."
    ];
  }

  if (taskKey === "tafelslooproute" || taskKey === "rekenschattocht" || taskKey === "rekenmissie") {
    return [
      "Leg de routekaarten in duidelijke volgorde neer en nummer ze zichtbaar.",
      "Laat leerlingen steeds maar een kaart tegelijk meenemen of onthouden.",
      "Print eventueel een extra controleblad voor de leerkracht of een hulpgroep."
    ];
  }

  if (taskKey.includes("goedoffout")) {
    return [
      "Print de kaartjes dubbel en houd het goede en foute woord samen.",
      "Leg de kaartjes één voor één op de grond of laat leerlingen ze kort bekijken.",
      "Gebruik de kaartjes daarna opnieuw voor een klassikale nabespreking."
    ];
  }

  if (taskKey.includes("foutenjachtduo")) {
    return [
      "Hang de foutkaartjes verspreid op in de ruimte.",
      "Laat de loper steeds maar één fout tegelijk ophalen of onthouden.",
      "Bewaar de verbeterde versie achterop of op een apart controleblad."
    ];
  }

  if (taskKey.includes("werkwoordlijn") || taskKey.includes("levendezinnen")) {
    return [
      "Print één set voor de vloer en eventueel een tweede set voor controle.",
      "Gebruik tape of een vloerlijn zodat leerlingen de kaartjes op volgorde kunnen leggen.",
      "Laat leerlingen na het leggen altijd hardop teruglezen en uitleggen."
    ];
  }

  if (taskKey.includes("hoeken")) {
    return [
      "Print de kaarten groot genoeg zodat ze vanuit de hoek leesbaar zijn.",
      "Hang of leg iedere keuze in een eigen hoek of vak.",
      "Gebruik kleurcodes om hoeken snel herkenbaar te maken."
    ];
  }

  if (visual === "relay") {
    return [
      "Leg de kaartjes aan de overkant van het lokaal of plein.",
      "Maak twee of drie identieke setjes als meerdere teams tegelijk werken.",
      "Gebruik pionnen of vakken om de kaartjes per kleur of categorie te scheiden."
    ];
  }

  if (visual === "corners") {
    return [
      "Hang de kaartjes bij vier hoeken of keuzeplekken in de ruimte.",
      "Gebruik duidelijke kleurcodes per hoek.",
      "Laat leerlingen steeds uitleggen waarom ze voor een hoek hebben gekozen."
    ];
  }

  if (visual === "dictation") {
    return [
      "Hang de kaartjes op afstand zodat de loper echt moet onthouden.",
      "Gebruik één kaart per ronde voor rust.",
      "Hang lastige kaartjes iets verder weg voor extra uitdaging."
    ];
  }

  if (visual === "line") {
    return [
      "Geef leerlingen elk één kaartje en laat hen op volgorde staan.",
      "Gebruik extra vloerlabels voor begin, midden en eind.",
      "Laat leerlingen na het leggen altijd hardop teruglezen of controleren."
    ];
  }

  if (visual === "stations") {
    return [
      "Leg bij elk station een eigen kleur kaartjes.",
      "Gebruik maximaal één duidelijke opdracht per station.",
      "Laat groepjes na een signaal steeds doorwisselen."
    ];
  }

  if (visual === "path" || visual === "mission") {
    return [
      "Verspreid de kaartjes langs de route of bij controlepunten.",
      "Laat leerlingen één kaart tegelijk meenemen of bekijken.",
      "Gebruik pijlen of nummers zodat de volgorde zichtbaar blijft."
    ];
  }

  if (subjectId === "spelling" && groupId === GROUP_34) {
    return [
      "Gebruik steeds de woorden categorie, klank of lettergroep zodat leerlingen de Staal-aanpak herkennen.",
      "Laat leerlingen na hun keuze hardop zeggen of het bijvoorbeeld een hakwoord, zingwoord of ander categoriekaart-woord is.",
      "Houd de kaartenset klein en duidelijk zodat het woordbeeld centraal blijft."
    ];
  }

  if (subjectId === "spelling") {
    return [
      "Laat leerlingen steeds de categorie of regel noemen voordat zij het antwoord opschrijven of neerleggen.",
      "Gebruik waar passend de categoriekaart, klankgroepenkaart, ei-au-plaat of het werkwoordschema als taalsteun.",
      "Kies per ronde liever een kleine set kaarten dan te veel categorieen tegelijk."
    ];
  }

  if (subjectId === "rekenen") {
    return [
      "Laat leerlingen niet alleen een antwoord kiezen, maar ook de strategie of rekentaal erbij noemen.",
      "Gebruik steeds 1 duidelijke aanpak per ronde; dat past bij de opbouw van Getal & Ruimte Junior.",
      "Leg modelkaarten zichtbaar neer als geheugensteun, bijvoorbeeld getallenlijn, verhoudingstabel of rekenschema."
    ];
  }

  return [
    "Print de kaartjes op stevig papier of lamineer ze voor hergebruik.",
    "Gebruik meerdere setjes als leerlingen tegelijk werken.",
    "Bewaar de kaartjes per vak in een envelop of map voor snel hergebruik."
  ];
}

function card(label, text, hint) {
  return { label, text, hint };
}

function getCardPackOverrides() {
  if (getCardPackOverrides.cache) {
    return getCardPackOverrides.cache;
  }

  getCardPackOverrides.cache = {
    praatcarrousel: byGroup(
    [
      card("Praatstart", "Ik zie ...", "Leerling 1 begint met een volledige zin."),
      card("Praatstart", "Ik denk dat ...", "Laat leerling 2 aanvullen of doorvragen."),
      card("Praatstart", "Eerst gebeurde ...", "Gebruik dit om volgorde te oefenen."),
      card("Praatstart", "Daarna gebeurde ...", "Laat kinderen logisch verder vertellen."),
      card("Praatstart", "Mijn zin is ...", "Kinderen maken zelf een nieuwe zin."),
      card("Praatstart", "Het past bij ...", "Laat het antwoord koppelen aan het thema.")
    ],
    [
      card("Startzin", "Het kernwoord is ...", "Gebruik dit bij een korte taalronde."),
      card("Startzin", "Ik weet dit omdat ...", "Laat leerlingen hun antwoord onderbouwen."),
      card("Startzin", "Een voorbeeld is ...", "Koppel taal aan een concreet voorbeeld."),
      card("Startzin", "Dit lijkt op ...", "Goed voor vergelijken of classificeren."),
      card("Startzin", "Samengevat ...", "Gebruik dit voor een korte afsluiting."),
      card("Startzin", "Mijn vraag is ...", "Zet in als verlengde denktijd.")
    ],
    [
      card("Startzin", "Mijn standpunt is ...", "Leerlingen openen direct hun antwoord."),
      card("Startzin", "Mijn bewijs is ...", "Vraag om feit of voorbeeld."),
      card("Startzin", "Een tegenargument is ...", "Laat de ander reageren."),
      card("Startzin", "Toch kies ik voor ...", "Helpt bij afwegen en nuanceren."),
      card("Startzin", "Samengevat vind ik ...", "Gebruik voor een heldere kernzin."),
      card("Startzin", "Mijn conclusie is ...", "Laat leerlingen afronden in spreektaal.")
    ]
  ),
  spreekspoor: byGroup(
    [
      card("Routekaart 1", "Wie zie je?", "Laat leerlingen kort benoemen wat of wie centraal staat."),
      card("Routekaart 2", "Waar is het?", "Koppel taal aan plek of omgeving."),
      card("Routekaart 3", "Wat gebeurt er?", "Gebruik een volledige zin."),
      card("Routekaart 4", "Wat hoor je?", "Stimuleer zintuiglijke taal."),
      card("Routekaart 5", "Wat gebeurt er daarna?", "Oefen volgordewoorden."),
      card("Routekaart 6", "Vertel het hele stukje", "Laat de leerling samenhangend afronden.")
    ],
    [
      card("Routekaart 1", "Noem het onderwerp", "Gebruik dit als snelle start."),
      card("Routekaart 2", "Geef een uitleg", "Laat de leerling hardop verwoorden."),
      card("Routekaart 3", "Noem een voorbeeld", "Koppel begrip aan toepassing."),
      card("Routekaart 4", "Gebruik een signaalwoord", "Oefen samenhang in taal."),
      card("Routekaart 5", "Vat dit samen", "Laat het antwoord kort en scherp blijven."),
      card("Routekaart 6", "Sluit af in 1 zin", "Zorgt voor een duidelijke afronding.")
    ],
    [
      card("Routekaart 1", "Formuleer de kern", "Laat leerlingen meteen to the point antwoorden."),
      card("Routekaart 2", "Geef een bewijs", "Gebruik feit, voorbeeld of citaat."),
      card("Routekaart 3", "Noem een nuance", "Oefen precieze taal."),
      card("Routekaart 4", "Geef een tegenargument", "Laat de leerling verder denken."),
      card("Routekaart 5", "Reageer op dat tegenargument", "Gebruik een volledige redenering."),
      card("Routekaart 6", "Geef je conclusie", "Sluit kort en duidelijk af.")
    ]
  ),
  luisterhoeken: byGroup(
    [
      card("Hoek A", "Rijmt wel", "Hang deze kaart zichtbaar in hoek A."),
      card("Hoek B", "Rijmt niet", "Gebruik voor snelle auditieve keuzes."),
      card("Hoek C", "Begint hetzelfde", "Laat leerlingen luisteren naar de beginklank."),
      card("Hoek D", "Eindigt hetzelfde", "Laat leerlingen luisteren naar de eindklank.")
    ],
    [
      card("Hoek A", "Synoniem", "Gebruik bij woorden met dezelfde betekenis."),
      card("Hoek B", "Tegenstelling", "Laat leerlingen verschil uitleggen."),
      card("Hoek C", "Voorbeeld", "Koppel begrip aan concrete situatie."),
      card("Hoek D", "Uitleg", "Gebruik als denkhoek voor toelichting.")
    ],
    [
      card("Hoek A", "Stelling", "Hang deze kaart in de eerste keuzehoek."),
      card("Hoek B", "Bewijs", "Laat leerlingen hun hoek onderbouwen."),
      card("Hoek C", "Oorzaak", "Gebruik bij verbanden en uitleg."),
      card("Hoek D", "Gevolg", "Laat leerlingen redeneerketens afmaken.")
    ]
  ),
  woordpakketloopdictee: byGroup(
    [
      card("Dicteekaart", "maan", "Hang deze kaart op afstand op."),
      card("Dicteekaart", "roos", "Leerlingen onthouden en schrijven het woord."),
      card("Dicteekaart", "boom", "Gebruik 1 woord per loopronde."),
      card("Dicteekaart", "vis", "Laat na afloop samen controleren."),
      card("Dicteekaart", "jas", "Gebruik woorden uit het actuele pakket."),
      card("Dicteekaart", "tak", "Herhaal lastige woorden extra vaak.")
    ],
    [
      card("Dicteekaart", "ramen", "Leg nadruk op de juiste spellingregel."),
      card("Dicteekaart", "prijzen", "Laat de schrijver het woord hardop spellen."),
      card("Dicteekaart", "huisje", "Goed voor verkleinwoorden."),
      card("Dicteekaart", "gouden", "Gebruik woorden uit de huidige categorie."),
      card("Dicteekaart", "letter", "Laat duo's na elke ronde controleren."),
      card("Dicteekaart", "bomen", "Zet lastige woorden iets verder weg.")
    ],
    [
      card("Dicteekaart", "ik word verwacht", "Gebruik deze kaart voor werkwoordspelling."),
      card("Dicteekaart", "het gebeurt nu", "Laat leerlingen controlezinnen gebruiken."),
      card("Dicteekaart", "zij verandert snel", "Laat de schrijver de keuze uitleggen."),
      card("Dicteekaart", "bedoel jij dit?", "Bespreek de persoonsvorm na afloop."),
      card("Dicteekaart", "jij loopt mee", "Gebruik een rustig schrijfritme."),
      card("Dicteekaart", "de fout is verbeterd", "Laat duo's elkaar nakijken.")
    ]
  ),
  goedoffout: byGroup(
    [
      card("Staal-check", "maan / man", "Laat leerlingen kiezen welk woordbeeld klopt bij de lange klank."),
      card("Staal-check", "roos / ros", "Gebruik dit als zingwoord-controle."),
      card("Staal-check", "vis / fis", "Laat leerlingen luisteren naar de beginletter."),
      card("Staal-check", "boom / bom", "Bespreek samen waarom de klinker verandert."),
      card("Staal-check", "tak / taak", "Gebruik als korte versus lange klank."),
      card("Staal-check", "jas / jass", "Laat leerlingen benoemen wat er fout is.")
    ],
    [
      card("Staal-check", "bomen / boomen", "Laat leerlingen denken aan open of gesloten lettergreep."),
      card("Staal-check", "ijs / eijs", "Gebruik deze kaart bij ei of ij."),
      card("Staal-check", "goud / gout", "Gebruik deze kaart bij au of ou."),
      card("Staal-check", "huisje / huissje", "Bespreek de verkleinwoordaanpak."),
      card("Staal-check", "ramen / raamen", "Laat leerlingen de categorie noemen."),
      card("Staal-check", "meiden / meide", "Controleer samen het meervoud.")
    ],
    [
      card("Staal-check", "jij wordt / jij word", "Laat leerlingen het werkwoordschema gebruiken."),
      card("Staal-check", "het gebeurt / het gebeurd", "Vraag eerst naar de persoonsvorm."),
      card("Staal-check", "ik bedoel / ik bedoeld", "Laat leerlingen de tijd bepalen."),
      card("Staal-check", "verandert / veranderd", "Gebruik een controlezin."),
      card("Staal-check", "gebeurde / gebeurdde", "Bespreek zwakke verleden tijd."),
      card("Staal-check", "opgeruimd / opgeruimt", "Laat leerlingen een voltooid deelwoord herkennen.")
    ]
  ),
  lettergrepenspringen: byGroup(
    [
      card("Categorie", "hakwoord", "Spring naar deze kaart als je het woord kunt hakken."),
      card("Categorie", "zingwoord", "Gebruik deze kaart voor lange klank in een open klankstuk."),
      card("Categorie", "luchtwoord", "Laat leerlingen het woordbeeld onthouden."),
      card("Categorie", "plankwoord", "Gebruik bij woorden met medeklinker aan het eind."),
      card("Categorie", "rijmwoord", "Laat leerlingen rijmen en daarna springen."),
      card("Categorie", "klankgroep", "Gebruik als extra stap bij langere woorden.")
    ],
    [
      card("Categorie", "open lettergreep", "Spring hierheen als de klank lang blijft."),
      card("Categorie", "gesloten lettergreep", "Gebruik deze kaart bij korte klank en gesloten stukjes."),
      card("Categorie", "ei of ij", "Laat leerlingen de categorie hardop noemen."),
      card("Categorie", "au of ou", "Gebruik de klankkaart als geheugensteun."),
      card("Categorie", "verkleinwoord", "Spring hierheen als het woord kleiner wordt."),
      card("Categorie", "meervoud", "Laat leerlingen de woordverandering uitleggen.")
    ],
    [
      card("Schema", "persoonsvorm", "Spring eerst naar deze kaart als je de pv herkent."),
      card("Schema", "ik-vorm", "Gebruik deze stap uit het werkwoordschema."),
      card("Schema", "stam + t", "Laat leerlingen controleren of er -t nodig is."),
      card("Schema", "zwakke verleden tijd", "Gebruik bij woorden met d of t in het verleden."),
      card("Schema", "sterke verleden tijd", "Bespreek dat dit een andere vorm vraagt."),
      card("Schema", "voltooid deelwoord", "Laat leerlingen ge- en de eindletter checken.")
    ]
  ),
  regelhoeken: byGroup(
    [
      card("Categoriehoek", "hakwoord", "Laat leerlingen woorden met korte klank hier indelen."),
      card("Categoriehoek", "zingwoord", "Gebruik deze hoek voor woorden als maan of roos."),
      card("Categoriehoek", "luchtwoord", "Gebruik deze hoek voor woorden die je moet onthouden."),
      card("Categoriehoek", "twijfel en check", "Gebruik deze hoek voor klassikale controle.")
    ],
    [
      card("Categoriehoek", "klankgroepenkaart", "Gebruik deze hoek voor open of gesloten lettergrepen."),
      card("Categoriehoek", "ei- of ij-plaat", "Laat leerlingen de juiste categorie kiezen."),
      card("Categoriehoek", "au- of ou-plaat", "Gebruik voor woorden met dezelfde klank."),
      card("Categoriehoek", "verkleinwoord of meervoud", "Laat de leerling de woordverandering uitleggen.")
    ],
    [
      card("Schemahoek", "persoonsvorm zoeken", "Laat leerlingen eerst de persoonsvorm vinden."),
      card("Schemahoek", "ik-vorm bepalen", "Gebruik deze stap uit het werkwoordschema."),
      card("Schemahoek", "stam plus t", "Laat leerlingen controleren of er -t achter moet."),
      card("Schemahoek", "voltooid deelwoord", "Gebruik deze hoek voor d of t aan het eind.")
    ]
  ),
  foutenjachtduo: byGroup(
    [
      card("Foutkaart", "de roos is rots", "Laat het duo zoeken welke letter niet klopt."),
      card("Foutkaart", "ik hoor een fis", "Verbeter samen het woordbeeld."),
      card("Foutkaart", "de bom staat hier", "Bespreek welke klank mist of fout is."),
      card("Foutkaart", "wij leesen mee", "Laat leerlingen de fout hardop aanwijzen."),
      card("Foutkaart", "de jass hangt klaar", "Gebruik een wisbord voor de goede versie."),
      card("Foutkaart", "ik sie de maan", "Controleer samen na iedere ronde.")
    ],
    [
      card("Foutkaart", "raamen", "Laat leerlingen de juiste schrijfwijze noteren."),
      card("Foutkaart", "prijsen", "Koppel de fout aan de regel."),
      card("Foutkaart", "huizje", "Bespreek waarom het woord niet klopt."),
      card("Foutkaart", "fietsenn", "Laat duo's meteen verbeteren."),
      card("Foutkaart", "goudenn", "Laat de loper steeds maar 1 fout onthouden."),
      card("Foutkaart", "leter", "Controleer klassikaal na afloop.")
    ],
    [
      card("Foutkaart", "ik vindt het goed", "Laat leerlingen de fout verbeteren met een controlezin."),
      card("Foutkaart", "het gebeurd vandaag", "Vraag welke vorm in de zin past."),
      card("Foutkaart", "zij verand veranderd", "Laat duo's eerst de stam zoeken."),
      card("Foutkaart", "jij bedoeld dit", "Gebruik hardop redeneren."),
      card("Foutkaart", "ik wordt rustig", "Laat de schrijver de juiste vorm noteren."),
      card("Foutkaart", "hij loopt mee", "Bespreek aan het einde de moeilijkste fout.")
    ]
  ),
  levendezinnen: byGroup(
    [
      card("Zinsdeel", "ik", "Leg dit als eerste kaart op de lijn."),
      card("Zinsdeel", "spring", "Zoek de actie in de zin."),
      card("Zinsdeel", "op", "Gebruik als tussenwoord."),
      card("Zinsdeel", "de stip", "Laat leerlingen samen lezen."),
      card("Zinsdeel", "vandaag", "Gebruik voor uitbreiding."),
      card("Zinsdeel", ".", "Leg deze kaart als laatste.")
    ],
    [
      card("Zinsdeel", "de leerling", "Start van de zin."),
      card("Zinsdeel", "loopt", "Zoek de persoonsvorm."),
      card("Zinsdeel", "rustig", "Gebruik als uitbreiding."),
      card("Zinsdeel", "naar het vak", "Laat leerlingen de volgorde testen."),
      card("Zinsdeel", "na het signaal", "Voeg tijd of context toe."),
      card("Zinsdeel", ".", "Sluit de zin af.")
    ],
    [
      card("Zinsdeel", "de spreker", "Gebruik als onderwerp."),
      card("Zinsdeel", "onderbouwt", "Zoek de persoonsvorm."),
      card("Zinsdeel", "zijn mening", "Kern van de boodschap."),
      card("Zinsdeel", "met een voorbeeld", "Laat leerlingen uitleg toevoegen."),
      card("Zinsdeel", "voor de groep", "Gebruik als uitbreiding."),
      card("Zinsdeel", ".", "Leg deze kaart op het eind.")
    ]
  ),
  werkwoordlijn: byGroup(
    [
      card("Woordenlijn", "ik", "Gebruik als onderwerpkaart."),
      card("Woordenlijn", "loop", "Laat leerlingen horen dat dit de actie is."),
      card("Woordenlijn", "naar", "Gebruik als verbindend woord."),
      card("Woordenlijn", "de stip", "Maak de eenvoudige zin af."),
      card("Woordenlijn", "vandaag", "Gebruik als extra zinsdeel."),
      card("Woordenlijn", ".", "Leg deze kaart aan het eind.")
    ],
    [
      card("Schema 1", "onderwerp", "Leg deze kaart aan het begin van de lijn."),
      card("Schema 2", "persoonsvorm", "Laat leerlingen de persoonsvorm zoeken."),
      card("Schema 3", "ik-vorm", "Gebruik deze stap om de stam te vinden."),
      card("Schema 4", "stam", "Laat leerlingen de stam hardop noemen."),
      card("Schema 5", "stam + t?", "Controleer samen of er een t nodig is."),
      card("Schema 6", "hele zin", "Lees de complete zin terug.")
    ],
    [
      card("Schema 1", "persoonsvorm", "Laat leerlingen de pv in de zin aanwijzen."),
      card("Schema 2", "tegenwoordige tijd", "Bepaal eerst de tijd."),
      card("Schema 3", "ik-vorm", "Gebruik de ik-vorm als controlepunt."),
      card("Schema 4", "stam + t", "Laat leerlingen toepassen wanneer dat nodig is."),
      card("Schema 5", "voltooid deelwoord", "Gebruik bij ge-woorden en d of t."),
      card("Schema 6", "controlezin", "Lees de zin nog een keer hardop na.")
    ]
  ),
  spellingbingo: byGroup(
    [
      card("Bingo", "hakwoord", "Laat leerlingen een passend woord uit deze categorie zoeken."),
      card("Bingo", "zingwoord", "Gebruik woorden met een lange klank."),
      card("Bingo", "luchtwoord", "Gebruik voor woordbeelden die je onthoudt."),
      card("Bingo", "plankwoord", "Laat leerlingen een voorbeeldkaart vinden."),
      card("Bingo", "rijmwoord", "Koppel categorie aan auditieve oefening."),
      card("Bingo", "klankgroep", "Gebruik als verdiepingsvak.")
    ],
    [
      card("Bingo", "klankgroepen", "Laat leerlingen woorden met open en gesloten lettergrepen zoeken."),
      card("Bingo", "ei of ij", "Gebruik woorden die bij deze plaat horen."),
      card("Bingo", "au of ou", "Laat leerlingen de categorie benoemen."),
      card("Bingo", "verkleinwoord", "Gebruik voorbeelden uit de les van die week."),
      card("Bingo", "meervoud", "Laat de vormverandering uitleggen."),
      card("Bingo", "achtervoegsel", "Gebruik als extra categorie voor sterke spellers.")
    ],
    [
      card("Bingo", "persoonsvorm tt", "Laat leerlingen een passende zin of vorm zoeken."),
      card("Bingo", "stam plus t", "Gebruik de kaart alleen na het werkwoordschema."),
      card("Bingo", "zwakke verleden tijd", "Laat leerlingen d of t uitleggen."),
      card("Bingo", "voltooid deelwoord", "Gebruik bij ge-woorden en werkwoordsvormen."),
      card("Bingo", "controlezin", "Laat leerlingen hun keuze verantwoorden."),
      card("Bingo", "leenwoord of lastig woordbeeld", "Gebruik als plusvak.")
    ]
  ),
  springnaarantwoord: byGroup(
    [
      card("Rekenkaart", "erbij", "Gebruik deze kaart voor optellen of verder tellen."),
      card("Rekenkaart", "eraf", "Gebruik deze kaart voor aftrekken."),
      card("Rekenkaart", "verdubbelen", "Laat leerlingen de som hardop verdubbelen."),
      card("Rekenkaart", "halveren", "Gebruik deze kaart als tegenhanger van verdubbelen."),
      card("Rekenkaart", "meer", "Koppel dit aan vergelijken van uitkomsten."),
      card("Rekenkaart", "minder", "Laat leerlingen verschil benoemen.")
    ],
    [
      card("Strategie", "rijgen", "Spring hierheen als rijgen de handigste aanpak is."),
      card("Strategie", "splitsen", "Gebruik bij sommen die je in stukjes verdeelt."),
      card("Strategie", "getallenlijn", "Laat leerlingen denken in sprongen."),
      card("Strategie", "schatten", "Gebruik eerst een schatting voor controle."),
      card("Strategie", "controle", "Kies deze kaart als laatste stap."),
      card("Strategie", "antwoord", "Gebruik als uitkomstkaart.")
    ],
    [
      card("Model", "breuk", "Gebruik deze kaart als de opgave in breukentaal staat."),
      card("Model", "procent", "Spring hierheen als procenttaal past."),
      card("Model", "decimaal getal", "Gebruik bij kommagetallen."),
      card("Model", "verhoudingstabel", "Laat leerlingen denken in verhoudingen."),
      card("Model", "eerst schatten", "Gebruik als controle voor redelijkheid."),
      card("Model", "uitleg", "Laat leerlingen hun aanpak hardop verwoorden.")
    ]
  ),
  sommenflitsestafette: byGroup(
    [
      card("Flitskaart", "8 + 7", "Gebruik deze kaart voor automatiseren tot 20."),
      card("Flitskaart", "13 - 5", "Laat leerlingen de uitkomst meteen noteren."),
      card("Flitskaart", "dubbel 6", "Gebruik bij basisfeiten."),
      card("Flitskaart", "10 - 3", "Laat leerlingen hardop denken."),
      card("Flitskaart", "5 + 9", "Koppel aan handig rekenen via 10."),
      card("Flitskaart", "7 + 8", "Gebruik als snelle slotkaart.")
    ],
    [
      card("Flitskaart", "6 x 7", "Gebruik voor tafelautomatisering."),
      card("Flitskaart", "56 : 8", "Laat leerlingen de inverse relatie zien."),
      card("Flitskaart", "9 x 8", "Werk met tafel- en deelsom door elkaar."),
      card("Flitskaart", "42 : 6", "Gebruik als controlekaart in dezelfde familie."),
      card("Flitskaart", "7 x 9", "Laat leerlingen hun strategie benoemen."),
      card("Flitskaart", "63 : 9", "Sluit af met een deelsom.")
    ],
    [
      card("Flitskaart", "1/2 = 50%", "Gebruik deze kaart voor notaties koppelen."),
      card("Flitskaart", "0,25 = 25%", "Laat leerlingen breuk, procent en decimaal verbinden."),
      card("Flitskaart", "3/4 van 20", "Gebruik als toepassingssom."),
      card("Flitskaart", "15% van 200", "Laat leerlingen eerst schatten."),
      card("Flitskaart", "0,5 = 1/2", "Gebruik als controlekaart."),
      card("Flitskaart", "2/5 = 40%", "Gebruik als pluskaart.")
    ]
  ),
  getallencircuit: byGroup(
    [
      card("Station", "splitsen", "Laat leerlingen getallen op verschillende manieren splitsen."),
      card("Station", "getallenlijn", "Gebruik sprongen vooruit of terug."),
      card("Station", "meer of minder", "Laat leerlingen vergelijken."),
      card("Station", "geld", "Gebruik concrete contexten met muntjes of prijzen."),
      card("Station", "klok", "Koppel tijd aan rekentaal."),
      card("Station", "meten", "Gebruik als praktisch rekenstation.")
    ],
    [
      card("Station", "tafels", "Gebruik voor herhalen en automatiseren."),
      card("Station", "delen", "Koppel delen aan tafels."),
      card("Station", "getallenlijn", "Gebruik als model bij grotere sommen."),
      card("Station", "schema", "Laat leerlingen de aanpak noteren."),
      card("Station", "rekentaal", "Laat begrippen als verschil of totaal terugkomen."),
      card("Station", "controle", "Gebruik voor schatten en terugkijken.")
    ],
    [
      card("Station", "verhouding", "Gebruik een verhoudingstabel of redenering."),
      card("Station", "procent", "Laat leerlingen percententaal koppelen aan context."),
      card("Station", "decimaal", "Gebruik kommagetallen en geldcontext."),
      card("Station", "breuk", "Laat leerlingen representaties vergelijken."),
      card("Station", "grafiek of tabel", "Gebruik als modelstation."),
      card("Station", "verklaren", "Laat de aanpak mondeling onderbouwen.")
    ]
  ),
  rekenhoekenspel: byGroup(
    [
      card("Hoek A", "antwoord", "Gebruik deze hoek voor het gekozen antwoord."),
      card("Hoek B", "getallenlijn", "Laat leerlingen kiezen als dit model helpt."),
      card("Hoek C", "materiaal of tekening", "Gebruik als concrete aanpak."),
      card("Hoek D", "rekentaal uitleg", "Bespreek hier hoe je dacht.")
    ],
    [
      card("Hoek A", "rijgen", "Kies deze hoek bij een rijgstrategie."),
      card("Hoek B", "splitsen", "Gebruik bij opdelen in handige stukjes."),
      card("Hoek C", "schema of model", "Laat leerlingen een model kiezen."),
      card("Hoek D", "controleren", "Gebruik voor schatten en terugkijken.")
    ],
    [
      card("Hoek A", "breuk", "Gebruik als de opgave in breukentaal staat."),
      card("Hoek B", "procent", "Gebruik als percententaal past."),
      card("Hoek C", "decimaal getal", "Laat leerlingen naar kommagetallen kijken."),
      card("Hoek D", "verhouding of model", "Laat leerlingen hun keuze onderbouwen.")
    ]
  ),
  tafelslooproute: byGroup(
    [
      card("Routekaart 1", "8 + 7", "Gebruik deze kaart voor vlot automatiseren."),
      card("Routekaart 2", "13 - 5", "Laat leerlingen een handige sprong kiezen."),
      card("Routekaart 3", "6 + 9", "Koppel aan bijna 10."),
      card("Routekaart 4", "15 - 7", "Laat leerlingen op de lijn denken."),
      card("Routekaart 5", "dubbel 8", "Gebruik een bekende basisstrategie."),
      card("Routekaart 6", "18 - 9", "Laat een maatje controleren.")
    ],
    [
      card("Routekaart 1", "6 x 4", "Gebruik voor tafel- en deelrelaties."),
      card("Routekaart 2", "42 : 6", "Laat leerlingen de inverse relatie benoemen."),
      card("Routekaart 3", "9 x 8", "Werk met tempo en controle."),
      card("Routekaart 4", "72 : 9", "Gebruik als controlekaart in dezelfde tafel."),
      card("Routekaart 5", "7 x 6", "Laat de strategie hardop verwoorden."),
      card("Routekaart 6", "56 : 8", "Sluit af met een deelsom.")
    ],
    [
      card("Routekaart 1", "25% van 200", "Laat leerlingen eerst schatten."),
      card("Routekaart 2", "3/4 van 20", "Gebruik een model of verhouding."),
      card("Routekaart 3", "0,75 + 0,5", "Koppel decimale notatie aan breukentaal."),
      card("Routekaart 4", "2/3 van 18", "Laat leerlingen de denkstappen noteren."),
      card("Routekaart 5", "1,25 meter + 75 cm", "Gebruik rekentaal en maat samen."),
      card("Routekaart 6", "40% van 150", "Sluit af met een controlekaart.")
    ]
  ),
  rekenschattocht: byGroup(
    [
      card("Hint 1", "Start bij 10 en ga 5 vooruit.", "Laat leerlingen tellen met sprongen."),
      card("Hint 2", "Zoek daarna het getal dat 2 minder is dan 9.", "Gebruik deze kaart als volgende aanwijzing."),
      card("Hint 3", "Ga naar de kaart met uitkomst 6 + 2.", "Laat leerlingen de route volgen."),
      card("Hint 4", "Loop naar het grootste getal van 4, 7 en 5.", "Gebruik vergelijken in beweging."),
      card("Hint 5", "Eindig bij het getal dat tussen 8 en 10 ligt.", "Laat maatjes samen controleren."),
      card("Hint 6", "Schat gevonden: 9", "Gebruik als afsluitkaart.")
    ],
    [
      card("Hint 1", "Zoek de uitkomst van 7 x 8.", "Leerlingen lopen pas door bij het juiste antwoord."),
      card("Hint 2", "Ga nu naar 63 : 9.", "Gebruik tafels en delen door elkaar."),
      card("Hint 3", "Vind de kaart met 39 + 19.", "Laat een leerling de strategie vertellen."),
      card("Hint 4", "Kies daarna 48 - 17.", "Gebruik als volgende halte."),
      card("Hint 5", "Loop naar het antwoord van 6 x 7.", "Laat tweetallen controleren."),
      card("Hint 6", "Schat gevonden: 42", "Gebruik als finishkaart.")
    ],
    [
      card("Hint 1", "Bereken 25% van 200.", "Laat leerlingen eerst de strategie kiezen."),
      card("Hint 2", "Zoek daarna 3/4 van 20.", "Gebruik breuken en procenten gemixt."),
      card("Hint 3", "Ga naar 0,75 + 0,5.", "Laat kommagetallen hardop uitleggen."),
      card("Hint 4", "Vind 15% van 200.", "Gebruik verhoudingstabel of hoofdrekenen."),
      card("Hint 5", "Loop naar 2/3 van 18.", "Laat de route pas verder gaan na uitleg."),
      card("Hint 6", "Schat gevonden: 12", "Gebruik als eindkaart.")
    ]
  ),
  rekenmissie: byGroup(
    [
      card("Missie 1", "Pak 3 blokken en tel er 2 bij.", "Start met een concrete handeling."),
      card("Missie 2", "Spring naar het juiste antwoord.", "Gebruik vloergetallen of vakken."),
      card("Missie 3", "Leg het antwoord op je missieblad.", "Laat leerlingen registreren."),
      card("Missie 4", "Los nu 6 + 1 op.", "Gebruik een nieuwe ronde."),
      card("Missie 5", "Vergelijk: wat is groter?", "Koppel tellen aan vergelijken."),
      card("Missie 6", "Eindmissie: maak 10.", "Gebruik als slotdoel.")
    ],
    [
      card("Missie 1", "Los 24 + 18 op.", "Laat leerlingen hun strategie kort noemen."),
      card("Missie 2", "Controleer met splitsen of rijgen.", "Gebruik dit als denkopdracht."),
      card("Missie 3", "Werk nu 42 : 6 uit.", "Laat tweetallen samen beslissen."),
      card("Missie 4", "Pak daarna 9 x 7.", "Gebruik route of station."),
      card("Missie 5", "Noteer welke strategie het snelst was.", "Koppel rekenen aan reflectie."),
      card("Missie 6", "Eindmissie: los 63 - 27 op.", "Gebruik als afsluitende opdracht.")
    ],
    [
      card("Missie 1", "Bereken 35% van 200.", "Laat leerlingen eerst een plan kiezen."),
      card("Missie 2", "Werk 3/5 van 25 uit.", "Gebruik verhouding of breukenschema."),
      card("Missie 3", "Los 1,2 + 0,85 op.", "Koppel aan kommagetallen."),
      card("Missie 4", "Controleer met schatten.", "Laat leerlingen hun uitkomst beoordelen."),
      card("Missie 5", "Noteer in 1 zin welke stap het belangrijkst was.", "Gebruik dit voor reflectie."),
      card("Missie 6", "Eindmissie: verklaar je antwoord aan een maatje.", "Laat de missie mondeling afronden.")
    ]
  ),
  levendegetallenlijn: byGroup(
    [
      card("Ankerpunt", "0", "Leg deze kaart op het begin van de lijn."),
      card("Ankerpunt", "5", "Gebruik als middenanker op een lijn tot 10."),
      card("Ankerpunt", "10", "Laat leerlingen vanaf hier verder tellen."),
      card("Sprong", "+2", "Gebruik om sprongen zichtbaar te maken."),
      card("Sprong", "-1", "Laat leerlingen terugstappen."),
      card("Rekentaal", "meer of minder", "Gebruik deze kaart voor mondelinge uitleg.")
    ],
    [
      card("Ankerpunt", "0", "Startpunt van de lijn."),
      card("Ankerpunt", "50", "Gebruik als middenanker."),
      card("Ankerpunt", "100", "Laat leerlingen van hieruit schatten."),
      card("Sprong", "+25", "Gebruik kwartstappen op de lijn."),
      card("Model", "afronden", "Laat leerlingen kiezen naar welk ankerpunt ze afronden."),
      card("Rekentaal", "verschil", "Gebruik voor mondelinge uitleg.")
    ],
    [
      card("Ankerpunt", "0", "Leg op het begin van de lijn."),
      card("Ankerpunt", "0,5 = 1/2 = 50%", "Laat leerlingen notaties koppelen."),
      card("Ankerpunt", "1", "Gebruik als heel getal."),
      card("Vergelijk", "0,25 = 25%", "Koppel decimaal en procent."),
      card("Vergelijk", "0,75 = 3/4 = 75%", "Gebruik als driekwart-anker."),
      card("Rekentaal", "dichterbij of verder", "Laat leerlingen hun positie verklaren.")
    ]
  )
  };

  return getCardPackOverrides.cache;
}

function getStarterCards(subjectId, groupId, visual, taskKey, title) {
  const families = {
    taal_estafette: byGroup(
      ["m", "a", "a", "n", "v", "i", "s", "k"],
      ["werkwoord", "boek", "rennen", "vrolijk", "zingen", "tafel", "springen", "groot"],
      ["onderwerp", "persoonsvorm", "lijdend voorwerp", "bijzin", "signaalwoord", "argument", "voorbeeld", "slot"]
    ),
    taal_keuze: byGroup(
      ["maan", "baan", "vis", "mis", "tak", "dak"],
      ["blij", "vrolijk", "rennen", "sprinten", "groot", "enorm"],
      ["boos", "geirriteerd", "woedend", "stelling", "argument", "weerlegging"]
    ),
    taal_praat: byGroup(
      ["Vertel wat je ziet.", "Noem een rijmwoord.", "Maak een zin.", "Wat gebeurde eerst?", "Noem een dier.", "Vertel verder."],
      ["Geef een voorbeeld.", "Noem een kernwoord.", "Leg het uit.", "Gebruik een signaalwoord.", "Noem een synoniem.", "Vat samen."],
      ["Formuleer een standpunt.", "Geef bewijs.", "Noem een tegenargument.", "Leg een begrip uit.", "Vat samen.", "Geef een conclusie."]
    ),
    taal_themakaarten: byGroup(
      ["boom", "jas", "school", "boek", "vis", "maan"],
      ["themawoord", "omschrijving", "voorbeeld", "tegenvoorbeeld", "uitleg", "kernzin"],
      ["oorzaak", "gevolg", "bewijs", "stelling", "voorbeeld", "samenvatting"]
    ),
    taal_dictaat: byGroup(
      ["ik zie een vis", "de maan schijnt", "de kat rent", "wij lezen samen", "de jas hangt hier", "ik hoor een klank"],
      ["zelfstandig naamwoord", "werkwoord", "bijvoeglijk naamwoord", "onderwerp", "persoonsvorm", "kernzin"],
      ["ten eerste", "bijvoorbeeld", "daardoor", "aan de andere kant", "samengevat", "conclusie"]
    ),
    taal_hoeken: byGroup(
      ["m", "b", "s", "p", "rijm", "niet-rijm"],
      ["synoniem", "tegenstelling", "voorbeeld", "omschrijving", "waarom?", "wat past?"],
      ["argument", "tegenargument", "oorzaak", "gevolg", "bewijs", "slot"]
    ),
    taal_lijn: byGroup(
      ["ik", "spring", "op", "de", "lijn", "."],
      ["onderwerp", "persoonsvorm", "rest", "bijwoord", "slot", "."],
      ["stelling", "argument", "voorbeeld", "tegenargument", "weerlegging", "slot"]
    ),
    taal_route: byGroup(
      ["eerst", "dan", "wie?", "waar?", "wat?", "tenslotte"],
      ["eerst", "vervolgens", "ondertussen", "daarna", "uiteindelijk", "slot"],
      ["oorzaak", "gevolg", "bewijs", "tegenargument", "weerlegging", "conclusie"]
    ),
    spelling_woorden: byGroup(
      ["maan", "roos", "vis", "tak", "boom", "jas"],
      ["ramen", "letter", "prijs", "bomen", "gouden", "woorden"],
      ["word", "wordt", "gebeurd", "gebeurt", "veranderd", "verandert"]
    ),
    spelling_goedfout: byGroup(
      ["maan / man", "roos / ros", "vis / fis", "tak / tek", "boom / bom", "pen / pan"],
      ["ramen / raamen", "prijzen / prijsen", "fietsen / fietsenn", "huisje / huizje", "gouden / goudenn", "letter / leter"],
      ["word / wordt", "bedoeld / bedoelt", "verandert / veranderd", "gebeurt / gebeurd", "ik vind / ik vindt", "jij loopt / jij loopt"]
    ),
    spelling_regels: byGroup(
      ["aa", "oo", "ie", "oe", "eu", "ui"],
      ["open lettergreep", "gesloten lettergreep", "verkleinwoord", "ei of ij", "au of ou", "meervoud"],
      ["pv", "vd", "infinitief", "stam", "d of t", "controlezin"]
    ),
    spelling_dictaat: byGroup(
      ["de maan is rond", "ik zie een vis", "de roos is rood", "de pen ligt hier", "de jas hangt klaar", "wij klappen mee"],
      ["open lettergreep", "gesloten lettergreep", "verkleinwoord", "ei of ij", "au of ou", "tussen-n"],
      ["ik word verwacht", "het gebeurt nu", "zij verandert snel", "heb jij bedoeld?", "jij loopt mee", "de fout is verbeterd"]
    ),
    spelling_lijn: byGroup(
      ["m", "aa", "n", "s", ".", "klaar"],
      ["stam", "uitgang", "klank", "regel", "controle", "slot"],
      ["onderwerp", "tijd", "werkwoord", "controle", "regel", "slot"]
    ),
    rekenen_antwoorden: byGroup(
      ["4 + 3", "8 - 2", "5 + 4", "10 - 3", "6 + 2", "7 - 1"],
      ["6 x 4", "42 : 6", "39 + 19", "48 - 17", "9 x 8", "72 : 9"],
      ["1/2", "25%", "0,75", "3/4 van 20", "15% van 200", "2 : 3"]
    ),
    rekenen_strategie: byGroup(
      ["meer", "minder", "dubbel", "helft", "sprong", "antwoord"],
      ["rijgen", "splitsen", "compenseren", "kolomsgewijs", "tafels", "delen"],
      ["verhoudingstabel", "breuk", "procent", "decimaal", "schatten", "controle"]
    ),
    rekenen_hoeken: byGroup(
      ["6", "7", "8", "9", "meer", "minder"],
      ["rijgen", "splitsen", "tabel", "schatten", "antwoord", "strategie"],
      ["breuk", "procent", "decimaal", "verhouding", "antwoord", "aanpak"]
    ),
    rekenen_lijn: byGroup(
      ["0", "2", "4", "6", "8", "10"],
      ["0", "25", "50", "75", "100", "125"],
      ["0", "0,25", "0,5", "0,75", "1", "1,25"]
    ),
    rekenen_route: byGroup(
      ["1 stap", "2 stappen", "5 erbij", "3 terug", "meer", "minder"],
      ["tafel", "deling", "sprong", "schatting", "controle", "antwoord"],
      ["gegeven", "model", "berekening", "controle", "antwoord", "verklaring"]
    )
  };

  const family = getCardFamily(subjectId, taskKey, visual);
  const overrideItems = getCardPackOverrides()[taskKey];
  const rawItems =
    readGroupValue(overrideItems, groupId) ??
    readGroupValue(families[family] ?? families[`${subjectId}_${visual}`] ?? families.rekenen_antwoorden, groupId);

  const normalizedItems = rawItems.map((item, index) =>
    normalizeCardItem(item, `${title} ${index + 1}`, buildCardHint(subjectId, groupId, family, taskKey, index))
  );

  return expandCardSet(normalizedItems, subjectId, groupId, family, taskKey, title);
}

function getCardFamily(subjectId, taskKey, visual) {
  const key = normalize(taskKey);

  if (subjectId === "taal") {
    if (key.includes("letterestafette")) return "taal_estafette";
    if (key.includes("rijmren")) return "taal_keuze";
    if (key.includes("vertelbal") || key.includes("praatcarrousel") || key.includes("spreekspoor")) return "taal_praat";
    if (key.includes("themawoord")) return "taal_themakaarten";
    if (key.includes("prentenloopdictee")) return "taal_dictaat";
    if (key.includes("luisterhoeken")) return "taal_hoeken";
    if (key.includes("levendezinnen")) return "taal_lijn";
    if (key.includes("verhaalpad") || key.includes("argumentencircuit") || key.includes("kernwoordstations")) return "taal_route";
    return visual === "dictation" ? "taal_dictaat" : "taal_praat";
  }

  if (subjectId === "spelling") {
    if (key.includes("goedoffout")) return "spelling_goedfout";
    if (key.includes("regelhoeken")) return "spelling_regels";
    if (key.includes("woordpakketloopdictee") || key.includes("foutenjachtduo")) return "spelling_dictaat";
    if (key.includes("lettergrepenspringen")) return "spelling_regels";
    if (key.includes("werkwoordlijn")) return "spelling_lijn";
    if (key.includes("spellingbingo")) return "spelling_woorden";
    return "spelling_woorden";
  }

  if (subjectId === "rekenen") {
    if (key.includes("rekenhoekenspel")) return "rekenen_hoeken";
    if (key.includes("levendegetallenlijn")) return "rekenen_lijn";
    if (key.includes("tafelslooproute") || key.includes("rekenschattocht") || key.includes("rekenmissie")) return "rekenen_route";
    if (key.includes("getallencircuit")) return "rekenen_strategie";
    return visual === "corners" ? "rekenen_hoeken" : "rekenen_antwoorden";
  }

  return `${subjectId}_${visual}`;
}

function normalizeCardItem(item, defaultLabel, defaultHint) {
  if (typeof item === "string") {
    return {
      label: defaultLabel,
      text: item,
      hint: defaultHint
    };
  }

  return {
    label: item.label || defaultLabel,
    text: item.text || "",
    hint: item.hint || defaultHint
  };
}

function expandCardSet(cards, subjectId, groupId, family, taskKey, title) {
  const extras = getExpansionCards(subjectId, groupId, family, taskKey, title).map((item, index) =>
    normalizeCardItem(item, `${title} extra ${index + 1}`, item.hint || "Gebruik deze kaart als extra oefenkaart.")
  );
  const methodCards = getMethodWorkCards(subjectId, groupId, family, taskKey, title).map((item, index) =>
    normalizeCardItem(item, `${title} methode ${index + 1}`, buildMethodWorkHint(subjectId, family, taskKey, index))
  );
  const seenTexts = new Set();
  const merged = [];

  [...cards, ...extras, ...methodCards].forEach((cardItem) => {
    const fingerprint = normalize(`${cardItem.label} ${cardItem.text}`);

    if (!seenTexts.has(fingerprint)) {
      seenTexts.add(fingerprint);
      merged.push(cardItem);
    }
  });

  return fillCardsToClassSize(merged);
}

function getExpansionCards(subjectId, groupId, family, taskKey, title) {
  if (subjectId === "spelling") {
    if (groupId === GROUP_34) {
      return [
        card("Categorie", "hakwoord", "Laat leerlingen de categorie hardop noemen."),
        card("Categorie", "zingwoord", "Gebruik als extra controlekaart."),
        card("Categorie", "luchtwoord", "Gebruik voor woorden die je onthoudt."),
        card("Controle", "klank hakken", "Laat leerlingen eerst de klank verdelen."),
        card("Controle", "woordbeeld check", "Lees het woord na na het kiezen."),
        card("Uitleg", "waarom past dit?", "Laat leerlingen hun keuze uitleggen.")
      ];
    }

    if (groupId === GROUP_56) {
      return [
        card("Methodekaart", "klankgroepenkaart", "Gebruik deze kaart als geheugensteun."),
        card("Methodekaart", "ei of ij", "Laat leerlingen de categorie erbij zeggen."),
        card("Methodekaart", "au of ou", "Gebruik voor dezelfde klank, ander woordbeeld."),
        card("Methodekaart", "verkleinwoord", "Gebruik als extra categorie."),
        card("Methodekaart", "meervoud", "Laat de verandering in het woord uitleggen."),
        card("Controle", "welke regel hoort erbij?", "Laat leerlingen de regel verwoorden.")
      ];
    }

    return [
      card("Werkwoordschema", "persoonsvorm", "Laat leerlingen deze stap eerst nemen."),
      card("Werkwoordschema", "ik-vorm", "Gebruik als vaste stap uit het schema."),
      card("Werkwoordschema", "stam", "Laat leerlingen de stam bepalen."),
      card("Werkwoordschema", "stam + t", "Controleer of er een -t nodig is."),
      card("Werkwoordschema", "voltooid deelwoord", "Gebruik voor d of t aan het eind."),
      card("Controle", "controlezin", "Laat leerlingen de zin hardop narekenen.")
    ];
  }

  if (subjectId === "rekenen") {
    if (groupId === GROUP_34) {
      return [
        card("Rekenhulp", "getallenlijn", "Gebruik als modelkaart bij het antwoord."),
        card("Rekenhulp", "erbij", "Laat leerlingen de rekentaal gebruiken."),
        card("Rekenhulp", "eraf", "Gebruik bij terugtellen of aftrekken."),
        card("Rekenhulp", "verdubbelen", "Gebruik als snelle strategiekaart."),
        card("Rekenhulp", "halveren", "Gebruik als tegenhanger van verdubbelen."),
        card("Controle", "hoe weet je dat?", "Laat leerlingen hun antwoord onderbouwen.")
      ];
    }

    if (groupId === GROUP_56) {
      return [
        card("Strategie", "rijgen", "Gebruik als vaste aanpakkaart."),
        card("Strategie", "splitsen", "Laat leerlingen de som in stukken denken."),
        card("Strategie", "tafels", "Gebruik voor automatiseren."),
        card("Strategie", "delen", "Koppel aan de bijbehorende tafelsom."),
        card("Model", "getallenlijn", "Gebruik deze kaart als modelsteun."),
        card("Controle", "schatten", "Laat leerlingen hun uitkomst op redelijkheid checken.")
      ];
    }

    return [
      card("Model", "breuk", "Gebruik als de opgave in breukentaal staat."),
      card("Model", "procent", "Gebruik deze kaart bij percententaal."),
      card("Model", "decimaal getal", "Koppel aan kommagetallen."),
      card("Model", "verhoudingstabel", "Gebruik deze kaart als oplossingsmodel."),
      card("Controle", "schatten", "Laat leerlingen eerst een schatting maken."),
      card("Uitleg", "verklaar je aanpak", "Laat leerlingen hardop redeneren.")
    ];
  }

  return [
    card("Extra", "leg uit", "Gebruik deze kaart om een antwoord mondeling uit te leggen."),
    card("Extra", "controleer", "Laat leerlingen samen controleren."),
    card("Extra", "wissel", "Gebruik deze kaart voor een nieuwe ronde."),
    card("Extra", "voorbeeld", "Laat leerlingen een nieuw voorbeeld bedenken.")
  ];
}

function getMethodWorkCards(subjectId, groupId) {
  if (subjectId === "spelling" && groupId === GROUP_34) {
    return [
      card("Staal 2", "Welk categoriekaartje past bij: kat?", ""),
      card("Staal 2", "Welk categoriekaartje past bij: vis?", ""),
      card("Staal 2", "Welk categoriekaartje past bij: pen?", ""),
      card("Staal 2", "Welk categoriekaartje past bij: maan?", ""),
      card("Staal 2", "Welk categoriekaartje past bij: boom?", ""),
      card("Staal 2", "Welk categoriekaartje past bij: roos?", ""),
      card("Woordkaart", "Hak het woord: bed", ""),
      card("Woordkaart", "Hak het woord: tak", ""),
      card("Woordkaart", "Hak het woord: bus", ""),
      card("Woordkaart", "Zing het woord: beer", ""),
      card("Woordkaart", "Zing het woord: teen", ""),
      card("Woordkaart", "Zing het woord: doos", ""),
      card("Woordkaart", "Plankwoord: bank", ""),
      card("Woordkaart", "Plankwoord: kast", ""),
      card("Woordkaart", "Plankwoord: melk", ""),
      card("Woordbeeld", "Lees goed en onthoud: huis", ""),
      card("Woordbeeld", "Lees goed en onthoud: school", ""),
      card("Woordbeeld", "Lees goed en onthoud: jas", ""),
      card("Controle", "Zeg het woord, hak het woord en schrijf het op.", ""),
      card("Controle", "Noem de categorie voordat je schrijft.", "")
    ];
  }

  if (subjectId === "spelling" && groupId === GROUP_56) {
    return [
      card("Staal 2", "Klankgroepenwoord: lopen", ""),
      card("Staal 2", "Klankgroepenwoord: tafel", ""),
      card("Staal 2", "Klankgroepenwoord: bakker", ""),
      card("Staal 2", "Klankgroepenwoord: regen", ""),
      card("Staal 2", "Klankgroepenwoord: vogel", ""),
      card("Staal 2", "Ei of ij: trein", ""),
      card("Staal 2", "Ei of ij: geit", ""),
      card("Staal 2", "Ei of ij: ijs", ""),
      card("Staal 2", "Au of ou: touw", ""),
      card("Staal 2", "Au of ou: pauw", ""),
      card("Staal 2", "Au of ou: goud", ""),
      card("Staal 2", "Maak het verkleinwoord van: boom", ""),
      card("Staal 2", "Maak het verkleinwoord van: kip", ""),
      card("Staal 2", "Maak het verkleinwoord van: ring", ""),
      card("Staal 2", "Maak het meervoud van: stoel", ""),
      card("Staal 2", "Maak het meervoud van: sleutel", ""),
      card("Staal 2", "Maak het meervoud van: boek", ""),
      card("Regelkaart", "Noem eerst de regel en schrijf daarna pas.", ""),
      card("Regelkaart", "Gebruik de klankgroepenkaart als steun.", ""),
      card("Controle", "Vertel waarom dit woord bij deze categorie hoort.", "")
    ];
  }

  if (subjectId === "spelling") {
    return [
      card("Staal 2", "Zoek de persoonsvorm in: Jij loopt naar buiten.", ""),
      card("Staal 2", "Zoek de persoonsvorm in: Morgen verandert het plan.", ""),
      card("Staal 2", "Bepaal de ik-vorm van: antwoorden", ""),
      card("Staal 2", "Bepaal de ik-vorm van: verhuizen", ""),
      card("Staal 2", "Bepaal de stam van: bedoelen", ""),
      card("Staal 2", "Bepaal de stam van: gebeuren", ""),
      card("Staal 2", "Kies: hij word / hij wordt", ""),
      card("Staal 2", "Kies: jij bedoelt / bedoeld", ""),
      card("Staal 2", "Kies: het gebeurt / gebeurd", ""),
      card("Staal 2", "Zwakke verleden tijd van: werken", ""),
      card("Staal 2", "Zwakke verleden tijd van: fietsen", ""),
      card("Staal 2", "Zwakke verleden tijd van: verhuizen", ""),
      card("Staal 2", "Voltooid deelwoord van: spelen", ""),
      card("Staal 2", "Voltooid deelwoord van: antwoorden", ""),
      card("Staal 2", "Voltooid deelwoord van: verhuizen", ""),
      card("Werkwoordschema", "Volg alle stappen van het werkwoordschema hardop.", ""),
      card("Controle", "Gebruik een controlezin bij: jij wordt", ""),
      card("Controle", "Gebruik een controlezin bij: hij bedoelt", ""),
      card("Woordbeeld", "Lastig woordbeeld: chauffeur", ""),
      card("Woordbeeld", "Lastig woordbeeld: interessant", "")
    ];
  }

  if (subjectId === "rekenen" && groupId === GROUP_34) {
    return [
      card("Getal & Ruimte", "8 + 7", ""),
      card("Getal & Ruimte", "13 - 5", ""),
      card("Getal & Ruimte", "5 + 9", ""),
      card("Getal & Ruimte", "14 - 6", ""),
      card("Getal & Ruimte", "7 + 8", ""),
      card("Getal & Ruimte", "Verdubbel 4", ""),
      card("Getal & Ruimte", "Verdubbel 7", ""),
      card("Getal & Ruimte", "Halveer 10", ""),
      card("Getal & Ruimte", "Halveer 14", ""),
      card("Getal & Ruimte", "Splits 8 op 2 manieren", ""),
      card("Getal & Ruimte", "Splits 10 op 2 manieren", ""),
      card("Getal & Ruimte", "Splits 12 op 2 manieren", ""),
      card("Modelkaart", "Zet 8 op de getallenlijn van 0 tot 10", ""),
      card("Modelkaart", "Maak 3 sprongen vooruit vanaf 6", ""),
      card("Modelkaart", "Welk getal ligt tussen 14 en 16?", ""),
      card("Rekentaal", "Wat is meer: 17 of 14?", ""),
      card("Rekentaal", "Wat is minder: 9 of 12?", ""),
      card("Rekentaal", "Maak 1 euro met munten", ""),
      card("Rekentaal", "Hoe laat is het 1 uur later dan 8 uur?", ""),
      card("Controle", "Noem je strategie voordat je antwoord geeft.", "")
    ];
  }

  if (subjectId === "rekenen" && groupId === GROUP_56) {
    return [
      card("Getal & Ruimte", "6 x 7", ""),
      card("Getal & Ruimte", "42 : 6", ""),
      card("Getal & Ruimte", "9 x 8", ""),
      card("Getal & Ruimte", "72 : 9", ""),
      card("Getal & Ruimte", "7 x 6", ""),
      card("Getal & Ruimte", "56 : 8", ""),
      card("Getal & Ruimte", "24 + 18", ""),
      card("Getal & Ruimte", "63 - 27", ""),
      card("Getal & Ruimte", "39 + 19", ""),
      card("Getal & Ruimte", "48 - 17", ""),
      card("Strategie", "Kies: rijgen", ""),
      card("Strategie", "Kies: splitsen", ""),
      card("Strategie", "Kies: getallenlijn", ""),
      card("Strategie", "Kies: schatten", ""),
      card("Strategie", "Kies: controleren", ""),
      card("Modelkaart", "Zet 75 op de getallenlijn", ""),
      card("Modelkaart", "Welke sprong past van 50 naar 75?", ""),
      card("Rekentaal", "Noem verschil, totaal of product bij de som.", ""),
      card("Rekentaal", "Leg uit waarom jouw strategie handig is.", ""),
      card("Controle", "Schat eerst en reken daarna precies.", "")
    ];
  }

  if (subjectId === "rekenen") {
    return [
      card("Getal & Ruimte", "1/2 = 50%", ""),
      card("Getal & Ruimte", "0,25 = 25%", ""),
      card("Getal & Ruimte", "3/4 van 20", ""),
      card("Getal & Ruimte", "15% van 200", ""),
      card("Getal & Ruimte", "25% van 200", ""),
      card("Getal & Ruimte", "2/3 van 18", ""),
      card("Getal & Ruimte", "3/5 van 25", ""),
      card("Getal & Ruimte", "0,75 + 0,5", ""),
      card("Getal & Ruimte", "1,25 meter + 75 cm", ""),
      card("Getal & Ruimte", "35% van 200", ""),
      card("Modelkaart", "Gebruik een verhoudingstabel", ""),
      card("Modelkaart", "Gebruik een breukmodel", ""),
      card("Modelkaart", "Gebruik decimale notatie", ""),
      card("Modelkaart", "Gebruik percententaal", ""),
      card("Strategie", "Schat eerst de uitkomst", ""),
      card("Strategie", "Controleer met een tweede aanpak", ""),
      card("Strategie", "Leg uit welke notaties bij elkaar horen", ""),
      card("Rekentaal", "Wat betekent verhouding in deze opgave?", ""),
      card("Rekentaal", "Vergelijk breuk, procent en decimaal", ""),
      card("Controle", "Onderbouw waarom jouw antwoord redelijk is.", "")
    ];
  }

  return [];
}

function buildMethodWorkHint(subjectId, family, taskKey, index) {
  if (family === "spelling_goedfout") {
    return "Laat leerlingen goed of fout kiezen, verbeteren en de regel of categorie erbij noemen.";
  }

  if (family === "spelling_dictaat") {
    return "Hang deze kaart op voor de loper of gebruik hem als woord- of zinkaart bij het dictee.";
  }

  if (family === "spelling_lijn") {
    return "Leg deze kaart op de lijn en laat leerlingen de stappen of woorddelen in de goede volgorde leggen.";
  }

  if (family === "spelling_woorden" || family === "spelling_regels") {
    return "Gebruik deze methodekaart als leerlingkaart en laat leerlingen steeds de categorie of regel verwoorden.";
  }

  if (family === "rekenen_route") {
    return "Gebruik deze kaart als route-, missie- of hintkaart en laat leerlingen hun aanpak hardop benoemen.";
  }

  if (family === "rekenen_lijn") {
    return "Leg deze kaart op of bij de getallenlijn en laat leerlingen verplaatsen, schatten of vergelijken.";
  }

  if (family === "rekenen_hoeken") {
    return "Gebruik deze kaart als keuze- of modelkaart in een hoek en laat leerlingen hun keuze toelichten.";
  }

  if (family === "rekenen_antwoorden" || family === "rekenen_strategie") {
    return "Gebruik deze kaart als leerlingkaart en laat eerst de strategie of rekentaal noemen en daarna pas antwoorden.";
  }

  if (subjectId === "spelling") {
    return "Methodekaart in de lijn van Staal 2: categorie noemen, hardop redeneren en daarna pas schrijven.";
  }

  if (subjectId === "rekenen") {
    return "Methodekaart in de lijn van Getal & Ruimte Junior: eerst denken, dan model of strategie kiezen en controleren.";
  }

  return `Gebruik deze kaart als extra leerlingkaart ${index + 1}.`;
}

function fillCardsToClassSize(cards) {
  const completed = cards.slice(0, CLASS_SIZE);

  if (completed.length === CLASS_SIZE || cards.length === 0) {
    return completed;
  }

  let index = 0;

  while (completed.length < CLASS_SIZE) {
    const source = cards[index % cards.length];
    const round = Math.floor(index / cards.length) + 2;
    completed.push({
      label: `${source.label} set ${round}`,
      text: source.text,
      hint: `${source.hint} Extra kopie voor een volledige klas van ${CLASS_SIZE} leerlingen.`
    });
    index += 1;
  }

  return completed;
}

function getSupportCards(group, subject, moment, blueprint, title) {
  const visualCards = getVisualSupportCards(blueprint.visual, title);
  const methodCards = getMethodSupportCards(subject.id, group.id, moment.id);

  return [...visualCards, ...methodCards];
}

function getVisualSupportCards(visual, title) {
  const cardSets = {
    relay: [
      card("Opstelling", "Startlijn", `Print en leg deze kaart bij de start van ${title}.`),
      card("Opstelling", "Kaartjesplek", "Leg of hang hier de werkkaartjes."),
      card("Opstelling", "Team 1", "Gebruik als teamlabel."),
      card("Opstelling", "Team 2", "Gebruik als tweede teamlabel."),
      card("Opstelling", "Team 3", "Gebruik als derde teamlabel."),
      card("Opstelling", "Team 4", "Gebruik als vierde teamlabel."),
      card("Opstelling", "Team 5", "Gebruik als vijfde teamlabel."),
      card("Opstelling", "Controleplek", "Laat leerlingen hier antwoorden checken."),
      card("Opstelling", "Klaar", "Gebruik als eindbordje.")
    ],
    dictation: [
      card("Rolkaart", "Loper", "Print deze rolkaart voor de loper."),
      card("Rolkaart", "Schrijver", "Print deze rolkaart voor de schrijver."),
      card("Opstelling", "Kijkkaart", "Hang hier de woorden of zinnen op."),
      card("Opstelling", "Schrijfplek", "Leg deze kaart op de werktafel."),
      card("Opstelling", "Controle", "Gebruik als controlevak."),
      card("Opstelling", "Wissel", "Gebruik bij het wisselen van rol.")
    ],
    corners: [
      card("Hoekkaart", "Hoek A", "Print en hang zichtbaar op."),
      card("Hoekkaart", "Hoek B", "Print en hang zichtbaar op."),
      card("Hoekkaart", "Hoek C", "Print en hang zichtbaar op."),
      card("Hoekkaart", "Hoek D", "Print en hang zichtbaar op."),
      card("Hoekkaart", "Middenvak", "Gebruik voor twijfel of klassikale bespreking."),
      card("Hoekkaart", "Controle", "Gebruik voor het gezamenlijke antwoord.")
    ],
    stations: [
      card("Station", "Station 1", "Print voor het eerste station."),
      card("Station", "Station 2", "Print voor het tweede station."),
      card("Station", "Station 3", "Print voor het derde station."),
      card("Station", "Station 4", "Gebruik voor het vierde station."),
      card("Station", "Station 5", "Gebruik voor het vijfde station of een extra ronde."),
      card("Station", "Doorwisselen", "Gebruik bij het wisselen van station."),
      card("Station", "Controle", "Gebruik als gezamenlijke checkplek.")
    ],
    path: [
      card("Route", "Start", "Leg deze kaart aan het begin van de route."),
      card("Route", "Stop 1", "Gebruik als eerste halte."),
      card("Route", "Stop 2", "Gebruik als tweede halte."),
      card("Route", "Stop 3", "Gebruik als derde halte."),
      card("Route", "Stop 4", "Gebruik als vierde halte."),
      card("Route", "Stop 5", "Gebruik als vijfde halte."),
      card("Route", "Controle", "Gebruik als controlepunt."),
      card("Route", "Finish", "Gebruik aan het eind van de route.")
    ],
    mission: [
      card("Missie", "Start", "Gebruik als startkaart."),
      card("Missie", "Post 1", "Gebruik bij de eerste missiepost."),
      card("Missie", "Post 2", "Gebruik bij de tweede missiepost."),
      card("Missie", "Post 3", "Gebruik bij de derde missiepost."),
      card("Missie", "Post 4", "Gebruik bij de vierde missiepost."),
      card("Missie", "Post 5", "Gebruik bij de vijfde missiepost."),
      card("Missie", "Controle", "Gebruik voor het nakijkpunt."),
      card("Missie", "Eindmissie", "Gebruik als finishkaart.")
    ],
    line: [
      card("Lijnkaart", "Begin", "Leg aan het begin van de lijn."),
      card("Lijnkaart", "Midden", "Gebruik als middenanker."),
      card("Lijnkaart", "Eind", "Leg aan het einde van de lijn."),
      card("Lijnkaart", "Leg hier", "Gebruik als opdrachtplek."),
      card("Lijnkaart", "Lees terug", "Gebruik voor de controle."),
      card("Lijnkaart", "Controle", "Gebruik als nakijkkaart.")
    ],
    jump: [
      card("Vakkaart", "Goed", "Leg in het eerste springvak."),
      card("Vakkaart", "Fout", "Leg in het tweede springvak."),
      card("Vakkaart", "Twijfel", "Gebruik als derde vak of denkvak."),
      card("Vakkaart", "Start", "Gebruik als beginpunt."),
      card("Vakkaart", "Terug", "Gebruik voor de terugweg."),
      card("Vakkaart", "Controle", "Laat leerlingen hier uitleggen.")
    ],
    measure: [
      card("Meetkaart", "Meetpunt", "Gebruik bij een meetplek."),
      card("Meetkaart", "Noteer", "Leg bij het antwoordblad."),
      card("Meetkaart", "Vergelijk", "Gebruik voor vergelijkvragen."),
      card("Meetkaart", "Controle", "Gebruik als nakijkplek."),
      card("Meetkaart", "Herhaal", "Gebruik voor een tweede poging."),
      card("Meetkaart", "Klaar", "Gebruik als eindkaart.")
    ],
    bingo: [
      card("Bingo", "Trekstapel", "Leg deze kaart bij de trekkaarten."),
      card("Bingo", "Bingobord", "Leg deze kaart bij het bord of de kaarten."),
      card("Bingo", "Controle", "Gebruik voor het nakijkpunt."),
      card("Bingo", "Klaar", "Gebruik voor de eindcontrole."),
      card("Bingo", "Bonus", "Gebruik als extra uitdaging."),
      card("Bingo", "Uitleg", "Gebruik wanneer leerlingen moeten toelichten.")
    ],
    circle: [
      card("Cirkel", "Spreekplek 1", "Leg deze kaart in de cirkel."),
      card("Cirkel", "Spreekplek 2", "Leg deze kaart in de cirkel."),
      card("Cirkel", "Spreekplek 3", "Leg deze kaart in de cirkel."),
      card("Cirkel", "Spreekplek 4", "Leg deze kaart in de cirkel."),
      card("Cirkel", "Spreekplek 5", "Leg deze kaart in de cirkel."),
      card("Cirkel", "Midden", "Gebruik voor bal of startpunt.")
    ]
  };

  return cardSets[visual] ?? [
    card("Opstelling", "Start", "Gebruik als startkaart."),
    card("Opstelling", "Materiaal", "Gebruik voor de materiaalplek."),
    card("Opstelling", "Controle", "Gebruik als controlekaart."),
    card("Opstelling", "Klaar", "Gebruik als eindkaart.")
  ];
}

function getMethodSupportCards(subjectId, groupId, momentId) {
  if (subjectId === "spelling" && groupId === GROUP_34) {
    return [
      card("Methodehulp", "Categoriekaart", "Print als herkenbare Staal-steunkaart."),
      card("Methodehulp", "Hakwoord", "Gebruik als categoriekaart."),
      card("Methodehulp", "Zingwoord", "Gebruik als categoriekaart."),
      card("Methodehulp", "Luchtwoord", "Gebruik als categoriekaart.")
    ];
  }

  if (subjectId === "spelling" && groupId === GROUP_56) {
    return [
      card("Methodehulp", "Klankgroepenkaart", "Print als geheugensteun uit de Staal-aanpak."),
      card("Methodehulp", "Ei- of ij-plaat", "Gebruik bij woorden met dezelfde klank."),
      card("Methodehulp", "Au- of ou-plaat", "Gebruik bij woorden met dezelfde klank."),
      card("Methodehulp", "Regelkaart", "Gebruik als algemene categoriekaart.")
    ];
  }

  if (subjectId === "spelling") {
    return [
      card("Methodehulp", "Werkwoordschema", "Print en leg zichtbaar neer."),
      card("Methodehulp", "Persoonsvorm", "Gebruik als schema-stap."),
      card("Methodehulp", "Ik-vorm", "Gebruik als schema-stap."),
      card("Methodehulp", "Controlezin", "Gebruik voor de laatste check.")
    ];
  }

  if (subjectId === "rekenen" && groupId === GROUP_34) {
    return [
      card("Modelkaart", "Getallenlijn", "Print als modelsteun."),
      card("Modelkaart", "Erbij", "Gebruik als rekentaalkaart."),
      card("Modelkaart", "Eraf", "Gebruik als rekentaalkaart."),
      card("Modelkaart", "Meer of minder", "Gebruik voor vergelijken.")
    ];
  }

  if (subjectId === "rekenen" && groupId === GROUP_56) {
    return [
      card("Modelkaart", "Getallenlijn", "Print als modelsteun."),
      card("Strategiekaart", "Rijgen", "Gebruik als vaste strategiekaart."),
      card("Strategiekaart", "Splitsen", "Gebruik als vaste strategiekaart."),
      card("Strategiekaart", "Controleren", "Gebruik als afsluitende check.")
    ];
  }

  if (subjectId === "rekenen") {
    return [
      card("Modelkaart", "Verhoudingstabel", "Print als oplossingsmodel."),
      card("Modelkaart", "Breuk-procent-decimaal", "Gebruik als koppelkaart."),
      card("Strategiekaart", "Schatten", "Gebruik voor redelijkheid controleren."),
      card("Strategiekaart", "Verklaren", "Laat leerlingen hun aanpak onderbouwen.")
    ];
  }

  return [
    card("Leshulp", "Startkaart", `Gebruik deze kaart tijdens ${momentId}.`),
    card("Leshulp", "Controlekaart", "Print voor een gezamenlijke check."),
    card("Leshulp", "Wisselkaart", "Gebruik bij een nieuwe ronde.")
  ];
}

function buildPrintChecklist(subject, cards, supportCards, teacherSheets) {
  const methodLine =
    subject.id === "spelling"
      ? "Methodehulp uit Staal 2"
      : subject.id === "rekenen"
        ? "Methodehulp uit Getal & Ruimte Junior"
        : "Leshulp voor de opdracht";

  return [
    `${cards.length} werkkaartjes: 1 leerlingkaart per leerling in een klas van ${CLASS_SIZE}`,
    `Adviesverdeling: ${CLASS_GROUP_COUNT} setjes van ${CLASS_GROUP_SIZE} werkkaartjes`,
    `${supportCards.length} organisatie- en hulpmateriaalkaartjes`,
    `${teacherSheets.length} groeps-, antwoord- en controlebladen`,
    `${methodLine}`,
    "Print bij voorkeur 1 extra reserveset van de werkkaartjes voor een tweede ronde of een reservestapel"
  ];
}

function getTeacherSheets(group, subject, moment, blueprint, title) {
  const roundCount = Math.max(3, Math.min(6, blueprint.steps.length));
  const roundLines = Array.from({ length: roundCount }, (_, index) => `Ronde ${index + 1}: ____________________`).join("\n");
  const answerBlock =
    subject.id === "spelling"
      ? "Woord / zin: ____________________\nCategorie of regel: ____________________\nControle: klopt het woordbeeld? ____________________"
      : subject.id === "rekenen"
        ? "Som / opgave: ____________________\nModel of strategie: ____________________\nAntwoord: ____________________\nControle: ____________________"
        : "Antwoord: ____________________\nUitleg: ____________________\nControle: hardop teruglezen";

  const groupSheets = Array.from({ length: CLASS_GROUP_COUNT }, (_, index) =>
    card(
      `Groepsblad ${index + 1}`,
      `${title}\nGroep ${index + 1} (${CLASS_GROUP_SIZE} leerlingen)\n${roundLines}\n${answerBlock}`,
      `Print 1 blad voor groep ${index + 1} van ${CLASS_GROUP_SIZE} leerlingen.`
    )
  );

  return [
    ...groupSheets,
    card(
      "Klasoverzicht",
      `Klascheck ${title}\nGroep 1 klaar: ____________________\nGroep 2 klaar: ____________________\nGroep 3 klaar: ____________________\nGroep 4 klaar: ____________________\nGroep 5 klaar: ____________________\nMateriaal compleet terug: ja / nee`,
      `Print 1 klasoverzicht voor de leerkracht tijdens ${moment.label.toLowerCase()}.`
    ),
    card(
      "Controleblad",
      `Doel: ${readGroupValue(blueprint.goal, group.id)}\nCheck 1: kaartje goed gebruikt\nCheck 2: antwoord of woord klopt\nCheck 3: leerling kan uitleggen waarom\nCheck 4: materiaal weer compleet`,
      `Print 1 controleblad voor de leerkracht of een nakijkgroep tijdens ${moment.label.toLowerCase()}.`
    )
  ];
}

function buildCardHint(subjectId, groupId, family, taskKey, index) {
  if (taskKey === "luisterhoeken" || taskKey === "regelhoeken" || taskKey === "rekenhoekenspel") {
    return "Hang deze kaart zichtbaar in een hoek of vak.";
  }

  if (taskKey === "praatcarrousel" || taskKey === "spreekspoor" || taskKey === "argumentencircuit") {
    return "Gebruik deze kaart als praatstarter of route-opdracht.";
  }

  if (taskKey === "werkwoordlijn" || taskKey === "levendezinnen" || taskKey === "levendegetallenlijn") {
    return "Leg deze kaart op de vloer in de juiste volgorde.";
  }

  if (taskKey === "tafelslooproute" || taskKey === "rekenschattocht" || taskKey === "rekenmissie") {
    return "Gebruik deze kaart als routepunt of missiekaart.";
  }

  if (family.includes("estafette") || family === "spelling_woorden" || family === "rekenen_antwoorden") {
    return "Leg deze kaart op afstand voor de estafette.";
  }

  if (family.includes("dictaat")) {
    return "Hang deze kaart op voor de loper of schrijver.";
  }

  if (family.includes("hoeken") || family.includes("regels")) {
    return "Gebruik deze kaart als keuze in een hoek of vak.";
  }

  if (family.includes("lijn")) {
    return "Laat leerlingen deze kaart in de juiste volgorde leggen.";
  }

  if (family.includes("route") || family.includes("missie") || family.includes("praat")) {
    return "Gebruik deze kaart als routepunt of aanwijzing.";
  }

  if (subjectId === "rekenen" && groupId === GROUP_34) {
    return index % 2 === 0 ? "Gebruik dit als somkaart." : "Gebruik dit als antwoordkaart.";
  }

  return "Gebruik deze kaart als snelle startset voor de opdracht.";
}

function flattenTasks() {
  return library.flatMap((group) =>
    group.subjects.flatMap((subject) => subject.moments.flatMap((moment) => moment.tasks))
  );
}

function snapshotNavigationState() {
  return {
    groupId: state.groupId,
    subjectId: state.subjectId,
    momentId: state.momentId,
    taskId: state.taskId,
    search: state.search,
    detailView: state.detailView
  };
}

function applyNavigationState(nextState = initialState) {
  state.groupId = nextState.groupId ?? null;
  state.subjectId = nextState.subjectId ?? null;
  state.momentId = nextState.momentId ?? null;
  state.taskId = nextState.taskId ?? null;
  state.search = nextState.search ?? "";
  state.detailView = nextState.detailView === "cards" ? "cards" : "task";
  state.mobileFiltersOpen = false;

  if (ui.searchInput) {
    ui.searchInput.value = state.search;
  }
}

function isSameNavigationState(left, right) {
  if (!left || !right) {
    return false;
  }

  return (
    left.groupId === right.groupId &&
    left.subjectId === right.subjectId &&
    left.momentId === right.momentId &&
    left.taskId === right.taskId &&
    left.search === right.search &&
    left.detailView === right.detailView
  );
}

function syncBrowserHistory(mode = "replace") {
  if (!window.history || typeof window.history.replaceState !== "function") {
    return;
  }

  const appState = snapshotNavigationState();
  const currentState = window.history.state?.appState;

  if (mode === "push") {
    if (isSameNavigationState(appState, currentState)) {
      window.history.replaceState({ appState, navIndex: historyIndex }, "");
      return;
    }

    historyIndex += 1;
    window.history.pushState({ appState, navIndex: historyIndex }, "");
    return;
  }

  window.history.replaceState({ appState, navIndex: historyIndex }, "");
}

function commitState(historyMode = "replace") {
  render();
  syncBrowserHistory(historyMode);
}

function initializeHistory() {
  const existingState = window.history?.state;

  if (existingState?.appState) {
    historyIndex = typeof existingState.navIndex === "number" ? existingState.navIndex : 0;
    applyNavigationState(existingState.appState);
    return;
  }

  historyIndex = 0;
  applyNavigationState(initialState);
}

function handlePopState(event) {
  const nextState = event.state?.appState;
  historyIndex = typeof event.state?.navIndex === "number" ? event.state.navIndex : 0;
  applyNavigationState(nextState || initialState);
  render();
}

function handleSearchInput(event) {
  state.search = event.target.value;
  syncSelectedTask();
  commitState("replace");
}

function clearSearch() {
  state.search = "";
  if (ui.searchInput) {
    ui.searchInput.value = "";
  }
  syncSelectedTask();
  commitState("replace");
}

function toggleMobileFilters() {
  state.mobileFiltersOpen = !state.mobileFiltersOpen;
  renderMobileFinder();
}

function handleFilterClick(event) {
  const button = event.target.closest("[data-filter-level]");

  if (!button || button.disabled) {
    return;
  }

  const { filterLevel, id } = button.dataset;
  toggleFilter(filterLevel, id);
}

function handleChipClick(event) {
  const button = event.target.closest("[data-clear]");

  if (!button) {
    return;
  }

  const { clear } = button.dataset;

  if (clear === "search") {
    clearSearch();
    return;
  }

  if (clear === "group") {
    state.groupId = null;
    state.subjectId = null;
    state.momentId = null;
    state.taskId = null;
    state.detailView = "task";
  }

  if (clear === "subject") {
    state.subjectId = null;
    state.momentId = null;
    state.taskId = null;
    state.detailView = "task";
  }

  if (clear === "moment") {
    state.momentId = null;
    state.taskId = null;
    state.detailView = "task";
  }

  commitState("push");
}

function handleStepCardClick(event) {
  const button = event.target.closest("[data-filter-level]");

  if (!button || button.disabled) {
    return;
  }

  toggleFilter(button.dataset.filterLevel, button.dataset.id);
}

function handleTaskGridClick(event) {
  const button = event.target.closest("[data-task-id]");

  if (!button) {
    return;
  }

  const nextTaskId = button.dataset.taskId;
  const shouldScroll = state.taskId !== nextTaskId;
  state.taskId = nextTaskId;
  state.detailView = "task";
  commitState("push");

  if (shouldScroll) {
    ui.taskDetail.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function handleTaskDetailClick(event) {
  const tabButton = event.target.closest("[data-detail-view]");

  if (tabButton) {
    state.detailView = tabButton.dataset.detailView;
    commitState("push");
    return;
  }

  const printButton = event.target.closest("[data-action='print-cards']");

  if (printButton) {
    window.print();
  }
}

function toggleFilter(level, id) {
  if (level === "group") {
    if (state.groupId === id) {
      state.groupId = null;
      state.subjectId = null;
      state.momentId = null;
      state.taskId = null;
      state.detailView = "task";
    } else {
      state.groupId = id;
      state.subjectId = null;
      state.momentId = null;
      state.taskId = null;
      state.detailView = "task";
    }
  }

  if (level === "subject") {
    if (state.subjectId === id) {
      state.subjectId = null;
      state.momentId = null;
      state.taskId = null;
      state.detailView = "task";
    } else {
      state.subjectId = id;
      state.momentId = null;
      state.taskId = null;
      state.detailView = "task";
    }
  }

  if (level === "moment") {
    if (state.momentId === id) {
      state.momentId = null;
      state.taskId = null;
      state.detailView = "task";
    } else {
      state.momentId = id;
      state.taskId = null;
      state.detailView = "task";
    }
  }

  if (isPhone()) {
    state.mobileFiltersOpen = false;
  }

  commitState("push");
}

function handleBack() {
  if (historyIndex > 0 && window.history && typeof window.history.back === "function") {
    window.history.back();
    return;
  }

  if (state.taskId) {
    state.taskId = null;
    state.detailView = "task";
    commitState("replace");
    return;
  }

  if (state.momentId) {
    state.momentId = null;
    state.detailView = "task";
    commitState("replace");
    return;
  }

  if (state.subjectId) {
    state.subjectId = null;
    state.detailView = "task";
    commitState("replace");
    return;
  }

  if (state.groupId) {
    state.groupId = null;
    state.detailView = "task";
    commitState("replace");
  }
}

function resetState() {
  applyNavigationState(initialState);
  commitState("push");
}

function syncSelectedTask() {
  const filteredIds = new Set(getFilteredTasks().map((task) => task.id));

  if (state.taskId && !filteredIds.has(state.taskId)) {
    state.taskId = null;
  }
}

function render() {
  syncSelectedTask();
  ui.totalTaskCount.textContent = String(allTasks.length);
  ui.backButton.disabled = !state.groupId && !state.subjectId && !state.momentId && !state.taskId;

  renderMobileFinder();
  renderFilters();
  renderHeader();
  renderStepSection();
  renderResultsSection();
}

function renderMobileFinder() {
  if (!ui.finderPanel || !ui.mobileFilterToggle) {
    return;
  }

  ui.finderPanel.classList.toggle("finder--collapsed", !state.mobileFiltersOpen);
  ui.mobileFilterToggle.textContent = state.mobileFiltersOpen ? "Verberg filters" : "Toon filters";
  ui.mobileFilterToggle.setAttribute("aria-expanded", state.mobileFiltersOpen ? "true" : "false");
}

function renderFilters() {
  if (!ui.groupFilters || !ui.subjectFilters || !ui.momentFilters) {
    return;
  }

  ui.groupFilters.innerHTML = groups
    .map((group) =>
      renderFilterButton({
        id: group.id,
        level: "group",
        title: group.label,
        description: group.description,
        count: countForGroup(group.id),
        active: state.groupId === group.id
      })
    )
    .join("");

  ui.subjectFilters.innerHTML = subjects
    .map((subject) =>
      renderFilterButton({
        id: subject.id,
        level: "subject",
        title: subject.label,
        description: subject.description,
        count: countForSubject(subject.id),
        active: state.subjectId === subject.id
      })
    )
    .join("");

  ui.momentFilters.innerHTML = moments
    .map((moment) =>
      renderFilterButton({
        id: moment.id,
        level: "moment",
        title: moment.label,
        description: moment.subtitle,
        count: countForMoment(moment.id),
        active: state.momentId === moment.id
      })
    )
    .join("");
}

function renderFilterButton({ id, level, title, description, count, active }) {
  const disabled = count === 0 && state.search.trim();

  return `
    <button
      type="button"
      class="filter-button ${active ? "filter-button--active" : ""}"
      data-filter-level="${level}"
      data-id="${id}"
      ${disabled ? "disabled" : ""}
      aria-pressed="${active ? "true" : "false"}"
    >
      <span class="filter-button__main">
        <strong>${escapeHtml(title)}</strong>
        <span>${escapeHtml(description)}</span>
      </span>
      <span class="filter-button__count">${count}</span>
    </button>
  `;
}

function renderHeader() {
  const searchActive = hasSearch();
  const selectedGroup = getGroup(state.groupId);
  const selectedSubject = getSubject(state.subjectId);
  const selectedMoment = getMoment(state.momentId);
  const filteredTasks = getFilteredTasks();

  if (searchActive) {
    ui.contentEyebrow.textContent = "Zoeken";
    ui.contentTitle.textContent = "Zoekresultaten";
    ui.contentDescription.textContent = `Gebruik de filters om de ${filteredTasks.length} zoekresultaten verder te verfijnen of klik direct een opdracht open.`;
  } else if (!selectedGroup) {
    ui.contentEyebrow.textContent = "Start";
    ui.contentTitle.textContent = "Kies eerst een bouw";
    ui.contentDescription.textContent =
      "Werk stap voor stap: kies eerst de bouw, daarna het vak, vervolgens het lesmoment en open dan een opdracht met een complete printset en een duidelijke uitleg.";
  } else if (!selectedSubject) {
    ui.contentEyebrow.textContent = selectedGroup.label;
    ui.contentTitle.textContent = `Kies een vak voor ${selectedGroup.label}`;
    ui.contentDescription.textContent = selectedGroup.focus;
  } else if (!selectedMoment) {
    ui.contentEyebrow.textContent = `${selectedGroup.label} • ${selectedSubject.label}`;
    ui.contentTitle.textContent = "Kies wanneer je de werkvorm wilt inzetten";
    ui.contentDescription.textContent =
      "Zo vind je sneller of je een korte energizer zoekt, een actieve lesvorm midden in de les of juist een opdracht waarbij beweging het leren ondersteunt.";
  } else {
    ui.contentEyebrow.textContent = `${selectedGroup.label} • ${selectedSubject.label}`;
    ui.contentTitle.textContent = selectedMoment.subtitle;
    ui.contentDescription.textContent = selectedMoment.description;
  }

  ui.selectionChips.innerHTML = renderSelectionChips();
}

function renderSelectionChips() {
  const chips = [];

  if (state.groupId) {
    chips.push(
      `<button class="chip" type="button" data-clear="group">${escapeHtml(getGroup(state.groupId).label)} ×</button>`
    );
  }

  if (state.subjectId) {
    chips.push(
      `<button class="chip" type="button" data-clear="subject">${escapeHtml(
        getSubject(state.subjectId).label
      )} ×</button>`
    );
  }

  if (state.momentId) {
    chips.push(
      `<button class="chip" type="button" data-clear="moment">${escapeHtml(getMoment(state.momentId).label)} ×</button>`
    );
  }

  if (hasSearch()) {
    chips.push(
      `<button class="chip chip--search" type="button" data-clear="search">Zoekterm: ${escapeHtml(
        state.search
      )} ×</button>`
    );
  }

  return chips.join("");
}

function renderStepSection() {
  const searchActive = hasSearch();
  const nextStep = getNextStep();

  if (!nextStep) {
    ui.stepSection.style.display = "none";
    ui.stepCards.innerHTML = "";
    return;
  }

  ui.stepSection.style.display = "grid";

  if (searchActive && nextStep) {
    ui.stepSectionTitle.textContent = "Verfijn je zoekresultaten";
    ui.stepSectionDescription.textContent =
      "Je kunt direct een opdracht openen, of eerst nog verder kiezen op bouw, vak of lesmoment.";
  } else if (nextStep?.level === "group") {
    ui.stepSectionTitle.textContent = "Kies een bouw";
    ui.stepSectionDescription.textContent =
      "De opdrachten zijn afgestemd op groep 3/4, 5/6 en 7/8. Start hier voor de snelste route.";
  } else if (nextStep?.level === "subject") {
    ui.stepSectionTitle.textContent = "Kies een vak";
    ui.stepSectionDescription.textContent =
      "Beperk de bibliotheek tot taal, spelling of rekenen zodat docenten sneller passende werkvormen zien.";
  } else if (nextStep?.level === "moment") {
    ui.stepSectionTitle.textContent = "Kies het lesmoment";
    ui.stepSectionDescription.textContent =
      "Kies of je een energizer zoekt, een actieve lesvorm tijdens het leren, of een opdracht waarin beweging echt helpt om te leren.";
  } else {
    ui.stepSectionTitle.textContent = "Filters";
    ui.stepSectionDescription.textContent = "Open direct een opdracht of ga een stap terug.";
  }

  ui.stepCards.innerHTML = renderStepCards(nextStep);
}

function renderStepCards(nextStep) {
  if (!nextStep) {
    return "";
  }

  if (nextStep.level === "group") {
    return groups
      .map((group) => {
        const count = countForGroup(group.id);
        const disabled = count === 0 && hasSearch();

        return `
          <button
            type="button"
            class="step-card"
            data-filter-level="group"
            data-id="${group.id}"
            ${disabled ? "disabled" : ""}
          >
            <span class="step-card__label">${group.label}</span>
            <h4 class="step-card__title">${group.label}</h4>
            <p class="step-card__description">${group.description}</p>
            <div class="step-card__meta">
              <span class="pill">${count} opdrachten</span>
            </div>
          </button>
        `;
      })
      .join("");
  }

  if (nextStep.level === "subject") {
    return subjects
      .map((subject) => {
        const count = countForSubject(subject.id);
        const disabled = count === 0 && hasSearch();

        return `
          <button
            type="button"
            class="step-card"
            data-filter-level="subject"
            data-id="${subject.id}"
            ${disabled ? "disabled" : ""}
          >
            <span class="step-card__label">${subject.label}</span>
            <h4 class="step-card__title">${subject.label}</h4>
            <p class="step-card__description">${subject.description}</p>
            <div class="step-card__meta">
              <span class="pill">${count} opdrachten</span>
            </div>
          </button>
        `;
      })
      .join("");
  }

  return moments
    .map((moment) => {
      const count = countForMoment(moment.id);
      const disabled = count === 0 && hasSearch();

      return `
        <button
          type="button"
          class="step-card"
          data-filter-level="moment"
          data-id="${moment.id}"
          ${disabled ? "disabled" : ""}
        >
          <span class="step-card__label">${moment.label}</span>
          <h4 class="step-card__title">${moment.subtitle}</h4>
          <p class="step-card__description">${moment.description}</p>
          <div class="step-card__meta">
            <span class="pill">${count} opdrachten</span>
          </div>
        </button>
      `;
    })
    .join("");
}

function renderResultsSection() {
  const filteredTasks = getFilteredTasks();
  const canShowTasks = Boolean(state.groupId && state.subjectId && state.momentId);

  if (!canShowTasks) {
    ui.resultsTitle.textContent = "Nog geen opdrachten in beeld";
    ui.resultsMeta.textContent =
      "Kies hierboven eerst een bouw, daarna een vak en vervolgens een lesmoment.";
    ui.taskDetail.className = "task-detail";
    ui.taskDetail.innerHTML = "";
    ui.taskGrid.innerHTML = `
      <div class="empty-state">
        Zodra je de drie grote keuzes hebt gemaakt, verschijnen hier direct de passende opdrachten.
      </div>
    `;
    return;
  }

  if (filteredTasks.length === 0) {
    ui.resultsTitle.textContent = "Geen opdrachten gevonden";
    ui.resultsMeta.textContent =
      "Kies een andere combinatie van bouw, vak of lesmoment.";
    ui.taskDetail.className = "task-detail";
    ui.taskDetail.innerHTML = "";
    ui.taskGrid.innerHTML = `
      <div class="empty-state">
        Er zijn geen opdrachten die passen bij deze combinatie. Kies bijvoorbeeld een ander vak of een ander lesmoment.
      </div>
    `;
    return;
  }

  ui.resultsTitle.textContent = "Kies een opdracht";
  ui.resultsMeta.textContent = `${filteredTasks.length} opdrachten in deze route. Klik een opdracht open voor doel, printmateriaal, benodigdheden en een heldere stap-voor-stap uitleg.`;

  const selectedTask = getSelectedTask(filteredTasks);

  ui.taskDetail.className = selectedTask ? "task-detail task-detail--visible" : "task-detail";
  ui.taskDetail.innerHTML = selectedTask ? renderTaskDetail(selectedTask) : "";

  ui.taskGrid.innerHTML = filteredTasks.map((task) => renderTaskCard(task, selectedTask)).join("");
}

function renderTaskCard(task, selectedTask) {
  const isActive = selectedTask?.id === task.id;
  const showRouteBadges = false;

  return `
    <button
      type="button"
      class="task-card ${isActive ? "task-card--active" : ""}"
      data-task-id="${task.id}"
    >
      <div class="task-card__art" aria-hidden="true">
        ${renderIllustration(task, true)}
      </div>
      <div class="task-card__content">
        <h4 class="task-card__title">${escapeHtml(task.title)}</h4>
        <p class="task-card__summary">${escapeHtml(task.summary)}</p>
        <div class="task-card__meta">
          ${showRouteBadges ? `<span class="pill">${escapeHtml(task.groupLabel)}</span>` : ""}
          ${showRouteBadges ? `<span class="pill">${escapeHtml(task.subjectLabel)}</span>` : ""}
          ${showRouteBadges ? `<span class="pill">${escapeHtml(task.momentLabel)}</span>` : ""}
          <span class="pill">${escapeHtml(task.duration)}</span>
          <span class="pill">printset klaar</span>
        </div>
      </div>
    </button>
  `;
}

function buildQuickOverview(task) {
  return [buildQuickStart(task), buildQuickPlay(task), buildQuickFinish(task)];
}

function buildQuickStart(task) {
  const startByVisual = {
    relay: "Zet een startlijn klaar, leg de kaartjes of materialen aan de overkant en maak een duidelijke verzamelplek.",
    dictation: "Maak een rustige schrijfplek en hang de tekst- of woordkaarten op loopafstand op.",
    corners: "Maak vier duidelijke hoeken of vakken en hang in elke hoek een keuze- of regelkaart.",
    stations: "Zet de stations klaar in een logische route en leg per station maar 1 duidelijke opdracht neer.",
    path: "Leg de route zichtbaar uit met pijlen, nummers of kaartpunten.",
    line: "Maak een vloerlijn of vakkenrij en leg de kaarten apart klaar zodat leerlingen kunnen ordenen.",
    jump: "Leg antwoordvakken of springplekken klaar met genoeg loopruimte ertussen.",
    mission: "Zet de missieposten in volgorde klaar en spreek af hoe leerlingen hun antwoord noteren."
  };

  return startByVisual[task.visual] || task.setup;
}

function buildQuickPlay(task) {
  if (task.steps.length === 1) {
    return task.steps[0];
  }

  if (task.steps.length === 2) {
    return task.steps[1];
  }

  return `${task.steps[1]} ${task.steps[2]}`;
}

function buildQuickFinish(task) {
  return task.steps[task.steps.length - 1] || `Rond af met het leerdoel: ${task.goal}`;
}

function getStepLabel(index, total) {
  if (index === 0) {
    return "Klaarzetten";
  }

  if (index === 1) {
    return "Starten";
  }

  if (index === total - 1) {
    return "Afronden";
  }

  return `Ronde ${index - 1}`;
}

function buildTeacherScript(task) {
  const scripts = {
    relay:
      "Zeg bijvoorbeeld: Jullie starten achter de lijn. Per beurt haal je 1 kaartje op, je legt het op de verzamelplek en daarna lees of controleer je samen wat er al ligt.",
    dictation:
      "Zeg bijvoorbeeld: 1 leerling is de loper en 1 leerling is de schrijver. De loper kijkt, onthoudt een stukje, loopt terug en dicteert precies wat er op de kaart staat.",
    corners:
      "Zeg bijvoorbeeld: Ik lees steeds een woord, regel of som voor. Kies direct een hoek, overleg kort en zorg dat 1 leerling kan uitleggen waarom jullie daar staan.",
    stations:
      "Zeg bijvoorbeeld: Jullie starten elk bij een ander station. Werk rustig aan 1 opdracht, controleer samen en wissel pas als het signaal klinkt.",
    path:
      "Zeg bijvoorbeeld: Volg de route in de goede volgorde. Los bij elke stop eerst de opdracht op en ga pas door als jullie samen denken dat het klopt.",
    mission:
      "Zeg bijvoorbeeld: Jullie werken van post naar post. Elke goede uitkomst geeft een nieuwe stap, dus noteer netjes en controleer steeds voor je verdergaat.",
    line:
      "Zeg bijvoorbeeld: Leg of draag de kaarten naar de juiste plek op de lijn. Lees daarna alles hardop terug en verschuif alleen als jullie kunnen uitleggen waarom.",
    jump:
      "Zeg bijvoorbeeld: Luister goed naar de vraag en spring dan meteen naar het vak dat past. Daarna vertel je kort hoe je aan je keuze kwam.",
    measure:
      "Zeg bijvoorbeeld: Meet eerst rustig, noteer daarna de uitkomst en vergelijk pas dan met een maatje of met de voorbeeldkaart.",
    bingo:
      "Zeg bijvoorbeeld: Zoek steeds 1 passend antwoord of voorbeeld, kom terug naar je kaart en vink pas af nadat jullie samen hebben gecontroleerd."
  };

  return scripts[task.visual] || "Zeg vooraf kort wat het leerdoel is, waar leerlingen starten, wat zij per ronde doen en wanneer zij samen controleren.";
}

function renderTaskDetail(task) {
  const showCards = task.usesCards;

  return `
    <div class="task-detail__top">
      <div>
        <div class="task-detail__art" aria-hidden="true">
          ${renderIllustration(task, false)}
        </div>
        <p class="task-detail__caption">${escapeHtml(task.visualHint)}</p>
      </div>

      <div>
        <div class="task-detail__badges">
          <span class="pill">${escapeHtml(task.groupLabel)}</span>
          <span class="pill">${escapeHtml(task.subjectLabel)}</span>
          <span class="pill">${escapeHtml(task.momentLabel)}</span>
          <span class="pill">${escapeHtml(task.duration)}</span>
        </div>
        <h3 class="task-detail__title">${escapeHtml(task.title)}</h3>
        <p class="task-detail__summary">${escapeHtml(task.summary)}</p>
        <div class="detail-box detail-box--intro">
          <h4>In 20 seconden uitgelegd</h4>
          <ul class="quick-overview">
            ${buildQuickOverview(task)
              .map((line) => `<li>${escapeHtml(line)}</li>`)
              .join("")}
          </ul>
        </div>
      </div>
    </div>

    ${
      showCards
        ? `
          <div class="task-detail__tabs" role="tablist" aria-label="Opdrachtweergave">
            <button
              type="button"
              class="task-detail__tab ${state.detailView === "task" ? "task-detail__tab--active" : ""}"
              data-detail-view="task"
              role="tab"
              aria-selected="${state.detailView === "task" ? "true" : "false"}"
            >
              Opdracht
            </button>
            <button
              type="button"
              class="task-detail__tab ${state.detailView === "cards" ? "task-detail__tab--active" : ""}"
              data-detail-view="cards"
              role="tab"
              aria-selected="${state.detailView === "cards" ? "true" : "false"}"
            >
              Printmateriaal
            </button>
            <button
              type="button"
              class="task-detail__tab"
              data-action="print-cards"
            >
              Print printset
            </button>
          </div>
        `
        : ""
    }

    ${
      state.detailView === "cards" && showCards
        ? renderCardLayer(task)
        : `
          <div class="task-detail__grid">
            <section class="detail-box">
              <h4>Wat oefenen leerlingen?</h4>
              <p>${escapeHtml(task.goal)}</p>
            </section>

            <section class="detail-box">
              <h4>Zo zet je het klaar</h4>
              <p>${escapeHtml(task.setup)}</p>
            </section>

            <section class="detail-box">
              <h4>Waar let je op tijdens het bewegen?</h4>
              <p>${escapeHtml(task.movementFocus)}</p>
            </section>

            <section class="detail-box">
              <h4>Wat print je vooraf uit?</h4>
              <ul>
                ${task.cardPack.printChecklist.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
              </ul>
            </section>

            <section class="detail-box">
              <h4>Wat heb je daarnaast nodig?</h4>
              <ul>
                ${task.materials.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
              </ul>
            </section>

            <section class="detail-box">
              <h4>Zo leg je het uit aan de klas</h4>
              <p>${escapeHtml(buildTeacherScript(task))}</p>
            </section>

            <section class="detail-box detail-box--wide">
              <h4>Zo voer je de opdracht uit</h4>
              <ol>
                ${task.steps
                  .map(
                    (step, index) => `
                      <li>
                        <span class="step-label">${escapeHtml(getStepLabel(index, task.steps.length))}</span>
                        ${escapeHtml(step)}
                      </li>
                    `
                  )
                  .join("")}
              </ol>
            </section>

            <section class="detail-box">
              <h4>Zo maak je het makkelijker of moeilijker</h4>
              <p>${escapeHtml(task.differentiation)}</p>
            </section>

            <section class="detail-box">
              <h4>Handige tip voor de leerkracht</h4>
              <p>${escapeHtml(task.teacherTip)}</p>
            </section>
          </div>
        `
    }
  `;
}

function renderCardLayer(task) {
  return `
    <div class="card-layer">
      <div class="card-layer__intro">
        <strong>${escapeHtml(task.cardPack.title)}</strong>
        <p>${escapeHtml(task.cardPack.intro)}</p>
        <p>Tip: print op A4 en snijd of knip de kaartjes los. Deze printset is opgebouwd voor een klas van ${CLASS_SIZE} leerlingen en blijft in printweergave als losse printpagina zichtbaar.</p>
        <ul class="card-layer__checklist">
          ${task.cardPack.printChecklist.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </div>

      ${renderPrintSection(
        `Werkkaartjes bij de opdracht (${task.cardPack.cards.length})`,
        `Deze set is uitgewerkt voor ${CLASS_SIZE} leerlingen. Verdeel los of in ${CLASS_GROUP_COUNT} setjes van ${CLASS_GROUP_SIZE}.`,
        task.cardPack.cards
      )}

      ${renderPrintSection(
        `Opstellings- en hulpmateriaal (${task.cardPack.supportCards.length})`,
        "Deze kaartjes hoef je als leerkracht niet meer zelf te maken; je kunt ze direct uitprinten en klaarleggen voor de klasorganisatie.",
        task.cardPack.supportCards
      )}

      ${renderPrintSection(
        `Groepsbladen en controlebladen (${task.cardPack.teacherSheets.length})`,
        "Deze bladen kun je direct uitprinten voor 5 groepjes, registratie en controle.",
        task.cardPack.teacherSheets
      )}

      <div class="card-layer__notes">
        ${task.cardPack.note
          .map((note) => `<div class="card-layer__note">${escapeHtml(note)}</div>`)
          .join("")}
      </div>
    </div>
  `;
}

function renderPrintSection(title, description, items) {
  return `
    <section class="card-layer__section">
      <div class="card-layer__section-head">
        <h4>${escapeHtml(title)}</h4>
        <p>${escapeHtml(description)}</p>
      </div>
      <div class="card-pack-grid">
        ${items
          .map(
            (card) => `
              <article class="card-pack-item">
                <span class="card-pack-item__tag">${escapeHtml(card.label)}</span>
                <div class="card-pack-item__body">${renderPrintableText(card.text)}</div>
                <div class="card-pack-item__hint">${escapeHtml(card.hint)}</div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderPrintableText(text) {
  return escapeHtml(text).replace(/\n/g, "<br />");
}

function renderIllustration(task, compact) {
  const subject = getSubject(task.subjectId);
  const moment = getMoment(task.momentId);
  const sky = compact ? "#f4f8ff" : "#f7fbff";
  const field = compact ? "#eef7ef" : "#e9f5eb";
  const stroke = "#19424a";
  const scene = renderIllustrationScene(task, subject.accent, moment.accent, stroke);

  return `
    <svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${escapeHtml(
      task.title
    )}">
      <rect width="360" height="220" rx="24" fill="${sky}" />
      <rect x="0" y="150" width="360" height="70" fill="${field}" />
      <rect x="18" y="16" width="118" height="32" rx="16" fill="${subject.accent}" opacity="0.14" />
      <text x="34" y="36" fill="${subject.accent}" font-size="15" font-family="Avenir Next, Trebuchet MS, sans-serif" font-weight="800">${escapeHtml(
        subject.label
      )}</text>
      <rect x="222" y="16" width="120" height="32" rx="16" fill="${moment.accent}" opacity="0.14" />
      <text x="238" y="36" fill="${moment.accent}" font-size="15" font-family="Avenir Next, Trebuchet MS, sans-serif" font-weight="800">${escapeHtml(
        moment.label
      )}</text>
      ${scene}
    </svg>
  `;
}

function renderIllustrationScene(task, subjectAccent, momentAccent, stroke) {
  if (task.visual === "relay") {
    return `
      ${renderZone(24, 74, 78, 44, "START", "#ffffff", stroke)}
      ${renderZone(140, 120, 94, 48, task.usesCards ? "TEAM / BORD" : "TEAM", "#ffffff", stroke)}
      ${renderCardRack(272, 78, task.usesCards ? "KAARTJES" : "MATERIAAL", subjectAccent, stroke)}
      ${renderTrack(
        [
          [92, 120],
          [122, 144],
          [166, 144],
          [228, 106],
          [272, 104]
        ],
        momentAccent
      )}
    `;
  }

  if (task.visual === "dictation") {
    return `
      ${renderZone(30, 138, 110, 40, "SCHRIJF", "#ffffff", stroke)}
      ${renderCardRack(258, 62, task.usesCards ? "TEKSTKAARTEN" : "MUUR", subjectAccent, stroke)}
      ${renderTrack(
        [
          [142, 154],
          [176, 126],
          [214, 110],
          [248, 96]
        ],
        momentAccent
      )}
      ${renderMiniSign(160, 74, "LOPER", momentAccent)}
    `;
  }

  if (task.visual === "corners") {
    return `
      ${renderZone(24, 66, 74, 38, "HOEK A", "#ffffff", stroke)}
      ${renderZone(262, 66, 74, 38, "HOEK B", "#ffffff", stroke)}
      ${renderZone(24, 156, 74, 38, "HOEK C", "#ffffff", stroke)}
      ${renderZone(262, 156, 74, 38, "HOEK D", "#ffffff", stroke)}
      ${renderZone(132, 102, 96, 52, "KIES", "#ffffff", stroke)}
      ${renderTrack(
        [
          [180, 128],
          [214, 102],
          [258, 84]
        ],
        momentAccent
      )}
    `;
  }

  if (task.visual === "circle") {
    return `
      <circle cx="180" cy="124" r="52" fill="#ffffff" stroke="${stroke}" stroke-width="4" />
      <circle cx="180" cy="124" r="14" fill="${momentAccent}" opacity="0.92" />
      <text x="180" y="129" text-anchor="middle" fill="#ffffff" font-size="11" font-family="Avenir Next, Trebuchet MS, sans-serif" font-weight="800">BAL</text>
      ${renderCirclePoint(180, 62, "1", subjectAccent, stroke)}
      ${renderCirclePoint(126, 92, "2", subjectAccent, stroke)}
      ${renderCirclePoint(126, 156, "3", subjectAccent, stroke)}
      ${renderCirclePoint(234, 156, "4", subjectAccent, stroke)}
      ${renderCirclePoint(234, 92, "5", subjectAccent, stroke)}
    `;
  }

  if (task.visual === "stations") {
    return `
      ${renderZone(34, 96, 74, 44, "STATION 1", "#ffffff", stroke)}
      ${renderZone(142, 72, 82, 44, "STATION 2", "#ffffff", stroke)}
      ${renderZone(252, 112, 74, 44, "STATION 3", "#ffffff", stroke)}
      ${renderTrack(
        [
          [108, 118],
          [140, 94],
          [192, 94],
          [226, 114],
          [252, 134]
        ],
        momentAccent
      )}
    `;
  }

  if (task.visual === "path") {
    return `
      ${renderMiniSign(40, 92, "START", subjectAccent)}
      <circle cx="100" cy="160" r="10" fill="${momentAccent}" />
      <circle cx="144" cy="140" r="10" fill="${momentAccent}" opacity="0.9" />
      <circle cx="190" cy="120" r="10" fill="${momentAccent}" opacity="0.8" />
      <circle cx="236" cy="100" r="10" fill="${momentAccent}" opacity="0.7" />
      <circle cx="282" cy="82" r="10" fill="${momentAccent}" opacity="0.6" />
      ${renderFlag(308, 54, subjectAccent)}
    `;
  }

  if (task.visual === "line") {
    return `
      <path d="M34 124 H326" stroke="${stroke}" stroke-width="6" stroke-linecap="round" />
      ${renderTick(82)}
      ${renderTick(130)}
      ${renderTick(178)}
      ${renderTick(226)}
      ${renderTick(274)}
      ${renderCardTag(62, 86, "1", subjectAccent)}
      ${renderCardTag(148, 72, "2", subjectAccent)}
      ${renderCardTag(236, 86, "3", subjectAccent)}
      ${renderMiniSign(278, 146, "VOLGORDE", momentAccent)}
    `;
  }

  if (task.visual === "jump") {
    return `
      ${renderJumpPad(256, 152, "1", subjectAccent, stroke)}
      ${renderJumpPad(302, 118, "2", subjectAccent, stroke)}
      ${renderJumpPad(256, 84, "3", subjectAccent, stroke)}
      ${renderTrack(
        [
          [152, 164],
          [204, 164],
          [236, 154]
        ],
        momentAccent
      )}
      ${renderZone(24, 126, 92, 38, "START / ANTWOORD", "#ffffff", stroke)}
    `;
  }

  if (task.visual === "measure") {
    return `
      ${renderZone(26, 144, 90, 38, "MEETPUNT", "#ffffff", stroke)}
      ${renderRuler(214, 84, stroke, subjectAccent)}
      <rect x="240" y="122" width="24" height="46" rx="8" fill="${momentAccent}" opacity="0.86" />
      <rect x="274" y="106" width="24" height="62" rx="8" fill="${subjectAccent}" opacity="0.78" />
      <path d="M164 162 H298" stroke="${stroke}" stroke-width="3" stroke-dasharray="8 8" />
    `;
  }

  if (task.visual === "mission") {
    return `
      ${renderMiniSign(34, 86, "START", subjectAccent)}
      <circle cx="114" cy="162" r="11" fill="#ffffff" stroke="${stroke}" stroke-width="4" />
      <circle cx="188" cy="126" r="11" fill="#ffffff" stroke="${stroke}" stroke-width="4" />
      <circle cx="250" cy="100" r="11" fill="#ffffff" stroke="${stroke}" stroke-width="4" />
      ${renderTrack(
        [
          [54, 92],
          [96, 146],
          [146, 150],
          [176, 130],
          [238, 104],
          [280, 88]
        ],
        momentAccent
      )}
      ${renderFlag(304, 58, subjectAccent)}
    `;
  }

  if (task.visual === "bingo") {
    return `
      ${renderBingoBoard(206, 72, stroke, subjectAccent)}
      ${renderZone(34, 138, 100, 40, "VERZAMEL", "#ffffff", stroke)}
      ${renderTrack(
        [
          [134, 158],
          [168, 144],
          [198, 126]
        ],
        momentAccent
      )}
    `;
  }

  return `
    ${renderZone(34, 112, 118, 44, "STARTPUNT", "#ffffff", stroke)}
    ${renderZone(210, 88, 116, 44, task.usesCards ? "KAARTJES" : "MATERIAAL", "#ffffff", stroke)}
    ${renderTrack(
      [
        [154, 134],
        [184, 122],
        [220, 112]
      ],
      momentAccent
    )}
  `;
}

function renderZone(x, y, width, height, label, fill, stroke) {
  return `
    <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="16" fill="${fill}" stroke="${stroke}" stroke-width="3" />
    <text x="${x + width / 2}" y="${y + height / 2 + 5}" text-anchor="middle" fill="${stroke}" font-size="14" font-family="Avenir Next, Trebuchet MS, sans-serif" font-weight="800">${escapeHtml(
      label
    )}</text>
  `;
}

function renderTrack(points, color) {
  const [start, ...rest] = points;
  const path = rest.reduce((acc, [x, y]) => `${acc} L${x} ${y}`, `M${start[0]} ${start[1]}`);

  return `<path d="${path}" fill="none" stroke="${color}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="8 10" />`;
}

function renderCardRack(x, y, label, accent, stroke) {
  return `
    <rect x="${x}" y="${y}" width="56" height="84" rx="18" fill="#ffffff" stroke="${stroke}" stroke-width="3" />
    <rect x="${x + 10}" y="${y + 12}" width="36" height="14" rx="7" fill="${accent}" opacity="0.25" />
    <rect x="${x + 10}" y="${y + 34}" width="36" height="14" rx="7" fill="${accent}" opacity="0.2" />
    <rect x="${x + 10}" y="${y + 56}" width="36" height="14" rx="7" fill="${accent}" opacity="0.16" />
    <text x="${x + 28}" y="${y + 104}" text-anchor="middle" fill="${stroke}" font-size="12" font-family="Avenir Next, Trebuchet MS, sans-serif" font-weight="800">${escapeHtml(
      label
    )}</text>
  `;
}

function renderMiniSign(x, y, label, accent) {
  return `
    <rect x="${x}" y="${y}" width="54" height="24" rx="10" fill="${accent}" opacity="0.15" />
    <text x="${x + 27}" y="${y + 16}" text-anchor="middle" fill="${accent}" font-size="11" font-family="Avenir Next, Trebuchet MS, sans-serif" font-weight="800">${escapeHtml(
      label
    )}</text>
  `;
}

function renderCirclePoint(x, y, label, accent, stroke) {
  return `
    <circle cx="${x}" cy="${y}" r="16" fill="#ffffff" stroke="${stroke}" stroke-width="3" />
    <text x="${x}" y="${y + 5}" text-anchor="middle" fill="${accent}" font-size="14" font-family="Avenir Next, Trebuchet MS, sans-serif" font-weight="800">${escapeHtml(
      label
    )}</text>
  `;
}

function renderFlag(x, y, accent) {
  return `
    <path d="M${x} ${y} V${y + 48}" stroke="${accent}" stroke-width="6" stroke-linecap="round" />
    <path d="M${x} ${y} L${x + 24} ${y + 12} L${x} ${y + 24} Z" fill="${accent}" />
  `;
}

function renderTick(x) {
  return `<path d="M${x} 112 V136" stroke="#ffffff" stroke-width="4" />`;
}

function renderCardTag(x, y, label, accent) {
  return `
    <rect x="${x}" y="${y}" width="34" height="24" rx="8" fill="#ffffff" stroke="${accent}" stroke-width="3" />
    <text x="${x + 17}" y="${y + 16}" text-anchor="middle" fill="${accent}" font-size="12" font-family="Avenir Next, Trebuchet MS, sans-serif" font-weight="800">${escapeHtml(
      label
    )}</text>
  `;
}

function renderJumpPad(x, y, label, accent, stroke) {
  return `
    <circle cx="${x}" cy="${y}" r="20" fill="#ffffff" stroke="${stroke}" stroke-width="4" />
    <text x="${x}" y="${y + 6}" text-anchor="middle" fill="${accent}" font-size="16" font-family="Avenir Next, Trebuchet MS, sans-serif" font-weight="800">${escapeHtml(
      label
    )}</text>
  `;
}

function renderRuler(x, y, stroke, accent) {
  return `
    <rect x="${x}" y="${y}" width="104" height="18" rx="9" fill="#ffffff" stroke="${stroke}" stroke-width="3" />
    <path d="M${x + 14} ${y} V${y + 18} M${x + 28} ${y} V${y + 12} M${x + 42} ${y} V${y + 18} M${x + 56} ${y} V${y + 12} M${x + 70} ${y} V${y + 18} M${x + 84} ${y} V${y + 12}" stroke="${accent}" stroke-width="3" />
  `;
}

function renderBingoBoard(x, y, stroke, accent) {
  return `
    <rect x="${x}" y="${y}" width="118" height="86" rx="18" fill="#ffffff" stroke="${stroke}" stroke-width="3" />
    <path d="M${x + 39} ${y + 12} V${y + 74} M${x + 79} ${y + 12} V${y + 74} M${x + 12} ${y + 29} H${x + 106} M${x + 12} ${y + 57} H${x + 106}" stroke="${accent}" stroke-width="3" opacity="0.65" />
    <circle cx="${x + 25}" cy="${y + 20}" r="7" fill="${accent}" opacity="0.85" />
    <circle cx="${x + 92}" cy="${y + 46}" r="7" fill="${accent}" opacity="0.55" />
    <circle cx="${x + 59}" cy="${y + 68}" r="7" fill="${accent}" opacity="0.7" />
  `;
}

function getFilteredTasks() {
  const searchTerm = hasSearch() ? normalize(state.search) : "";

  return allTasks
    .filter((task) => {
      if (state.groupId && task.groupId !== state.groupId) {
        return false;
      }

      if (state.subjectId && task.subjectId !== state.subjectId) {
        return false;
      }

      if (state.momentId && task.momentId !== state.momentId) {
        return false;
      }

      if (searchTerm && !task.searchText.includes(searchTerm)) {
        return false;
      }

      return true;
    })
    .sort(sortTasks);
}

function sortTasks(left, right) {
  return (
    orderMaps.groups.get(left.groupId) - orderMaps.groups.get(right.groupId) ||
    orderMaps.subjects.get(left.subjectId) - orderMaps.subjects.get(right.subjectId) ||
    orderMaps.moments.get(left.momentId) - orderMaps.moments.get(right.momentId) ||
    left.title.localeCompare(right.title, "nl")
  );
}

function countForGroup(groupId) {
  return countTasksMatching((task) => task.groupId === groupId);
}

function countForSubject(subjectId) {
  return countTasksMatching(
    (task) =>
      task.subjectId === subjectId &&
      (!state.groupId || task.groupId === state.groupId)
  );
}

function countForMoment(momentId) {
  return countTasksMatching(
    (task) =>
      task.momentId === momentId &&
      (!state.groupId || task.groupId === state.groupId) &&
      (!state.subjectId || task.subjectId === state.subjectId)
  );
}

function countTasksMatching(predicate) {
  const searchTerm = hasSearch() ? normalize(state.search) : "";

  return allTasks.filter((task) => {
    if (searchTerm && !task.searchText.includes(searchTerm)) {
      return false;
    }

    return predicate(task);
  }).length;
}

function getNextStep() {
  if (!state.groupId) {
    return { level: "group" };
  }

  if (!state.subjectId) {
    return { level: "subject" };
  }

  if (!state.momentId) {
    return { level: "moment" };
  }

  return null;
}

function getSelectedTask(filteredTasks = getFilteredTasks()) {
  return filteredTasks.find((task) => task.id === state.taskId) ?? null;
}

function getGroup(groupId) {
  return groups.find((group) => group.id === groupId) ?? null;
}

function getSubject(subjectId) {
  return subjects.find((subject) => subject.id === subjectId) ?? null;
}

function getMoment(momentId) {
  return moments.find((moment) => moment.id === momentId) ?? null;
}

function hasSearch() {
  return Boolean(ui.searchInput) && state.search.trim().length >= 2;
}

function isPhone() {
  return window.matchMedia("(max-width: 760px)").matches;
}

function normalize(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
