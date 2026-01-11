import {useEffect, useState} from "react";

function Tytuł(){
    const [title,setTitle] = useState<string>('Tytuł');

    useEffect(()=>{
        document.title = title;

    },[title]);

    return (
        <>
            <h1> Tytuł strony: </h1>
            <input type={"text"} value={title} onChange={(e) => setTitle(e.target.value)} />
        </>
    );
}
export default Tytuł;