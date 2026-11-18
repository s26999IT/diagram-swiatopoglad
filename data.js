const WORLDVIEWS = {
  agnostic: {
    name: "Agnostyk",
    summary: "Istnienia Boga nie da się udowodnić.",
    description:
      "Agnostycyzm zakłada, że istnienia Boga nie da się udowodnić.",
    questions: [
      "Czy to stwierdzenie dobrze opisuje twoją postawę?",
      "Skąd masz pewność, że nigdy nie będziemy w stanie rozstrzygnąć, czy Bóg istnieje?",
      "Jaki dowód przekonałby ciebie, że Bóg istnieje?",
      "Gdyby nie było takiego dowodu, czy oznaczałoby to, że Boga nie ma?",
      "Gdyby były inne dowody na istnienie Boga, to czy chciałbyś je poznać?",
      "Co sprawia, że mimo wszystko nie negujesz istnienia Boga?",
    ],
  },
  atheist: {
    name: "Ateista",
    summary: "Osobowy Bóg nie istnieje.",
    description:
      "Ateizm zaprzecza istnieniu osobowego Boga i często także istnieniu sił nadprzyrodzonych, ale dopuszcza istnienie moralności i bytów niematerialnych.",
    questions: [
      "Jak doszedłeś do wniosku, że Boga nie ma?",
      "Czy twój wniosek jest równoznaczny z tym, że Bóg rzeczywiście nie istnieje?",
      "Czy według ciebie dobro i zło istnieją obiektywnie?",
      "Skąd czerpiesz poczucie dobra i zła?",
      "Dlaczego nie można uznać, że torturowanie dzieci dla zabawy jest dobre?",
      "Jak powstał wszechświat? Co było przyczyną jego powstania?",
      "Czy nie masz czasem wrażenia, że wszechświat i przyroda wokół nas są precyzyjnie zaprojektowane? Jak byś to wyjaśnił?",
      "Czy lepiej jest wierzyć, że złożoność świata to wynik projektu czy dzieło przypadku?",
    ],
  },
  apatheist: {
    name: "Apateista",
    summary: "Pytanie o Boga nie ma znaczenia.",
    description:
      "Apateiści nie interesują się Bogiem – tym, czy On istnieje, czy nie. Uważają, że nawet jeżeli Bóg istnieje, nie wykazał żadnego dowodu troski o ludzi. Skoro Bogu nie zależy na ludziach, to również ludzie nie powinni przejmować się Bogiem. Apateiści nie przejmują się ani swoją wiarą, ani wiarą innych osób.",
    questions: [
      "Czy to stwierdzenie dobrze opisuje twoją postawę?",
      "Czy kiedykolwiek myślałeś o duchowości i istnieniu Boga?",
      "Co dzieje się z człowiekiem po śmierci?",
      "Gdyby Bóg jednak istniał, jakie znaczenie powinno mieć to w naszym życiu?",
      "Dlaczego sądzisz, że Bóg nie troszczy się o ludzi?",
      "Czy chcesz posłuchać, dlaczego ja uważam wiarę za ważny temat?",
    ],
  },
  deist: {
    name: "Deista",
    summary: "Bóg stworzył świat i zostawił go samemu sobie.",
    description:
      "Deiści zakładają, że Bóg istnieje i stworzył świat, lecz nie sprawuje nad nim kontroli. Jest jak zegarmistrz, który nakręcił ślepy mechanizm i zostawił go samemu sobie. Wszystko, co się dzieje, jest zdeterminowane przez prawa natury, a człowiek nie ma wolnej woli.",
    questions: [
      "Dlaczego uważasz, że Bóg jednak istnieje?",
      "Jak doszedłeś do wniosku, że Bóg nie ingeruje w świat?",
      "W jakim celu Bóg stworzył świat?",
      "Czy jesteś pewny, że człowiek nie może osobiście poznać Boga?",
      "Gdyby możliwe było osobiste poznanie Boga, na ile (w skali od 1 do 10) byłbyś tym zainteresowany?",
    ],
  },
  existentialist: {
    name: "Egzystencjalista",
    summary: "Sens nadaje sam człowiek, wbrew brakowi sensu świata.",
    description:
      "Egzystencjalizm zakłada, że człowiek jako jedyna wolna istota ma całkowitą kontrolę nad swoim życiem i samodzielnie decyduje o tym, kim jest. Życie obiektywnie nie ma sensu, tylko człowiek może mu go nadać. Jego celem powinno być korzystanie z wolności i doświadczanie świata. Egzystencjonalistom towarzyszy często poczucie bezsensu i pustki.",
    questions: [
      "Po co nadawać życiu własny sens, skoro ono i tak obiektywnie go nie ma? Czy nie jest to oszukiwaniem samego siebie?",
      "Czy dobro i zło istnieją obiektywnie?",
      "Jaki sens ma czynienie dobra?",
      "Skąd bierze się w człowieku potrzeba znalezienia sensu życia?",
    ],
  },
  humanist: {
    name: "Humanista",
    summary: "Człowiek jest najwyższą wartością.",
    description:
      "Humanizm podkreśla szczególną wartość człowieka i zakłada, że jest on najwyższą istotą i miarą wszystkich rzeczy. To człowiek nadaje życiu sens. Humaniści odrzucający istnienie Boga są nazywani świeckimi humanistami. Dawniej również chrześcijan uważano za humanistów, ponieważ podkreślali wartość i godność człowieka.",
    questions: [
      "Na jakiej podstawie uznajesz człowieka za istotę wyjątkową?",
      "Czy wybitne jednostki są bardziej wartościowe niż większość ludzi?",
      "Co stanowi o wartości człowieka?",
      "Czy chciałbyś dowiedzieć się, dlaczego moim zdaniem każdy człowiek posiada szczególną wartość?",
    ],
  },
  pantheist: {
    name: "Panteista",
    summary: "Bóg i świat są tym samym.",
    description:
      "Panteiści wierzą, że Bóg jest tożsamy ze światem. Nie istnieje poza nim, ale jest wewnętrzną bezosobową siłą, która go napędza. Wszystko, co istnieje (włącznie z ludźmi) jest częścią tego jednego absolutu. Panteiści wierzą także w reinkarnację.",
    questions: [
      "Jak doszedłeś do wniosku, że istnieje reinkarnacja?",
      "Co decyduje o tym, w jakiej formie się odrodzisz?",
      "Skoro wszyscy jesteśmy częścią tego samego absolutu, to dlaczego na świecie dochodzi do konfliktów i wojen?",
      "Jak to możliwe, że ludzie są bardziej złożeni i aktywni od absolutu, który ich stworzył?",
      "Jeżeli wszystko jest jednym absolutem, jak doszło do tego, że została zburzona jego jedność i harmonia?",
    ],
  },
  panentheist: {
    name: "Panenteista",
    summary: "Świat jest częścią Boga, ale Bóg jest czymś więcej.",
    description:
      "Świat jest częścią Boga. Wobec tego wszystkie wydarzenia na tym świecie mają na Niego wpływ i mogą Go zmienić. Istnieje jednak część Boga, która pozostaje niezmienna i znajduje się poza światem. Bóg jest czymś więcej niż tylko wszechświatem.",
    questions: [
      "Jaka jest natura niematerialnej, będącej poza światem części Boga?",
      "Jak to możliwe, że jedna część Boga jest zależna od czasu, a druga nie?",
      "Czy takie spłaszczanie o jeden wymiar jednej części Boga nie zaburza jego spójności?",
      "Jak doszedłeś do wniosku, że Bóg jest jednocześnie w materii wszechświata i poza nią?",
    ],
  },
  nihilist: {
    name: "Nihilista",
    summary: "Życie, moralność i wartości nie mają sensu.",
    description:
      "Nihilizm jest zaprzeczeniem wszystkiego – Boga, filozofii, wiedzy, moralności i wartości. Świat niematerialny nie istnieje, a życie nie ma sensu.",
    questions: [
      "Jeśli nie ma dobra i zła, to czym różni się działalność charytatywna od torturowania dzieci dla zabawy?",
      "Jeśli nie ma dobra i zła, to czym jest i jak wykształciło się ludzkie sumienie?",
      "Czym różni się strzelanie do ludzi od strzelania do drzewa?",
      "Jeśli człowiek jest jedynie zaawansowanym zjawiskiem fizycznym, to czemu morderców wtrącamy do więzienia, a kamienia, który spadł komuś na głowę już nie?",
      "Skoro życie nie ma sensu, to po co wstałeś dzisiaj z łóżka? Do czego zmierzasz w swoim życiu?",
      "Czy chciałbyś dowiedzieć się, co dla mnie jest źródłem moralności i sensu życia?",
    ],
  },
  polytheist: {
    name: "Politeista",
    summary: "Istnieje wielu bogów.",
    description:
      "Politeizm to wiara w wielu bogów. Wybranego przez siebie boga można czcić w dowolnej, wybranej przez siebie formie.",
    questions: [
      "Opowiedz mi o bogach, w których wierzysz.",
      "Czy są istotami osobowymi?",
      "Jaki jest charakter ich interakcji? Czy kłócą się? Czy są ze sobą zgodni?",
      "Jeśli się kłócą, to jaki to ma wpływ na rzeczywistość?",
      "Jeśli są ze sobą zgodni we wszystkim, to skąd wniosek, że są odrębnymi bogami?",
    ],
  },
  relativist: {
    name: "Relatywista",
    summary: "Prawda i dobro zależą od tego, kto je określa.",
    description:
      "Relatywizm zakłada, że nie ma prawdy absolutnej – prawdą jest to, co uważa się za prawdę. Podobnie jest z moralnością. Każdy definiuje dobro na własny sposób. Relatywizm religijny twierdzi, że wszystkie religie są tak samo prawdziwe i ważne do wyrażania wiary w Boga.",
    questions: [
      "Jeśli prawda jest subiektywna, to dlaczego matematycy na całym świecie zgadzają się odnośnie niesprzecznego systemu twierdzeń matematycznych?",
      "Czy mówienie „prawda jest subiektywna” nie jest stawianiem sprawy w sposób obiektywny?",
      "Jeśli dobro i zło nie są obiektywne, to jaki sens ma prawo?",
    ],
  },
  naturalist: {
    name: "Naturalista",
    summary: "Istnieje tylko energia i materia.",
    description:
      "Naturaliści zaprzeczają istnieniu Boga. Uważają, że jedynymi istniejącymi bytami są energia i materia. Wszechświat to ślepy mechanizm, a wszystko, co się dzieje, jest zdeterminowane przez prawa natury. Ludzie są wysoko rozwiniętymi maszynami biologicznymi, a ich wartość wynika jedynie z wyższości nad innymi zwierzętami.",
    questions: [
      "Jak przypadkowe procesy fizyczne i chemiczne mogły stworzyć świadome i celowe myślenie?",
      "Czy dobro i zło istnieją obiektywnie?",
      "Jeśli tak, to skąd czerpiesz poczucie dobra i zła?",
      "Jeśli nie, to dlaczego nie można uznać, że torturowanie dzieci dla zabawy jest dobre?",
      "Jeśli nie ma dobra i zła, to czym jest i jak wykształciło się ludzkie sumienie?",
      "Skąd wzięły się prawa w świecie naturalnym i czemu nie są ze sobą sprzeczne?",
      "Czy chciałbyś dowiedzieć się, co dla mnie jest źródłem moralności, świadomości i złożoności przyrody?",
    ],
  },
  theist: {
    name: "Teista",
    summary: "Bóg jest ponad światem, kontroluje go i nadaje mu sens.",
    description:
      "Według teistów Bóg istnieje, jest ponad światem, kontroluje go i nadaje mu znaczenie. Może być osobowy lub bezosobowy.",
    questions: [
      "Co charakteryzuje Boga, w którego wierzysz?",
      "Na czym opierasz swoją wiarę?",
      "Kim jest dla ciebie Jezus? Po co przyszedł na świat?",
      "Jaka jest rola uczynków w naszym życiu?",
      "Gdyby możliwe było osobiste poznanie Boga, na ile (w skali od 1 do 10) byłbyś tym zainteresowany?",
      "Czy chciałbyś się dowiedzieć, jak ja poznałem Boga osobiście?",
    ],
  },
  christian: {
    name: "Teista chrześcijański",
    summary: "Boga można poznać przez Jezusa, a zbawienie jest przez wiarę.",
    description:
      "W teizmie chrześcijańskim najważniejszym źródłem poznania prawdy o Bogu i świecie jest Biblia. Według niej Bóg jest projektantem wszystkiego, także człowieka, którego stworzył na swój obraz, aby żyć z nim w przyjaźni. Człowiek jednak postanowił żyć po swojemu, co było niezgodne z Bożym planem. Właśnie ten sprzeciw wobec Boga Biblia nazywa grzechem. Ponieważ Bóg jest święty i sprawiedliwy, nie może przyjaźnić się z kimś, kto zbuntował się przeciwko Niemu. Dlatego wszyscy ludzie, jako niedoskonali, są oddzieleni od Boga i zasługują na wieczne potępienie. Ostatecznie wszyscy ludzie powinni trafić do piekła. Bóg jednak w swojej miłości posłał swojego Syna, który żył bezgrzesznym, doskonałym życiem i umarł zamiast nas. Tylko w ten sposób Bóg mógł wybaczyć nasze grzechy i pozostać sprawiedliwym. Trzeba jedynie uwierzyć w śmierć i zmartwychwstanie Jezusa i uznać Go osobiście za swojego Pana i Zbawiciela. To oznacza chęć odwrócenia się od swoich grzechów i podporządkowania życia Bogu.",
    questions: [
      "Kim jest dla ciebie Jezus? Po co przyszedł na świat?",
      "Jaka jest rola uczynków w naszym życiu?",
      "Gdyby twój znajomy chciał zostać chrześcijaninem, ale nie wiedział, jak to zrobić i zwrócił się z tym do ciebie, co byś mu odpowiedział?",
      "Czy czytasz Biblię? Jak często?",
      "Czy chciałbyś dowiedzieć się, jak zaczęła się moja osobista relacja z Bogiem?",
    ],
  },
};

