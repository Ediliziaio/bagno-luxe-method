

# Piano: Layout Articoli con Massima Leggibilità

## Problema Identificato

Le classi Tailwind `prose-p:leading-loose` hanno valore `2.0` ma visivamente non è abbastanza. Serve un intervento più drastico sia nell'ArticleDetailPage che nel CSS globale.

## Modifiche Previste

### 1. ArticleDetailPage.tsx - Nuove classi prose

**Cambiamenti chiave:**

| Elemento | Attuale | Nuovo | Effetto |
|----------|---------|-------|---------|
| H2 font-size | `text-2xl` | `text-3xl` | Titoli più grandi |
| H2 margine sopra | `mt-16` | `mt-20` | Più separazione capitoli |
| H2 margine sotto | `mb-8` | `mb-10` | Più respiro dopo titolo |
| H3 font-size | `text-xl` | `text-2xl` | Sotto-titoli più grandi |
| Paragrafi margine | `mb-7` | `mb-8` | Più spazio tra paragrafi |

### 2. CSS Globale in index.css - Stili più forti

Aggiunta di stili CSS custom che forzano la spaziatura indipendentemente dalle classi Tailwind:

```css
/* ARTICLE LAYOUT - Massima leggibilità */
.prose p {
  line-height: 2.1 !important;
  margin-bottom: 2rem !important;
}

.prose h2 {
  font-size: 1.875rem !important; /* text-3xl */
  margin-top: 4rem !important;
  margin-bottom: 2rem !important;
  padding-top: 2rem !important;
  border-top: 1px solid hsl(var(--border) / 0.3);
}

.prose h3 {
  font-size: 1.5rem !important;
  margin-top: 3rem !important;
  margin-bottom: 1.5rem !important;
}

.prose ul, .prose ol {
  margin-top: 2rem !important;
  margin-bottom: 2rem !important;
}

.prose li {
  margin-top: 0.75rem !important;
  margin-bottom: 0.75rem !important;
  line-height: 2 !important;
}
```

### 3. Separatori Visivi tra Capitoli

Ogni H2 avrà una sottile linea separatrice sopra per distinguere visivamente i capitoli:

```text
────────────────────────────────────

  Perché Milano ha esigenze specifiche

  Testo del paragrafo con interlinea
  generosa e spazio tra le righe...

  Altro paragrafo ben separato dal
  precedente.

────────────────────────────────────

  La giungla delle normative
```

## File da Modificare

| File | Modifica |
|------|----------|
| `src/pages/ArticleDetailPage.tsx` | Nuove classi prose per H2/H3/P più grandi |
| `src/index.css` | Stili CSS forti che forzano spaziatura |

## Risultato Atteso

- **Interlinea**: da 2.0 a 2.1 (righe più distanti)
- **Paragrafi**: margine inferiore da 1.75rem a 2rem (+14%)
- **H2**: margine superiore da 4rem a 5rem, con linea separatrice
- **H3**: margine superiore da 3rem a 4rem
- **Titoli**: font-size aumentato di un livello
- **Liste**: più spazio tra le voci

## Stima

~40 righe di modifiche tra ArticleDetailPage.tsx e index.css

