import React, { Component } from "react";

export default function Button({ text, key, onClick }) {
    return (
        <button className={`btn `} key={key} onClick={onClick}>
            {" "}
            {text}{" "}
        </button>
    );
}
