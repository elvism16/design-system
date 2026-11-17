# DTCG Design Token Set

## Architektur

- Format: DTCG Design Tokens Format Module 2025.10.
- Jede Theme-Datei ist ein eigenständiges DTCG-JSON-Dokument mit den Gruppen `primitive`, `semantic` und `component`.
- Primitive sind in Light und Dark identisch und absichtlich in beiden Dateien enthalten, damit jede Datei für sich auflösbar ist und die beiden Dateien als Theme-Modi importiert werden können.
- Semantische Tokens aliasieren Primitive; Component-Tokens gibt es für den CTA-Button (`component.button`) und den Banner (`component.banner`). Zustände bleiben semantisch wiederverwendbar.
- Transparenzen liegen als `primitive.color.alpha.{dark,light}-{10,70}` vor (Basis: neutral.950 bzw. neutral.0). Darauf bauen `semantic.color.content.inverse-secondary` und `semantic.color.action.ghost` / `ghost-inverse` auf; im Dark-Theme sind dunkle und helle Alphas jeweils vertauscht.
- Benennung: kleingeschriebenes kebab-case; standardisierte DTCG-Felder und Typnamen behalten ihre vorgeschriebene Schreibweise.

## Brand-Farben

| Familie | Token | Hex | Herkunft |
|---|---:|---:|---|
| neutral | 0 | #FFFFFF | ergänzt für Theme- und Statusrollen |
| neutral | 50 | #F1F3F4 | vorgegeben |
| neutral | 100 | #E5E8E9 | vorgegeben |
| neutral | 300 | #BFC4CC | ergänzt für Theme- und Statusrollen |
| neutral | 500 | #7D828A | vorgegeben |
| neutral | 600 | #5D6570 | ergänzt für Theme- und Statusrollen |
| neutral | 700 | #434A55 | vorgegeben |
| neutral | 800 | #2B323E | vorgegeben |
| neutral | 900 | #101C28 | ergänzt für Theme- und Statusrollen |
| neutral | 925 | #081624 | ergänzt für Theme- und Statusrollen |
| neutral | 950 | #011224 | vorgegeben |
| blue | 50 | #E8EEFF | ergänzt für Theme- und Statusrollen |
| blue | 100 | #CCDDFF | vorgegeben |
| blue | 300 | #A3C2FF | vorgegeben |
| blue | 600 | #4D62CB | vorgegeben |
| blue | 800 | #223077 | vorgegeben |
| blue | 950 | #161F4B | vorgegeben |
| blue | 1000 | #09172A | ergänzt für Theme- und Statusrollen |
| red | 50 | #FFF0F3 | ergänzt für Theme- und Statusrollen |
| red | 100 | #FCE7ED | ergänzt für Theme- und Statusrollen |
| red | 400 | #F8678B | vorgegeben |
| red | 500 | #F54B75 | vorgegeben |
| red | 700 | #C6224B | vorgegeben |
| red | 900 | #A61C3F | vorgegeben |
| red | 950 | #751F38 | vorgegeben |
| red | 1000 | #3A1624 | ergänzt für Theme- und Statusrollen |
| green | 50 | #E7F5EC | ergänzt für Theme- und Statusrollen |
| green | 100 | #D1EFDD | ergänzt für Theme- und Statusrollen |
| green | 300 | #6DD6A0 | ergänzt für Theme- und Statusrollen |
| green | 500 | #31A36D | ergänzt für Theme- und Statusrollen |
| green | 900 | #176B45 | ergänzt für Theme- und Statusrollen |
| green | 1000 | #102A20 | ergänzt für Theme- und Statusrollen |
| amber | 50 | #FFF4D6 | ergänzt für Theme- und Statusrollen |
| amber | 300 | #FFD166 | ergänzt für Theme- und Statusrollen |
| amber | 800 | #694600 | ergänzt für Theme- und Statusrollen |
| amber | 1000 | #352A14 | ergänzt für Theme- und Statusrollen |

## WCAG 2.2 AA — Kontrastprüfung

