
// Function to render player profile page with account settings
async function renderProfilepage() {

    //Get player info
    let userID = Number(window.localStorage.getItem("userId"));
    let userPassword = window.localStorage.getItem("userPassword");
    let username;
    let profilePic;

    try {
        let request = new Request(`php/api.php?action=feed&userID=${userID}&userPassword=${userPassword}&action=getUserInfo`);
        let response = await fetch(request);
        let resource = await response.json();

        profilePic = resource.profilePic;
        username = resource.username;
    } catch (error) {
        let message = "Något gick fel, försök igen senare";
        informUser(message);
        return;
    }

    // Structure of main
    main.classList.remove("mainMap");
    main.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="btnBack">
        <mask id="mask0_183_79" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_183_79)">
            <path d="M7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11H20V13H7.825Z" fill="white"/>
        </g>
    </svg>
    <div class="profileInfoWrapper">
        <h2>${username}</h2>
        <div class="profilePic"></div>
    </div>
    <div class="selectProfilePic">
        <div class="mater"></div>
        <div class="joy"></div>
        <div class="baymax"></div>
        <div class="pascal"></div>
        <div class="remi"></div>
        <div class="edna"></div>
    </div>

    <div id="editProfile">
        <p id="changePassword">Ändra lösenord</p>
        <p class="btnLogout">Logga ut</p>
        <hr>
        <p id="deleteAccount">Radera konto</p>
    </div>
    `;

    // Render map on back button
    main.querySelector(".btnBack").addEventListener("click", renderMap);

    // Logout
    main.querySelector(".btnLogout").addEventListener("click", e => {

        window.localStorage.setItem("loggedIn", "false");
        window.localStorage.removeItem("userId");
        window.localStorage.removeItem("password");
        window.localStorage.removeItem("startTime");

        renderStartpage();
    });

    // Render change password view
    main.querySelector("#changePassword").addEventListener("click", event => {
        main.classList.remove("mainMap");
        main.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="btnBack">
            <mask id="mask0_183_79" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_183_79)">
                <path d="M7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11H20V13H7.825Z" fill="white"/>
            </g>
        </svg>
    
        <h2>Ändra ditt lösenord</h2>
        <div class="input-field">
            <div class="input-container">
                <label for="password">Nuvarande lösenord</label>
                <input type="password" id="password">
            </div>
            <div class="input-container">
                <label for="confirmPassword">Nytt lösenord</label>
                <input type="password" id="newPassword">
            </div>
            <p class="userFeedback"></p>
        </div>
        <button class="btnChangePassword">Byta lösenord</button>`;

        main.querySelector(".btnBack").addEventListener("click", renderProfilepage);

        // Call to change password
        main.querySelector(".btnChangePassword").addEventListener("click", async e => {

            const password = document.querySelector("#password").value;
            const newPassword = document.querySelector("#newPassword").value;

            let requestOptions = {
                method: "POST",
                headers: { "Content-type": "application/json; charset=UTF-8" },
                body: JSON.stringify({
                    userId: userID,
                    username: username,
                    password: password,
                    newPassword: newPassword,
                    action: "profile",
                    profileSetting: "changePassword"
                })
            };

            try {
                let request = new Request("php/api.php", requestOptions);
                const response = await fetch(request);
                let resource = await response.json();

                if (!response.ok) {
                    main.querySelector(".userFeedback").classList.add("bad");
                    main.querySelector(".userFeedback").textContent = resource.message;
                } else {
                    main.querySelector(".userFeedback").classList.add("good");
                    main.querySelector(".userFeedback").textContent = resource.message;
                    // Clear input 
                    document.querySelector("#password").value = "";
                    document.querySelector("#newPassword").value = "";

                    // Update password saved in local storage
                    window.localStorage.setItem("userPassword", `${newPassword}`);
                }

            } catch (error) {
                let message = "Något gick fel, försök igen senare";
                informUser(message);
                return;
            }
        })
    });

    // Render delete account view
    main.querySelector("#deleteAccount").addEventListener("click", event => {
        main.classList.remove("mainMap");
        main.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="btnBack">
        <mask id="mask0_183_79" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_183_79)">
            <path d="M7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11H20V13H7.825Z" fill="white"/>
        </g>
        </svg>
        
        <h2>Radera konto</h2>
        <div class="input-field">
            <div class="input-container">
                <label for="passwordForDelete">Ange lösenord</label>
                <input type="password" id="passwordForDelete">
            </div>
            <p class="userFeedback">Skriv in ditt lösenord för att kunna radera ditt nuvarande konto</p>
        </div>
        <button class="btnDeleteAccount">Radera konto</button>`;

        main.querySelector(".btnBack").addEventListener("click", renderProfilepage);

        // Delete account when call to action
        main.querySelector(".btnDeleteAccount").addEventListener("click", async e => {

            const password = document.querySelector("#passwordForDelete").value;

            let requestOptions = {
                method: "POST",
                headers: { "Content-type": "application/json; charset=UTF-8" },
                body: JSON.stringify({
                    userId: userID,
                    username: username,
                    password: password,
                    action: "profile",
                    profileSetting: "deleteAccount"
                })
            };

            try {
                let request = new Request("php/api.php", requestOptions);
                const response = await fetch(request);
                let resource = await response.json();

                if (!response.ok) {
                    main.querySelector(".userFeedback").classList.add("bad");
                    main.querySelector(".userFeedback").textContent = resource.message;
                } else {

                    // Logout user and render start page
                    window.localStorage.setItem("loggedIn", "false");
                    window.localStorage.removeItem("userId");
                    window.localStorage.removeItem("password");

                    renderStartpage();
                }

            } catch (error) {
                let message = "Något gick fel, försök igen senare";
                informUser(message);
                return;
            }
        });
    });


    // Set correct profile picture
    document.querySelector(".profilePic").classList.add(`${profilePic}`);
    main.querySelector(`.selectProfilePic > .${profilePic}`).classList.add("selected");

    // Change profile picture
    let charracters = ["mater", "joy", "baymax", "pascal", "remi", "edna"];

    main.querySelectorAll(".selectProfilePic > div").forEach(pic => {
        pic.addEventListener("click", async e => {
            if (!pic.classList.contains("selected")) {
                document.querySelectorAll(".selectProfilePic > div.selected").forEach(selectedDiv => {
                    selectedDiv.classList.remove("selected");
                });
                selectedProfilePic = pic.classList[0];
                pic.classList.add("selected");
                charracters.forEach(charracter => {
                    document.querySelector(".profilePic").classList.remove(`${charracter}`);
                })
                document.querySelector(".profilePic").classList.add(selectedProfilePic);

                //Save changes of profile pic
                let requestOptions = {
                    method: "POST",
                    headers: { "Content-type": "application/json; charset=UTF-8" },
                    body: JSON.stringify({
                        userId: userID,
                        username: username,
                        password: userPassword,
                        profilePic: selectedProfilePic,
                        action: "profile",
                        profileSetting: "profilePicture"
                    })
                };

                try {
                    let request = new Request("php/api.php", requestOptions);
                    const response = await fetch(request);
                    let resource = await response.json();

                    if (!response.ok) {
                        console.log("Din profilbild har inte ändrats");
                    } else {
                        console.log(resource.message);
                    }

                } catch (error) {
                    let message = "Något gick fel, försök igen senare";
                    informUser(message);
                    return;
                }
            }
        })
    })
}

