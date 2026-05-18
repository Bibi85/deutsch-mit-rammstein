import { useState } from "react";

const SONGS = [
  {
    id: "du-hast", title: "Du Hast", level: "A1", levelColor: "#00ff88", year: 1997, theme: "Negazione e ripetizione",
    vocabulary: [
      { german: "haben", ipa: "ˈhaːbən", italian: "avere", example: "Du hast mich", pos: "verbo" },
      { german: "hassen", ipa: "ˈhasən", italian: "odiare", example: "Du hast mich (omonimia!)", pos: "verbo" },
      { german: "fragen", ipa: "ˈfraːɡən", italian: "chiedere", example: "Du hast mich gefragt", pos: "verbo" },
      { german: "bis", ipa: "bɪs", italian: "fino a / finché", example: "bis der Tod euch scheidet", pos: "congiunzione" },
      { german: "der Tod", ipa: "deːɐ̯ toːt", italian: "la morte", example: "bis der Tod euch scheidet", pos: "sostantivo" },
      { german: "nein", ipa: "naɪ̯n", italian: "no", example: "Nein!", pos: "avverbio" },
    ],
    grammar: { title: "Il presente indicativo + l'omofonia come gioco poetico", explanation: "Il genio di 'Du Hast' sta in un'ambiguità voluta: 'Du hast mich' significa 'tu mi hai' (haben = avere), ma suona identico a 'Du hasst mich' (tu mi odi, hassen = odiare). Rammstein sfrutta questa omofonia per costruire un testo a doppio senso. In tedesco il presente si forma con: soggetto + radice verbale + desinenza. Per 'haben': ich habe, du hast, er hat.", example: "Du hast → du + hast (haben, 2ª pers. sing.)\nDu hasst → du + hasst (hassen, 2ª pers. sing.)\nIdentici nell'orale, diversi nello scritto." },
    curiosity: { text: "Il titolo è un gioco di parole deliberato che funziona solo nell'orale: 'Du hast' (tu hai) e 'Du hasst' (tu odi) sono foneticamente identici. Till Lindemann ha confermato che l'ambiguità era voluta — la canzone parla del voto matrimoniale rifiutato, e quell'oscillare tra avere e odiare rispecchia la tensione dell'amore possessivo. Il video è ispirato a Reservoir Dogs di Tarantino.", funFact: "La parola 'hassen' viene dall'alto tedesco antico 'haʒʒan'. La radice proto-germanica è la stessa dell'inglese 'hate'. Il tedesco porta la storia nelle sue radici — ogni parola è un fossile linguistico." },
    usefulPhrases: [
      { german: "Ich habe Hunger.", ipa: "ɪç ˈhaːbə ˈhʊŋɐ", italian: "Ho fame." },
      { german: "Du hast recht.", ipa: "duː hast ʁɛçt", italian: "Hai ragione." },
      { german: "Ich frage mich, ob...", ipa: "ɪç ˈfraːɡə mɪç ɔp", italian: "Mi chiedo se..." },
    ],
    quiz: [
      { q: "Cosa significa 'hassen'?", options: ["avere", "odiare", "chiedere", "dare"], correct: 1 },
      { q: "Come si dice 'la morte' in tedesco?", options: ["das Leben", "der Tod", "die Zeit", "das Ende"], correct: 1 },
      { q: "'Du hast mich gefragt' — quale tempo è 'gefragt'?", options: ["presente", "futuro", "Perfekt (passato)", "imperativo"], correct: 2 },
    ],
  },
  {
    id: "ich-will", title: "Ich Will", level: "A1", levelColor: "#00ff88", year: 2001, theme: "Verbi modali: wollen",
    vocabulary: [
      { german: "wollen", ipa: "ˈvɔlən", italian: "volere", example: "Ich will", pos: "verbo modale" },
      { german: "sehen", ipa: "ˈzeːən", italian: "vedere", example: "Ich will sehen", pos: "verbo" },
      { german: "hören", ipa: "ˈhøːʁən", italian: "sentire / ascoltare", example: "Ich will hören", pos: "verbo" },
      { german: "verstehen", ipa: "fɛɐ̯ˈʃteːən", italian: "capire", example: "Ich will verstehen", pos: "verbo" },
      { german: "vertrauen", ipa: "fɛɐ̯ˈtʁaʊ̯ən", italian: "fidarsi / avere fiducia", example: "Ihr sollt mir vertrauen", pos: "verbo" },
      { german: "brennen", ipa: "ˈbʁɛnən", italian: "bruciare", example: "Ich will brennen", pos: "verbo" },
    ],
    grammar: { title: "Il verbo modale 'wollen' (volere)", explanation: "In tedesco i verbi modali sono fondamentali e si usano moltissimo. 'Wollen' (volere) si coniuga in modo irregolare: ich will, du willst, er/sie will, wir wollen, ihr wollt, sie wollen. Il verbo modale va in seconda posizione, mentre il secondo verbo (infinito) va in fondo alla frase — la famosa Satzklammer. 'Ich Will' di Rammstein è un manuale vivente di questa struttura.", example: "Ich will sehen.\n→ will (modale, pos. 2) + sehen (infinito, in fondo)\n\nIch will hören.\nIch will verstehen.\n\nSchema: soggetto + WILL + ... + infinito" },
    curiosity: { text: "Ich Will è una delle canzoni più esplicitamente politiche dei Rammstein — un atto d'accusa contro i media e la cultura dello spettacolo. Il testo è costruito come una lista di richieste sempre più assurde rivolte al pubblico: 'voglio vedere, voglio sentire, voglio che vi fidate di me'. Il video simula una rapina in banca trasmessa in diretta TV. La critica al sensazionalismo mediatico è feroce.", funFact: "'Wollen' è uno dei sei verbi modali tedeschi: können (potere/sapere), müssen (dovere), sollen (dover fare per altri), dürfen (avere il permesso), mögen (piacere/volere gentilmente), wollen (volere). Sono tra le prime cose che si imparano — e le più usate nella vita quotidiana." },
    usefulPhrases: [
      { german: "Ich will einen Kaffee.", ipa: "ɪç vɪl ˈaɪ̯nən ˈkafɛ", italian: "Voglio un caffè." },
      { german: "Was willst du machen?", ipa: "vas vɪlst duː ˈmaxən", italian: "Cosa vuoi fare?" },
      { german: "Ich will das verstehen.", ipa: "ɪç vɪl das fɛɐ̯ˈʃteːən", italian: "Voglio capire questo." },
    ],
    quiz: [
      { q: "Come si coniuga 'wollen' alla prima persona singolare?", options: ["ich wollen", "ich wolle", "ich will", "ich wille"], correct: 2 },
      { q: "Cosa significa 'hören'?", options: ["vedere", "parlare", "sentire/ascoltare", "toccare"], correct: 2 },
      { q: "Dove va l'infinito quando si usa un verbo modale?", options: ["In prima posizione", "In seconda posizione", "Subito dopo il modale", "In fondo alla frase"], correct: 3 },
    ],
  },
  {
    id: "sonne", title: "Sonne", level: "A1", levelColor: "#00ff88", year: 2001, theme: "Imperativo e numeri",
    vocabulary: [
      { german: "die Sonne", ipa: "diː ˈzɔnə", italian: "il sole", example: "Hier kommt die Sonne", pos: "sostantivo" },
      { german: "kommen", ipa: "ˈkɔmən", italian: "venire / arrivare", example: "Hier kommt die Sonne", pos: "verbo" },
      { german: "zählen", ipa: "ˈtsɛːlən", italian: "contare", example: "Eins, zwei, drei...", pos: "verbo" },
      { german: "steigen", ipa: "ˈʃtaɪ̯ɡən", italian: "salire / alzarsi", example: "Die Sonne steigt", pos: "verbo" },
      { german: "golden", ipa: "ˈɡɔldən", italian: "dorato/a", example: "So golden", pos: "aggettivo" },
      { german: "hier", ipa: "hiːɐ̯", italian: "qui", example: "Hier kommt die Sonne", pos: "avverbio" },
    ],
    grammar: { title: "L'imperativo in tedesco", explanation: "In 'Sonne', Rammstein usa l'imperativo — la forma verbale del comando. In tedesco l'imperativo informale (du) si forma togliendo la desinenza -en dall'infinito e spesso anche la -e finale. Esempi: 'Komm!' (vieni!), da 'kommen'. L'imperativo formale (Sie) mantiene la forma base del verbo.", example: "kommen → Komm! (vieni!)\nsteigen → Steig! (sali!)\nzählen → Zähl! (conta!)\n\nStruttura: radice verbale + ! (senza soggetto)" },
    curiosity: { text: "Il video di Sonne reinterpreta la fiaba di Biancaneve: i sette nani diventano minatori muscolosi, e Biancaneve una figura dominatrice. La canzone era originariamente scritta per il pugile Felix Trinidad — un inno alla potenza fisica. Il 'Hier kommt die Sonne' finale è diventato uno dei ritornelli più riconoscibili della storia del metal.", funFact: "In tedesco i numeri cardinali non cambiano forma, ma esistono forme ordinali: erste (primo), zweite (secondo), dritte (terzo). Rammstein usa i cardinali puri, che danno quel ritmo meccanico e ipnotico. Dal quattro in poi, l'ordinale si forma aggiungendo -te o -ste alla radice." },
    usefulPhrases: [
      { german: "Komm her!", ipa: "kɔm heːɐ̯", italian: "Vieni qui!" },
      { german: "Die Sonne scheint.", ipa: "diː ˈzɔnə ʃaɪ̯nt", italian: "Il sole splende." },
      { german: "Zähl bis zehn.", ipa: "tsɛːl bɪs tsɛːn", italian: "Conta fino a dieci." },
    ],
    quiz: [
      { q: "Come si dice 'il sole' in tedesco?", options: ["der Mond", "die Sonne", "das Feuer", "der Stern"], correct: 1 },
      { q: "Come si forma l'imperativo informale di 'kommen'?", options: ["Kommen!", "Kommst!", "Komm!", "Komme!"], correct: 2 },
      { q: "Cosa significa 'hier'?", options: ["lì", "ovunque", "qui", "mai"], correct: 2 },
    ],
  },
  {
    id: "engel", title: "Engel", level: "B1", levelColor: "#ffaa00", year: 1997, theme: "Perfekt e vocabolario emotivo",
    vocabulary: [
      { german: "der Engel", ipa: "deːɐ̯ ˈɛŋəl", italian: "l'angelo", example: "Engel", pos: "sostantivo" },
      { german: "wer", ipa: "veːɐ̯", italian: "chi", example: "Wer hat uns verraten?", pos: "pronome" },
      { german: "verraten", ipa: "fɛɐ̯ˈraːtən", italian: "tradire", example: "Wer hat uns verraten?", pos: "verbo" },
      { german: "allein", ipa: "aˈlaɪ̯n", italian: "solo/a", example: "sind so allein", pos: "aggettivo/avv." },
      { german: "der Flügel", ipa: "deːɐ̯ ˈflyːɡəl", italian: "l'ala", example: "(nel simbolismo del brano)", pos: "sostantivo" },
      { german: "fallen", ipa: "ˈfalən", italian: "cadere", example: "fallen lassen", pos: "verbo" },
    ],
    grammar: { title: "Il Perfekt: il passato conversazionale tedesco", explanation: "In tedesco, il passato nelle conversazioni si esprime quasi sempre col Perfekt, non col Präteritum (più letterario). Il Perfekt si forma con l'ausiliare 'haben' o 'sein' al presente + il participio passato (Partizip II). In 'Engel': 'Wer hat uns verraten?' → haben (ausiliare) + verraten (Partizip II irregolare).", example: "Wer hat uns verraten?\n→ hat = haben (3ª pers. sing., ausiliare)\n→ verraten = Partizip II di 'verraten'\n\nRegola: haben/sein + Partizip II (sempre in fondo!)" },
    curiosity: { text: "Engel è filosoficamente complessa: gli angeli vengono descritti come esseri che invidiano gli umani per la loro capacità di soffrire e desiderare. È un'inversione dell'iconografia tradizionale — non sono gli umani ad aspirare al divino, ma il contrario. Il testo è ispirato al film 'Il cielo sopra Berlino' di Wim Wenders (1987).", funFact: "La parola 'Engel' viene dal greco 'ángelos' (messaggero), passata attraverso il latino. Quasi tutti i sostantivi tedeschi per esseri soprannaturali sono maschili o neutri: der Teufel (il diavolo), der Geist (lo spirito), das Gespenst (il fantasma). La lingua rivela la cosmologia di chi la parla." },
    usefulPhrases: [
      { german: "Ich bin allein.", ipa: "ɪç bɪn aˈlaɪ̯n", italian: "Sono solo/a." },
      { german: "Wer hat das gesagt?", ipa: "veːɐ̯ hat das ɡəˈzaːkt", italian: "Chi ha detto questo?" },
      { german: "Er hat mich verraten.", ipa: "eːɐ̯ hat mɪç fɛɐ̯ˈraːtən", italian: "Mi ha tradito." },
    ],
    quiz: [
      { q: "Cosa significa 'verraten'?", options: ["salvare", "tradire", "amare", "dimenticare"], correct: 1 },
      { q: "Come si forma il Perfekt?", options: ["solo con 'sein'", "ausiliare + infinito", "ausiliare + Partizip II", "solo con 'haben'"], correct: 2 },
      { q: "Cosa significa 'allein'?", options: ["insieme", "sempre", "solo/a", "ancora"], correct: 2 },
    ],
  },
  {
    id: "mutter", title: "Mutter", level: "B1", levelColor: "#ffaa00", year: 2001, theme: "Verbi riflessivi e registro poetico",
    vocabulary: [
      { german: "die Mutter", ipa: "diː ˈmʊtɐ", italian: "la madre", example: "Mutter", pos: "sostantivo" },
      { german: "weinen", ipa: "ˈvaɪ̯nən", italian: "piangere", example: "Niemand weint", pos: "verbo" },
      { german: "niemand", ipa: "ˈniːmant", italian: "nessuno", example: "Niemand weint", pos: "pronome" },
      { german: "sich sehnen", ipa: "zɪç ˈzeːnən", italian: "anelare / desiderare intensamente", example: "Ich sehne mich", pos: "verbo riflessivo" },
      { german: "der Schatten", ipa: "deːɐ̯ ˈʃatən", italian: "l'ombra", example: "(nel simbolismo del brano)", pos: "sostantivo" },
      { german: "geboren", ipa: "ɡəˈboːʁən", italian: "nato/a", example: "Ich wurde geboren", pos: "participio" },
    ],
    grammar: { title: "I verbi riflessivi con 'sich'", explanation: "In tedesco molti verbi richiedono un pronome riflessivo 'sich'. Il pronome cambia in base al soggetto. 'Sich sehnen' (anelare): ich sehne mich, du sehnst dich, er/sie sehnt sich. Il pronome si posiziona subito dopo il verbo nelle frasi principali.", example: "Ich sehne mich nach dir.\n→ sehne = verbo (1ª pers.)\n→ mich = pronome riflessivo (accusativo)\n\ndu sehnst dich / er sehnt sich\nwir sehnen uns / ihr sehnt euch / sie sehnen sich" },
    curiosity: { text: "Mutter racconta di un essere creato artificialmente — senza madre — che reclama con rabbia e dolore l'amore materno negato. Alcuni critici la leggono come metafora dell'alienazione moderna, altri come elaborazione del trauma dell'abbandono. Il brano è ispirato a Frankenstein di Mary Shelley. È forse il testo più psicanaliticamente denso di Rammstein.", funFact: "La parola 'Sehnsucht' — titolo dell'album del 1997 — è intraducibile in italiano. Significa un desiderio intenso e malinconico per qualcosa di irraggiungibile. È composta da 'sehnen' + 'Sucht' (dipendenza). I tedeschi hanno un talento unico per nominare stati emotivi complessi con una sola parola." },
    usefulPhrases: [
      { german: "Niemand weiß es.", ipa: "ˈniːmant vaɪ̯s ɛs", italian: "Nessuno lo sa." },
      { german: "Ich sehne mich nach Hause.", ipa: "ɪç ˈzeːnə mɪç nax ˈhaʊ̯zə", italian: "Ho nostalgia di casa." },
      { german: "Sie weint oft.", ipa: "ziː vaɪ̯nt ɔft", italian: "Piange spesso." },
    ],
    quiz: [
      { q: "Cosa significa 'niemand'?", options: ["qualcuno", "ognuno", "nessuno", "chiunque"], correct: 2 },
      { q: "Come si dice 'io anelo' (sich sehnen)?", options: ["Ich sehne sich", "Ich sehne mich", "Ich sehne dich", "Mir sehne ich"], correct: 1 },
      { q: "Cosa significa 'weinen'?", options: ["ridere", "urlare", "dormire", "piangere"], correct: 3 },
    ],
  },
  {
    id: "mein-land", title: "Mein Land", level: "B1", levelColor: "#ffaa00", year: 2011, theme: "Aggettivi possessivi e identità",
    vocabulary: [
      { german: "mein", ipa: "maɪ̯n", italian: "mio/mia", example: "Mein Land", pos: "aggettivo possessivo" },
      { german: "das Land", ipa: "das lant", italian: "il paese / la terra", example: "Mein Land", pos: "sostantivo" },
      { german: "das Meer", ipa: "das meːɐ̯", italian: "il mare", example: "am Meer", pos: "sostantivo" },
      { german: "der Sand", ipa: "deːɐ̯ zant", italian: "la sabbia", example: "im Sand", pos: "sostantivo" },
      { german: "stehen", ipa: "ˈʃteːən", italian: "stare in piedi / trovarsi", example: "Wir stehen hier", pos: "verbo" },
      { german: "fremd", ipa: "fʁɛmt", italian: "straniero / estraneo", example: "Du bist fremd", pos: "aggettivo" },
    ],
    grammar: { title: "Gli aggettivi possessivi: mein, dein, sein...", explanation: "In tedesco gli aggettivi possessivi si declinano in base al genere e al caso del sostantivo. 'Mein' (mio) cambia forma: mein Land (neutro, nominativo), meine Mutter (femminile), meinen Vater (maschile, accusativo). La logica è identica per dein (tuo), sein/ihr (suo), unser (nostro).", example: "mein Land (neutro nom.) → Mein Land ist schön.\nmeine Mutter (femm. nom.) → Meine Mutter weint.\nmeinen Vater (masch. acc.) → Ich liebe meinen Vater.\n\nSchema: masch./neutr. nom. = mein\nfemm./pl. nom. = meine" },
    curiosity: { text: "Mein Land è stata la prima canzone pubblicata dai Rammstein dopo una pausa di cinque anni. Il video è un omaggio ironico alla cultura surf californiana anni '60 — sei tedeschi cupi in abiti vittoriani sulla spiaggia, tra surfisti sorridenti. Il contrasto visivo è deliberato: una riflessione sull'identità tedesca che resiste all'omologazione.", funFact: "La Germania si chiama 'Deutschland' in tedesco, ma in italiano diciamo 'Germania' — dal latino usato da Cesare. I tedeschi usano 'Deutschland', da 'Deutsch' (del popolo) + 'Land' (terra): letteralmente 'terra del popolo'. Ogni lingua porta con sé una storia geopolitica diversa." },
    usefulPhrases: [
      { german: "Das ist mein Platz.", ipa: "das ɪst maɪ̯n plats", italian: "Questo è il mio posto." },
      { german: "Meine Familie wohnt hier.", ipa: "ˈmaɪ̯nə faˈmiːliə voːnt hiːɐ̯", italian: "La mia famiglia abita qui." },
      { german: "Dein Land ist weit weg.", ipa: "daɪ̯n lant ɪst vaɪ̯t vɛk", italian: "Il tuo paese è lontano." },
    ],
    quiz: [
      { q: "Come si dice 'il mare' in tedesco?", options: ["der See", "das Meer", "der Fluss", "die Welle"], correct: 1 },
      { q: "Come si declina 'mein' con un sostantivo femminile al nominativo?", options: ["mein", "meinen", "meine", "meiner"], correct: 2 },
      { q: "Cosa significa 'fremd'?", options: ["amico", "vicino", "straniero", "libero"], correct: 2 },
    ],
  },
  {
    id: "mann-gegen-mann", title: "Mann gegen Mann", level: "B1", levelColor: "#ffaa00", year: 2005, theme: "Preposizioni con accusativo e identità",
    vocabulary: [
      { german: "der Mann", ipa: "deːɐ̯ man", italian: "l'uomo", example: "Mann gegen Mann", pos: "sostantivo" },
      { german: "gegen", ipa: "ˈɡeːɡən", italian: "contro", example: "Mann gegen Mann", pos: "preposizione" },
      { german: "der Körper", ipa: "deːɐ̯ ˈkœʁpɐ", italian: "il corpo", example: "mein Körper", pos: "sostantivo" },
      { german: "stolz", ipa: "ʃtɔlts", italian: "orgoglioso/a", example: "Ich bin stolz", pos: "aggettivo" },
      { german: "fühlen", ipa: "ˈfyːlən", italian: "sentire / provare", example: "Ich fühle es", pos: "verbo" },
      { german: "anders", ipa: "ˈandɐs", italian: "diverso / altrimenti", example: "Ich bin anders", pos: "aggettivo/avv." },
    ],
    grammar: { title: "Le preposizioni con l'accusativo: durch, für, gegen, ohne, um", explanation: "In tedesco alcune preposizioni reggono sempre l'accusativo. 'Gegen' (contro) è una di queste. Dopo 'gegen', gli articoli cambiano: der Mann → gegen den Mann (maschile acc.). Il maschile è l'unico che cambia visibilmente: der → den. Femminile e neutro rimangono uguali al nominativo.", example: "Mann gegen Mann\n→ gegen + Akkusativ\n→ der Mann → gegen den Mann\n\nAltre preposizioni con accusativo:\ndurch (attraverso), für (per),\nohne (senza), um (intorno a)" },
    curiosity: { text: "Mann gegen Mann è la dichiarazione queer più esplicita nella discografia di Rammstein. Il testo celebra apertamente l'omosessualità maschile con linguaggio diretto. Flake Lorenz ha dichiarato che la canzone nasce dalla volontà di normalizzare ciò che nella cultura rock era ancora tabù. Il video mostra i sei membri della band nudi, dipinti di oro — una scelta visiva potente e deliberata.", funFact: "La parola 'anders' (diverso) è la radice di 'Anderssein' (l'essere diversi) e 'Andersartigkeit' (alterità) — concetti centrali nel dibattito identitario tedesco. Il tedesco forma nuovi concetti combinando radici esistenti. È una lingua che costruisce il pensiero mentre costruisce le parole." },
    usefulPhrases: [
      { german: "Ich bin stolz auf dich.", ipa: "ɪç bɪn ʃtɔlts aʊ̯f dɪç", italian: "Sono orgoglioso/a di te." },
      { german: "Ich fühle mich gut.", ipa: "ɪç ˈfyːlə mɪç ɡuːt", italian: "Mi sento bene." },
      { german: "Das ist gegen die Regeln.", ipa: "das ɪst ˈɡeːɡən diː ˈʁeːɡəln", italian: "Questo è contro le regole." },
    ],
    quiz: [
      { q: "Cosa significa 'stolz'?", options: ["triste", "orgoglioso", "stanco", "curioso"], correct: 1 },
      { q: "Quale caso regge la preposizione 'gegen'?", options: ["Nominativo", "Dativo", "Genitivo", "Accusativo"], correct: 3 },
      { q: "Come si dice 'il corpo' in tedesco?", options: ["die Seele", "der Kopf", "der Körper", "das Herz"], correct: 2 },
    ],
  },
  {
    id: "keine-lust", title: "Keine Lust", level: "B1", levelColor: "#ffaa00", year: 2004, theme: "Negazione con kein e stati d'animo",
    vocabulary: [
      { german: "die Lust", ipa: "diː lʊst", italian: "la voglia / il desiderio / il piacere", example: "Keine Lust", pos: "sostantivo" },
      { german: "keine", ipa: "ˈkaɪ̯nə", italian: "nessuno/a (negazione di un sostantivo)", example: "Keine Lust", pos: "articolo negativo" },
      { german: "müde", ipa: "ˈmyːdə", italian: "stanco/a", example: "Ich bin so müde", pos: "aggettivo" },
      { german: "fett", ipa: "fɛt", italian: "grasso/a (colloquiale: pigro, appesantito)", example: "Ich bin so fett", pos: "aggettivo" },
      { german: "langweilig", ipa: "ˈlaŋvaɪ̯lɪç", italian: "noioso/a", example: "Das ist langweilig", pos: "aggettivo" },
      { german: "aufstehen", ipa: "ˈaʊ̯fʃteːən", italian: "alzarsi", example: "Ich will nicht aufstehen", pos: "verbo separabile" },
    ],
    grammar: { title: "La negazione con 'kein': negare i sostantivi", explanation: "In tedesco esistono due tipi di negazione: 'nicht' (non) nega verbi, aggettivi e avverbi; 'kein' (nessuno/a) nega i sostantivi. 'Kein' si declina come l'articolo indeterminativo 'ein': kein Mann, keine Frau, kein Kind. 'Keine Lust' usa 'keine' perché 'Lust' è femminile. È una delle distinzioni più importanti per chi impara il tedesco.", example: "Keine Lust! (femm. → keine)\nKein Problem! (neutro → kein)\nKein Mann! (masch. → kein)\n\nnicht → nega verbi/aggettivi:\nIch schlafe nicht. (Non dormo.)\nkein → nega sostantivi:\nIch habe keine Lust. (Non ho voglia.)" },
    curiosity: { text: "Keine Lust è la canzone più autoironica dei Rammstein — un inno alla pigrizia assoluta. Il testo è una lista di cose che il cantante non ha voglia di fare, incluso alzarsi dal letto. Il video è famoso perché i membri della band indossano tute imbottite per sembrare enormemente sovrappeso. È una parodia dei video metal muscolosi — ironia rara per una band nota per l'estetica industriale.", funFact: "La parola 'Lust' è un falso amico con l'inglese 'lust' (che ha connotazione sessuale). In tedesco 'Lust' significa semplicemente voglia, piacere, desiderio — 'Ich habe Lust auf Pizza' vuol dire 'ho voglia di pizza'. La parola esiste anche in italiano come prestito: 'lustro', 'illustre' vengono dalla stessa radice latina, ma il tedesco l'ha conservata con significato più diretto." },
    usefulPhrases: [
      { german: "Ich habe keine Lust.", ipa: "ɪç ˈhaːbə ˈkaɪ̯nə lʊst", italian: "Non ho voglia." },
      { german: "Kein Problem!", ipa: "kaɪ̯n pʁoˈbleːm", italian: "Nessun problema!" },
      { german: "Ich bin so müde.", ipa: "ɪç bɪn zoː ˈmyːdə", italian: "Sono così stanco/a." },
    ],
    quiz: [
      { q: "Quando si usa 'kein' invece di 'nicht'?", options: ["Per negare i verbi", "Per negare i sostantivi", "Solo al plurale", "Solo con aggettivi"], correct: 1 },
      { q: "Come si dice 'nessun problema' in tedesco?", options: ["Nicht Problem", "Kein Problem", "Keine Problem", "Keinen Problem"], correct: 1 },
      { q: "Cosa significa 'müde'?", options: ["felice", "arrabbiato", "stanco", "annoiato"], correct: 2 },
    ],
  },
  {
    id: "rosenrot", title: "Rosenrot", level: "B2", levelColor: "#ff4444", year: 2005, theme: "Verbi modali e Satzklammer",
    vocabulary: [
      { german: "die Rose", ipa: "diː ˈʁoːzə", italian: "la rosa", example: "Rosenrot", pos: "sostantivo" },
      { german: "rot", ipa: "ʁoːt", italian: "rosso/a", example: "Rosenrot", pos: "aggettivo" },
      { german: "tief", ipa: "tiːf", italian: "profondo/a", example: "so tief im Wald", pos: "aggettivo/avv." },
      { german: "der Wald", ipa: "deːɐ̯ valt", italian: "la foresta / il bosco", example: "tief im Wald", pos: "sostantivo" },
      { german: "holen", ipa: "ˈhoːlən", italian: "andare a prendere", example: "hol mir die Rose", pos: "verbo" },
      { german: "wollen", ipa: "ˈvɔlən", italian: "volere", example: "Sie will es", pos: "verbo modale" },
    ],
    grammar: { title: "I verbi modali e la Satzklammer (cornice della frase)", explanation: "Il tedesco costruisce le frasi con i verbi modali usando la 'Satzklammer' (cornice): il verbo modale coniugato va in seconda posizione, l'infinito va in FONDO alla frase. Nelle subordinate, il verbo coniugato va sempre in ultima posizione — una regola che vale per tutti i verbi.", example: "Sie will die Rose haben.\n→ will (modale, pos. 2) ... haben (infinito, in fondo)\n\nSubordinata:\nHol mir die Rose, weil ich sie will.\n→ nelle subordinate il verbo va SEMPRE in fondo!" },
    curiosity: { text: "Rosenrot riprende la fiaba dei Fratelli Grimm 'Biancaneve e Rosarossa', riscrivendola come storia oscura di desiderio fatale. Una ragazza chiede a un uomo di scalare una montagna per raccoglierle una rosa rossa — lui muore nel tentativo. Rammstein ha aggiunto la dimensione tragica e quasi sadica assente nell'originale. Il video è ambientato in un villaggio medievale e ricorda un'inquisizione.", funFact: "Il tedesco distingue 'rot' (rosso) da 'Röte' (rossore) e 'rötlich' (rossastro). Gli aggettivi di colore si declinano: eine rote Rose (femm.), ein roter Mantel (masch.), ein rotes Kleid (neutro). Il colore cambia forma grammaticale a seconda di cosa descrive — sfidante per i principianti, ma perfettamente logica nel sistema tedesco." },
    usefulPhrases: [
      { german: "Ich will das verstehen.", ipa: "ɪç vɪl das fɛɐ̯ˈʃteːən", italian: "Voglio capire questo." },
      { german: "Sie kann gut singen.", ipa: "ziː kan ɡuːt ˈzɪŋən", italian: "Sa cantare bene." },
      { german: "Wir müssen jetzt gehen.", ipa: "viːɐ̯ ˈmʏsən jɛtst ˈɡeːən", italian: "Dobbiamo andare adesso." },
    ],
    quiz: [
      { q: "Cosa significa 'tief'?", options: ["alto", "lontano", "profondo", "piccolo"], correct: 2 },
      { q: "Dove va l'infinito con un verbo modale?", options: ["In seconda posizione", "Prima del soggetto", "In fondo alla frase", "Dopo il soggetto"], correct: 2 },
      { q: "Come si dice 'la foresta'?", options: ["der Berg", "der Wald", "das Meer", "die Wiese"], correct: 1 },
    ],
  },
  {
    id: "sehnsucht", title: "Sehnsucht", level: "B2", levelColor: "#ff4444", year: 1997, theme: "Parole intraducibili e subordinate finali",
    vocabulary: [
      { german: "die Sehnsucht", ipa: "diː ˈzeːnzʊxt", italian: "nostalgia / desiderio intenso (intraducibile)", example: "Sehnsucht", pos: "sostantivo" },
      { german: "sich sehnen", ipa: "zɪç ˈzeːnən", italian: "anelare / bramare", example: "Ich sehne mich", pos: "verbo riflessivo" },
      { german: "die Sucht", ipa: "diː zʊxt", italian: "dipendenza / ossessione", example: "(radice di Sehnsucht)", pos: "sostantivo" },
      { german: "brennen", ipa: "ˈbʁɛnən", italian: "bruciare", example: "Es brennt", pos: "verbo" },
      { german: "weit", ipa: "vaɪ̯t", italian: "lontano / ampio", example: "so weit", pos: "aggettivo/avv." },
      { german: "der Traum", ipa: "deːɐ̯ tʁaʊ̯m", italian: "il sogno", example: "mein Traum", pos: "sostantivo" },
    ],
    grammar: { title: "Le subordinate finali: 'damit' e 'um...zu'", explanation: "In tedesco ci sono due modi per esprimere lo scopo: 'um...zu + infinito' (stesso soggetto) e 'damit + subordinata' (soggetti diversi). La 'Sehnsucht grammaticale' del tedesco è questa: ogni subordinata spinge il verbo in fondo, creando attesa. 'Damit' introduce una frase completa; 'um...zu' introduce un infinito.", example: "Ich lerne Deutsch, um Rammstein zu verstehen.\n(per capire — stesso soggetto → um...zu)\n\nIch lerne Deutsch, damit du stolz bist.\n(affinché tu sia fiero — soggetti diversi → damit)\n\n→ In entrambi i casi il verbo va in fondo!" },
    curiosity: { text: "'Sehnsucht' è probabilmente la parola tedesca più citata al mondo da filosofi, poeti e psicologi. Letteralmente composta da 'sehnen' (anelare) + 'Sucht' (dipendenza), descrive il desiderio malinconico di qualcosa irraggiungibile: un luogo, una persona, un tempo perduto. C.S. Lewis la usò come chiave per descrivere il desiderio spirituale nel suo 'Sorpreso dalla gioia'.", funFact: "Il tedesco eccelle nel nominare stati emotivi intraducibili: 'Fernweh' (desiderio di lontananza), 'Weltschmerz' (dolore del mondo), 'Schadenfreude' (gioia per il male altrui), 'Torschlusspanik' (panico per le opportunità che stanno chiudendosi). Ogni parola è una finestra su una cultura." },
    usefulPhrases: [
      { german: "Ich habe Sehnsucht nach dir.", ipa: "ɪç ˈhaːbə ˈzeːnzʊxt nax diːɐ̯", italian: "Ti desidero intensamente / mi manchi." },
      { german: "Ich lerne, um besser zu werden.", ipa: "ɪç ˈlɛʁnə ʊm ˈbɛsɐ tsuː ˈveːɐ̯dən", italian: "Studio per migliorare." },
      { german: "Das ist weit weg.", ipa: "das ɪst vaɪ̯t vɛk", italian: "È lontano." },
    ],
    quiz: [
      { q: "Da quali due parole è composta 'Sehnsucht'?", options: ["sehen + suchen", "sehnen + Sucht", "Seele + Nacht", "sehen + Nacht"], correct: 1 },
      { q: "Quando si usa 'um...zu' invece di 'damit'?", options: ["Quando i soggetti sono diversi", "Quando il soggetto è lo stesso", "Solo con i verbi modali", "Solo al passato"], correct: 1 },
      { q: "Cosa significa 'brennen'?", options: ["congelare", "bruciare", "brillare", "rompere"], correct: 1 },
    ],
  },
  {
    id: "deutschland", title: "Deutschland", level: "B2", levelColor: "#ff4444", year: 2019, theme: "Lessico storico-politico e Verbzweitstellung",
    vocabulary: [
      { german: "übermächtig", ipa: "ˌyːbɐˈmɛçtɪç", italian: "onnipotente / strapotente", example: "übermächtig", pos: "aggettivo" },
      { german: "lieben", ipa: "ˈliːbən", italian: "amare", example: "ich liebe dich", pos: "verbo" },
      { german: "hassen", ipa: "ˈhasən", italian: "odiare", example: "ich hasse dich", pos: "verbo" },
      { german: "das Herz", ipa: "das hɛʁts", italian: "il cuore", example: "mein Herz", pos: "sostantivo" },
      { german: "verlieren", ipa: "fɛɐ̯ˈliːʁən", italian: "perdere", example: "alles verloren", pos: "verbo" },
      { german: "das Vaterland", ipa: "das ˈfaːtɐlant", italian: "la patria (lett. terra del padre)", example: "mein Vaterland", pos: "sostantivo" },
    ],
    grammar: { title: "La Verbzweitstellung: il verbo sempre in seconda posizione", explanation: "In tedesco il verbo coniugato occupa sempre la seconda posizione nella frase principale — questa regola si chiama Verbzweitstellung. Non importa cosa viene prima (soggetto, avverbio, complemento): il verbo è ancorato alla posizione 2. Rammstein usa strutture parallele perfette per dimostrarlo.", example: "Ich liebe dich. (SVO standard)\nDich liebe ich. (OVS — enfasi sull'oggetto)\nHeute liebe ich dich. (Avv-V-S-O — enfasi sul tempo)\n\n→ Il verbo è SEMPRE in posizione 2!" },
    curiosity: { text: "Deutschland è stata accompagnata da un video potente e controverso: i membri della band interpretano figure storiche tedesche attraverso i secoli, inclusa una scena in un campo di concentramento nazista. La canzone è un ajuste de cuentas con l'identità nazionale — né celebrazione né condanna, ma uno sguardo diretto su una storia complessa. Ha aperto un enorme dibattito in Germania nel 2019.", funFact: "'Vaterland' (patria, letteralmente 'terra del padre') e 'Muttersprache' (lingua madre, 'lingua della madre') mostrano come il tedesco usi il genere per costruire metafore culturali. La patria è maschile, la lingua è femminile. In italiano è l'opposto. La grammatica porta con sé visioni del mondo." },
    usefulPhrases: [
      { german: "Ich liebe dich.", ipa: "ɪç ˈliːbə dɪç", italian: "Ti amo." },
      { german: "Heute bin ich müde.", ipa: "ˈhɔʏ̯tə bɪn ɪç ˈmyːdə", italian: "Oggi sono stanco/a." },
      { german: "Das Herz schlägt schnell.", ipa: "das hɛʁts ʃlɛːkt ʃnɛl", italian: "Il cuore batte veloce." },
    ],
    quiz: [
      { q: "Cosa significa 'übermächtig'?", options: ["debole", "onnipotente", "silenzioso", "antico"], correct: 1 },
      { q: "Cosa significa 'verlieren'?", options: ["trovare", "vincere", "perdere", "cercare"], correct: 2 },
      { q: "Qual è la posizione del verbo nelle frasi principali tedesche?", options: ["Prima posizione", "Seconda posizione", "Ultima posizione", "Varia liberamente"], correct: 1 },
    ],
  },
];

