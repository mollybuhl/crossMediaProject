/*
    To Do:
    - Include feedback message to user in UI
*/

// Function to render player profile page with account settings
async function renderProfilepage(){

    //Get player info
    let userID = Number(window.localStorage.getItem("userId")); 
    let userPassword = window.localStorage.getItem("userPassword");
    let username;
    let profilePic;

    try{
        let request = new Request(`php/api.php?action=feed&userID=${userID}&userPassword=${userPassword}&action=getUserInfo`);
        let response = await fetch(request);
        let resource = await response.json();

        profilePic = resource.profilePic;
        username = resource.username;
    }catch(error){
        alert(`Something went wrong, ${error.message}`);
    }

    // Structure of main
    main.classList.remove("mainMap");
    main.innerHTML = `
    <div class="profileInfoWrapper">
        <h2>${username}</h2>
        <div class="profilePic"></div>
    </div>
    <div class="selectProfilePic">
        <div class="mulan"></div>
        <div class="ariel"></div>
        <div class="belle"></div>
        <div class="rapunzel"></div>
        <div class="pluto"></div>
        <div class="edna"></div>
    </div>

    <p>Ändra lösenord</p>
    <div class="input-container">
            <input type="password" id="password">
            <label for="password">Nuvarande lösenord</label>
    </div>
    <div class="input-container">
            <input type="password" id="newPassword">
            <label for="confirmPassword">Nytt lösenord</label>
    </div>
    <button class="btnChangePassword">Byta lösenord</button>

    <p class="btnLogout">Logga ut</p>
    <p>Radera konto</p>
    <div class="input-container">
            <input type="password" id="passwordForDelete">
            <label for="passwordForDelete">Ange lösenord</label>
    </div>
    <button class="btnDeleteAccount">Radera konto</button>
    `;

    // Set correct profile picture
    document.querySelector(".profilePic").classList.add(`${profilePic}`);
    main.querySelector(`.selectProfilePic > .${profilePic}`).classList.add("selected");

    // Change profile picture
    let charracters = ["mulan", "ariel", "belle", "rapunzel", "pluto", "edna"];

    main.querySelectorAll(".selectProfilePic > div").forEach(pic => {
        pic.addEventListener("click", async e => {
            if(!pic.classList.contains("selected")){
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
                    headers: {"Content-type": "application/json; charset=UTF-8"},
                    body: JSON.stringify({
                        userId: userID,
                        username: username,
                        password: userPassword,
                        profilePic: selectedProfilePic,
                        action: "profile",
                        profileSetting: "profilePicture"
                    })
                };

                try{
                    let request = new Request("php/api.php", requestOptions);
                    const response = await fetch(request);
                    let resource = await response.json();
        
                    if(!response.ok) {
                        console.log("Din profilbild har inte ändrats");                    
                    } else {
                        console.log(resource.message);  
                    }
            
                }catch(error){
                    alert(`Något gick fel, ${error.message}`);
                }
            }
        })
    })

    // Change password
    main.querySelector(".btnChangePassword").addEventListener("click", async e => {
        
        const password = document.querySelector("#password").value;
        const newPassword = document.querySelector("#newPassword").value;
        
        let requestOptions = {
            method: "POST",
            headers: {"Content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify({
                userId: userID,
                username: username,
                password: password,
                newPassword: newPassword,
                action: "profile",
                profileSetting: "changePassword"
            })
        };

        try{
            let request = new Request("php/api.php", requestOptions);
            const response = await fetch(request);
            let resource = await response.json();

            if(!response.ok) {
                console.log("Ditt lösenord har inte uppdaterats");                    
            } else {
                console.log(resource.message); 

                // Clear input 
                document.querySelector("#password").value = "";
                document.querySelector("#newPassword").value = ""; 

                // Update password saved in local storage
                window.localStorage.setItem("userPassword", `${newPassword}`);
            }
    
        }catch(error){
            alert(`Något gick fel, ${error.message}`);
        }
    })

    // Delete account
    main.querySelector(".btnDeleteAccount").addEventListener("click", async e => {

        const password = document.querySelector("#passwordForDelete").value;

        let requestOptions = {
            method: "POST",
            headers: {"Content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify({
                userId: userID,
                username: username,
                password: password,
                action: "profile",
                profileSetting: "deleteAccount"
            })
        }; 
        
        try{
            let request = new Request("php/api.php", requestOptions);
            const response = await fetch(request);
            let resource = await response.json();

            if(!response.ok) {
                console.log("Ditt konto har inte raderats");                    
            } else {
                console.log(resource.message);

                // Logout user and render start page
                window.localStorage.setItem("loggedIn", "false");
                window.localStorage.removeItem("userId");
                window.localStorage.removeItem("password");

                renderStartpage();
            }
    
        }catch(error){
            alert(`Något gick fel, ${error.message}`);
        }
    });

    // Logout
    main.querySelector(".btnLogout").addEventListener("click", e => {
        window.localStorage.setItem("loggedIn", "false");
        window.localStorage.removeItem("userId");
        window.localStorage.removeItem("password");

        renderStartpage();
    })

}