function processrequest(element) {
    //remove the request
    element.parentNode.parentNode.remove();  

    //Reduce the connection request counter by 1
    let requestcount = document.querySelector('#connection_request_header > span');
    requestcount.innerText--;   
    
    if (element.alt === "Accept Friend Request") {        
            //add to your connections if the connection request was accepted.
            let connectioncounter = document.querySelector('#your_connections_header > span');
            let text = connectioncounter.innerText;
        
            //Get the current number of friends
            let currentcount = parseInt(connectioncounter.innerText = text.split('+')[0]);
            currentcount = ++currentcount;
        
            //Set the new value of the connections
            connectioncounter.innerText = currentcount + '+';
    }    
} 

function editprofile() {
   let  profileName = document.querySelector('#profile > h1');
   profileName.innerText = "Russ Hax0r";
}