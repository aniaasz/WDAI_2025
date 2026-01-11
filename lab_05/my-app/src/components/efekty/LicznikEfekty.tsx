import {useEffect, useState} from "react";

function LicznikEfekty() {
    const [licznik,setCnt] = useState(0);

    useEffect(() => {
        console.log("Hello World");
    }, []);

    useEffect(() => {
        console.log("Licznik zmienił się na " + licznik);
    }, [licznik]);


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
export default LicznikEfekty;