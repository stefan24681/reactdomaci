import React from "react";

const Footer = () => {
    return (
        <footer>
            <p
                className="text-center"
                style={{
                    padding: ".5rem 7rem",
                    textAlign: "center",
                    fontWeight: 800,
                    backgroundColor: "white",
                    color: "green",
                }}
            >
                Današnji datum: {new Date().toLocaleDateString("en-GB")}
            </p>

            <p
                className="text-center"
                style={{
                    padding: ".5rem 7rem",
                    textAlign: "center",
                    fontWeight: 800,
                    backgroundColor: "white",
                    color: "green",
                }}
            >
                React projekat iz Internet Tehnologija.
            </p>
        </footer>
    );
};

export default Footer;
