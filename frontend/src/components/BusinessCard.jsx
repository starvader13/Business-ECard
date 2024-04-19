import {CardInput} from "./CardInput.jsx";
import {useState} from "react";
import {CardResponse} from "./CardResponse.jsx";

export function BusinessCard(){
    const [name, setName] =useState("");
    const [description, setDescription] =useState("");
    const [linkedin, setLinkedin] =useState("");
    const [twitter, setTwitter] =useState("");
    const [interest, setInterest] =useState("");
    const [ addCardResponse, setAddCardResponse ] = useState("");

    let interestArray = interest.split(',');
    interestArray = interestArray.map((data) => {return data.trim()});

    async function addDatabaseEntry(){
        const response = await fetch("http://localhost:4000/api/card",{
            method: "post",
            body: JSON.stringify({
                name: name,
                description: description,
                linkedin: linkedin,
                twitter: twitter,
                interests: interestArray
            }),
            headers: {
                "Authorization": localStorage.getItem("authorization"),
                "Content-type": "application/json"
            }
        })

        const json = await response.json();
        setAddCardResponse({
            msg: json.msg,
            cardId: json.cardId
        });
    }

    return <div>

        <CardInput nameChange={setName} descriptionChange={setDescription} linkedinChange={setLinkedin} twitterChange={setTwitter} interestChange={setInterest} addDatabaseEntry={addDatabaseEntry}/>

        {addCardResponse ? <CardResponse response={addCardResponse}/> : ""}


    </div>
}