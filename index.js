let balise = document.querySelector("body");

balise.style.textDecorationStyle = 'none'
balise.style.background = "black"
balise.style.color = "white"

liste = document.createElement("ul");
balise.appendChild(liste);

for (let i=1; i <= 4; i++){
    li = document.createElement("li");
    li.textContent = `Liste ${i}`;
    liste.appendChild(li);
    li.className = "item" +i; 
}
if (liste.lastChild){
    liste.removeChild(liste.lastChild)
}

let  p = prompt("Entrez votre phrase")
const sec = p.split(",")
console.log(sec)
for (let i=0; i < sec.length; i++){
    li = document.createElement("li");
    li.textContent = sec[i]
    liste.appendChild(li);
    li.className = "item" +i; 
}
// for ( let i= 0 ; i< sec.length ; i++){
//     let l = document.createElement("li")
//     l.textContent = sec[i] 
//     liste.appendChild(l)
//     l.id = "item-" +i
//     l.className = "item" +i

// }
document.body.appendChild(liste)

console.log(balise)