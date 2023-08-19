import React from "react";
import Button from "../projekat/components/Button";

document.body.style.backgroundColor = "#282c34";
document.body.style.color = "#eee";

export default function Store() {
    return (
        <div className="App-header">
            <h4>Promeni valutu:</h4>
            <Button></Button>

            <header className="text-center">
                <h1 className="title">Rasprodaja</h1>
                <h2 className="subtitle">Pozuri i kupi na vreme!</h2>

                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Explicabo optio officiis nesciunt eius et quae doloribus
                    mollitia ducimus ipsum laboriosam. Sunt ea quasi sit,
                    aperiam repellat repudiandae libero numquam exercitationem.
                </p>
            </header>
            {/* Proizvodi */}
        </div>
    );
}
