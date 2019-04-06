### Tabela Ekstraklasy

Na stronie renderuje się formularz służacy do dodawania meczów piłki nożnej.
W pliku `db/games.json` znajduje się baza danych ligi. Uruchom baze przy pomocu json server `json-server --watch ./db/games.json`

Twoim zadaniem jest pokazanie listy meczów na stronie. Mecze pobierz z bazy danych przy pomocy fetch lub axios.

W następnym kroku uruchom funkcjonalność dodawania meczów. Pamiętaj żeby dodać je również do bazy danych w pliku games.json

#### Dla kozaków
Stwórz na podstawie bazy tabelę punktów w formacie
"Zespół" : "Punktacja"
To zadanie wymaga sprawności w posługiwaniu się metodami tablicowymi – nasza baza danych wymaga odpowiednich przekształceń by wyekstraktować z niej punktację. Warto użyć tutaj biblioteki lodash.
