import Przycisk from "./Przycisk";
import {useState} from "react";

function NowyLicznik(){
    const [licznik,setCnt] = useState(0);
    return(
        <div className="Licznik">
            <h1>NowyLicznik</h1>
            <div id="licznik">{licznik}</div>
            <Przycisk onClick={ () => setCnt((prev:number)=> prev +1)} text={"Dodaj"} />
            <Przycisk onClick={ () => setCnt((prev:number)=> prev -1)} text={"Odejmij"} />
        </div>
    );
}

export default NowyLicznik;