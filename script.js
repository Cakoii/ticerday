const card = document.getElementById("card");
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let opened = false;
let playing = false;

/* Open Card */

card.addEventListener("click", () => {

    if(!opened){

        card.classList.add("open");

        launchConfetti();

        opened = true;
    }

});

/* Music */

musicBtn.addEventListener("click", () => {

    if(!playing){

        music.play();

        musicBtn.innerHTML = "⏸ Pause Music";

        playing = true;

    }else{

        music.pause();

        musicBtn.innerHTML = "🎵 Play Music";

        playing = false;
    }

});

/* Floating Hearts */

const heartsContainer = document.querySelector(".hearts");

for(let i=0; i<25; i++){

    const heart = document.createElement("span");

    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
        5 + Math.random() * 5 + "s";

    heart.style.fontSize =
        15 + Math.random() * 20 + "px";

    heartsContainer.appendChild(heart);
}

/* Floating Petals */

const petalsContainer = document.querySelector(".petals");

for(let i=0; i<30; i++){

    const petal = document.createElement("span");

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.animationDuration =
        6 + Math.random() * 6 + "s";

    petal.style.opacity = Math.random();

    petalsContainer.appendChild(petal);
}

/* Confetti */

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function createConfetti(){

    for(let i=0; i<150; i++){

        confetti.push({
            x:Math.random() * canvas.width,
            y:Math.random() * canvas.height - canvas.height,
            r:Math.random() * 6 + 2,
            d:Math.random() * 150,
            color:`hsl(${Math.random()*360},100%,75%)`,
            tilt:Math.random() * 10 - 10
        });
    }
}

function drawConfetti(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    confetti.forEach((c,index)=>{

        ctx.beginPath();

        ctx.fillStyle = c.color;

        ctx.fillRect(c.x,c.y,c.r,c.r);

    });

    updateConfetti();
}

function updateConfetti(){

    confetti.forEach((c,index)=>{

        c.y += 3;

        if(c.y > canvas.height){

            confetti.splice(index,1);
        }

    });
}

function animateConfetti(){

    drawConfetti();

    requestAnimationFrame(animateConfetti);
}

function launchConfetti(){

    createConfetti();

    animateConfetti();
}

/* Resize */

window.addEventListener("resize", ()=>{

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});