
// Function to render registration page
function renderRegister(){

    main.innerHTML = `
    <h2>Registrera ditt konto</h2>
    <div class="input-field">
        <label for="registerUsername">Användarnamn</label>
        <input type="text" id="registerUsername">
        
        <label for="registerUsername">Lösenord</label>         
        <input type="password" id="registerPassword">

        <label for="registerUsername">Bekräfta lösenord</label>
        <input type="password" id="confirmPassword">

        <div class="selectProfilePic">
            <div class="mulan"></div>
            <div class="ariel"></div>
            <div class="belle"></div>
            <div class="rapunzel"></div>
            <div class="remi"></div>
            <div class="edna"></div>
        </div>
    </div>

    <p class="userInfo"></p>
    <button id="regButton">Registrera</button>
    <p class="btnLoginPage">Har du redan ett konto? <span> Logga in</span></p>
    `;

    // Selecting profile picture
    let selectedProfilePic = "none";
    document.querySelectorAll(".selectProfilePic > div").forEach(div => {
        div.addEventListener("click", e => {
            if(!div.classList.contains("selected")){
                document.querySelectorAll(".selectProfilePic > div.selected").forEach(selectedDiv => {
                    selectedDiv.classList.remove("selected");
                });
                selectedProfilePic = div.classList[0];
                div.classList.add("selected");
            }else{
                selectedProfilePic = "none";
                div.classList.remove("selected");
            }
        })
    })

    // Register user when called to action
    document.querySelector("#regButton").addEventListener("click", async e => {

        const username = document.querySelector("#registerUsername").value;
        const password = document.querySelector("#registerPassword").value;
        const confirmPassword = document.querySelector("#confirmPassword").value;

        let requestOptions = {
            method: "POST",
            headers: {"Content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify({
                username: username,
                password: password,
                confirmPassword: confirmPassword,
                profilePic: selectedProfilePic,
                action: "register"
            })
        };

        try{
            let request = new Request("php/api.php", requestOptions);
            const response = await fetch(request);
            let resource = await response.json();

            if(!response.ok) {
                // If unsuccessfull registration, inform user of error creating an account
                main.querySelector(".userInfo").textContent = resource.message;
            } else {
                // If successfull registration, save user credentials in local storage and render introduction page
                window.localStorage.setItem("userId", `${resource.id}`);
                window.localStorage.setItem("userPassword", `${resource.password}`);
                window.localStorage.setItem("loggedIn", "true");   
 
                renderInstructionpage();
            }
    
        }catch(error){
            let message = "Något gick fel, försök igen senare";
            informUser(message);
            return;
        }

    });

    // Render login if user already has an account
    document.querySelector(".btnLoginPage").addEventListener("click", renderLogin)
}

// Function to render login page
function renderLogin(){

    main.innerHTML = `
    <h2>Login</h2>
    <div class="input-field" id="loginField">
        <label for="loginUsername">Användarnamn</label>
        <input type="text" id="loginUsername">
    
        <label for="loginPassword">Lösenord</label>
        <input type="password" id="loginPassword">
    </div>
    <p class="userInfo"></p>
    <button>Login</button>
    <p class="btnRegPage">Har du inget konto? <span>Registrera dig</span></button>
    `;

    // Login user when called to action
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
                // If unsuccessfull user authorization, inform user of error
                main.querySelector(".userInfo").textContent = resource.message;
            } else {
                // If successfull user authorization, save user credentials in local storage and render game map
                window.localStorage.setItem("userId", `${resource.id}`);
                window.localStorage.setItem("userPassword", `${resource.password}`);
                window.localStorage.setItem("loggedIn", "true");   
 
                renderMap();
            }
    
        }catch(error){
            let message = "Något gick fel, försök igen senare";
            informUser(message);
            return;
        }
    })

    // Render registration page if user does not have an account already
    document.querySelector(".btnRegPage").addEventListener("click", renderRegister);

}
