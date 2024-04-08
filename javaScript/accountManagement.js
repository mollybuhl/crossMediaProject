
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
