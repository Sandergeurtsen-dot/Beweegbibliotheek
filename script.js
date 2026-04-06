const GROUP_34 = "groep-3-4";
const GROUP_56 = "groep-5-6";
const GROUP_78 = "groep-7-8";
const CLASS_SIZE = 25;
const CLASS_GROUP_COUNT = 5;
const CLASS_GROUP_SIZE = 5;
const PAIR_OR_TRIO_UNITS = buildPairOrTrioUnits();

const byGroup = (groep34, groep56, groep78) => ({
  [GROUP_34]: groep34,
  [GROUP_56]: groep56,
  [GROUP_78]: groep78
});

const same = (value) => byGroup(value, value, value);

function buildPairOrTrioUnits() {
  if (CLASS_SIZE % 2 === 0) {
    return Array.from({ length: CLASS_SIZE / 2 }, (_, index) => ({
      label: `Tweetal ${index + 1}`,
      size: 2
    }));
  }

  const pairCount = Math.max(0, Math.floor((CLASS_SIZE - 3) / 2));

  return [
    ...Array.from({ length: pairCount }, (_, index) => ({
      label: `Tweetal ${index + 1}`,
      size: 2
    })),
    { label: "Drietal 1", size: 3 }
  ];
}

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
    accent: "#00abc8",
    description:
      "Oefen spellingregels, klanken, woordbeelden, werkwoorden en foutenanalyse."
  },
  {
    id: "rekenen",
    label: "Rekenen",
    marker: "12",
    accent: "#1d1060",
    description:
      "Gebruik beweging bij automatiseren, getalbegrip, meten, verhoudingen en probleemoplossen."
  }
];

const moments = [
  {
    id: "energizers",
    label: "Tussen het leren",
    subtitle: "Energizers bij het wisselen van een vak",
    accent: "#00abc8",
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
    accent: "#1188a8",
    description:
      "Werkvormen waarbij de beweging niet alleen motiveert, maar echt helpt om te begrijpen, oefenen en onthouden."
  }
];

const taskBlueprints = buildTaskBlueprintsFromDoc();

function emptyTaskMoments() {
  return {
    energizers: [],
    tijdens: [],
    bewegend: []
  };
}

function onlyGroup(groupId, value) {
  return {
    [GROUP_34]: groupId === GROUP_34 ? value : null,
    [GROUP_56]: groupId === GROUP_56 ? value : null,
    [GROUP_78]: groupId === GROUP_78 ? value : null
  };
}

function docTask(groupId, config) {
  return {
    key: config.key,
    visual: config.visual,
    visualHint: config.visualHint,
    title: onlyGroup(groupId, config.title),
    summary: onlyGroup(groupId, config.summary),
    duration: onlyGroup(groupId, config.duration),
    setup: config.setup,
    goal: onlyGroup(groupId, config.goal),
    movementFocus: config.movementFocus,
    materials: config.materials,
    steps: config.steps,
    differentiation: onlyGroup(groupId, config.differentiation),
    teacherTip: onlyGroup(groupId, config.teacherTip),
    keywords: [...config.keywords, ...(config.methodKeywords ?? ["getal en ruimte junior", "dynamische schooldag", "rekenen"])]
  };
}

function spellingDocTask(groupId, config) {
  return docTask(groupId, {
    ...config,
    methodKeywords: ["staal 2", "spelling", "dynamische schooldag", "jose schraven"]
  });
}

function taalDocTask(groupId, config) {
  return docTask(groupId, {
    ...config,
    methodKeywords: ["staal 2", "taal", "dynamische schooldag", "mondeling taalonderwijs"]
  });
}

