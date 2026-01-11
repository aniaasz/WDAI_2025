import React from 'react';
import './App.css';

// ZAD 1
// 1.1
import Koszyk from "./components/koszyk/Koszyk";
// 1.2
import NowyKoszyk from "./components/koszyk/NowyKoszyk";
// ZAD 2
// 2.1
import Licznik from "./components/liczniki/Licznik";
// 2.2
import NowyLicznik from "./components/liczniki/NowyLicznik";
// ZAD 3
// 3.1
import Formularz from "./components/formularze/Formularz";
// 3.2
import Haslo from "./components/formularze/Haslo";
// 3.3
import Logowanie from "./components/formularze/Logowanie";
// ZAD 4
// 4.1
import Ternary from "./components/inne/Ternary";
// 4.2
import Aktualizacja from "./components/inne/Aktualizacja";
// ZAD 5
// 5.1
import Studenci from "./components/studenci/Studenci";
// 5.2
import StudentManager from "./components/studenci/StudentManager";
// ZAD 6
// 6.1
import LicznikEfekty from "./components/efekty/LicznikEfekty";
// 6.2
import Tytuł from "./components/efekty/Tytuł";
// 6.3
import Odliczanie from "./components/efekty/Odliczanie";
// ZAD 7
// 7.1
import Komentarz from "./components/produkty/Komentarz";
// 7.2
import Komentarze from "./components/produkty/Komentarze";
// ZAD 8
// 8.1
// 8.2




function App() {
  return (
      <div>
          <section id="zad1">
              <Koszyk/>
              <NowyKoszyk/>
          </section>

          <section id="zad2">
              <Licznik/>
              <NowyLicznik/>
          </section>

          <section id="zad3">
              <div id="form"><Formularz/></div>
              <div id="form"><Haslo/></div>
              <div id="form"><Logowanie/></div>
          </section>

          <section id="zad4">
              <div id="form"><Ternary/></div>
              <div id="form"><Aktualizacja/></div>
          </section>

          <section id="zad5">
              <Studenci/>
              <div id="form"><StudentManager/></div>
          </section>

          <section id="zad6">
              <LicznikEfekty/>
              <div id="form"><Tytuł/></div>
              <div id="form"><Odliczanie/></div>
          </section>

          <section id="zad7">
              <Komentarz id={1} body={"Ala ma kota"} postId={1} likes={7} user={{id:1,username:"aaaaaa",fullName:"Basia Basia" } }/>
              <Komentarze />
          </section>

      </div>

  );
}

export default App;
