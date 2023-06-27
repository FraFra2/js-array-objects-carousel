const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
const img = document.querySelector(".image");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const titleDescDiv = document.querySelector(".title-desc");

const thumbArr = document.querySelectorAll(".my-img");
console.log(thumbArr);


let imgArr = [];
let headingArr = [];
let descArr = [];

images.forEach((element, index) => {
    imgArr.push(element["image"]);
    headingArr.push(element["title"]);
    descArr.push(element["text"]);

});
console.log(headingArr, descArr);
img.setAttribute("src", imgArr[0]);

let index = 0;
thumbArr[index].classList.toggle("active");

let myH, myP;

myH = document.createElement("h1");
myH.innerHTML = headingArr[index];
myP = document.createElement("p");
myP.innerHTML = descArr[index];

titleDescDiv.append(myH, myP);

nextBtn.addEventListener("click", () =>{

    if (index >= 4){
        index = 0;
    }
    else{
        index += 1;
    }
    myP.innerHTML = descArr[index];
    myH.innerHTML = headingArr[index];
    img.setAttribute("src", imgArr[index]);
    thumbArr[index - 1].classList.toggle("active");
    thumbArr[index].classList.toggle("active");

});

prevBtn.addEventListener("click", () =>{
    if (index <= 0){
        index = 4;
    }
    else{
        index -= 1;
    }
    myP.innerHTML = descArr[index];
    myH.innerHTML = headingArr[index];
    img.setAttribute("src", imgArr[index]);
    thumbArr[index + 1].classList.toggle("active");
    thumbArr[index].classList.toggle("active");


});


