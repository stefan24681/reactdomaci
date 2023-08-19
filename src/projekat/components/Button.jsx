import React, { Component } from "react";
import { Link } from "react-router-dom";
export default function Button({ text, key, onClick }) {
    return (
        <button className={`btn `} key={key} onClick={onClick}>
            {text}
        </button>
    );
}
