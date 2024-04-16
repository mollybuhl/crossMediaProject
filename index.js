
let main = document.querySelector("main");

if(localStorage.getItem("loggedIn") === "true"){
    renderMap();
}else{
    renderStartpage();
}

function renderStartpage(){
    main.innerHTML = `
    <h1>Happily Never After</h1>
    <button class="btnNewGame">Nytt spel</button>
    <button class="btnResumeGame">Fortsätt spela</button>
    `;

    main.querySelector(".btnNewGame").addEventListener("click", renderRegister)
    main.querySelector(".btnResumeGame").addEventListener("click", renderLogin)
}

function renderInstructionpage(){
    main.innerHTML = `
    <h1>Hur man spelar</h1>
    <ul>
        <li>Lyssna på storyn</li>
        <li>Prata med misstänkta och vitnen</li>
        <li>Hitta mördaren</li>
    </ul>
    <button id="btnStartPlaying">Börja spela</button>
    `;

    main.querySelector("#btnStartPlaying").addEventListener("click", renderIntroductionpage)
}



