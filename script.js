// console.log("happy man");

// const liCollection = document.getElementsByTagName("li");
// for ( const li of liCollection ) {
//     console.log(li.innerText);
// }


//get element BY ID
let bannerElement = document.getElementById('headline');
console.log(bannerElement.textContent);
bannerElement.textContent='SUBSCRIPTION NEWSLINE'

let headerElement = document.getElementById('headline');
console.log (headerElement.innerText);


headerElement.style.color = 'blue';

// Get elements by Class name

console.log(document.getElementsByClassName('descrip-red')[1]);

let classID = document.getElementsByClassName('descrip-red')
console.log(classID.innerText);