function buildTaskBlueprintsFromDoc() {
  return {
    taal: {
      energizers: [
        taalDocTask(GROUP_34, {
          key: "woord-of-geen-woord",
          visual: "jump",
          visualHint: "Een snelle luisterreactie waarbij leerlingen springen of hurken bij echte woorden en onzinwoorden.",
          title: "Woord of geen woord?",
          summary: "Leerlingen schakelen snel tussen luisteren, herkennen en bewegen bij echte woorden en onzinwoorden.",
          duration: "3-5 min",
          setup: "Geen voorbereiding. Laat leerlingen naast hun tafel staan met genoeg ruimte voor een kleine sprong of hurk.",
          goal: "Woordenschat, auditieve taalverwerking en luisteren kort activeren.",
          movementFocus: "Snel een beweging koppelen aan de vraag of iets een echt woord is.",
          materials: ["Geen extra materiaal"],
          steps: [
            "Laat leerlingen naast hun tafel staan.",
            "Noem om de beurt echte woorden en onzinwoorden, bijvoorbeeld tafel, mip, boek of slaro.",
            "Bij een echt woord maken leerlingen een sprong. Bij een onzinwoord hurken ze.",
            "Bespreek na een paar voorbeelden kort waarom iets wel of geen woord is."
          ],
          differentiation: "Maak het moeilijker met themawoorden of laat leerlingen zelf een echt woord of onzinwoord bedenken.",
          teacherTip: "Houd het tempo hoog en wissel bekende en onbekende woorden af, zodat leerlingen echt moeten luisteren.",
          keywords: ["groep 3/4", "woordenschat", "luisteren", "auditieve verwerking", "energizer"]
        }),
        taalDocTask(GROUP_34, {
          key: "zin-of-geen-zin",
          visual: "jump",
          visualHint: "Twee vaste bewegingen maken direct zichtbaar of een uitspraak al een volledige zin is.",
          title: "Zin of geen zin?",
          summary: "Leerlingen laten met een beweging zien of een uitspraak een volledige zin is.",
          duration: "5 min",
          setup: "Geen voorbereiding. Spreek twee bewegingen af: wel een zin of geen zin.",
          goal: "Zinsbegrip, mondeling taalonderwijs en taalbeschouwing oefenen.",
          movementFocus: "Snelle gebaren koppelen aan de vraag of een uitspraak volledig is.",
          materials: ["Geen extra materiaal"],
          steps: [
            "Spreek af: handen omhoog betekent wel een zin en handen op knieën betekent geen zin.",
            "Noem uitspraken zoals 'De hond rent.', 'Op de tafel.' en 'Ik eet een appel.'",
            "Laat leerlingen met hun beweging zien wat zij denken.",
            "Vraag af en toe: wat ontbreekt er nog?"
          ],
          differentiation: "Laat leerlingen zelf een goede en een onvolledige zin bedenken voor een volgende ronde.",
          teacherTip: "Kies zowel heel duidelijke als twijfelachtige voorbeelden; dan wordt de nabespreking sterker.",
          keywords: ["groep 3/4", "zinsbegrip", "taalbeschouwing", "zin", "mondelinge taal"]
        }),
        taalDocTask(GROUP_34, {
          key: "klank-en-gebaar",
          visual: "jump",
          visualHint: "Leerlingen reageren met een afgesproken gebaar zodra ze de themaklank vooraan horen.",
          title: "Klank en gebaar",
          summary: "Een korte taalstart waarbij een gekozen klank en thematische woorden direct aan een gebaar worden gekoppeld.",
          duration: "3-5 min",
          setup: "Geen voorbereiding. Kies één klank en spreek één vast gebaar af.",
          goal: "Woordenschat, luisteren en beginnende taalbeschouwing rond klanken activeren.",
          movementFocus: "Direct reageren met een arm- of lichaamsgebaar zodra de afgesproken klank wordt gehoord.",
          materials: ["Geen extra materiaal"],
          steps: [
            "Kies één klank, bijvoorbeeld m.",
            "Noem woorden uit het actuele thema.",
            "Horen leerlingen de afgesproken klank vooraan, dan maken ze een groot afgesproken gebaar.",
            "Horen ze de klank niet, dan blijven ze stil staan."
          ],
          differentiation: "Gebruik eindklanken of laat leerlingen om de beurt zelf woorden noemen.",
          teacherTip: "Neem woorden uit het thema van de week; dan verstevig je tegelijk de actieve woordenschat.",
          keywords: ["groep 3/4", "klank", "woordenschat", "luisteren", "taalbeschouwing"]
        }),
        taalDocTask(GROUP_56, {
          key: "waar-hoort-het-woord",
          visual: "corners",
          visualHint: "Thematische woorden worden al lopend gekoppeld aan de juiste betekenis- of categoriehoek.",
          title: "Waar hoort het woord?",
          summary: "Leerlingen koppelen woorden snel aan een categorie en verwoorden daarna waarom die keuze past.",
          duration: "5 min",
          setup: "Label vier hoeken, bijvoorbeeld beroep, plaats, voorwerp en handeling.",
          goal: "Woordenschat, categoriseren en luisteren actief oefenen.",
          movementFocus: "Naar een categoriehoek lopen en de keuze kort mondeling onderbouwen.",
          materials: ["Eventueel hoekkaartjes"],
          steps: [
            "Label vier hoeken met categorieën, bijvoorbeeld beroep, plaats, voorwerp en handeling.",
            "Noem een woord.",
            "Laat leerlingen naar de juiste hoek lopen.",
            "Vraag één leerling om zijn of haar keuze te verwoorden."
          ],
          differentiation: "Gebruik abstractere woorden of woorden uit zaakvakthema's voor extra uitdaging.",
          teacherTip: "Zorg dat in elke ronde minstens één leerling ook uitlegt waarom de andere hoeken niet passen.",
          keywords: ["groep 5/6", "woordenschat", "categoriseren", "hoeken", "luisteren"]
        }),
        taalDocTask(GROUP_56, {
          key: "feit-of-mening",
          visual: "jump",
          visualHint: "Met staan of hurken reageren leerlingen direct op het verschil tussen feitelijke en subjectieve taal.",
          title: "Feit of mening?",
          summary: "Leerlingen onderscheiden snelle uitspraken als feit of mening en lichten die keuze daarna toe.",
          duration: "5 min",
          setup: "Geen voorbereiding. Spreek twee bewegingen af: staan is feit en hurken is mening.",
          goal: "Mondeling taalonderwijs, taalbeschouwing en kritisch luisteren oefenen.",
          movementFocus: "Direct reageren met een vaste houding en daarna kort verwoorden waarom iets een feit of mening is.",
          materials: ["Geen extra materiaal"],
          steps: [
            "Spreek af: staan betekent feit en hurken betekent mening.",
            "Noem uitspraken zoals 'Water kookt bij 100 graden.' of 'Voetbal is de leukste sport.'",
            "Laat leerlingen reageren met de afgesproken beweging.",
            "Bespreek af en toe waarom iets een feit of mening is."
          ],
          differentiation: "Gebruik uitspraken uit de actuele thematekst of laat leerlingen zelf een feit en een mening formuleren.",
          teacherTip: "Kies uitspraken die net genoeg discussie oproepen; zo blijft het geen trucje maar een denkactiviteit.",
          keywords: ["groep 5/6", "feit", "mening", "kritisch luisteren", "taalbeschouwing"]
        }),
        taalDocTask(GROUP_56, {
          key: "synoniemensprint",
          visual: "jump",
          visualHint: "Leerlingen bewegen op de plaats en roepen bij een signaal snel een passend synoniem.",
          title: "Synoniemensprint",
          summary: "Een korte woordenschatflits waarbij leerlingen in tempo synoniemen noemen en hun reactie aan een stopgebaar koppelen.",
          duration: "3-5 min",
          setup: "Geen voorbereiding. Laat leerlingen rustig op de plaats bewegen.",
          goal: "Woordenschat en woordrelaties snel activeren.",
          movementFocus: "Joggen op de plaats en bij een signaal direct stoppen en een synoniem noemen.",
          materials: ["Geen extra materiaal"],
          steps: [
            "Laat leerlingen rustig op de plaats joggen.",
            "Noem een woord, bijvoorbeeld blij.",
            "Bij het signaal roepen leerlingen een synoniem en maken tegelijk een stopbeweging.",
            "Herhaal dit met 5 tot 8 woorden."
          ],
          differentiation: "Gebruik antoniemen in een vervolgronde of laat leerlingen in tweetallen antwoorden geven.",
          teacherTip: "Kies woorden met meerdere mogelijke antwoorden; dan krijgt de klas sneller een rijker woordveld.",
          keywords: ["groep 5/6", "synoniemen", "woordenschat", "woordrelaties", "energizer"]
        }),
        taalDocTask(GROUP_78, {
          key: "standpunt-in-de-ruimte",
          visual: "line",
          visualHint: "Leerlingen kiezen fysiek een positie bij een stelling en lichten hun standpunt daarna kort toe.",
          title: "Standpunt in de ruimte",
          summary: "Een snelle taalactivatie waarbij leerlingen een mening innemen en die in één zin onderbouwen.",
          duration: "5 min",
          setup: "Wijs twee kanten van het lokaal aan: eens en oneens.",
          goal: "Spreken, argumenteren en luisteren kort activeren.",
          movementFocus: "Een duidelijke positie innemen in de ruimte en daarna kort verwoorden waarom je daar staat.",
          materials: ["Geen extra materiaal"],
          steps: [
            "Wijs twee kanten van het lokaal aan: eens en oneens.",
            "Noem een stelling, bijvoorbeeld: huiswerk is nuttig voor iedereen.",
            "Leerlingen kiezen een kant.",
            "Vraag twee of drie leerlingen om in één zin hun keuze toe te lichten."
          ],
          differentiation: "Voeg een middenpositie toe voor twijfel als je meer nuance wilt.",
          teacherTip: "Laat leerlingen eerst kiezen zonder overleg; zo zie je sneller hun eigen eerste gedachte.",
          keywords: ["groep 7/8", "standpunt", "argumenteren", "spreken", "luisteren"]
        }),
        taalDocTask(GROUP_78, {
          key: "kernwoord-kiezen",
          visual: "jump",
          visualHint: "Leerlingen lopen naar het kernwoord dat volgens hen het onderwerp of de tekst het best samenvat.",
          title: "Kernwoord kiezen",
          summary: "Leerlingen kiezen uit meerdere kernwoorden en verantwoorden daarna welk woord het beste past.",
          duration: "5 min",
          setup: "Geen voorbereiding. Spreek drie plekken in het lokaal af voor drie mogelijke kernwoorden.",
          goal: "Woordenschat, samenvatten en tekstbegrip activeren.",
          movementFocus: "Naar een gekozen kernwoordplek lopen en daarna kort uitleggen waarom dat woord het best past.",
          materials: ["Geen extra materiaal"],
          steps: [
            "Noem een onderwerp of gelezen tekst.",
            "Lees drie mogelijke kernwoorden voor.",
            "Leerlingen lopen naar de plek van het woord dat volgens hen het beste past.",
            "Bespreek kort waarom dat kernwoord het onderwerp goed samenvat."
          ],
          differentiation: "Laat leerlingen daarna zelf een nog beter kernwoord formuleren.",
          teacherTip: "Kies kernwoorden die dicht bij elkaar liggen; dan moeten leerlingen echt samenvattend nadenken.",
          keywords: ["groep 7/8", "kernwoord", "samenvatten", "tekstbegrip", "woordenschat"]
        }),
        taalDocTask(GROUP_78, {
          key: "waar-twijfel-niet-waar",
          visual: "line",
          visualHint: "Drie plekken in het lokaal maken kritisch luisteren zichtbaar: waar, twijfel en niet waar.",
          title: "Waar, twijfel, niet waar",
          summary: "Leerlingen luisteren kritisch naar uitspraken en kiezen vervolgens een positie die ze moeten verantwoorden.",
          duration: "5 min",
          setup: "Maak drie plekken in de klas: waar, twijfel en niet waar.",
          goal: "Luisteren, taalbeschouwing en mondeling taalonderwijs oefenen.",
          movementFocus: "Een positie kiezen in de ruimte en daarna verwoorden waarom je daar staat.",
          materials: ["Geen extra materiaal"],
          steps: [
            "Maak drie plekken in de klas: waar, twijfel en niet waar.",
            "Noem een uitspraak uit een tekst of onderwerp.",
            "Leerlingen kiezen een positie.",
            "Vraag enkele leerlingen hun keuze te verantwoorden."
          ],
          differentiation: "Gebruik ook bronkritische of argumentatieve uitspraken voor een verdiepend gesprek.",
          teacherTip: "Laat leerlingen in de twijfelzone juist benoemen welke informatie ze nog missen.",
          keywords: ["groep 7/8", "kritisch luisteren", "taalbeschouwing", "waar of niet waar", "argumentatie"]
        })
      ],
      tijdens: [
        taalDocTask(GROUP_34, {
          key: "loopdictee-woordenschat",
          visual: "dictation",
          visualHint: "Tweetallen halen woordkaartjes op, zeggen het woord hardop en gebruiken het daarna in een zin.",
          title: "Loopdictee woordenschat",
          summary: "Leerlingen halen nieuwe woorden op en oefenen direct met betekenis, uitspraak en gebruik in een zin.",
          duration: "10 min",
          setup: "Hang 6 tot 8 woordkaartjes in het lokaal en leg schrijfmateriaal klaar.",
          goal: "Woordenschat, spreken en luisteren actief inoefenen.",
          movementFocus: "Lopen, onthouden en daarna samen het woord uitspreken en gebruiken.",
          materials: ["Woordkaartjes", "Wisbordje of papier"],
          steps: [
            "Werk in tweetallen.",
            "Eén leerling loopt naar een woordkaart, onthoudt het woord en loopt terug.",
            "Samen zeggen de leerlingen het woord, leggen uit wat het betekent of gebruiken het in een zin.",
            "Daarna wisselen de rollen."
          ],
          differentiation: "Gebruik ook beeldkaartjes of laat sterkere leerlingen zelf een zin maken met het woord.",
          teacherTip: "Laat leerlingen eerst het woord hardop herhalen voordat ze naar betekenis of gebruik gaan.",
          keywords: ["groep 3/4", "woordenschat", "loopdictee", "spreken", "luisteren"]
        }),
        taalDocTask(GROUP_34, {
          key: "praatmaatjes-in-beweging",
          visual: "circle",
          visualHint: "Leerlingen bewegen door het lokaal, zoeken een maatje en oefenen korte mondelinge taalbeurten.",
          title: "Praatmaatjes in beweging",
          summary: "Een korte duo-opdracht waarin spreken, luisteren en zinsvorming via een wandel- en wisselmoment worden geoefend.",
          duration: "5-10 min",
          setup: "Geen voorbereiding of leg enkele praatvragen klaar als steun.",
          goal: "Spreken, luisteren, beurt nemen en zinsvorming oefenen.",
          movementFocus: "Rustig bewegen, snel een maatje zoeken en daarna om de beurt een korte taalbeurt geven.",
          materials: ["Geen extra materiaal", "Eventueel praatkaartjes"],
          steps: [
            "Laat leerlingen rustig door het lokaal lopen.",
            "Bij een signaal zoeken zij een maatje.",
            "Geef een korte vraag, bijvoorbeeld: Wat zie je op de boerderij?",
            "Leerling A vertelt, leerling B luistert en noemt daarna één woord of zin terug."
          ],
          differentiation: "Laat leerlingen eerst nadenken met een themawoord, gebaar of voorwerp als steun.",
          teacherTip: "Model eerst hoe een volledig antwoord en een goede luisterreactie klinken.",
          keywords: ["groep 3/4", "spreken", "luisteren", "beurt nemen", "praatmaatjes"]
        }),
        taalDocTask(GROUP_34, {
          key: "verhaalestafette",
          visual: "relay",
          visualHint: "Groepjes bouwen om de beurt een verhaal op, waarbij elke leerling na een loopbeurt één zin toevoegt.",
          title: "Verhaalestafette",
          summary: "Leerlingen oefenen samenhangend vertellen door een verhaal zin voor zin in estafettevorm uit te bouwen.",
          duration: "10-12 min",
          setup: "Geen voorbereiding. Verdeel de klas in kleine groepjes en wijs een paar plekken in het lokaal aan.",
          goal: "Vertellen, woordenschat en verhaalopbouw oefenen.",
          movementFocus: "Lopen naar een vertelplek, één zin toevoegen en daarna direct doorwisselen.",
          materials: ["Geen extra materiaal"],
          steps: [
            "Verdeel de klas in kleine groepjes.",
            "De eerste leerling loopt naar een plek in het lokaal en vertelt één zin van een verhaal.",
            "Daarna tikt hij of zij de volgende leerling aan.",
            "De volgende leerling voegt een zin toe, zodat het verhaal steeds verder groeit."
          ],
          differentiation: "Werk met een beginzin, een themawoord of drie plaatjes als steun.",
          teacherTip: "Geef groepjes eventueel eerst één vaste beginzin; dan komt de inhoud sneller op gang.",
          keywords: ["groep 3/4", "verhaalestafette", "vertellen", "verhaalopbouw", "woordenschat"]
        }),
        taalDocTask(GROUP_56, {
          key: "loopdictee-kernzinnen",
          visual: "dictation",
          visualHint: "Tweetallen halen kernzinnen op en formuleren samen de hoofdgedachte van een tekst.",
          title: "Loopdictee kernzinnen",
          summary: "Leerlingen oefenen hoofdgedachte en kernzinnen door tekststroken al lopend op te halen en samen te verwerken.",
          duration: "10-15 min",
          setup: "Hang korte tekststroken of kernzinnen in het lokaal.",
          goal: "Lezen, samenvatten en schriftelijk taalonderwijs actief oefenen.",
          movementFocus: "Lopen, onthouden en daarna samen kerninformatie formuleren.",
          materials: ["Tekststroken", "Papier of wisbordje"],
          steps: [
            "Werk in tweetallen.",
            "Eén leerling loopt naar een tekststrook en onthoudt de kernzin.",
            "Terug bij het maatje schrijven of formuleren ze samen de hoofdgedachte.",
            "Daarna wisselen ze."
          ],
          differentiation: "Gebruik ondersteunende woorden of een half ingevulde samenvatstructuur voor wie dat nodig heeft.",
          teacherTip: "Laat leerlingen eerst de kernzin navertellen voordat ze gaan schrijven; zo blijft de inhoud voorop staan.",
          keywords: ["groep 5/6", "kernzin", "hoofdgedachte", "samenvatten", "loopdictee"]
        }),
        taalDocTask(GROUP_56, {
          key: "vraag-en-antwoordwandeling",
          visual: "path",
          visualHint: "Tweetallen lopen langs vraagkaartjes en oefenen complete mondelinge antwoorden in wisselende rollen.",
          title: "Vraag en antwoordwandeling",
          summary: "Leerlingen oefenen volledige antwoorden en beurtwisseling al lopend langs korte taalvragen.",
          duration: "10 min",
          setup: "Verspreid 6 tot 8 vraagkaartjes door het lokaal.",
          goal: "Spreken, luisteren, formuleren en beurtwisseling oefenen.",
          movementFocus: "Van vraag naar vraag lopen en per stop een volledige mondelinge beurt geven.",
          materials: ["Vraagkaartjes"],
          steps: [
            "Verspreid vraagkaartjes door het lokaal.",
            "Leerlingen lopen in tweetallen langs de kaartjes.",
            "Bij elk kaartje leest leerling A de vraag en leerling B antwoordt in een volledige zin.",
            "Bij het volgende kaartje wisselen de rollen."
          ],
          differentiation: "Laat leerlingen aan het eind één sterk antwoord klassikaal delen.",
          teacherTip: "Zeg expliciet dat korte éénwoordantwoorden niet genoeg zijn; zo borg je de taalopbrengst.",
          keywords: ["groep 5/6", "vraag en antwoord", "spreken", "luisteren", "formuliering"]
        }),
        taalDocTask(GROUP_56, {
          key: "schrijfronde-met-stopplaatsen",
          visual: "stations",
          visualHint: "Drie stopplaatsen helpen leerlingen een korte tekst in logische delen op te bouwen.",
          title: "Schrijfronde met stopplaatsen",
          summary: "Leerlingen schrijven een korte tekst in drie logische stappen: begin, midden en slot.",
          duration: "10-12 min",
          setup: "Maak drie stopplaatsen: begin, midden en slot.",
          goal: "Schrijven, tekstopbouw en taalbeschouwing actief inoefenen.",
          movementFocus: "Tussen stopplaatsen lopen en per plek één nieuw deel van de tekst toevoegen.",
          materials: ["Papier of werkblad"],
          steps: [
            "Leerlingen starten bij de plek begin en schrijven daar de eerste zin of het eerste deelidee.",
            "Daarna lopen ze naar midden en voegen daar vervolgzin of vervolgzinnen toe.",
            "Bij slot schrijven ze een passende afronding.",
            "Bespreek kort hoe de tekst nu is opgebouwd."
          ],
          differentiation: "Gebruik een beschrijving, instructie of mini-verhaal als tekstsoort.",
          teacherTip: "Laat leerlingen voor elke stopplaats eerst mondeling zeggen wat ze willen schrijven; dat houdt de tekstlijn helder.",
          keywords: ["groep 5/6", "schrijven", "tekstopbouw", "begin midden slot", "stopplaatsen"]
        }),
        taalDocTask(GROUP_78, {
          key: "wandel-en-vat-samen",
          visual: "path",
          visualHint: "Tweetallen lopen een vaste route terwijl één leerling de tekst samenvat en de ander aanvult.",
          title: "Wandel en vat samen",
          summary: "Leerlingen oefenen kernachtig samenvatten in spreektaal tijdens een korte looproute.",
          duration: "10 min",
          setup: "Gebruik een gelezen tekst of filmpje en spreek een vaste route af.",
          goal: "Samenvatten, spreken en luisteren actief inoefenen.",
          movementFocus: "Rustig lopen, kernachtig samenvatten en daarna aanvullen of controleren.",
          materials: ["Geen extra materiaal", "Eventueel samenvatkaartje"],
          steps: [
            "Leerlingen lopen in tweetallen een vaste route.",
            "Leerling A vat de tekst in maximaal drie zinnen samen.",
            "Leerling B luistert en vult aan met wat nog ontbreekt.",
            "Daarna wisselen de rollen met een tweede tekst of alinea."
          ],
          differentiation: "Geef een vaste samenvatstructuur: onderwerp, belangrijkste informatie en conclusie.",
          teacherTip: "Zet vooraf een maximum aan het aantal zinnen; dan blijft de samenvatting echt kernachtig.",
          keywords: ["groep 7/8", "samenvatten", "spreken", "luisteren", "wandelroute"]
        }),
        taalDocTask(GROUP_78, {
          key: "interviewcarrousel",
          visual: "line",
          visualHint: "Twee rijen tegenover elkaar maken vragen stellen, antwoorden en doorschuiven direct overzichtelijk.",
          title: "Interviewcarrousel",
          summary: "Leerlingen oefenen vragen stellen en doorvragen in een carrousel met steeds nieuwe gesprekspartners.",
          duration: "10-15 min",
          setup: "Laat leerlingen in twee rijen tegenover elkaar staan en maak een set interviewvragen klaar.",
          goal: "Mondeling taalonderwijs, luisteren en spreken oefenen.",
          movementFocus: "Kort antwoorden, doorvragen en na elke ronde één plek doorschuiven.",
          materials: ["Vraagkaartjes"],
          steps: [
            "Laat leerlingen in twee rijen tegenover elkaar staan.",
            "De ene rij stelt een vraag en de andere rij antwoordt.",
            "Na één minuut schuift één rij een plek door.",
            "Herhaal dit met nieuwe vragen of vervolgvragen."
          ],
          differentiation: "Werk rond een thema, boek of zaakvakonderwerp voor meer inhoudelijke diepgang.",
          teacherTip: "Model eerst hoe een goede vervolg- of doorvraag klinkt; dat tilt het gesprek meteen omhoog.",
          keywords: ["groep 7/8", "interview", "doorvragen", "spreken", "luisteren"]
        }),
        taalDocTask(GROUP_78, {
          key: "schrijfposten",
          visual: "stations",
          visualHint: "Verschillende schrijfposten helpen leerlingen doel, publiek, kern en slot in een compacte tekstopzet te ordenen.",
          title: "Schrijfposten",
          summary: "Leerlingen bouwen een korte tekstopzet op door langs schrijfposten met een eigen functie te bewegen.",
          duration: "10-15 min",
          setup: "Maak 3 of 4 posten zoals doel, publiek, kern en slot.",
          goal: "Schrijven, tekstopbouw en taalbeschouwing doelgericht oefenen.",
          movementFocus: "Van schrijfpost naar schrijfpost lopen en per post een ander tekstonderdeel bepalen.",
          materials: ["Werkblad of schrijfkaart"],
          steps: [
            "Leerlingen starten bij de eerste post en noteren daar het doel van hun tekst.",
            "Bij de volgende post bepalen zij voor wie de tekst is.",
            "Bij kern en slot schrijven zij steekwoorden of zinnen.",
            "Aan het eind hebben zij een compacte tekstopzet."
          ],
          differentiation: "Gebruik verschillende tekstsoorten, zoals betoog, uitleg, verslag of e-mail.",
          teacherTip: "Laat leerlingen hun tekstdoel steeds hardop uitspreken; dat maakt de keuzes bij de andere posten beter.",
          keywords: ["groep 7/8", "schrijven", "tekstopbouw", "doel en publiek", "schrijfposten"]
        })
      ],
      bewegend: [
        taalDocTask(GROUP_34, {
          key: "zinnenstraat",
          visual: "line",
          visualHint: "Losse woordkaartjes maken de opbouw van een zin letterlijk zichtbaar op de vloer.",
          title: "Zinnenstraat",
          summary: "Leerlingen voelen en zien hoe een zin is opgebouwd door woorden op volgorde in de ruimte te plaatsen.",
          duration: "10 min",
          setup: "Schrijf losse woordkaartjes van eenvoudige zinnen.",
          goal: "Zinsvorming, woordvolgorde en taalbeschouwing concreet maken.",
          movementFocus: "Op de juiste plek gaan staan en de zin daarna samen hardop lezen.",
          materials: ["Woordkaartjes"],
          steps: [
            "Geef enkele leerlingen elk een woordkaartje, bijvoorbeeld ik, zie, een en kat.",
            "De leerlingen gaan in de goede volgorde naast elkaar staan.",
            "Lees de zin samen hardop.",
            "Verwissel daarna bewust twee woorden en bespreek wat er misgaat."
          ],
          differentiation: "Laat leerlingen ontbrekende woorden toevoegen of twee zinnen vergelijken.",
          teacherTip: "Gebruik eerst korte, heldere zinnen; zo zien leerlingen sneller wat woordvolgorde doet.",
          keywords: ["groep 3/4", "zinsvorming", "woordvolgorde", "taalbeschouwing", "zin"]
        }),
        taalDocTask(GROUP_34, {
          key: "verhaalpad-drie-stappen",
          visual: "path",
          visualHint: "Drie stapplaatsen in het lokaal helpen leerlingen gebeurtenissen ordenen in begin, midden en einde.",
          title: "Verhaalpad met drie stappen",
          summary: "Leerlingen koppelen gebeurtenissen uit een verhaal aan begin, midden of einde en gebruiken die plekken als vertelsteun.",
          duration: "10 min",
          setup: "Maak drie plekken in het lokaal: begin, midden en einde.",
          goal: "Luisteren, navertellen en verhaalopbouw begrijpen.",
          movementFocus: "Naar een stapplaats lopen en daar verwoorden waarom een gebeurtenis bij dat deel van het verhaal hoort.",
          materials: ["Drie kaartjes of vellen papier"],
          steps: [
            "Vertel of lees een kort verhaal.",
            "Laat leerlingen naar begin, midden of einde lopen als jij een gebeurtenis noemt.",
            "Bespreek samen waarom die gebeurtenis op die plek hoort.",
            "Laat daarna een paar leerlingen het hele verhaal navertellen met de drie stapplaatsen als steun."
          ],
          differentiation: "Gebruik prentenboeken of actuele themateksten voor extra herkenning.",
          teacherTip: "Noem eerst heel duidelijke gebeurtenissen en maak de keuze daarna pas subtieler.",
          keywords: ["groep 3/4", "verhaalopbouw", "navertellen", "begin midden einde", "luisteren"]
        }),
        taalDocTask(GROUP_34, {
          key: "woordveld-in-de-ruimte",
          visual: "corners",
          visualHint: "Vier themahoeken helpen leerlingen woorden betekenisvol ordenen en categoriseren.",
          title: "Woordveld in de ruimte",
          summary: "Leerlingen plaatsen woorden in de juiste themacategorie en bouwen zo samen een concreet woordveld op.",
          duration: "10-15 min",
          setup: "Kies een thema en vier categorieën, bijvoorbeeld dieren, spullen, plekken en acties.",
          goal: "Woordenschat, categoriseren en taalbeschouwing betekenisvol oefenen.",
          movementFocus: "Naar een categoriehoek lopen en die keuze mondeling verwoorden.",
          materials: ["Woordkaartjes", "Of alleen stemgebruik"],
          steps: [
            "Maak in vier hoeken van het lokaal een categorie zichtbaar.",
            "Noem een woord of geef een kaartje aan een leerling.",
            "De leerling loopt naar de juiste categoriehoek.",
            "Bespreek steeds kort waarom het woord daar past."
          ],
          differentiation: "Laat leerlingen zelf woorden uit het thema toevoegen.",
          teacherTip: "Gebruik eerst woorden die duidelijk bij één categorie horen en voeg daarna twijfelgevallen toe.",
          keywords: ["groep 3/4", "woordveld", "categoriseren", "woordenschat", "thema"]
        }),
        taalDocTask(GROUP_56, {
          key: "alinea-opstelling",
          visual: "line",
          visualHint: "Kaarten voor inleiding, kern en slot maken de bouw van een tekst zichtbaar in de ruimte.",
          title: "Alinea-opstelling",
          summary: "Leerlingen zien dat een tekst uit delen met een eigen functie bestaat en plaatsen ideeën op de juiste plek.",
          duration: "10 min",
          setup: "Maak kaartjes met inleiding, kern en slot of met losse alinea's.",
          goal: "Tekststructuur, schrijven en lezen zichtbaar maken.",
          movementFocus: "Op de juiste plek in de tekstlijn gaan staan en daarna de functie van dat deel benoemen.",
          materials: ["Kaartjes"],
          steps: [
            "Geef drie leerlingen de kaartjes inleiding, kern en slot.",
            "Laat hen in de goede volgorde gaan staan.",
            "Bespreek welke informatie bij elk deel hoort.",
            "Laat daarna andere leerlingen zinnen of ideeën bij de juiste plek brengen."
          ],
          differentiation: "Gebruik ook informatieve teksten met kopjes als extra uitwerking.",
          teacherTip: "Laat leerlingen niet alleen de volgorde noemen, maar ook hardop zeggen wat de taak van elk deel is.",
          keywords: ["groep 5/6", "alinea", "tekststructuur", "inleiding kern slot", "schrijven"]
        }),
        taalDocTask(GROUP_56, {
          key: "woordweb-op-de-vloer",
          visual: "circle",
          visualHint: "Een kernwoord in het midden en woorden eromheen maken semantische relaties zichtbaar.",
          title: "Woordweb op de vloer",
          summary: "Leerlingen bouwen samen een mondeling woordweb op rond een themawoord.",
          duration: "10 min",
          setup: "Leg in het midden een kernwoord neer.",
          goal: "Woordenschat, semantische relaties en thematisch werken zichtbaar maken.",
          movementFocus: "Woorden rond een kernwoord plaatsen en hardop benoemen welke relatie ze hebben.",
          materials: ["Woordkaartjes", "Of post-its"],
          steps: [
            "Kies een kernwoord uit het thema, bijvoorbeeld vulkaan of uitvinding.",
            "Leerlingen krijgen om de beurt een woordkaartje en leggen of staan het op de juiste plek rond het kernwoord.",
            "Bespreek of het woord hoort bij eigenschap, onderdeel, handeling of voorbeeld.",
            "Bouw zo samen een mondeling woordweb."
          ],
          differentiation: "Laat leerlingen zelf ontbrekende woorden toevoegen of relatiestippen benoemen.",
          teacherTip: "Vraag steeds expliciet wat de relatie met het kernwoord is; dan blijft het woordweb inhoudelijk sterk.",
          keywords: ["groep 5/6", "woordweb", "woordenschat", "semantische relaties", "thema"]
        }),
        taalDocTask(GROUP_56, {
          key: "signaalwoorden-route",
          visual: "corners",
          visualHint: "Signaalwoorden worden gekoppeld aan de juiste tekstverbandplek in het lokaal.",
          title: "Signaalwoorden-route",
          summary: "Leerlingen lopen met een signaalwoord naar het juiste tekstverband en gebruiken het daarna in een zin.",
          duration: "10 min",
          setup: "Maak plekken in het lokaal voor tijd, oorzaak-gevolg, opsomming en tegenstelling.",
          goal: "Lezen, schrijven, tekstverbanden en taalbeschouwing oefenen.",
          movementFocus: "Naar de juiste tekstverbandplek lopen en hardop uitleggen waarom dat signaalwoord daar hoort.",
          materials: ["Kaartjes met signaalwoorden"],
          steps: [
            "Geef een leerling een kaartje met een signaalwoord zoals daarna, omdat, maar of ten eerste.",
            "De leerling loopt naar de juiste tekstverbandplek.",
            "Laat hem of haar hardop uitleggen waarom het signaalwoord daar hoort.",
            "Gebruik daarna het woord in een voorbeeldzin."
          ],
          differentiation: "Laat tweetallen zelf een zin maken met het signaalwoord als verdiepingsstap.",
          teacherTip: "Houd de vier verbanden zichtbaar in dezelfde taal als je in de methode gebruikt.",
          keywords: ["groep 5/6", "signaalwoorden", "tekstverbanden", "taalbeschouwing", "schrijven"]
        }),
        taalDocTask(GROUP_78, {
          key: "argumentenlijn",
          visual: "line",
          visualHint: "Een lijn met standpunt, argument en voorbeeld maakt de opbouw van een overtuigende redenering zichtbaar.",
          title: "Argumentenlijn",
          summary: "Leerlingen ordenen standpunt, argumenten en voorbeelden fysiek op een lijn.",
          duration: "10-15 min",
          setup: "Maak kaartjes met standpunt, argumenten en voorbeelden.",
          goal: "Argumenteren, schrijven en spreken zichtbaar structureren.",
          movementFocus: "De juiste plaats in de redenering innemen en toelichten waarom dat onderdeel daar hoort.",
          materials: ["Kaartjes"],
          steps: [
            "Leg op de vloer een volgorde van drie plekken: standpunt, argument en voorbeeld.",
            "Leerlingen krijgen kaartjes en gaan op de juiste plek staan.",
            "Bespreek samen hoe een overtuigende redenering is opgebouwd.",
            "Laat daarna kleine groepjes zelf een nieuwe argumentenlijn maken."
          ],
          differentiation: "Laat leerlingen sterke en zwakke argumenten vergelijken in een extra ronde.",
          teacherTip: "Vraag steeds wat er misgaat als een voorbeeld voor het standpunt komt; zo zien leerlingen de structuur beter.",
          keywords: ["groep 7/8", "argumenteren", "standpunt", "voorbeeld", "redenering"]
        }),
        taalDocTask(GROUP_78, {
          key: "tekstsoorten-hoeken",
          visual: "corners",
          visualHint: "Vier hoeken maken verschillen tussen tekstsoorten zichtbaar via fragmenten en kenmerken.",
          title: "Tekstsoorten-hoeken",
          summary: "Leerlingen koppelen fragmenten aan de juiste tekstsoort en benoemen daarna de kenmerken.",
          duration: "10 min",
          setup: "Label hoeken met bijvoorbeeld verhaal, instructie, nieuwsbericht en meningstekst.",
          goal: "Lezen, schrijven en taalbeschouwing rond tekstsoorten oefenen.",
          movementFocus: "Naar een tekstsoorthoek lopen en vervolgens kenmerken van die tekstsoort benoemen.",
          materials: ["Tekstkaartjes of korte fragmenten"],
          steps: [
            "Lees een fragment of geef een kaartje aan een leerling.",
            "De leerling loopt naar de hoek van de passende tekstsoort.",
            "Bespreek welke kenmerken daarbij horen.",
            "Vergelijk twee tekstsoorten kort met elkaar."
          ],
          differentiation: "Laat leerlingen zelf tekstkenmerken toevoegen bij de juiste hoek.",
          teacherTip: "Gebruik fragmenten die nét niet te makkelijk zijn; dan moeten leerlingen echt op kenmerken letten.",
          keywords: ["groep 7/8", "tekstsoorten", "taalbeschouwing", "lezen", "schrijven"]
        }),
        taalDocTask(GROUP_78, {
          key: "presentatiepad",
          visual: "path",
          visualHint: "Vaste stapplaatsen laten leerlingen een presentatie logisch en fysiek doorlopen.",
          title: "Presentatiepad",
          summary: "Leerlingen ervaren de opbouw van een mondelinge presentatie door langs vaste stapplaatsen te lopen.",
          duration: "10 minuten",
          setup: "Maak drie tot vier stapplaatsen: opening, kernpunt 1, kernpunt 2 en afsluiting.",
          goal: "Presenteren, mondeling taalonderwijs en structureren concreet oefenen.",
          movementFocus: "Langs de presentatievolgorde lopen en per plek hardop het juiste onderdeel uitspreken.",
          materials: ["Vloerkaartjes"],
          steps: [
            "Leerlingen lopen tijdens het oefenen langs de vaste stapplaatsen.",
            "Bij elke plek spreken zij het bijbehorende deel van hun presentatie uit.",
            "Door de route ervaren zij de opbouw van hun verhaal.",
            "Na afloop geven maatjes feedback op duidelijkheid en volgorde."
          ],
          differentiation: "Gebruik ook één extra plek voor voorbeeld of bron als verdieping.",
          teacherTip: "Laat leerlingen hun presentatie eerst met steekwoorden oefenen en pas daarna zonder steun.",
          keywords: ["groep 7/8", "presenteren", "mondeling taalonderwijs", "opbouw", "presentatiepad"]
        })
      ]
    },
    spelling: {
      energizers: [
        spellingDocTask(GROUP_34, {
          key: "klap-stamp-of-stil",
          visual: "jump",
          visualHint: "Een snelle klankreactie waarbij leerlingen klappen, stampen of juist stil blijven.",
          title: "Klap, stamp of stil",
          summary: "Leerlingen reageren direct op een klank, letter of kort woord en herhalen zo auditieve analyse in beweging.",
          duration: "3-5 min",
          setup: "Geen voorbereiding. Laat leerlingen naast hun tafel staan met genoeg ruimte om kleine bewegingen te maken.",
          goal: "Klank-tekenkoppeling, auditieve analyse en luisterwoorden snel herhalen.",
          movementFocus: "Kleine bewegingen koppelen aan de plek waar de klank in het woord wordt gehoord.",
          materials: ["Geen extra materiaal"],
          steps: [
            "Laat leerlingen naast hun tafel staan en spreek de drie reacties af: klappen, stampen of stil blijven.",
            "Noem een klank, letter of kort woord, bijvoorbeeld maan, sok, vis, raam of pen.",
            "Leerlingen klappen als de klank vooraan staat, stampen als die achteraan staat en blijven stil als die niet voorkomt.",
            "Bespreek na enkele woorden kort waarom de gekozen reactie klopt."
          ],
          differentiation: "Maak het moeilijker met middenklanken of tweetekenklanken zoals oe, eu en ie.",
          teacherTip: "Houd het tempo hoog en kies woorden uit de les van die week, zodat de overgang kort maar inhoudelijk sterk blijft.",
          keywords: ["groep 3/4", "klank", "auditieve analyse", "luisterwoorden", "energizer"]
        }),
        spellingDocTask(GROUP_34, {
          key: "waar-hoor-je-de-klank",
          visual: "jump",
          visualHint: "Drie vaste bewegingen maken de plaats van een klank in een woord direct zichtbaar.",
          title: "Waar hoor je de klank?",
          summary: "Leerlingen laten met een beweging zien of een afgesproken klank vooraan, in het midden of achteraan staat.",
          duration: "5 min",
          setup: "Geen voorbereiding. Spreek drie duidelijke bewegingen af voor vooraan, midden en achteraan.",
          goal: "Begin-, midden- en eindklank herkennen in woorden uit groep 3 en 4.",
          movementFocus: "Snelle arm- en lichaamssignalen koppelen aan de plek van de klank in het woord.",
          materials: ["Geen extra materiaal"],
          steps: [
            "Spreek drie bewegingen af: handen omhoog voor vooraan, handen op schouders voor midden en handen op knieën voor achteraan.",
            "Noem een woord, bijvoorbeeld boom, vis, teen of sok.",
            "Laat leerlingen met hun beweging zien waar ze de afgesproken klank horen.",
            "Bespreek steeds één of twee voorbeelden kort na."
          ],
          differentiation: "Laat leerlingen zelf woorden bedenken bij een gekozen klank als verlenging.",
          teacherTip: "Gebruik steeds dezelfde klank in een korte reeks; zo wordt het vergelijken van woorden eenvoudiger.",
          keywords: ["groep 3/4", "beginklank", "middenklank", "eindklank", "klankpositie"]
        }),
        spellingDocTask(GROUP_34, {
          key: "letterflits-in-beweging",
          visual: "jump",
          visualHint: "Leerlingen joggen op de plaats en reageren met een passende beweging op korte, lange en tweetekenklanken.",
          title: "Letterflits in beweging",
          summary: "Een korte beweegflits die letters, klanken en spellingpatronen in hoog tempo activeert.",
          duration: "3-5 min",
          setup: "Geen voorbereiding of leg eventueel een paar letterkaartjes klaar.",
          goal: "Letterherkenning, hakken en plakken en het herkennen van spellingpatronen versnellen.",
          movementFocus: "Joggen op de plaats en per klanktype direct een vaste beweging maken.",
          materials: ["Geen extra materiaal", "Eventueel letterkaartjes"],
          steps: [
            "Laat leerlingen rustig op de plaats joggen.",
            "Flits een letter of noem een woord.",
            "Bij een korte klank maken leerlingen een kleine sprong, bij een lange klank strekken ze zich uit en bij een tweetekenklank draaien ze één keer om hun as.",
            "Sluit af met twee voorbeeldwoorden die samen hardop gespeld worden."
          ],
          differentiation: "Gebruik in groep 3 alleen luisterwoorden en voeg in groep 4 woorden toe met aa, ee, oo, ie, oe en eu.",
          teacherTip: "Kies een vast tempo en wissel de woorden snel af; zo blijft het echt een energizer en geen lange instructie.",
          keywords: ["groep 3/4", "letterherkenning", "korte klank", "lange klank", "tweetekenklank"]
        }),
        spellingDocTask(GROUP_56, {
          key: "waar-of-niet-waar-spelling",
          visual: "jump",
          visualHint: "Leerlingen springen of hurken bij korte stellingen over regels en woordbeelden.",
          title: "Waar of niet waar - spelling",
          summary: "Een korte check waarbij leerlingen direct reageren op spellingstellingen en daarna hun keuze toelichten.",
          duration: "5 min",
          setup: "Geen voorbereiding. Laat leerlingen naast hun tafel staan met ruimte om te springen of te hurken.",
          goal: "Regels en woordbeelden rond lettergroepwoorden, weetwoorden en regelwoorden snel ophalen.",
          movementFocus: "Direct reageren met springen of hurken en daarna kort uitleggen welke regel geldt.",
          materials: ["Geen extra materiaal"],
          steps: [
            "Laat leerlingen naast hun tafel staan en spreek af: waar is springen, niet waar is hurken.",
            "Noem een stelling, bijvoorbeeld: in apen hoor je een lange klank en schrijf je één klinker.",
            "Laat leerlingen direct reageren met springen of hurken.",
            "Bespreek kort waarom het antwoord goed of fout is."
          ],
          differentiation: "Laat leerlingen zelf een stelling bedenken voor een maatje of een volgende ronde.",
          teacherTip: "Kies expres ook één veelgemaakte fout, zodat je meteen ziet welke regel nog extra uitleg nodig heeft.",
          keywords: ["groep 5/6", "lettergroepwoorden", "weetwoorden", "regelwoorden", "stelling"]
        }),
        spellingDocTask(GROUP_56, {
          key: "hoeken-kiezen-bij-spelling",
          visual: "corners",
          visualHint: "Leerlingen lopen naar de hoek van de juiste spellingcategorie en verwoorden daarna hun keuze.",
          title: "Hoeken kiezen bij spelling",
          summary: "Vier categoriehoeken helpen leerlingen om woorden snel te sorteren en de Staal-categorieen te benoemen.",
          duration: "5-7 min",
          setup: "Maak vier hoeken: luisterwoord, lettergroepwoord, regelwoord en weetwoord.",
          goal: "Spellingcategorieen uit Staal 2 herkennen en actief ophalen.",
          movementFocus: "Lopen naar de juiste hoek en mondeling verklaren waarom het woord in die categorie past.",
          materials: ["Vier hoekkaarten"],
          steps: [
            "Richt vier hoeken in: luisterwoord, lettergroepwoord, regelwoord en weetwoord.",
            "Noem een woord, bijvoorbeeld bomen, kippen, geit of circus.",
            "Laat leerlingen naar de hoek lopen die volgens hen past.",
            "Vraag steeds één leerling om de keuze kort uit te leggen."
          ],
          differentiation: "Gebruik minder hoeken als een categorie nog nieuw is en bouw daarna uit naar alle vier.",
          teacherTip: "Houd een vast rijtje woorden per categorie achter de hand, zodat je snel kunt schakelen als de klas extra voorbeelden nodig heeft.",
          keywords: ["groep 5/6", "spellingcategorieen", "staal 2", "hoeken", "lettergroepwoord", "weetwoord"]
        }),
        spellingDocTask(GROUP_56, {
          key: "spellingsprint",
          visual: "jump",
          visualHint: "Vaste gebaren koppelen weetwoorden, regelwoorden en lettergroepwoorden aan een korte beweegstart.",
          title: "Spellingsprint",
          summary: "Leerlingen reageren met een gebaar op een woord of categorie en halen zo snel woordbeelden en regels op.",
          duration: "3-5 min",
          setup: "Geen voorbereiding. Spreek de drie gebaren af voordat je start.",
          goal: "Woordbeeld en regelverinnerlijking in een heel korte bewegende herhaalronde activeren.",
          movementFocus: "Kleine, snelle gebaren koppelen aan categorieen en woordbeelden.",
          materials: ["Geen extra materiaal"],
          steps: [
            "Laat leerlingen op hun plek bewegen, bijvoorbeeld joggen of rustig stappen.",
            "Noem een woord of categorie.",
            "Bij een weetwoord tikken leerlingen hun hoofd aan, bij een regelwoord steken ze één vinger op en bij een lettergroepwoord maken ze een grote stap.",
            "Eindig met twee woorden die samen hardop gespeld worden."
          ],
          differentiation: "Voeg leenwoorden toe als extra uitdaging of laat leerlingen na afloop zelf een woord aan de juiste beweging koppelen.",
          teacherTip: "Gebruik woorden uit de categorie van de week; dan werkt deze energizer ook meteen als opfrisser van de les.",
          keywords: ["groep 5/6", "woordbeeld", "regelwoord", "weetwoord", "herhaalstart"]
        }),
        spellingDocTask(GROUP_78, {
          key: "waar-of-niet-waar-werkwoorden",
          visual: "jump",
          visualHint: "Een korte bovenbouwcheck met staan of hurken bij stellingen over werkwoordspelling.",
          title: "Waar of niet waar - werkwoorden",
          summary: "Leerlingen reageren lichamelijk op stellingen over werkwoordspelling en geven daarna kort de regel.",
          duration: "5 min",
          setup: "Geen voorbereiding. Laat leerlingen verspreid naast hun tafel staan.",
          goal: "Persoonsvorm, onderwerp en tijd herkennen als basis voor werkwoordspelling.",
          movementFocus: "Direct staan of hurken en daarna de regel kort hardop maken.",
          materials: ["Geen extra materiaal"],
          steps: [
            "Noem een stelling, zoals: hij vindt schrijf je met dt of loop jij eindigt zonder t.",
            "Waar betekent staan en niet waar betekent hurken.",
            "Laat leerlingen direct reageren.",
            "Vraag steeds één leerling om de juiste regel kort uit te leggen."
          ],
          differentiation: "Voeg zinnen met leestekens of hoofdletters in directe rede toe voor extra uitdaging.",
          teacherTip: "Wissel makkelijke en lastige stellingen af; zo blijft de hele klas actief meedenken.",
          keywords: ["groep 7/8", "werkwoordspelling", "persoonsvorm", "onderwerp", "tegenwoordig tijd"]
        }),
        spellingDocTask(GROUP_78, {
          key: "vier-hoeken-categorie-of-regel",
          visual: "corners",
          visualHint: "Vier hoeken laten leerlingen snel kiezen tussen werkwoordspelling, weetwoorden, leestekens en leenwoorden.",
          title: "Vier hoeken - categorie of regel",
          summary: "Leerlingen sorteren woorden en zinnen al lopend naar de juiste categorie of regelhoek.",
          duration: "5-7 min",
          setup: "Label vier hoeken, bijvoorbeeld werkwoordspelling, weetwoord, leesteken en leenwoord.",
          goal: "Categorieherkenning en transfer naar zinnen en eigen schrijfwerk oefenen.",
          movementFocus: "Kiezen, lopen en daarna kort verwoorden welke regel of categorie past.",
          materials: ["Vier hoekkaarten"],
          steps: [
            "Label vier hoeken met werkwoordspelling, weetwoord, leesteken en leenwoord.",
            "Noem een woord of zin, bijvoorbeeld gebeurde, cappuccino of 'Kom je?', vroeg Noor.",
            "Laat leerlingen naar de hoek lopen die het best past.",
            "Bespreek per ronde één voorbeeld kort na."
          ],
          differentiation: "Gebruik ook zinnen uit eigen schrijfwerk om de transfer groter te maken.",
          teacherTip: "Kies voorbeelden die echt twijfel oproepen; dan levert de nabespreking het meeste op.",
          keywords: ["groep 7/8", "werkwoordspelling", "leestekens", "leenwoorden", "hoeken"]
        }),
        spellingDocTask(GROUP_78, {
          key: "spellingscan-in-beweging",
          visual: "jump",
          visualHint: "Leerlingen lopen op de plaats en reageren op zinnen die goed of fout gespeld kunnen zijn.",
          title: "Spellingscan in beweging",
          summary: "Een snelle bewegende revisiecheck waarbij leerlingen fouten in zinnen signaleren en verbeteren.",
          duration: "3-5 min",
          setup: "Geen voorbereiding. Laat leerlingen rustig op de plaats bewegen.",
          goal: "Spellingbewustzijn en revisievaardigheid in een korte check activeren.",
          movementFocus: "Licht bewegen op de plaats en direct een foutsignaal of goed-signaal geven.",
          materials: ["Geen extra materiaal"],
          steps: [
            "Laat leerlingen rustig op de plaats lopen of stappen.",
            "Lees een zin voor met mogelijk een fout.",
            "Als de zin goed is, steken leerlingen beide handen op. Zien ze een fout, dan tikken ze hun denkbeeldige rode pen aan.",
            "Vraag daarna naar de verbetering."
          ],
          differentiation: "Laat leerlingen later zelf zinnen uit het thema of eigen werk aanleveren voor nieuwe rondes.",
          teacherTip: "Lees de zin maar één keer voor; zo stimuleer je echt controleren op gehoor en taalgevoel.",
          keywords: ["groep 7/8", "revisie", "spellingbewustzijn", "zinnen", "controle"]
        })
      ],
      tijdens: [
        spellingDocTask(GROUP_34, {
          key: "loopdictee-luisterwoorden",
          visual: "dictation",
          visualHint: "Tweetallen halen luisterwoorden op, hakken de klanken en schrijven het woord daarna samen op.",
          title: "Loopdictee luisterwoorden",
          summary: "Een actief spellingdictee waarbij tweetallen woorden ophalen, hakken en meteen correct opschrijven.",
          duration: "10 min",
          setup: "Hang 6 tot 8 woordkaartjes in het lokaal en leg per tweetal schrijfmateriaal klaar.",
          goal: "Luisterwoorden actief inoefenen met hakken, plakken en correct opschrijven.",
          movementFocus: "Lopen, onthouden, terugkeren en daarna samen de klanken uitspreken en schrijven.",
          materials: ["Woordkaartjes", "Potlood", "Schrift of wisbordje"],
          steps: [
            "Werk in tweetallen.",
            "Eén leerling loopt naar een woordkaartje, leest of onthoudt het woord en loopt terug.",
            "Samen hakken de leerlingen het woord, zeggen de klanken en schrijven het op.",
            "Daarna wisselen de rollen."
          ],
          differentiation: "Laat sterke spellers na het opschrijven meteen een zin maken met het woord.",
          teacherTip: "Laat leerlingen eerst hardop hakken voordat er geschreven wordt; zo blijft de auditieve analyse centraal.",
          keywords: ["groep 3/4", "loopdictee", "luisterwoorden", "hakken", "plakken"]
        }),
        spellingDocTask(GROUP_34, {
          key: "woordkaartjes-estafette",
          visual: "relay",
          visualHint: "Teams halen om de beurt een woordkaartje op en schrijven samen het woord van de categorie van de week.",
          title: "Woordkaartjes-estafette",
          summary: "Kleine teams oefenen veel woorden in tempo en koppelen beweging aan hardop redeneren over spelling.",
          duration: "10-12 min",
          setup: "Maak kaartjes met woorden uit de categorie van de week en leg schrijfmateriaal klaar per team.",
          goal: "Veel oefenherhaling binnen de categorie van de week in Staal 2.",
          movementFocus: "Korte estafetteloopjes afwisselen met samen hardop analyseren en schrijven.",
          materials: ["Kaartjes", "Schrift of wisbordjes"],
          steps: [
            "Verdeel de klas in kleine teams.",
            "De eerste leerling haalt een kaartje op, leest het woord hardop en legt uit wat hij of zij hoort.",
            "Het team schrijft het woord op.",
            "Daarna haalt de volgende leerling een nieuw kaartje."
          ],
          differentiation: "Geef zwakkere leerlingen kaartjes met een plaatje erbij of kortere woorden uit dezelfde categorie.",
          teacherTip: "Laat ieder team steeds eerst de categorie noemen voordat het woord wordt opgeschreven.",
          keywords: ["groep 3/4", "estafette", "categorie van de week", "staal 2", "woordkaartjes"]
        }),
        spellingDocTask(GROUP_34, {
          key: "zoek-je-spellingmaatje",
          visual: "circle",
          visualHint: "Leerlingen lopen rond met een woordkaartje en zoeken een groepje met hetzelfde spellingpatroon.",
          title: "Zoek je spellingmaatje",
          summary: "Leerlingen vergelijken woordbeelden al lopend en leggen daarna uit welk spellingpatroon ze delen.",
          duration: "10 min",
          setup: "Geef iedere leerling een kaartje met een woord of plaatje uit een duidelijk spellingpatroon.",
          goal: "Woorden sorteren op klank of spellingpatroon en daarover praten met een maatje.",
          movementFocus: "Rondlopen, vergelijken en pas stoppen als je samen kunt uitleggen waarom woorden bij elkaar horen.",
          materials: ["Kaartjes met woorden of plaatjes"],
          steps: [
            "Geef iedere leerling een woordkaartje.",
            "Laat leerlingen door de klas lopen en iemand zoeken met hetzelfde patroon, bijvoorbeeld korte klank, lange klank of tweetekenklank.",
            "Als een duo of groepje denkt bij elkaar te horen, leggen ze uit waarom.",
            "Controleer klassikaal enkele voorbeelden."
          ],
          differentiation: "Werk eerst met twee duidelijke categorieen en voeg later een derde patroon toe.",
          teacherTip: "Laat leerlingen pas blijven staan als zij hun patroon in woorden kunnen uitleggen.",
          keywords: ["groep 3/4", "spellingmaatje", "korte klank", "lange klank", "tweetekenklank"]
        }),
        spellingDocTask(GROUP_56, {
          key: "loopdictee-categorie-van-de-week",
          visual: "dictation",
          visualHint: "Tweetallen halen woorden of zinnen op en benoemen bij het opschrijven meteen de regel of categorie.",
          title: "Loopdictee categorie van de week",
          summary: "Een actief loopdictee om de categorie van de week in woorden of zinnen correct toe te passen.",
          duration: "10-15 min",
          setup: "Hang 8 tot 10 woord- of zinstrippen op en leg per tweetal een schrijfplek klaar.",
          goal: "De centrale categorie van de week correct schrijven en uitleggen in context.",
          movementFocus: "Lopen, onthouden, samen schrijven en hardop de regel benoemen.",
          materials: ["Kaartjes", "Schrift of wisbordje"],
          steps: [
            "Werk in tweetallen.",
            "Eén leerling loopt naar een kaartje en leest het woord of de korte zin.",
            "Terug bij de tafel schrijft het tweetal het woord of de zin op en benoemt de regel.",
            "Daarna wisselen de rollen."
          ],
          differentiation: "Gebruik korte zinnen in plaats van losse woorden als je transfer naar schrijven wilt oefenen.",
          teacherTip: "Laat leerlingen na elke zin eerst samen de categorie of regel noemen; dan blijft het geen overschrijfoefening.",
          keywords: ["groep 5/6", "loopdictee", "categorie van de week", "regeluitleg", "context"]
        }),
        spellingDocTask(GROUP_56, {
          key: "categoriecircuit",
          visual: "stations",
          visualHint: "Korte spellingposten laten leerlingen in tempo oefenen met verschillende categorieen uit Staal 2.",
          title: "Categoriecircuit",
          summary: "Een actief circuit waarin leerlingen meerdere spellingcategorieen kort en afwisselend inoefenen.",
          duration: "10-15 min",
          setup: "Maak 4 tot 6 posten met verschillende categorieen en leg schrijfmateriaal klaar.",
          goal: "Luister-, lettergroep-, regel- en weetwoorden in afwisselende oefenvormen herhalen.",
          movementFocus: "Tussen posten lopen, kort werken en na een signaal doorwisselen.",
          materials: ["Postkaartjes", "Potlood", "Schrift"],
          steps: [
            "Zet in elk hoekje van het lokaal een post neer.",
            "Per post maken leerlingen 2 of 3 woorden of kiezen ze de goede spelling.",
            "Na twee minuten schuiven ze door.",
            "Sluit af met een korte nabespreking van lastige woorden."
          ],
          differentiation: "Laat sterke spellers op één post ook zelf een extra voorbeeld bedenken.",
          teacherTip: "Houd iedere post heel compact; zo blijft het tempo hoog en wordt de circuitvorm echt helpend.",
          keywords: ["groep 5/6", "circuit", "spellingcategorieen", "luisterwoorden", "weetwoorden"]
        }),
        spellingDocTask(GROUP_56, {
          key: "zoek-de-juiste-spellingpartner",
          visual: "circle",
          visualHint: "Leerlingen zoeken al lopend een woord, regel of categoriekaart die bij hun spellingkaart hoort.",
          title: "Zoek de juiste spellingpartner",
          summary: "Leerlingen vergelijken spellingvormen actief en leggen daarna uit waarom hun match klopt.",
          duration: "10 min",
          setup: "Maak kaartjes met correcte spellingen, categorieen en regeluitleg die bij elkaar horen.",
          goal: "Woordbeeld, regeluitleg en foutenanalyse verbinden in een actieve matchopdracht.",
          movementFocus: "Rondlopen, vergelijken en pas stoppen als de match ook inhoudelijk uitgelegd kan worden.",
          materials: ["Kaartjes"],
          steps: [
            "Geef iedere leerling één kaartje.",
            "De klas loopt rond en zoekt de partner of matchgroep die erbij hoort, bijvoorbeeld een woord en de juiste categorie.",
            "Als leerlingen denken dat hun kaarten bij elkaar horen, leggen ze dat aan elkaar uit.",
            "Controleer klassikaal enkele matches."
          ],
          differentiation: "Werk in trio's of matchgroepen met woord, categorie en uitleg als uitbreiding.",
          teacherTip: "Laat leerlingen pas verder zoeken als ze eerst hebben verteld waarom een kaart niet past; dat scherpt het denken.",
          keywords: ["groep 5/6", "spellingpartner", "woordbeeld", "regeluitleg", "foutenanalyse"]
        }),
        spellingDocTask(GROUP_78, {
          key: "loopdictee-werkwoordspelling",
          visual: "dictation",
          visualHint: "Tweetallen halen zinnen op met een ontbrekende of te controleren werkwoordsvorm en vullen die samen in.",
          title: "Loopdictee werkwoordspelling",
          summary: "Een bewegende werkvorm om werkwoordsvormen in zinnen actief te kiezen en meteen met de regel te onderbouwen.",
          duration: "10-15 min",
          setup: "Hang zinnen op waarin werkwoordsvormen ontbreken of gecontroleerd moeten worden.",
          goal: "Tegenwoordige tijd, verleden tijd en voltooid deelwoord actief toepassen in zinnen.",
          movementFocus: "Lopen, onthouden en daarna samen de juiste vorm kiezen en beargumenteren.",
          materials: ["Kaartjes", "Schrift of wisbordje"],
          steps: [
            "Werk in tweetallen.",
            "Eén leerling leest een zin aan de muur, bijvoorbeeld: Morgen ... hij de wedstrijd.",
            "Terug bij de tafel vullen de leerlingen de juiste vorm in en leggen de regel uit.",
            "Daarna wisselen ze."
          ],
          differentiation: "Gebruik ook zinnen met onderwerp achter de persoonsvorm voor extra uitdaging.",
          teacherTip: "Laat leerlingen eerst samen benoemen wat de persoonsvorm en de tijd zijn voordat ze schrijven.",
          keywords: ["groep 7/8", "werkwoordspelling", "loopdictee", "persoonsvorm", "voltooid deelwoord"]
        }),
        spellingDocTask(GROUP_78, {
          key: "leestekenroute",
          visual: "path",
          visualHint: "Een route langs korte tekststroken zonder leestekens dwingt leerlingen tot actief corrigeren en toelichten.",
          title: "Leestekenroute",
          summary: "Leerlingen lopen langs tekststroken, vullen leestekens in en verantwoorden daarna hun keuzes.",
          duration: "10 min",
          setup: "Hang korte zinnen of tekststroken op zonder leestekens en leg schrijfmateriaal klaar.",
          goal: "Punt, komma, vraagteken, uitroepteken, aanhalingstekens en dubbele punt bewust toepassen.",
          movementFocus: "Van strook naar strook lopen, kort observeren en daarna gericht noteren of bespreken.",
          materials: ["Tekststroken", "Potlood", "Schrift"],
          steps: [
            "Leerlingen lopen langs tekststroken.",
            "Per strook noteren ze welke leestekens ontbreken.",
            "Bij terugkomst bespreken ze waarom die leestekens daar horen.",
            "Laat twee stroken klassikaal corrigeren."
          ],
          differentiation: "Gebruik in groep 8 directe rede als extra moeilijkheid.",
          teacherTip: "Bespreek niet alleen welk leesteken past, maar ook welk leesteken juist niet past en waarom.",
          keywords: ["groep 7/8", "leestekens", "route", "directe rede", "correctie"]
        }),
        spellingDocTask(GROUP_78, {
          key: "spellingcircuit-bovenbouw",
          visual: "stations",
          visualHint: "Korte bovenbouwposten laten leerlingen rouleren tussen werkwoorden, weetwoorden, leenwoorden en leestekens.",
          title: "Spellingcircuit bovenbouw",
          summary: "Leerlingen oefenen verschillende bovenbouwonderdelen in een korte circuitvorm met veel herhaling.",
          duration: "10-15 min",
          setup: "Maak 4 of 5 korte opdrachtenposten en leg per post een schrijf- of controleblad klaar.",
          goal: "Werkwoorden, weetwoorden, leenwoorden en leestekens afwisselend herhalen.",
          movementFocus: "Tussen korte opdrachtenposten lopen en per post snel kiezen, verbeteren of uitleggen.",
          materials: ["Postkaartjes", "Schrift of wisbordje"],
          steps: [
            "Verdeel de klas over meerdere posten.",
            "Per post maken leerlingen een korte opdracht: kies de juiste spelling, verbeter een zin of verklaar de regel.",
            "Na twee of drie minuten schuiven ze door.",
            "Sluit af met een gezamenlijke foutenanalyse."
          ],
          differentiation: "Laat snelle leerlingen een extra controlevraag formuleren voor de volgende groep.",
          teacherTip: "Zorg dat per post maar één kernvaardigheid centraal staat; dat houdt het circuit overzichtelijk.",
          keywords: ["groep 7/8", "spellingcircuit", "werkwoorden", "leenwoorden", "leestekens"]
        })
      ],
      bewegend: [
        spellingDocTask(GROUP_34, {
          key: "hakkenpad-op-de-vloer",
          visual: "line",
          visualHint: "Een pad met vakken laat leerlingen per klank stappen en daarna het woord weer aan elkaar plakken.",
          title: "Hakkenpad op de vloer",
          summary: "Leerlingen stappen per klank over een vloervak en maken zo fonemen en woorden letterlijk zichtbaar.",
          duration: "10 min",
          setup: "Leg met hoepels of tape een pad met drie, vier of vijf vakken op de vloer.",
          goal: "Fonemisch bewustzijn, hakken en plakken en luisterwoorden concreet maken.",
          movementFocus: "Per klank in een vak stappen en daarna het woord weer vloeiend uitspreken.",
          materials: ["Hoepels of tape"],
          steps: [
            "Maak op de vloer een pad met drie, vier of vijf vakken.",
            "Noem een woord, bijvoorbeeld vis of bomen.",
            "Een leerling stapt per klank in een vak en zegt de klanken hardop.",
            "Daarna plakken de leerlingen het woord weer aan elkaar en schrijven het op."
          ],
          differentiation: "Gebruik in groep 4 ook woorden met twee medeklinkers of langere woorden.",
          teacherTip: "Laat leerlingen eerst hardop voorspellen hoeveel vakken ze nodig hebben; dat maakt het hakken bewuster.",
          keywords: ["groep 3/4", "fonemisch bewustzijn", "hakken", "plakken", "vloerpad"]
        }),
        spellingDocTask(GROUP_34, {
          key: "korte-klank-lange-stap",
          visual: "line",
          visualHint: "Twee kanten in het lokaal maken het verschil tussen korte en lange klanken direct zichtbaar.",
          title: "Korte klank, lange stap",
          summary: "Leerlingen kiezen lichamelijk tussen korte en lange klank en koppelen die keuze aan de spelling van het woord.",
          duration: "10 min",
          setup: "Maak twee kanten in het lokaal: korte klank en lange klank.",
          goal: "Het verschil tussen korte en lange klanken in open en gesloten lettergrepen begrijpen.",
          movementFocus: "Naar een kant lopen die past bij de klank en die keuze daarna toelichten.",
          materials: ["Eventueel twee kaartjes met de labels"],
          steps: [
            "Noem een woord, bijvoorbeeld zon, bomen, kippen of ramen.",
            "Laat leerlingen naar de kant lopen die past: korte klank of lange klank.",
            "Bespreek daarna hoe je dat hoort en ziet in het woord.",
            "Schrijf een paar woorden klassikaal op en laat leerlingen het verschil benoemen."
          ],
          differentiation: "Maak het moeilijker met woorden waarin de spelling verandert, zoals bomen en bommen.",
          teacherTip: "Gebruik eerst duidelijke tegenhangers zoals zon en zoon, zodat het verschil snel voelbaar wordt.",
          keywords: ["groep 3/4", "korte klank", "lange klank", "open lettergreep", "gesloten lettergreep"]
        }),
        spellingDocTask(GROUP_34, {
          key: "woord-bouwen-met-lichaamsletters",
          visual: "circle",
          visualHint: "Leerlingen vormen samen een woord met hun lichaam en controleren daarna de lettervolgorde.",
          title: "Woord bouwen met lichaamsletters",
          summary: "Een beweegvorm waarin leerlingen letters en woordbeelden zichtbaar maken door zelf het woord te vormen.",
          duration: "10-12 min",
          setup: "Geen voorbereiding. Spreek af hoe leerlingen letters uitbeelden of verdeel letterrollen.",
          goal: "Lettervolgorde, woordbeeld en de categorie van de week zichtbaar maken.",
          movementFocus: "Met het lichaam of in een opstelling letters en de volgorde van een woord laten zien.",
          materials: ["Geen extra materiaal", "Eventueel letterkaartjes"],
          steps: [
            "Geef een woord uit de les, bijvoorbeeld maan, vis of boek.",
            "Leerlingen spreken af wie welke letter is of gebruiken letterkaartjes.",
            "Ze gaan in de juiste volgorde staan en zeggen samen het woord.",
            "Bespreek welke letters je hoort en welke je schrijft."
          ],
          differentiation: "Laat groep 4 ook foutgeschreven woorden verbeteren door de goede volgorde te bouwen.",
          teacherTip: "Gebruik korte woorden in het begin; zo blijft de focus op het spellingpatroon in plaats van op organiseren.",
          keywords: ["groep 3/4", "woordbeeld", "lichaamsletters", "lettervolgorde", "categorie van de week"]
        }),
        spellingDocTask(GROUP_56, {
          key: "lettergroepstraat",
          visual: "line",
          visualHint: "Twee stroken op de vloer maken open en gesloten lettergrepen letterlijk beloopbaar.",
          title: "Lettergroepstraat",
          summary: "Leerlingen lopen een woord in lettergrepen en koppelen elke stap aan open of gesloten spelling.",
          duration: "10-12 min",
          setup: "Maak twee stroken op de vloer: open lettergreep en gesloten lettergreep.",
          goal: "Lettergroepwoorden en het verschil tussen lange en korte klank in meerlettergrepige woorden concreet maken.",
          movementFocus: "Per lettergreep lopen en bewust kiezen in welke strook de lettergreep hoort.",
          materials: ["Tape of twee kaarten"],
          steps: [
            "Noem of toon een woord, bijvoorbeeld apen, boten, kippen of ratten.",
            "Een leerling loopt het woord in lettergrepen en gaat bij elke lettergreep in de juiste strook staan.",
            "Bespreek wat er met de klinker gebeurt en waarom je één of twee medeklinkers schrijft.",
            "Laat daarna het woord opschrijven."
          ],
          differentiation: "Gebruik later ook uitzonderingen en woorden uit teksten die leerlingen zelf lezen.",
          teacherTip: "Laat leerlingen eerst de lettergrepen klappen voordat ze de straat inlopen; dat maakt de overstap duidelijker.",
          keywords: ["groep 5/6", "lettergroepwoorden", "open lettergreep", "gesloten lettergreep", "stroken"]
        }),
        spellingDocTask(GROUP_56, {
          key: "weetwoordmuur",
          visual: "path",
          visualHint: "Een muur met weetwoorden laat leerlingen gericht kiezen, lezen en daarna zonder voorbeeld opschrijven.",
          title: "Weetwoordmuur",
          summary: "Leerlingen koppelen klank en woordbeeld aan een muur met weetwoorden en schrijven daarna het woord uit het hoofd.",
          duration: "10 min",
          setup: "Hang weetwoorden op verschillende plekken in het lokaal.",
          goal: "Woordbeelden van weetwoorden zoals ei/ij en au/ou actief onthouden.",
          movementFocus: "Naar het juiste woord lopen, het hardop lezen en daarna zonder voorbeeld reproduceren.",
          materials: ["Woordkaartjes"],
          steps: [
            "Hang kaartjes op met woorden uit dezelfde weetwoordcategorie.",
            "Noem de klank of het woordbeeld dat centraal staat, bijvoorbeeld ei/ij.",
            "Leerlingen lopen naar een woord dat past en lezen het hardop.",
            "Laat ze daarna het woord zonder kaartje opschrijven."
          ],
          differentiation: "Maak twee wanden, bijvoorbeeld ei en ij, en laat leerlingen steeds de juiste kant kiezen.",
          teacherTip: "Laat leerlingen na het opschrijven nog één keer teruglopen om hun woordbeeld zelf te controleren.",
          keywords: ["groep 5/6", "weetwoorden", "ei ij", "au ou", "woordbeeld"]
        }),
        spellingDocTask(GROUP_56, {
          key: "regelroute",
          visual: "path",
          visualHint: "Leerlingen zoeken al lopend woorden, regels en voorbeelden die als set bij elkaar horen.",
          title: "Regelroute",
          summary: "Een routeopdracht waarin leerlingen verband leggen tussen woord, regel en voorbeeld.",
          duration: "10-15 min",
          setup: "Verspreid woorden, regelkaartjes en voorbeeldkaartjes door het lokaal.",
          goal: "Regelwoorden en net-als-woorden verbinden aan de juiste uitleg en voorbeelden.",
          movementFocus: "Lopen, setjes samenstellen en hardop benoemen welke regel je toepast.",
          materials: ["Kaartjes"],
          steps: [
            "Verspreid woorden, regelkaartjes en voorbeeldkaartjes door het lokaal.",
            "Leerlingen lopen in tweetallen en zoeken steeds een set van drie die bij elkaar hoort.",
            "Bij elk setje spreken ze hardop uit welke regel wordt toegepast.",
            "Bespreek klassikaal twee of drie complete sets."
          ],
          differentiation: "Laat leerlingen zelf een extra voorbeeldwoord toevoegen aan een gevonden set.",
          teacherTip: "Leg de nadruk op de uitlegzin; juist het verwoorden van de regel maakt deze opdracht sterk.",
          keywords: ["groep 5/6", "regelroute", "regelwoorden", "net als woorden", "uitleg"]
        }),
        spellingDocTask(GROUP_78, {
          key: "werkwoordschema-op-de-vloer",
          visual: "line",
          visualHint: "Een schema op de vloer laat leerlingen de vaste controlevolgorde van werkwoordspelling letterlijk doorlopen.",
          title: "Werkwoordschema op de vloer",
          summary: "Leerlingen lopen stap voor stap door het werkwoordschema en zeggen hardop welke controle ze uitvoeren.",
          duration: "10-15 min",
          setup: "Leg stappen op de vloer: onderwerp zoeken, tijd bepalen, stam maken, uitgang kiezen en controleren.",
          goal: "Het controle-algoritme van werkwoordspelling zichtbaar en herhaalbaar maken.",
          movementFocus: "Per stap door het schema lopen en de controle hardop benoemen.",
          materials: ["Stapkaarten of tapevakken"],
          steps: [
            "Lees een zin voor met een werkwoordsvorm die gekozen moet worden.",
            "Een leerling loopt stap voor stap door het schema en zegt hardop wat hij of zij controleert.",
            "De klas vult aan waar nodig.",
            "Schrijf daarna samen de juiste vorm op."
          ],
          differentiation: "Laat tweetallen later zelf een zin kiezen en het schema samen doorlopen.",
          teacherTip: "Gebruik steeds dezelfde volgorde en taal; zo wordt het schema echt een vaste denkroute.",
          keywords: ["groep 7/8", "werkwoordschema", "werkwoordspelling", "controlevolgorde", "algoritme"]
        }),
        spellingDocTask(GROUP_78, {
          key: "zin-in-delen",
          visual: "line",
          visualHint: "Zinsdeelkaartjes maken onderwerp, persoonsvorm en andere delen zichtbaar in een levende zin.",
          title: "Zin in delen",
          summary: "Leerlingen bouwen met zinsdelen een zin op en koppelen grammatica direct aan de juiste werkwoordsvorm.",
          duration: "10 min",
          setup: "Maak kaartjes met onderwerp, persoonsvorm en andere zinsdelen.",
          goal: "Onderwerp en persoonsvorm herkennen als basis voor werkwoordspelling.",
          movementFocus: "Fysiek in de juiste volgorde gaan staan en daarna onderdelen aanwijzen en benoemen.",
          materials: ["Zinsdeelkaartjes"],
          steps: [
            "Geef leerlingen kaartjes met delen van een zin.",
            "Ze moeten fysiek in de goede volgorde gaan staan.",
            "Daarna wijzen ze onderwerp en persoonsvorm aan.",
            "Bespreek welke werkwoordsvorm daarbij hoort en waarom."
          ],
          differentiation: "Wissel van woordvolgorde om inversie te oefenen.",
          teacherTip: "Laat na het opstellen van de zin eerst de persoonsvorm zoeken; dat maakt de koppeling naar spelling het sterkst.",
          keywords: ["groep 7/8", "zinsdelen", "onderwerp", "persoonsvorm", "inversie"]
        }),
        spellingDocTask(GROUP_78, {
          key: "foutenjacht",
          visual: "path",
          visualHint: "Tweetallen lopen langs foutzinnen, verbeteren die en koppelen de correctie aan de juiste regel of het juiste woordbeeld.",
          title: "Foutenjacht",
          summary: "Leerlingen speuren actief naar spelfouten en verantwoorden daarna hoe de zin verbeterd moet worden.",
          duration: "10-12 min",
          setup: "Hang zinnen of korte alinea's op met bewuste spelfouten.",
          goal: "Revisievaardigheden, weetwoorden, werkwoorden en leestekens bewust controleren en verbeteren.",
          movementFocus: "Van zin naar zin lopen, fouten signaleren en de verbetering mondeling onderbouwen.",
          materials: ["Foutzinnen op kaart of papier"],
          steps: [
            "Leerlingen lopen in tweetallen langs de foutzinnen.",
            "Ze noteren welke fout ze zien en hoe het goed moet.",
            "Daarna leggen ze uit welke regel of welk woordbeeld daarbij hoort.",
            "Sluit af met een korte klassikale check."
          ],
          differentiation: "Laat leerlingen zelf een foutzin maken voor een ander tweetal als extra ronde.",
          teacherTip: "Gebruik verschillende foutsoorten door elkaar, zodat leerlingen echt moeten controleren in plaats van raden.",
          keywords: ["groep 7/8", "foutenjacht", "revisie", "werkwoorden", "leestekens"]
        })
      ]
    },
    rekenen: {
      energizers: [
        docTask(GROUP_34, {
          key: "tel-en-spring",
          visual: "jump",
          visualHint: "Een korte springset bij de eigen plek waarbij leerlingen de telrij letterlijk meebewegen.",
          title: "Tel en spring",
          summary: "Een korte beweegstart waarbij leerlingen tellen en op elk getal een sprong maken.",
          duration: "3-5 min",
          setup: "Geen voorbereiding. Laat leerlingen achter hun stoel staan met genoeg ruimte om veilig te springen.",
          goal: "Telrij, sprongen en automatiseren oefenen met vooruit tellen, terugtellen en sprongen van 2 of 5.",
          movementFocus: "Kleine sprongen op elk getal en het ritme van de telrij samen vasthouden.",
          materials: ["Geen extra materiaal"],
          steps: [
            "Laat leerlingen recht achter hun stoel staan en spreek af dat iedereen op zijn eigen plek blijft.",
            "Noem een telrij, bijvoorbeeld vooruit tellen, terugtellen of tellen met sprongen van 2 of 5.",
            "Leerlingen maken bij elk genoemd getal precies 1 sprong.",
            "Sluit af met 1 controlevraag, zoals: welk getal komt na 18?"
          ],
          differentiation: "Maak het eenvoudiger met tellen tot 10 of 20. Maak het moeilijker met terugtellen of sprongen van 5.",
          teacherTip: "Doe de eerste telrij hardop voor en houd het tempo gelijk, zodat de klas meteen in het ritme komt.",
          keywords: ["groep 3/4", "telrij", "sprongen", "automatiseren", "getalbegrip"]
        }),
        docTask(GROUP_34, {
          key: "waar-of-niet-waar-34",
          visual: "jump",
          visualHint: "Een snelle waar-of-niet-waar energizer met springen of hurken als direct antwoord.",
          title: "Waar of niet waar?",
          summary: "Leerlingen reageren lichamelijk op korte rekenstellingen en leggen daarna kort uit waarom.",
          duration: "5 min",
          setup: "Geen voorbereiding. Laat leerlingen naast hun tafel staan met genoeg ruimte om te springen of te hurken.",
          goal: "Optellen, aftrekken en vergelijken van getallen snel herkennen en controleren.",
          movementFocus: "Springen bij waar en hurken bij niet waar, gevolgd door een korte mondelinge uitleg.",
          materials: ["Geen extra materiaal"],
          steps: [
            "Laat leerlingen naast hun tafel staan en leg het antwoordgebaar uit: springen bij waar, hurken bij niet waar.",
            "Noem een stelling, zoals: 7 + 5 = 12 of 14 is groter dan 17.",
            "Laat de klas direct reageren met springen of hurken.",
            "Vraag na een paar rondes steeds kort: waarom klopt dit wel of niet?"
          ],
          differentiation: "Gebruik in groep 3 sommen tot 10 of 20. Gebruik in groep 4 sommen tot 100 of eenvoudige tafels.",
          teacherTip: "Wissel juiste en onjuiste stellingen snel af en laat steeds 1 leerling de redenering hardop maken.",
          keywords: ["groep 3/4", "optellen", "aftrekken", "vergelijken", "waar of niet waar"]
        }),
        docTask(GROUP_34, {
          key: "rekenbevries",
          visual: "path",
          visualHint: "Leerlingen bewegen vrij door het lokaal en bevriezen bij een korte rekenvraag.",
          title: "Rekenbevries",
          summary: "Een snelle stop-en-denk opdracht waarbij leerlingen direct een antwoord geven op een rekenvraag.",
          duration: "5 min",
          setup: "Geen voorbereiding. Zorg voor een duidelijke looproute door het lokaal en spreek een stopteken af.",
          goal: "Buurgetallen, hoofdrekenen en getalbegrip snel ophalen in een korte beweegronde.",
          movementFocus: "Rustig bewegen, direct stilvallen op signaal en meteen mentaal schakelen naar een som of getalvraag.",
          materials: ["Geen extra materiaal", "Eventueel vingers of antwoordkaartjes"],
          steps: [
            "Laat leerlingen rustig door het lokaal bewegen.",
            "Roep stop en noem direct een rekenvraag, zoals: wat is 8 + 6 of wat is het buurgetal van 39?",
            "Laat leerlingen het antwoord met vingers zien of fluister het naar een maatje.",
            "Herhaal dit met 5 tot 8 korte vragen."
          ],
          differentiation: "Werk met vingers, antwoordkaartjes of mondelinge antwoorden.",
          teacherTip: "Gebruik vooral korte vragen die leerlingen direct moeten ophalen, zodat de overgang naar de volgende les energiek blijft.",
          keywords: ["groep 3/4", "buurgetallen", "hoofdrekenen", "stopspel", "getalbegrip"]
        }),
        docTask(GROUP_56, {
          key: "hoeken-kiezen",
          visual: "corners",
          visualHint: "Vier antwoordhoeken maken een snelle formatieve rekencheck actief en zichtbaar.",
          title: "Hoeken kiezen",
          summary: "Leerlingen lopen naar de hoek met het juiste antwoord en lichten die keuze kort toe.",
          duration: "5 min",
          setup: "Label 4 hoeken met A, B, C en D en zorg dat iedere hoek goed zichtbaar is.",
          goal: "Snelle rekencheck en activering met antwoordkeuzes bij tafels, deelsommen, breuken of kommagetallen.",
          movementFocus: "Snel kiezen, naar een hoek lopen en daarna samen verwoorden waarom het antwoord klopt.",
          materials: ["Eventueel hoekkaartjes"],
          steps: [
            "Markeer 4 hoeken in het lokaal met A, B, C en D.",
            "Geef een vraag met 4 antwoordmogelijkheden.",
            "Laat leerlingen naar de hoek lopen met het juiste antwoord.",
            "Laat steeds 1 leerling uitleggen waarom die hoek klopt en herhaal dit met 5 tot 8 vragen."
          ],
          differentiation: "Gebruik tafels en deelsommen in groep 5 en meer breuken of kommagetallen in groep 6.",
          teacherTip: "Zet antwoorden zo neer dat leerlingen echt moeten nadenken en niet alleen hun buur volgen.",
          keywords: ["groep 5/6", "antwoordhoeken", "tafels", "deelsommen", "kommagetallen", "breuken"]
        }),
        docTask(GROUP_56, {
          key: "klap-als-het-klopt",
          visual: "jump",
          visualHint: "Een ritmische rekenenergizer waarbij leerlingen klappen of stil blijven op basis van een stelling.",
          title: "Klap als het klopt",
          summary: "Leerlingen reageren ritmisch op korte rekenstellingen en lichten hun keuze toe.",
          duration: "3-5 min",
          setup: "Geen voorbereiding. Laat leerlingen staan op hun eigen plek zodat zij goed kunnen klappen of hurken.",
          goal: "Breuken vergelijken, kommagetallen beoordelen en deelsommen controleren in een korte formatieve check.",
          movementFocus: "Klapbewegingen of een korte hurkreactie gekoppeld aan snelle denkvragen.",
          materials: ["Geen extra materiaal"],
          steps: [
            "Spreek af: 1 klap als het klopt, stil blijven of hurken als het niet klopt.",
            "Noem korte stellingen, zoals: 3/4 is groter dan 1/2 of 36 : 6 = 7.",
            "Laat de klas direct reageren met klappen of stilte.",
            "Vraag na enkele rondes om uitleg en houd het tempo hoog."
          ],
          differentiation: "Gebruik eenvoudige breuken bij een basisgroep en combineer verschillende domeinen bij een sterke groep.",
          teacherTip: "Kondig niet vooraf aan of de ronde makkelijk of lastig wordt; zo blijft iedereen scherp luisteren.",
          keywords: ["groep 5/6", "breuken", "kommagetallen", "deelsommen", "stellingen", "energizer"]
        }),
        docTask(GROUP_78, {
          key: "waar-niet-waar-bovenbouw",
          visual: "jump",
          visualHint: "Een snelle bovenbouwcheck met staan of hurken bij stellingen over breuken, procenten en decimalen.",
          title: "Waar / niet waar bovenbouw",
          summary: "Leerlingen reageren direct op stellingen over procenten, breuken en schalen en verwoorden daarna hun redenering.",
          duration: "5 min",
          setup: "Geen voorbereiding. Laat leerlingen verspreid staan met genoeg ruimte om te staan of te hurken.",
          goal: "Denkstart en snelle begripcheck bij procenten, schaal en relaties tussen breuken en decimalen.",
          movementFocus: "Staand of hurkend reageren op elke stelling en daarna heel kort redeneren.",
          materials: ["Geen extra materiaal"],
          steps: [
            "Spreek af: waar betekent staan, niet waar betekent hurken.",
            "Noem stellingen zoals: 0,75 = 3/4 of 25% = 1/5.",
            "Laat leerlingen direct reageren en vraag geregeld om een korte uitleg.",
            "Houd het tempo hoog met 6 tot 10 stellingen."
          ],
          differentiation: "Gebruik voor sterke leerlingen meer samengestelde stellingen met procenten en schaal.",
          teacherTip: "Gebruik expres ook 1 veelgemaakte denkfout, zodat je misvattingen meteen zichtbaar maakt.",
          keywords: ["groep 7/8", "procenten", "breuken", "decimalen", "schaal", "begripcheck"]
        }),
        docTask(GROUP_78, {
          key: "keuzehoeken-rekenen",
          visual: "corners",
          visualHint: "Vier antwoordhoeken helpen om denkfouten bij procenten, verhoudingen en grafieken zichtbaar te maken.",
          title: "Keuzehoeken rekenen",
          summary: "Leerlingen kiezen een antwoordhoek, overleggen kort en verantwoorden daarna hun keuze.",
          duration: "5-10 min",
          setup: "Markeer 4 antwoordhoeken en leg of hang per hoek een duidelijk antwoord neer.",
          goal: "Activeren en formatief checken bij vragen over procenten, verhoudingen en grafieken.",
          movementFocus: "Lopen naar een keuzehoek, kort overleggen en daarna gericht verwoorden.",
          materials: ["Hoekkaartjes of geprinte antwoorden"],
          steps: [
            "Geef een vraag met 4 antwoordmogelijkheden.",
            "Laat leerlingen naar de hoek lopen die volgens hen klopt.",
            "Laat leerlingen kort overleggen in hun hoek.",
            "Bespreek klassikaal waarom een hoek klopt en gebruik vooral vragen over procenten, verhoudingen of grafieken."
          ],
          differentiation: "Bied in 1 hoek expres een veelgemaakte fout aan om denkfouten zichtbaar te maken.",
          teacherTip: "Vraag niet alleen om het juiste antwoord, maar vooral om de strategie waarmee leerlingen tot die keuze kwamen.",
          keywords: ["groep 7/8", "antwoordhoeken", "procenten", "verhoudingen", "grafieken", "formatief"]
        })
      ],
      tijdens: [
        docTask(GROUP_34, {
          key: "sommenwandeling",
          visual: "path",
          visualHint: "Een rekenroute langs somkaartjes waarbij leerlingen steeds teruglopen om samen uit te rekenen.",
          title: "Sommenwandeling",
          summary: "Tweetallen lopen langs somkaartjes, onthouden de som en rekenen die samen uit.",
          duration: "10 min",
          setup: "Hang 6 tot 10 somkaartjes verspreid op in het lokaal en maak ruimte om veilig heen en weer te lopen.",
          goal: "Optellen en aftrekken oefenen via een vaste looproute en korte samenwerkmomenten.",
          movementFocus: "Rustig lopen naar een kaart, onthouden, teruglopen en pas aan tafel uitwerken.",
          materials: ["Somkaartjes", "Wisbordje of kladpapier"],
          steps: [
            "Hang somkaartjes verspreid op in het lokaal.",
            "Laat leerlingen in tweetallen naar een kaartje lopen en de som lezen.",
            "Leerlingen lopen terug naar hun plek en rekenen samen de som uit op een wisbordje of kladpapier.",
            "Daarna lopen zij naar het volgende kaartje."
          ],
          differentiation: "Maak 2 routes met verschillende moeilijkheidsgraden.",
          teacherTip: "Gebruik vaste looprichtingen, zodat tweetallen elkaar niet in de weg lopen.",
          keywords: ["groep 3/4", "sommenwandeling", "optellen", "aftrekken", "tweetallen"]
        }),
        docTask(GROUP_34, {
          key: "staand-flitsen",
          visual: "circle",
          visualHint: "Tweetallen staan tegenover elkaar en flitsen snel sommen of splitsingen naar elkaar.",
          title: "Staand flitsen",
          summary: "Leerlingen oefenen sommen en splitsingen mondeling in een snelle staande duo-opdracht.",
          duration: "5-10 min",
          setup: "Geen uitgebreide voorbereiding. Zet eventueel flitskaartjes klaar per niveau.",
          goal: "Sommen, splitsingen en basisautomatisering snel en herhaald ophalen.",
          movementFocus: "Staand werken, direct reageren en na elke korte serie van rol wisselen.",
          materials: ["Geen extra materiaal of flitskaartjes"],
          steps: [
            "Laat leerlingen in tweetallen tegenover elkaar staan.",
            "1 leerling noemt een som of laat een kaartje zien.",
            "De ander antwoordt direct.",
            "Na 5 sommen wisselen de rollen."
          ],
          differentiation: "Gebruik kaartjes per niveau: splitsingen, plus- en minsommen of tafels van 2, 5 en 10.",
          teacherTip: "Houd de rondes kort, zodat het tempo hoog blijft en alle leerlingen veel beurten krijgen.",
          keywords: ["groep 3/4", "flitsen", "splitsingen", "plus", "min", "automatiseren"]
        }),
        docTask(GROUP_34, {
          key: "rekenen-estafette",
          visual: "relay",
          visualHint: "Teams rennen om de beurt naar een somkaart en koppelen die aan het juiste antwoord.",
          title: "Rekenen-estafette",
          summary: "Kleine teams oefenen sommen onder tempo en koppelen elke som aan het juiste antwoord.",
          duration: "10-15 min",
          setup: "Leg somkaartjes en antwoordkaartjes klaar aan de overkant van het lokaal of de gang.",
          goal: "Herhalen, tempo maken en samenwerken bij basisrekenen.",
          movementFocus: "Korte estafetteloopjes, snel terugkoppelen en direct de volgende leerling laten starten.",
          materials: ["Somkaartjes", "Antwoordkaartjes"],
          steps: [
            "Verdeel de groep in kleine teams.",
            "Leg aan de overkant somkaartjes en antwoordkaartjes klaar.",
            "Een leerling rent, pakt een kaartje en rekent de som uit.",
            "De leerling koppelt de som aan het juiste antwoordkaartje en daarna start de volgende leerling."
          ],
          differentiation: "Gebruik voor sommige teams minder kaartjes of eenvoudigere sommen.",
          teacherTip: "Leg de antwoorden overzichtelijk neer en gebruik per team een eigen kleur, zodat de controle snel blijft.",
          keywords: ["groep 3/4", "estafette", "sommen", "samenwerken", "tempo"]
        }),
        docTask(GROUP_56, {
          key: "loopdictee-rekenen",
          visual: "dictation",
          visualHint: "Een rekenloopdictee waarbij 1 leerling de opgave ophaalt en het tweetal die samen oplost.",
          title: "Loopdictee rekenen",
          summary: "Tweetallen halen opgaven op, onthouden deze kort en maken de som daarna samen.",
          duration: "10-15 min",
          setup: "Hang opgaven op verschillende plekken op en leg per tweetal papier of een wisbordje klaar.",
          goal: "Sommen en contextopgaven inoefenen met bewegen, samenwerken en onthouden.",
          movementFocus: "Lopen, onthouden, terugkeren en samen verwerken aan de tafel of schrijfplek.",
          materials: ["Opgaven", "Papier of wisbordje"],
          steps: [
            "Werk in tweetallen.",
            "1 leerling loopt naar een opgave, leest en onthoudt die en loopt terug.",
            "Samen noteren en maken zij de opgave.",
            "Daarna wisselen de rollen."
          ],
          differentiation: "Maak een basisset en een uitdagende set in verschillende kleuren.",
          teacherTip: "Laat leerlingen eerst herhalen wat zij hebben onthouden voordat zij gaan schrijven; dat houdt de opdracht echt actief.",
          keywords: ["groep 5/6", "loopdictee", "contextopgaven", "tweetallen", "inoefenen"]
        }),
        docTask(GROUP_56, {
          key: "rekencircuit-56",
          visual: "stations",
          visualHint: "Een circuit met korte rekenposten voor veel herhaling in een actieve ronde.",
          title: "Rekencircuit",
          summary: "Leerlingen rouleren langs rekenposten en maken per post 1 of 2 korte opdrachten.",
          duration: "10-15 min",
          setup: "Maak 6 tot 8 posten met kaartjes en leg per post een antwoordblad of werkplek klaar.",
          goal: "Veel oefenherhaling in meerdere rekendomeinen met een vaste stationsroute.",
          movementFocus: "Tussen posten lopen, kort werken en doorschuiven op een signaal.",
          materials: ["Postkaartjes", "Antwoordblad"],
          steps: [
            "Verspreid 6 tot 8 posten door het lokaal of de gang.",
            "Leerlingen lopen langs de posten en maken per post 1 of 2 opdrachten.",
            "Na een signaal schuiven zij door naar de volgende post.",
            "Bespreek de antwoorden kort na."
          ],
          differentiation: "Richt een deel van het circuit in met ondersteuning, zoals voorbeeldkaartjes of hulpschema's.",
          teacherTip: "Maak de posten klein en helder, zodat de beweegtijd niet ten koste gaat van de rekentijd.",
          keywords: ["groep 5/6", "rekencircuit", "stations", "herhalen", "hulpschema"]
        }),
        docTask(GROUP_56, {
          key: "zoek-iemand-die",
          visual: "circle",
          visualHint: "Leerlingen lopen rond met een opdracht en zoeken een match met dezelfde uitkomst of notatie.",
          title: "Zoek iemand die...",
          summary: "Leerlingen zoeken al lopend een passende rekenmatch en lichten die daarna aan elkaar toe.",
          duration: "10 min",
          setup: "Maak kaartjes of een zoekblad met uitkomsten, breuken, kommagetallen of gelijkwaardige representaties.",
          goal: "Vergelijkingen maken, samenwerken en representaties herkennen in beweging.",
          movementFocus: "Rondlopen, contact maken, matchen en mondeling uitleggen waarom iets bij elkaar hoort.",
          materials: ["Kaartjes of werkblad"],
          steps: [
            "Geef leerlingen een kaartje of opdrachtblad.",
            "Laat hen rondlopen en iemand zoeken met bijvoorbeeld dezelfde uitkomst, een gelijkwaardige breuk of een passend kommagetal.",
            "Als zij een match hebben gevonden, leggen zij aan elkaar uit waarom het past.",
            "Na enkele matches volgt een korte klassikale terugkoppeling."
          ],
          differentiation: "Laat sterke leerlingen hun match ook in een andere notatie geven.",
          teacherTip: "Laat leerlingen pas verder lopen nadat zij hun match aan elkaar hebben uitgelegd; zo blijft de inhoud centraal.",
          keywords: ["groep 5/6", "match", "breuken", "kommagetallen", "vergelijkingen", "samenwerken"]
        }),
        docTask(GROUP_78, {
          key: "rekencircuit-bovenbouw",
          visual: "stations",
          visualHint: "Een actief bovenbouwcircuit langs posten over procenten, schaal, verhoudingen en grafieken.",
          title: "Rekencircuit bovenbouw",
          summary: "Tweetallen oefenen verschillende bovenbouwdomeinen in een korte actieve circuitvorm.",
          duration: "10-15 min",
          setup: "Maak 6 tot 8 posten met opgaven rond procenten, schaal, verhoudingen en grafieken.",
          goal: "Actieve inoefening van verschillende rekenonderdelen met nadruk op strategie en redenering.",
          movementFocus: "Rondlopen tussen posten, kort registreren en daarna door naar een nieuwe inhoudelijke focus.",
          materials: ["Postkaartjes", "Antwoordblad"],
          steps: [
            "Richt posten in rond procenten, schaal, verhoudingen, breuken-decimalen-procenten en grafieken.",
            "Laat leerlingen in tweetallen langs de posten lopen.",
            "Zij noteren hun antwoorden en controleren na afloop gezamenlijk.",
            "Bespreek vooral de gekozen strategieen."
          ],
          differentiation: "Geef een extra uitdaging bij elke post, bijvoorbeeld een verdiepingsvraag.",
          teacherTip: "Gebruik per post 1 kernvraag en 1 optionele plusvraag, zodat alle leerlingen tempo houden.",
          keywords: ["groep 7/8", "rekencircuit", "procenten", "verhoudingen", "grafieken", "schaal"]
        }),
        docTask(GROUP_78, {
          key: "wandel-en-leg-uit",
          visual: "path",
          visualHint: "Tweetallen lopen een korte route terwijl 1 leerling hardop een aanpak uitlegt.",
          title: "Wandel en leg uit",
          summary: "Leerlingen verwoorden hun strategie al lopend aan een maatje en krijgen direct vragen terug.",
          duration: "10 min",
          setup: "Maak kaartjes met opgaven en spreek een korte wandelroute door lokaal of gang af.",
          goal: "Strategie verwoorden, redeneren en elkaars aanpak kritisch beluisteren.",
          movementFocus: "Rustig lopen, hardop uitleggen en na een wisselmoment van rol veranderen.",
          materials: ["Opgavekaartjes"],
          steps: [
            "Laat leerlingen in tweetallen een klein rondje door lokaal of gang lopen.",
            "1 leerling legt hardop uit hoe hij of zij de som zou aanpakken.",
            "De ander luistert, stelt vragen en vult aan.",
            "Na een wisselmoment draaien de rollen om."
          ],
          differentiation: "Geef sommige tweetallen een hulpschema en andere tweetallen open contextopgaven.",
          teacherTip: "Kies opgaven waarbij meerdere aanpakken mogelijk zijn, zodat de gesprekken rijker worden.",
          keywords: ["groep 7/8", "strategie", "redeneren", "uitleg", "tweetallen"]
        }),
        docTask(GROUP_78, {
          key: "antwoordestafette",
          visual: "relay",
          visualHint: "Teams lossen om de beurt een opgave op en brengen het antwoord in estafettevorm naar voren.",
          title: "Antwoordestafette",
          summary: "Teams oefenen tempo, samenwerken en foutcontrole in een estafette met bovenbouwopgaven.",
          duration: "10 min",
          setup: "Maak opgaven en antwoordstroken klaar en richt voor elk team een eigen looplijn in.",
          goal: "Tempo maken, herhalen en samenwerken bij complexere rekenopgaven.",
          movementFocus: "Om de beurt sprinten, terugkoppelen aan het team en snel wisselen van beurt.",
          materials: ["Opgaven", "Antwoordstroken"],
          steps: [
            "Verdeel de klas in teams.",
            "Elk teamlid lost om de beurt 1 opgave op en brengt het antwoord naar voren.",
            "Daarna is de volgende leerling aan de beurt.",
            "Controleer de antwoorden klassikaal en bespreek veelgemaakte fouten."
          ],
          differentiation: "Gebruik basis- en plusstroken per team.",
          teacherTip: "Laat teams pas de volgende beurt starten als de vorige leerling kort heeft uitgelegd hoe het antwoord is gevonden.",
          keywords: ["groep 7/8", "estafette", "samenwerken", "bovenbouw", "fouten bespreken"]
        })
      ],
      bewegend: [
        docTask(GROUP_34, {
          key: "getallenlijn-lopen",
          visual: "line",
          visualHint: "Een grote vloerlijn maakt sprongen, meer en minder en plaatswaarde letterlijk zichtbaar.",
          title: "Getallenlijn lopen",
          summary: "Leerlingen bewegen over een vloerlijn en ervaren letterlijk wat vooruit, terug en meer betekent.",
          duration: "10 min",
          setup: "Leg met tape een getallenlijn op de vloer, bijvoorbeeld 0-20 of 0-100.",
          goal: "Getalbegrip, meer en minder en sprongen op de getallenlijn concreet maken.",
          movementFocus: "Stapbewegingen en sprongen op de lijn koppelen aan wat er met het getal gebeurt.",
          materials: ["Tape of getalkaarten"],
          steps: [
            "Maak een getallenlijn op de vloer, bijvoorbeeld van 0 tot 20 of van 0 tot 100.",
            "Laat een leerling op een getal gaan staan.",
            "Geef opdrachten zoals: stap 1 vooruit, spring 2 terug of ga naar het getal dat 10 meer is.",
            "Bespreek telkens wat er op de getallenlijn gebeurt."
          ],
          differentiation: "Gebruik 0-20 in groep 3 en 0-100 in groep 4.",
          teacherTip: "Laat leerlingen eerst voorspellen waar zij uitkomen en pas daarna bewegen.",
          keywords: ["groep 3/4", "getallenlijn", "meer en minder", "sprongen", "getalbegrip"]
        }),
        docTask(GROUP_34, {
          key: "splitsen-met-je-lichaam",
          visual: "circle",
          visualHint: "Tweetallen vormen met hun lichaam verschillende splitsingen van hetzelfde getal.",
          title: "Splitsen met je lichaam",
          summary: "Leerlingen laten splitsingen van een getal zien met hun eigen lichaam en vergelijken verschillende oplossingen.",
          duration: "5-10 min",
          setup: "Geen voorbereiding. Zorg voor genoeg ruimte voor tweetallen om naast elkaar te staan.",
          goal: "Splitsingen, getalstructuur en voorbereidende optelstrategien zichtbaar maken.",
          movementFocus: "In tweetallen een getal verdelen en dat fysiek aan de groep laten zien.",
          materials: ["Geen extra materiaal"],
          steps: [
            "Noem een getal, bijvoorbeeld 8.",
            "Laat 2 leerlingen samen een splitsing vormen, bijvoorbeeld 5 en 3.",
            "Laat meerdere tweetallen verschillende splitsingen laten zien.",
            "Bespreek welke splitsingen hetzelfde totaal geven."
          ],
          differentiation: "Laat sterke leerlingen meerdere splitsingen achter elkaar noemen zonder hulp.",
          teacherTip: "Werk vlot achter elkaar door, zodat leerlingen meerdere voorbeelden van hetzelfde getal zien.",
          keywords: ["groep 3/4", "splitsingen", "getalstructuur", "tweetallen", "optelstrategien"]
        }),
        docTask(GROUP_34, {
          key: "tafels-springen",
          visual: "jump",
          visualHint: "Leerlingen springen langs de veelvouden van 1 tafel en voorspellen het volgende getal.",
          title: "Tafels springen",
          summary: "Leerlingen bewegen mee met de veelvouden van een tafel en koppelen sprongen aan herhaald optellen.",
          duration: "5-10 min",
          setup: "Geen voorbereiding nodig, of leg eventueel een vloergetallenlijn klaar.",
          goal: "Tafelstructuur, herhaald optellen en veelvouden concreet oefenen.",
          movementFocus: "Bij elk veelvoud springen en hardop voorspellen welk getal hierna komt.",
          materials: ["Geen extra materiaal of vloergetallenlijn"],
          steps: [
            "Kies 1 tafel, bijvoorbeeld de tafel van 2 of 5.",
            "Leerlingen springen steeds naar het volgende veelvoud terwijl de klas de rij hardop mee zegt.",
            "Laat leerlingen voorspellen op welk getal zij na de volgende sprong komen.",
            "Sluit af met een paar losse tafelvragen."
          ],
          differentiation: "Werk in groep 4 vooral met 2, 5 en 10. Voeg later 3 of 4 toe.",
          teacherTip: "Start met een paar gezamenlijke sprongen en laat daarna individuele leerlingen de volgende stap voorspellen.",
          keywords: ["groep 3/4", "tafels", "veelvouden", "herhaald optellen", "springen"]
        }),
        docTask(GROUP_56, {
          key: "breukenlijn-op-de-vloer",
          visual: "line",
          visualHint: "Een vloerlijn van 0 tot 1 of 2 helpt leerlingen breuken plaatsen en vergelijken.",
          title: "Breukenlijn op de vloer",
          summary: "Leerlingen plaatsen breukkaartjes op een grote lijn en bespreken hun positie ten opzichte van 1.",
          duration: "10-15 min",
          setup: "Leg een lijn op de vloer en maak breukkaartjes, eventueel doorlopend van 0 naar 2.",
          goal: "Breuken plaatsen, vergelijken en ordenen met een concrete lijn als model.",
          movementFocus: "Naar een plek op de lijn lopen en lichamelijk ervaren hoe dicht een breuk bij 1 of 2 ligt.",
          materials: ["Tape", "Breukkaartjes"],
          steps: [
            "Maak een lijn van 0 naar 1, eventueel doorlopend naar 2.",
            "Geef leerlingen een breukkaartje, zoals 1/2, 3/4 of 5/4.",
            "Laat hen op de juiste plek op de lijn staan.",
            "Bespreek wie het dichtst bij 1 staat, welke breuken even groot zijn en welke tussen 1/2 en 1 liggen."
          ],
          differentiation: "Begin met eenvoudige breuken en voeg later onechte breuken toe.",
          teacherTip: "Laat leerlingen eerst schatten waar hun kaart hoort en pas daarna verplaatsen of bijstellen.",
          keywords: ["groep 5/6", "breuken", "breukenlijn", "vergelijken", "ordenen"]
        }),
        docTask(GROUP_56, {
          key: "kommagetallen-op-volgorde",
          visual: "line",
          visualHint: "Leerlingen vormen zonder praten een levende rij van kommagetallen van klein naar groot.",
          title: "Kommagetallen op volgorde",
          summary: "Leerlingen ordenen kommagetallen lichamelijk in een rij en verantwoorden daarna hun plek.",
          duration: "10 min",
          setup: "Maak kaartjes met kommagetallen en zorg voor een vrije lijn in het lokaal.",
          goal: "Plaatswaarde begrijpen en kommagetallen ordenen van klein naar groot.",
          movementFocus: "Lopen, positie kiezen in een rij en pas daarna hardop uitleggen.",
          materials: ["Kaartjes met kommagetallen"],
          steps: [
            "Geef iedere leerling of ieder tweetal een kaartje met een kommagetal.",
            "Laat leerlingen zonder praten op volgorde gaan staan van klein naar groot.",
            "Daarna lichten zij toe waarom hun plek klopt.",
            "Bespreek lastige paren, zoals 0,5 en 0,05."
          ],
          differentiation: "Gebruik alleen tienden in een basisronde en voeg honderdsten toe in een vervolgronde.",
          teacherTip: "Laat leerlingen eerst alleen kijken naar de kaartjes en pas daarna overleggen; zo zie je hun eerste redenering beter.",
          keywords: ["groep 5/6", "kommagetallen", "plaatswaarde", "ordenen", "rij"]
        }),
        docTask(GROUP_56, {
          key: "omtrek-of-oppervlakte",
          visual: "measure",
          visualHint: "Een getapete vorm op de vloer maakt het verschil tussen eromheen en erin direct zichtbaar.",
          title: "Omtrek of oppervlakte?",
          summary: "Leerlingen lopen eerst de rand en vullen daarna het vlak, zodat omtrek en oppervlakte duidelijk uit elkaar gaan.",
          duration: "10 min",
          setup: "Maak met tape een vorm op de vloer, bijvoorbeeld een rechthoek of eenvoudige samengestelde vorm.",
          goal: "Het verschil tussen omtrek en oppervlakte concreet begrijpen.",
          movementFocus: "Eerst de rand volgen met stappen en daarna het vlak vullen of afdekken.",
          materials: ["Tape", "Eventueel blaadjes of tegels"],
          steps: [
            "Maak met tape een rechthoek of andere vorm op de vloer.",
            "Laat leerlingen eerst de rand lopen: dit is de omtrek.",
            "Laat daarna leerlingen het vlak vullen met stappen, blaadjes of tegels: dit is de oppervlakte.",
            "Bespreek het verschil tussen eromheen en erin."
          ],
          differentiation: "Werk eerst met eenvoudige rechthoeken en later met samengestelde vormen.",
          teacherTip: "Gebruik steeds dezelfde vorm voor beide begrippen; dat maakt het contrast tussen rand en vlak extra helder.",
          keywords: ["groep 5/6", "omtrek", "oppervlakte", "meten", "meetkunde"]
        }),
        docTask(GROUP_56, {
          key: "coordinatenraster",
          visual: "measure",
          visualHint: "Een vloerrooster met tape helpt leerlingen coordinaten letterlijk te lopen en te benoemen.",
          title: "Coordinatenraster",
          summary: "Leerlingen lopen naar coordinaten in een raster en ervaren zo horizontaal en verticaal lezen.",
          duration: "10 min",
          setup: "Maak een eenvoudig raster met tape op de vloer en leg kaartjes met coordinaten klaar.",
          goal: "Plaatsbepaling en roosterlezen oefenen in een concrete ruimte.",
          movementFocus: "Lopen naar vakken in het raster en bewust kiezen wat eerst komt: horizontaal of verticaal.",
          materials: ["Tape", "Kaartjes met coordinaten"],
          steps: [
            "Maak een eenvoudig raster op de vloer.",
            "Noem een coordinaat, bijvoorbeeld 3,4, en laat leerlingen naar het juiste vak lopen.",
            "Laat daarna leerlingen elkaar een coordinaat geven.",
            "Sluit af met een korte reflectie: wat komt eerst, horizontaal of verticaal?"
          ],
          differentiation: "Gebruik eerst alleen positieve getallen en breid later uit met complexere routes of opdrachten.",
          teacherTip: "Laat leerlingen na elke route het coordinaat hardop terugzeggen; dat helpt om de volgorde vast te zetten.",
          keywords: ["groep 5/6", "coordinaten", "raster", "rooster", "plaatsbepaling"]
        }),
        docTask(GROUP_78, {
          key: "breuk-decimaal-procent-match",
          visual: "circle",
          visualHint: "Leerlingen zoeken al lopend alle notaties die bij hun breuk, decimaal of percentage horen.",
          title: "Breuk - decimaal - procent match",
          summary: "Leerlingen vormen complete matchgroepen van gelijkwaardige notaties en lichten samen toe waarom die match klopt.",
          duration: "10 min",
          setup: "Maak setjes met breuken, decimalen en procenten en deel 1 kaart per leerling uit.",
          goal: "Relaties tussen breuken, decimalen en procenten begrijpen en verwoorden.",
          movementFocus: "Rondlopen, vergelijken en pas stoppen zodra een complete match is gevonden.",
          materials: ["Kaartjes"],
          steps: [
            "Geef iedere leerling een kaartje met een breuk, decimaal getal of percentage.",
            "Leerlingen lopen rond en zoeken de andere kaartjes die bij hun waarde horen.",
            "Als matchgroep blijven zij samen staan en lichten hun match toe.",
            "Bespreek klassikaal een paar combinaties."
          ],
          differentiation: "Voeg lastigere percentages toe, zoals 12,5% of 62,5%.",
          teacherTip: "Neem bewust ook lastige combinaties op en laat leerlingen eerst onderling redeneren voordat jij het bevestigt.",
          keywords: ["groep 7/8", "breuk", "decimaal", "procent", "notaties", "match"]
        }),
        docTask(GROUP_78, {
          key: "verhoudingentabel-op-de-vloer",
          visual: "line",
          visualHint: "Een grote verhoudingstabel op de vloer laat leerlingen letterlijk zien hoe 2 rijen bij elkaar horen.",
          title: "Verhoudingentabel op de vloer",
          summary: "Leerlingen vullen een grote verhoudingstabel met hun positie of kaartjes en bespreken hoe de rijen samenhangen.",
          duration: "10-15 min",
          setup: "Maak met tape of kaartjes een grote tabel op de vloer met 2 rijen.",
          goal: "Verhoudingen inzichtelijk maken en verbanden tussen 2 rijen begrijpen.",
          movementFocus: "Naar het juiste vak lopen, een verhouding opbouwen en redeneren over vermenigvuldigen of delen.",
          materials: ["Tape", "Kaartjes"],
          steps: [
            "Maak 2 rijen op de vloer, bijvoorbeeld aantal glazen en aantal milliliter.",
            "Leerlingen vullen de vakken door met kaartjes op de juiste plaats te gaan staan.",
            "Bespreek hoe je van 1 rij naar de andere rekent en welke vermenigvuldiging of deling erbij hoort.",
            "Laat leerlingen daarna een nieuwe verhouding zelf opbouwen."
          ],
          differentiation: "Gebruik eenvoudige hele verhoudingen of lastiger kommagetallen en schaalwaarden.",
          teacherTip: "Vraag bij elke ingevulde verhouding expliciet welke factor of deling is gebruikt; zo blijft het model betekenisvol.",
          keywords: ["groep 7/8", "verhoudingentabel", "verhoudingen", "model", "samenhang"]
        }),
        docTask(GROUP_78, {
          key: "grafiekenwandeling",
          visual: "path",
          visualHint: "Een route langs grafieken helpt leerlingen verbanden al lopend te interpreteren.",
          title: "Grafiekenwandeling",
          summary: "Leerlingen lopen langs meerdere grafieken en beantwoorden per grafiek 1 of 2 gerichte vragen.",
          duration: "10-15 min",
          setup: "Hang 4 tot 6 grafieken op in het lokaal en leg bij elke grafiek vraagkaartjes klaar.",
          goal: "Verbanden interpreteren en grafieken lezen met aandacht voor stijging, hoogste waarde en koppeling aan tabellen.",
          movementFocus: "Van grafiek naar grafiek lopen, kort observeren en daarna gericht noteren of bespreken.",
          materials: ["Grafieken", "Vraagkaartjes"],
          steps: [
            "Hang verschillende grafieken op in het lokaal.",
            "Leerlingen lopen langs de grafieken en beantwoorden bij elke grafiek 1 of 2 vragen.",
            "Laat vragen gaan over stijging, hoogste waarde, verband of koppeling aan een tabel.",
            "Bespreek na afloop de antwoorden en redeneringen."
          ],
          differentiation: "Laat sterke leerlingen zelf een passende vraag formuleren bij een grafiek.",
          teacherTip: "Gebruik verschillende grafieksoorten door elkaar, zodat leerlingen niet alleen een vast trucje toepassen.",
          keywords: ["groep 7/8", "grafieken", "verbanden", "tabellen", "interpreteren"]
        }),
        docTask(GROUP_78, {
          key: "schaalwandeling",
          visual: "measure",
          visualHint: "Een gelopen afstand in het lokaal wordt direct gekoppeld aan een schaalberekening.",
          title: "Schaalwandeling",
          summary: "Leerlingen lopen een echte afstand en rekenen die meteen om naar een schaalvraag.",
          duration: "10-15 min",
          setup: "Bepaal een afstand in het lokaal of op het plein en zorg dat die vooraf is gemeten.",
          goal: "Schaal en omrekenen concreet maken met echte afstanden.",
          movementFocus: "Een afstand echt lopen en die beweging direct vertalen naar een berekening op schaal.",
          materials: ["Meetlint of vooraf gemeten afstand"],
          steps: [
            "Laat leerlingen een afstand lopen, bijvoorbeeld 8 meter.",
            "Koppel daar direct een schaalvraag aan, zoals: hoeveel centimeter is dit op schaal 1 : 100?",
            "Laat leerlingen hun berekening mondeling toelichten.",
            "Herhaal met 2 of 3 andere afstanden."
          ],
          differentiation: "Gebruik in een vervolgronde een plattegrond of een omgekeerde schaalvraag.",
          teacherTip: "Werk met afstanden die leerlingen echt net gelopen hebben; dat maakt de schaalvraag veel concreter.",
          keywords: ["groep 7/8", "schaal", "omrekenen", "afstand", "meten"]
        }),
        docTask(GROUP_78, {
          key: "hoeken-en-lijnen-met-je-lichaam",
          visual: "line",
          visualHint: "Tweetallen of groepjes beelden meetkundige begrippen uit met hun eigen lichaam.",
          title: "Hoeken en lijnen met je lichaam",
          summary: "Leerlingen maken hoeken en lijnen met hun lichaam en benoemen daarna samen de eigenschappen.",
          duration: "10 min",
          setup: "Geen voorbereiding. Zorg voor genoeg ruimte voor tweetallen of kleine groepjes.",
          goal: "Meetkundige begrippen zoals rechte hoek, scherpe hoek, stompe hoek en evenwijdige lijnen begrijpen.",
          movementFocus: "Lichaamshoudingen gebruiken om vormen en richtingen zichtbaar te maken.",
          materials: ["Geen extra materiaal"],
          steps: [
            "Laat leerlingen in tweetallen of groepjes werken.",
            "Zij maken met hun lichaam een rechte hoek, scherpe hoek, stompe hoek of evenwijdige lijnen.",
            "De klas benoemt wat zij ziet en onderbouwt dat.",
            "Sluit af met een snelle quizvraag over eigenschappen."
          ],
          differentiation: "Laat sterke leerlingen ook symmetrie of lijnstukken uitbeelden.",
          teacherTip: "Laat 1 groepje de vorm maken en een ander groepje de eigenschappen benoemen; zo blijft iedereen actief kijken.",
          keywords: ["groep 7/8", "meetkunde", "hoeken", "lijnen", "symmetrie"]
        })
      ]
    }
  };
}

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
        tasks: taskBlueprints[subject.id][moment.id]
          .map((blueprint) => materializeTask(group, subject, moment, blueprint))
          .filter(Boolean)
      }))
    }))
  }));
}

