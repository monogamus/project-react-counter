import React from "react";

function Greeting({name}) {
    // console.log(props);
    return(
        <div>
            <h1>Hallo {name}</h1>
            <small>Apa kabar?</small>
        </div>
    );
}

export default Greeting;