const PROMPTS = {
  meaning: {
    title: "Gdzie odnajdujesz sens życia?",
    text: "Na diagramie ta odpowiedź nie dostaje osobnej nazwy. Zielony dymek zostawia pytanie otwarte, żeby rozmowa mogła pójść dalej.",
  },
  relation: {
    title: "Jaki jest związek Boga ze światem?",
    text: "Odrzuciłeś obie propozycje z diagramu: że Bóg jest we wszystkim w świecie i że świat jest częścią Boga. Diagram nie nadaje tu nazwy i zostawia pytanie o ten związek.",
  },
  know: {
    title: "Jak możesz poznać Boga?",
    text: "Uznajesz, że Boga można poznać osobiście, ale nie przez człowieka Jezusa Chrystusa. Diagram nie nazywa tego światopoglądu i pyta, jak w takim razie można poznać Boga.",
  },
  saved: {
    title: "W jaki sposób jesteś zbawiony?",
    text: "Uznajesz, że Bóg dał się poznać przez Jezusa, ale zbawienia nie wiążesz wyłącznie z wiarą w jego śmierć i zmartwychwstanie. Diagram zostawia to jako pytanie do rozmowy.",
  },
};

const NODES = {
  god: {
    type: "question",
    kicker: "Zacznij tutaj",
    text: "Bóg istnieje?",
    options: [
      { label: "Tak", to: "many" },
      { label: "Nie wiem", to: "agnostic" },
      { label: "Nie obchodzi mnie", to: "apatheist" },
      { label: "Nie", to: "atheist" },
    ],
  },
  many: {
    type: "question",
    kicker: "Jeden Bóg czy wielu",
    text: "Istnieje więcej niż jeden Bóg?",
    options: [
      { label: "Tak", to: "polytheist" },
      { label: "Nie", to: "independent" },
    ],
  },
  independent: {
    type: "question",
    kicker: "Bóg a świat",
    text: "Bóg istnieje niezależnie od świata?",
    options: [
      { label: "Tak", to: "control" },
      { label: "Nie", to: "inEverything" },
    ],
  },
  inEverything: {
    type: "question",
    kicker: "Jaki jest związek Boga ze światem?",
    text: "Bóg jest we wszystkim w świecie?",
    options: [
      { label: "Tak", to: "pantheist" },
      { label: "Nie", to: "worldPart" },
    ],
  },
  worldPart: {
    type: "question",
    kicker: "Jaki jest związek Boga ze światem?",
    text: "Świat jest częścią Boga?",
    options: [
      { label: "Tak", to: "panentheist" },
      { label: "Nie", to: "prompt-relation" },
    ],
  },
  control: {
    type: "question",
    kicker: "Bóg a świat",
    text: "Bóg sprawuje teraz kontrolę nad światem?",
    options: [
      { label: "Tak", to: "engaged" },
      { label: "Nie", to: "deist" },
    ],
  },
  engaged: {
    type: "question",
    kicker: "Bóg a świat",
    text: "Bóg jest zaangażowany w sprawy świata?",
    options: [
      { label: "Tak", to: "know" },
      { label: "Nie", to: "theist" },
    ],
  },
  know: {
    type: "question",
    kicker: "Jak możesz poznać Boga?",
    text: "Boga można poznać osobiście?",
    options: [
      { label: "Tak", to: "jesus" },
      { label: "Nie", to: "theist" },
    ],
  },
  jesus: {
    type: "question",
    kicker: "Jak możesz poznać Boga?",
    text: "Bóg dał się poznać w świecie przez człowieka Jezusa Chrystusa?",
    options: [
      { label: "Tak", to: "salvation" },
      { label: "Nie", to: "prompt-know" },
    ],
  },
  salvation: {
    type: "question",
    kicker: "W jaki sposób jesteś zbawiony?",
    text: "Zbawienie można osiągnąć tylko przez wiarę w śmierć i zmartwychwstanie Jezusa?",
    options: [
      { label: "Tak", to: "christian" },
      { label: "Nie", to: "prompt-saved" },
    ],
  },
  meaningWorld: {
    type: "question",
    kicker: "Gdzie odnajdujesz sens życia?",
    text: "Sens życia odnajduję w świecie?",
    options: [
      { label: "Tak", to: "meaningExperience" },
      { label: "Nie", to: "nihilist" },
      { label: "Nie wiem", to: "prompt-meaning" },
    ],
  },
  meaningExperience: {
    type: "question",
    kicker: "Gdzie odnajdujesz sens życia?",
    text: "Sens życia odnajduję w doświadczeniu?",
    options: [
      { label: "Tak", to: "existentialist" },
      { label: "Nie", to: "meaningHuman" },
    ],
  },
  meaningHuman: {
    type: "question",
    kicker: "Gdzie odnajdujesz sens życia?",
    text: "Sens życia odnajduję w człowieku?",
    options: [
      { label: "Tak", to: "humanist" },
      { label: "Nie", to: "meaningNature" },
    ],
  },
  meaningNature: {
    type: "question",
    kicker: "Gdzie odnajdujesz sens życia?",
    text: "Sens życia odnajduję w naturze?",
    options: [
      { label: "Tak", to: "naturalist" },
      { label: "Nie", to: "meaningEach" },
    ],
  },
  meaningEach: {
    type: "question",
    kicker: "Gdzie odnajdujesz sens życia?",
    text: "Każdy człowiek sam odnajduje sens życia?",
    options: [
      { label: "Tak", to: "relativist" },
      { label: "Nie", to: "prompt-meaning" },
    ],
  },
};

const RESULT_ORDER = [
  "agnostic",
  "apatheist",
  "atheist",
  "nihilist",
  "existentialist",
  "humanist",
  "naturalist",
  "relativist",
  "polytheist",
  "pantheist",
  "panentheist",
  "deist",
  "theist",
  "christian",
];

for (const id of RESULT_ORDER) {
  const follow =
    id === "atheist" || id === "agnostic" || id === "apatheist"
      ? {
          label: "Doprecyzuj: gdzie odnajdujesz sens życia?",
          to: "meaningWorld",
        }
      : null;
  NODES[id] = { type: "result", worldview: id, follow };
}

for (const key of Object.keys(PROMPTS)) {
  NODES["prompt-" + key] = { type: "prompt", prompt: key };
}
