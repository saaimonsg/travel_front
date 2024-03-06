import {useContext, useEffect, useState} from 'react';
import {useRouter} from 'next/navigation'
import TopNavbar from "../../components/nav/TopNavbar";
import Footer from "../../components/core/footer";
import {useTranslation} from "react-i18next";
import axios from "axios";

export default function Login() {

    const [t, i18n] = useTranslation("common");
    const router = useRouter()
    const [username, setUsername] = useState("string")
    const [password, setPassword] = useState("string")

    const handleSubmitForm = async (event) => {
        event.preventDefault();
        // await fetch( `http://localhost:8080/login?username=${username}&password=${password}`, {
        await fetch(`http://localhost:8080/api/auth/login`, {
            method: 'POST',
            body: JSON.stringify({
                "username": username,
                "password": password
            })
        }).then(value => {
            // const jsessionid = value.headers.get("Set-Cookie")
            // console.log(jsessionid)
            fetch(`http://localhost:8080/app/country`, {
                method: 'POST',
                mode: "cors"
            });
            // router.push("/dashboard")
        });

    }

    return (<>
        {/*<TopNavbar></TopNavbar>*/}
        <form id='loginform' className="container" onSubmit={handleSubmitForm}>
            <div className="mb-3">
                <label htmlFor="usernameInput" className="form-label">{t("usernameInput")}</label>
                <input type="text" className="form-control" id="username" value={username} onChange={event => {
                    setUsername(event.target.value)
                }}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="passwordInput" className="form-label">{t("passwordInput")}</label>
                <input type="password" className="form-control" id="password" value={password} onChange={event => {
                    setPassword(event.target.value)
                }}
                />
            </div>
            <input className="btn btn-primary" type='submit' value={t("login.tag")}/>
        </form>
    </>)
}


