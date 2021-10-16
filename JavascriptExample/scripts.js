//make multiple elements disappear
function deleteAll() {

    //Query selecter all will create an array of the elements that you awnt to select as opposed to just the first one like query selector
    var elements = document.querySelectorAll('.inner');

    //If you get an Array you need to loop through them like this
    for  (var i=0;i < elements.length;i++) {
        elements[i].remove();
    }

}

//function to display an alert
function displayAlert() {
    alert('Whatever I want the alert to say');
}