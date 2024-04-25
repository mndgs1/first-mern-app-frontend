// @ts-nocheck
import { useRef, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import { setCredentials } from "./authSlice";
import { useLoginMutation } from "./authApiSlice";
import { useDispatch } from "react-redux";
import { SyncLoader } from "react-spinners";

import usePersist from "../../hooks/usePersist";

import useTitle from "../../hooks/useTitle";

const Login = () => {
    useTitle("Login | Dan D. Repairs");
    const userRef = useRef();
    const errRef = useRef();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [persist, setPersist] = usePersist();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [login, { isLoading }] = useLoginMutation();

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg("");
    }, [username, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { accessToken } = await login({
                username,
                password,
            }).unwrap();

            dispatch(setCredentials({ accessToken }));
            setUsername("");
            setPassword("");
            navigate("/dash");
        } catch (error) {
            if (!error.status) {
                setErrMsg("No Server Response");
            } else if (error.status === 400) {
                setErrMsg("Missing username or password");
            } else if (error.status === 401) {
                setErrMsg("Unauthorized");
            } else {
                setErrMsg(error?.data?.message);
            }
            errRef.current.focus();
        }
    };

    const handleUserInput = (e) => setUsername(e.target.value);
    const handlePwdInput = (e) => setPassword(e.target.value);
    const handleToggle = () => setPersist((prev) => !prev);

    const errClass = errMsg ? "errmsg" : "offscreen";

    if (isLoading) return <SyncLoader />;

    const content = (
        <section className="public">
            <header>
                <h1>Employee Login</h1>
            </header>
            <main className="login">
                <form onSubmit={handleSubmit} className="form">
                    <p ref={errRef} className={errClass} aria-live="assertive">
                        {errMsg}
                    </p>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        ref={userRef}
                        value={username}
                        onChange={handleUserInput}
                        autoComplete="off"
                        required
                        className="form__input"
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        ref={errRef}
                        value={password}
                        onChange={handlePwdInput}
                        autoComplete="off"
                        required
                        className="form__input"
                    />
                    <button className="form__submit-button">Sign In</button>
                    <label htmlFor="persist" className="form__persist">
                        <input
                            type="checkbox"
                            id="persist"
                            onChange={handleToggle}
                            checked={persist}
                            className="form__checkbox"
                        />
                        Trust this Device
                    </label>
                </form>
            </main>
            <footer>
                <Link to="/">Back to Home</Link>
            </footer>
        </section>
    );

    return content;
};

export default Login;