const taskPrintProfiles = {
  "woord-of-geen-woord": { enabled: false },
  "zin-of-geen-zin": { enabled: false },
  "klank-en-gebaar": { enabled: false },
  "waar-hoort-het-woord": { enabled: true, expandWorkCardsToClassSize: false, includeSupportCards: false, includeTeacherSheets: false },
  "feit-of-mening": { enabled: false },
  synoniemensprint: { enabled: false },
  "standpunt-in-de-ruimte": { enabled: false },
  "kernwoord-kiezen": { enabled: false },
  "waar-twijfel-niet-waar": { enabled: false },
  "loopdictee-woordenschat": { enabled: true, expandWorkCardsToClassSize: false, includeSupportCards: true, includeTeacherSheets: true },
  "praatmaatjes-in-beweging": { enabled: false },
  verhaalestafette: { enabled: false },
  "loopdictee-kernzinnen": { enabled: true, expandWorkCardsToClassSize: false, includeSupportCards: true, includeTeacherSheets: true },
  "vraag-en-antwoordwandeling": { enabled: true, expandWorkCardsToClassSize: false, includeSupportCards: false, includeTeacherSheets: false },
  "schrijfronde-met-stopplaatsen": { enabled: true, expandWorkCardsToClassSize: false, includeSupportCards: false, includeTeacherSheets: true },
  "wandel-en-vat-samen": { enabled: false },
  interviewcarrousel: { enabled: true, expandWorkCardsToClassSize: false, includeSupportCards: false, includeTeacherSheets: false },
  schrijfposten: { enabled: true, expandWorkCardsToClassSize: false, includeSupportCards: false, includeTeacherSheets: true },
  zinnenstraat: { enabled: true, expandWorkCardsToClassSize: false, includeSupportCards: false, includeTeacherSheets: false },
  "verhaalpad-drie-stappen": { enabled: true, expandWorkCardsToClassSize: false, includeSupportCards: false, includeTeacherSheets: false },
  "woordveld-in-de-ruimte": { enabled: true, expandWorkCardsToClassSize: false, includeSupportCards: false, includeTeacherSheets: false },
  "alinea-opstelling": { enabled: true, expandWorkCardsToClassSize: false, includeSupportCards: false, includeTeacherSheets: false },
  "woordweb-op-de-vloer": { enabled: true, expandWorkCardsToClassSize: false, includeSupportCards: false, includeTeacherSheets: false },
  "signaalwoorden-route": { enabled: true, expandWorkCardsToClassSize: false, includeSupportCards: false, includeTeacherSheets: false },
  argumentenlijn: { enabled: true, expandWorkCardsToClassSize: false, includeSupportCards: false, includeTeacherSheets: false },
  "tekstsoorten-hoeken": { enabled: true, expandWorkCardsToClassSize: false, includeSupportCards: false, includeTeacherSheets: false },
  presentatiepad: { enabled: true, expandWorkCardsToClassSize: false, includeSupportCards: false, includeTeacherSheets: false },
  "klap-stamp-of-stil": { enabled: false },
  "waar-hoor-je-de-klank": { enabled: false },
  "letterflits-in-beweging": { enabled: false },
  "waar-of-niet-waar-spelling": { enabled: false },
  "spellingsprint": { enabled: false },
  "waar-of-niet-waar-werkwoorden": { enabled: false },
  "spellingscan-in-beweging": { enabled: false },
  "woord-bouwen-met-lichaamsletters": { enabled: false },
  "loopdictee-luisterwoorden": { enabled: true, expandWorkCardsToClassSize: false, includeSupportCards: true, includeTeacherSheets: true },
  "woordkaartjes-estafette": { enabled: true, expandWorkCardsToClassSize: false, includeSupportCards: true, includeTeacherSheets: true },
  "zoek-je-spellingmaatje": { enabled: true, expandWorkCardsToClassSize: true, includeSupportCards: false, includeTeacherSheets: false },
  "hakkenpad-op-de-vloer": { enabled: true, expandWorkCardsToClassSize: false, includeSupportCards: false, includeTeacherSheets: false },
  "korte-klank-lange-stap": { enabled: true, expandWorkCardsToClassSize: false, includeSupportCards: false, includeTeacherSheets: false },
  "hoeken-kiezen-bij-spelling": { enabled: true, expandWorkCardsToClassSize: false, includeSupportCards: false, includeTeacherSheets: false },
  "loopdictee-categorie-van-de-week": { enabled: true, expandWorkCardsToClassSize: false, includeSupportCards: true, includeTeacherSheets: true },
  categoriecircuit: { enabled: true, expandWorkCardsToClassSize: false, includeSupportCards: true, includeTeacherSheets: true },
  "zoek-de-juiste-spellingpartner": { enabled: true, expandWorkCardsToClassSize: true, includeSupportCards: false, includeTeacherSheets: false },
  lettergroepstraat: { enabled: true, expandWorkCardsToClassSize: false, includeSupportCards: false, includeTeacherSheets: false },
  weetwoordmuur: { enabled: true, expandWorkCardsToClassSize: false, includeSupportCards: false, includeTeacherSheets: false },
  regelroute: { enabled: true, expandWorkCardsToClassSize: false, includeSupportCards: false, includeTeacherSheets: false },
  "vier-hoeken-categorie-of-regel": { enabled: true, expandWorkCardsToClassSize: false, includeSupportCards: false, includeTeacherSheets: false },
  "loopdictee-werkwoordspelling": { enabled: true, expandWorkCardsToClassSize: false, includeSupportCards: true, includeTeacherSheets: true },
  leestekenroute: { enabled: true, expandWorkCardsToClassSize: false, includeSupportCards: false, includeTeacherSheets: true },
  "spellingcircuit-bovenbouw": { enabled: true, expandWorkCardsToClassSize: false, includeSupportCards: true, includeTeacherSheets: true },
  "werkwoordschema-op-de-vloer": { enabled: true, expandWorkCardsToClassSize: false, includeSupportCards: false, includeTeacherSheets: false },
  "zin-in-delen": { enabled: true, expandWorkCardsToClassSize: false, includeSupportCards: false, includeTeacherSheets: false },
  foutenjacht: { enabled: true, expandWorkCardsToClassSize: false, includeSupportCards: false, includeTeacherSheets: true },
  "tel-en-spring": { enabled: false },
  "waar-of-niet-waar-34": { enabled: false },
  rekenbevries: { enabled: false },
  "hoeken-kiezen": { enabled: true, expandWorkCardsToClassSize: false, includeSupportCards: true, includeTeacherSheets: false },
  "klap-als-het-klopt": { enabled: false },
  "waar-niet-waar-bovenbouw": { enabled: false },
  "keuzehoeken-rekenen": { enabled: true, expandWorkCardsToClassSize: false, includeSupportCards: true, includeTeacherSheets: false },
  sommenwandeling: { enabled: true, expandWorkCardsToClassSize: false, includeSupportCards: false, includeTeacherSheets: true },
  "staand-flitsen": { enabled: false },
  "rekenen-estafette": { enabled: true, expandWorkCardsToClassSize: false, includeSupportCards: true, includeTeacherSheets: true },
  "loopdictee-rekenen": { enabled: true, expandWorkCardsToClassSize: false, includeSupportCards: true, includeTeacherSheets: true },
  "rekencircuit-56": { enabled: true, expandWorkCardsToClassSize: false, includeSupportCards: true, includeTeacherSheets: true },
  "zoek-iemand-die": { enabled: true, expandWorkCardsToClassSize: true, includeSupportCards: false, includeTeacherSheets: false },
  "rekencircuit-bovenbouw": { enabled: true, expandWorkCardsToClassSize: false, includeSupportCards: true, includeTeacherSheets: true },
  "wandel-en-leg-uit": { enabled: true, expandWorkCardsToClassSize: false, includeSupportCards: false, includeTeacherSheets: true },
  antwoordestafette: { enabled: true, expandWorkCardsToClassSize: false, includeSupportCards: true, includeTeacherSheets: true },
  "getallenlijn-lopen": { enabled: true, expandWorkCardsToClassSize: false, includeSupportCards: true, includeTeacherSheets: false },
  "splitsen-met-je-lichaam": { enabled: false },
  "tafels-springen": { enabled: false },
  "breukenlijn-op-de-vloer": { enabled: true, expandWorkCardsToClassSize: true, includeSupportCards: true, includeTeacherSheets: false },
  "kommagetallen-op-volgorde": { enabled: true, expandWorkCardsToClassSize: true, includeSupportCards: true, includeTeacherSheets: false },
  "omtrek-of-oppervlakte": { enabled: false },
  coordinatenraster: { enabled: true, expandWorkCardsToClassSize: false, includeSupportCards: false, includeTeacherSheets: false },
  "breuk-decimaal-procent-match": { enabled: true, expandWorkCardsToClassSize: true, includeSupportCards: false, includeTeacherSheets: false },
  "verhoudingentabel-op-de-vloer": { enabled: true, expandWorkCardsToClassSize: false, includeSupportCards: false, includeTeacherSheets: false },
  grafiekenwandeling: { enabled: true, expandWorkCardsToClassSize: false, includeSupportCards: false, includeTeacherSheets: true },
  schaalwandeling: { enabled: true, expandWorkCardsToClassSize: false, includeSupportCards: false, includeTeacherSheets: true },
  "hoeken-en-lijnen-met-je-lichaam": { enabled: false }
};

