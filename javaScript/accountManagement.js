
function renderRegister(){

    main.innerHTML = `
    <h1>Registrera ditt konto</h1>
    <div class="input-field">
        <div class="input-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                <path d="M2.625 4.375C2.26406 4.375 1.96875 4.65625 1.96875 5V5.86328L9.04395 11.3945C9.89297 12.0586 11.1111 12.0586 11.9602 11.3945L19.0312 5.86328V5C19.0312 4.65625 18.7359 4.375 18.375 4.375H2.625ZM1.96875 8.28906V15C1.96875 15.3438 2.26406 15.625 2.625 15.625H18.375C18.7359 15.625 19.0312 15.3438 19.0312 15V8.28906L13.207 12.8438C11.632 14.0742 9.36387 14.0742 7.79297 12.8438L1.96875 8.28906ZM0 5C0 3.62109 1.17715 2.5 2.625 2.5H18.375C19.8229 2.5 21 3.62109 21 5V15C21 16.3789 19.8229 17.5 18.375 17.5H2.625C1.17715 17.5 0 16.3789 0 15V5Z" fill="#BCBCBC"/>
            </svg>
            <input type="text" id="registerUsername" placeholder="Användarnamn">
        </div>
        <div class="input-container">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">
                <g clip-path="url(#clip0_42_33)">
                    <path d="M5.78571 5.90625V7.875H12.2143V5.90625C12.2143 4.09336 10.7759 2.625 9 2.625C7.22411 2.625 5.78571 4.09336 5.78571 5.90625ZM3.21429 7.875V5.90625C3.21429 2.64551 5.8058 0 9 0C12.1942 0 14.7857 2.64551 14.7857 5.90625V7.875H15.4286C16.8469 7.875 18 9.05215 18 10.5V18.375C18 19.8229 16.8469 21 15.4286 21H2.57143C1.15313 21 0 19.8229 0 18.375V10.5C0 9.05215 1.15313 7.875 2.57143 7.875H3.21429Z" fill="#BCBCBC"/>
                </g>
                <defs>
                    <clipPath id="clip0_42_33">
                        <rect width="18" height="21" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
            <input type="password" id="registerPassword" placeholder="Lösenord">
        </div>
        <div class="input-container">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">
                <g clip-path="url(#clip0_42_33)">
                    <path d="M5.78571 5.90625V7.875H12.2143V5.90625C12.2143 4.09336 10.7759 2.625 9 2.625C7.22411 2.625 5.78571 4.09336 5.78571 5.90625ZM3.21429 7.875V5.90625C3.21429 2.64551 5.8058 0 9 0C12.1942 0 14.7857 2.64551 14.7857 5.90625V7.875H15.4286C16.8469 7.875 18 9.05215 18 10.5V18.375C18 19.8229 16.8469 21 15.4286 21H2.57143C1.15313 21 0 19.8229 0 18.375V10.5C0 9.05215 1.15313 7.875 2.57143 7.875H3.21429Z" fill="#BCBCBC"/>
                </g>
                <defs>
                    <clipPath id="clip0_42_33">
                        <rect width="18" height="21" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
            <input type="password" id="confirmPassword" placeholder="Bekräfta lösenord">
        </div>

        <div class="selectProfilePic">
            <div class="mulan"></div>
            <div class="ariel"></div>
            <div class="belle"></div>
            <div class="rapunzel"></div>
            <div class="pluto"></div>
            <div class="edna"></div>
        </div>
    </div>

    <p class="userInfo"></p>
    <button id="regButton">Registrera</button>
    <p class="btnLoginPage">Har du redan ett konto? <span> Logga in</span></p>
    `;

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
                profilePic: selectedProfilePic,
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
                window.localStorage.setItem("userId", `${resource.id}`);
                window.localStorage.setItem("userPassword", `${resource.password}`);
                window.localStorage.setItem("loggedIn", "true");   
 
                renderInstructionpage();
            }
    
        }catch(error){
            alert(`Something went wrong, ${error.message}`);
        }

    })

}

function renderLogin(){

    main.innerHTML = `
    <h1>Login</h1>
    <div class="input-field" id="loginField">
    <div class="input-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                <path d="M2.625 4.375C2.26406 4.375 1.96875 4.65625 1.96875 5V5.86328L9.04395 11.3945C9.89297 12.0586 11.1111 12.0586 11.9602 11.3945L19.0312 5.86328V5C19.0312 4.65625 18.7359 4.375 18.375 4.375H2.625ZM1.96875 8.28906V15C1.96875 15.3438 2.26406 15.625 2.625 15.625H18.375C18.7359 15.625 19.0312 15.3438 19.0312 15V8.28906L13.207 12.8438C11.632 14.0742 9.36387 14.0742 7.79297 12.8438L1.96875 8.28906ZM0 5C0 3.62109 1.17715 2.5 2.625 2.5H18.375C19.8229 2.5 21 3.62109 21 5V15C21 16.3789 19.8229 17.5 18.375 17.5H2.625C1.17715 17.5 0 16.3789 0 15V5Z" fill="#BCBCBC"/>
            </svg>
            <input type="text" id="loginUsername" placeholder="Username">
            </div>
        <div class="input-container">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">
                <g clip-path="url(#clip0_42_33)">
                    <path d="M5.78571 5.90625V7.875H12.2143V5.90625C12.2143 4.09336 10.7759 2.625 9 2.625C7.22411 2.625 5.78571 4.09336 5.78571 5.90625ZM3.21429 7.875V5.90625C3.21429 2.64551 5.8058 0 9 0C12.1942 0 14.7857 2.64551 14.7857 5.90625V7.875H15.4286C16.8469 7.875 18 9.05215 18 10.5V18.375C18 19.8229 16.8469 21 15.4286 21H2.57143C1.15313 21 0 19.8229 0 18.375V10.5C0 9.05215 1.15313 7.875 2.57143 7.875H3.21429Z" fill="#BCBCBC"/>
                </g>
                <defs>
                    <clipPath id="clip0_42_33">
                        <rect width="18" height="21" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
            <input type="password" id="loginPassword" placeholder="Password">
            </div>
    </div>
    <p class="userInfo"></p>
    <button>Login</button>
    <p class="btnRegPage">Har du inget konto? <span>Registrera dig</span></button>
    `
    document.querySelector(".btnRegPage").addEventListener("click", renderRegister)
    document.querySelector("button").addEventListener("click", async e => {

        const username = document.querySelector("#loginUsername").value;
        const password = document.querySelector("#loginPassword").value;
        console.log("loging password: " + password);

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
                console.log("resource password: " + resource.password);
                window.localStorage.setItem("userId", `${resource.id}`);
                window.localStorage.setItem("userPassword", `${resource.password}`);
                window.localStorage.setItem("loggedIn", "true");   
 
                renderMap();
            }
    
        }catch(error){
            alert(`Something went wrong, ${error.message}`);
        }

    })
}
