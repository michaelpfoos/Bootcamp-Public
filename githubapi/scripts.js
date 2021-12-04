//link to my github information using github url

//const url = 'https://api.github.com/users/JBickleyx';

let name1 = document.getElementById('name');
let url2 = document.getElementById('login');
let login = document.getElementById('url');
let myimg = document.getElementById('image');

function getData() {

    const url = 'https://api.github.com/users/michaelpfoos';
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        name1.innerText = data.name;
        url2.innerText = data.html_url;
        login.innerText = data.login;     
        myimg.src = data.avatar_url;   
    })
    .catch(err => console.log(err));
}