Geprüft wurden definierte Text-/Hintergrund-, Status-, CTA-, Border- und Focus-Ring-Paare. Schwellenwerte: normaler Text 4.5:1, UI-Grenzen/Fokusanzeigen 3:1. Disabled-Zustände sind nicht als Kontrastpass/fail eingeordnet. Ein Token-Set allein belegt keine vollständige WCAG-Konformität einer fertigen Oberfläche.
- Prüfumfang: Light 93 Paare, Dark 93 Paare; unter den geprüften Paaren jeweils 0 Kontrastunterschreitungen.

| Theme | Geprüftes Paar | Vordergrund | Hintergrund | Kontrast | Ziel | Ergebnis |
|---|---|---:|---:|---:|---:|---|
| light | content.primary on canvas | #011224 | #F1F3F4 | 16.95:1 | 4.5:1 | Pass |
| light | content.primary on default | #011224 | #FFFFFF | 18.86:1 | 4.5:1 | Pass |
| light | content.primary on raised | #011224 | #FFFFFF | 18.86:1 | 4.5:1 | Pass |
| light | content.primary on subtle | #011224 | #E5E8E9 | 15.32:1 | 4.5:1 | Pass |
| light | content.secondary on canvas | #434A55 | #F1F3F4 | 8.03:1 | 4.5:1 | Pass |
| light | content.secondary on default | #434A55 | #FFFFFF | 8.94:1 | 4.5:1 | Pass |
| light | content.secondary on raised | #434A55 | #FFFFFF | 8.94:1 | 4.5:1 | Pass |
| light | content.secondary on subtle | #434A55 | #E5E8E9 | 7.26:1 | 4.5:1 | Pass |
| light | content.muted on canvas | #5D6570 | #F1F3F4 | 5.30:1 | 4.5:1 | Pass |
| light | content.muted on default | #5D6570 | #FFFFFF | 5.90:1 | 4.5:1 | Pass |
| light | content.muted on raised | #5D6570 | #FFFFFF | 5.90:1 | 4.5:1 | Pass |
| light | content.muted on subtle | #5D6570 | #E5E8E9 | 4.79:1 | 4.5:1 | Pass |
| light | content.placeholder on canvas | #5D6570 | #F1F3F4 | 5.30:1 | 4.5:1 | Pass |
| light | content.placeholder on default | #5D6570 | #FFFFFF | 5.90:1 | 4.5:1 | Pass |
| light | content.placeholder on raised | #5D6570 | #FFFFFF | 5.90:1 | 4.5:1 | Pass |
| light | content.placeholder on subtle | #5D6570 | #E5E8E9 | 4.79:1 | 4.5:1 | Pass |
| light | content.link on canvas | #223077 | #F1F3F4 | 10.74:1 | 4.5:1 | Pass |
| light | content.link on default | #223077 | #FFFFFF | 11.95:1 | 4.5:1 | Pass |
| light | content.link on raised | #223077 | #FFFFFF | 11.95:1 | 4.5:1 | Pass |
| light | content.link on subtle | #223077 | #E5E8E9 | 9.70:1 | 4.5:1 | Pass |
| light | content.link-hover on canvas | #161F4B | #F1F3F4 | 14.17:1 | 4.5:1 | Pass |
| light | content.link-hover on default | #161F4B | #FFFFFF | 15.77:1 | 4.5:1 | Pass |
| light | content.link-hover on raised | #161F4B | #FFFFFF | 15.77:1 | 4.5:1 | Pass |
| light | content.link-hover on subtle | #161F4B | #E5E8E9 | 12.80:1 | 4.5:1 | Pass |
| light | content.on-brand | #FFFFFF | #011224 | 18.86:1 | 4.5:1 | Pass |
| light | content.inverse on surface.inverse | #FFFFFF | #011224 | 18.86:1 | 4.5:1 | Pass |
| light | icon.primary on canvas | #011224 | #F1F3F4 | 16.95:1 | 3.0:1 | Pass |
| light | icon.primary on default | #011224 | #FFFFFF | 18.86:1 | 3.0:1 | Pass |
| light | icon.primary on raised | #011224 | #FFFFFF | 18.86:1 | 3.0:1 | Pass |
| light | icon.primary on subtle | #011224 | #E5E8E9 | 15.32:1 | 3.0:1 | Pass |
| light | icon.secondary on canvas | #434A55 | #F1F3F4 | 8.03:1 | 3.0:1 | Pass |
| light | icon.secondary on default | #434A55 | #FFFFFF | 8.94:1 | 3.0:1 | Pass |
| light | icon.secondary on raised | #434A55 | #FFFFFF | 8.94:1 | 3.0:1 | Pass |
| light | icon.secondary on subtle | #434A55 | #E5E8E9 | 7.26:1 | 3.0:1 | Pass |
| light | icon.muted on canvas | #5D6570 | #F1F3F4 | 5.30:1 | 3.0:1 | Pass |
| light | icon.muted on default | #5D6570 | #FFFFFF | 5.90:1 | 3.0:1 | Pass |
| light | icon.muted on raised | #5D6570 | #FFFFFF | 5.90:1 | 3.0:1 | Pass |
| light | icon.muted on subtle | #5D6570 | #E5E8E9 | 4.79:1 | 3.0:1 | Pass |
| light | status.error.content | #A61C3F | #FFF0F3 | 6.65:1 | 4.5:1 | Pass |
| light | status.error.icon | #A61C3F | #FFF0F3 | 6.65:1 | 3.0:1 | Pass |
| light | status.error.border | #A61C3F | #FFF0F3 | 6.65:1 | 3.0:1 | Pass |
| light | status.success.content | #176B45 | #E7F5EC | 5.79:1 | 4.5:1 | Pass |
| light | status.success.icon | #176B45 | #E7F5EC | 5.79:1 | 3.0:1 | Pass |
| light | status.success.border | #176B45 | #E7F5EC | 5.79:1 | 3.0:1 | Pass |
| light | status.warning.content | #694600 | #FFF4D6 | 7.74:1 | 4.5:1 | Pass |
| light | status.warning.icon | #694600 | #FFF4D6 | 7.74:1 | 3.0:1 | Pass |
| light | status.warning.border | #694600 | #FFF4D6 | 7.74:1 | 3.0:1 | Pass |
| light | status.information.content | #223077 | #E8EEFF | 10.30:1 | 4.5:1 | Pass |
| light | status.information.icon | #223077 | #E8EEFF | 10.30:1 | 3.0:1 | Pass |
| light | status.information.border | #223077 | #E8EEFF | 10.30:1 | 3.0:1 | Pass |
| light | action.primary.background.content | #FFFFFF | #C6224B | 5.63:1 | 4.5:1 | Pass |
| light | action.primary.background boundary on canvas | #C6224B | #F1F3F4 | 5.06:1 | 3.0:1 | Pass |
| light | action.primary.background boundary on default | #C6224B | #FFFFFF | 5.63:1 | 3.0:1 | Pass |
| light | action.primary.background boundary on raised | #C6224B | #FFFFFF | 5.63:1 | 3.0:1 | Pass |
| light | action.primary.background boundary on subtle | #C6224B | #E5E8E9 | 4.57:1 | 3.0:1 | Pass |
| light | action.primary.hover-background.content | #FFFFFF | #A61C3F | 7.34:1 | 4.5:1 | Pass |
| light | action.primary.hover-background boundary on canvas | #A61C3F | #F1F3F4 | 6.60:1 | 3.0:1 | Pass |
| light | action.primary.hover-background boundary on default | #A61C3F | #FFFFFF | 7.34:1 | 3.0:1 | Pass |
| light | action.primary.hover-background boundary on raised | #A61C3F | #FFFFFF | 7.34:1 | 3.0:1 | Pass |
| light | action.primary.hover-background boundary on subtle | #A61C3F | #E5E8E9 | 5.96:1 | 3.0:1 | Pass |
| light | action.primary.pressed-background.content | #FFFFFF | #751F38 | 10.45:1 | 4.5:1 | Pass |
| light | action.primary.pressed-background boundary on canvas | #751F38 | #F1F3F4 | 9.39:1 | 3.0:1 | Pass |
| light | action.primary.pressed-background boundary on default | #751F38 | #FFFFFF | 10.45:1 | 3.0:1 | Pass |
| light | action.primary.pressed-background boundary on raised | #751F38 | #FFFFFF | 10.45:1 | 3.0:1 | Pass |
| light | action.primary.pressed-background boundary on subtle | #751F38 | #E5E8E9 | 8.49:1 | 3.0:1 | Pass |
| light | action.primary.outline.hover.content | #A61C3F | #FFF0F3 | 6.65:1 | 4.5:1 | Pass |
| light | action.primary.outline.content on canvas | #C6224B | #F1F3F4 | 5.06:1 | 4.5:1 | Pass |
| light | border.default on canvas | #7D828A | #F1F3F4 | 3.47:1 | 3.0:1 | Pass |
| light | border.strong on canvas | #434A55 | #F1F3F4 | 8.03:1 | 3.0:1 | Pass |
| light | border.brand on canvas | #223077 | #F1F3F4 | 10.74:1 | 3.0:1 | Pass |
| light | action.primary.outline.border on canvas | #C6224B | #F1F3F4 | 5.06:1 | 3.0:1 | Pass |
| light | action.primary.outline.content on canvas | #C6224B | #F1F3F4 | 5.06:1 | 4.5:1 | Pass |
| light | focus.outer on canvas | #223077 | #F1F3F4 | 10.74:1 | 3.0:1 | Pass |
| light | border.default on default | #7D828A | #FFFFFF | 3.87:1 | 3.0:1 | Pass |
| light | border.strong on default | #434A55 | #FFFFFF | 8.94:1 | 3.0:1 | Pass |
| light | border.brand on default | #223077 | #FFFFFF | 11.95:1 | 3.0:1 | Pass |
| light | action.primary.outline.border on default | #C6224B | #FFFFFF | 5.63:1 | 3.0:1 | Pass |
| light | action.primary.outline.content on default | #C6224B | #FFFFFF | 5.63:1 | 4.5:1 | Pass |
| light | focus.outer on default | #223077 | #FFFFFF | 11.95:1 | 3.0:1 | Pass |
| light | border.default on raised | #7D828A | #FFFFFF | 3.87:1 | 3.0:1 | Pass |
| light | border.strong on raised | #434A55 | #FFFFFF | 8.94:1 | 3.0:1 | Pass |
| light | border.brand on raised | #223077 | #FFFFFF | 11.95:1 | 3.0:1 | Pass |
| light | action.primary.outline.border on raised | #C6224B | #FFFFFF | 5.63:1 | 3.0:1 | Pass |
| light | action.primary.outline.content on raised | #C6224B | #FFFFFF | 5.63:1 | 4.5:1 | Pass |
| light | focus.outer on raised | #223077 | #FFFFFF | 11.95:1 | 3.0:1 | Pass |
| light | border.default on subtle | #7D828A | #E5E8E9 | 3.14:1 | 3.0:1 | Pass |
| light | border.strong on subtle | #434A55 | #E5E8E9 | 7.26:1 | 3.0:1 | Pass |
| light | border.brand on subtle | #223077 | #E5E8E9 | 9.70:1 | 3.0:1 | Pass |
| light | action.primary.outline.border on subtle | #C6224B | #E5E8E9 | 4.57:1 | 3.0:1 | Pass |
| light | action.primary.outline.content on subtle | #C6224B | #E5E8E9 | 4.57:1 | 4.5:1 | Pass |
| light | focus.outer on subtle | #223077 | #E5E8E9 | 9.70:1 | 3.0:1 | Pass |
| light | focus.inner on CTA | #FFFFFF | #C6224B | 5.63:1 | 3.0:1 | Pass |
| light | focus.outer vs inner | #223077 | #FFFFFF | 11.95:1 | 3.0:1 | Pass |
| dark | content.primary on canvas | #F1F3F4 | #011224 | 16.95:1 | 4.5:1 | Pass |
| dark | content.primary on default | #F1F3F4 | #081624 | 16.40:1 | 4.5:1 | Pass |
| dark | content.primary on raised | #F1F3F4 | #101C28 | 15.48:1 | 4.5:1 | Pass |
| dark | content.primary on subtle | #F1F3F4 | #011224 | 16.95:1 | 4.5:1 | Pass |
| dark | content.secondary on canvas | #E5E8E9 | #011224 | 15.32:1 | 4.5:1 | Pass |
| dark | content.secondary on default | #E5E8E9 | #081624 | 14.82:1 | 4.5:1 | Pass |
| dark | content.secondary on raised | #E5E8E9 | #101C28 | 13.99:1 | 4.5:1 | Pass |
| dark | content.secondary on subtle | #E5E8E9 | #011224 | 15.32:1 | 4.5:1 | Pass |
| dark | content.muted on canvas | #BFC4CC | #011224 | 10.76:1 | 4.5:1 | Pass |
| dark | content.muted on default | #BFC4CC | #081624 | 10.42:1 | 4.5:1 | Pass |
| dark | content.muted on raised | #BFC4CC | #101C28 | 9.83:1 | 4.5:1 | Pass |
| dark | content.muted on subtle | #BFC4CC | #011224 | 10.76:1 | 4.5:1 | Pass |
| dark | content.placeholder on canvas | #BFC4CC | #011224 | 10.76:1 | 4.5:1 | Pass |
| dark | content.placeholder on default | #BFC4CC | #081624 | 10.42:1 | 4.5:1 | Pass |
| dark | content.placeholder on raised | #BFC4CC | #101C28 | 9.83:1 | 4.5:1 | Pass |
| dark | content.placeholder on subtle | #BFC4CC | #011224 | 10.76:1 | 4.5:1 | Pass |
| dark | content.link on canvas | #A3C2FF | #011224 | 10.53:1 | 4.5:1 | Pass |
| dark | content.link on default | #A3C2FF | #081624 | 10.18:1 | 4.5:1 | Pass |
| dark | content.link on raised | #A3C2FF | #101C28 | 9.61:1 | 4.5:1 | Pass |
| dark | content.link on subtle | #A3C2FF | #011224 | 10.53:1 | 4.5:1 | Pass |
| dark | content.link-hover on canvas | #CCDDFF | #011224 | 13.79:1 | 4.5:1 | Pass |
| dark | content.link-hover on default | #CCDDFF | #081624 | 13.34:1 | 4.5:1 | Pass |
| dark | content.link-hover on raised | #CCDDFF | #101C28 | 12.60:1 | 4.5:1 | Pass |
| dark | content.link-hover on subtle | #CCDDFF | #011224 | 13.79:1 | 4.5:1 | Pass |
| dark | content.on-brand | #FFFFFF | #011224 | 18.86:1 | 4.5:1 | Pass |
| dark | content.inverse on surface.inverse | #011224 | #FFFFFF | 18.86:1 | 4.5:1 | Pass |
| dark | icon.primary on canvas | #F1F3F4 | #011224 | 16.95:1 | 3.0:1 | Pass |
| dark | icon.primary on default | #F1F3F4 | #081624 | 16.40:1 | 3.0:1 | Pass |
| dark | icon.primary on raised | #F1F3F4 | #101C28 | 15.48:1 | 3.0:1 | Pass |
| dark | icon.primary on subtle | #F1F3F4 | #011224 | 16.95:1 | 3.0:1 | Pass |
| dark | icon.secondary on canvas | #E5E8E9 | #011224 | 15.32:1 | 3.0:1 | Pass |
| dark | icon.secondary on default | #E5E8E9 | #081624 | 14.82:1 | 3.0:1 | Pass |
| dark | icon.secondary on raised | #E5E8E9 | #101C28 | 13.99:1 | 3.0:1 | Pass |
| dark | icon.secondary on subtle | #E5E8E9 | #011224 | 15.32:1 | 3.0:1 | Pass |
| dark | icon.muted on canvas | #BFC4CC | #011224 | 10.76:1 | 3.0:1 | Pass |
| dark | icon.muted on default | #BFC4CC | #081624 | 10.42:1 | 3.0:1 | Pass |
| dark | icon.muted on raised | #BFC4CC | #101C28 | 9.83:1 | 3.0:1 | Pass |
| dark | icon.muted on subtle | #BFC4CC | #011224 | 10.76:1 | 3.0:1 | Pass |
| dark | status.error.content | #F8678B | #3A1624 | 5.53:1 | 4.5:1 | Pass |
| dark | status.error.icon | #F8678B | #3A1624 | 5.53:1 | 3.0:1 | Pass |
| dark | status.error.border | #F8678B | #3A1624 | 5.53:1 | 3.0:1 | Pass |
| dark | status.success.content | #6DD6A0 | #102A20 | 8.57:1 | 4.5:1 | Pass |
| dark | status.success.icon | #6DD6A0 | #102A20 | 8.57:1 | 3.0:1 | Pass |
| dark | status.success.border | #6DD6A0 | #102A20 | 8.57:1 | 3.0:1 | Pass |
| dark | status.warning.content | #FFD166 | #352A14 | 9.76:1 | 4.5:1 | Pass |
| dark | status.warning.icon | #FFD166 | #352A14 | 9.76:1 | 3.0:1 | Pass |
| dark | status.warning.border | #FFD166 | #352A14 | 9.76:1 | 3.0:1 | Pass |
| dark | status.information.content | #A3C2FF | #09172A | 10.04:1 | 4.5:1 | Pass |
| dark | status.information.icon | #A3C2FF | #09172A | 10.04:1 | 3.0:1 | Pass |
| dark | status.information.border | #A3C2FF | #09172A | 10.04:1 | 3.0:1 | Pass |
| dark | action.primary.background.content | #FFFFFF | #C6224B | 5.63:1 | 4.5:1 | Pass |
| dark | action.primary.background boundary on canvas | #C6224B | #011224 | 3.35:1 | 3.0:1 | Pass |
| dark | action.primary.background boundary on default | #C6224B | #081624 | 3.24:1 | 3.0:1 | Pass |
| dark | action.primary.background boundary on raised | #C6224B | #101C28 | 3.06:1 | 3.0:1 | Pass |
| dark | action.primary.background boundary on subtle | #C6224B | #011224 | 3.35:1 | 3.0:1 | Pass |
| dark | action.primary.hover-background.content | #011224 | #F54B75 | 5.52:1 | 4.5:1 | Pass |
| dark | action.primary.hover-background boundary on canvas | #F54B75 | #011224 | 5.52:1 | 3.0:1 | Pass |
| dark | action.primary.hover-background boundary on default | #F54B75 | #081624 | 5.34:1 | 3.0:1 | Pass |
| dark | action.primary.hover-background boundary on raised | #F54B75 | #101C28 | 5.04:1 | 3.0:1 | Pass |
| dark | action.primary.hover-background boundary on subtle | #F54B75 | #011224 | 5.52:1 | 3.0:1 | Pass |
| dark | action.primary.pressed-background.content | #011224 | #F8678B | 6.56:1 | 4.5:1 | Pass |
| dark | action.primary.pressed-background boundary on canvas | #F8678B | #011224 | 6.56:1 | 3.0:1 | Pass |
| dark | action.primary.pressed-background boundary on default | #F8678B | #081624 | 6.35:1 | 3.0:1 | Pass |
| dark | action.primary.pressed-background boundary on raised | #F8678B | #101C28 | 5.99:1 | 3.0:1 | Pass |
| dark | action.primary.pressed-background boundary on subtle | #F8678B | #011224 | 6.56:1 | 3.0:1 | Pass |
| dark | action.primary.outline.hover.content | #F8678B | #3A1624 | 5.53:1 | 4.5:1 | Pass |
| dark | action.primary.outline.content on canvas | #F8678B | #011224 | 6.56:1 | 4.5:1 | Pass |
| dark | border.default on canvas | #7D828A | #011224 | 4.88:1 | 3.0:1 | Pass |
| dark | border.strong on canvas | #E5E8E9 | #011224 | 15.32:1 | 3.0:1 | Pass |
| dark | border.brand on canvas | #A3C2FF | #011224 | 10.53:1 | 3.0:1 | Pass |
| dark | action.primary.outline.border on canvas | #C6224B | #011224 | 3.35:1 | 3.0:1 | Pass |
| dark | action.primary.outline.content on canvas | #F8678B | #011224 | 6.56:1 | 4.5:1 | Pass |
| dark | focus.outer on canvas | #7D828A | #011224 | 4.88:1 | 3.0:1 | Pass |
| dark | border.default on default | #7D828A | #081624 | 4.72:1 | 3.0:1 | Pass |
| dark | border.strong on default | #E5E8E9 | #081624 | 14.82:1 | 3.0:1 | Pass |
| dark | border.brand on default | #A3C2FF | #081624 | 10.18:1 | 3.0:1 | Pass |
| dark | action.primary.outline.border on default | #C6224B | #081624 | 3.24:1 | 3.0:1 | Pass |
| dark | action.primary.outline.content on default | #F8678B | #081624 | 6.35:1 | 4.5:1 | Pass |
| dark | focus.outer on default | #7D828A | #081624 | 4.72:1 | 3.0:1 | Pass |
| dark | border.default on raised | #7D828A | #101C28 | 4.46:1 | 3.0:1 | Pass |
| dark | border.strong on raised | #E5E8E9 | #101C28 | 13.99:1 | 3.0:1 | Pass |
| dark | border.brand on raised | #A3C2FF | #101C28 | 9.61:1 | 3.0:1 | Pass |
| dark | action.primary.outline.border on raised | #C6224B | #101C28 | 3.06:1 | 3.0:1 | Pass |
| dark | action.primary.outline.content on raised | #F8678B | #101C28 | 5.99:1 | 4.5:1 | Pass |
| dark | focus.outer on raised | #7D828A | #101C28 | 4.46:1 | 3.0:1 | Pass |
| dark | border.default on subtle | #7D828A | #011224 | 4.88:1 | 3.0:1 | Pass |
| dark | border.strong on subtle | #E5E8E9 | #011224 | 15.32:1 | 3.0:1 | Pass |
| dark | border.brand on subtle | #A3C2FF | #011224 | 10.53:1 | 3.0:1 | Pass |
| dark | action.primary.outline.border on subtle | #C6224B | #011224 | 3.35:1 | 3.0:1 | Pass |
| dark | action.primary.outline.content on subtle | #F8678B | #011224 | 6.56:1 | 4.5:1 | Pass |
| dark | focus.outer on subtle | #7D828A | #011224 | 4.88:1 | 3.0:1 | Pass |
| dark | focus.inner on CTA | #FFFFFF | #C6224B | 5.63:1 | 3.0:1 | Pass |
| dark | focus.outer vs inner | #7D828A | #FFFFFF | 3.87:1 | 3.0:1 | Pass |

