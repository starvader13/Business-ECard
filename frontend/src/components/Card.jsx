export function Card({ cardEntry }){
    return <div style={{display: "flex", justifyContent: "center", alignContent: "center"}}>
        <div style={{margin: 10, borderRadius: 10, borderStyle: "solid", borderWidth: 2, display:"inline-block", paddingLeft: 20, paddingTop: 40, paddingBottom: 70, paddingRight: 300, backgroundColor: "#d0b8b8"}}>
            <div style={{fontSize: 40, fontWeight: 1000, paddingBottom: 30}}>{cardEntry.name}</div>
            <div style={{fontSize: 20, fontWeight: 500 }}>{cardEntry.description}</div>
            <div>
                <h3 style={{fontSize: 25, fontWeight: 1000}}>Interests</h3>
                {cardEntry.interests.map((interest, index)=>{
                    return <>
                        <div key={`${interest}-${index}`} style={{fontSize: 20, fontWeight: 500, paddingBottom: 10}}>{interest}</div>
                    </>
                })}

                <div style={{paddingTop: 20, display: "flex", }} >
                    <div style={{paddingRight: 20}}>
                        <a style={{borderRadius: 5, backgroundColor: "#2b5ffe", padding: 10, fontSize: 20, fontWeight: 500, color: "white", textDecoration: "none" }} href={`${cardEntry.linkedin}`} target={"_blank"}>Linkedin</a>
                    </div>
                    <div>
                        <a style={{borderRadius: 5, backgroundColor: "#2b5ffe", padding: 10, fontSize: 20, fontWeight: 500, color: "white", textDecoration: "none" }} href={`${cardEntry.twitter}`} target={"_blank"}>Twitter</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

}