# 🔥 Deutsch mit Rammstein

> Impara il tedesco con la potenza del Neue Deutsche Härte.

Un'app web didattica interattiva per imparare il tedesco attraverso i testi dei Rammstein. 9 brani organizzati per livello CEFR (A1 → B2), con vocabolario, grammatica contestuale, pronuncia IPA, curiosità culturali, frasi utili e quiz interattivi. Integrazione con l'API di Anthropic per approfondimenti grammaticali generati in tempo reale.

---

## ✨ Funzionalità

- **9 canzoni** organizzate per livello CEFR: A1, B1, B2
- **Vocabolario** — parole chiave con traduzione italiana e trascrizione IPA on demand
- **Grammatica contestuale** — ogni canzone illustra una struttura grammaticale specifica
- **🔥 Approfondisci con AI** — spiegazioni extra generate in tempo reale via Anthropic API
- **Curiosità** — storia del brano e curiosità linguistiche
- **Frasi utili** — espressioni quotidiane ispirate dalla grammatica della canzone
- **Quiz interattivo** — 3 domande per canzone con feedback visivo immediato

---

## 🎵 Canzoni incluse

| Livello | Canzone | Focus grammaticale |
|---------|---------|-------------------|
| A1 | Du Hast | Presente indicativo e omofonia |
| A1 | Sonne | Imperativo |
| B1 | Engel | Perfekt |
| B1 | Mutter | Verbi riflessivi |
| B1 | Mein Land | Aggettivi possessivi |
| B1 | Mann gegen Mann | Preposizioni con accusativo |
| B2 | Rosenrot | Verbi modali e Satzklammer |
| B2 | Sehnsucht | Subordinate finali (damit / um...zu) |
| B2 | Deutschland | Verbzweitstellung |

---

## 🚀 Come avviarlo in locale

```bash
# Clona il repository
git clone https://github.com/TUO-USERNAME/deutsch-mit-rammstein.git
cd deutsch-mit-rammstein

# Installa le dipendenze
npm install

# Avvia in modalità development
npm run dev
```

L'app sarà disponibile su `http://localhost:5173`.

> **Nota:** il bottone "Approfondisci con AI" richiede che il browser abbia accesso all'API Anthropic. Funziona nativamente se deployato su Claude.ai o con le credenziali configurate correttamente.

---

## 🌐 Deploy su Vercel

1. Fai il fork o clona questo repository su GitHub
2. Vai su [vercel.com](https://vercel.com) e accedi con GitHub
3. Clicca **Add New Project** → seleziona questo repository
4. Vercel rileva Vite automaticamente → clicca **Deploy**
5. Il tuo sito sarà live in pochi minuti 🎉

---

## 🛠 Stack tecnico

- **React 18** con hooks (useState)
- **Vite** come bundler
- **Anthropic API** (`claude-sonnet-4-20250514`) per le spiegazioni AI
- CSS-in-JS inline + Google Fonts (Bebas Neue, Barlow)

---

## ⚠️ Disclaimer

Fan project — educational purpose only. Not affiliated with Rammstein or their label.  
I testi citati nell'app sono frasi singole usate come esempi grammaticali a scopo didattico.

---

## 👩‍💻 Autrice

Creato da **Barbara Di Fede** — Senior QA Specialist con focus su AI Testing.  
[LinkedIn](https://linkedin.com/in/TUO-PROFILO) · [GitHub](https://github.com/TUO-USERNAME)

---

*Kein Gott, kein Herr — solo buona grammatica.* 🤘