function getTaskPrintProfile(taskKey) {
  return taskPrintProfiles[taskKey] ?? {
    enabled: false,
    expandWorkCardsToClassSize: false,
    includeSupportCards: false,
    includeTeacherSheets: false
  };
}

const library = buildLibrary();
const allTasks = flattenTasks();

initializeHistory();
commitState("replace");

function materializeTask(group, subject, moment, blueprint) {
  const title = readGroupValue(blueprint.title, group.id);
  const summary = readGroupValue(blueprint.summary, group.id);
  const goal = readGroupValue(blueprint.goal, group.id);

  if (!title || !summary || !goal) {
    return null;
  }

  const printProfile = getTaskPrintProfile(blueprint.key);
  const usesCards = printProfile.enabled;
  const cardPack = usesCards ? buildCardPack(group, subject, moment, blueprint, title, printProfile) : null;

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
    printProfile,
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
  return getTaskPrintProfile(blueprint.key).enabled;
}

function getTaskOrganization(taskKey, visual) {
  const pairTasks = new Set([
    "praatmaatjes-in-beweging",
    "loopdictee-woordenschat",
    "loopdictee-kernzinnen",
    "vraag-en-antwoordwandeling",
    "wandel-en-vat-samen",
    "loopdictee-luisterwoorden",
    "loopdictee-categorie-van-de-week",
    "regelroute",
    "loopdictee-werkwoordspelling",
    "foutenjacht",
    "sommenwandeling",
    "staand-flitsen",
    "loopdictee-rekenen",
    "wandel-en-leg-uit",
    "rekencircuit-bovenbouw",
    "splitsen-met-je-lichaam"
  ]);
  const rowPairTasks = new Set(["interviewcarrousel"]);
  const teamTasks = new Set([
    "verhaalestafette",
    "woordkaartjes-estafette",
    "rekenen-estafette",
    "antwoordestafette",
    "categoriecircuit",
    "rekencircuit-56",
    "spellingcircuit-bovenbouw"
  ]);
  const smallGroupTasks = new Set(["hoeken-en-lijnen-met-je-lichaam"]);
  const individualTasks = new Set([
    "zoek-je-spellingmaatje",
    "zoek-de-juiste-spellingpartner",
    "zoek-iemand-die",
    "breukenlijn-op-de-vloer",
    "kommagetallen-op-volgorde",
    "breuk-decimaal-procent-match"
  ]);

  if (individualTasks.has(taskKey)) {
    return {
      type: "individual",
      title: `${CLASS_SIZE} leerlingen werken individueel`,
      hint: `Gebruik dit blad als organisatiesteun voor ${CLASS_SIZE} leerlingen, ieder met een eigen kaart.`,
      workCardTarget: CLASS_SIZE,
      units: Array.from({ length: CLASS_SIZE }, (_, index) => ({
        label: `Leerling ${index + 1}`,
        size: 1
      }))
    };
  }

  if (rowPairTasks.has(taskKey)) {
    return {
      type: "row-pairs",
      title: `Werk met ${PAIR_OR_TRIO_UNITS.length - 1} tweetallen en 1 drietal`,
      hint: `Gebruik dit blad als organisatiesteun voor ${PAIR_OR_TRIO_UNITS.length - 1} tweetallen en 1 drietal in twee rijen.`,
      workCardTarget: PAIR_OR_TRIO_UNITS.length,
      units: PAIR_OR_TRIO_UNITS
    };
  }

  if (pairTasks.has(taskKey)) {
    return {
      type: "pairs",
      title: `Werk met ${PAIR_OR_TRIO_UNITS.length - 1} tweetallen en 1 drietal`,
      hint: `Gebruik dit blad als organisatiesteun voor ${PAIR_OR_TRIO_UNITS.length - 1} tweetallen en 1 drietal.`,
      workCardTarget: PAIR_OR_TRIO_UNITS.length,
      units: PAIR_OR_TRIO_UNITS
    };
  }

  if (teamTasks.has(taskKey)) {
    return {
      type: "teams",
      title: `${CLASS_GROUP_COUNT} teams van ${CLASS_GROUP_SIZE} leerlingen`,
      hint: `Gebruik dit blad als organisatiesteun voor ${CLASS_GROUP_COUNT} teams van ${CLASS_GROUP_SIZE} leerlingen.`,
      workCardTarget: null,
      units: Array.from({ length: CLASS_GROUP_COUNT }, (_, index) => ({
        label: `Team ${index + 1}`,
        size: CLASS_GROUP_SIZE
      }))
    };
  }

  if (smallGroupTasks.has(taskKey)) {
    return {
      type: "small-groups",
      title: `${CLASS_GROUP_COUNT} groepjes van ${CLASS_GROUP_SIZE} leerlingen`,
      hint: `Gebruik dit blad als organisatiesteun voor ${CLASS_GROUP_COUNT} groepjes van ${CLASS_GROUP_SIZE} leerlingen.`,
      workCardTarget: null,
      units: Array.from({ length: CLASS_GROUP_COUNT }, (_, index) => ({
        label: `Groep ${index + 1}`,
        size: CLASS_GROUP_SIZE
      }))
    };
  }

  const wholeClassTitles = {
    corners: "Klassikaal kiezen tussen vaste hoeken",
    stations: "Klassikaal langs vaste posten",
    path: "Klassikaal met een vaste looproute",
    line: "Klassikaal op een lijn of vloeropstelling",
    measure: "Klassikaal rond 1 meetplek of vloermodel",
    circle: "Klassikaal rond een centrale plek"
  };
  const wholeClassHints = {
    corners: "Gebruik dit blad als organisatiesteun voor een klassikale keuze-opstelling met duidelijke hoeken.",
    stations: "Gebruik dit blad als organisatiesteun voor een klassikale postenvorm met vaste wisselmomenten.",
    path: "Gebruik dit blad als organisatiesteun voor een klassikale route met vaste looprichting.",
    line: "Gebruik dit blad als organisatiesteun voor een klassikale vloer- of lijnopstelling.",
    measure: "Gebruik dit blad als organisatiesteun voor een klassikale meetplek of schaalopstelling.",
    circle: "Gebruik dit blad als organisatiesteun voor een klassikale kring- of middenopstelling."
  };

  return {
    type: "whole-class",
    title: wholeClassTitles[visual] || "Klassikaal met vaste plekken in het lokaal",
    hint: wholeClassHints[visual] || "Gebruik dit blad als organisatiesteun voor een klassikale opstelling met vaste plekken in het lokaal.",
    workCardTarget: null,
    units: []
  };
}

function buildCardPack(group, subject, moment, blueprint, title, printProfile) {
  const organization = getTaskOrganization(blueprint.key, blueprint.visual);
  const overviewSheets = buildOverviewSheets(group, subject, moment, blueprint, title, printProfile, organization);
  const cards = getStarterCards(subject.id, group.id, blueprint.visual, blueprint.key, title, printProfile, organization);
  const supportCards = printProfile.includeSupportCards
    ? finalizeSupportCardsForClass(getSupportCards(group, subject, moment, blueprint, title), blueprint.visual, organization)
    : [];
  const teacherSheets = printProfile.includeTeacherSheets ? getTeacherSheets(group, subject, moment, blueprint, title, organization) : [];

  return {
    title: `Printset voor ${title}`,
    intro: buildCardIntro(subject, moment, group, title, cards.length, printProfile, organization),
    note: buildCardNote(subject.id, group.id, blueprint.visual, blueprint.key),
    organization,
    overviewSheets,
    cards,
    supportCards,
    teacherSheets,
    printChecklist: buildPrintChecklist(subject, overviewSheets, cards, supportCards, teacherSheets, printProfile, organization)
  };
}

function buildOverviewSheets(group, subject, moment, blueprint, title, printProfile, organization) {
  const previewTask = {
    key: blueprint.key,
    title,
    subjectId: subject.id,
    momentId: moment.id,
    visual: blueprint.visual,
    usesCards: printProfile.enabled
  };

  return [
    {
      label: "Lesplaat 1",
      title: "Opstelling en doel",
      art: renderIllustration(previewTask, false),
      text: `${group.label} • ${subject.label} • ${moment.label}\n${title}\n${blueprint.setup}`,
      hint: "Print deze overzichtsplaat als eerste blad bij het klaarleggen."
    },
    {
      label: "Lesplaat 2",
      title: organization.title,
      art: renderClassLayoutArt(blueprint.visual, organization, subject.accent, moment.accent),
      text: getPrintOrganizationLines(blueprint.visual, printProfile, organization).join("\n"),
      hint: organization.hint
    },
    {
      label: "Lesplaat 3",
      title: "Logische stapvolgorde",
      art: renderSequenceArt(getPrintSequenceLabels(blueprint.visual), subject.accent, moment.accent),
      text: getPrintSequenceText(blueprint.steps).join("\n"),
      hint: "Leg dit blad naast de werkkaarten zodat de volgorde voor iedereen duidelijk blijft."
    }
  ];
}

function getPrintOrganizationLines(visual, printProfile, organization) {
  if (organization.type === "individual") {
    return [
      `Geef ${CLASS_SIZE} leerlingen ieder 1 kaart of 1 eigen plek.`,
      "Laat leerlingen tegelijk starten en gebruik daarna een korte klassikale controle."
    ];
  }

  if (organization.type === "pairs") {
    return [
      `Werk met ${PAIR_OR_TRIO_UNITS.length - 1} tweetallen en 1 drietal.`,
      printProfile.expandWorkCardsToClassSize
        ? `Geef ieder duo of trio een passende set uit ${CLASS_SIZE} leerlingkaartjes.`
        : `Gebruik ${organization.workCardTarget} werkkaartjes zodat elk duo of trio direct kan starten.`,
      visual === "dictation"
        ? "Wissel binnen elk duo of trio de rollen van loper, schrijver en controleur."
        : visual === "stations"
          ? "Laat ieder duo of trio bij een eigen post starten en schuif na elk signaal door naar de volgende post."
        : "Laat de tweetallen tegelijk werken en wissel daarna kort van rol of looprichting."
    ];
  }

  if (organization.type === "row-pairs") {
    return [
      `Zet de klas in twee rijen met ${PAIR_OR_TRIO_UNITS.length - 1} tweetallen en 1 drietal.`,
      `Gebruik ${organization.workCardTarget} vraagkaartjes of gesprekskaarten zodat alle duo's tegelijk kunnen starten.`,
      "Laat na elke ronde één rij doorschuiven en houd het drietal samen aan het uiteinde."
    ];
  }

  if (organization.type === "teams" || organization.type === "small-groups") {
    return [
      `Werk met ${CLASS_GROUP_COUNT} groepjes van ${CLASS_GROUP_SIZE} leerlingen.`,
      ["stations", "relay"].includes(visual)
        ? "Laat alle groepjes tegelijk werken met vaste wisselmomenten of beurten."
        : "Laat elk groepje dezelfde opdracht uitvoeren met een eigen rolverdeling.",
      "Gebruik de groepskaarten om materialen en antwoorden per groep overzichtelijk te houden."
    ];
  }

  if (visual === "corners") {
    return [
      "Werk klassikaal met vaste hoeken in het lokaal.",
      "Laat leerlingen eerst een plek kiezen en daarna in de eigen woorden uitleggen waarom die keuze past.",
      "Gebruik de middenplek voor twijfelgevallen of een korte nabespreking."
    ];
  }

  if (visual === "stations") {
    return [
      "Werk met vaste posten in het lokaal en laat de klas verspreid starten.",
      "Laat leerlingen individueel of per korte beurt werken en wissel na een duidelijk signaal door.",
      "Leg per post het juiste kaartje of blad klaar, zodat iedereen meteen weet waar de volgende stap begint."
    ];
  }

  if (visual === "path") {
    return [
      "Werk met een vaste route door lokaal of gang en houd de looprichting gelijk.",
      "Laat leerlingen of duo's verspreid starten, zodat de route rustig en overzichtelijk blijft.",
      "Gebruik per stop 1 duidelijke kaart of vraag en sluit af met een korte gezamenlijke check."
    ];
  }

  if (visual === "line") {
    return [
      "Werk klassikaal met één duidelijke vloer- of lijnopstelling.",
      "Laat steeds een paar leerlingen actief plaatsen, terwijl de rest mee controleert en hardop verwoordt.",
      "Lees of controleer daarna samen de hele volgorde."
    ];
  }

  if (visual === "measure") {
    return [
      "Werk met 1 duidelijke meetplek of vloermodel voor de hele klas.",
      "Laat steeds een kleine beurtgroep uitvoeren, terwijl de rest observeert en meedenkt.",
      "Wissel na iedere opdracht of meting van leerling of rol, zodat iedereen actief aan bod komt."
    ];
  }

  if (visual === "circle") {
    return [
      "Werk klassikaal vanuit een kring, centrale plek of vrije vloer.",
      "Laat steeds 1 duo, trio of leerling actief voordoen terwijl de rest meekijkt en mee benoemt.",
      "Gebruik korte wisselmomenten, zodat veel leerlingen snel aan de beurt komen."
    ];
  }

  return [
    "Werk klassikaal met vaste plekken in het lokaal.",
    "Laat een kleine groep actief uitvoeren en laat de rest observeren, meedenken of daarna wisselen.",
    "Gebruik de laatste stap voor gezamenlijke controle of een korte nabespreking."
  ];
}

