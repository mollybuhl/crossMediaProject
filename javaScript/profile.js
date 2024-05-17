
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
    <div class="editSection">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <mask id="mask0_526_382" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
        <rect width="24" height="24" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_526_382)">
        <path d="M6 22C5.45 22 4.97917 21.8042 4.5875 21.4125C4.19583 21.0208 4 20.55 4 20V10C4 9.45 4.19583 8.97917 4.5875 8.5875C4.97917 8.19583 5.45 8 6 8H7V6C7 4.61667 7.4875 3.4375 8.4625 2.4625C9.4375 1.4875 10.6167 1 12 1C13.3833 1 14.5625 1.4875 15.5375 2.4625C16.5125 3.4375 17 4.61667 17 6V8H18C18.55 8 19.0208 8.19583 19.4125 8.5875C19.8042 8.97917 20 9.45 20 10V20C20 20.55 19.8042 21.0208 19.4125 21.4125C19.0208 21.8042 18.55 22 18 22H6ZM6 20H18V10H6V20ZM12 17C12.55 17 13.0208 16.8042 13.4125 16.4125C13.8042 16.0208 14 15.55 14 15C14 14.45 13.8042 13.9792 13.4125 13.5875C13.0208 13.1958 12.55 13 12 13C11.45 13 10.9792 13.1958 10.5875 13.5875C10.1958 13.9792 10 14.45 10 15C10 15.55 10.1958 16.0208 10.5875 16.4125C10.9792 16.8042 11.45 17 12 17ZM9 8H15V6C15 5.16667 14.7083 4.45833 14.125 3.875C13.5417 3.29167 12.8333 3 12 3C11.1667 3 10.4583 3.29167 9.875 3.875C9.29167 4.45833 9 5.16667 9 6V8Z" fill="white" fill-opacity="0.9"/>
        </g>
        </svg>
        <p id="changePassword" class="edit">Ändra lösenord</p>
    </div>
    <div class="editSection">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <mask id="mask0_526_388" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
        <rect width="24" height="24" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_526_388)">
        <path d="M5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H12V5H5V19H12V21H5ZM16 17L14.625 15.55L17.175 13H9V11H17.175L14.625 8.45L16 7L21 12L16 17Z" fill="white" fill-opacity="0.9"/>
        </g>
        </svg>
        <p class="btnLogout edit">Logga ut</p>
    </div>    
    <hr>
    <div class="editSection">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <mask id="mask0_526_394" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
        <rect width="24" height="24" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_526_394)">
        <path d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z" fill="white" fill-opacity="0.9"/>
        </g>
        </svg>
        <p id="deleteAccount" class="edit">Radera konto</p>
    </div>    
    </div>
    `;

    // Render map on back button
    main.querySelector(".btnBack").addEventListener("click", renderMap);

    // Logout
    main.querySelector(".btnLogout").addEventListener("click", e => {

        window.localStorage.setItem("loggedIn", "false");
        window.localStorage.removeItem("userId");
        window.localStorage.removeItem("userPassword");
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
    
        <h2 class="profileHeader">Ändra ditt lösenord</h2>
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
        
        <h2 class="profileHeader">Radera konto</h2>
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

            // Ask to confirm delete account
            let popupBackground = document.createElement("div");
            popupBackground.classList.add("confirmActionPopupBackground");
            popupBackground.innerHTML = `
            <div class="deletePopup">
                <p>Är du säker på att du vill radera ditt konto?</p>
                <button class="yes">Ja</button>
            </div>
            `;
            main.appendChild(popupBackground);

            popupBackground.addEventListener("click", e => {
                // Check if the clicked element is not within the .innerbox
                if (!e.target.closest('.innerbox')) {
                    popupBackground.remove(); // Remove the popupBackground
                }
            });

            popupBackground.querySelector(".yes").addEventListener("click", async e => {
                popupBackground.remove();
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
                        window.localStorage.removeItem("userPassword");
                        window.localStorage.removeItem("firstControllQuestion");
                        window.localStorage.removeItem("musseVisited");
                        window.localStorage.removeItem("visited");
                        window.localStorage.removeItem("startTime");

                        renderStartpage();
                    }

                } catch (error) {
                    let message = "Något gick fel, försök igen senare";
                    informUser(message);
                    return;
                }
            })
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

