import React, { useState } from "react";

function Vise() {
    const minPasswordLength = 8;

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [toggleClass, setToggleClass] = useState(false);
    const [isPasswordShown, setPasswordShown] = useState(false);

    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const validateEmail = (email) =>
        String(email)
            .toLowerCase()
            .trim() // ignorisi prazna polja koja korisnik unese
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );

    const annoyingSubmitButton = () => {
        if (
            form.password.length < minPasswordLength ||
            !validateEmail(form.email)
        ) {
            setToggleClass((prevState) => !prevState);

            setTimeout(() => {}, 1000);
        }
    };

    return (
        <section>
            <div className="text-center">
                <span className="title text-center">
                    Prijavi se pre poručivanja🎉
                </span>
            </div>
            <br></br>
            <br></br>

            <form
                autoComplete="false"
                action="http://localhost:3000/"
                method="GET"
                onChange={handleForm} //pozivanje provere podataka pri svakoj izmeni
                className="text-center"
            >
                <div className="input-block">
                    <label htmlFor="email" className={`label`}>
                        <b>E-mail adresa:</b>
                    </label>
                    <br></br>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        defaultValue={form.email}
                        placeholder="Email"
                        tabIndex={1}
                        required
                    />
                </div>
                <div>
                    {!validateEmail(form.email) && (
                        <p>
                            {" "}
                            Unesi ispravan mejl kako bi dugme prestalo da igra.{" "}
                        </p>
                    )}
                </div>

                <div>
                    <label htmlFor="password" className={`label`}>
                        <b>Šifra:</b>
                    </label>
                    <br></br>
                    <span>
                        <input
                            id="password"
                            type={isPasswordShown ? "text" : "password"}
                            name="password"
                            defaultValue={form.password}
                            minLength="8"
                            tabIndex={2}
                            required
                        />

                        <button
                            type="button"
                            className="button2"
                            onClick={() => setPasswordShown(!isPasswordShown)}
                        >
                            {" "}
                            Pokaži šifru{" "}
                        </button>
                    </span>
                </div>
                <div>
                    {form.password.length < minPasswordLength && (
                        <p>Šifra mora biti dugačka minimalno 8 karaktera!</p>
                    )}
                </div>
                <div
                    style={{
                        transform: `translateX(${
                            toggleClass &&
                            !(
                                form.password.length >= minPasswordLength &&
                                validateEmail(form.email)
                            )
                                ? "-15vh"
                                : "0"
                        }`,
                        transition: "transform 50ms ease-in-out",
                    }}
                >
                    <button
                        type="submit"
                        tabIndex={3}
                        onMouseEnter={annoyingSubmitButton}
                    >
                        Prijavi se
                    </button>
                </div>
                <br></br>
                <div>
                    Ne možeš se prijaviti sve dok podaci ne budu ispravni. Tada
                    će dugme prestati da igra.
                </div>
            </form>
        </section>
    );
}

export default Vise;
