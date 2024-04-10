
let main = document.querySelector("main");

if(localStorage.getItem("loggedIn") === "true"){
    renderMap();
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
    `;

    main.querySelector("#btnStartPlaying").addEventListener("click", renderIntroductionpage)
}