function finalizeSupportCardsForClass(cards, visual, organization) {
  const merged = [...cards, ...getClassManagementSupportCards(visual, organization)];
  const seen = new Set();

  return merged.filter((cardItem) => {
    const fingerprint = normalize(`${cardItem.label} ${cardItem.text}`);

    if (seen.has(fingerprint)) {
      return false;
    }

    seen.add(fingerprint);
    return true;
  });
}

function getClassManagementSupportCards(visual, organization) {
  const groupCards = organization.units.map((unit) =>
    card("Groepskaart", unit.label, `Gebruik deze kaart bij ${unit.label.toLowerCase()} (${formatLearnerCount(unit.size)}).`)
  );

  if (organization.type === "pairs" && visual === "dictation") {
    return [
      ...groupCards,
      ...organization.units.map((unit) =>
        card("Rolkaart", `Loper ${unit.label.replace("Tweetal ", "").replace("Drietal ", "")}`, `Gebruik deze rolkaart bij ${unit.label.toLowerCase()}.`)
      ),
      ...organization.units.map((unit) =>
        card("Rolkaart", `Schrijver ${unit.label.replace("Tweetal ", "").replace("Drietal ", "")}`, `Gebruik deze rolkaart bij ${unit.label.toLowerCase()}.`)
      ),
      ...organization.units.map((unit) =>
        card("Rolkaart", `Controleur ${unit.label.replace("Tweetal ", "").replace("Drietal ", "")}`, `Gebruik deze rolkaart bij ${unit.label.toLowerCase()}.`)
      )
    ];
  }

  if (organization.type === "pairs" && visual === "stations") {
    return [
      ...groupCards,
      card("Hulpkaart", "Startsignaal", "Gebruik deze kaart om alle duo's en het drietal tegelijk te laten starten."),
      card("Hulpkaart", "Postwissel", "Gebruik deze kaart bij elk wisselmoment tussen de posten."),
      card("Hulpkaart", "Controle", "Gebruik deze kaart bij de gezamenlijke afronding of nabespreking.")
    ];
  }

  if (organization.type === "pairs") {
    return [
      ...groupCards,
      card("Hulpkaart", "Start", "Gebruik deze kaart voor een gezamenlijke start."),
      card("Hulpkaart", "Wissel", "Gebruik deze kaart bij het wisselen van rol of kaart.")
    ];
  }

  if (organization.type === "row-pairs") {
    return [
      ...groupCards,
      card("Hulpkaart", "Rij A", "Gebruik deze kaart bij de eerste rij."),
      card("Hulpkaart", "Rij B", "Gebruik deze kaart bij de tweede rij."),
      card("Hulpkaart", "Doorschuiven", "Gebruik deze kaart bij elk wisselmoment.")
    ];
  }

  if (visual === "stations") {
    return [
      ...groupCards,
      card("Hulpkaart", "Startsignaal", "Gebruik deze kaart om alle groepjes tegelijk te laten starten."),
      card("Hulpkaart", "Doorwisselen", "Gebruik deze kaart bij elk wisselmoment."),
      card("Hulpkaart", "Eindcontrole", "Gebruik deze kaart bij de gezamenlijke afronding.")
    ];
  }

  if (visual === "corners" && organization.type !== "whole-class") {
    return [
      ...groupCards,
      card("Hulpkaart", "Twijfelplek", "Gebruik deze kaart als middenplek voor klassikale bespreking."),
      card("Hulpkaart", "Leg uit", "Gebruik deze kaart als herinnering om de keuze hardop toe te lichten.")
    ];
  }

  if (visual === "path" || visual === "mission" || visual === "relay") {
    return [
      ...groupCards,
      card("Hulpkaart", "Start", "Gebruik deze kaart voor het gezamenlijke begin."),
      card("Hulpkaart", "Controle", "Gebruik deze kaart bij het checkpunt."),
      card("Hulpkaart", "Klaar", "Gebruik deze kaart bij de afronding.")
    ];
  }

  if (visual === "line" && organization.type !== "whole-class") {
    return [
      ...groupCards,
      card("Hulpkaart", "Set 1", "Gebruik deze kaart bij de eerste werkset."),
      card("Hulpkaart", "Set 2", "Gebruik deze kaart bij de tweede werkset."),
      card("Hulpkaart", "Set 3", "Gebruik deze kaart bij de derde werkset."),
      card("Hulpkaart", "Set 4", "Gebruik deze kaart bij de vierde werkset."),
      card("Hulpkaart", "Set 5", "Gebruik deze kaart bij de vijfde werkset.")
    ];
  }

  return groupCards;
}

function getPrintSequenceLabels(visual) {
  if (visual === "dictation") {
    return ["HANG OP", "LOOP", "SCHRIJF", "WISSEL"];
  }

  if (visual === "stations") {
    return ["LEG NEER", "START", "WISSEL", "CHECK"];
  }

  if (visual === "corners") {
    return ["KIES", "LOOP", "LEG UIT", "CHECK"];
  }

  if (visual === "path" || visual === "mission") {
    return ["START", "VOLG", "BESPREEK", "FINISH"];
  }

  if (visual === "line") {
    return ["LEG", "LOOP", "LEES", "CHECK"];
  }

  return ["KLAAR", "UITLEG", "OEFEN", "CHECK"];
}

function getPrintSequenceText(steps) {
  return steps.slice(0, 4).map((step, index) => `${index + 1}. ${shortenPrintText(step, 78)}`);
}

