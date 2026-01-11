interface Student {
    imie: string;
    nazwisko: string;
    rocznik: number;
}
function Studenci(){
    const Students: Student[] = [{imie:"Asia",nazwisko:"Nowak",rocznik:1967},
        {imie:"Kasia",nazwisko:"Kowalska",rocznik:1968},
        {imie:"Basia",nazwisko:"Król",rocznik:1968}]
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
        </>
    );
}
export default Studenci;