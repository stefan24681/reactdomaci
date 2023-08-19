import React, { Component } from "react";
import Button from "./Button";

export default function Proizvod({ proizvod }) {
    const { title, img, price } = proizvod;

    return (
        <li class={`card text-center liststyle`} style={{ width: 250 }}>
            <div className="card-header">{title}</div>
            <img src={img} alt="proizvod slika" style={{ height: "120px" }} />
            <p className="card-body">Lorem ipsum dolor sit amet cons</p>
            <div className="card-footer d-flex space-between">
                <h4>Cena: {price}</h4>
                <Button btnClass={"btn-success"} text="Kupi!" />
            </div>
        </li>
    );
}