const LEVEL_ORDER = ["A1", "B1", "B2"];
const levelLabel = { A1: "Anfänger · Principiante", B1: "Mittelstufe · Intermedio", B2: "Oberstufe · Avanzato" };
const TABS = ["vocab", "grammar", "curiosity", "phrases"];
const TAB_LABELS = { vocab: "📖 Vocab", grammar: "🧠 Grammatica", curiosity: "💡 Curiosità", phrases: "💬 Frasi utili" };

export default function App() {
  const [screen, setScreen] = useState("home");
  const [selectedSong, setSelectedSong] = useState(null);
  const [activeTab, setActiveTab] = useState("vocab");
  const [quizState, setQuizState] = useState({ current: 0, answers: [], done: false });
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showIpa, setShowIpa] = useState({});

  const grouped = LEVEL_ORDER.reduce((acc, lvl) => { acc[lvl] = SONGS.filter(s => s.level === lvl); return acc; }, {});

  function openSong(song) { setSelectedSong(song); setActiveTab("vocab"); setShowIpa({}); setScreen("song"); }
  function goQuiz() { setQuizState({ current: 0, answers: [], done: false }); setSelectedAnswer(null); setScreen("quiz"); }
  function toggleIpa(idx) { setShowIpa(prev => ({ ...prev, [idx]: !prev[idx] })); }

  function handleAnswer(idx) {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(idx);
    setTimeout(() => {
      const correct = idx === selectedSong.quiz[quizState.current].correct;
      const newAnswers = [...quizState.answers, correct];
      const nextQ = quizState.current + 1;
      if (nextQ >= selectedSong.quiz.length) { setQuizState({ current: nextQ, answers: newAnswers, done: true }); }
      else { setQuizState({ current: nextQ, answers: newAnswers, done: false }); setSelectedAnswer(null); }
    }, 900);
  }

  const score = quizState.answers.filter(Boolean).length;

  return (
    <div style={S.root}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:ital,wght@0,300;0,400;0,600;1,300&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        ::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:#0a0a0a}::-webkit-scrollbar-thumb{background:#333;border-radius:2px}
        @keyframes flicker{0%,100%{opacity:1}92%{opacity:.97}94%{opacity:.85}96%{opacity:.97}}
        @keyframes slideUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        @keyframes pulse{0%,100%{box-shadow:0 0 0 0 rgba(255,68,68,.4)}50%{box-shadow:0 0 0 8px rgba(255,68,68,0)}}
        .hc{transition:transform .2s,border-color .2s;cursor:pointer}.hc:hover{transform:translateY(-3px);border-color:#2a2a2a!important}
        .tb{transition:all .2s;cursor:pointer}
        .ob{transition:all .18s;cursor:pointer}.ob:hover{filter:brightness(1.15)}
        .fb{transition:transform .15s;cursor:pointer}.fb:hover{transform:scale(1.03)}
        .bb{transition:opacity .2s;cursor:pointer;background:none;border:none}.bb:hover{opacity:.7}
        .ib{transition:all .15s;cursor:pointer}.ib:hover{background:#1e1e1e!important}
      `}</style>

      {screen === "home" && (
        <div style={S.page}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span style={{ fontSize: 36, animation: "flicker 3s infinite", display: "block", marginBottom: 12 }}>🔥</span>
            <h1 style={S.title}>DEUTSCH<br />MIT RAMMSTEIN</h1>
            <p style={{ fontStyle: "italic", fontWeight: 300, fontSize: 14, color: "#666", marginTop: 10, letterSpacing: .5 }}>Impara il tedesco con la potenza del Neue Deutsche Härte</p>
            <div style={{ width: 60, height: 2, background: "linear-gradient(90deg,transparent,#ff4444,transparent)", margin: "20px auto 0" }} />
          </div>

          {LEVEL_ORDER.map(lvl => (
            <div key={lvl} style={{ marginBottom: 36 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <span style={{ ...S.badge, borderColor: grouped[lvl][0].levelColor, color: grouped[lvl][0].levelColor }}>{lvl}</span>
                <span style={{ fontSize: 12, color: "#555", letterSpacing: 1, textTransform: "uppercase" }}>{levelLabel[lvl]}</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {grouped[lvl].map(song => (
                  <div key={song.id} className="hc" style={{ background: "#0e0e0e", border: "1px solid #1a1a1a", borderRadius: 4, padding: "16px 14px", position: "relative", overflow: "hidden" }} onClick={() => openSong(song)}>
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: song.levelColor }} />
                    <div style={{ fontSize: 11, color: "#444", letterSpacing: 1, marginBottom: 6 }}>{song.year}</div>
                    <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 22, letterSpacing: 2, color: "#fff", marginBottom: 4, lineHeight: 1.1 }}>{song.title}</div>
                    <div style={{ fontSize: 11, color: "#555", lineHeight: 1.4 }}>{song.theme}</div>
                    <div style={{ fontSize: 14, color: "#333", marginTop: 8 }}>→</div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div style={{ textAlign: "center", marginTop: 48, paddingTop: 24, borderTop: "1px solid #161616" }}>
            <span style={{ fontSize: 11, color: "#333", fontStyle: "italic" }}>Kein Gott, kein Herr — solo buona grammatica</span>
          </div>
        </div>
      )}

      {screen === "song" && selectedSong && (
        <div style={S.page}>
          <div style={{ animation: "slideUp .35s ease" }}>
            <button className="bb" style={{ color: "#555", fontSize: 13, letterSpacing: .5, padding: 0 }} onClick={() => setScreen("home")}>← Indietro</button>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 16, flexWrap: "wrap" }}>
              <span style={{ ...S.badge, borderColor: selectedSong.levelColor, color: selectedSong.levelColor, fontSize: 13 }}>{selectedSong.level}</span>
              <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 38, letterSpacing: 3, color: "#fff" }}>{selectedSong.title.toUpperCase()}</h2>
            </div>
            <p style={{ fontSize: 13, color: "#555", fontStyle: "italic", marginTop: 4, marginBottom: 24 }}>{selectedSong.theme} · {selectedSong.year}</p>

            <div style={{ display: "flex", gap: 0, marginBottom: 24, borderBottom: "1px solid #1a1a1a", overflowX: "auto" }}>
              {TABS.map(t => (
                <button key={t} className="tb" style={{ background: "none", border: "none", borderBottom: activeTab === t ? "2px solid #ff4444" : "2px solid transparent", color: activeTab === t ? "#e8e8e8" : "#555", fontFamily: "'Barlow',sans-serif", fontWeight: 600, fontSize: 12, letterSpacing: .3, padding: "10px 11px", whiteSpace: "nowrap" }} onClick={() => setActiveTab(t)}>{TAB_LABELS[t]}</button>
              ))}
            </div>

            {activeTab === "vocab" && (
              <div style={{ marginBottom: 24 }}>
                {selectedSong.vocabulary.map((v, i) => (
                  <div key={i} style={{ background: "#0d0d0d", border: "1px solid #1a1a1a", borderRadius: 4, padding: "14px 16px", marginBottom: 8 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4 }}>
                      <span style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 22, letterSpacing: 2, color: "#fff" }}>{v.german}</span>
                      <div style={{ display: "flex", gap: 6, alignItems: "center", flexShrink: 0 }}>
                        <button className="ib" style={{ background: "#141414", border: "1px solid #252525", borderRadius: 2, color: showIpa[i] ? "#ffaa00" : "#444", fontSize: 10, padding: "2px 7px", fontFamily: "'Barlow',sans-serif", letterSpacing: .5 }} onClick={() => toggleIpa(i)}>IPA</button>
                        <span style={{ fontSize: 10, color: "#444", textTransform: "uppercase", letterSpacing: 1, background: "#151515", padding: "2px 8px", borderRadius: 2 }}>{v.pos}</span>
                      </div>
                    </div>
                    {showIpa[i] && <div style={{ fontSize: 12, color: "#ffaa00", fontStyle: "italic", marginBottom: 4 }}>/{v.ipa}/</div>}
                    <div style={{ fontSize: 14, color: "#aaa", marginBottom: 4 }}>{v.italian}</div>
                    <div style={{ fontSize: 12, color: "#555", fontStyle: "italic" }}>"{v.example}"</div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "grammar" && (
              <div style={{ marginBottom: 24 }}>
                <div style={S.card}>
                  <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 19, letterSpacing: 2, color: "#fff", marginBottom: 12, lineHeight: 1.2 }}>{selectedSong.grammar.title}</div>
                  <p style={{ fontSize: 14, color: "#999", lineHeight: 1.7, fontWeight: 300, marginBottom: 16 }}>{selectedSong.grammar.explanation}</p>
                  <div style={{ background: "#080808", border: "1px solid #222", borderLeft: "3px solid #ff4444", borderRadius: 2, padding: "14px 16px" }}>
                    <div style={{ fontSize: 10, color: "#ff4444", letterSpacing: 2, marginBottom: 8, fontWeight: 600 }}>ESEMPIO DAL TESTO</div>
                    <pre style={{ fontSize: 13, color: "#ccc", fontFamily: "monospace", lineHeight: 1.8, whiteSpace: "pre-wrap" }}>{selectedSong.grammar.example}</pre>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "curiosity" && (
              <div style={{ marginBottom: 24 }}>
                <div style={S.card}>
                  <div style={{ fontSize: 10, color: "#ffaa00", letterSpacing: 2, marginBottom: 12, fontWeight: 600 }}>🎸 STORIA E CONTESTO</div>
                  <p style={{ fontSize: 14, color: "#aaa", lineHeight: 1.8, fontWeight: 300 }}>{selectedSong.curiosity.text}</p>
                </div>
                <div style={{ ...S.card, borderColor: "#1a1a2a" }}>
                  <div style={{ fontSize: 10, color: "#7799ff", letterSpacing: 2, marginBottom: 12, fontWeight: 600 }}>🔤 LO SAPEVI?</div>
                  <p style={{ fontSize: 14, color: "#aaa", lineHeight: 1.8, fontWeight: 300 }}>{selectedSong.curiosity.funFact}</p>
                </div>
              </div>
            )}

            {activeTab === "phrases" && (
              <div style={{ marginBottom: 24 }}>
                <p style={{ fontSize: 13, color: "#555", fontStyle: "italic", marginBottom: 16 }}>Frasi quotidiane ispirate dalla grammatica di questa canzone:</p>
                {selectedSong.usefulPhrases.map((p, i) => (
                  <div key={i} style={{ ...S.card, marginBottom: 10 }}>
                    <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 20, letterSpacing: 2, color: "#fff", marginBottom: 4 }}>{p.german}</div>
                    <div style={{ fontSize: 12, color: "#ffaa00", fontStyle: "italic", marginBottom: 6 }}>/{p.ipa}/</div>
                    <div style={{ fontSize: 14, color: "#777" }}>{p.italian}</div>
                  </div>
                ))}
              </div>
            )}

            <button className="fb" style={{ width: "100%", background: "#ff4444", border: "none", color: "#000", fontFamily: "'Bebas Neue',sans-serif", fontSize: 18, letterSpacing: 4, padding: 16, borderRadius: 3, marginTop: 8 }} onClick={goQuiz}>🎸 Inizia il Quiz</button>
          </div>
        </div>
      )}

      {screen === "quiz" && selectedSong && (
        <div style={S.page}>
          <div style={{ animation: "slideUp .3s ease" }}>
            <button className="bb" style={{ color: "#555", fontSize: 13, letterSpacing: .5, padding: 0 }} onClick={() => setScreen("song")}>← Torna alla canzone</button>
            {!quizState.done ? (
              <div style={{ marginTop: 24 }}>
                <div style={{ marginBottom: 28 }}>
                  <span style={{ fontSize: 12, color: "#555", letterSpacing: 2, display: "block", marginBottom: 10 }}>{quizState.current + 1} / {selectedSong.quiz.length}</span>
                  <div style={{ height: 2, background: "#1a1a1a", borderRadius: 1 }}>
                    <div style={{ height: "100%", background: "#ff4444", borderRadius: 1, width: `${(quizState.current / selectedSong.quiz.length) * 100}%`, transition: "width .3s ease" }} />
                  </div>
                </div>
                <div style={{ fontWeight: 600, fontSize: 20, color: "#fff", lineHeight: 1.4, marginBottom: 28 }}>{selectedSong.quiz[quizState.current].q}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {selectedSong.quiz[quizState.current].options.map((opt, i) => {
                    const isCorrect = i === selectedSong.quiz[quizState.current].correct;
                    const isSelected = selectedAnswer === i;
                    let bg = "#111", border = "#333";
                    if (selectedAnswer !== null) { if (isCorrect) { bg = "#0a2a0a"; border = "#00ff88"; } else if (isSelected) { bg = "#2a0a0a"; border = "#ff4444"; } }
                    return (
                      <button key={i} className="ob" style={{ display: "flex", alignItems: "center", gap: 14, background: bg, border: `1px solid ${border}`, borderRadius: 3, padding: "14px 16px", color: "#ccc", fontSize: 15, fontFamily: "'Barlow',sans-serif", textAlign: "left" }} onClick={() => handleAnswer(i)}>
                        <span style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 16, letterSpacing: 1, color: "#444", minWidth: 16 }}>{String.fromCharCode(65 + i)}</span>{opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div style={{ textAlign: "center", paddingTop: 60 }}>
                <div style={{ fontSize: 64, marginBottom: 20 }}>{score === selectedSong.quiz.length ? "🔥" : score > 1 ? "⚡" : "💀"}</div>
                <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 80, letterSpacing: 6, color: "#fff", lineHeight: 1, marginBottom: 12 }}>{score}/{selectedSong.quiz.length}</div>
                <div style={{ fontSize: 16, color: "#777", fontStyle: "italic", marginBottom: 40 }}>
                  {score === selectedSong.quiz.length ? "Perfekt! Sei pronta per il Wacken!" : score > 1 ? "Gut! Continua a studiare, Soldatin." : "Riascolta la canzone e riprova."}
                </div>
                <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
                  <button className="fb" style={{ background: "none", border: "1px solid #ff4444", color: "#ff4444", fontFamily: "'Bebas Neue',sans-serif", fontSize: 16, letterSpacing: 3, padding: "12px 24px", borderRadius: 3 }} onClick={goQuiz}>Riprova</button>
                  <button className="fb" style={{ background: "#ff4444", border: "none", color: "#000", fontFamily: "'Bebas Neue',sans-serif", fontSize: 16, letterSpacing: 3, padding: "12px 24px", borderRadius: 3 }} onClick={() => setScreen("home")}>Altre canzoni</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

const S = {
  root: { background: "#080808", minHeight: "100vh", fontFamily: "'Barlow',sans-serif", color: "#e8e8e8" },
  page: { maxWidth: 560, margin: "0 auto", padding: "32px 20px 60px" },
  title: { fontFamily: "'Bebas Neue',sans-serif", fontSize: 52, letterSpacing: 6, lineHeight: 1.05, color: "#fff", textShadow: "0 0 40px rgba(255,68,68,.3)" },
  badge: { fontFamily: "'Bebas Neue',sans-serif", fontSize: 15, letterSpacing: 3, border: "1px solid", padding: "3px 10px", borderRadius: 2 },
  card: { background: "#0d0d0d", border: "1px solid #1a1a1a", borderRadius: 4, padding: 18, marginBottom: 12 },
};
