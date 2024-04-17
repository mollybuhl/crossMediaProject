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
    <h5>Ändra lösenord</h5>
    <h5 class="btnLogout">Logga ut</h5>
    <h5>Radera konto</h5>
    `;
    document.querySelector(".profilePic").classList.add(`${profilePic}`);
    main.querySelector(`.selectProfilePic > .${profilePic}`).classList.add("selected");

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
                        console.log(response);                    
                    } else {
                        console.log(response);  
                    }
            
                }catch(error){
                    alert(`Something went wrong, ${error.message}`);
                }
            }
        })
    })


    // Logout
    main.querySelector(".btnLogout").addEventListener("click", e => {
        window.localStorage.setItem("loggedIn", "false");
        window.localStorage.removeItem("userId");
        renderLogin();
    })
}