import Produkt from "./Produkt";

function NowyKoszyk(){

    const Produkty = ["Bułka","Masło","Jajko","Ser","Pomidor"]

    return(
        <div className="Koszyk">
            <h1>Nowy koszyk</h1>
            <h1></h1>
            <ul>
                {Produkty.map((produkt: string) => (
                    <Produkt nazwa={produkt} />
                ))}
            </ul>

        </div>
    );
}

export default NowyKoszyk;