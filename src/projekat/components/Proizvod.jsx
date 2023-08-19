import React, { Component } from "react";
import Button from "./Button";

import { ValuteKontekst } from "../context/valute-kontekst";

export default function Proizvod({ proizvod }) {
    const valuta = React.useContext(ValuteKontekst);

    //ucitavanje kartica
    const { title, img, price, opis } = proizvod;

    const kontekstCena = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: valuta.code,
    }).format(price * valuta.conversionRate);

    return (
        <li class={`card text-center liststyle`} style={{ width: 250 }}>
            <div className="card-header">{title}</div>
            <img src={img} alt="proizvod slika" style={{ height: "120px" }} />
            <p className="card-body">{opis}</p>
            <div className="card-footer d-flex space-between">
                <h4>Cena: {kontekstCena}</h4>
                <Button btnClass={"btn-success"} text="Kupi!" />
            </div>
        </li>
    );
}
