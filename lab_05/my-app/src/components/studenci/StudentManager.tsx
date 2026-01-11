import {ChangeEvent, useState} from "react";
import Dodawanie from "./Dodawanie";

interface Student {
    imie: string;
    nazwisko: string;
    rocznik: number;
}



function StudentManager(){
    const [Students,setStudents] = useState<Student[]> ([{imie:"Asia",nazwisko:"Nowak",rocznik:1967},
        {imie:"Kasia",nazwisko:"Kowalska",rocznik:1968},
        {imie:"Basia",nazwisko:"Król",rocznik:1968}])

    const dodajStudenta = (student: Student) => {
        setStudents((prev) => [...prev, student]);
    };

    return (
        <>
            <table className="Table">
                <thead className="Table">
                <th className="Table">Imie</th>
                <th className="Table">Nazwisko</th>
                <th className="Table">Rocznik</th>
                </thead>
                <tbody>

                {Students.map((Students: Student) =>(
                    <tr className="Table">
                        <td className="Table">{Students.imie}</td>
                        <td className="Table">{Students.nazwisko}</td>
                        <td className="Table">{Students.rocznik}</td>
                    </tr>
                ))}

                </tbody>
            </table>


            <Dodawanie dodanyStudent={dodajStudenta} />

        </>
    );
}
export default StudentManager;