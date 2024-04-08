
let main = document.querySelector("main");

if(localStorage.getItem("loggedIn") === "true"){
    renderHomepage();
}else{
    renderRegister();
}



function renderRegister(){

    main.innerHTML = `
    <h1>Register</h1>
    <div id="registerField">
        <label for="registerUsername">Username</label>
        <input type="text" id="registerUsername" placeholder="Username">
        <label for="registerPassword">Password</label>
        <input type="password" id="registerPassword" placeholder="Password">
    </div>
    <p class="userInfo"></p>
    <button id="regButton">Register</button>
    <button id="loginPageBtn">Already playing</button>
    `

    document.querySelector("#loginPageBtn").addEventListener("click", renderLogin)
    document.querySelector("#regButton").addEventListener("click", async e => {

        const username = document.querySelector("#registerUsername").value;
        const password = document.querySelector("#registerPassword").value;

        let requestOptions = {
            method: "POST",
            headers: {"Content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify({
                username: username,
                password: password,
                action: "register"
            })
        };

        try{
            let request = new Request("php/api.php", requestOptions);
            const response = await fetch(request);
            let resource = await response.json();

            if(!response.ok) {
                main.querySelector(".userInfo").textContent = resource.message;
            } else {
                renderLogin();
            }
    
        }catch(error){
            alert(`Something went wrong, ${error.message}`);
        }

    })

}

function renderLogin(){

    main.innerHTML = `
    <h1>Login</h1>
    <div id="loginField">
        <label for="loginUsername">Username</label>
        <input type="text" id="loginUsername" placeholder="Username">
        <label for="loginPassword">Password</label>
        <input type="password" id="loginPassword" placeholder="Password">
    </div>
    <p class="userInfo"></p>
    <button>Login</button>
    <button id="regPageBtn">Not registered?</button>
    `
    document.querySelector("#regPageBtn").addEventListener("click", renderRegister)
    document.querySelector("button").addEventListener("click", async e => {

        const username = document.querySelector("#loginUsername").value;
        const password = document.querySelector("#loginPassword").value;

        let requestOptions = {
            method: "POST",
            headers: {"Content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify({
                username: username,
                password: password,
                action: "login"
            })
        };

        try{
            let request = new Request("php/api.php", requestOptions);
            const response = await fetch(request);
            let resource = await response.json();

            if(!response.ok) {
                main.querySelector(".userInfo").textContent = resource.message;
            } else {
                window.localStorage.setItem("userId", `${resource.id}`);
                window.localStorage.setItem("loggedIn", "true");   

                renderHomepage();
            }
    
        }catch(error){
            alert(`Something went wrong, ${error.message}`);
        }

    })
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

function renderIntroductionpage(){
    main.innerHTML = `
    <h1>Det har skett ett mord</h1>
    <button class="btnPlayAudio"><img src="media/playIcon.svg"></button>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac habitasse platea dictumst vestibulum rhoncus est. Vitae tortor condimentum lacinia quis vel eros donec. Tristique et egestas quis ipsum. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Curabitur vitae nunc sed velit dignissim sodales ut. Risus nullam eget felis eget nunc lobortis mattis aliquam. Venenatis a condimentum vitae sapien pellentesque. Mi eget mauris pharetra et ultrices neque ornare aenean euismod.  
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac habitasse platea dictumst vestibulum rhoncus est. Vitae tortor condimentum lacinia quis vel eros donec. Tristique et egestas quis ipsum. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Curabitur vitae nunc sed velit dignissim sodales ut. Risus nullam eget felis eget nunc lobortis mattis aliquam. Venenatis a condimentum vitae sapien pellentesque. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. </p>
    <button class="btnNextPage">Nästa</button>
    `;

    main.querySelector(".btnNextPage").addEventListener("click", renderMap);
}

function renderMap(){
    main.classList.add("mainMap");
    main.innerHTML=`
    <div class="pin hoock"></div>
    <div class="pin cruella"></div>
    <div class="pin princeJohn"></div>
    <div class="pin ursulla"></div>
    `;

    let charracters = ["Hoock", "Cruella", "Prince John", "Ursulla"];

    main.querySelectorAll(".pin").forEach(pin =>

        pin.addEventListener("click", e => {

            if(pin.classList.contains("selected")){
                pin.classList.remove("selected");
                document.querySelector(".popUp").remove();
            }else{
                if(document.querySelector(".popUp")){
                    document.querySelector(".popUp").remove();
                }

                main.querySelectorAll(".pin.selected").forEach(selectedPin => {
                    selectedPin.classList.remove("selected");
                });

                pin.classList.add("selected");
                let classList = pin.classList;
                let selectedCharracter;
               
    
                for (let i = 0; i < classList.length; i++) {
                    switch (classList[i]) {
                        case "hoock":
                            selectedCharracter = "Hoock";
                            break;
                        case "cruella":
                            selectedCharracter = "Cruella";
                            break;
                        case "princeJohn":
                            selectedCharracter = "Prince John";
                            break;
                        case "ursulla":
                            selectedCharracter = "Ursulla";
                            break;
                    }
                }
                
                let popUp = document.createElement("div");
                popUp.classList.add("popUp");
    
                popUp.innerHTML = `
                    <div>
                        <div class="charracterImage"></div>
                        <div class="charracterInfo">
                            <h3>${selectedCharracter}</h3>
                            <p>1000 1000</p>
                        </div>
                    </div>
                    <button class="btnTalkToCharracter">Talk to ${selectedCharracter}</button>
                `;
    
                main.appendChild(popUp);
                document.querySelector(".btnTalkToCharracter").addEventListener("click", e =>{
                    
                    main.classList.remove("mainMap");
                    main.innerHTML = `
                    <h2>Vilken färg är dörren? (blå)</h2>
                    <input>Svar</input>
                    <button class="btnUnlock">Lås upp</button>
                    `;
                
                    let input = main.querySelector("input");

                    main.querySelector(".btnUnlock").addEventListener("click", e =>{
                        let answer = input.value;
                        if(answer === "blå"){
                            renderCharracterPage(selectedCharracter)
                        }else{
                            console.log("Wrong answer");
                        }
                    })
                })
            }
        })    
    )
}


function renderCharracterPage(charracter){
    main.classList.remove("mainMap");
    main.innerHTML = `
    <div>
        <div class="charracterImage"></div>
        <div class="charracterInfo">
            <h2>${charracter}</h2>
            <p>Relationship to victim</p>
            <button class="btnPlayAudio"><img src="media/playIcon.svg"></button>
        </div>
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac habitasse platea dictumst vestibulum rhoncus est. Vitae tortor condimentum lacinia quis vel eros donec. Tristique et egestas quis ipsum. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Curabitur vitae nunc sed velit dignissim sodales ut. Risus nullam eget felis eget nunc lobortis mattis aliquam. Venenatis a condimentum vitae sapien pellentesque. Mi eget mauris pharetra et ultrices neque ornare aenean euismod.  </p>
    `;
}

