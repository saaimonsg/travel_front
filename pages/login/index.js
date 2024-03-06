import {useContext, useEffect, useState} from 'react';
import {useRouter} from 'next/navigation'
import TopNavbar from "../../components/nav/TopNavbar";
import Footer from "../../components/core/footer";
import {useTranslation} from "react-i18next";
import axios from "axios";
import {HttpResourceFactoryContext} from "../../components/core/context";

export default function Login() {

    const [t, i18n] = useTranslation("common");
    const http = useContext(HttpResourceFactoryContext);

    const router = useRouter()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    async function handleSubmitForm(event) {
        event.preventDefault();
        try {
            const request = await http.authenticate(username, password).then(value1 => {

                if (value1 != {}) {
                    router.push("/dashboard")
                } else {
                    router.push("/login")
                }

            });
        } catch (e) {
            console.error(e) //FIXME TRAV-1
            router.push("/login")
        }
    }

    return (<>
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


