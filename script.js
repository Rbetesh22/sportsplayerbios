const btn1 = document.getElementById("show-modal-button1");
const btn2 = document.getElementById("show-modal-button2");
const btn3 = document.getElementById("show-modal-button3");
const overlay = document.querySelector(".overlay-div");
const modal = document.querySelector(".modal-div");
const closeBtn = document.querySelector(".close-modal-button");
let h1 = document.querySelector("#profile-h1");
let p = document.querySelector("#profile-paragraph");


const profile = [
    {
      name: "Kobe Bryant",
      number: 24,
      team: "lakers",
      championchip: 5,
    },
    {
      name: "Michael Jordan",
      number: 23,
      team: "bulls",
      championchip: 6,
    },
    {
      name: "Lebron James",
      number: 6,
      team: "lakers",
      championchip: 3,
    },
  ];


btn1.addEventListener("click", showPlayer1);
btn2.addEventListener("click", showPlayer2);
btn3.addEventListener("click", showPlayer3);

function popUp() {
    overlay.classList.remove("hidden");
    modal.classList.remove("hidden");
    closeBtn.addEventListener("click", function(){
        overlay.classList.add("hidden");
        modal.classList.add("hidden");
    });
    overlay.addEventListener("click", function(){
        overlay.classList.add("hidden");
       modal.classList.add("hidden");
     });

}

function showPlayer1(){
    popUp();
    h1.textContent = profile[0].name;
    p.textContent = `${profile[0].name} played as number ${profile[0].number} on the ${profile[0].team} and won ${profile[0].championchip} championships over his career.` ;
    
    
}

function showPlayer2(){
    popUp();
    h1.textContent = profile[1].name;
    p.textContent = `${profile[1].name} played as number ${profile[1].number} on the ${profile[1].team} and won ${profile[1].championchip} championships over his career.` ;
}

function showPlayer3(){
    popUp();
    h1.textContent = profile[2].name;
    p.textContent = profile[2].number;
    p.textContent = `${profile[2].name} played as number ${profile[2].number} on the ${profile[2].team} and won ${profile[2].championchip} championships over his career.` ;
}


