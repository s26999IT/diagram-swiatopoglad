# Sondaż światopoglądowy

Interaktywny diagram światopoglądowy: kolejne pytania prowadzą od istnienia Boga do sensu życia, poznania Boga i zbawienia. Na końcu ścieżki jest nazwa światopoglądu, opis i pytania do rozmowy. Osobny widok **Karty** pozwala czytać wszystkie zakończenia bez przechodzenia diagramu.

Strona jest po polsku i nie wymaga budowania. Działa jako zwykłe pliki HTML albo jako wtyczka do WordPressa.

## Uruchomienie lokalne

W katalogu projektu:

```bash
python3 -m http.server 8080
```

Potem otwórz [http://127.0.0.1:8080](http://127.0.0.1:8080).

## Wtyczka WordPress

Wtyczka jest w `wordpress/sondaz-swiatopoglad/`. Po włączeniu publikuje stronę ze shortcode `[sondaz]` i wstawia ankietę w treść, zostawiając nagłówek i stopkę motywu.

Spakuj ją przed wgraniem:

```bash
cd wordpress
zip -r sondaz-swiatopoglad.zip sondaz-swiatopoglad
```

W panelu WordPressa: **Wtyczki → Dodaj nową → Wyślij wtyczkę na serwer**, wskaż zip, zainstaluj i włącz. Nie edytuj tej strony w Elementorze. Treść ma zostać `[sondaz]`. Szablon strony to pełna szerokość Elementora, żeby zostały nagłówek i stopka witryny.

Przy kolejnej wersji usuń starą wtyczkę i wgraj nowy zip. Usunięcie wtyczki nie kasuje strony. Jeśli po wgraniu widać starą wersję, wyczyść cache hostingu albo otwórz stronę pod nowym adresem. Zapamiętany adres potrafi jeszcze przez jakiś czas serwować poprzednie pliki CSS.

Pliki ankiety w katalogu głównym i w katalogu wtyczki są osobnymi kopiami. Zmiana pytań albo wyglądu trzeba nanieść w obu miejscach: `app.js`, `data.js` i `styles.css` oraz w `wordpress/sondaz-swiatopoglad/`.

## Skąd są pytania

Pytania, opisy światopoglądów i rozgałęzienia pochodzą z diagramu Camerona Blaira, © 2010 FEVA Ministries Inc. Pytania do rozmowy są zapisane głosem autora diagramu.

Sondaż przygotował Kościół EXE we współpracy z [ChSA](https://chsa.org.pl/).
