import {useEffect, useState} from "react";

function Odliczanie(){
    const [licznik,setCnt] = useState<number>(15);
    const [aktywny, setActive] = useState<boolean>(false);

    useEffect(() => {
        let intervalId: number;

        if (aktywny && licznik > 0) {
            intervalId = window.setInterval(() => {
                setCnt((prev: number) => prev - 0.1);
            }, 100);
        }
        return () => {
            if (intervalId) clearInterval(intervalId);
        };
    }, [aktywny,licznik]);

    useEffect(() => {
        if (licznik <= 0) {
            setCnt(0);
            setActive(false);
        }
    }, [licznik]);


    const ustawTekst = () => {
        if (licznik === 0) return "Odliczanie zakończone";
        return aktywny ? "STOP" : "START";
    };

    return (
        <>
            <h1>Odliczanie</h1>
            <div>{licznik.toFixed(1)} sek</div>
            <button disabled={licznik===0} onClick={() => {setActive((prev) => !prev);}}>{ustawTekst()}</button>
        </>
    );
}
export default Odliczanie;