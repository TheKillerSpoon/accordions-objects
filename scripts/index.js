/* 

----- Udskriv acoordions via JS: -----
- lav et array med objekter (et objekt for hver accordion)
    - Hvert object skal have følgende keys: title og bodytext 

- for at få dem udskrevet, skal der forEach'es over array'et med objekter
- i forEach'en udskrives html'en hver accordion (inde i ``)
*/
let textArray =[
    {
        title: "FUCK",
        bodytext: "hmmm"
    },
    {
        title: "MIT",
        bodytext: "aha"
    },
    {
        title: "LIV",
        bodytext: "helt sikkert"
    }
];

const accordions = document.querySelector(".container");


textArray.forEach(e =>{
    accordions.innerHTML += `
        <div class="accordion">${e.title}</p>
            <div class="panel">
                <p>${e.bodytext}</p>
            </div>
        </div>
    `
})



const accOutput = document.querySelectorAll(".accordion");

accOutput.forEach(element =>{
    element.addEventListener("click", (e)=>{
        e.currentTarget.classList.toggle("active")
    })
})



/*
----- Funktionalitet (åbn & lukke): -----
- Hver accordion har class'en .accordion. gem dem ned i en variabel ( brug querySelectorAll), og foreach over dem, så hver enkel kan trykkes på
    - brug e.currentTarget
- husk 'classList.toggle' istedet for 'add'

*/
/*
const accOutput = document.querySelectorAll(".accordion");

accOutput.forEach(element =>{
    element.addEventListener("click", (e)=>{
        e.currentTarget.classList.toggle("active")
    })
})
*/