function shortenPrintText(text, maxLength = 78) {
  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength - 1).trimEnd()}…`;
}

function buildCardIntro(subject, moment, group, title, cardCount, printProfile, organization) {
  const methodLine =
    subject.id === "spelling"
      ? "De inhoud volgt de lijn van Staal 2 met herkenbare categorieen, klankgroepen en waar nodig het werkwoordschema."
      : subject.id === "rekenen"
        ? "De inhoud sluit aan bij Getal & Ruimte Junior met automatiseren, rekentaal, vaste strategieen en duidelijke modellen."
        : "De inhoud sluit aan bij Staal 2 taal met spreken, luisteren, woordenschat, tekstopbouw en tekstverbanden.";

  const distributionLine = printProfile.expandWorkCardsToClassSize
    ? `Je krijgt ${cardCount} leerlingkaartjes, passend voor een klas van ${CLASS_SIZE} leerlingen.`
    : organization.type === "pairs" || organization.type === "row-pairs"
      ? `Je krijgt ${cardCount} werkkaarten, passend voor ${PAIR_OR_TRIO_UNITS.length - 1} tweetallen en 1 drietal.`
      : organization.type === "teams" || organization.type === "small-groups"
        ? `Je krijgt ${cardCount} werkkaarten of werksets, passend voor ${CLASS_GROUP_COUNT} groepjes van ${CLASS_GROUP_SIZE}.`
        : `Je krijgt ${cardCount} gerichte opdrachtkaarten of bladen voor deze werkvorm.`;

  return `Deze printset sluit direct aan bij ${title} voor ${group.label}. ${distributionLine} Gebruik ze binnen ${moment.label.toLowerCase()} voor ${subject.label.toLowerCase()}. ${methodLine}`;
}

function buildCardNote(subjectId, groupId, visual, taskKey) {
  if (taskKey === "loopdictee-woordenschat" || taskKey === "loopdictee-kernzinnen") {
    return [
      "Hang de stroken verspreid op en laat de loper steeds maar 1 strook tegelijk ophalen.",
      "Laat het tweetal na elke ronde hardop herhalen wat de kernzin of het woord betekent voordat ze iets opschrijven.",
      "Gebruik de laatste ronde om samen de hoofdgedachte, het kernwoord of een voorbeeldzin te formuleren."
    ];
  }

  if (taskKey === "waar-hoort-het-woord" || taskKey === "woordveld-in-de-ruimte" || taskKey === "tekstsoorten-hoeken") {
    return [
      "Print eerst de grote hoekkaarten en leg of hang daarna pas de losse woord- of fragmentkaartjes klaar.",
      "Laat leerlingen steeds eerst kiezen en daarna in 1 volledige zin uitleggen waarom die plek klopt.",
      "Gebruik het middenvak of een aparte twijfelplek voor woorden of fragmenten waarover je samen wilt praten."
    ];
  }

  if (taskKey === "zinnenstraat") {
    return [
      "Print de woordkaartjes per zinset in dezelfde kleur zodat leerlingen sneller een complete zin kunnen bouwen.",
      "Laat de klas de zin eerst hardop lezen en verwissel daarna bewust 2 kaartjes om woordvolgorde te bespreken.",
      "Gebruik een extra ronde waarin leerlingen zelf een ontbrekend woord toevoegen."
    ];
  }

  if (taskKey === "verhaalpad-drie-stappen") {
    return [
      "Leg begin, midden en einde zichtbaar op de vloer en houd de gebeurteniskaarten apart in je hand of op een stapel.",
      "Laat leerlingen na hun keuze uitleggen waarom de gebeurtenis juist aan het begin, in het midden of aan het einde hoort.",
      "Gebruik de drie stapplaatsen daarna als steun om het hele verhaal na te vertellen."
    ];
  }

  if (taskKey === "vraag-en-antwoordwandeling" || taskKey === "interviewcarrousel") {
    return [
      "Print de vraagkaartjes groot genoeg zodat tweetallen ze al lopend of staand kunnen lezen.",
      "Spreek af dat het antwoord altijd in een volledige zin begint en dat de luisteraar 1 vervolgvraag stelt.",
      "Laat tweetallen aan het einde 1 sterk antwoord kiezen om klassikaal te delen."
    ];
  }

  if (taskKey === "schrijfronde-met-stopplaatsen" || taskKey === "schrijfposten") {
    return [
      "Leg de postkaarten in vaste volgorde neer en laat leerlingen steeds alleen op die ene stap focussen.",
      "Gebruik de schrijfhulpkaartjes pas na de eerste denktijd, zodat leerlingen eerst zelf formuleren.",
      "Lees aan het einde de opbouw terug: begin, kern en slot of doel, publiek, kern en slot."
    ];
  }

  if (taskKey === "alinea-opstelling") {
    return [
      "Leg eerst de grote kaarten inleiding, kern en slot neer en voeg daarna pas de losse ideekaarten toe.",
      "Laat leerlingen bij elke kaart benoemen welke functie dat deel in de tekst heeft.",
      "Gebruik een tweede ronde waarin leerlingen zelf nog een passende zin bij de juiste plek brengen."
    ];
  }

  if (taskKey === "woordweb-op-de-vloer") {
    return [
      "Leg het kernwoord in het midden en plaats daarna de categorielabels er duidelijk omheen.",
      "Laat leerlingen hun kaartje neerleggen en hardop benoemen of het een eigenschap, onderdeel, handeling of voorbeeld is.",
      "Voeg pas daarna eigen woorden van leerlingen toe, zodat het basiswoordweb eerst stevig staat."
    ];
  }

  if (taskKey === "signaalwoorden-route") {
    return [
      "Print zowel de tekstverband-plekken als de losse signaalwoorden en houd de voorbeeldzinnen apart als tweede ronde.",
      "Laat leerlingen eerst het tekstverband kiezen en daarna een voorbeeldzin maken met hetzelfde signaalwoord.",
      "Bespreek steeds welk verband het signaalwoord zichtbaar maakt: tijd, oorzaak-gevolg, opsomming of tegenstelling."
    ];
  }

  if (taskKey === "argumentenlijn" || taskKey === "presentatiepad") {
    return [
      "Leg de stapkaarten in vaste volgorde neer en laat leerlingen pas daarna hun eigen kaartje of spreektekst koppelen.",
      "Gebruik steeds dezelfde volgorde hardop: standpunt - argument - voorbeeld of opening - kern - afsluiting.",
      "Laat maatjes aan het einde kort feedback geven op duidelijkheid, volgorde en compleetheid."
    ];
  }

  if (taskKey === "zoek-je-spellingmaatje" || taskKey === "zoek-de-juiste-spellingpartner") {
    return [
      "Geef iedere leerling één kaart en laat leerlingen pas stoppen als zij hun match of matchgroep kunnen uitleggen.",
      "Leg vooraf kort voor hoe een goede uitleg klinkt: noem het patroon, de categorie of de regel.",
      "Gebruik de klassikale nabespreking om één of twee twijfelgevallen samen te verklaren."
    ];
  }

  if (taskKey === "werkwoordschema-op-de-vloer") {
    return [
      "Leg de vijf stapkaarten in vaste volgorde op de vloer en gebruik steeds dezelfde denkrichting.",
      "Kies per ronde één zinkaart en laat één leerling hardop door het schema lopen.",
      "Bespreek pas na het lopen welke werkwoordsvorm je opschrijft; zo blijft de controlevolgorde centraal."
    ];
  }

  if (taskKey === "zin-in-delen") {
    return [
      "Print de zinsdeelkaarten per set in één kleur zodat leerlingen sneller complete zinnen kunnen bouwen.",
      "Laat leerlingen eerst de zin leggen en pas daarna onderwerp en persoonsvorm aanwijzen.",
      "Gebruik een extra ronde met omgedraaide volgorde als je inversie wilt oefenen."
    ];
  }

  if (taskKey === "lettergroepstraat" || taskKey === "korte-klank-lange-stap") {
    return [
      "Leg de labelkaarten eerst goed zichtbaar neer voordat je met de woordkaarten start.",
      "Gebruik per ronde maar één woordkaart tegelijk zodat de aandacht volledig naar de klank en de spelling gaat.",
      "Bespreek na elke ronde kort wat je hoort én wat je daarom opschrijft."
    ];
  }

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

  if (subjectId === "taal" && groupId === GROUP_34) {
    return [
      "Laat leerlingen nieuwe woorden en zinnen steeds eerst hardop zeggen voordat zij lopen, leggen of kiezen.",
      "Gebruik korte praatsteunen zoals wat betekent dit, waar hoort dit en maak een zin om taal en beweging te verbinden.",
      "Houd de kaartsets klein en overzichtelijk zodat de aandacht bij woordenschat, zinsbouw en verhaalvolgorde blijft."
    ];
  }

  if (subjectId === "taal") {
    return [
      "Laat leerlingen steeds in volledige zinnen antwoorden en kort uitleggen waarom een kaart, kernwoord of plek past.",
      "Gebruik taalsteun uit de lijn van Staal 2 zoals kernzin, signaalwoord, tekstdeel, standpunt of argument.",
      "Kies liever 1 duidelijke taalhandeling per ronde dan te veel doelen tegelijk."
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

function cardSeries(label, items, hint) {
  return items.map((text, index) =>
    card(`${label} ${index + 1}`, text, typeof hint === "function" ? hint(text, index) : hint)
  );
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
  ),
  ...buildDocTaalCardOverrides(),
  ...buildDocSpellingCardOverrides(),
  ...buildDocRekenenCardOverrides()
  };

  return getCardPackOverrides.cache;
}

function buildDocTaalCardOverrides() {
  return {
    "waar-hoort-het-woord": [
      card("Hoekkaart", "Beroep", "Hang deze hoekkaart zichtbaar op."),
      card("Hoekkaart", "Plaats", "Hang deze hoekkaart zichtbaar op."),
      card("Hoekkaart", "Voorwerp", "Hang deze hoekkaart zichtbaar op."),
      card("Hoekkaart", "Handeling", "Hang deze hoekkaart zichtbaar op."),
      ...cardSeries(
        "Woordkaart",
        ["bakker", "bibliotheek", "schaar", "springen", "dierenarts", "speelplein", "vergrootglas", "schrijven"],
        "Lees het woord en laat leerlingen naar de juiste categoriehoek lopen."
      )
    ],
    "loopdictee-woordenschat": cardSeries(
      "Woordkaart",
      ["boerderij", "tractor", "regenlaars", "dierenarts", "schuur", "weiland", "voeren", "modder"],
      "Hang deze woordkaart op voor het loopdictee. Laat tweetallen het woord uitspreken, de betekenis benoemen en er een zin mee maken."
    ),
    "loopdictee-kernzinnen": cardSeries(
      "Kernzin",
      [
        "Een vulkaan is een berg met een opening.",
        "Diep in de aarde zit heet gesteente.",
        "Bij een uitbarsting komen lava en as naar buiten.",
        "Niet alle vulkanen zijn altijd actief.",
        "Onderzoekers meten signalen om gevaar te voorspellen.",
        "Daarom wonen mensen rond een vulkaan extra alert."
      ],
      "Hang deze kernzin op voor het loopdictee en laat tweetallen samen de hoofdgedachte formuleren."
    ),
    "vraag-en-antwoordwandeling": cardSeries(
      "Vraagkaart",
      [
        "Wat is het belangrijkste woord uit dit onderwerp?",
        "Wat gebeurde eerst in de tekst of het verhaal?",
        "Waarom gebeurde dat volgens jou?",
        "Welk voorbeeld past goed bij dit onderwerp?",
        "Welke zin vat dit stukje het best samen?",
        "Wat zou je nog willen weten over dit onderwerp?",
        "Welke oorzaak hoort bij deze situatie?",
        "Hoe leg jij dit begrip uit aan een klasgenoot?"
      ],
      "Leg deze vraagkaart op de route. Laat het maatje antwoorden in een volledige zin en laat de ander 1 vervolgvraag stellen."
    ),
    "schrijfronde-met-stopplaatsen": [
      card("Stopkaart", "Begin", "Leg deze kaart bij de eerste schrijfplek."),
      card("Stopkaart", "Midden", "Leg deze kaart bij de tweede schrijfplek."),
      card("Stopkaart", "Slot", "Leg deze kaart bij de derde schrijfplek."),
      card("Stopkaart", "Controle", "Gebruik deze kaart bij het teruglezen."),
      card("Schrijfhulp", "Schrijf eerst waar je tekst over gaat.", "Gebruik deze prompt bij begin."),
      card("Schrijfhulp", "Voeg in het midden een voorbeeld of uitleg toe.", "Gebruik deze prompt bij midden."),
      card("Schrijfhulp", "Rond af met een passende laatste zin.", "Gebruik deze prompt bij slot."),
      card("Schrijfhulp", "Lees je tekst terug: klopt de volgorde?", "Gebruik deze prompt bij controle.")
    ],
    interviewcarrousel: cardSeries(
      "Interviewvraag",
      [
        "Welk boek of onderwerp vind jij interessant en waarom?",
        "Welke vraag zou jij nog aan de hoofdpersoon stellen?",
        "Wat is volgens jou de belangrijkste informatie uit deze tekst?",
        "Welk voorbeeld maakt jouw uitleg sterker?",
        "Wanneer verander jij van mening over een onderwerp?",
        "Hoe merk je dat iemand goed luistert?",
        "Welke samenvattende zin past bij dit thema?",
        "Welk woord uit dit onderwerp wil jij onthouden?"
      ],
      "Gebruik deze vraagkaart in de carrousel. Laat de luisteraar ook 1 doorvraag stellen."
    ),
    schrijfposten: [
      card("Postkaart", "Doel", "Leg deze post als eerste neer."),
      card("Postkaart", "Publiek", "Leg deze post als tweede neer."),
      card("Postkaart", "Kern", "Leg deze post als derde neer."),
      card("Postkaart", "Slot", "Leg deze post als vierde neer."),
      card("Schrijfhulp", "Waarom schrijf je deze tekst?", "Gebruik bij post doel."),
      card("Schrijfhulp", "Voor wie schrijf je deze tekst?", "Gebruik bij post publiek."),
      card("Schrijfhulp", "Welke 2 kernpunten moeten erin?", "Gebruik bij post kern."),
      card("Schrijfhulp", "Hoe sluit je duidelijk af?", "Gebruik bij post slot.")
    ],
    zinnenstraat: [
      card("Zinset 1", "ik", "Leg deze kaart vooraan in zinset 1."),
      card("Zinset 1", "zie", "Leg deze kaart na het onderwerp."),
      card("Zinset 1", "een", "Leg deze kaart als lidwoord."),
      card("Zinset 1", "kat", "Leg deze kaart achteraan in zinset 1."),
      card("Zinset 2", "Noor", "Leg deze kaart vooraan in zinset 2."),
      card("Zinset 2", "leest", "Gebruik als persoonsvorm."),
      card("Zinset 2", "in", "Gebruik als tussenwoord."),
      card("Zinset 2", "de klas", "Leg deze woordgroep aan het einde."),
      card("Zinset 3", "wij", "Leg deze kaart vooraan in zinset 3."),
      card("Zinset 3", "lopen", "Gebruik als persoonsvorm."),
      card("Zinset 3", "naar", "Gebruik als verbindend woord."),
      card("Zinset 3", "buiten", "Leg deze kaart achteraan in zinset 3.")
    ],
    "verhaalpad-drie-stappen": [
      card("Stapkaart", "Begin", "Leg deze kaart op de eerste plek."),
      card("Stapkaart", "Midden", "Leg deze kaart op de tweede plek."),
      card("Stapkaart", "Einde", "Leg deze kaart op de derde plek."),
      card("Gebeurtenis", "Noor trekt haar laarzen aan.", "Laat leerlingen bepalen waar dit in het verhaal hoort."),
      card("Gebeurtenis", "De klas loopt naar het bos.", "Laat leerlingen bepalen waar dit in het verhaal hoort."),
      card("Gebeurtenis", "De kinderen horen geritsel in de struiken.", "Laat leerlingen bepalen waar dit in het verhaal hoort."),
      card("Gebeurtenis", "Ze vinden een leeg nest.", "Laat leerlingen bepalen waar dit in het verhaal hoort."),
      card("Gebeurtenis", "Het begint zacht te regenen.", "Laat leerlingen bepalen waar dit in het verhaal hoort."),
      card("Gebeurtenis", "Iedereen loopt blij terug naar school.", "Laat leerlingen bepalen waar dit in het verhaal hoort.")
    ],
    "woordveld-in-de-ruimte": [
      card("Categorie", "Dieren", "Hang deze categoriekaart zichtbaar op."),
      card("Categorie", "Spullen", "Hang deze categoriekaart zichtbaar op."),
      card("Categorie", "Plekken", "Hang deze categoriekaart zichtbaar op."),
      card("Categorie", "Acties", "Hang deze categoriekaart zichtbaar op."),
      ...cardSeries(
        "Woordkaart",
        ["schaap", "tractor", "stal", "rennen", "koe", "kruiwagen", "weiland", "voeren"],
        "Laat leerlingen dit woord bij de juiste themacategorie leggen of brengen."
      )
    ],
    "alinea-opstelling": [
      card("Tekstdeel", "Inleiding", "Leg deze kaart vooraan in de opstelling."),
      card("Tekstdeel", "Kern", "Leg deze kaart in het midden."),
      card("Tekstdeel", "Slot", "Leg deze kaart achteraan."),
      card("Ideekaart", "Hier vertel je waar de tekst over gaat.", "Past bij de inleiding."),
      card("Ideekaart", "Hier geef je uitleg en voorbeelden.", "Past bij de kern."),
      card("Ideekaart", "Hier rond je af of trek je een conclusie.", "Past bij het slot."),
      card("Zinidee", "De schooltuin wordt steeds groener.", "Laat leerlingen kiezen waar deze zin het best past."),
      card("Zinidee", "Veel kinderen helpen met zaaien en water geven.", "Laat leerlingen kiezen waar deze zin het best past."),
      card("Zinidee", "Daarom is de schooltuin een fijne leerplek.", "Laat leerlingen kiezen waar deze zin het best past.")
    ],
    "woordweb-op-de-vloer": [
      card("Kernwoord", "vulkaan", "Leg dit woord in het midden van het woordweb."),
      card("Relatie", "eigenschap", "Leg deze labelkaart rond het kernwoord."),
      card("Relatie", "onderdeel", "Leg deze labelkaart rond het kernwoord."),
      card("Relatie", "handeling", "Leg deze labelkaart rond het kernwoord."),
      card("Relatie", "voorbeeld", "Leg deze labelkaart rond het kernwoord."),
      ...cardSeries(
        "Woordkaart",
        ["heet", "gevaarlijk", "krater", "lava", "uitbarsten", "roken", "berg", "as"],
        "Laat leerlingen dit woord koppelen aan de juiste plek in het woordweb."
      )
    ],
    "signaalwoorden-route": [
      card("Plekkaart", "Tijd", "Hang deze kaart bij de plek voor tijd."),
      card("Plekkaart", "Oorzaak-gevolg", "Hang deze kaart bij de plek voor oorzaak-gevolg."),
      card("Plekkaart", "Opsomming", "Hang deze kaart bij de plek voor opsomming."),
      card("Plekkaart", "Tegenstelling", "Hang deze kaart bij de plek voor tegenstelling."),
      ...cardSeries(
        "Signaalwoord",
        ["daarna", "eerst", "omdat", "daardoor", "ten eerste", "ook", "maar", "toch"],
        "Laat leerlingen het signaalwoord naar het juiste tekstverband brengen en er daarna een voorbeeldzin mee maken."
      )
    ],
    argumentenlijn: [
      card("Stapkaart", "Standpunt", "Leg deze kaart op de eerste plek van de lijn."),
      card("Stapkaart", "Argument", "Leg deze kaart op de tweede plek van de lijn."),
      card("Stapkaart", "Voorbeeld", "Leg deze kaart op de derde plek van de lijn."),
      card("Kaartset A", "Standpunt: iedere leerling zou buiten mogen lezen.", "Laat leerlingen deze kaart op de juiste plek zetten."),
      card("Kaartset A", "Argument: buiten lezen geeft meer rust en frisse lucht.", "Laat leerlingen deze kaart op de juiste plek zetten."),
      card("Kaartset A", "Voorbeeld: op het plein leest onze klas vaak langer geconcentreerd.", "Laat leerlingen deze kaart op de juiste plek zetten."),
      card("Kaartset B", "Standpunt: telefoons horen niet mee op schoolreis.", "Laat leerlingen deze kaart op de juiste plek zetten."),
      card("Kaartset B", "Argument: zonder telefoon let je beter op wat je ziet en hoort.", "Laat leerlingen deze kaart op de juiste plek zetten."),
      card("Kaartset B", "Voorbeeld: vorig jaar onthielden leerlingen de rondleiding beter zonder scherm.", "Laat leerlingen deze kaart op de juiste plek zetten.")
    ],
    "tekstsoorten-hoeken": [
      card("Hoekkaart", "Verhaal", "Hang deze hoekkaart zichtbaar op."),
      card("Hoekkaart", "Instructie", "Hang deze hoekkaart zichtbaar op."),
      card("Hoekkaart", "Nieuwsbericht", "Hang deze hoekkaart zichtbaar op."),
      card("Hoekkaart", "Meningstekst", "Hang deze hoekkaart zichtbaar op."),
      ...cardSeries(
        "Fragment",
        [
          "Gisteren vond Noor een sleutel onder de bank.",
          "Pak eerst een glas en vul het met water.",
          "De school opent volgende week een nieuwe leestuin.",
          "Ik vind dat elke klas meer buitenles moet krijgen.",
          "Daarna liep de hond ineens het bos in.",
          "Roer de verf eerst goed door.",
          "Volgens de directeur doen 200 kinderen mee.",
          "Mijn eerste argument is dat bewegen helpt om beter te leren."
        ],
        "Lees of geef dit fragment en laat leerlingen naar de passende tekstsoorthoek lopen."
      )
    ],
    presentatiepad: [
      card("Stapkaart", "Opening", "Leg deze kaart aan het begin van het presentatiepad."),
      card("Stapkaart", "Kernpunt 1", "Leg deze kaart als tweede stap."),
      card("Stapkaart", "Kernpunt 2", "Leg deze kaart als derde stap."),
      card("Stapkaart", "Voorbeeld", "Leg deze kaart als extra stap of bronmoment."),
      card("Stapkaart", "Afsluiting", "Leg deze kaart aan het einde van het pad."),
      card("Spreekhulp", "Stel jezelf en je onderwerp kort voor.", "Gebruik bij de opening."),
      card("Spreekhulp", "Noem hier je eerste belangrijke punt.", "Gebruik bij kernpunt 1."),
      card("Spreekhulp", "Noem hier een voorbeeld of bron.", "Gebruik bij de voorbeeldstap."),
      card("Spreekhulp", "Sluit af met je belangrijkste boodschap.", "Gebruik bij de afsluiting.")
    ]
  };
}

function buildDocSpellingCardOverrides() {
  return {
    "loopdictee-luisterwoorden": cardSeries(
      "Woordkaart",
      ["maan", "vis", "raam", "pen", "boom", "teen", "sok", "boek"],
      "Hang deze woordkaart op loopafstand op. Laat tweetallen het woord ophalen, hakken en daarna opschrijven."
    ),
    "woordkaartjes-estafette": cardSeries(
      "Woordkaart",
      ["maan", "roos", "vis", "boek", "teen", "raam", "pen", "muis", "sok", "deur"],
      "Gebruik deze woordkaart in de estafette en laat het team eerst het patroon of de klank benoemen."
    ),
    "zoek-je-spellingmaatje": [
      ...cardSeries("Patroon korte klank a/o", ["kat", "tak", "zon", "bos", "rok"], "Zoek woorden met hetzelfde korte-klankpatroon."),
      ...cardSeries("Patroon korte klank e/i/u", ["vis", "pen", "bus", "kin", "lip"], "Zoek woorden met hetzelfde korte-klankpatroon."),
      ...cardSeries("Patroon lange klank aa", ["maan", "raam", "kaas", "taak", "haas"], "Zoek woorden met hetzelfde lange-klankpatroon."),
      ...cardSeries("Patroon lange klank ee/oo", ["teen", "been", "boom", "noot", "roos"], "Zoek woorden met hetzelfde lange-klankpatroon."),
      ...cardSeries("Patroon tweetekenklank", ["boek", "deur", "muis", "reus", "nieuw"], "Zoek woorden met een tweetekenklank.")
    ],
    "hakkenpad-op-de-vloer": cardSeries(
      "Woordkaart",
      ["vis", "pen", "maan", "boek", "teen", "sok", "raam", "roos", "bomen", "kippen"],
      "Noem of trek dit woord en laat een leerling per klank over het pad stappen."
    ),
    "korte-klank-lange-stap": [
      card("Labelkaart", "Korte klank", "Leg deze kaart aan één kant van het lokaal."),
      card("Labelkaart", "Lange klank", "Leg deze kaart aan de andere kant van het lokaal."),
      ...cardSeries(
        "Woordkaart",
        ["zon", "bomen", "kippen", "ramen", "boten", "bommen", "takken", "vuren"],
        "Lees dit woord voor of laat het zien en laat leerlingen naar de juiste kant lopen."
      )
    ],
    "hoeken-kiezen-bij-spelling": [
      card("Hoekkaart", "Luisterwoord", "Hang deze hoekkaart zichtbaar op."),
      card("Hoekkaart", "Lettergroepwoord", "Hang deze hoekkaart zichtbaar op."),
      card("Hoekkaart", "Regelwoord", "Hang deze hoekkaart zichtbaar op."),
      card("Hoekkaart", "Weetwoord", "Hang deze hoekkaart zichtbaar op."),
      ...cardSeries(
        "Woordkaart",
        ["boom", "apen", "kippen", "geit", "circus", "boompje", "trein", "honden"],
        "Lees het woord voor en laat leerlingen naar de juiste categoriehoek lopen."
      )
    ],
    "loopdictee-categorie-van-de-week": cardSeries(
      "Woord- of zinstrook",
      [
        "apen",
        "kippen",
        "geit",
        "circus",
        "Wij lopen naar buiten.",
        "De honden rennen naar huis.",
        "Ik zie een schilderij.",
        "De trein rijdt op tijd."
      ],
      "Hang deze strook op voor het loopdictee en laat tweetallen bij terugkomst de categorie of regel benoemen."
    ),
    categoriecircuit: [
      card("Station 1", "Luisterwoorden\nSchrijf: boom, vis, raam.\nZeg de klanken eerst hardop.", "Gebruik als eerste post."),
      card("Station 2", "Lettergroepwoorden\nKies de goede spelling: apen / aapen, kippen / kipen.", "Gebruik als tweede post."),
      card("Station 3", "Weetwoorden\nSchrijf de goede vorm: geit, trein, circus.", "Gebruik als derde post."),
      card("Station 4", "Regelwoorden\nMaak het verkleinwoord van: boom, ring, kip.", "Gebruik als vierde post."),
      card("Station 5", "Controle\nLees de woorden terug en noem de categorie.", "Gebruik als vijfde post."),
      card("Station 6", "Pluspost\nBedenk zelf nog één woord dat in dezelfde categorie past.", "Gebruik als zesde post of plusronde.")
    ],
    "zoek-de-juiste-spellingpartner": [
      ...cardSeries("Matchgroep A", ["apen", "lettergroepwoord", "lange klank in open lettergreep", "één klinker", "ramen"], "Zoek de kaarten die bij deze spellingcategorie horen."),
      ...cardSeries("Matchgroep B", ["kippen", "lettergroepwoord", "korte klank in gesloten lettergreep", "dubbele medeklinker", "ratten"], "Zoek de kaarten die bij deze spellingcategorie horen."),
      ...cardSeries("Matchgroep C", ["geit", "weetwoord", "ei of ij onthouden", "woordbeeld opslaan", "trein"], "Zoek de kaarten die bij deze spellingcategorie horen."),
      ...cardSeries("Matchgroep D", ["circus", "weetwoord", "leenwoord of bijzonder woordbeeld", "je hoort niet alles precies", "bureau"], "Zoek de kaarten die bij deze spellingcategorie horen."),
      ...cardSeries("Matchgroep E", ["boompje", "regelwoord", "verkleinwoord", "let op de verandering in het woord", "ringetje"], "Zoek de kaarten die bij deze spellingcategorie horen.")
    ],
    lettergroepstraat: [
      card("Strookkaart", "Open lettergreep", "Leg deze kaart bij de eerste strook."),
      card("Strookkaart", "Gesloten lettergreep", "Leg deze kaart bij de tweede strook."),
      ...cardSeries(
        "Woordkaart",
        ["apen", "boten", "kippen", "ratten", "benen", "mannen", "ramen", "sokken"],
        "Laat leerlingen het woord in lettergrepen lopen en de delen in de juiste strook plaatsen."
      )
    ],
    weetwoordmuur: [
      card("Wandkaart", "ei", "Hang deze wandkaart boven de ei-woorden."),
      card("Wandkaart", "ij", "Hang deze wandkaart boven de ij-woorden."),
      card("Wandkaart", "au", "Hang deze wandkaart boven de au-woorden."),
      card("Wandkaart", "ou", "Hang deze wandkaart boven de ou-woorden."),
      ...cardSeries("Woordkaart", ["trein", "geit", "plein", "eiland"], "Laat leerlingen naar de juiste wand lopen en het woord daarna zonder voorbeeld opschrijven."),
      ...cardSeries("Woordkaart", ["ijs", "blij", "schilderij", "bijl"], "Laat leerlingen naar de juiste wand lopen en het woord daarna zonder voorbeeld opschrijven."),
      ...cardSeries("Woordkaart", ["pauw", "saus", "blauw"], "Laat leerlingen naar de juiste wand lopen en het woord daarna zonder voorbeeld opschrijven."),
      ...cardSeries("Woordkaart", ["touw", "goud", "hout", "koud"], "Laat leerlingen naar de juiste wand lopen en het woord daarna zonder voorbeeld opschrijven.")
    ],
    regelroute: [
      card("Set 1", "Woord: apen", "Zoek hier de regel en het voorbeeld bij."),
      card("Set 1", "Regel: lange klank in open lettergreep = één klinker", "Koppel deze regel aan het juiste woord."),
      card("Set 1", "Voorbeeld: ramen", "Gebruik dit als extra voorbeeld in dezelfde set."),
      card("Set 2", "Woord: kippen", "Zoek hier de regel en het voorbeeld bij."),
      card("Set 2", "Regel: korte klank in gesloten lettergreep = dubbele medeklinker", "Koppel deze regel aan het juiste woord."),
      card("Set 2", "Voorbeeld: ratten", "Gebruik dit als extra voorbeeld in dezelfde set."),
      card("Set 3", "Woord: geit", "Zoek hier de regel en het voorbeeld bij."),
      card("Set 3", "Regel: weetwoord, woordbeeld onthouden", "Koppel deze regel aan het juiste woord."),
      card("Set 3", "Voorbeeld: trein", "Gebruik dit als extra voorbeeld in dezelfde set."),
      card("Set 4", "Woord: boompje", "Zoek hier de regel en het voorbeeld bij."),
      card("Set 4", "Regel: verkleinwoord, let op de klank en de letterverandering", "Koppel deze regel aan het juiste woord."),
      card("Set 4", "Voorbeeld: ringetje", "Gebruik dit als extra voorbeeld in dezelfde set.")
    ],
    "vier-hoeken-categorie-of-regel": [
      card("Hoekkaart", "Werkwoordspelling", "Hang deze hoekkaart zichtbaar op."),
      card("Hoekkaart", "Weetwoord", "Hang deze hoekkaart zichtbaar op."),
      card("Hoekkaart", "Leesteken", "Hang deze hoekkaart zichtbaar op."),
      card("Hoekkaart", "Leenwoord", "Hang deze hoekkaart zichtbaar op."),
      ...cardSeries(
        "Vraagkaart",
        ["gebeurde", "cappuccino", "'Kom je?', vroeg Noor.", "chauffeur", "wordt", "pizza", "komma nodig", "veranderd / verandert"],
        "Lees dit woord of deze zin voor en laat leerlingen naar de juiste categoriehoek lopen."
      )
    ],
    "loopdictee-werkwoordspelling": cardSeries(
      "Zinstrook",
      [
        "Morgen ... hij de wedstrijd. (spelen)",
        "Gisteren ... zij de beker. (winnen)",
        "Heb jij het formulier al ... ? (invullen)",
        "Loop jij straks mee of ... je thuis? (blijven)",
        "De trainer ... dat goed. (bedoelen)",
        "Zij ... iedere dag op tijd. (fietsen)",
        "Vanmorgen ... hij te laat. (komen)",
        "Het verslag is al ... . (verbeteren)"
      ],
      "Hang deze zinstrook op voor het loopdictee en laat tweetallen de juiste werkwoordsvorm invullen en verklaren."
    ),
    leestekenroute: cardSeries(
      "Tekststrook",
      [
        "Kom je morgen mee vroeg Noor",
        "Wat een prachtig doelpunt riep Milan",
        "We nemen brood fruit en drinken mee",
        "De meester zei vandaag oefenen we leestekens",
        "Waar ligt mijn schrift vroeg Noor",
        "Pas op daar komt de bal"
      ],
      "Hang deze tekststrook op zonder leestekens en laat leerlingen noteren wat ontbreekt."
    ),
    "spellingcircuit-bovenbouw": [
      card("Station 1", "Werkwoorden\nKies: hij verandert / veranderd.\nLeg de regel uit.", "Gebruik als eerste post."),
      card("Station 2", "Weetwoorden\nSchrijf correct: cappuccino, chauffeur, bureau.", "Gebruik als tweede post."),
      card("Station 3", "Leestekens\nZet de juiste leestekens in: Kom je mee vroeg Noor", "Gebruik als derde post."),
      card("Station 4", "Leenwoorden\nKies de juiste spelling en leg uit waarom het een weetwoord is.", "Gebruik als vierde post."),
      card("Station 5", "Controlepost\nVerbeter één foutzin en noem de regel of het woordbeeld.", "Gebruik als vijfde post.")
    ],
    "werkwoordschema-op-de-vloer": [
      card("Stap 1", "Zoek het onderwerp", "Leg deze stap als eerste op de vloer."),
      card("Stap 2", "Bepaal de tijd", "Leg deze stap als tweede op de vloer."),
      card("Stap 3", "Zoek de persoonsvorm of infinitief", "Leg deze stap als derde op de vloer."),
      card("Stap 4", "Maak de stam", "Leg deze stap als vierde op de vloer."),
      card("Stap 5", "Kies de uitgang en controleer", "Leg deze stap als vijfde op de vloer."),
      ...cardSeries(
        "Zinkaart",
        [
          "Morgen ... hij de wedstrijd. (spelen)",
          "Jij ... elke dag op tijd. (fietsen)",
          "Gisteren ... zij te laat. (komen)",
          "Heb je dat al ... ? (controleren)",
          "Waarom ... hij zo hard? (rennen)"
        ],
        "Lees deze zin voor en laat een leerling het schema stap voor stap doorlopen."
      )
    ],
    "zin-in-delen": [
      card("Zinsdeel set 1", "Morgen", "Gebruik als eerste zinsdeelkaart."),
      card("Zinsdeel set 1", "fietst", "Gebruik als persoonsvormkaart."),
      card("Zinsdeel set 1", "Noor", "Gebruik als onderwerpskaart."),
      card("Zinsdeel set 1", "naar school", "Gebruik als laatste zinsdeelkaart."),
      card("Zinsdeel set 2", "Gisteren", "Gebruik als eerste zinsdeelkaart."),
      card("Zinsdeel set 2", "speelden", "Gebruik als persoonsvormkaart."),
      card("Zinsdeel set 2", "de kinderen", "Gebruik als onderwerpskaart."),
      card("Zinsdeel set 2", "op het plein", "Gebruik als laatste zinsdeelkaart."),
      card("Zinsdeel set 3", "Morgen", "Gebruik als eerste zinsdeelkaart."),
      card("Zinsdeel set 3", "win", "Gebruik als persoonsvormkaart."),
      card("Zinsdeel set 3", "jij", "Gebruik als onderwerpskaart."),
      card("Zinsdeel set 3", "de wedstrijd", "Gebruik als laatste zinsdeelkaart.")
    ],
    foutenjacht: cardSeries(
      "Foutzin",
      [
        "Morgen speeld hij de wedstrijd.",
        "Heb jij dat al gebeurd?",
        "Kom je mee vroeg Noor.",
        "De chauffeur zij dat hij wacht.",
        "Gisteren fietsde zij naar huis.",
        "Wat leuk zei Milan!"
      ],
      "Hang deze foutzin op en laat tweetallen noteren wat fout is, hoe het goed moet en welke regel daarbij hoort."
    )
  };
}

function buildDocRekenenCardOverrides() {
  return {
    "hoeken-kiezen": [
      card("Vraagkaart 1", "Welke uitkomst hoort bij 6 x 4?\nA. 20\nB. 24\nC. 28\nD. 34", "Goed antwoord: B. Laat leerlingen de tafelstrategie noemen."),
      card("Vraagkaart 2", "Welke deelsom hoort bij 24 koekjes in 6 zakjes?\nA. 24 : 4\nB. 24 : 6\nC. 6 : 24\nD. 24 - 6", "Goed antwoord: B. Koppel delen aan eerlijk verdelen."),
      card("Vraagkaart 3", "Welke breuk is groter?\nA. 1/2\nB. 1/4\nC. even groot\nD. niet te bepalen", "Goed antwoord: A. Laat leerlingen denken aan de breukenlijn."),
      card("Vraagkaart 4", "Welk kommagetal is het grootst?\nA. 0,4\nB. 0,04\nC. 0,40\nD. A en C", "Goed antwoord: D. Bespreek waarom 0,4 en 0,40 gelijk zijn."),
      card("Vraagkaart 5", "Welke som heeft uitkomst 56?\nA. 7 x 6\nB. 8 x 7\nC. 9 x 6\nD. 6 x 6", "Goed antwoord: B. Laat leerlingen de tafel hardop maken."),
      card("Vraagkaart 6", "Welke som past bij halveren?\nA. 36 : 2\nB. 36 + 2\nC. 36 x 2\nD. 36 - 2", "Goed antwoord: A. Verbind halveren met delen door 2."),
      card("Vraagkaart 7", "Wat ligt tussen 3/4 en 1?\nA. 1/2\nB. 5/6\nC. 1/4\nD. 2/4", "Goed antwoord: B. Laat leerlingen vergelijken op de lijn."),
      card("Vraagkaart 8", "Welke uitkomst is redelijk voor 39 + 19?\nA. 48\nB. 58\nC. 68\nD. 78", "Goed antwoord: B. Laat leerlingen schatten via 40 + 20.")
    ],
    "keuzehoeken-rekenen": [
      card("Vraagkaart 1", "Welke notatie past bij 75%?\nA. 1/2\nB. 3/4\nC. 1/4\nD. 4/3", "Goed antwoord: B. Laat leerlingen de koppeling tussen procent en breuk toelichten."),
      card("Vraagkaart 2", "Welke verhouding hoort bij 2 rode blokken op 6 totaal?\nA. 2/6\nB. 4/6\nC. 6/2\nD. 2/4", "Goed antwoord: A. Bespreek deel van het geheel."),
      card("Vraagkaart 3", "Wat is 25% van 200?\nA. 25\nB. 40\nC. 50\nD. 75", "Goed antwoord: C. Laat leerlingen hun strategie noemen."),
      card("Vraagkaart 4", "Welke grafiek past bij steeds sneller groeien?\nA. dalende lijn\nB. stijgende kromme\nC. horizontale lijn\nD. losse stip", "Goed antwoord: B. Bespreek wat snelle groei laat zien."),
      card("Vraagkaart 5", "Welke schaal past bij 1 cm = 100 cm?\nA. 1 : 10\nB. 1 : 50\nC. 1 : 100\nD. 1 : 1000", "Goed antwoord: C. Koppel centimeters aan de schaalnotatie."),
      card("Vraagkaart 6", "Welke uitkomst hoort bij 3/5 van 25?\nA. 10\nB. 12\nC. 15\nD. 20", "Goed antwoord: C. Laat leerlingen via 1/5 redeneren."),
      card("Vraagkaart 7", "Welke decimale notatie hoort bij 1/4?\nA. 0,25\nB. 0,4\nC. 0,75\nD. 2,5", "Goed antwoord: A. Gebruik de koppeling breuk-decimaal."),
      card("Vraagkaart 8", "Welke uitspraak klopt?\nA. 0,6 is kleiner dan 0,59\nB. 0,60 is gelijk aan 0,6\nC. 60% is kleiner dan 0,6\nD. 3/5 is groter dan 0,6", "Goed antwoord: B. Laat leerlingen meerdere notaties vergelijken.")
    ],
    sommenwandeling: cardSeries(
      "Somkaart",
      ["8 + 7", "13 - 5", "9 + 6", "15 - 8", "17 - 9", "6 + 8", "14 + 5", "18 - 7", "12 + 9", "20 - 6"],
      "Hang deze som op de route. Leerlingen onthouden de som, lopen terug en rekenen die samen uit."
    ),
    "rekenen-estafette": [
      ...cardSeries("Somkaart", ["7 + 6", "14 - 8", "9 + 8", "16 - 7", "5 + 9", "18 - 9", "8 + 7", "13 - 4"], "Leg deze somkaart aan de overkant van het lokaal."),
      ...cardSeries("Antwoordkaart", ["13", "6", "17", "9", "14", "9", "15", "9"], "Gebruik deze antwoordkaart om de som te koppelen en direct te controleren.")
    ],
    "loopdictee-rekenen": cardSeries(
      "Opgavekaart",
      [
        "Noa heeft 24 knikkers en krijgt er 18 bij. Hoeveel heeft zij nu?",
        "Er liggen 42 koekjes. Ze gaan in 6 gelijke bakjes. Hoeveel koekjes per bakje?",
        "Een lint is 36 cm lang. Je knipt er 9 cm af. Hoeveel cm blijft over?",
        "In 1 doos zitten 8 stiften. Hoeveel stiften zijn er in 7 dozen?",
        "Sara leest 15 bladzijden op maandag en 17 op dinsdag. Hoeveel samen?",
        "Een bus vertrekt met 63 kinderen. Bij de volgende stop stappen er 27 uit. Hoeveel blijven er over?",
        "Een pakje kost 39 cent. Twee pakjes kosten samen hoeveel cent?",
        "Je hebt 56 stickers en verdeelt die over 8 kinderen. Hoeveel per kind?"
      ],
      "Hang dit loopdictee op op loopafstand van de schrijfplek."
    ),
    "rekencircuit-56": [
      card("Stationkaart 1", "Tafels en delen\nLos op: 6 x 7 en 42 : 6.\nControleer of de antwoorden bij elkaar passen.", "Gebruik als eerste station."),
      card("Stationkaart 2", "Optellen en aftrekken\nLos op: 39 + 19 en 63 - 27.\nVertel welke strategie je kiest.", "Gebruik als tweede station."),
      card("Stationkaart 3", "Breuken vergelijken\nZet op volgorde: 1/2, 3/4, 1/4.\nLeg uit hoe je dat weet.", "Gebruik als derde station."),
      card("Stationkaart 4", "Kommagetallen\nWelke is groter: 0,5 of 0,05?\nNoteer waarom.", "Gebruik als vierde station."),
      card("Stationkaart 5", "Getallenlijn\nWaar hoort 75 op een lijn van 0 tot 100?\nTeken of leg de sprongen uit.", "Gebruik als vijfde station."),
      card("Stationkaart 6", "Schatten en controleren\nSchat eerst 48 - 17.\nReken daarna precies uit.", "Gebruik als zesde station.")
    ],
    "zoek-iemand-die": [
      ...cardSeries("Matchgroep A", ["1/2", "0,5", "50%", "5/10", "de helft"], "Zoek de 4 andere kaarten die dezelfde waarde voorstellen."),
      ...cardSeries("Matchgroep B", ["1/4", "0,25", "25%", "25/100", "een kwart"], "Zoek de 4 andere kaarten die dezelfde waarde voorstellen."),
      ...cardSeries("Matchgroep C", ["3/4", "0,75", "75%", "75/100", "drie kwart"], "Zoek de 4 andere kaarten die dezelfde waarde voorstellen."),
      ...cardSeries("Matchgroep D", ["1 hele", "1,0", "100%", "2/2", "10/10"], "Zoek de 4 andere kaarten die dezelfde waarde voorstellen."),
      ...cardSeries("Matchgroep E", ["1,5", "1 1/2", "150%", "15/10", "anderhalf"], "Zoek de 4 andere kaarten die dezelfde waarde voorstellen.")
    ],
    "rekencircuit-bovenbouw": [
      card("Stationkaart 1", "Procenten\nBereken 25% van 200.\nVertel waarom deze aanpak snel is.", "Gebruik als station procenten."),
      card("Stationkaart 2", "Breuk - procent - decimaal\nMaak 1 set van 1/2, 0,5 en 50%.\nLeg uit waarom ze gelijk zijn.", "Gebruik als station notaties."),
      card("Stationkaart 3", "Verhoudingen\nIn 3 glazen zit 750 ml. Hoeveel zit in 5 glazen?", "Gebruik als station verhoudingen."),
      card("Stationkaart 4", "Schaal\nEen lijn is in het echt 8 meter. Hoe lang is dat op schaal 1 : 100?", "Gebruik als station schaal."),
      card("Stationkaart 5", "Grafieken\nWelke grafiek laat de hoogste groei zien?\nNoem 1 aanwijzing.", "Gebruik als station grafieken."),
      card("Stationkaart 6", "Controleren\nSchat eerst 35% van 200.\nReken daarna precies uit.", "Gebruik als controle- of plusstation.")
    ],
    "wandel-en-leg-uit": cardSeries(
      "Strategiekaart",
      [
        "Los 48 - 19 op en vertel hardop welke handige tussenstap je gebruikt.",
        "Bereken 3/4 van 20 en leg uit waarom je eerst naar 1/4 kijkt.",
        "Leg uit hoe je 0,75 met 3/4 vergelijkt.",
        "Bereken 25% van 80 en vertel hoe je controleert.",
        "Los 63 : 9 op en benoem de bijbehorende tafelsom.",
        "Bereken 1,2 + 0,85 en leg uit hoe je de komma bewaakt.",
        "Vergelijk 2/3 en 3/4. Vertel welke groter is en waarom.",
        "Leg uit hoe je 4 x 19 handig kunt uitrekenen."
      ],
      "Geef deze kaart aan een tweetal. 1 leerling legt de aanpak uit, de ander luistert en vraagt door."
    ),
    antwoordestafette: cardSeries(
      "Opgavekaart",
      [
        "25% van 200",
        "3/5 van 25",
        "0,75 + 0,5",
        "1,25 m + 75 cm",
        "35% van 200",
        "72 : 9",
        "48 - 17",
        "6 x 8",
        "2/3 van 18",
        "0,6 + 0,45"
      ],
      "Gebruik deze opgavekaart in de estafette. Laat de leerling het antwoord op een antwoordstrook noteren."
    ),
    "getallenlijn-lopen": [
      ...cardSeries("Ankerkaart", ["0", "5", "10", "15", "20"], "Leg deze kaarten op de vloerlijn als vaste ankerpunten."),
      ...cardSeries("Sprongkaart", ["1 vooruit", "2 terug", "5 meer", "10 minder", "verdubbel", "halveer"], "Trek of lees 1 opdracht en laat een leerling bewegen op de lijn.")
    ],
    "breukenlijn-op-de-vloer": cardSeries(
      "Breukkaart",
      [
        "1/8",
        "1/4",
        "3/8",
        "1/2",
        "5/8",
        "3/4",
        "7/8",
        "1",
        "9/8",
        "5/4",
        "3/2",
        "7/4",
        "2/8",
        "2/4",
        "4/8",
        "6/8",
        "2/3",
        "1/3",
        "4/4",
        "6/4",
        "8/8",
        "10/8",
        "12/8",
        "14/8",
        "16/8"
      ],
      "Geef ieder kind 1 breukkaart en laat de klas samen de breukenlijn vullen."
    ),
    "kommagetallen-op-volgorde": cardSeries(
      "Kommagetal",
      [
        "0,04",
        "0,08",
        "0,1",
        "0,12",
        "0,2",
        "0,25",
        "0,3",
        "0,35",
        "0,4",
        "0,45",
        "0,5",
        "0,55",
        "0,6",
        "0,65",
        "0,7",
        "0,75",
        "0,8",
        "0,85",
        "0,9",
        "0,95",
        "1,0",
        "1,05",
        "1,1",
        "1,2",
        "1,25"
      ],
      "Geef ieder kind 1 kaart en laat de klas in stilte op volgorde gaan staan."
    ),
    coordinatenraster: cardSeries(
      "Coordinaatkaart",
      ["1,1", "2,3", "3,2", "4,4", "5,1", "2,5", "4,2", "1,4", "3,5", "5,3", "2,2", "4,5"],
      "Gebruik deze kaart om naar het juiste vak in het raster te lopen."
    ),
    "breuk-decimaal-procent-match": [
      ...cardSeries("Matchset A", ["1/2", "0,5", "50%", "5/10", "50/100"], "Zoek alle kaarten die dezelfde waarde voorstellen."),
      ...cardSeries("Matchset B", ["1/4", "0,25", "25%", "25/100", "2/8"], "Zoek alle kaarten die dezelfde waarde voorstellen."),
      ...cardSeries("Matchset C", ["3/4", "0,75", "75%", "75/100", "6/8"], "Zoek alle kaarten die dezelfde waarde voorstellen."),
      ...cardSeries("Matchset D", ["1/5", "0,2", "20%", "20/100", "2/10"], "Zoek alle kaarten die dezelfde waarde voorstellen."),
      ...cardSeries("Matchset E", ["1 hele", "1,0", "100%", "10/10", "4/4"], "Zoek alle kaarten die dezelfde waarde voorstellen.")
    ],
    "verhoudingentabel-op-de-vloer": [
      card("Tabelkaart 1", "1 glas", "Leg deze kaart in de bovenste rij."),
      card("Tabelkaart 2", "250 ml", "Leg deze kaart in de onderste rij."),
      card("Tabelkaart 3", "2 glazen", "Laat leerlingen de verhouding verdubbelen."),
      card("Tabelkaart 4", "500 ml", "Koppel deze kaart aan 2 glazen."),
      card("Tabelkaart 5", "4 glazen", "Gebruik dit als volgende stap in de tabel."),
      card("Tabelkaart 6", "1000 ml", "Laat leerlingen benoemen welke factor is gebruikt."),
      card("Tabelkaart 7", "6 glazen", "Gebruik voor verder doordenken in de tabel."),
      card("Tabelkaart 8", "1500 ml", "Koppel deze waarde aan 6 glazen."),
      card("Tabelkaart 9", "8 glazen", "Laat leerlingen zelf de volgende verhouding leggen."),
      card("Tabelkaart 10", "2000 ml", "Gebruik als controle of eindkaart.")
    ],
    grafiekenwandeling: [
      card("Grafiekblad 1", "Grafiek A\nMa 2\nDi 4\nWo 6\nDo 8", "Hang deze grafiek zichtbaar op."),
      card("Grafiekblad 2", "Grafiek B\nMa 8\nDi 7\nWo 5\nDo 3", "Hang deze grafiek zichtbaar op."),
      card("Grafiekblad 3", "Grafiek C\nMa 3\nDi 3\nWo 6\nDo 6", "Hang deze grafiek zichtbaar op."),
      card("Grafiekblad 4", "Grafiek D\nMa 1\nDi 5\nWo 2\nDo 7", "Hang deze grafiek zichtbaar op."),
      card("Vraagkaart 1", "Bij welke grafiek is de stijging steeds gelijk?", "Leg deze vraag bij een grafiek of laat leerlingen de beste grafiek kiezen."),
      card("Vraagkaart 2", "Bij welke grafiek daalt de waarde?", "Gebruik als vergelijkvraag."),
      card("Vraagkaart 3", "Welke dag heeft in Grafiek D de hoogste waarde?", "Gebruik als leesvraag."),
      card("Vraagkaart 4", "Welke grafiek past het best bij een schoolplein dat steeds drukker wordt?", "Gebruik als interpretatievraag."),
      card("Vraagkaart 5", "Welke grafiek heeft twee dagen dezelfde waarde?", "Gebruik als detailvraag."),
      card("Vraagkaart 6", "Welke grafiek zou passen bij een rustige, stabiele week?", "Gebruik als redeneervraag.")
    ],
    schaalwandeling: [
      card("Schaalkaart 1", "Loop 5 meter.\nVraag: hoeveel cm is dat op schaal 1 : 100?", "Gebruik als eerste schaalopgave."),
      card("Schaalkaart 2", "Loop 8 meter.\nVraag: hoeveel cm is dat op schaal 1 : 200?", "Gebruik als tweede schaalopgave."),
      card("Schaalkaart 3", "Loop 12 meter.\nVraag: hoeveel cm is dat op schaal 1 : 100?", "Gebruik als derde schaalopgave."),
      card("Schaalkaart 4", "Loop 15 meter.\nVraag: hoeveel meter is dat in het echt bij 15 cm op schaal 1 : 100?", "Gebruik als omgekeerde schaalvraag."),
      card("Schaalkaart 5", "Loop 20 meter.\nVraag: hoeveel cm is dat op schaal 1 : 250?", "Gebruik als plusopgave."),
      card("Schaalkaart 6", "Loop 25 meter.\nVraag: welke schaal geeft dan 10 cm op de tekening?", "Gebruik als verdiepingskaart.")
    ]
  };
}

function getStarterCards(subjectId, groupId, visual, taskKey, title, printProfile, organization) {
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

  return expandCardSet(normalizedItems, subjectId, groupId, family, taskKey, title, visual, printProfile, organization);
}

function getCardFamily(subjectId, taskKey, visual) {
  const key = normalize(taskKey);

  if (subjectId === "taal") {
    if (key.includes("estafette")) return "taal_estafette";
    if (
      key.includes("woord-of-geen-woord") ||
      key.includes("zin-of-geen-zin") ||
      key.includes("klank-en-gebaar") ||
      key.includes("feit-of-mening") ||
      key.includes("synoniemensprint") ||
      key.includes("kernwoord-kiezen")
    ) {
      return "taal_keuze";
    }
    if (
      key.includes("praatmaatjes") ||
      key.includes("vraag-en-antwoord") ||
      key.includes("interview") ||
      key.includes("wandel-en-vat-samen")
    ) {
      return "taal_praat";
    }
    if (key.includes("woordveld") || key.includes("woordweb") || key.includes("waar-hoort-het-woord")) return "taal_themakaarten";
    if (key.includes("loopdictee")) return "taal_dictaat";
    if (key.includes("tekstsoorten") || key.includes("hoeken")) return "taal_hoeken";
    if (key.includes("zinnenstraat") || key.includes("alinea-opstelling") || key.includes("argumentenlijn") || key.includes("standpunt")) {
      return "taal_lijn";
    }
    if (key.includes("verhaalpad") || key.includes("signaalwoorden-route") || key.includes("presentatiepad") || key.includes("schrijfposten")) {
      return "taal_route";
    }
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
    if (key.includes("hoeken-kiezen") || key.includes("keuzehoeken-rekenen")) return "rekenen_hoeken";
    if (
      key.includes("getallenlijn-lopen") ||
      key.includes("breukenlijn-op-de-vloer") ||
      key.includes("kommagetallen-op-volgorde") ||
      key.includes("verhoudingentabel-op-de-vloer") ||
      key.includes("hoeken-en-lijnen-met-je-lichaam")
    ) {
      return "rekenen_lijn";
    }
    if (
      key.includes("rekenen-estafette") ||
      key.includes("antwoordestafette") ||
      key.includes("sommenwandeling") ||
      key.includes("loopdictee-rekenen") ||
      key.includes("grafiekenwandeling") ||
      key.includes("schaalwandeling") ||
      key.includes("wandel-en-leg-uit")
    ) {
      return "rekenen_route";
    }
    if (key.includes("rekencircuit")) return "rekenen_strategie";
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

function expandCardSet(cards, subjectId, groupId, family, taskKey, title, visual, printProfile, organization) {
  const hasTaskSpecificOverride = Boolean(getCardPackOverrides()[taskKey]);
  const extras = hasTaskSpecificOverride
    ? []
    : getExpansionCards(subjectId, groupId, family, taskKey, title).map((item, index) =>
        normalizeCardItem(item, `${title} extra ${index + 1}`, item.hint || "Gebruik deze kaart als extra oefenkaart.")
      );
  const methodCards = hasTaskSpecificOverride
    ? []
    : getMethodWorkCards(subjectId, groupId, family, taskKey, title).map((item, index) =>
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

  return finalizeWorkCardsForClass(merged, visual, printProfile, organization);
}

function finalizeWorkCardsForClass(cards, visual, printProfile, organization) {
  if (printProfile.expandWorkCardsToClassSize) {
    return fillCardsToClassSize(cards);
  }

  if (!cards.length) {
    return [];
  }

  if (organization.workCardTarget) {
    return fillCardsToTarget(cards, organization.workCardTarget, organization.units);
  }

  const copyCount = getWorkSetCopyCount(visual, organization);

  if (copyCount > 1) {
    return duplicateCardsForGroups(cards, copyCount, organization.units);
  }

  return cards;
}

function getWorkSetCopyCount(visual, organization) {
  if (organization.type === "teams") {
    return CLASS_GROUP_COUNT;
  }

  return 1;
}

function duplicateCardsForGroups(cards, copies, units = []) {
  const duplicated = [];

  for (let groupNumber = 1; groupNumber <= copies; groupNumber += 1) {
    const unit = units[groupNumber - 1];
    const unitLabel = unit?.label ?? `Set ${groupNumber}`;
    cards.forEach((source) => {
      duplicated.push({
        ...source,
        label: `${source.label} • ${unitLabel.toLowerCase()}`,
        hint: `${source.hint} Werkset voor ${unitLabel.toLowerCase()}.`
      });
    });
  }

  return duplicated;
}

function fillCardsToTarget(cards, targetCount, units = []) {
  const completed = cards.slice(0, targetCount);

  if (completed.length === targetCount || cards.length === 0) {
    return completed.map((item, index) => relabelCardForUnit(item, units[index]));
  }

  let index = 0;

  while (completed.length < targetCount) {
    completed.push(cards[index % cards.length]);
    index += 1;
  }

  return completed.map((item, cardIndex) => relabelCardForUnit(item, units[cardIndex]));
}

function relabelCardForUnit(cardItem, unit) {
  if (!unit) {
    return cardItem;
  }

  return {
    ...cardItem,
    label: `${cardItem.label} • ${unit.label.toLowerCase()}`,
    hint: `${cardItem.hint} Gebruik deze kaart bij ${unit.label.toLowerCase()} (${formatLearnerCount(unit.size)}).`
  };
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
  if (subjectId === "taal" && groupId === GROUP_34) {
    return [
      card("Staal 2 taal", "Noem een themawoord en leg uit wat het betekent.", ""),
      card("Staal 2 taal", "Maak een zin met: boerderij.", ""),
      card("Staal 2 taal", "Maak een zin met: regenlaars.", ""),
      card("Staal 2 taal", "Welke gebeurtenis hoort aan het begin van het verhaal?", ""),
      card("Staal 2 taal", "Welke gebeurtenis hoort aan het einde van het verhaal?", ""),
      card("Praatzin", "Ik denk dat dit hoort bij ...", ""),
      card("Praatzin", "Dit woord betekent ...", ""),
      card("Praatzin", "Mijn zin is ...", ""),
      card("Zinbouw", "Zet op volgorde: ik / zie / een / kat", ""),
      card("Zinbouw", "Zet op volgorde: Noor / leest / in / de klas", ""),
      card("Verhaal", "Vertel eerst wat er aan het begin gebeurt.", ""),
      card("Verhaal", "Vertel daarna wat er in het midden gebeurt.", ""),
      card("Verhaal", "Vertel tenslotte hoe het afloopt.", ""),
      card("Controle", "Zeg het woord, leg het uit en gebruik het in een zin.", "")
    ];
  }

  if (subjectId === "taal" && groupId === GROUP_56) {
    return [
      card("Staal 2 taal", "Welke categorie past bij dit woord?", ""),
      card("Staal 2 taal", "Wat is het kernwoord van dit stukje?", ""),
      card("Staal 2 taal", "Welke zin is de kernzin?", ""),
      card("Staal 2 taal", "Geef antwoord in een volledige zin.", ""),
      card("Staal 2 taal", "Welk signaalwoord past bij tijd?", ""),
      card("Staal 2 taal", "Welk signaalwoord past bij oorzaak-gevolg?", ""),
      card("Tekststructuur", "Wat hoort in de inleiding?", ""),
      card("Tekststructuur", "Wat hoort in de kern?", ""),
      card("Tekststructuur", "Wat hoort in het slot?", ""),
      card("Woordweb", "Is dit een eigenschap, onderdeel, handeling of voorbeeld?", ""),
      card("Controle", "Noem eerst de functie en leg daarna uit waarom.", ""),
      card("Controle", "Vat het geheel samen in 1 zin.", "")
    ];
  }

  if (subjectId === "taal") {
    return [
      card("Staal 2 taal", "Formuleer een duidelijk standpunt.", ""),
      card("Staal 2 taal", "Geef 1 sterk argument.", ""),
      card("Staal 2 taal", "Noem een voorbeeld dat je argument ondersteunt.", ""),
      card("Staal 2 taal", "Welk tekstsoortkenmerk hoor je hier?", ""),
      card("Staal 2 taal", "Welke kernzin vat deze alinea samen?", ""),
      card("Staal 2 taal", "Welke tekstsoort past bij dit fragment?", ""),
      card("Presentatie", "Hoe open je jouw presentatie sterk?", ""),
      card("Presentatie", "Wat is je eerste kernpunt?", ""),
      card("Presentatie", "Welk voorbeeld maakt jouw uitleg sterker?", ""),
      card("Presentatie", "Hoe sluit je kort en duidelijk af?", ""),
      card("Controle", "Vat jouw antwoord samen in 1 krachtige zin.", ""),
      card("Controle", "Leg uit waarom deze opbouw logisch is.", "")
    ];
  }

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
  if (family.startsWith("taal_")) {
    return "Gebruik deze kaart in de lijn van Staal 2 taal: spreek in volledige zinnen, benoem de functie en licht je keuze toe.";
  }

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

  if (subjectId === "taal") {
    return "Methodekaart in de lijn van Staal 2 taal: gebruik kernwoorden, signaalwoorden of tekstdelen en onderbouw je keuze mondeling.";
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
  if (subjectId === "taal" && groupId === GROUP_34) {
    return [
      card("Methodehulp", "Woordkaart", "Print als steunkaart voor woordenschat en betekenis."),
      card("Methodehulp", "Praatzin", "Gebruik om in volledige zinnen te antwoorden."),
      card("Methodehulp", "Begin - midden - einde", "Gebruik als steun bij verhaalopbouw."),
      card("Methodehulp", "Woord in een zin", "Gebruik om nieuwe woorden meteen toe te passen.")
    ];
  }

  if (subjectId === "taal" && groupId === GROUP_56) {
    return [
      card("Methodehulp", "Kernzin", "Print als steunkaart bij samenvatten."),
      card("Methodehulp", "Vraagkaart", "Gebruik bij mondelinge beurtwisselingen."),
      card("Methodehulp", "Inleiding - kern - slot", "Gebruik als steun bij tekstopbouw."),
      card("Methodehulp", "Signaalwoord", "Gebruik om tekstverbanden zichtbaar te maken.")
    ];
  }

  if (subjectId === "taal") {
    return [
      card("Methodehulp", "Standpunt", "Gebruik als startkaart bij argumenteren."),
      card("Methodehulp", "Argument", "Gebruik om de redenering op te bouwen."),
      card("Methodehulp", "Tekstsoort", "Gebruik om kenmerken te benoemen."),
      card("Methodehulp", "Presentatieschema", "Gebruik voor opening, kern en afsluiting.")
    ];
  }

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

function buildPrintChecklist(subject, overviewSheets, cards, supportCards, teacherSheets, printProfile, organization) {
  const methodLine =
    subject.id === "spelling"
      ? "Methodehulp uit Staal 2"
      : subject.id === "rekenen"
        ? "Methodehulp uit Getal & Ruimte Junior"
        : "Methodehulp uit Staal 2 taal";

  const checklist = [];

  if (overviewSheets.length) {
    checklist.push(`${overviewSheets.length} lesplaten met opstelling, klasindeling en stapvolgorde`);
  }

  if (cards.length) {
    checklist.push(
      printProfile.expandWorkCardsToClassSize
        ? `${cards.length} leerlingkaartjes of matchkaarten voor een klas van ${CLASS_SIZE}`
        : organization.type === "pairs" || organization.type === "row-pairs"
          ? `${cards.length} werkkaartjes voor ${PAIR_OR_TRIO_UNITS.length - 1} tweetallen en 1 drietal`
          : organization.type === "teams" || organization.type === "small-groups"
            ? `${cards.length} werkkaarten of werksets voor ${CLASS_GROUP_COUNT} groepjes`
            : `${cards.length} opdrachtkaarten of werkbladen voor deze werkvorm`
    );
  }

  if (supportCards.length) {
    checklist.push(`${supportCards.length} opstellings- of hulpmateriaalkaarten`);
  }

  if (teacherSheets.length) {
    checklist.push(`${teacherSheets.length} antwoord-, groeps- of leerkrachtbladen`);
  }

  checklist.push(methodLine);

  if (printProfile.expandWorkCardsToClassSize) {
    checklist.push("Print de leerlingkaartjes enkelzijdig en geef ieder kind 1 kaart.");
  } else {
    checklist.push("Print de opdrachtkaarten groot genoeg voor gebruik in tweetallen, hoeken of stations.");
  }

  return checklist;
}

function formatLearnerCount(count) {
  return `${count} ${count === 1 ? "leerling" : "leerlingen"}`;
}

function getTeacherSheetUnits(organization, visual) {
  if (organization.units.length) {
    return organization.units;
  }

  if (["stations", "path", "measure"].includes(visual)) {
    return Array.from({ length: CLASS_SIZE }, (_, index) => ({
      label: `Leerling ${index + 1}`,
      size: 1
    }));
  }

  return [
    {
      label: "Klas",
      size: CLASS_SIZE
    }
  ];
}

function getTeacherOverviewLines(sheetUnits) {
  if (sheetUnits.every((unit) => unit.size === 1) && sheetUnits.length > 12) {
    return Array.from({ length: Math.ceil(sheetUnits.length / 5) }, (_, index) => {
      const start = index * 5 + 1;
      const end = Math.min(start + 4, sheetUnits.length);
      return `Leerling ${start}-${end} klaar: ____________________`;
    });
  }

  return sheetUnits.map((unit) => `${unit.label} klaar: ____________________`);
}

function getTeacherSheets(group, subject, moment, blueprint, title, organization) {
  const roundCount = Math.max(3, Math.min(6, blueprint.steps.length));
  const roundLines = Array.from({ length: roundCount }, (_, index) => `Ronde ${index + 1}: ____________________`).join("\n");
  const answerBlock =
    subject.id === "spelling"
      ? "Woord / zin: ____________________\nCategorie of regel: ____________________\nControle: klopt het woordbeeld? ____________________"
      : subject.id === "rekenen"
        ? "Som / opgave: ____________________\nModel of strategie: ____________________\nAntwoord: ____________________\nControle: ____________________"
        : "Antwoord: ____________________\nUitleg: ____________________\nControle: hardop teruglezen";

  const sheetUnits = getTeacherSheetUnits(organization, blueprint.visual);

  const groupSheets = sheetUnits.map((unit) =>
    card(
      `Werkblad ${unit.label}`,
      `${title}\n${unit.label} (${formatLearnerCount(unit.size)})\n${roundLines}\n${answerBlock}`,
      `Print 1 blad voor ${unit.label.toLowerCase()} van ${formatLearnerCount(unit.size)}.`
    )
  );

  return [
    ...groupSheets,
    card(
      "Klasoverzicht",
      `Klascheck ${title}\n${getTeacherOverviewLines(sheetUnits).join("\n")}\nMateriaal compleet terug: ja / nee`,
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
  if (
    [
      "waar-hoort-het-woord",
      "woordveld-in-de-ruimte",
      "tekstsoorten-hoeken",
      "signaalwoorden-route",
      "argumentenlijn",
      "presentatiepad"
    ].includes(taskKey)
  ) {
    return "Gebruik deze kaart als plek-, structuur- of inhoudskaart binnen de opdracht.";
  }

  if (["vraag-en-antwoordwandeling", "interviewcarrousel", "loopdictee-woordenschat", "loopdictee-kernzinnen"].includes(taskKey)) {
    return "Gebruik deze kaart direct in de route, carrousel of loopronde.";
  }

  if (["zinnenstraat", "verhaalpad-drie-stappen", "alinea-opstelling", "schrijfronde-met-stopplaatsen", "schrijfposten"].includes(taskKey)) {
    return "Leg deze kaart op de vloer of bij een vaste post in de juiste volgorde.";
  }

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
  const disabled = count === 0;

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
      "Werk stap voor stap: kies eerst de bouw, daarna het vak, vervolgens het lesmoment en open dan een opdracht met een duidelijke uitleg en waar nodig passend printmateriaal.";
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
        const disabled = count === 0;

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
        const disabled = count === 0;

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
      const disabled = count === 0;

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
  ui.resultsMeta.textContent = `${filteredTasks.length} opdrachten in deze route. Klik een opdracht open voor doel, eventuele printmaterialen, benodigdheden en een heldere stap-voor-stap uitleg.`;

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
          ${task.usesCards ? `<span class="pill">print klaar</span>` : `<span class="pill">zonder print</span>`}
        </div>
      </div>
    </button>
  `;
}

