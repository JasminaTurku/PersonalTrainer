# 🔐 Pristupni Kod za Video Treninge

## Trenutni Pristupni Kod

**KOD: PT2026**

## Kako Funkcioniše

Kada korisnici kliknu na "Pogledaj" dugme da vide video za određenu mišićnu grupu, pojaviće se popup koji traži unos pristupnog koda.

- Samo sa validnim kodom mogu pristupiti video treninzima
- Kod nije osetljiv na velika/mala slova (automatski se konvertuje u velika slova)
- Mogu pritisnuti Enter ili kliknuti "Potvrdi" dugme
- Ako unesu pogrešan kod, dobijaju poruku o grešci

## Gde se Menja Kod

Kod se može promeniti u sledećim fajlovima:

1. `src/pages/TreninziZene.tsx` - linija ~20
2. `src/pages/TreninziMuskarci.tsx` - linija ~20
3. `src/pages/Treninzi50Plus.tsx` - linija ~20
4. `src/pages/TreninziTrudnice.tsx` - linija ~20

Tražite liniju:

```typescript
const ACCESS_CODE = "PT2026";
```

## Kako Promeniti Kod

1. Otvorite željeni fajl
2. Pronađite liniju `const ACCESS_CODE = "PT2026";`
3. Promenite "PT2026" u novi kod
4. Sačuvajte fajl
5. Aplikacija će automatski koristiti novi kod

**NAPOMENA:** Ako želite različite kodove za različite programe (žene, muškarci, 50+, trudnice), možete podesiti drugačiji kod u svakom fajlu pojedinačno.

## Primeri Kodova

- `PT2026` - trenutni kod
- `ELITE2026` - primer za elite klijente
- `VIP123` - primer za VIP članove
- `NOVO2026` - primer za nove klijente
- `GRUDI01` - primer specifičan za određenu mišićnu grupu

## Bezbednost

⚠️ **Važno:**

- Ne delite ovaj kod javno
- Dajte ga samo svojim klijentima
- Možete kreirati različite kodove za različite grupe klijenata
- Redovno menjajte kod (npr. mesečno) za dodatnu bezbednost
