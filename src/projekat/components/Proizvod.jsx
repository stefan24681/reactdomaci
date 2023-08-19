import React, { Component } from "react";
import Button from "./Button";

export default function Proizvod({ proizvod }) {
    const { title, img } = proizvod;

    return (
        <li class={`card text-center`} style={{ width: 250 }}>
            <div className="card-header">{title}</div>
            <img src={img} alt="proizvod slika" style={{ height: "100%" }} />
            <p className="card-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, repudiandae. Ut praesentium non suscipit sint iure.
                Laudantium dolor aliquam ab doloribus hic neque consequatur
                porro velit architecto, quaerat impedit soluta.
            </p>
            <div className="card-footer d-flex space-between">
                <h4>Cena</h4>
                <Button btnClass={"btn-success"} text="Kupi!" />
            </div>
        </li>
    );
}
