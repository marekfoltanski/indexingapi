# Google Indexing API
**Cieszę się, że trafiłeś na to repozytorium. Jeżeli uważasz, że narzędzie jest przydatne to możesz postawić mi kawę na Buy Me A Coffe :)**

<a href="https://www.buymeacoffee.com/marekfoltas" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

Narzędzie pozwala na przesłanie hurtowej ilości adresów do indeksacji za pomocą Indexing API. Jeżeli nie wiesz czym jest Indexing API to więcej informacji znajdziesz [tutaj](https://developers.google.com/search/apis/indexing-api/v3/quickstart).

Dlaczego warto z tego korzystać i dlaczego jest to lepsze niż przesyłanie adresów za pomocą Google Search Console?



* możesz przesłać do 200 adresów dziennie
* możesz przesłać do 100 adresów za jednym zamachem
* adresy przesłane w ten sposób pojawiają się w indeksie znacznie szybciej niż za pomocą konwencjonalnych metod

Tak o tym pisze Google:

> Zalecamy używanie interfejsu Indexing API zamiast map witryny, ponieważ zapewnia to szybsze indeksowanie stron przez Googlebota niż w przypadku zaktualizowania mapy witryny i > zasygnalizowania tego faktu systemom Google.

Korzystam z tego na różnych stronach (nowych, starych) i za każdym razem indeksacja jest błyskawiczna. Z reguły wszystkie adresy (np. 200 nowych podstron) pojawia się w indeksie do 24h po przesłaniu prośby o zaindeksowanie.

![indexing api](https://bootcampy.pl/wp-content/uploads/2022/03/18.png "Wykres z zaindeksowanymi adresami URL")

![indexing api](https://bootcampy.pl/wp-content/uploads/2022/03/19.png "Wykres z zaindeksowanymi adresami URL")

## No dobra, ale jak to odpalić?

### Utwórz konto usługi w Google Cloud Platform

Żeby móc korzystać z interfejsu Indexing API najpierw musisz stworzyć konto usługi w Google Cloud Platform:

* Wejdź na adres [https://console.developers.google.com/iam-admin/serviceaccounts](https://console.developers.google.com/iam-admin/serviceaccounts)

* Kliknij **UTWÓRZ PROJEKT**
  
  ![utwórz projekt](https://bootcampy.pl/wp-content/uploads/2022/03/1.png "Utwórz projekt")
  
* Wpisz nazwę swojego projektu i kliknij **UTWÓRZ**
  
  ![utwórz](https://bootcampy.pl/wp-content/uploads/2022/03/2.png "Utwórz")
  
* Kliknij **UTWÓRZ KONTO USŁUGI**
  
  ![utwórz konto usługi](https://bootcampy.pl/wp-content/uploads/2022/03/3.png "Utwórz konto usługi")

* Wpisz nazwę konta, resztę możesz pominąć

  ![nazwa konta](https://bootcampy.pl/wp-content/uploads/2022/03/4.png "Wpisz nazwę konta")
  
* Zapisz nazwę (E-mail) konta usługi, bo będziesz musiał je dodać do GSC

* Obok swojego konta usługi kliknij trzy kropki i **Zarządzaj kluczami**

  ![zarządzaj kluczami](https://bootcampy.pl/wp-content/uploads/2022/03/5.png "Zarządzaj kluczami")

* Utwórz nowy klucz

  ![utwórz nowy klucz](https://bootcampy.pl/wp-content/uploads/2022/03/6.png "Utwórz nowy klucz")

* Typ klucza JSON

  ![Typ klucza JSON](https://bootcampy.pl/wp-content/uploads/2022/03/7.png "Typ klucza JSON")

* Klucz powinien zapisać się na dysku (plik json)

  ![pobranie klucza na dysk](https://bootcampy.pl/wp-content/uploads/2022/03/8.png "Pobranie klucza na dysk")


Pobrany plik z kluczem zostanie wykorzystany później, jest on niezbędny do poprawnego działania narzędzia.


### Dodaj do projektu interfejs Indexing API

* Przejdź do biblioteki interfejsów API

  ![biblioteka interfejsów API](https://bootcampy.pl/wp-content/uploads/2022/03/9.png "Biblioteka interfejsów API")

* Wpisz w wyszukiwarce “indexing api”
  
  ![wyszukiwarka](https://bootcampy.pl/wp-content/uploads/2022/03/10.png "Wpisz w wyszukiwarce indexing API")
  
* wybierz z listy Indexing API
  
  ![Indexing API](https://bootcampy.pl/wp-content/uploads/2022/03/11.png "Indexing API")
  
* włącz interfejs
  
  ![Włącz interfejs](https://bootcampy.pl/wp-content/uploads/2022/03/12.png "Włącz interfejs")


### Dodaj konto usługi do GSC

Jak masz już utworzone konto usługi to dodaj je jako **właściciela** do Google Search Console:

* zaloguj się do Centrum dla webmasterów - [link](https://www.google.com/webmasters/verification/home)
* wybierz usługę, do której chcesz dodać konto
* dodaj wcześniej utworzone konto usługi

  ![gsc](https://bootcampy.pl/wp-content/uploads/2022/03/13.png "Dodaj konto usługi do GSC")

### Odpal narzędzie

Żeby uruchomić narzędzie będziesz potrzebował zainstalowanego Node.js i npm, możesz to pobrać [tutaj](https://nodejs.org/en/).

Jak masz już to ogarnięte to pobierz repozytorium. W folderze znajduje się plik service_account.json, jest on tylko poglądowy. Usuń go i wrzuć w jego miejsce wcześniej pobrany plik json z kluczem. Zmień nazwę pliku na service_account.json.

Otwórz projekt np. w Visual Studio Code ([link](https://code.visualstudio.com/)) i w terminalu wpisz:
```
npm install
```

![npm install](https://bootcampy.pl/wp-content/uploads/2022/03/16.png "npm install")

Jak instalacja dobiegnie końca wpisz w terminalu:
```
node index.js
```

![npm install](https://bootcampy.pl/wp-content/uploads/2022/03/17.png "npm install")

W ten sposób odpalisz narzędzie, będzie ono dostępne pod adresem [http://localhost:8000/](http://localhost:8000/)

W formularzu wklejasz adresy, które chcesz przesłać do indeksacji.

![formularz](https://bootcampy.pl/wp-content/uploads/2022/03/14.png "Formularz")

Jeżeli wszystko zrobiłeś dobrze to po przesłaniu formularza powinieneś dostać response z kodem 200. Przy większej ilości adresów wygodniej to podejrzeć w konsoli przeglądarki.

![response](https://bootcampy.pl/wp-content/uploads/2022/03/15.png "Response")
