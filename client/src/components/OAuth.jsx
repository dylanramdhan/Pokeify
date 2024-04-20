import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import { expressport } from "../utilities/global"



export default function OAuth() {

    const [user, setUser] = useState({})
    const navigate = useNavigate()

    /* once we log in, we have user info */
    async function handleCallbackResponse(response) {
        var userObject = jwtDecode(response.credential)
        console.log(userObject)
        const bodyres = await fetch(`${expressport}/database/postUser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userObject)
        })

        setUser(userObject)
        document.getElementById('askSignIn').hidden = true;
        navigate('/user');
    }


    useEffect(() => {
        /* global google */
        google.accounts.id.initialize(
            {
                client_id: "179079562014-1jj9lugvd5rm6lhcikcu5sbvkgr0qlqj.apps.googleusercontent.com",
                callback: handleCallbackResponse
            }
        )
        /* signInDiv - the button for OAuth */
        google.accounts.id.renderButton(
            document.getElementById('signInDiv'),
            { theme: "outline", size: "large" }
        );

        /* atuomatically prompts Oauth */
        google.accounts.id.prompt();
    }, [])



    return (
        <div>
            <div id="askSignIn">
                <div >
                    <div id="signInDiv"></div>
                </div>

            </div>
        </div>
    )
}