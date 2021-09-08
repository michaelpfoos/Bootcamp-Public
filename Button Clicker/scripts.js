function login_logout(element) {
    if (element.innerText === "Login") {
        element.innerText = "Logout";          
    }
    else {
        element.innerText = "Login";        
    }   
}

function delete_me(element) {
    element.remove();
}

function ninja_like(element) {    
    alert('Ninja was Liked');   
    element.firstChild.innerText = parseInt(element.firstChild.innerText) + 1;  
}

