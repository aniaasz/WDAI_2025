import {ChangeEvent, useState} from "react";

function Logowanie() {

    const [passwd, setPasswd] = useState<string>('');
    const [repeated, setRepeated] = useState<string>('');
    const [name, setName] = useState<string>('');

    return(
        <>
            <h2>Podaj nazwę</h2>
            <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <h2>Podaj hasło</h2>
            <input id="pass" type="text" value={passwd} onChange={(e) => setPasswd(e.target.value)}/>
            <h2>Powtórz hasło</h2>
            <input id="rep" type="text" value={repeated} onChange={(e) => setRepeated(e.target.value)}/>

            <button
            disabled={!passwd || !repeated || !name}
            onClick={ () => {
                alert(passwd!=repeated
                    ? "Hasła nie są zgodne"
                    :"Zalogowano poprawnie")
            }}
            >Zaloguj się</button>

        </>
    );
}

export default Logowanie;