import {useState} from "react";

function Ternary(){
    const [a, setA] = useState<boolean>(true);
    const [b, setB] = useState<boolean>(false);

    return (
        <>
            <div>
                Stwierdzenie a {
                    a ? "jest prawdzniwe" : "jest fałszywe"}
            </div>
            <div>
                Stwierdzenie b {
                b ? "jest prawdzniwe" : "jest fałszywe"}
            </div>
        </>
    );
}
export default Ternary;