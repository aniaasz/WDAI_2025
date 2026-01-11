import {ChangeEvent, useState} from "react";

function Haslo() {

    const [passwd, setPasswd] = useState<string>('');
    const [repeated, setRepeated] = useState<string>('');

    return(
        <>
            <h2>Podaj hasło</h2>
            <input id="pass" type="text" value={passwd} onChange={(e) => setPasswd(e.target.value)}/>
            <h2>Powtórz hasło</h2>
            <input id="rep" type="text" value={repeated} onChange={(e) => setRepeated(e.target.value)}/>

            <div>
                { !repeated && !passwd
                    ? "Proszę wprowadzić hasło"
                        : passwd!=repeated
                        ? "Hasła nie są zgodne"
                        :""
                }
            </div>

        </>
    );
}

export default Haslo;