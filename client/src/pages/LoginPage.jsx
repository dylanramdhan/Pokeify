import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { expressport } from "../utilities/global"


export default function LoginPage() {

    const [user, setUser] = useState({})
    /* once we log in, we have user info */
    async function handleCallbackResponse(response) {
        console.log("JWT ID token" + response.credential)
        var userObject = jwtDecode(response.credential)

        const bodyres = await fetch(`${expressport}/database/postUser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userObject)
        })




        console.log(userObject)
        setUser(userObject)
        document.getElementById('askSignIn').hidden = true;
    }

    function handleSignOut(event) {
        setUser({});
        document.getElementById('askSignIn').hidden = false;

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
        <div className="flex h-screen justify-center items-center">
            <div id="askSignIn">
                <h1>Please Sign in</h1>
                <div >
                    <div id="signInDiv"></div>
                </div>

            </div>


            {Object.keys(user).length != 0 && <button onClick={(e) => handleSignOut(e)}>Sign Out</button>}


            {user &&
                <div className="justify-center">
                    <img src={user.picture}></img>
                    <h3>{user.name}</h3>

                </div>}
        </div>
    )
}