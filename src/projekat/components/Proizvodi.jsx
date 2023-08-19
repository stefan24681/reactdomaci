import React, { Component } from "react";
import Proizvod from "./Proizvod";

export default function Proizvodi({ list }) {
    return (
        <ul className="d-flex liststyle" style={{ flexWrap: "wrap", gap: 250 }}>
            {list.map((item) => (
                <Proizvod key={item.id} proizvod={item} />
            ))}
        </ul>
    );
}
