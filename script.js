const openBtn = document.getElementById("openBtn");
const loading = document.getElementById("loading");
const main = document.getElementById("main");

const giftBtn = document.getElementById("giftBtn");
const giftMessage = document.getElementById("giftMessage");

const typeText = document.getElementById("typeText");

const message = `Dear Thangoo... 🥹❤️

Today is not just your birthday...

It's the day the most beautiful soul came into this world. 🌍✨

Thank you for every smile 😊
Every laugh 😂
Every hug 🤍
Every memory 📸

You made my ordinary life feel magical. 💖

No matter what happens...

I promise to respect you...
Care for you...
Support you...

And keep choosing you again and again. ♾️❤️

Happy Birthday My Beautiful Thangoo 🎂💕

I Love You Forever ❤️

— Pugazh`;

openBtn.onclick = () => {

    loading.style.display = "none";
    main.style.display = "block";

    createHearts();

    startTyping();

};

giftBtn.onclick = () => {

    giftMessage.style.display = "block";

    createHearts();

    alert("🎉 Happy Birthday Thangoo ❤️");

};

function startTyping(){

    let i = 0;

    function typing(){

        if(i < message.length){

            typeText.innerHTML += message.charAt(i);

            i++;

            setTimeout(typing,40);

        }

    }

    typing();

}

function createHearts(){

    for(let i=0;i<60;i++){

        let heart=document.createElement("div");

        heart.innerHTML="💖";

        heart.style.position="fixed";
        heart.style.left=Math.random()*100+"vw";
        heart.style.top="100vh";
        heart.style.fontSize=(20+Math.random()*20)+"px";
        heart.style.animation="floatUp "+(3+Math.random()*3)+"s linear";

        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },6000);

    }

}

const style=document.createElement("style");

style.innerHTML=`

@keyframes floatUp{

0%{

transform:translateY(0) rotate(0deg);

opacity:1;

}

100%{

transform:translateY(-120vh) rotate(360deg);

opacity:0;

}

}

`;

document.head.appendChild(style);