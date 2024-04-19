import {useState} from "react";
import {Card} from "./Card.jsx";

export function CardResponse(props) {
    const [cardEntry, setCardEntry]=useState("");

    async function createCard(){
        const res = await fetch(`http://localhost:4000/api/card/${props.response.cardId}`,{
            method: "get",
        })
        const json = await res.json();
        setCardEntry(json.cardDetails);
    }

    return <div>
        <div style={{margin:10, marginTop: 40, padding: 20, borderRadius: 7, borderStyle: "none", backgroundColor: "#843c3c", color: "white", display:"flex", justifyContent: "center", alignItems:"center", fontWeight: 700, flexDirection: "column"}}>
            <div>
                {props.response.msg}
            </div>
            {
                props?.response?.cardId ?
                    <>
                        <div>Your business card id is {props.response.cardId}. Click on below button to generate E-card</div>
                        <div>
                            <button style={{
                                backgroundColor: "lightblue",
                                fontWeight: 500,
                                fontSize: 17,
                                borderRadius: 5,
                                padding: 7
                            }} onClick={createCard}>Create Card </button>
                        </div>
                    </> : ""
            }
        </div>
        {cardEntry ? <Card cardEntry={cardEntry}/> : ""}
    </div>
}