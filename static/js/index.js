const request = require("request");
const ipc = require('electron').ipcRenderer;

let data = document.getElementById("data");

request.get("http://hacknotifier.herokuapp.com/",(err,response,body)=>{

    data.innerHTML = '';
    if(!body)
        data.innerHTML = "<h1> Could not load hackathons </h1>";
    else{
         
        for(let entry of JSON.parse(body)){
            data.innerHTML += `<div class="row">
                <div class="col s12 m5" style="width:100%">
                <div class="card-panel teal">
                <span class="white-text">
                <strong>${entry.title}</strong>
                <p>${entry.location}</p>
                <p>${entry.date}</p>
                <p>${entry.description}</p>
                <p>source: ${entry.source}</p>
                <a onclick="ipc.send('linker',${entry.link});" class="waves-effect waves-teal btn-flat" href="#">register</a>
                </span>
                </div>
                </div>
            </div>`
        }

    }

});