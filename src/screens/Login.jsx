import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import {  useNavigate } from "react-router-dom";

export function Login() {

    const navigate = useNavigate();

    function handleLogout(){
        googleLogout()
    }

    return (
        <>
            <GoogleLogin
            onSuccess={(credentialResponse) => {
                console.log(credentialResponse)
                console.log(jwtDecode(credentialResponse.credential))
                navigate("/Home")
            }}
            onError={() => console.log("Login Failed")}
                auto_select={true}/>
        </>
    )
}