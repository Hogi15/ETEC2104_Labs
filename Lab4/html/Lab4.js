let sock;

function Spin(){

let wheel = [0,34,10,21,28,4,18,9,27,22,
            12,3,17,20,11,33,2,10,32,"00",
            15,8,25,1,31,20,14,30,7,24,
            29,35,6,13,23,19,5,36];

let location = Math.random()*38;
let remainder = (location%1);
location = location - remainder;


let ball = wheel[location];

console.log(ball);
sock.send(ball);

}

function sendresult(event){
let ball = event.data
let answer = [ball, ];

if (location%2){answer.push("Black")
}    
else{answer.push("Red")
};


if (ball === "00"){answer.push("even")
}
else if (ball === 0){answer.push("odd")
}
else if (ball%2){answer.push("odd")
}
else{answer.push("even")
};


if (ball === "00"){answer.push("passed")
}
else if (ball === 0){answer.push("failed")
}
else if (ball <= 18){answer.push("passed")
}
else{answer.push("failed")
};

console.log(answer);

let tbl = document.getElementById("answers");

let tr = document.createElement("tr");
tbl.appendChild(tr);
for(let j=0;j<answer.length;++j){
    let td = document.createElement("td");
    tr.appendChild(td);
    let txt = document.createTextNode( answer[j] );
    td.appendChild( txt );
}

}

function main(){
    sock = new WebSocket("ws://"+document.location.host+"/sock");
    sock.addEventListener("open", ()=>{ 
        document.getElementById("spinbutton").disabled=0
        console.log("SOCK IS OPEN");
    });
    sock.addEventListener("message", sendresult);

}

main();