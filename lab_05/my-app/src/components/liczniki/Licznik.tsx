import {useState} from "react";


function Licznik(){
    const [licznik,setCnt] = useState(0);

    const Dodaj = ()=>{
        setCnt(prev => prev+1);
    };
    const Odejmij = ()=>{
        setCnt(prev => prev-1);
    };

    return(
        <div className="Licznik">
            <h1>Licznik</h1>
            <div id="licznik">{licznik}</div>
            <button onClick={Dodaj}>Dodaj</button>
            <button onClick={Odejmij}>Odejmij</button>
        </div>
    );
}

export default Licznik;