import React, { useState } from "react";
import Button from "../projekat/components/Button";
import Proizvodi from "../projekat/components/Proizvodi";

//DB
import { proizvodiDB } from "./db/proizvodiDB";
import { valuteDB } from "./db/valuteDB";

//Kontekst
import { ValuteKontekst } from "./context/valute-kontekst";

document.body.style.backgroundColor = "#282c34";
document.body.style.color = "#eee";

export default function Store() {
    const [valuta, setValuta] = useState(valuteDB.Dinar);

    return (
        <ValuteKontekst.Provider value={valuta}>
            <div className="App-header">
                <header className="text-center">
                    <h1 className="title">Rasprodaja</h1>
                    <h2 className="subtitle">Pozuri i kupi na vreme!</h2>

                    <p>
                        Velika rasprodaja pena za brijanje! Iskoristite
                        neverovatne ponude i uživajte u bliskim i udobnim
                        brijanjima po povoljnim cenama! 🎉
                    </p>
                </header>
                <Proizvodi list={proizvodiDB} />

                <h4>Promeni valutu:</h4>

                {Object.values(valuteDB).map((val) => (
                    <Button
                        key={val.label}
                        text={val.code}
                        onClick={() => setValuta(val)}
                    />
                ))}
            </div>
        </ValuteKontekst.Provider>
    );
}
