
function renderRegister(){

    main.innerHTML = `
    <h1>Register</h1>
    <div id="registerField">
        <input type="text" id="registerUsername" placeholder="Användarnamn">
        <input type="password" id="registerPassword" placeholder="Lösenord">
        <input type="password" id="confirmPassword" placeholder="Bekräfta lösenord">
    </div>
    <p class="userInfo"></p>
    <button id="regButton">Registrera</button>
    <p class="btnLoginPage">Har du redan ett konto? <span> Logga in</span></p>
    `

    document.querySelector(".btnLoginPage").addEventListener("click", renderLogin)
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
        <input type="text" id="loginUsername" placeholder="Username">
        <input type="password" id="loginPassword" placeholder="Password">
    </div>
    <p class="userInfo"></p>
    <button>Login</button>
    <p class="btnRegPage">Har du inget konto? <span>Registrera dig</span></button>
    `
    document.querySelector(".btnRegPage").addEventListener("click", renderRegister)
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
