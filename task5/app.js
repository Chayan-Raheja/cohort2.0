var h1 = document.querySelector('h1')
h1.innerHTML="1"

h1.style.color="black"

h1.style.backgroundColor="red"

h1.addEventListener('dblclick', function(){
    h1.innerHTML="event perfomed"
})

var a=1;
var ad=document.querySelector("#add")
ad.addEventListener("click", function(){
    a++;
    h1.innerHTML=a;
})

var min=document.querySelector("#min")
min.addEventListener("click", function(){
    a=a-1;
    h1.innerHTML=a;
})
 