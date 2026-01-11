import {useState} from "react";



function Aktualizacja(){
    const [product, setProduct] = useState<{ name:string, price:number }>({name: "Pomidor", price: 50,});

    return (
        <>
            <div>
                Produkt: {product.name}
                <br />
                Cena: {product.price}
            </div>
            <button
                onClick={() => {
                    setProduct((prevState: { name:string, price:number }) => ({ ...prevState, price: 100 }));
                }}
            >
                Zmień cenę
            </button>
        </>
    );
}
export default Aktualizacja;