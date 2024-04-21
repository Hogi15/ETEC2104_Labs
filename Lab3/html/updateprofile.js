"use strict";

function submit(){
    let file = document.getElementById("img").files[0];
    if(!file){
        console.log("No file!");
        return;
    }
    let R = new FileReader();
    R.addEventListener("load", () => {
        let image = btoa(R.result);    //do base64 encoding
        let name = document.getElementById("name").value;
        let dob = document.getElementById("dob").value;
        let email = document.getElementById("email").value;
        let J = {
            name,
            dob,
            email,
            image,
        };
        fetch( "/updateprofile",
            {   method: "POST",
                body: JSON.stringify(J)
            }
        ).then( (resp) => {
            resp.json().then( (J) => {
                console.log("Server said:",J);
            });
        }).catch( (err) => {
            console.log("Uh oh",err);
        })
    });
    R.readAsBinaryString(file);
}