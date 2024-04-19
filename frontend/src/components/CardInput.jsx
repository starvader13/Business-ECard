// eslint-disable-next-line react/prop-types
export function CardInput({ nameChange, descriptionChange, twitterChange, linkedinChange, interestChange, addDatabaseEntry }){

    const inputStyle ={
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        margin: "5 0",
    }

    return <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
    }}>
        <div style={inputStyle}>
            <label style={{minWidth: 1000, textAlign: "right", marginRight: 10, fontWeight: 1000, paddingRight: 10}}>Name:</label> <input type="text" id="name" onChange={(e)=>{nameChange(e.target.value)}}/> <br/>
        </div>
        <div style={inputStyle}>
            <label style={{minWidth: 1000, textAlign: "right", marginRight: 10, fontWeight: 1000, paddingRight: 10}}>Description:</label> <input type="text" id="description" onChange={(e)=>{descriptionChange(e.target.value)}}/> <br/>
        </div>
        <div style={inputStyle}>
            <label style={{minWidth: 1000, textAlign: "right", marginRight: 10, fontWeight: 1000, paddingRight: 10}}>Linkedin:</label> <input type="text" id="linkedin" onChange={(e)=>{linkedinChange(e.target.value)}}/> <br/>
        </div>
        <div style={inputStyle}>
            <label style={{minWidth: 1000, textAlign: "right", marginRight: 10, fontWeight: 1000, paddingRight: 10}}>Twitter:</label> <input type="text" id="twitter" onChange={(e)=>{twitterChange(e.target.value)}}/> <br/>
        </div>
        <div style={inputStyle}>
            <label style={{minWidth: 1000, textAlign: "right", marginRight: 10, fontWeight: 1000, paddingRight: 10}}>Interests:</label> <input type="" id="interests" onChange={(e)=>{interestChange(e.target.value)}}/> <br/>
        </div>
        <div style={{minWidth: 1160, textAlign: "right", marginRight: 10, }}>
            <button style={{backgroundColor: "lightblue", fontWeight: 500, fontSize: 17, borderRadius: 5, padding: 7}} onClick={addDatabaseEntry}>Add To Database</button>
        </div>
    </div>
}