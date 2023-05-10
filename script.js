// Script for navigation bar
const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');

if(bar){
    bar.addEventListener("click",()=>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener("click",()=>{
        nav.classList.remove('active');
    })
}

let addtoCart=document.getElementById("one");
let image=document.getElementById("MainImg");

let details=addtoCart.parentElement.children;
console.log(details[0].innerHTML);
console.log(details[2].innerHTML);
console.log(image.src);
let carTable=document.getElementById("cart");
console.log(carTable);
// let rows=carTable.firstElementChild.children[1].children;
// let col=row.createElement("td");
// col.innerHTML=details[0];
// let name=document.createElement("td");
// addtoCart.addEventListener("click",()=>{

// })
// console.log(rows.length);