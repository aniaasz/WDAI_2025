import Produkt from "./Produkt";

function Koszyk(){
    return(
        <div className="Koszyk">
            <h1>Koszyk</h1>
            <h1></h1>
            <ul>
                <Produkt nazwa={"Jabłko"}/>
                <Produkt nazwa={"Gruszka"}/>
                <Produkt nazwa={"Pomarańcza"}/>
                <Produkt nazwa={"Banan"}/>
                <Produkt nazwa={"Maliny"}/>
            </ul>
        </div>
    );
}

export default Koszyk;