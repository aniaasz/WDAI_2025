import {ChangeEvent, useState} from "react";
interface Student {
    imie: string;
    nazwisko: string;
    rocznik: number;
}

interface DodawanieProps {
    dodanyStudent: (student: Student) => void;
}

function Dodawanie ({dodanyStudent} : DodawanieProps) {

    const [nimie,setImie] = useState<string>("");
    const [nnazwisko,setNazwisko] = useState<string>("");
    const [nrocznik,setRocznik] = useState<string>("1990");


    const Dodaj= ()=>{

        const NowyStudent: Student = {imie:nimie, nazwisko:nnazwisko, rocznik:parseInt(nrocznik)};
        dodanyStudent(NowyStudent);

        setImie("");
        setNazwisko("");
        setRocznik("1990");
    };


    return (
        <div>
                <h1>Imie</h1>
                <input type={"text"} value={nimie} onChange={(x: ChangeEvent<HTMLInputElement>) => setImie(x.target.value)}/>
                <h1>Nazwisko</h1>
                <input type={"text"} value={nnazwisko} onChange={(x: ChangeEvent<HTMLInputElement>) => setNazwisko(x.target.value)}/>
                <h1>Rocznik</h1>
                <input type={"number"} value={nrocznik} onChange={(x: ChangeEvent<HTMLInputElement>) => setRocznik(x.target.value)}/>

                <button
                    disabled={
                        !nimie || !nnazwisko || !nrocznik
                    }
                    onClick={Dodaj}
                >Dodaj</button>
        </div>
    )
}

export default Dodawanie;