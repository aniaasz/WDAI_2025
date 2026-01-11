import {ChangeEvent, useState} from "react";

function Formularz() {

    const [text, setText] = useState<string>('');

    return(
        <>
            <h1>Formularz</h1>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
            <div>{text}</div>
        </>
    );
}

export default Formularz;