"use strict";

let file = document.getElementById("img").files[0];
if(!file){
    console.log("No File!);
    return;
}
let R = new FileReader();
R.addEventListener("load", () => {

};
R.readAsBinaryString(file);
)

function submit(){
    let image = btoa(R.result);
    let name = document.getElementById("name").value;
    let dob = document.getElementById("dob").value;
    let email = document.getElementById("email").value;

    let J = {
        image,
        name,
        dob,
        email,
    };
    fetch( "/updateprofile",
        {   method: "POST"
            body: JSON.stringify(J)
        }
    ).then( (resp) => {
        resp.json().then( (J) = {
            console.log("Server said:", J);
        });
    }).catch( (err) => {console.log("Uh oh", err);
    })


}