const tempchange = document.getElementById('temp_type');

tempchange.addEventListener('change', convertTemp);

function weatherAlert() {
    alert('Loading weather Report...');
}

function dismissAlert() {
    document.querySelector('#cookie_time').remove();
}

function convertTemp() {
    var hightemps = document.querySelectorAll('.high');
    var lowtemps = document.querySelectorAll('.low');

    console.log(tempchange.value);

    if ( tempchange.value === 'fahrenheit') {

        for (var i=0; i<hightemps.length; i++) {
            var element = hightemps[i];
            var temp = element.innerText.split('°')[0];      

            temp = (temp * 9/5) + 32;
            temp = Math.ceil(temp); //round up    

            element.innerText = temp + '°';
        } 

        for (var i=0; i<lowtemps.length; i++) {
            var element = lowtemps[i];
            var temp = element.innerText.split('°')[0];      

            temp = (temp * 9/5) + 32;
            temp = Math.ceil(temp); //round up     

            element.innerText = temp + '°';
        } 
        
        
    }

    else {           
        
        for (var i=0; i<hightemps.length; i++) {
            var element = hightemps[i];
            var temp = element.innerText.split('°')[0];      

            temp = (temp - 32) * 5/9;
            temp = Math.ceil(temp); //round up     

            element.innerText = temp + '°';
        } 

        for (var i=0; i<lowtemps.length; i++) {
            var element = lowtemps[i];
            var temp = element.innerText.split('°')[0];      

            temp = (temp - 32) * 5/9;   
            temp = Math.ceil(temp); //round up      

            element.innerText = temp + '°';
        } 
    }   
}