import {useState} from "react";
import {Sign} from "././Sign.jsx";

let email = "";
let password = "";

export function Header(){
    const [signupResponse, setSignupResponse] = useState("");

    async function signup(){
        const res = await fetch("https://business-ecard.onrender.com/api/signup", {
            method: "POST",
            body:JSON.stringify({
                email: email,
                password: password
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const response = await res.json();
        setSignupResponse(response.msg);
    }

    async function signin(){
        const res = await fetch("https://business-ecard.onrender.com/api/signin", {
            method: "POST",
            body:JSON.stringify({
                email: email,
                password: password
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const response = await res.json();
        setSignupResponse(response.msg);

        if(response){
            localStorage.setItem("authorization", response.token);
        }
    }

    return <div>
        {signupResponse? <Sign response={signupResponse}/> : ""}

        <div style={{
            padding: 10,
        }}>
            <div style={{
                paddingBottom: 10,
            }}>
                <label style={{fontWeight: 1000, paddingRight: 10}}>Email:</label><input type="text" placeholder="" id="email" onChange={(e)=>{email=e.target.value}}/>
            </div>
            <div>
                <label style={{fontWeight: 1000, paddingRight: 10}}>Password:</label><input type="password" placeholder="" id="password" onChange={(e)=>{password=e.target.value}}/>
            </div>
        </div>

        <div style={{
            padding: 10,
            display: "flex"
        }}>
            <div style={{paddingRight: 10}}>
                <button onClick={signup} style={{backgroundColor: "lightblue", fontWeight: 500, fontSize: 17, borderRadius: 5}} >SignUp</button>
            </div>
            <div>
                <button onClick={signin} style={{backgroundColor: "lightblue", fontWeight: 500, fontSize: 17, borderRadius: 5}}>SignIn</button>
            </div>
        </div>

    </div>
}