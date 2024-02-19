console.log("happy man");

const liCollection = document.getElementsByTagName("li");
for ( const li of liCollection ) {
    console.log(li.innerText);
}