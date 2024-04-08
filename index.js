
let main = document.querySelector("main");

if(localStorage.getItem("loggedIn") === "true"){
    renderHomepage();
}else{
    renderRegister();
}

function renderHomepage(){
    main.innerHTML = `
    <h1>How to play</h1>
    <ul>
        <li>Lyssna på storyn</li>
        <li>Prata med misstänkta och vitnen</li>
        <li>Hitta mördaren</li>
    </ul>
    <button id="btnStartPlaying">Börja spela</button>
    <button class="logOutBtn">Log out</button>
    `;

    main.querySelector("#btnStartPlaying").addEventListener("click", renderIntroductionpage)

    main.querySelector(".logOutBtn").addEventListener("click", e => {
        window.localStorage.setItem("loggedIn", "false");
        window.localStorage.removeItem("userId");
        renderLogin();
    })
}



