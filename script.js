const value = document.getElementById('value');
const btn1 = document.querySelector('.decrease');
const btn2 = document.querySelector('.reset');
const btn3 = document.querySelector('.increase');
let number = 0;
btn1.addEventListener('click', function() 
{
    value.textContent = --number;
    value.style.color = "red";
});
btn2.addEventListener('click', function()
 {
    value.textContent = 0;
    number = 0;
        value.style.color = "gray";

});
btn3.addEventListener('click', function() {

    value.textContent = ++number;
    value.style.color = "green";
});