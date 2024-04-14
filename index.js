
let main = document.querySelector("main");

if(localStorage.getItem("loggedIn") === "true"){
    renderMap();
}else{
    renderStartpage();
}

function renderStartpage(){
    main.innerHTML = `
    <h1>GAME NAME</h1>
    <h3>Ett Disney mordmysterium</h3>
    <p>Välkommen till en Disney-värld där magin förenas med mörkret på festivalområdet. Mitt i festligheterna har Walt Disney mördats. Utforska platserna och avslöja sanningen bland bekanta ansikten.</p>
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