## Verwendungshinweise

- Primäre CTA: Füllung und Standardkontur bleiben in beiden Themes exakt `#C6224B`; Hover und Pressed nutzen dunklere Brand-Rotstufen. Der Text ist weiß und erreicht mindestens 4.5:1 auf allen CTA-Füllzuständen.
- Outline-CTA: Die Kontur bleibt `#C6224B`. Im Dark Theme wird die Textfarbe auf `#F8678B` angehoben, damit Textkontrast bestehen bleibt.
- Focus: zweifarbiger Ring. Innerer Ring weiß; äußerer Ring ist im Light Theme Brand-Blau und im Dark Theme neutrales Grau. Beide Farben sind im Token-Set als semantische Focus-Rollen verfügbar.
- Error/Success/Warning/Information erhalten je Content-, Background-, Border- und Icon-Rollen. Farbe darf Status nicht allein codieren; zusätzlich Text/Icon/Shape einsetzen.
- TT Interfaces ist als DTCG `fontFamily`-Token festgelegt. Die Schrift muss in den Zielwerkzeugen/Endgeräten verfügbar bzw. lizenziert sein.

## DTCG- und Designreferenzen

- DTCG Format 2025.10: https://www.designtokens.org/TR/2025.10/format/
- Material Design Tokens: https://m3.material.io/foundations/design-tokens/overview
- Adobe Spectrum Design Tokens: https://spectrum.adobe.com/foundations/design-data/design-tokens
