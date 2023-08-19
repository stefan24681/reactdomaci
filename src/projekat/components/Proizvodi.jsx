import React, { Component } from "react";
import Proizvod from "./Proizvod";

export default function Proizvodi({ list }) {
    return (
        <ul className="d-flex" style={{ flexWrap: "wrap", gap: 30 }}>
            {" "}
            Proizvodi
            {list.map((item) => (
                <Proizvod key={item.id} proizvod={item} />
            ))}
        </ul>
    );
}
