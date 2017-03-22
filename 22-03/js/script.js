

// on va changer l'objet className
// Identification de l'element

var megaman = document.getElementById('megaman').getElementsByTagName('div')[0]
var megaman2 = document.getElementById('megaman').getElementsByTagName('div')
[1]

//on definie notre fonction jump
function jump(){
  megaman.className= "jump";
  setTimeout(function(){
    megaman.className="run"
   }, 300);
}
// on utilise le eventlistener

megaman.addEventListener("click", jump)
console.log(megaman)


function run(){
  megaman2.className="run";
  setTimeout(function(){
  megaman2.className= "jump"
}, 3000);
}

megaman2.addEventListener("click", run)
console.log(megaman)
