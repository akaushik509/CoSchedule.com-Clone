// write your code here
document.querySelector("#first").addEventListener("click", clickFirst);
function clickFirst(){
    window.location.href="signup.html"
}

document.querySelector("#second").addEventListener("click", clickSecond);
function clickSecond(){
    window.location.href="payment.html"
}

document.querySelector("#third").addEventListener("click", clickThird);
function clickThird(){
    window.location.href="signup.html"
}

// Extreme down box

document.querySelector("#ek").addEventListener("click", pressone);

function pressone(){
    window.location.href="signup.html";
}

document.querySelector("#teen").addEventListener("click", presstwo);

function presstwo(){
    window.location.href="signIn.html";
}

document.querySelector("#centre").addEventListener("click", punch);

function punch(){
let x= document.querySelector("#net");
x.innerText= "$39";
}
