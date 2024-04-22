/*
    To Do:
    - Handle alert in case of error (clear localstorage and render home page)

*/
let main = document.querySelector("main");

if(localStorage.getItem("loggedIn") === "true"){
    renderMap();
}else{
    renderStartpage();
}

function renderStartpage(){
    main.innerHTML = `
    <h1 id="happily">Happily</h1>
    <h1 id="never"><span>N</span>ever</h1>
    <h1 id="after">After</h1>
    <button class="btnNewGame">Nytt spel</button>
    <button class="btnResumeGame">Fortsätt spela</button>
    `;

    main.querySelector(".btnNewGame").addEventListener("click", renderRegister)
    main.querySelector(".btnResumeGame").addEventListener("click", renderLogin)
}

function renderInstructionpage(){
    main.innerHTML = `
    <h2>Hur man spelar</h2>
    <ul>
        <li>Lyssna på storyn</li>
        <li>Prata med misstänkta och vitnen</li>
        <li>Hitta mördaren</li>
    </ul>
    <button id="btnStartPlaying">Börja spela</button>
    `;

    main.querySelector("#btnStartPlaying").addEventListener("click", renderIntroductionpage)
}



