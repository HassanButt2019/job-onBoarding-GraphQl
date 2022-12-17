const URL = "http://localhost:9000/"

async function fetchGreeting(){
    const response = await fetch(URL , {
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify({
            query:`
            query{
                greeting,
                id,
                message
            }
            `
        })
 

    })

    const {data} = await response.json()
    return data;
}

fetchGreeting().then(({greeting,id , message})=>{
const title = document.querySelector("h1");
title.textContent = greeting;
const Id = document.querySelector("h2");
Id.textContent = id;
const mg = document.querySelector("h3");
mg.textContent = message;
}


);