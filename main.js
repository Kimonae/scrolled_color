window.onscroll = slideDown;
function slideDown() {
 // Votre code ici
 var k = document.querySelector("html").scrollTop;
 var l = document.getElementById("navbar");
 var h = document.querySelector(".lorem");
 h.style.position ="absolute";

 if( k > 200) {

l.style.top =0;
h.style.top = "56px";




 }
else {l.style.top = "-56px";
h.style.top = 0;
}
}


    function makeRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
        }

    haha();
    function haha() {
   

     var x = document.querySelector(".lorem").innerHTML.split("<br>");  document.querySelector(".lorem").innerHTML = "";
     x.forEach(element => {
         
var m =  document.createElement("span");
m.innerHTML = element;
m.style.color = makeRandomColor();
document.querySelector(".lorem").appendChild(m);
     });


    }