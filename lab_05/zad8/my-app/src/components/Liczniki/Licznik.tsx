import Przycisk from "./Przycisk";
import {useEffect, useState} from "react";

function Licznik(){
    const [licznik,setCnt] = useState<number>(() => {
        const savedValue = localStorage.getItem("licznik");
        return savedValue !== null ? parseInt(savedValue) : 0;
    });

    useEffect(() => {
        localStorage.setItem("licznik", licznik.toString());
    }, [licznik]);

    return(
        <div className="Licznik">
            <h1>NowyLicznik</h1>
            <div id="licznik">{licznik}</div>
            <Przycisk onClick={ () => setCnt((prev:number)=> prev +1)} text={"Dodaj"} />
            <Przycisk onClick={ () => setCnt((prev:number)=> prev -1)} text={"Odejmij"} />
        </div>
    );
}

export default Licznik;