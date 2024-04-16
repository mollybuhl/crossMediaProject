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
    <div>
        <h2>${username}</h2>
        <div class="profilePic"></div>
    </div>
    <div class="selectProfilePic"></div>
    <p>Ändra lösenord</p>
    <p class="btnLogout">Logga ut</p>
    <p>Radera konto</p>
    `;

    // Logout
    main.querySelector(".btnLogout").addEventListener("click", e => {
        window.localStorage.setItem("loggedIn", "false");
        window.localStorage.removeItem("userId");
        renderLogin();
    })
}