function buildQuickOverview(task) {
  return [buildQuickStart(task), buildQuickPlay(task), buildQuickFinish(task)];
}

function buildQuickStart(task) {
  return task.setup;
}

function buildQuickPlay(task) {
  const middleSteps = task.steps.slice(1, Math.max(2, task.steps.length - 1)).slice(0, 2);
  return middleSteps.join(" ") || task.steps[0] || task.goal;
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

function buildClassExplanation(task) {
  const middleStep = task.steps.slice(1, -1).join(" ");

  return [
    task.steps[0] ? `Start zo: ${task.steps[0]}` : `Start zo: ${task.setup}`,
    middleStep ? `Tijdens de opdracht: ${middleStep}` : `Tijdens de opdracht: ${task.goal}`,
    task.steps[task.steps.length - 1] ? `Rond zo af: ${task.steps[task.steps.length - 1]}` : `Rond af met: ${task.goal}`
  ];
}

function renderTaskDetail(task) {
  const showCards = Boolean(
    task.usesCards &&
      task.cardPack &&
      (task.cardPack.cards.length || task.cardPack.supportCards.length || task.cardPack.teacherSheets.length)
  );

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

            ${
              showCards
                ? `
                  <section class="detail-box">
                    <h4>Wat print je vooraf uit?</h4>
                    <ul>
                      ${task.cardPack.printChecklist.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
                    </ul>
                  </section>
                `
                : ""
            }

            <section class="detail-box">
              <h4>Wat heb je daarnaast nodig?</h4>
              <ul>
                ${task.materials.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
              </ul>
            </section>

            <section class="detail-box">
              <h4>Zo leg je het uit aan de klas</h4>
              <ul class="quick-overview">
                ${buildClassExplanation(task)
                  .map((line) => `<li>${escapeHtml(line)}</li>`)
                  .join("")}
              </ul>
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
  const cardDescription = task.printProfile.expandWorkCardsToClassSize
    ? `Deze set is uitgewerkt voor ${CLASS_SIZE} leerlingen. Geef ieder kind 1 kaart.`
    : task.cardPack.organization.type === "pairs" || task.cardPack.organization.type === "row-pairs"
      ? `Deze set is uitgewerkt voor ${PAIR_OR_TRIO_UNITS.length - 1} tweetallen en 1 drietal in een klas van ongeveer ${CLASS_SIZE} leerlingen.`
      : task.cardPack.organization.type === "teams" || task.cardPack.organization.type === "small-groups"
        ? `Deze set is uitgewerkt voor ${CLASS_GROUP_COUNT} groepjes van ${CLASS_GROUP_SIZE} leerlingen.`
        : `Deze set hoort direct bij de opdracht en is logisch geordend voor een klas van ongeveer ${CLASS_SIZE} leerlingen.`;

  const printTip = task.printProfile.expandWorkCardsToClassSize
    ? "Tip: print op A4, knip de leerlingkaartjes los en deel ze direct uit."
    : task.cardPack.organization.type === "pairs" || task.cardPack.organization.type === "row-pairs"
      ? "Tip: print op A4 of A3, begin met de lesplaten en geef daarna per duo of trio 1 werkset of 1 duidelijk startblad."
      : task.cardPack.organization.type === "teams" || task.cardPack.organization.type === "small-groups"
        ? `Tip: print op A4 of A3, begin met de lesplaten en gebruik daarna de overige printvellen per groepje van ${CLASS_GROUP_SIZE}.`
        : "Tip: print op A4 of A3, begin met de lesplaten en leg daarna de route-, post- of leerlingbladen in dezelfde volgorde klaar als in de opdracht.";

  const teacherDescription = task.cardPack.organization.type === "pairs" || task.cardPack.organization.type === "row-pairs"
    ? "Deze bladen kun je direct uitprinten per duo of trio, plus een compact klasoverzicht en controleblad."
    : task.cardPack.organization.type === "teams" || task.cardPack.organization.type === "small-groups"
      ? `Deze bladen kun je direct uitprinten per groepje van ${CLASS_GROUP_SIZE}, plus registratie en controle.`
      : ["stations", "path", "measure"].includes(task.visual)
        ? `Deze bladen kun je direct uitprinten als leerlingbladen voor een klas van ${CLASS_SIZE} leerlingen, plus een leerkrachtoverzicht.`
        : "Deze bladen kun je direct uitprinten als klasblad, registratieblad en controleblad.";

  return `
    <div class="card-layer">
      <div class="card-layer__intro">
        <strong>${escapeHtml(task.cardPack.title)}</strong>
        <p>${escapeHtml(task.cardPack.intro)}</p>
        <p>${escapeHtml(printTip)}</p>
        <ul class="card-layer__checklist">
          ${task.cardPack.printChecklist.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </div>

      ${renderPrintSection(
        `Lesplaten en overzicht (${task.cardPack.overviewSheets.length})`,
        `Print deze drie bladen eerst. Ze geven de opstelling, de klasindeling voor ${CLASS_SIZE} leerlingen en de stapvolgorde in een logische volgorde weer.`,
        task.cardPack.overviewSheets
      )}

      ${renderPrintSection(
        `Opstellings- en hulpmateriaal (${task.cardPack.supportCards.length})`,
        "Deze kaartjes hoef je als leerkracht niet meer zelf te maken; je kunt ze direct uitprinten en klaarleggen voor de klasorganisatie.",
        task.cardPack.supportCards
      )}

      ${renderPrintSection(
        `Werkkaartjes bij de opdracht (${task.cardPack.cards.length})`,
        cardDescription,
        task.cardPack.cards
      )}

      ${renderPrintSection(
        `Groepsbladen en controlebladen (${task.cardPack.teacherSheets.length})`,
        teacherDescription,
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
  if (!items.length) {
    return "";
  }

  return `
    <section class="card-layer__section">
      <div class="card-layer__section-head">
        <h4>${escapeHtml(title)}</h4>
        <p>${escapeHtml(description)}</p>
      </div>
      <div class="card-pack-grid">
        ${items.map((card) => renderPrintCard(card)).join("")}
      </div>
    </section>
  `;
}

function renderPrintCard(card) {
  return `
    <article class="card-pack-item ${card.art ? "card-pack-item--visual" : ""}">
      <span class="card-pack-item__tag">${escapeHtml(card.label)}</span>
      ${card.title ? `<h5 class="card-pack-item__title">${escapeHtml(card.title)}</h5>` : ""}
      ${card.art ? `<div class="card-pack-item__art">${card.art}</div>` : ""}
      <div class="card-pack-item__body">${renderPrintableText(card.text)}</div>
      <div class="card-pack-item__hint">${escapeHtml(card.hint)}</div>
    </article>
  `;
}

function renderPrintableText(text) {
  return escapeHtml(text).replace(/\n/g, "<br />");
}

function renderIllustration(task, compact) {
  const subject = getSubject(task.subjectId);
  const moment = getMoment(task.momentId);
  const sky = compact ? "#f4f8ff" : "#f7fbff";
  const field = compact ? "#eef8fb" : "#e9f6fb";
  const stroke = "#19424a";
  const scene = renderIllustrationScene(task, subject.accent, moment.accent, stroke);

  return `
    <svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${escapeHtml(
      task.title
    )}">
      <rect width="360" height="220" rx="24" fill="${sky}" />
      <rect x="0" y="150" width="360" height="70" fill="${field}" />
      <rect x="18" y="16" width="122" height="34" rx="17" fill="${subject.accent}" opacity="0.14" />
      ${renderSvgTextBlock(18, 16, 122, 34, subject.label, subject.accent, 13.5, 2)}
      <rect x="206" y="16" width="136" height="34" rx="17" fill="${moment.accent}" opacity="0.14" />
      ${renderSvgTextBlock(206, 16, 136, 34, moment.label, moment.accent, 13.5, 2)}
      ${scene}
    </svg>
  `;
}

function renderIllustrationScene(task, subjectAccent, momentAccent, stroke) {
  const taskSpecificScene = renderTaskSpecificIllustration(task, subjectAccent, momentAccent, stroke);

  if (taskSpecificScene) {
    return taskSpecificScene;
  }

  if (task.visual === "relay") {
    return `
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
      ${renderZone(24, 74, 78, 44, "START", "#ffffff", stroke)}
      ${renderZone(140, 120, 94, 48, task.usesCards ? "TEAM / BORD" : "TEAM", "#ffffff", stroke)}
      ${renderCardRack(272, 78, task.usesCards ? "KAARTJES" : "MATERIAAL", subjectAccent, stroke)}
    `;
  }

  if (task.visual === "dictation") {
    return `
      ${renderTrack(
        [
          [142, 154],
          [176, 126],
          [214, 110],
          [248, 96]
        ],
        momentAccent
      )}
      ${renderZone(30, 138, 110, 40, "SCHRIJF", "#ffffff", stroke)}
      ${renderCardRack(258, 62, task.usesCards ? "TEKSTKAARTEN" : "MUUR", subjectAccent, stroke)}
      ${renderMiniSign(160, 74, "LOPER", momentAccent)}
    `;
  }

  if (task.visual === "corners") {
    return `
      ${renderTrack(
        [
          [180, 128],
          [214, 102],
          [258, 84]
        ],
        momentAccent
      )}
      ${renderZone(24, 66, 74, 38, "HOEK A", "#ffffff", stroke)}
      ${renderZone(262, 66, 74, 38, "HOEK B", "#ffffff", stroke)}
      ${renderZone(24, 156, 74, 38, "HOEK C", "#ffffff", stroke)}
      ${renderZone(262, 156, 74, 38, "HOEK D", "#ffffff", stroke)}
      ${renderZone(132, 102, 96, 52, "KIES", "#ffffff", stroke)}
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
      ${renderZone(34, 96, 74, 44, "STATION 1", "#ffffff", stroke)}
      ${renderZone(142, 72, 82, 44, "STATION 2", "#ffffff", stroke)}
      ${renderZone(252, 112, 74, 44, "STATION 3", "#ffffff", stroke)}
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
      ${renderTrack(
        [
          [152, 164],
          [204, 164],
          [236, 154]
        ],
        momentAccent
      )}
      ${renderJumpPad(256, 152, "1", subjectAccent, stroke)}
      ${renderJumpPad(302, 118, "2", subjectAccent, stroke)}
      ${renderJumpPad(256, 84, "3", subjectAccent, stroke)}
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
      <circle cx="114" cy="162" r="11" fill="#ffffff" stroke="${stroke}" stroke-width="4" />
      <circle cx="188" cy="126" r="11" fill="#ffffff" stroke="${stroke}" stroke-width="4" />
      <circle cx="250" cy="100" r="11" fill="#ffffff" stroke="${stroke}" stroke-width="4" />
      ${renderFlag(304, 58, subjectAccent)}
    `;
  }

  if (task.visual === "bingo") {
    return `
      ${renderTrack(
        [
          [134, 158],
          [168, 144],
          [198, 126]
        ],
        momentAccent
      )}
      ${renderBingoBoard(206, 72, stroke, subjectAccent)}
      ${renderZone(34, 138, 100, 40, "VERZAMEL", "#ffffff", stroke)}
    `;
  }

  return `
    ${renderTrack(
      [
        [154, 134],
        [184, 122],
        [220, 112]
      ],
      momentAccent
    )}
    ${renderZone(34, 112, 118, 44, "STARTPUNT", "#ffffff", stroke)}
    ${renderZone(210, 88, 116, 44, task.usesCards ? "KAARTJES" : "MATERIAAL", "#ffffff", stroke)}
  `;
}

function renderClassLayoutArt(visual, organization, subjectAccent, momentAccent) {
  if (organization.type === "pairs" && visual === "dictation") {
    return `
      <svg viewBox="0 0 360 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Klasindeling voor loopdictee of kaartwandeling">
        <rect width="360" height="180" rx="22" fill="#f7fbff" />
        ${renderCardRack(274, 32, "Wandkaarten", subjectAccent, "#19424a")}
        ${renderZone(24, 26, 132, 36, "11 tweetallen", "#ffffff", "#19424a", 12)}
        ${renderZone(188, 26, 116, 36, "1 drietal", "#ffffff", "#19424a", 12)}
        ${renderZone(24, 86, 96, 30, "Tweetallen A-D", "#ffffff", "#19424a", 10)}
        ${renderZone(132, 86, 96, 30, "Tweetallen E-H", "#ffffff", "#19424a", 10)}
        ${renderZone(24, 132, 96, 30, "Tweetallen I-K", "#ffffff", "#19424a", 10)}
        ${renderZone(132, 132, 96, 30, "Drietal L", "#ffffff", "#19424a", 10)}
        ${renderMiniSign(28, 62, "LOPER", momentAccent)}
        ${renderMiniSign(90, 62, "SCHRIJVER", subjectAccent)}
        ${renderMiniSign(188, 62, "WISSEL", momentAccent)}
      </svg>
    `;
  }

  if (organization.type === "row-pairs") {
    return `
      <svg viewBox="0 0 360 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Klasindeling voor twee rijen">
        <rect width="360" height="180" rx="22" fill="#f7fbff" />
        ${renderTrack(
          [
            [70, 58],
            [70, 82],
            [70, 120]
          ],
          subjectAccent
        )}
        ${renderTrack(
          [
            [290, 58],
            [290, 82],
            [290, 120]
          ],
          momentAccent
        )}
        ${renderZone(30, 24, 126, 34, "Rij A", "#ffffff", "#19424a", 12)}
        ${renderZone(204, 24, 126, 34, "Rij B", "#ffffff", "#19424a", 12)}
        ${renderZone(24, 86, 98, 28, "Tweetal 1-4", "#ffffff", "#19424a", 10)}
        ${renderZone(130, 86, 98, 28, "Tweetal 5-8", "#ffffff", "#19424a", 10)}
        ${renderZone(236, 86, 98, 28, "Tweetal 9-11", "#ffffff", "#19424a", 10)}
        ${renderZone(130, 130, 98, 28, "Drietal 12", "#ffffff", "#19424a", 10)}
        ${renderMiniSign(128, 58, "SCHUIF DOOR", momentAccent)}
      </svg>
    `;
  }

  if (organization.type === "pairs" && visual === "stations") {
    return `
      <svg viewBox="0 0 360 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Klasindeling voor tweetallen langs posten">
        <rect width="360" height="180" rx="22" fill="#f7fbff" />
        ${renderTrack(
          [
            [58, 54],
            [58, 118],
            [148, 54],
            [148, 118],
            [238, 54],
            [238, 118],
            [314, 54],
            [314, 118]
          ],
          momentAccent
        )}
        ${renderZone(20, 20, 76, 34, "Post 1", "#ffffff", "#19424a", 11)}
        ${renderZone(110, 20, 76, 34, "Post 2", "#ffffff", "#19424a", 11)}
        ${renderZone(200, 20, 76, 34, "Post 3", "#ffffff", "#19424a", 11)}
        ${renderZone(290, 20, 50, 34, "Post 4", "#ffffff", "#19424a", 10)}
        ${renderZone(22, 122, 96, 30, "Tweetallen 1-3", "#ffffff", "#19424a", 10)}
        ${renderZone(130, 122, 96, 30, "Tweetallen 4-6", "#ffffff", "#19424a", 10)}
        ${renderZone(238, 122, 96, 30, "Tweetallen 7-9", "#ffffff", "#19424a", 10)}
        ${renderZone(108, 78, 144, 28, "Tweetallen 10-11 + drietal", "#ffffff", "#19424a", 10)}
        ${renderMiniSign(114, 154, "START PER POST", subjectAccent)}
        ${renderMiniSign(232, 154, "WISSEL", momentAccent)}
      </svg>
    `;
  }

  if (organization.type === "teams" && visual === "stations") {
    return `
      <svg viewBox="0 0 360 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Klasindeling voor stationswerk">
        <rect width="360" height="180" rx="22" fill="#f7fbff" />
        ${renderTrack(
          [
            [100, 38],
            [140, 38],
            [220, 38],
            [260, 38],
            [262, 122],
            [138, 138],
            [60, 122],
            [20, 54]
          ],
          momentAccent
        )}
        ${renderZone(20, 20, 80, 34, "Station 1", "#ffffff", "#19424a", 11)}
        ${renderZone(140, 20, 80, 34, "Station 2", "#ffffff", "#19424a", 11)}
        ${renderZone(260, 20, 80, 34, "Station 3", "#ffffff", "#19424a", 11)}
        ${renderZone(58, 122, 80, 34, "Station 4", "#ffffff", "#19424a", 11)}
        ${renderZone(222, 122, 80, 34, "Station 5", "#ffffff", "#19424a", 11)}
        ${renderMiniSign(142, 84, "WISSEL RONDE", subjectAccent)}
      </svg>
    `;
  }

  if (organization.type === "whole-class" && visual === "corners") {
    return `
      <svg viewBox="0 0 360 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Klasindeling voor hoekenwerk">
        <rect width="360" height="180" rx="22" fill="#f7fbff" />
        ${renderZone(18, 22, 82, 34, "Hoek A", "#ffffff", "#19424a", 11)}
        ${renderZone(260, 22, 82, 34, "Hoek B", "#ffffff", "#19424a", 11)}
        ${renderZone(18, 124, 82, 34, "Hoek C", "#ffffff", "#19424a", 11)}
        ${renderZone(260, 124, 82, 34, "Hoek D", "#ffffff", "#19424a", 11)}
        ${renderZone(126, 70, 108, 42, "Klassikaal kiezen", "#ffffff", "#19424a", 11)}
        ${renderMiniSign(122, 122, "EERST KIES", subjectAccent)}
        ${renderMiniSign(208, 122, "KIES", momentAccent)}
      </svg>
    `;
  }

  if (organization.type === "whole-class" && visual === "stations") {
    return `
      <svg viewBox="0 0 360 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Klasindeling voor klassikaal postenwerk">
        <rect width="360" height="180" rx="22" fill="#f7fbff" />
        ${renderZone(24, 20, 80, 34, "Post 1", "#ffffff", "#19424a", 11)}
        ${renderZone(140, 20, 80, 34, "Post 2", "#ffffff", "#19424a", 11)}
        ${renderZone(256, 20, 80, 34, "Post 3", "#ffffff", "#19424a", 11)}
        ${renderZone(82, 122, 90, 34, "Post 4", "#ffffff", "#19424a", 11)}
        ${renderZone(188, 122, 90, 34, "Controle", "#ffffff", "#19424a", 11)}
        ${renderZone(116, 70, 128, 36, "25 leerlingen", "#ffffff", "#19424a", 11)}
        ${renderMiniSign(98, 156, "START GESPREID", subjectAccent)}
        ${renderMiniSign(218, 156, "WISSEL", momentAccent)}
      </svg>
    `;
  }

  if (organization.type === "whole-class" && visual === "path") {
    return `
      <svg viewBox="0 0 360 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Klasindeling voor een klassikale looproute">
        <rect width="360" height="180" rx="22" fill="#f7fbff" />
        ${renderMiniSign(24, 26, "START", subjectAccent)}
        ${renderTrack(
          [
            [48, 34],
            [86, 130],
            [146, 110],
            [206, 90],
            [266, 70]
          ],
          momentAccent
        )}
        ${renderRouteStop(90, 138, "A", momentAccent, "#19424a")}
        ${renderRouteStop(150, 118, "B", momentAccent, "#19424a")}
        ${renderRouteStop(210, 98, "C", momentAccent, "#19424a")}
        ${renderRouteStop(270, 78, "D", momentAccent, "#19424a")}
        ${renderZone(208, 128, 124, 32, "25 leerlingen", "#ffffff", "#19424a", 11)}
        ${renderZone(208, 92, 124, 28, "start gespreid", "#ffffff", "#19424a", 10.5)}
      </svg>
    `;
  }

  if (organization.type === "whole-class" && visual === "line") {
    return `
      <svg viewBox="0 0 360 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Klasindeling voor lijn- of vloeropdracht">
        <rect width="360" height="180" rx="22" fill="#f7fbff" />
        <path d="M34 104 H326" stroke="#19424a" stroke-width="6" stroke-linecap="round" />
        ${renderZone(24, 34, 120, 34, "Vloer of lijn", "#ffffff", "#19424a", 11)}
        ${renderZone(214, 34, 122, 34, "Klassikaal", "#ffffff", "#19424a", 11)}
        ${renderMiniSign(96, 126, "LEG", subjectAccent)}
        ${renderMiniSign(158, 126, "LEES", momentAccent)}
        ${renderMiniSign(220, 126, "CHECK", subjectAccent)}
      </svg>
    `;
  }

  if (organization.type === "whole-class" && visual === "measure") {
    return `
      <svg viewBox="0 0 360 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Klasindeling voor een meet- of schaalopdracht">
        <rect width="360" height="180" rx="22" fill="#f7fbff" />
        <rect x="30" y="58" width="148" height="74" rx="14" fill="#ffffff" stroke="#19424a" stroke-width="3" stroke-dasharray="8 6" />
        <path d="M212 104 H324" stroke="#19424a" stroke-width="6" stroke-linecap="round" />
        ${renderZone(30, 20, 148, 30, "Meetplek of vorm", "#ffffff", "#19424a", 11)}
        ${renderZone(212, 20, 112, 30, "25 leerlingen", "#ffffff", "#19424a", 11)}
        ${renderMiniSign(220, 70, "BEURTEN", subjectAccent)}
        ${renderMiniSign(220, 118, "MEET", momentAccent)}
      </svg>
    `;
  }

  if (organization.type === "whole-class" && visual === "circle") {
    return `
      <svg viewBox="0 0 360 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Klasindeling voor een klassikale kringopdracht">
        <rect width="360" height="180" rx="22" fill="#f7fbff" />
        <circle cx="180" cy="92" r="50" fill="#ffffff" stroke="#19424a" stroke-width="3" />
        ${renderZone(132, 76, 96, 32, "Middenplek", "#ffffff", "#19424a", 11)}
        ${renderZone(34, 24, 110, 30, "25 leerlingen", "#ffffff", "#19424a", 11)}
        ${renderZone(216, 24, 110, 30, "om de kring", "#ffffff", "#19424a", 11)}
        ${renderMiniSign(64, 140, "KIJK", subjectAccent)}
        ${renderMiniSign(146, 140, "DOE", momentAccent)}
        ${renderMiniSign(228, 140, "WISSEL", subjectAccent)}
      </svg>
    `;
  }

  if (organization.type === "pairs" && (visual === "path" || visual === "mission")) {
    return `
      <svg viewBox="0 0 360 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Klasindeling voor looproute in tweetallen">
        <rect width="360" height="180" rx="22" fill="#f7fbff" />
        ${renderMiniSign(24, 26, "START", subjectAccent)}
        ${renderTrack(
          [
            [48, 34],
            [84, 130],
            [136, 112],
            [188, 94],
            [240, 76]
          ],
          momentAccent
        )}
        ${renderRouteStop(88, 138, "A", momentAccent, "#19424a")}
        ${renderRouteStop(140, 120, "B", momentAccent, "#19424a")}
        ${renderRouteStop(192, 102, "C", momentAccent, "#19424a")}
        ${renderRouteStop(244, 84, "D", momentAccent, "#19424a")}
        ${renderZone(212, 128, 118, 32, "11 tweetallen", "#ffffff", "#19424a", 10.5)}
        ${renderZone(212, 92, 118, 28, "1 drietal", "#ffffff", "#19424a", 10.5)}
      </svg>
    `;
  }

  if (organization.type === "teams" && visual === "relay") {
    return `
      <svg viewBox="0 0 360 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Klasindeling voor routeopdracht">
        <rect width="360" height="180" rx="22" fill="#f7fbff" />
        ${renderMiniSign(24, 26, "START", subjectAccent)}
        ${renderTrack(
          [
            [48, 34],
            [84, 130],
            [136, 112],
            [188, 94],
            [240, 76],
            [288, 58]
          ],
          momentAccent
        )}
        ${renderRouteStop(88, 138, "1", momentAccent, "#19424a")}
        ${renderRouteStop(140, 120, "2", momentAccent, "#19424a")}
        ${renderRouteStop(192, 102, "3", momentAccent, "#19424a")}
        ${renderRouteStop(244, 84, "4", momentAccent, "#19424a")}
        ${renderRouteStop(296, 66, "5", momentAccent, "#19424a")}
        ${renderMiniSign(38, 154, "Groep 1-5", subjectAccent)}
        ${renderMiniSign(226, 142, "Doorloop", momentAccent)}
      </svg>
    `;
  }

  if (organization.type === "small-groups") {
    return `
      <svg viewBox="0 0 360 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Klasindeling voor kleine groepjes">
        <rect width="360" height="180" rx="22" fill="#f7fbff" />
        ${renderZone(24, 22, 110, 34, "Groep 1", "#ffffff", "#19424a", 11)}
        ${renderZone(140, 22, 110, 34, "Groep 2", "#ffffff", "#19424a", 11)}
        ${renderZone(256, 22, 80, 34, "Groep 3", "#ffffff", "#19424a", 11)}
        ${renderZone(82, 120, 110, 34, "Groep 4", "#ffffff", "#19424a", 11)}
        ${renderZone(198, 120, 110, 34, "Groep 5", "#ffffff", "#19424a", 11)}
        ${renderMiniSign(106, 78, "5 LEERL.", subjectAccent)}
        ${renderMiniSign(210, 78, "EIGEN SET", momentAccent)}
      </svg>
    `;
  }

  if (organization.type === "individual") {
    return `
      <svg viewBox="0 0 360 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Klasindeling voor individueel werken">
        <rect width="360" height="180" rx="22" fill="#f7fbff" />
        ${renderZone(28, 22, 128, 34, "25 leerlingen", "#ffffff", "#19424a", 12)}
        ${renderZone(204, 22, 128, 34, "ieder 1 kaart", "#ffffff", "#19424a", 12)}
        ${renderZone(40, 84, 60, 26, "1-5", "#ffffff", "#19424a", 10)}
        ${renderZone(110, 84, 60, 26, "6-10", "#ffffff", "#19424a", 10)}
        ${renderZone(180, 84, 60, 26, "11-15", "#ffffff", "#19424a", 10)}
        ${renderZone(250, 84, 60, 26, "16-20", "#ffffff", "#19424a", 10)}
        ${renderZone(145, 124, 70, 26, "21-25", "#ffffff", "#19424a", 10)}
        ${renderMiniSign(126, 154, "GELIJK STARTEN", subjectAccent)}
      </svg>
    `;
  }

  return `
    <svg viewBox="0 0 360 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Klasindeling voor 25 leerlingen">
      <rect width="360" height="180" rx="22" fill="#f7fbff" />
      ${renderZone(36, 30, 124, 36, "Klassikaal", "#ffffff", "#19424a", 12)}
      ${renderZone(200, 30, 124, 36, "vaste plekken", "#ffffff", "#19424a", 12)}
      ${renderMiniSign(102, 96, "KIES", subjectAccent)}
      ${renderMiniSign(166, 96, "DOE", momentAccent)}
      ${renderMiniSign(230, 96, "CHECK", subjectAccent)}
    </svg>
  `;
}

function renderSequenceArt(labels, subjectAccent, momentAccent) {
  return `
    <svg viewBox="0 0 360 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Stapvolgorde">
      <rect width="360" height="180" rx="22" fill="#f7fbff" />
      ${renderTrack(
        [
          [88, 84],
          [100, 84],
          [172, 84],
          [184, 84],
          [256, 84],
          [268, 84]
        ],
        momentAccent
      )}
      ${renderZone(18, 62, 70, 44, labels[0], "#ffffff", "#19424a", 11)}
      ${renderZone(102, 62, 70, 44, labels[1], "#ffffff", "#19424a", 11)}
      ${renderZone(186, 62, 70, 44, labels[2], "#ffffff", "#19424a", 11)}
      ${renderZone(270, 62, 70, 44, labels[3], "#ffffff", "#19424a", 11)}
      ${renderMiniSign(34, 120, "1", subjectAccent)}
      ${renderMiniSign(118, 120, "2", subjectAccent)}
      ${renderMiniSign(202, 120, "3", subjectAccent)}
      ${renderMiniSign(286, 120, "4", subjectAccent)}
    </svg>
  `;
}

function renderTaskSpecificIllustration(task, subjectAccent, momentAccent, stroke) {
  const key = task.key;

  if (
    [
      "woord-of-geen-woord",
      "zin-of-geen-zin",
      "klank-en-gebaar",
      "feit-of-mening",
      "synoniemensprint",
      "kernwoord-kiezen",
      "klap-stamp-of-stil",
      "waar-hoor-je-de-klank",
      "letterflits-in-beweging",
      "waar-of-niet-waar-spelling",
      "spellingsprint",
      "waar-of-niet-waar-werkwoorden",
      "spellingscan-in-beweging",
      "waar-of-niet-waar-34",
      "klap-als-het-klopt",
      "waar-niet-waar-bovenbouw"
    ].includes(key)
  ) {
    const jumpPresets = {
      "woord-of-geen-woord": { prompt: "WOORD?", actions: ["WOORD", "GEEN", "LEG UIT"] },
      "zin-of-geen-zin": { prompt: "VOLLEDIGE ZIN?", actions: ["ZIN", "GEEN", "WAT MIST"] },
      "klank-en-gebaar": { prompt: "HOOR JE M?", actions: ["GEBAAR", "STIL", "NOEM"] },
      "feit-of-mening": { prompt: "FEIT OF MENING?", actions: ["FEIT", "MENING", "WAAROM"] },
      synoniemensprint: { prompt: "WELK SYNONIEM?", actions: ["ROEP", "STOP", "WISSEL"] },
      "kernwoord-kiezen": { prompt: "KIES KERNWOORD", actions: ["A", "B", "C"] },
      "klap-stamp-of-stil": { prompt: "HOOR DE KLANK?", actions: ["KLAP", "STAMP", "STIL"] },
      "waar-hoor-je-de-klank": { prompt: "WAAR ZIT DE KLANK?", actions: ["VOOR", "MIDDEN", "ACHTER"] },
      "letterflits-in-beweging": { prompt: "WELK PATROON?", actions: ["KORT", "LANG", "DRAAI"] },
      "waar-of-niet-waar-spelling": { prompt: "REGEL GOED?", actions: ["WAAR", "NIET", "REGEL"] },
      spellingsprint: { prompt: "WELK WOORDTYPE?", actions: ["WEET", "REGEL", "LETTER"] },
      "waar-of-niet-waar-werkwoorden": { prompt: "WW GOED?", actions: ["WAAR", "NIET", "REGEL"] },
      "spellingscan-in-beweging": { prompt: "ZIN GOED?", actions: ["GOED", "FOUT", "HERSTEL"] },
      "waar-of-niet-waar-34": { prompt: "SOM GOED?", actions: ["WAAR", "NIET", "WAAROM"] },
      "klap-als-het-klopt": { prompt: "STELLING?", actions: ["KLAP", "STIL", "LEG UIT"] },
      "waar-niet-waar-bovenbouw": { prompt: "RELATIE?", actions: ["WAAR", "NIET", "LEG UIT"] }
    };

    return renderChoiceJumpScene(jumpPresets[key], subjectAccent, momentAccent, stroke);
  }

  if (["tel-en-spring", "tafels-springen"].includes(key)) {
    const countPresets = {
      "tel-en-spring": { prompt: "SPRING MEE", numbers: ["2", "4", "6"], note: "TELRITME" },
      "tafels-springen": { prompt: "VOLG DE TAFEL", numbers: ["5", "10", "15"], note: "VEELVOUDEN" }
    };

    return renderCountJumpScene(countPresets[key], subjectAccent, momentAccent, stroke);
  }

  if (key === "rekenbevries") {
    return renderMoveStopScene(
      { start: "BEWEEG", stop: "STOP", prompt: "8 + 6?", check: "ANTWOORD" },
      subjectAccent,
      momentAccent,
      stroke
    );
  }

  if (
    [
      "waar-hoort-het-woord",
      "woordveld-in-de-ruimte",
      "signaalwoorden-route",
      "tekstsoorten-hoeken",
      "hoeken-kiezen-bij-spelling",
      "vier-hoeken-categorie-of-regel",
      "hoeken-kiezen",
      "keuzehoeken-rekenen"
    ].includes(key)
  ) {
    const cornerPresets = {
      "waar-hoort-het-woord": {
        center: "KIES CATEGORIE",
        corners: ["BEROEP", "PLAATS", "VOORWERP", "HANDELING"]
      },
      "woordveld-in-de-ruimte": {
        center: "THEMAWOORD",
        corners: ["DIEREN", "SPULLEN", "PLEKKEN", "ACTIES"]
      },
      "signaalwoorden-route": {
        center: "TEKSTVERBAND",
        corners: ["TIJD", "OORZAAK", "OPSOMMING", "TEGENSTELLING"]
      },
      "tekstsoorten-hoeken": {
        center: "TEKSTSOORT",
        corners: ["VERHAAL", "INSTRUCTIE", "NIEUWS", "MENING"]
      },
      "hoeken-kiezen-bij-spelling": {
        center: "KIES CATEGORIE",
        corners: ["LUISTER", "LETTER", "REGEL", "WEET"]
      },
      "vier-hoeken-categorie-of-regel": {
        center: "KIES REGEL",
        corners: ["WW", "WEET", "LEEST.", "LEEN"]
      },
      "hoeken-kiezen": { center: "KIES ANTWOORD", corners: ["A", "B", "C", "D"] },
      "keuzehoeken-rekenen": {
        center: "KIES HOEK",
        corners: ["BREUK", "PROCENT", "GRAFIEK", "MODEL"]
      }
    };

    return renderCornerChoiceScene(cornerPresets[key], subjectAccent, momentAccent, stroke);
  }

  if (
    [
      "loopdictee-woordenschat",
      "loopdictee-kernzinnen",
      "loopdictee-luisterwoorden",
      "loopdictee-categorie-van-de-week",
      "loopdictee-werkwoordspelling",
      "loopdictee-rekenen"
    ].includes(key)
  ) {
    const dictationPresets = {
      "loopdictee-woordenschat": {
        write: "ZEG EN LEG UIT",
        wall: "WOORDEN",
        role: "LOPER",
        tags: ["BETEKENIS", "ZIN"]
      },
      "loopdictee-kernzinnen": {
        write: "KERNZIN",
        wall: "TEKST",
        role: "LOPER",
        tags: ["SAMENVAT", "CHECK"]
      },
      "loopdictee-luisterwoorden": {
        write: "HAK + SCHRIJF",
        wall: "WOORDEN",
        role: "LOPER",
        tags: ["LEES", "ONTHOUD"]
      },
      "loopdictee-categorie-van-de-week": {
        write: "SCHRIJF + REGEL",
        wall: "WOORD / ZIN",
        role: "LOPER",
        tags: ["REGEL", "CHECK"]
      },
      "loopdictee-werkwoordspelling": {
        write: "KIES WW-VORM",
        wall: "ZINNEN",
        role: "LOPER",
        tags: ["TIJD", "STAM"]
      },
      "loopdictee-rekenen": {
        write: "REKEN SAMEN",
        wall: "OPGAVE",
        role: "LOPER",
        tags: ["ONTHOUD", "REKEN"]
      }
    };

    return renderDictationSceneDetailed(dictationPresets[key], subjectAccent, momentAccent, stroke);
  }

  if (["verhaalestafette", "woordkaartjes-estafette", "rekenen-estafette", "antwoordestafette"].includes(key)) {
    const relayPresets = {
      verhaalestafette: {
        start: "STARTZIN",
        team: "VERTEL VERDER",
        rack: "VERHAAL",
        chip: "VOLGENDE"
      },
      "woordkaartjes-estafette": {
        start: "START",
        team: "TEAM SCHRIJFT",
        rack: "WOORDEN",
        chip: "CATEGORIE"
      },
      "rekenen-estafette": {
        start: "START",
        team: "TEAM REKENT",
        rack: "SOM + ANTWOORD",
        chip: "KOPPEL"
      },
      antwoordestafette: {
        start: "START",
        team: "TEAM OVERLEGT",
        rack: "OPGAVEN",
        chip: "ANTWOORD"
      }
    };

    return renderRelaySceneDetailed(relayPresets[key], subjectAccent, momentAccent, stroke);
  }

  if (
    ["schrijfronde-met-stopplaatsen", "schrijfposten", "categoriecircuit", "spellingcircuit-bovenbouw", "rekencircuit-56", "rekencircuit-bovenbouw"].includes(
      key
    )
  ) {
    const stationPresets = {
      "schrijfronde-met-stopplaatsen": { stations: ["BEGIN", "MIDDEN", "SLOT"], chip: "LEES TERUG" },
      schrijfposten: { stations: ["DOEL", "PUBLIEK", "KERN"], chip: "SLOT" },
      categoriecircuit: { stations: ["LUISTER", "WEET", "REGEL"], chip: "WISSEL" },
      "spellingcircuit-bovenbouw": { stations: ["WW", "LEEN", "LEEST."], chip: "CHECK" },
      "rekencircuit-56": { stations: ["TAFELS", "BREUK", "CHECK"], chip: "DOOR" },
      "rekencircuit-bovenbouw": { stations: ["PROCENT", "SCHAAL", "GRAFIEK"], chip: "DOOR" }
    };

    return renderStationsSceneDetailed(stationPresets[key], subjectAccent, momentAccent, stroke);
  }

  if (
    ["woordweb-op-de-vloer", "zoek-je-spellingmaatje", "zoek-de-juiste-spellingpartner", "zoek-iemand-die", "breuk-decimaal-procent-match"].includes(
      key
    )
  ) {
    const matchPresets = {
      "woordweb-op-de-vloer": {
        center: "KERNWOORD",
        cards: ["EIGENSCH.", "ONDERDEEL", "HANDELING", "VOORBLD", "THEMA"]
      },
      "zoek-je-spellingmaatje": {
        center: "ZELFDE PATROON",
        cards: ["VIS", "PEN", "MAAN", "BOEK", "DEUR"]
      },
      "zoek-de-juiste-spellingpartner": {
        center: "WOORD + REGEL",
        cards: ["APEN", "REGEL", "VOORBLD", "GEIT", "WEET"]
      },
      "zoek-iemand-die": {
        center: "MATCH",
        cards: ["1/2", "0,5", "50%", "1/4", "25%"]
      },
      "breuk-decimaal-procent-match": {
        center: "NOTATIES",
        cards: ["1/2", "0,5", "50%", "3/4", "75%"]
      }
    };

    return renderMatchSceneDetailed(matchPresets[key], subjectAccent, momentAccent, stroke);
  }

  if (["praatmaatjes-in-beweging", "interviewcarrousel", "staand-flitsen", "splitsen-met-je-lichaam"].includes(key)) {
    const duoPresets = {
      "praatmaatjes-in-beweging": { left: "VRAAG", right: "ANTWOORD", middle: "ZEG TERUG" },
      interviewcarrousel: { left: "VRAAG", right: "ANTWOORD", middle: "SCHUIF DOOR" },
      "staand-flitsen": { left: "SOM", right: "ANTWOORD", middle: "OM BEURT" },
      "splitsen-met-je-lichaam": { left: "5", right: "3", middle: "SAMEN 8" }
    };

    return renderDuoSceneDetailed(duoPresets[key], subjectAccent, momentAccent, stroke);
  }

  if (key === "woord-bouwen-met-lichaamsletters") {
    return renderWordBuildSceneDetailed({ letters: ["M", "A", "A", "N"], note: "BOUW HET WOORD" }, subjectAccent, momentAccent, stroke);
  }

  if (
    [
      "vraag-en-antwoordwandeling",
      "wandel-en-vat-samen",
      "presentatiepad",
      "verhaalpad-drie-stappen",
      "sommenwandeling",
      "wandel-en-leg-uit",
      "weetwoordmuur",
      "regelroute",
      "leestekenroute",
      "grafiekenwandeling",
      "schaalwandeling",
      "foutenjacht"
    ].includes(key)
  ) {
    if (key === "weetwoordmuur") {
      return renderWallSceneDetailed(
        { wall: ["EI", "IJ", "OU"], write: "SCHRIJF", note: "KIES WOORDBEELD" },
        subjectAccent,
        momentAccent,
        stroke
      );
    }

    if (key === "leestekenroute") {
      return renderTextRouteSceneDetailed(
        { strips: ["ZIN 1", "ZIN 2", "ZIN 3"], side: "?, !, ,", note: "VOEG TOE" },
        subjectAccent,
        momentAccent,
        stroke
      );
    }

    if (key === "grafiekenwandeling") {
      return renderGraphRouteSceneDetailed(
        { charts: ["GRAFIEK A", "GRAFIEK B", "GRAFIEK C"], prompts: ["STIJGT?", "HOOGST?"], note: "VERGELIJK" },
        subjectAccent,
        momentAccent,
        stroke
      );
    }

    if (key === "foutenjacht") {
      return renderTextRouteSceneDetailed(
        { strips: ["FOUT 1", "FOUT 2", "FOUT 3"], side: "HERSTEL", note: "LEG UIT" },
        subjectAccent,
        momentAccent,
        stroke
      );
    }

    const routePresets = {
      "vraag-en-antwoordwandeling": {
        start: "START",
        stops: ["LEES", "ANTWOORD", "VRAAG DOOR", "WISSEL"],
        side: "TWEETAL",
        end: "VOLGENDE"
      },
      "wandel-en-vat-samen": {
        start: "LOOP",
        stops: ["ONDERWERP", "BELANGRIJK", "AANVULLEN", "CHECK"],
        side: "MAATJE",
        end: "WISSEL"
      },
      presentatiepad: {
        start: "OPENING",
        stops: ["KERN 1", "KERN 2", "VOORBEELD", "AFSLUITEN"],
        side: "SPREEK",
        end: "FEEDBACK"
      },
      "verhaalpad-drie-stappen": {
        start: "VERHAAL",
        stops: ["BEGIN", "MIDDEN", "EINDE", "VERTEL"],
        side: "KAART",
        end: "NAVERTEL"
      },
      sommenwandeling: { start: "START", stops: ["LEES", "ONTHOUD", "REKEN", "CHECK"], side: "WISBORD", end: "VOLGENDE" },
      "wandel-en-leg-uit": { start: "LOOP", stops: ["LEG UIT", "LUISTER", "VRAAG", "WISSEL"], side: "MAATJE", end: "CHECK" },
      regelroute: { start: "WOORD", stops: ["REGEL", "VOORBLD", "LEG UIT", "CHECK"], side: "SET", end: "KLAAR" },
      schaalwandeling: { start: "LOOP", stops: ["MEET", "REKEN", "SCHAAL", "CHECK"], side: "MEETLINT", end: "UITKOMST" }
    };

    return renderRouteSceneDetailed(routePresets[key], subjectAccent, momentAccent, stroke);
  }

  if (
    [
      "zinnenstraat",
      "alinea-opstelling",
      "standpunt-in-de-ruimte",
      "waar-twijfel-niet-waar",
      "argumentenlijn",
      "hakkenpad-op-de-vloer",
      "werkwoordschema-op-de-vloer",
      "zin-in-delen"
    ].includes(key)
  ) {
    const floorPresets = {
      zinnenstraat: { steps: ["IK", "ZIE", "EEN", "KAT"], note: "LEES DE ZIN" },
      "alinea-opstelling": { steps: ["INLEIDING", "KERN", "SLOT"], note: "TEKSTDELEN" },
      "standpunt-in-de-ruimte": { steps: ["EENS", "TWIJFEL", "ONEENS"], note: "KIES POSITIE" },
      "waar-twijfel-niet-waar": { steps: ["WAAR", "TWIJFEL", "NIET"], note: "LEG UIT" },
      argumentenlijn: { steps: ["STANDPUNT", "ARGUMENT", "VOORBEELD"], note: "BOUW OP" },
      "hakkenpad-op-de-vloer": { steps: ["V", "I", "S"], note: "PLAK HET WOORD" },
      "werkwoordschema-op-de-vloer": { steps: ["OND", "TIJD", "STAM", "UITG", "CHECK"], note: "LOOP HET SCHEMA" },
      "zin-in-delen": { steps: ["NOOR", "FIETST", "NAAR", "SCHOOL"], note: "ZOEK OND / PV" }
    };

    return renderFloorStepsSceneDetailed(floorPresets[key], subjectAccent, momentAccent, stroke);
  }

  if (["korte-klank-lange-stap", "lettergroepstraat"].includes(key)) {
    const lanePresets = {
      "korte-klank-lange-stap": { lanes: ["KORTE KLANK", "LANGE KLANK"], words: ["ZON", "BOMEN"], note: "KIES DE KANT" },
      lettergroepstraat: { lanes: ["OPEN", "GESLOTEN"], words: ["A-PEN", "KIP-PEN"], note: "LOOP LETTERGREPEN" }
    };

    return renderTwoLaneSceneDetailed(lanePresets[key], subjectAccent, momentAccent, stroke);
  }

  if (["getallenlijn-lopen", "breukenlijn-op-de-vloer", "kommagetallen-op-volgorde"].includes(key)) {
    const linePresets = {
      "getallenlijn-lopen": { anchors: ["0", "10", "20"], cards: ["+1", "+2", "-1"], note: "SPRING" },
      "breukenlijn-op-de-vloer": { anchors: ["0", "1/2", "1"], cards: ["1/4", "3/4", "5/4"], note: "PLAATS" },
      "kommagetallen-op-volgorde": { anchors: ["0,0", "0,5", "1,0"], cards: ["0,25", "0,75", "1,25"], note: "VOLGORDE" }
    };

    return renderNumberLineSceneDetailed(linePresets[key], subjectAccent, momentAccent, stroke);
  }

  if (key === "verhoudingentabel-op-de-vloer") {
    return renderTableSceneDetailed(
      { headers: ["GLAZEN", "ML"], top: ["1", "2", "4"], bottom: ["250", "500", "1000"], note: "VERHOUDING" },
      subjectAccent,
      momentAccent,
      stroke
    );
  }

  if (key === "omtrek-of-oppervlakte") {
    return renderAreaSceneDetailed({ border: "OMTREK", fill: "OPP.", note: "EROMHEEN / ERIN" }, subjectAccent, momentAccent, stroke);
  }

  if (key === "coordinatenraster") {
    return renderGridSceneDetailed({ point: "3,4", note: "LOOP NAAR VAK" }, subjectAccent, momentAccent, stroke);
  }

  if (key === "hoeken-en-lijnen-met-je-lichaam") {
    return renderGeometrySceneDetailed({ tags: ["RECHT", "SCHERP", "STOMP"], note: "BEELD UIT" }, subjectAccent, momentAccent, stroke);
  }

  return "";
}

function renderChoiceJumpScene(preset, subjectAccent, momentAccent, stroke) {
  return `
    ${renderTrack(
      [
        [154, 144],
        [198, 144],
        [232, 152]
      ],
      momentAccent
    )}
    ${renderZone(28, 84, 124, 42, preset.prompt, "#ffffff", stroke, 12)}
    ${renderChoicePad(248, 154, preset.actions[0], subjectAccent, stroke)}
    ${renderChoicePad(296, 120, preset.actions[1], subjectAccent, stroke)}
    ${renderChoicePad(248, 86, preset.actions[2], subjectAccent, stroke)}
    ${renderMiniSign(170, 92, "REAGEER DIRECT", momentAccent)}
  `;
}

function renderCountJumpScene(preset, subjectAccent, momentAccent, stroke) {
  return `
    ${renderTrack(
      [
        [148, 142],
        [188, 142],
        [220, 152],
        [262, 122]
      ],
      momentAccent
    )}
    ${renderZone(28, 86, 120, 42, preset.prompt, "#ffffff", stroke, 12)}
    ${renderChoicePad(222, 154, preset.numbers[0], subjectAccent, stroke)}
    ${renderChoicePad(282, 120, preset.numbers[1], subjectAccent, stroke)}
    ${renderChoicePad(222, 86, preset.numbers[2], subjectAccent, stroke)}
    ${renderMiniSign(164, 92, preset.note, momentAccent)}
  `;
}

function renderMoveStopScene(preset, subjectAccent, momentAccent, stroke) {
  return `
    ${renderMiniSign(34, 86, preset.start, subjectAccent)}
    ${renderTrack(
      [
        [58, 98],
        [100, 132],
        [150, 150]
      ],
      momentAccent
    )}
    ${renderZone(164, 132, 84, 38, preset.stop, "#ffffff", stroke)}
    ${renderZone(262, 82, 64, 40, preset.prompt, "#ffffff", stroke, 12)}
    ${renderMiniSign(258, 134, preset.check, subjectAccent)}
  `;
}

function renderCornerChoiceScene(preset, subjectAccent, momentAccent, stroke) {
  return `
    ${renderTrack(
      [
        [180, 128],
        [224, 104],
        [248, 86]
      ],
      momentAccent
    )}
    ${renderZone(24, 66, 88, 38, preset.corners[0], "#ffffff", stroke, 11)}
    ${renderZone(248, 66, 88, 38, preset.corners[1], "#ffffff", stroke, 11)}
    ${renderZone(24, 156, 88, 38, preset.corners[2], "#ffffff", stroke, 11)}
    ${renderZone(248, 156, 88, 38, preset.corners[3], "#ffffff", stroke, 11)}
    ${renderZone(122, 100, 116, 56, preset.center, "#ffffff", stroke, 12)}
  `;
}

function renderDictationSceneDetailed(preset, subjectAccent, momentAccent, stroke) {
  return `
    ${renderTrack(
      [
        [142, 154],
        [178, 126],
        [216, 110],
        [248, 96]
      ],
      momentAccent
    )}
    ${renderZone(26, 138, 116, 40, preset.write, "#ffffff", stroke, 12)}
    ${renderCardRack(258, 62, preset.wall, subjectAccent, stroke)}
    ${renderMiniSign(156, 72, preset.role, momentAccent)}
    ${renderWordCard(166, 178, 56, 26, preset.tags[0], subjectAccent, stroke, 10)}
    ${renderWordCard(230, 178, 56, 26, preset.tags[1], subjectAccent, stroke, 10)}
  `;
}

function renderRelaySceneDetailed(preset, subjectAccent, momentAccent, stroke) {
  return `
    ${renderTrack(
      [
        [92, 120],
        [124, 144],
        [172, 144],
        [232, 106],
        [272, 98]
      ],
      momentAccent
    )}
    ${renderZone(24, 74, 78, 44, preset.start, "#ffffff", stroke)}
    ${renderZone(136, 122, 106, 48, preset.team, "#ffffff", stroke, 12)}
    ${renderCardRack(272, 74, preset.rack, subjectAccent, stroke)}
    ${renderMiniSign(148, 80, preset.chip, momentAccent)}
  `;
}

function renderStationsSceneDetailed(preset, subjectAccent, momentAccent, stroke) {
  return `
    ${renderTrack(
      [
        [106, 122],
        [140, 92],
        [198, 92],
        [230, 116],
        [252, 132]
      ],
      momentAccent
    )}
    ${renderZone(28, 102, 78, 42, preset.stations[0], "#ffffff", stroke, 12)}
    ${renderZone(138, 70, 86, 42, preset.stations[1], "#ffffff", stroke, 12)}
    ${renderZone(252, 112, 78, 42, preset.stations[2], "#ffffff", stroke, 12)}
    ${renderMiniSign(154, 152, preset.chip, subjectAccent)}
  `;
}

function renderMatchSceneDetailed(preset, subjectAccent, momentAccent, stroke) {
  return `
    <circle cx="180" cy="124" r="46" fill="#ffffff" stroke="${stroke}" stroke-width="4" />
    <rect x="132" y="106" width="96" height="36" rx="14" fill="${momentAccent}" opacity="0.9" />
    ${renderSvgTextBlock(132, 106, 96, 36, preset.center, "#ffffff", 10.5, 2)}
    ${renderWordCard(150, 54, 60, 28, preset.cards[0], subjectAccent, stroke, 11)}
    ${renderWordCard(82, 92, 60, 28, preset.cards[1], subjectAccent, stroke, 11)}
    ${renderWordCard(82, 154, 60, 28, preset.cards[2], subjectAccent, stroke, 11)}
    ${renderWordCard(220, 154, 60, 28, preset.cards[3], subjectAccent, stroke, 11)}
    ${renderWordCard(220, 92, 60, 28, preset.cards[4], subjectAccent, stroke, 11)}
  `;
}

function renderDuoSceneDetailed(preset, subjectAccent, momentAccent, stroke) {
  return `
    ${renderTrack(
      [
        [116, 136],
        [156, 118],
        [232, 118],
        [244, 136]
      ],
      momentAccent
    )}
    ${renderLearnerIcon(92, 140, subjectAccent, stroke, preset.left)}
    ${renderLearnerIcon(268, 140, momentAccent, stroke, preset.right)}
    ${renderZone(128, 90, 104, 36, preset.middle, "#ffffff", stroke, 12)}
  `;
}

function renderWordBuildSceneDetailed(preset, subjectAccent, momentAccent, stroke) {
  return `
    ${renderTrack(
      [
        [100, 118],
        [138, 102],
        [226, 102],
        [252, 118]
      ],
      momentAccent
    )}
    ${renderWordCard(54, 128, 46, 46, preset.letters[0], subjectAccent, stroke, 18)}
    ${renderWordCard(110, 128, 46, 46, preset.letters[1], subjectAccent, stroke, 18)}
    ${renderWordCard(166, 128, 46, 46, preset.letters[2], subjectAccent, stroke, 18)}
    ${renderWordCard(222, 128, 46, 46, preset.letters[3], subjectAccent, stroke, 18)}
    ${renderMiniSign(120, 82, preset.note, momentAccent)}
  `;
}

function renderRouteSceneDetailed(preset, subjectAccent, momentAccent, stroke) {
  return `
    ${renderMiniSign(30, 90, preset.start, subjectAccent)}
    ${renderRouteStop(100, 160, preset.stops[0], momentAccent, stroke)}
    ${renderRouteStop(148, 140, preset.stops[1], momentAccent, stroke)}
    ${renderRouteStop(198, 118, preset.stops[2], momentAccent, stroke)}
    ${renderRouteStop(246, 96, preset.stops[3], momentAccent, stroke)}
    ${renderFlag(308, 56, subjectAccent)}
    ${renderZone(244, 144, 90, 36, preset.side, "#ffffff", stroke, 11)}
    ${renderMiniSign(274, 82, preset.end, momentAccent)}
  `;
}

function renderWallSceneDetailed(preset, subjectAccent, momentAccent, stroke) {
  return `
    ${renderTrack(
      [
        [142, 154],
        [176, 128],
        [210, 108],
        [236, 98]
      ],
      momentAccent
    )}
    ${renderWordCard(238, 54, 56, 30, preset.wall[0], subjectAccent, stroke, 11)}
    ${renderWordCard(238, 94, 56, 30, preset.wall[1], subjectAccent, stroke, 11)}
    ${renderWordCard(238, 134, 56, 30, preset.wall[2], subjectAccent, stroke, 11)}
    ${renderZone(40, 136, 102, 40, preset.write, "#ffffff", stroke, 12)}
    ${renderMiniSign(138, 78, preset.note, momentAccent)}
  `;
}

function renderTextRouteSceneDetailed(preset, subjectAccent, momentAccent, stroke) {
  return `
    ${renderTrack(
      [
        [90, 118],
        [144, 138],
        [234, 138],
        [280, 118]
      ],
      momentAccent
    )}
    ${renderWordCard(44, 90, 90, 28, preset.strips[0], subjectAccent, stroke, 11)}
    ${renderWordCard(146, 124, 90, 28, preset.strips[1], subjectAccent, stroke, 11)}
    ${renderWordCard(248, 90, 90, 28, preset.strips[2], subjectAccent, stroke, 11)}
    ${renderZone(126, 170, 108, 30, preset.side, "#ffffff", stroke, 11)}
    ${renderMiniSign(132, 66, preset.note, momentAccent)}
  `;
}

function renderGraphRouteSceneDetailed(preset, subjectAccent, momentAccent, stroke) {
  return `
    ${renderTrack(
      [
        [90, 154],
        [146, 132],
        [250, 144]
      ],
      momentAccent
    )}
    ${renderMiniGraphCard(38, 88, preset.charts[0], subjectAccent, stroke)}
    ${renderMiniGraphCard(140, 70, preset.charts[1], subjectAccent, stroke)}
    ${renderMiniGraphCard(244, 96, preset.charts[2], subjectAccent, stroke)}
    ${renderWordCard(56, 166, 72, 26, preset.prompts[0], momentAccent, stroke, 10)}
    ${renderWordCard(232, 166, 72, 26, preset.prompts[1], momentAccent, stroke, 10)}
    ${renderMiniSign(134, 164, preset.note, subjectAccent)}
  `;
}

function renderFloorStepsSceneDetailed(preset, subjectAccent, momentAccent, stroke) {
  const boxes = preset.steps
    .map((step, index) => renderWordCard(34 + index * 58, 118, 50, 42, step, subjectAccent, stroke, 12))
    .join("");

  return `
    ${renderTrack(
      [
        [58, 112],
        [106, 98],
        [248, 98],
        [286, 112]
      ],
      momentAccent
    )}
    ${boxes}
    ${renderMiniSign(116, 74, preset.note, momentAccent)}
  `;
}

function renderTwoLaneSceneDetailed(preset, subjectAccent, momentAccent, stroke) {
  return `
    ${renderZone(40, 82, 118, 40, preset.lanes[0], "#ffffff", stroke, 11)}
    ${renderZone(40, 140, 118, 40, preset.lanes[1], "#ffffff", stroke, 11)}
    ${renderWordCard(214, 80, 70, 30, preset.words[0], subjectAccent, stroke, 11)}
    ${renderWordCard(214, 144, 70, 30, preset.words[1], subjectAccent, stroke, 11)}
    ${renderMiniSign(188, 54, preset.note, momentAccent)}
    <path d="M168 100 H206 M168 160 H206" stroke="${momentAccent}" stroke-width="5" stroke-linecap="round" stroke-dasharray="8 8" />
  `;
}

function renderNumberLineSceneDetailed(preset, subjectAccent, momentAccent, stroke) {
  return `
    <path d="M34 124 H326" stroke="${stroke}" stroke-width="6" stroke-linecap="round" />
    ${renderTick(82)}
    ${renderTick(178)}
    ${renderTick(274)}
    ${renderCardTag(60, 82, preset.anchors[0], subjectAccent)}
    ${renderCardTag(156, 68, preset.anchors[1], subjectAccent)}
    ${renderCardTag(252, 82, preset.anchors[2], subjectAccent)}
    ${renderWordCard(84, 150, 50, 24, preset.cards[0], momentAccent, stroke, 10)}
    ${renderWordCard(160, 150, 50, 24, preset.cards[1], momentAccent, stroke, 10)}
    ${renderWordCard(236, 150, 50, 24, preset.cards[2], momentAccent, stroke, 10)}
    ${renderMiniSign(262, 146, preset.note, momentAccent)}
  `;
}

function renderTableSceneDetailed(preset, subjectAccent, momentAccent, stroke) {
  return `
    <rect x="54" y="86" width="252" height="96" rx="18" fill="#ffffff" stroke="${stroke}" stroke-width="3" />
    <path d="M118 86 V182 M182 86 V182 M244 86 V182 M54 134 H306" stroke="${stroke}" stroke-width="3" />
    ${renderTableText(86, 118, preset.headers[0], subjectAccent)}
    ${renderTableText(86, 166, preset.headers[1], subjectAccent)}
    ${renderTableText(150, 118, preset.top[0], stroke)}
    ${renderTableText(214, 118, preset.top[1], stroke)}
    ${renderTableText(274, 118, preset.top[2], stroke)}
    ${renderTableText(150, 166, preset.bottom[0], stroke)}
    ${renderTableText(214, 166, preset.bottom[1], stroke)}
    ${renderTableText(274, 166, preset.bottom[2], stroke)}
    ${renderMiniSign(124, 58, preset.note, momentAccent)}
  `;
}

function renderAreaSceneDetailed(preset, subjectAccent, momentAccent, stroke) {
  return `
    <rect x="86" y="76" width="180" height="96" rx="10" fill="${momentAccent}" opacity="0.12" stroke="${stroke}" stroke-width="5" />
    <rect x="126" y="108" width="100" height="36" rx="10" fill="${subjectAccent}" opacity="0.18" />
    ${renderMiniSign(98, 54, preset.border, subjectAccent)}
    ${renderMiniSign(150, 182, preset.fill, momentAccent)}
    ${renderZone(26, 144, 44, 34, preset.note, "#ffffff", stroke, 10)}
  `;
}

function renderGridSceneDetailed(preset, subjectAccent, momentAccent, stroke) {
  return `
    <rect x="104" y="72" width="152" height="120" rx="18" fill="#ffffff" stroke="${stroke}" stroke-width="3" />
    <path d="M142 72 V192 M180 72 V192 M218 72 V192 M104 102 H256 M104 132 H256 M104 162 H256" stroke="${stroke}" stroke-width="2" opacity="0.8" />
    <circle cx="199" cy="147" r="10" fill="${momentAccent}" />
    ${renderMiniSign(126, 52, preset.point, subjectAccent)}
    ${renderMiniSign(122, 196, preset.note, momentAccent)}
  `;
}

function renderGeometrySceneDetailed(preset, subjectAccent, momentAccent, stroke) {
  return `
    <path d="M70 170 L70 110 L128 110" stroke="${stroke}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M176 170 L212 110 L248 170" stroke="${stroke}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M282 170 L314 132 L332 170" stroke="${stroke}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
    ${renderMiniSign(46, 176, preset.tags[0], subjectAccent)}
    ${renderMiniSign(170, 176, preset.tags[1], momentAccent)}
    ${renderMiniSign(276, 176, preset.tags[2], subjectAccent)}
    ${renderMiniSign(132, 60, preset.note, momentAccent)}
  `;
}

function renderZone(x, y, width, height, label, fill, stroke, fontSize = 14) {
  return `
    <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="16" fill="${fill}" stroke="${stroke}" stroke-width="3" />
    ${renderSvgTextBlock(x, y, width, height, label, stroke, fontSize, 3)}
  `;
}

function renderTrack(points, color) {
  const [start, ...rest] = points;
  const path = rest.reduce((acc, [x, y]) => `${acc} L${x} ${y}`, `M${start[0]} ${start[1]}`);

  return `<path d="${path}" fill="none" stroke="${color}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="8 10" opacity="0.78" />`;
}

function renderCardRack(x, y, label, accent, stroke) {
  return `
    <rect x="${x}" y="${y}" width="56" height="84" rx="18" fill="#ffffff" stroke="${stroke}" stroke-width="3" />
    <rect x="${x + 10}" y="${y + 12}" width="36" height="14" rx="7" fill="${accent}" opacity="0.25" />
    <rect x="${x + 10}" y="${y + 34}" width="36" height="14" rx="7" fill="${accent}" opacity="0.2" />
    <rect x="${x + 10}" y="${y + 56}" width="36" height="14" rx="7" fill="${accent}" opacity="0.16" />
    ${renderSvgTextBlock(x - 2, y + 88, 60, 22, label, stroke, 11, 2)}
  `;
}

function renderChoicePad(x, y, label, accent, stroke) {
  return `
    <rect x="${x}" y="${y}" width="72" height="32" rx="14" fill="#ffffff" stroke="${stroke}" stroke-width="3" />
    ${renderSvgTextBlock(x, y, 72, 32, label, accent, 10.5, 2)}
  `;
}

function renderWordCard(x, y, width, height, label, accent, stroke, fontSize = 12) {
  return `
    <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="12" fill="#ffffff" stroke="${stroke}" stroke-width="3" />
    ${renderSvgTextBlock(x, y, width, height, label, accent, fontSize, 3)}
  `;
}

function renderMiniSign(x, y, label, accent) {
  const width = 72;
  const height = 28;

  return `
    <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="11" fill="${accent}" opacity="0.15" />
    ${renderSvgTextBlock(x, y, width, height, label, accent, 9.4, 2)}
  `;
}

function renderRouteStop(x, y, label, accent, stroke) {
  return `
    <circle cx="${x}" cy="${y}" r="12" fill="#ffffff" stroke="${stroke}" stroke-width="4" />
    <text x="${x}" y="${y + 4}" text-anchor="middle" fill="${accent}" font-size="8.5" font-family="Avenir Next, Trebuchet MS, sans-serif" font-weight="800">${escapeHtml(
      label
    )}</text>
  `;
}

function renderLearnerIcon(x, y, accent, stroke, label) {
  return `
    <circle cx="${x}" cy="${y - 22}" r="14" fill="#ffffff" stroke="${stroke}" stroke-width="3" />
    <rect x="${x - 18}" y="${y - 4}" width="36" height="42" rx="16" fill="#ffffff" stroke="${stroke}" stroke-width="3" />
    <rect x="${x - 24}" y="${y + 36}" width="48" height="22" rx="11" fill="${accent}" opacity="0.14" />
    ${renderSvgTextBlock(x - 26, y + 36, 52, 24, label, accent, 9.2, 2)}
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
    ${renderSvgTextBlock(x, y, 34, 24, label, accent, 10.5, 2)}
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

function renderMiniGraphCard(x, y, label, accent, stroke) {
  return `
    <rect x="${x}" y="${y}" width="78" height="56" rx="14" fill="#ffffff" stroke="${stroke}" stroke-width="3" />
    <path d="M${x + 14} ${y + 42} H${x + 62} M${x + 14} ${y + 42} V${y + 16}" stroke="${accent}" stroke-width="3" />
    <path d="M${x + 18} ${y + 38} L${x + 30} ${y + 28} L${x + 42} ${y + 30} L${x + 56} ${y + 18}" stroke="${accent}" stroke-width="3" fill="none" />
    ${renderSvgTextBlock(x + 8, y + 40, 62, 16, label, stroke, 9.5, 2)}
  `;
}

function renderTableText(x, y, text, fill) {
  return renderSvgTextBlock(x - 24, y - 12, 48, 24, text, fill, 12, 2);
}

function renderSvgTextBlock(x, y, width, height, label, fill, preferredFontSize = 12, maxLines = 2) {
  const fitted = fitSvgText(label, width, height, preferredFontSize, maxLines);
  const centerX = x + width / 2;
  const lineHeight = fitted.fontSize * 1.06;
  const startY = y + height / 2 - ((fitted.lines.length - 1) * lineHeight) / 2 + fitted.fontSize * 0.36;

  return `
    <text text-anchor="middle" fill="${fill}" font-size="${fitted.fontSize}" font-family="Avenir Next, Trebuchet MS, sans-serif" font-weight="800">
      ${fitted.lines
        .map(
          (line, index) =>
            `<tspan x="${centerX}" y="${startY + index * lineHeight}">${escapeHtml(line)}</tspan>`
        )
        .join("")}
    </text>
  `;
}

function fitSvgText(label, width, height, preferredFontSize, maxLines) {
  for (let fontSize = preferredFontSize; fontSize >= 7.5; fontSize -= 0.5) {
    const maxChars = Math.max(3, Math.floor(width / (fontSize * 0.6)));
    const lines = wrapSvgText(label, maxChars, maxLines);
    const lineHeight = fontSize * 1.06;

    if (lines.length * lineHeight <= height - 6) {
      return { lines, fontSize };
    }
  }

  return {
    lines: wrapSvgText(label, Math.max(3, Math.floor(width / 4.8)), maxLines),
    fontSize: 7.5
  };
}

function wrapSvgText(label, maxChars, maxLines) {
  const rawTokens = String(label)
    .replaceAll("/", " / ")
    .replaceAll("-", " - ")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  const tokens = rawTokens.flatMap((token) => splitSvgToken(token, maxChars));
  const lines = [];
  let current = "";

  tokens.forEach((token) => {
    const next = current ? `${current} ${token}` : token;

    if (next.length <= maxChars || current.length === 0) {
      current = next;
      return;
    }

    lines.push(current);
    current = token;
  });

  if (current) {
    lines.push(current);
  }

  if (lines.length <= maxLines) {
    return lines;
  }

  const visible = lines.slice(0, maxLines - 1);
  const lastLine = lines.slice(maxLines - 1).join(" ");
  visible.push(lastLine);
  return visible;
}

function splitSvgToken(token, maxChars) {
  if (token.length <= maxChars) {
    return [token];
  }

  const parts = [];
  let cursor = token;

  while (cursor.length > maxChars) {
    parts.push(cursor.slice(0, maxChars));
    cursor = cursor.slice(maxChars);
  }

  if (cursor) {
    parts.push(cursor);
  }

  return parts;
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
